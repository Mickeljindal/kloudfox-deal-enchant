/**
 * Local markdown blog engine.
 *
 * Every `.md` file under `content/blog/` is picked up at build time via
 * Vite's `import.meta.glob`. Frontmatter is parsed with a minimal, browser-safe
 * parser (no gray-matter Buffer dependency).
 *
 * Frontmatter contract (all optional except title):
 *
 *   ---
 *   title:       "Article title"
 *   description: "Short summary, 140-180 chars ideal"
 *   date:        2026-07-05
 *   updated:     2026-07-05
 *   author:      "Kloudfox Team"
 *   category:    "Monitoring"
 *   tags:        ["uptime", "monitoring"]
 *   image:       "/og/post-slug.png"
 *   featured:    true
 *   ---
 */

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  category: string;
  tags: string[];
  image?: string;
  featured: boolean;
  content: string;
  readTime: string;
  wordCount: number;
}

const modules = import.meta.glob("/content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

/** Minimal YAML-ish frontmatter parser. Only supports the shapes we author. */
function parseFrontmatter(raw: string): { data: Record<string, unknown>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };

  const yaml = match[1];
  const body = match[2];
  const data: Record<string, unknown> = {};

  yaml.split(/\r?\n/).forEach((line) => {
    if (!line.trim() || line.trim().startsWith("#")) return;
    const idx = line.indexOf(":");
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    let value: string = line.slice(idx + 1).trim();

    // strip wrapping quotes
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    // arrays: ["a", "b"] or [a, b]
    if (value.startsWith("[") && value.endsWith("]")) {
      data[key] = value
        .slice(1, -1)
        .split(",")
        .map((s) =>
          s
            .trim()
            .replace(/^["']|["']$/g, ""),
        )
        .filter(Boolean);
      return;
    }

    // booleans
    if (value === "true" || value === "false") {
      data[key] = value === "true";
      return;
    }

    data[key] = value;
  });

  return { data, body };
}

function slugFromPath(path: string): string {
  const base = path.split("/").pop() ?? "";
  return base.replace(/\.md$/, "");
}

function computeReadTime(body: string): { readTime: string; wordCount: number } {
  const text = body.replace(/```[\s\S]*?```/g, " ").replace(/[#*_>`~[\]()!-]/g, " ");
  const words = text.split(/\s+/).filter(Boolean).length;
  const min = Math.max(1, Math.round(words / 220));
  return { readTime: `${min} min read`, wordCount: words };
}

function toPost(path: string, raw: string): BlogPost {
  const { data, body } = parseFrontmatter(raw);
  const slug = slugFromPath(path);
  const { readTime, wordCount } = computeReadTime(body);

  return {
    slug,
    title: (data.title as string) ?? slug,
    description: (data.description as string) ?? "",
    date: (data.date as string) ?? new Date().toISOString().slice(0, 10),
    updated: data.updated as string | undefined,
    author: (data.author as string) ?? "Kloudfox Team",
    category: (data.category as string) ?? "Monitoring",
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    image: data.image as string | undefined,
    featured: (data.featured as boolean) ?? false,
    content: body.trim(),
    readTime,
    wordCount,
  };
}

/** Every post, newest first. */
export const posts: BlogPost[] = Object.entries(modules)
  .map(([path, raw]) => toPost(path, raw))
  .sort((a, b) => (b.date < a.date ? -1 : 1));

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getFeaturedPost(): BlogPost | undefined {
  return posts.find((p) => p.featured) ?? posts[0];
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return posts.slice(0, limit);
  const scored = posts
    .filter((p) => p.slug !== slug)
    .map((p) => {
      const shared = p.tags.filter((t) => current.tags.includes(t)).length;
      const sameCategory = p.category === current.category ? 1 : 0;
      return { p, score: shared * 2 + sameCategory };
    })
    .sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.p);
}

export function getAllCategories(): Array<{ name: string; count: number }> {
  const map = new Map<string, number>();
  posts.forEach((p) => map.set(p.category, (map.get(p.category) ?? 0) + 1));
  return Array.from(map.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

export function getAllTags(): Array<{ name: string; count: number }> {
  const map = new Map<string, number>();
  posts.forEach((p) => p.tags.forEach((t) => map.set(t, (map.get(t) ?? 0) + 1)));
  return Array.from(map.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

/** Human-readable date formatter used by list + article. */
export function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}
