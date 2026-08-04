import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE_ORIGIN } from "@/lib/site";

const BASE_URL = SITE_ORIGIN;

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const STATIC_ENTRIES: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/accompagnement-communication", changefreq: "monthly", priority: "0.9" },
  { path: "/cooperative-asso", changefreq: "monthly", priority: "0.9" },
  { path: "/creatrices-ethiques", changefreq: "monthly", priority: "0.8" },
  { path: "/demarche-ethique", changefreq: "monthly", priority: "0.7" },
  { path: "/manifeste", changefreq: "monthly", priority: "0.7" },
  { path: "/etudes-de-cas-pro", changefreq: "monthly", priority: "0.8" },
  { path: "/blog", changefreq: "weekly", priority: "0.8" },
  { path: "/contact", changefreq: "yearly", priority: "0.7" },
  { path: "/guide-storytelling", changefreq: "monthly", priority: "0.7" },
  { path: "/formation-gratuite-instagram", changefreq: "monthly", priority: "0.7" },
  { path: "/template-branding", changefreq: "monthly", priority: "0.7" },
  { path: "/mentions-legales", changefreq: "yearly", priority: "0.2" },
  { path: "/confidentialite", changefreq: "yearly", priority: "0.2" },
];

const CASE_STUDY_SLUGS = [
  "atelier-des-lunettes",
  "black-stallion-trading",
  "clip-it",
  "cooperative-oasis",
  "elvezia",
  "emmaus-defi",
  "ensad",
  "fat-moose",
  "flanelle",
  "jean-belgueule",
  "l214",
  "my-pilates-world",
  "okahina-wave",
  "ombeline-mares",
  "religion-clothing",
  "ressources",
  "sea-shepherd",
  "still-nordic",
];

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const { supabaseAdmin } = await import(
          "@/integrations/supabase/client.server"
        );

        const entries: SitemapEntry[] = [...STATIC_ENTRIES];

        for (const slug of CASE_STUDY_SLUGS) {
          entries.push({
            path: `/etudes/${slug}`,
            changefreq: "yearly",
            priority: "0.7",
          });
        }

        try {
          const { data } = await supabaseAdmin
            .from("articles" as never)
            .select("slug, updated_at")
            .order("updated_at", { ascending: false });
          for (const row of (data ?? []) as Array<{ slug: string; updated_at: string }>) {
            entries.push({
              path: `/blog/${row.slug}`,
              lastmod: row.updated_at?.slice(0, 10),
              changefreq: "yearly",
              priority: "0.6",
            });
          }
        } catch {
          // Sitemap stays valid even if DB is unreachable.
        }

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${escapeXml(`${BASE_URL}${e.path}`)}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
