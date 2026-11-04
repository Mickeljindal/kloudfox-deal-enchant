#!/usr/bin/env node
/**
 * Rasterizes public/og/default.svg -> public/og/default.png at exactly 1200x630.
 *
 * Primary path: a headless Chromium/Chrome render. A real browser engine
 * rasterizes SVG <text> with the system fonts, which the sharp/resvg path
 * silently drops when fontconfig can't resolve a family. It also honours the
 * native viewBox so no crop/letterbox step is needed.
 *
 * Fallback: sharp (works everywhere sharp is installed, but text may be
 * missing if the platform has no matching fonts).
 *
 * Run: node scripts/generate-og.mjs
 */
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { readFile, writeFile, unlink } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(ROOT, "public", "og", "default.svg");
const OUT = join(ROOT, "public", "og", "default.png");
const WIDTH = 1200;
const HEIGHT = 630;

/** Find a Chrome/Chromium binary across platforms and env overrides. */
function findBrowser() {
  const candidates = [
    process.env.CHROME_PATH,
    process.env.PUPPETEER_EXECUTABLE_PATH,
    // macOS
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
    // Linux
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
  ].filter(Boolean);

  for (const p of candidates) {
    if (p && existsSync(p)) return p;
  }
  // Try PATH lookups as a last resort.
  for (const name of ["google-chrome", "chromium", "chromium-browser"]) {
    const which = spawnSync("which", [name], { encoding: "utf8" });
    if (which.status === 0 && which.stdout.trim()) return which.stdout.trim();
  }
  return null;
}

async function renderWithBrowser(browser, svg) {
  const html = `<!doctype html><html><head><meta charset="utf-8"><style>
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{width:${WIDTH}px;height:${HEIGHT}px;overflow:hidden;background:#04040c}
  svg{display:block;width:${WIDTH}px;height:${HEIGHT}px}
  </style></head><body>${svg}</body></html>`;

  const htmlPath = join(tmpdir(), `og-${Date.now()}.html`);
  await writeFile(htmlPath, html, "utf8");

  const args = [
    "--headless",
    "--disable-gpu",
    "--no-sandbox",
    "--hide-scrollbars",
    "--force-device-scale-factor=1",
    "--default-background-color=00000000",
    `--window-size=${WIDTH},${HEIGHT}`,
    "--run-all-compositor-stages-before-draw",
    "--virtual-time-budget=2000",
    `--screenshot=${OUT}`,
    `file://${htmlPath}`,
  ];

  const res = spawnSync(browser, args, { encoding: "utf8" });
  await unlink(htmlPath).catch(() => {});

  if (res.status !== 0 || !existsSync(OUT)) {
    throw new Error(
      `browser render failed (status ${res.status}): ${res.stderr || res.stdout || "no output"}`
    );
  }
}

async function renderWithSharp(svg) {
  const { default: sharp } = await import("sharp");
  const png = await sharp(svg, { density: 200 })
    .resize(WIDTH, HEIGHT, { fit: "cover" })
    .png({ quality: 90, compressionLevel: 9 })
    .toBuffer();
  await writeFile(OUT, png);
}

const svg = await readFile(SRC, "utf8");
const browser = findBrowser();

try {
  if (browser) {
    await renderWithBrowser(browser, svg);
    console.log(`og/default.png written via headless browser (${browser.split("/").pop()})`);
  } else {
    console.log("no Chrome/Chromium found — falling back to sharp");
    await renderWithSharp(svg);
    console.log("og/default.png written via sharp (text may be missing without matching fonts)");
  }
} catch (err) {
  console.warn(`primary render failed: ${err.message}`);
  console.log("falling back to sharp…");
  await renderWithSharp(svg);
  console.log("og/default.png written via sharp");
}
