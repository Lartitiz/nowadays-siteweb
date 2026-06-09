import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export type ArticleBlock =
  | { type: "h1" | "h2" | "h3"; text: string }
  | { type: "p" | "quote"; text: string }
  | { type: "img"; src: string; alt: string }
  | { type: "button"; text: string; href: string };

export type ArticleListItem = {
  slug: string;
  title: string;
  excerpt: string | null;
  cover_url: string | null;
  cover_alt: string | null;
  author: string;
  published_at: string;
};

export type ArticleFull = ArticleListItem & {
  content: ArticleBlock[];
  seo_title: string | null;
  seo_description: string | null;
};

export const listArticles = createServerFn({ method: "GET" }).handler(
  async (): Promise<ArticleListItem[]> => {
    const { supabaseAdmin } = await import(
      "@/integrations/supabase/client.server"
    );
    const { data, error } = await supabaseAdmin
      .from("articles" as never)
      .select(
        "slug, title, excerpt, cover_url, cover_alt, author, published_at",
      )
      .order("published_at", { ascending: false });
    if (error) throw new Error(error.message);
    return (data ?? []) as unknown as ArticleListItem[];
  },
);

export const getArticleBySlug = createServerFn({ method: "GET" })
  .inputValidator((input) => z.object({ slug: z.string().min(1).max(200) }).parse(input))
  .handler(async ({ data }): Promise<ArticleFull | null> => {
    const { supabaseAdmin } = await import(
      "@/integrations/supabase/client.server"
    );
    const { data: row, error } = await supabaseAdmin
      .from("articles" as never)
      .select(
        "slug, title, excerpt, cover_url, cover_alt, author, published_at, content, seo_title, seo_description",
      )
      .eq("slug", data.slug)
      .maybeSingle();
    if (error) throw new Error(error.message);
    if (!row) return null;
    return row as unknown as ArticleFull;
  });
