#!/usr/bin/env node
/**
 * Build-time sitemap generator.
 *
 * Emits public/sitemap.xml combining every static route from src/App.tsx with
 * every markdown post under content/blog/*.md.
 *
 * Run as a prebuild step (see package.json). Vite will then copy the generated
 * file from public/ into dist/ automatically.
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const BLOG_DIR = join(ROOT, "content", "blog");
const PUBLIC_DIR = join(ROOT, "public");
const OUT_PATH = join(PUBLIC_DIR, "sitemap.xml");

const SITE_URL = "https://kloudfox.com";

/** Static routes — keep in sync with src/App.tsx. */
const STATIC_ROUTES = [
  { path: "/", priority: "1.0", changefreq: "daily" },
  { path: "/about", priority: "0.7", changefreq: "monthly" },
  { path: "/pricing", priority: "0.9", changefreq: "weekly" },
  { path: "/contact", priority: "0.6", changefreq: "monthly" },
  { path: "/website-monitoring", priority: "0.9", changefreq: "monthly" },
  { path: "/ssl-monitoring", priority: "0.9", changefreq: "monthly" },
  { path: "/status-page", priority: "0.9", changefreq: "monthly" },
  { path: "/incident-management", priority: "0.9", changefreq: "monthly" },
  { path: "/integrations", priority: "0.8", changefreq: "monthly" },
  { path: "/blog", priority: "0.9", changefreq: "daily" },
  { path: "/terms-of-service", priority: "0.3", changefreq: "yearly" },
  { path: "/privacy-policy", priority: "0.3", changefreq: "yearly" },
  { path: "/cookie-policy", priority: "0.3", changefreq: "yearly" },
  { path: "/refund-policy", priority: "0.3", changefreq: "yearly" },
  { path: "/data-processing-agreement", priority: "0.3", changefreq: "yearly" },
];

function parseFrontmatterDate(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;
  const yaml = match[1];
  const dateLine = yaml.split(/\r?\n/).find((l) => l.trim().startsWith("date:"));
  if (!dateLine) return null;
  const value = dateLine.split(":").slice(1).join(":").trim().replace(/["']/g, "");
  return value || null;
}

async function collectBlogPosts() {
  if (!existsSync(BLOG_DIR)) return [];
  const files = (await readdir(BLOG_DIR)).filter((f) => f.endsWith(".md"));
  const out = [];
  for (const f of files) {
    const raw = await readFile(join(BLOG_DIR, f), "utf8");
    const slug = f.replace(/\.md$/, "");
    const date = parseFrontmatterDate(raw) ?? new Date().toISOString().slice(0, 10);
    out.push({ slug, date });
  }
  return out;
}

function xmlEscape(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

async function main() {
  const today = new Date().toISOString().slice(0, 10);
  const posts = await collectBlogPosts();

  const urls = [
    ...STATIC_ROUTES.map((r) => ({
      loc: `${SITE_URL}${r.path}`,
      lastmod: today,
      changefreq: r.changefreq,
      priority: r.priority,
    })),
    ...posts.map((p) => ({
      loc: `${SITE_URL}/blog/${p.slug}`,
      lastmod: p.date,
      changefreq: "monthly",
      priority: "0.7",
    })),
  ];

  const body = urls
    .map(
      (u) =>
        `  <url>\n    <loc>${xmlEscape(u.loc)}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;

  await writeFile(OUT_PATH, xml, "utf8");
  console.log(`sitemap.xml written with ${urls.length} URLs`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
