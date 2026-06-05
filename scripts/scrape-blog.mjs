#!/usr/bin/env node
import { writeFileSync } from "node:fs";
import * as cheerio from "cheerio";

const ARTICLES = [
  { slug: "agence-communication-engagee", published_at: "2025-09-29" },
  { slug: "brand-content", published_at: "2025-08-20" },
  { slug: "vocabulaire-marketing-responsable", published_at: "2025-07-09" },
  { slug: "exemples-communication-mode", published_at: "2025-04-30" },
  { slug: "influence-ethique", published_at: "2025-02-20" },
  { slug: "communication-ethique", published_at: "2025-02-20" },
  { slug: "packagings-eco-responsable-mode", published_at: "2024-11-21" },
  { slug: "influence-recit-ecologie", published_at: "2023-03-11" },
  { slug: "creatrice-ethique-communication", published_at: "2022-02-06" },
  { slug: "influenceur-virtuel", published_at: "2021-02-18" },
  { slug: "communication-influence", published_at: "2020-10-10" },
  { slug: "visibilite-presse-partenariat", published_at: "2020-09-10" },
  { slug: "communication-durable", published_at: "2019-03-25" },
];

const BASE = "https://www.nowadaysagency.com/blog/";

// Newsletter promos and other non-article noise to filter out
const NOISE_PATTERNS = [
  /abonne-toi à ma newsletter/i,
  /recevoir nos conseils secrets/i,
  /zéro culpabilisation/i,
  /^communiquer autrement/i,
  /^si tu veux communiquer autrement/i,
];

function isNoise(text) {
  if (!text) return true;
  const t = text.trim();
  if (!t) return true;
  return NOISE_PATTERNS.some((re) => re.test(t));
}

function cleanImgUrl(u) {
  if (!u) return u;
  return u.split("?")[0];
}

function inlineMd($, el) {
  let out = "";
  $(el).contents().each((_, node) => {
    if (node.type === "text") {
      out += node.data;
    } else if (node.type === "tag") {
      const tag = node.name.toLowerCase();
      const inner = inlineMd($, node);
      if (tag === "br") out += "\n";
      else if (tag === "strong" || tag === "b") out += `**${inner}**`;
      else if (tag === "em" || tag === "i") out += `*${inner}*`;
      else if (tag === "a") {
        const href = $(node).attr("href") || "";
        out += `[${inner}](${href})`;
      } else out += inner;
    }
  });
  return out.replace(/\u00a0/g, " ").replace(/[ \t]+\n/g, "\n").trim();
}

function processHtmlBlock($, contentEl, blocks) {
  $(contentEl).children().each((_, child) => {
    const tag = child.name?.toLowerCase();
    if (!tag) return;
    if (tag === "h1" || tag === "h2") {
      const text = inlineMd($, child);
      if (text && !isNoise(text)) blocks.push({ type: "h2", text });
    } else if (tag === "h3" || tag === "h4") {
      const text = inlineMd($, child);
      if (text && !isNoise(text)) blocks.push({ type: "h3", text });
    } else if (tag === "blockquote") {
      const text = inlineMd($, child);
      if (text && !isNoise(text)) blocks.push({ type: "quote", text });
    } else if (tag === "p") {
      const text = inlineMd($, child);
      if (text && !isNoise(text)) blocks.push({ type: "p", text });
    } else if (tag === "ul" || tag === "ol") {
      $(child).children("li").each((__, li) => {
        const text = inlineMd($, li);
        if (text && !isNoise(text)) blocks.push({ type: "p", text: `• ${text}` });
      });
    } else if (tag === "div") {
      processHtmlBlock($, child, blocks);
    }
  });
}

async function scrape(slug) {
  const url = BASE + slug;
  const res = await fetch(url, {
    headers: { "user-agent": "Mozilla/5.0 NowadaysScraper" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} on ${url}`);
  const html = await res.text();
  const $ = cheerio.load(html);

  const title =
    $(".entry-title").first().text().trim() ||
    $('meta[property="og:title"]').attr("content") || "";

  const seo_description =
    $('meta[name="description"]').attr("content") ||
    $('meta[property="og:description"]').attr("content") || "";
  const seo_title = $('meta[property="og:title"]').attr("content") || title;

  let cover_url = $('meta[property="og:image"]').attr("content") || "";
  cover_url = cleanImgUrl(cover_url);
  const cover_alt = title;

  const root = $(".blog-item-content").first();

  const blocks = [];
  // Walk blocks in document order
  root.find(".sqs-block-html, .sqs-block-image").each((_, blk) => {
    const $blk = $(blk);
    const cls = $blk.attr("class") || "";
    if (cls.includes("sqs-block-image")) {
      const img = $blk.find("img").first();
      let src = img.attr("data-src") || img.attr("src") || "";
      src = cleanImgUrl(src);
      const alt = (img.attr("alt") || "").trim();
      if (src && !src.includes("transparent.png")) {
        blocks.push({ type: "img", src, alt });
      }
    } else if (cls.includes("sqs-block-html")) {
      const content = $blk.find(".sqs-html-content").first();
      if (content.length) processHtmlBlock($, content[0], blocks);
    }
  });

  // Excerpt: first non-empty short paragraph, or seo description
  let excerpt = seo_description;
  if (!excerpt) {
    const firstP = blocks.find((b) => b.type === "p");
    if (firstP) excerpt = firstP.text.replace(/[*_[\]()]/g, "").slice(0, 200);
  }

  return {
    slug,
    title,
    excerpt,
    cover_url,
    cover_alt,
    seo_title,
    seo_description,
    content: blocks,
  };
}

const out = [];
for (const a of ARTICLES) {
  process.stderr.write(`Scraping ${a.slug}...\n`);
  try {
    const data = await scrape(a.slug);
    out.push({ ...data, published_at: a.published_at });
    const counts = data.content.reduce((acc, b) => ({ ...acc, [b.type]: (acc[b.type] || 0) + 1 }), {});
    process.stderr.write(`  → ${data.content.length} blocks ${JSON.stringify(counts)} cover=${data.cover_url ? "ok" : "MISSING"}\n`);
  } catch (e) {
    process.stderr.write(`  ✗ ${e.message}\n`);
  }
}

writeFileSync("scripts/articles.json", JSON.stringify(out, null, 2));
process.stderr.write(`\nWrote ${out.length} articles to scripts/articles.json\n`);
