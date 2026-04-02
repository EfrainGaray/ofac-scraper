#!/usr/bin/env tsx
/**
 * ofac-scraper — Scrape the entire Open Finance Chile Confluence wiki.
 *
 * Features:
 *   - Fetches all 106+ pages via Confluence REST API v2 (no auth needed)
 *   - Converts Confluence storage format to clean Markdown
 *   - Downloads all attachments (images, JSON, Excel, PDF)
 *   - Preserves page hierarchy as directory structure
 *   - Links attachments in Markdown (relative paths)
 *   - Daily diff mode: detects new/modified/deleted pages
 *
 * Usage:
 *   tsx scrape.ts                      # full scrape
 *   tsx scrape.ts --diff               # only report changes since last run
 *   tsx scrape.ts --output ./data      # custom output dir
 */

import { writeFileSync, mkdirSync, readFileSync, existsSync, readdirSync, rmSync } from "node:fs";
import { join, dirname } from "node:path";
import { createHash } from "node:crypto";

// ── Config ────────────────────────────────────────────────────────────────────

const BASE_URL = "https://openfinancechile.atlassian.net/wiki";
const SPACE_ID = "12222464";
const SPACE_KEY = "OFAC";

const args = process.argv.slice(2);
const diffMode = args.includes("--diff");
const outputDir = (() => {
  const idx = args.indexOf("--output");
  return idx !== -1 && args[idx + 1] ? args[idx + 1] : "./data";
})();

const pagesDir = join(outputDir, "pages");
const attachDir = join(outputDir, "attachments");
const metaFile = join(outputDir, ".meta.json");

// ── Types ─────────────────────────────────────────────────────────────────────

interface PageInfo {
  id: string;
  title: string;
  parentId: string | null;
  version: number;
  updatedAt: string;
  bodyLength: number;
  slug: string;
  path: string;
}

interface Attachment {
  id: string;
  title: string;
  mediaType: string;
  fileSize: number;
  downloadLink: string;
  pageId: string;
}

interface ScrapeMetadata {
  scrapedAt: string;
  pageCount: number;
  attachmentCount: number;
  pages: Record<string, { version: number; hash: string; updatedAt: string }>;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function slugify(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.json() as Promise<T>;
}

async function fetchBinary(url: string): Promise<Buffer> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return Buffer.from(await res.arrayBuffer());
}

function md5(content: string): string {
  return createHash("md5").update(content).digest("hex");
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

// ── Confluence HTML → Markdown ────────────────────────────────────────────────

function confluenceToMarkdown(html: string, pageSlug: string): string {
  let md = html;

  // ── Attachment & image links (BEFORE stripping macros) ──────────────────

  // Pattern 1: ac:image with ri:attachment (most common)
  md = md.replace(
    /<ac:image[^>]*>[\s\S]*?<ri:attachment ri:filename="([^"]+)"[\s\S]*?<\/ac:image>/gi,
    (_, filename) => `![${filename}](../attachments/${pageSlug}/${encodeURIComponent(filename)})`,
  );

  // Pattern 2: ac:image with ri:filename directly (alternate format)
  md = md.replace(
    /<ac:image[^>]*>[\s\S]*?ri:filename="([^"]+)"[\s\S]*?<\/ac:image>/gi,
    (_, filename) => `![${filename}](../attachments/${pageSlug}/${encodeURIComponent(filename)})`,
  );

  // Pattern 3: ac:image with ri:url (external images)
  md = md.replace(
    /<ac:image[^>]*>[\s\S]*?<ri:url ri:value="([^"]+)"[^/]*\/>[\s\S]*?<\/ac:image>/gi,
    (_, url) => `![image](${url})`,
  );

  // Pattern 4: ac:link to attachment files (Excel, YAML, JSON, PDF)
  md = md.replace(
    /<ac:link>[\s\S]*?<ri:attachment ri:filename="([^"]+)"[\s\S]*?\/>[\s\S]*?(?:<ac:plain-text-link-body><!\[CDATA\[([^\]]*)\]\]><\/ac:plain-text-link-body>)?[\s\S]*?<\/ac:link>/gi,
    (_, filename, linkText) => `[${linkText || filename}](../attachments/${pageSlug}/${encodeURIComponent(filename)})`,
  );

  // Pattern 5: view-file-macro (embedded file viewers for Excel/PDF)
  md = md.replace(
    /<ac:structured-macro ac:name="view-file-macro"[^>]*>[\s\S]*?ri:filename="([^"]+)"[\s\S]*?<\/ac:structured-macro>/gi,
    (_, filename) => `📎 [${filename}](../attachments/${pageSlug}/${encodeURIComponent(filename)})`,
  );

  // Pattern 6: drawio diagrams
  md = md.replace(
    /<ac:structured-macro ac:name="drawio"[^>]*>[\s\S]*?<\/ac:structured-macro>/gi,
    "[📊 Drawio diagram — see attachments]",
  );

  // Links to other Confluence pages
  md = md.replace(
    /<ac:link>[\s\S]*?<ri:page ri:content-title="([^"]+)"[^/]*\/>[\s\S]*?(?:<ac:plain-text-link-body><!\[CDATA\[([^\]]*)\]\]><\/ac:plain-text-link-body>)?[\s\S]*?<\/ac:link>/gi,
    (_, title, linkText) => `[${linkText || title}](./${slugify(title)}.md)`,
  );

  // ── Remove remaining Confluence macros ─────────────────────────────────

  // Confluence status macros → bold badges
  md = md.replace(
    /<ac:structured-macro ac:name="status"[^>]*>[\s\S]*?<ac:parameter ac:name="title">([^<]*)<\/ac:parameter>[\s\S]*?<\/ac:structured-macro>/gi,
    "**[$1]**",
  );

  // Code blocks with language
  md = md.replace(
    /<ac:structured-macro ac:name="code"[^>]*>[\s\S]*?<ac:parameter ac:name="language">([^<]*)<\/ac:parameter>[\s\S]*?<ac:plain-text-body><!\[CDATA\[([\s\S]*?)\]\]><\/ac:plain-text-body>[\s\S]*?<\/ac:structured-macro>/gi,
    (_, lang, code) => `\n\`\`\`${lang}\n${code}\n\`\`\`\n`,
  );

  // Remove remaining structured macros (TOC, etc) AFTER extracting useful ones
  md = md.replace(/<ac:structured-macro[^>]*>[\s\S]*?<\/ac:structured-macro>/gi, "");
  md = md.replace(/<ac:parameter[^>]*>[\s\S]*?<\/ac:parameter>/gi, "");

  // Remaining CDATA code blocks without language
  md = md.replace(
    /<ac:plain-text-body><!\[CDATA\[([\s\S]*?)\]\]><\/ac:plain-text-body>/gi,
    (_, code) => `\n\`\`\`\n${code}\n\`\`\`\n`,
  );

  // Tables
  md = md.replace(/<table[^>]*>/gi, "\n");
  md = md.replace(/<\/table>/gi, "\n");
  md = md.replace(/<thead>/gi, "");
  md = md.replace(/<\/thead>/gi, "");
  md = md.replace(/<tbody>/gi, "");
  md = md.replace(/<\/tbody>/gi, "");
  md = md.replace(/<tr[^>]*>/gi, "| ");
  md = md.replace(/<\/tr>/gi, " |\n");
  md = md.replace(/<th[^>]*>/gi, "");
  md = md.replace(/<\/th>/gi, " | ");
  md = md.replace(/<td[^>]*>/gi, "");
  md = md.replace(/<\/td>/gi, " | ");

  // Add table separator after first row (heuristic)
  md = md.replace(/(\| [^\n]+ \|\n)(\| )/, (match, firstRow, nextStart) => {
    const cols = (firstRow.match(/\|/g) || []).length - 1;
    const sep = "| " + Array(cols).fill("---").join(" | ") + " |\n";
    return firstRow + sep + nextStart;
  });

  // Headers
  md = md.replace(/<h1[^>]*>/gi, "\n# ");
  md = md.replace(/<\/h1>/gi, "\n");
  md = md.replace(/<h2[^>]*>/gi, "\n## ");
  md = md.replace(/<\/h2>/gi, "\n");
  md = md.replace(/<h3[^>]*>/gi, "\n### ");
  md = md.replace(/<\/h3>/gi, "\n");
  md = md.replace(/<h4[^>]*>/gi, "\n#### ");
  md = md.replace(/<\/h4>/gi, "\n");
  md = md.replace(/<h5[^>]*>/gi, "\n##### ");
  md = md.replace(/<\/h5>/gi, "\n");
  md = md.replace(/<h6[^>]*>/gi, "\n###### ");
  md = md.replace(/<\/h6>/gi, "\n");

  // Lists
  md = md.replace(/<ul[^>]*>/gi, "\n");
  md = md.replace(/<\/ul>/gi, "\n");
  md = md.replace(/<ol[^>]*>/gi, "\n");
  md = md.replace(/<\/ol>/gi, "\n");
  md = md.replace(/<li[^>]*>/gi, "- ");
  md = md.replace(/<\/li>/gi, "\n");

  // Bold, italic, code
  md = md.replace(/<strong[^>]*>/gi, "**");
  md = md.replace(/<\/strong>/gi, "**");
  md = md.replace(/<em[^>]*>/gi, "*");
  md = md.replace(/<\/em>/gi, "*");
  md = md.replace(/<code[^>]*>/gi, "`");
  md = md.replace(/<\/code>/gi, "`");

  // Links
  md = md.replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, "[$2]($1)");

  // Line breaks and paragraphs
  md = md.replace(/<br\s*\/?>/gi, "\n");
  md = md.replace(/<p[^>]*>/gi, "\n");
  md = md.replace(/<\/p>/gi, "\n");
  md = md.replace(/<hr[^>]*>/gi, "\n---\n");

  // Blockquotes (Confluence panels/info/warning)
  md = md.replace(/<ac:structured-macro ac:name="(info|note|warning|tip)"[^>]*>[\s\S]*?<ac:rich-text-body>([\s\S]*?)<\/ac:rich-text-body>[\s\S]*?<\/ac:structured-macro>/gi,
    (_, type, content) => `\n> **${type.toUpperCase()}:** ${content.replace(/<[^>]+>/g, "").trim()}\n`,
  );

  // Strip remaining HTML tags
  md = md.replace(/<[^>]+>/g, "");

  // Decode HTML entities
  md = md.replace(/&amp;/g, "&");
  md = md.replace(/&lt;/g, "<");
  md = md.replace(/&gt;/g, ">");
  md = md.replace(/&quot;/g, '"');
  md = md.replace(/&#39;/g, "'");
  md = md.replace(/&nbsp;/g, " ");

  // Clean up whitespace
  md = md.replace(/\n{3,}/g, "\n\n");
  md = md.trim();

  return md;
}

// ── Fetch all pages ───────────────────────────────────────────────────────────

async function fetchAllPages(): Promise<PageInfo[]> {
  const pages: PageInfo[] = [];
  let cursor: string | null = null;

  while (true) {
    const url = `${BASE_URL}/api/v2/spaces/${SPACE_ID}/pages?limit=250&status=current&sort=id${cursor ? `&cursor=${cursor}` : ""}`;
    const data = await fetchJson<{
      results: Array<{
        id: string;
        title: string;
        parentId: string | null;
        version: { number: number; createdAt: string };
      }>;
      _links: { next?: string };
    }>(url);

    for (const p of data.results) {
      const slug = slugify(p.title);
      pages.push({
        id: p.id,
        title: p.title,
        parentId: p.parentId,
        version: p.version.number,
        updatedAt: p.version.createdAt,
        bodyLength: 0,
        slug,
        path: "", // filled after hierarchy resolution
      });
    }

    if (!data._links.next) break;
    const nextUrl = new URL(data._links.next, BASE_URL);
    cursor = nextUrl.searchParams.get("cursor");
    if (!cursor) break;
  }

  return pages;
}

// ── Build hierarchy paths ─────────────────────────────────────────────────────

function buildPaths(pages: PageInfo[]): void {
  const byId = new Map(pages.map((p) => [p.id, p]));

  for (const page of pages) {
    const parts: string[] = [];
    let current: PageInfo | undefined = page;
    while (current) {
      parts.unshift(current.slug);
      current = current.parentId ? byId.get(current.parentId) : undefined;
    }
    page.path = parts.join("/");
  }
}

// ── Fetch page body ───────────────────────────────────────────────────────────

async function fetchPageBody(pageId: string): Promise<string> {
  const data = await fetchJson<{
    body?: { storage?: { value?: string } };
  }>(`${BASE_URL}/api/v2/pages/${pageId}?body-format=storage`);
  return data.body?.storage?.value ?? "";
}

// ── Fetch attachments for a page ──────────────────────────────────────────────

async function fetchAttachments(pageId: string): Promise<Attachment[]> {
  const attachments: Attachment[] = [];
  let cursor: string | null = null;

  while (true) {
    const url = `${BASE_URL}/api/v2/pages/${pageId}/attachments?limit=50${cursor ? `&cursor=${cursor}` : ""}`;
    const data = await fetchJson<{
      results: Array<{
        id: string;
        title: string;
        mediaType: string;
        fileSize: number;
        downloadLink: string;
      }>;
      _links: { next?: string };
    }>(url);

    for (const a of data.results) {
      attachments.push({ ...a, pageId });
    }

    if (!data._links.next) break;
    const nextUrl = new URL(data._links.next, BASE_URL);
    cursor = nextUrl.searchParams.get("cursor");
    if (!cursor) break;
  }

  return attachments;
}

// ── Download attachment ───────────────────────────────────────────────────────

async function downloadAttachment(att: Attachment, pageSlug: string): Promise<void> {
  const dir = join(attachDir, pageSlug);
  const filePath = join(dir, att.title);

  if (existsSync(filePath)) return; // skip if already downloaded

  mkdirSync(dir, { recursive: true });
  const url = `${BASE_URL}${att.downloadLink}`;
  const buffer = await fetchBinary(url);
  writeFileSync(filePath, buffer);
}

// ── Load previous metadata ────────────────────────────────────────────────────

function loadPreviousMeta(): ScrapeMetadata | null {
  if (!existsSync(metaFile)) return null;
  try {
    return JSON.parse(readFileSync(metaFile, "utf-8")) as ScrapeMetadata;
  } catch {
    return null;
  }
}

// ── Diff report ───────────────────────────────────────────────────────────────

function generateDiffReport(
  prev: ScrapeMetadata | null,
  pages: PageInfo[],
  bodyMap: Map<string, string>,
): string {
  if (!prev) return "First run — no previous data to compare.\n";

  const lines: string[] = [];
  const prevPages = prev.pages;
  const now = new Date().toISOString().slice(0, 10);

  // New pages
  const newPages = pages.filter((p) => !(p.id in prevPages));
  if (newPages.length > 0) {
    lines.push(`## New pages (${newPages.length})`);
    for (const p of newPages) lines.push(`- **${p.title}**`);
    lines.push("");
  }

  // Modified pages
  const modified = pages.filter((p) => {
    const old = prevPages[p.id];
    if (!old) return false;
    const body = bodyMap.get(p.id) ?? "";
    return old.version !== p.version || old.hash !== md5(body);
  });
  if (modified.length > 0) {
    lines.push(`## Modified pages (${modified.length})`);
    for (const p of modified) {
      lines.push(`- **${p.title}** (v${prevPages[p.id]!.version} → v${p.version})`);
    }
    lines.push("");
  }

  // Deleted pages
  const currentIds = new Set(pages.map((p) => p.id));
  const deleted = Object.keys(prevPages).filter((id) => !currentIds.has(id));
  if (deleted.length > 0) {
    lines.push(`## Deleted pages (${deleted.length})`);
    for (const id of deleted) lines.push(`- ID: ${id}`);
    lines.push("");
  }

  if (lines.length === 0) {
    return `No changes detected since last scrape (${prev.scrapedAt}).\n`;
  }

  return `# Changes detected — ${now}\n\nCompared to: ${prev.scrapedAt}\n\n${lines.join("\n")}`;
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`\n📥 Open Finance Chile Wiki Scraper`);
  console.log(`   Space: OFAC (Finanzas Abiertas Chile)`);
  console.log(`   Output: ${outputDir}`);
  console.log(`   Mode: ${diffMode ? "diff only" : "full scrape"}\n`);

  // 1. Fetch page list
  console.log("1/5 Fetching page list...");
  const pages = await fetchAllPages();
  buildPaths(pages);
  console.log(`   Found ${pages.length} pages\n`);

  // 2. Load previous metadata for diff
  const prevMeta = loadPreviousMeta();

  // 3. Fetch bodies
  console.log("2/5 Fetching page bodies...");
  mkdirSync(pagesDir, { recursive: true });
  mkdirSync(attachDir, { recursive: true });

  const bodyMap = new Map<string, string>();
  let processed = 0;

  for (const page of pages) {
    const body = await fetchPageBody(page.id);
    bodyMap.set(page.id, body);
    page.bodyLength = body.length;
    processed++;
    if (processed % 20 === 0 || processed === pages.length) {
      process.stdout.write(`   ${processed}/${pages.length} pages fetched\r`);
    }
    await sleep(100); // rate limit: ~10 req/s
  }
  console.log(`\n   All ${pages.length} bodies fetched\n`);

  // 4. Diff report
  const diffReport = generateDiffReport(prevMeta, pages, bodyMap);
  const diffFile = join(outputDir, "CHANGES.md");
  writeFileSync(diffFile, diffReport);
  console.log("3/5 Diff report:");
  console.log(diffReport);

  if (diffMode) {
    // Save updated metadata even in diff mode
    saveMeta(pages, bodyMap);
    console.log("Done (diff mode — no files written).");
    return;
  }

  // 5. Convert to markdown and save
  console.log("4/5 Converting to Markdown and downloading attachments...");
  let totalAttachments = 0;

  for (const page of pages) {
    const body = bodyMap.get(page.id) ?? "";
    const markdown = confluenceToMarkdown(body, page.slug);

    // Build page markdown with frontmatter
    const frontmatter = [
      "---",
      `title: "${page.title.replace(/"/g, '\\"')}"`,
      `id: "${page.id}"`,
      `version: ${page.version}`,
      `updated: "${page.updatedAt}"`,
      `path: "${page.path}"`,
      "---",
      "",
    ].join("\n");

    // Fetch and download attachments
    const attachments = await fetchAttachments(page.id);
    for (const att of attachments) {
      try {
        await downloadAttachment(att, page.slug);
        totalAttachments++;
      } catch (err) {
        console.error(`   ⚠ Failed: ${att.title} — ${err}`);
      }
    }

    // Build attachments section at the bottom of each page
    let attachmentSection = "";
    if (attachments.length > 0) {
      const icons: Record<string, string> = {
        "image/png": "🖼️", "image/jpeg": "🖼️", "image/gif": "🖼️", "image/svg+xml": "🖼️",
        "application/json": "📋", "application/pdf": "📄",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "📊",
        "application/vnd.ms-excel": "📊",
        "application/yaml": "📝", "text/yaml": "📝",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation": "📊",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "📝",
        "text/html": "🌐", "application/zip": "📦",
        "application/x-x509-ca-cert": "🔐", "application/x-pem-file": "🔐",
        "application/x-sh": "⚙️",
      };
      attachmentSection = "\n\n---\n\n## Attachments\n\n";
      for (const att of attachments) {
        const icon = icons[att.mediaType] ?? "📎";
        const sizeKB = Math.round(att.fileSize / 1024);
        const link = `../attachments/${page.slug}/${encodeURIComponent(att.title)}`;
        attachmentSection += `- ${icon} [${att.title}](${link}) (${sizeKB} KB)\n`;
      }
    }

    const fullMd = frontmatter + `# ${page.title}\n\n` + markdown + attachmentSection;

    // Save markdown
    const mdPath = join(pagesDir, `${page.path}.md`);
    mkdirSync(dirname(mdPath), { recursive: true });
    writeFileSync(mdPath, fullMd);

    await sleep(50);
  }

  console.log(`   ${pages.length} pages saved, ${totalAttachments} attachments downloaded\n`);

  // 6. Create index
  console.log("5/5 Creating index...");
  const indexLines = [
    "# Open Finance Chile — Wiki Mirror",
    "",
    `Scraped: ${new Date().toISOString()}`,
    `Pages: ${pages.length}`,
    `Attachments: ${totalAttachments}`,
    "",
    "## Pages",
    "",
  ];

  // Group by top-level parent
  const rootPages = pages.filter((p) => p.parentId === null || p.parentId === pages[0]?.id);
  const byParent = new Map<string, PageInfo[]>();
  for (const p of pages) {
    const parent = p.parentId ?? "root";
    if (!byParent.has(parent)) byParent.set(parent, []);
    byParent.get(parent)!.push(p);
  }

  function renderTree(parentId: string, depth: number) {
    const children = byParent.get(parentId) ?? [];
    for (const child of children) {
      const indent = "  ".repeat(depth);
      indexLines.push(`${indent}- [${child.title}](pages/${child.path}.md)`);
      renderTree(child.id, depth + 1);
    }
  }

  renderTree(pages[0]?.id ?? "root", 0);

  writeFileSync(join(outputDir, "INDEX.md"), indexLines.join("\n"));

  // 7. Save metadata
  saveMeta(pages, bodyMap);

  console.log(`\n✅ Done! Output in ${outputDir}/`);
  console.log(`   INDEX.md — page tree with links`);
  console.log(`   CHANGES.md — diff from last run`);
  console.log(`   pages/ — ${pages.length} markdown files`);
  console.log(`   attachments/ — ${totalAttachments} files\n`);
}

function saveMeta(pages: PageInfo[], bodyMap: Map<string, string>) {
  const meta: ScrapeMetadata = {
    scrapedAt: new Date().toISOString(),
    pageCount: pages.length,
    attachmentCount: 0,
    pages: {},
  };
  for (const p of pages) {
    meta.pages[p.id] = {
      version: p.version,
      hash: md5(bodyMap.get(p.id) ?? ""),
      updatedAt: p.updatedAt,
    };
  }
  writeFileSync(metaFile, JSON.stringify(meta, null, 2));
}

main().catch((err) => {
  console.error("Scraper failed:", err);
  process.exit(1);
});
