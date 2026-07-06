#!/usr/bin/env node
/**
 * Daily blog post generator.
 *
 * Picks the next unused topic from content/topics.json and writes a markdown
 * post to content/blog/<slug>.md. Two modes:
 *
 *   AI mode  — set OPENAI_API_KEY or ANTHROPIC_API_KEY. The script asks the
 *              model to write a ~1200-1600 word post following the topic's
 *              outline and angle. Best quality.
 *
 *   Template mode — no key set. The script produces a solid, structured post
 *              from the topic metadata: intro, outlined sections with a few
 *              sentences each, and an FAQ. Good enough to keep the blog fresh;
 *              easy to hand-edit later.
 *
 * Safe to run repeatedly on the same day — skips silently if today's post for
 * the picked topic already exists.
 *
 * Invocation:
 *   node scripts/generate-daily-post.mjs
 *
 * Environment:
 *   OPENAI_API_KEY       (optional) OpenAI key. Uses gpt-4o-mini by default.
 *   OPENAI_MODEL         (optional) override, e.g. "gpt-4o".
 *   ANTHROPIC_API_KEY    (optional) Anthropic key. Uses claude-3-5-haiku by default.
 *   ANTHROPIC_MODEL      (optional) override.
 *   AUTHOR               (optional) override the author name.
 *   FORCE                (optional) "1" to publish even if a post exists today.
 */

import { readFile, writeFile, mkdir, access } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const TOPICS_PATH = join(ROOT, "content", "topics.json");
const BLOG_DIR = join(ROOT, "content", "blog");

const AUTHOR = process.env.AUTHOR ?? "Kloudfox Team";
const TODAY = new Date().toISOString().slice(0, 10);

/* -------------------------------------------------------------------------- */
/*  Topic queue                                                                */
/* -------------------------------------------------------------------------- */

async function loadTopics() {
  const raw = await readFile(TOPICS_PATH, "utf8");
  const parsed = JSON.parse(raw);
  const topics = Array.isArray(parsed.topics) ? parsed.topics : [];
  const used = new Set(Array.isArray(parsed.used) ? parsed.used : []);
  return { parsed, topics, used };
}

function pickNextTopic(topics, used) {
  for (const t of topics) {
    if (!used.has(t.slug)) return t;
  }
  return null;
}

async function saveTopics(parsed, updatedUsed) {
  parsed.used = Array.from(updatedUsed);
  await writeFile(TOPICS_PATH, JSON.stringify(parsed, null, 2) + "\n", "utf8");
}

/* -------------------------------------------------------------------------- */
/*  Model providers                                                            */
/* -------------------------------------------------------------------------- */

function buildPrompt(topic) {
  return [
    `You are a senior SRE and technical writer for Kloudfox, a website monitoring SaaS.`,
    `Write a ${TODAY}-dated blog post about the topic below.`,
    ``,
    `Title: ${topic.title}`,
    `Angle: ${topic.angle}`,
    `Category: ${topic.category}`,
    `Tags: ${(topic.tags || []).join(", ")}`,
    `Suggested outline (use as H2 headings, in order):`,
    ...(topic.outline || []).map((h) => `  - ${h}`),
    ``,
    `Constraints:`,
    `- 1200-1600 words. Practical, grounded, opinionated but honest.`,
    `- Second person ("you"), plain English, zero marketing fluff.`,
    `- Open with a two-line hook + a short **TL;DR** bold paragraph.`,
    `- Use H2 (##) for each outline heading exactly once, in order.`,
    `- End with a short "FAQ" H2 that has 3 short Q&A blocks.`,
    `- Reference Kloudfox naturally at most twice; do not oversell.`,
    `- Return ONLY the markdown body — no frontmatter, no code fence around the whole post.`,
  ].join("\n");
}

async function callOpenAI(topic) {
  const key = process.env.OPENAI_API_KEY;
  if (!key) return null;
  const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      temperature: 0.7,
      messages: [
        { role: "system", content: "You are a senior SRE and B2B technical writer. You write with clarity, restraint, and specific technical detail." },
        { role: "user", content: buildPrompt(topic) },
      ],
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error("OpenAI error:", res.status, detail.slice(0, 400));
    return null;
  }
  const data = await res.json();
  const content = data.choices?.[0]?.message?.content?.trim();
  return content || null;
}

async function callAnthropic(topic) {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return null;
  const model = process.env.ANTHROPIC_MODEL || "claude-3-5-haiku-latest";

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": key,
      "anthropic-version": "2023-06-01",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      max_tokens: 2400,
      temperature: 0.7,
      system: "You are a senior SRE and B2B technical writer. You write with clarity, restraint, and specific technical detail.",
      messages: [{ role: "user", content: buildPrompt(topic) }],
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error("Anthropic error:", res.status, detail.slice(0, 400));
    return null;
  }
  const data = await res.json();
  const content = (data.content?.[0]?.text ?? "").trim();
  return content || null;
}

/* -------------------------------------------------------------------------- */
/*  Template mode (no API key required)                                        */
/* -------------------------------------------------------------------------- */

function templateBody(topic) {
  const outline = topic.outline || [];
  const angle = topic.angle || "";
  const tags = (topic.tags || []).join(", ");

  const intro =
    `${angle} Below is a practical, honest walkthrough — no marketing gloss.\n\n` +
    `**TL;DR** — This post covers ${outline.length} concrete areas: ${outline
      .slice(0, 3)
      .join("; ")}${outline.length > 3 ? "; and more" : ""}. If you only skim, jump to the FAQ at the bottom for the shortest possible answers.\n`;

  const sections = outline
    .map((heading) => {
      // Short body per section. Templated to still read like a first draft you can
      // ship, edit, or replace when AI credits are available.
      return [
        `## ${heading}`,
        "",
        `Here's the shape of the problem. Teams often approach *${heading.toLowerCase()}* as a checklist item, ` +
          `and then discover the details matter more than the label. What follows is what we've learned from watching ` +
          `hundreds of monitored services in this space.`,
        "",
        `- Start with the smallest thing that produces signal.`,
        `- Instrument the boundary first, the internals second.`,
        `- Alert on sustained deviation, not single readings.`,
        `- Publish a short runbook alongside the alert so a sleepy engineer can act.`,
        "",
        `Every one of those bullets is a place teams commonly cut corners. Kloudfox ships defaults that make the ` +
          `right choice the easy one — but the pattern applies wherever your monitoring lives.`,
      ].join("\n");
    })
    .join("\n\n");

  const faq = [
    "## FAQ",
    "",
    `**Q: How does this apply to a small team?**`,
    `A: Pick the smallest version of the setup above. One or two monitors, one channel, a weekly review. Grow from there.`,
    "",
    `**Q: What's a common mistake in this area?**`,
    `A: Building for the ideal case instead of the tired-on-call case. The 3 a.m. version of the setup is the real one.`,
    "",
    `**Q: How does Kloudfox help specifically?**`,
    `A: The relevant primitives — probes, assertions, routing, and status transparency — ship on the free tier and scale linearly with your team.`,
  ].join("\n");

  return [intro, sections, faq, "", `<!-- generated: template mode, tags: ${tags} -->`].join("\n\n");
}

/* -------------------------------------------------------------------------- */
/*  Main                                                                       */
/* -------------------------------------------------------------------------- */

function frontmatter(topic) {
  const tags = JSON.stringify(topic.tags || []);
  return [
    "---",
    `title: ${JSON.stringify(topic.title)}`,
    `description: ${JSON.stringify(topic.description || "")}`,
    `date: ${TODAY}`,
    `updated: ${TODAY}`,
    `author: ${JSON.stringify(AUTHOR)}`,
    `category: ${JSON.stringify(topic.category || "Monitoring")}`,
    `tags: ${tags}`,
    "---",
    "",
  ].join("\n");
}

async function main() {
  if (!existsSync(TOPICS_PATH)) {
    console.error(`Topics file not found at ${TOPICS_PATH}`);
    process.exit(1);
  }
  await mkdir(BLOG_DIR, { recursive: true });

  const { parsed, topics, used } = await loadTopics();
  const topic = pickNextTopic(topics, used);

  if (!topic) {
    console.log("No unused topics left in queue. Add more to content/topics.json.");
    return;
  }

  const outPath = join(BLOG_DIR, `${topic.slug}.md`);
  if (existsSync(outPath) && process.env.FORCE !== "1") {
    console.log(`Post ${topic.slug} already exists. Marking as used and moving on.`);
    used.add(topic.slug);
    await saveTopics(parsed, used);
    return;
  }

  // Try providers in order of preference. Fall back to template.
  let body = await callAnthropic(topic);
  if (!body) body = await callOpenAI(topic);
  const mode = body ? "AI" : "template";
  if (!body) body = templateBody(topic);

  const output = frontmatter(topic) + "\n" + body.trim() + "\n";
  await writeFile(outPath, output, "utf8");

  used.add(topic.slug);
  await saveTopics(parsed, used);

  console.log(`[${mode}] published ${topic.slug} (${body.length} chars)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
