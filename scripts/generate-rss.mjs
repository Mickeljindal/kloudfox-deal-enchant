#!/usr/bin/env node
/**
 * Build-time RSS feed generator.
 *
 * Emits public/rss.xml from every markdown post under content/blog/*.md.
 * Post frontmatter is parsed lightly (same minimal YAML shape as src/lib/blog.ts).
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const BLOG_DIR = join(ROOT, "content", "blog");
const PUBLIC_DIR = join(ROOT, "public");
const OUT_PATH = join(PUBLIC_DIR, "rss.xml");

const SITE = {
  name: "Kloudfox",
  url: "https://kloudfox.com",
  description:
    "Deep-dive posts on website monitoring, uptime, SSL, incident response, and everything else your on-call rotation cares about.",
  language: "en-us",
};

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };
  const data = {};
  match[1].split(/\r?\n/).forEach((line) => {
    if (!line.trim()) return;
    const idx = line.indexOf(":");
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (value.startsWith("[") && value.endsWith("]")) {
      data[key] = value.slice(1, -1).split(",").map((s) => s.trim().replace(/^["']|["']$/g, "")).filter(Boolean);
      return;
    }
    data[key] = value;
  });
  return { data, body: match[2] };
}

function xmlEscape(s = "") {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function toRfc822(dateStr) {
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? new Date().toUTCString() : d.toUTCString();
}

async function main() {
  if (!existsSync(BLOG_DIR)) {
    console.log("No content/blog/ directory. Skipping RSS.");
    return;
  }

  const files = (await readdir(BLOG_DIR)).filter((f) => f.endsWith(".md"));
  const posts = [];
  for (const f of files) {
    const raw = await readFile(join(BLOG_DIR, f), "utf8");
    const { data } = parseFrontmatter(raw);
    posts.push({
      slug: f.replace(/\.md$/, ""),
      title: data.title ?? f,
      description: data.description ?? "",
      date: data.date ?? new Date().toISOString().slice(0, 10),
      author: data.author ?? "Kloudfox Team",
      category: data.category ?? "Monitoring",
    });
  }
  posts.sort((a, b) => (b.date < a.date ? -1 : 1));

  const now = new Date().toUTCString();
  const items = posts
    .map((p) => {
      const link = `${SITE.url}/blog/${p.slug}`;
      return [
        "    <item>",
        `      <title>${xmlEscape(p.title)}</title>`,
        `      <link>${link}</link>`,
        `      <guid isPermaLink="true">${link}</guid>`,
        `      <description>${xmlEscape(p.description)}</description>`,
        `      <pubDate>${toRfc822(p.date)}</pubDate>`,
        `      <dc:creator>${xmlEscape(p.author)}</dc:creator>`,
        `      <category>${xmlEscape(p.category)}</category>`,
        "    </item>",
      ].join("\n");
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${xmlEscape(SITE.name)}</title>
    <link>${SITE.url}</link>
    <atom:link href="${SITE.url}/rss.xml" rel="self" type="application/rss+xml"/>
    <description>${xmlEscape(SITE.description)}</description>
    <language>${SITE.language}</language>
    <lastBuildDate>${now}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  await writeFile(OUT_PATH, xml, "utf8");
  console.log(`rss.xml written with ${posts.length} items`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
