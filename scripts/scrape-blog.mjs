#!/usr/bin/env node
// Scrape blog articles from nowadaysagency.com and emit JSON ready for DB insert.
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

function inlineMd($, el) {
  // Convert HTML inline content to markdown-ish text used by RichText
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
      } else if (tag === "u") out += inner;
      else out += inner;
    }
  });
  return out.replace(/\u00a0/g, " ").trim();
}

function cleanImgUrl(u) {
  if (!u) return u;
  // strip Squarespace ?format= params that force tiny variants
  return u.split("?")[0];
}

async function scrape(slug) {
  const url = BASE + slug;
  const res = await fetch(url, {
    headers: { "user-agent": "Mozilla/5.0 NowadaysScraper" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} on ${url}`);
  const html = await res.text();
  const $ = cheerio.load(html);

  // Title — entry title
  const title =
    $(".entry-title").first().text().trim() ||
    $("h1.BlogItem-title").first().text().trim() ||
    $('meta[property="og:title"]').attr("content") ||
    "";

  // Excerpt — from meta description first
  const seo_description =
    $('meta[name="description"]').attr("content") ||
    $('meta[property="og:description"]').attr("content") ||
    "";
  const seo_title = $('meta[property="og:title"]').attr("content") || title;
  const excerpt = seo_description;

  // Cover — try post thumbnail first, fallback to og:image
  let cover_url =
    $(".BlogItem-meta-image img, .entry-image img, .BlogItem img.thumb-image")
      .first()
      .attr("data-src") ||
    $(".BlogItem-meta-image img, .entry-image img, .BlogItem img.thumb-image")
      .first()
      .attr("src") ||
    $('meta[property="og:image"]').attr("content") ||
    "";
  cover_url = cleanImgUrl(cover_url);
  const cover_alt = title;

  // Body — Squarespace puts blog body in .entry-content or .BlogItem-body
  const root =
    $(".entry-content").first().length
      ? $(".entry-content").first()
      : $(".BlogItem-body").first();

  const blocks = [];
  // Walk top-level Squarespace blocks
  root.find(".sqs-block").each((_, blk) => {
    const $blk = $(blk);
    const type = $blk.attr("data-block-type");

    if (type === "2") {
      // image block
      const img = $blk.find("img").first();
      let src = img.attr("data-src") || img.attr("src") || "";
      src = cleanImgUrl(src);
      const alt = (img.attr("alt") || "").trim();
      if (src) blocks.push({ type: "img", src, alt });
      return;
    }

    if (type === "8" || type === "39" || type === "44") {
      // html / markdown / quote block — walk children
      const html = $blk.find(".sqs-block-content").first();
      html.children().each((_, child) => {
        const tag = child.name?.toLowerCase();
        if (!tag) return;
        if (tag === "h1") {
          const text = inlineMd($, child);
          if (text) blocks.push({ type: "h2", text });
        } else if (tag === "h2") {
          const text = inlineMd($, child);
          if (text) blocks.push({ type: "h2", text });
        } else if (tag === "h3" || tag === "h4") {
          const text = inlineMd($, child);
          if (text) blocks.push({ type: "h3", text });
        } else if (tag === "blockquote") {
          const text = inlineMd($, child);
          if (text) blocks.push({ type: "quote", text });
        } else if (tag === "p") {
          const text = inlineMd($, child);
          if (text) blocks.push({ type: "p", text });
        } else if (tag === "ul" || tag === "ol") {
          // Render list items as paragraphs with bullets
          $(child).find("> li").each((__, li) => {
            const text = inlineMd($, li);
            if (text) blocks.push({ type: "p", text: `• ${text}` });
          });
        } else if (tag === "hr") {
          // skip
        } else if (tag === "div") {
          // unwrap one level
          $(child).children().each((__, sub) => {
            const subTag = sub.name?.toLowerCase();
            if (subTag === "p") {
              const text = inlineMd($, sub);
              if (text) blocks.push({ type: "p", text });
            } else if (subTag && /^h[1-4]$/.test(subTag)) {
              const text = inlineMd($, sub);
              if (text) blocks.push({ type: subTag === "h3" || subTag === "h4" ? "h3" : "h2", text });
            }
          });
        }
      });
      return;
    }

    if (type === "52") {
      // quote block
      const text = inlineMd($, $blk.find(".source, blockquote, .sqs-block-content p, .sqs-block-content").first()[0]);
      if (text) blocks.push({ type: "quote", text });
      return;
    }
  });

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
    process.stderr.write(`  → ${data.content.length} blocks, cover=${data.cover_url ? "ok" : "MISSING"}\n`);
  } catch (e) {
    process.stderr.write(`  ✗ ${e.message}\n`);
  }
}

writeFileSync("scripts/articles.json", JSON.stringify(out, null, 2));
process.stderr.write(`\nWrote ${out.length} articles to scripts/articles.json\n`);
