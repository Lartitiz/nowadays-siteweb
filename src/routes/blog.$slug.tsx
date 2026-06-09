import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCtaSection } from "@/components/site/FinalCtaSection";
import { RichText } from "@/components/site/RichText";
import {
  getArticleBySlug,
  listArticles,
  type ArticleBlock,
  type ArticleFull,
} from "@/lib/articles.functions";

const articleQueryOptions = (slug: string) =>
  queryOptions({
    queryKey: ["article", slug],
    queryFn: () => getArticleBySlug({ data: { slug } }),
  });

const relatedQueryOptions = queryOptions({
  queryKey: ["articles", "list"],
  queryFn: () => listArticles(),
});

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ context, params }) => {
    const article = await context.queryClient.ensureQueryData(
      articleQueryOptions(params.slug),
    );
    if (!article) throw notFound();
    // Pré-charger la liste pour les "articles récents" (best effort)
    void context.queryClient.ensureQueryData(relatedQueryOptions);
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article as ArticleFull | undefined;
    if (!a) return { meta: [{ title: "Article — Nowadays" }] };
    const title = a.seo_title ?? `${a.title} — Nowadays`;
    const description = a.seo_description ?? a.excerpt ?? "";
    const meta = [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `/blog/${a.slug}` },
      { property: "article:published_time", content: a.published_at },
      { property: "article:author", content: a.author },
    ];
    if (a.cover_url) {
      meta.push({ property: "og:image", content: a.cover_url });
      meta.push({ name: "twitter:image", content: a.cover_url });
    }
    const articleSchema: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: a.title,
      description,
      datePublished: a.published_at,
      author: { "@type": "Person", name: a.author },
      publisher: {
        "@type": "Organization",
        name: "Nowadays Agency",
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": `/blog/${a.slug}` },
    };
    if (a.cover_url) articleSchema.image = a.cover_url;
    const breadcrumbs = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: a.title,
          item: `/blog/${a.slug}`,
        },
      ],
    };
    return {
      meta,
      links: [{ rel: "canonical", href: `/blog/${a.slug}` }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(articleSchema) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumbs) },
      ],
    };
  },
  errorComponent: ({ error }) => (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="font-serif text-4xl text-ink">Erreur de chargement</h1>
        <p className="mt-4 font-mono text-sm text-ink">{error.message}</p>
        <Link
          to="/blog"
          className="mt-8 inline-block font-mono text-sm uppercase tracking-[0.18em] text-rose-dark hover:text-bordeaux"
        >
          ← Retour au blog
        </Link>
      </section>
    </SiteLayout>
  ),
  notFoundComponent: () => (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="font-serif text-4xl text-ink">Article introuvable</h1>
        <Link
          to="/blog"
          className="mt-8 inline-block font-mono text-sm uppercase tracking-[0.18em] text-rose-dark hover:text-bordeaux"
        >
          ← Retour au blog
        </Link>
      </section>
    </SiteLayout>
  ),
  component: ArticlePage,
});

const MONTHS_FR = [
  "janvier", "février", "mars", "avril", "mai", "juin",
  "juillet", "août", "septembre", "octobre", "novembre", "décembre",
];

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return `${d.getDate()} ${MONTHS_FR[d.getMonth()]} ${d.getFullYear()}`;
}

function renderBlock(b: ArticleBlock, i: number) {
  if (b.type === "img") {
    return (
      <figure key={i} className="my-12 -mx-2 md:-mx-12">
        <img
          src={b.src}
          alt={b.alt}
          loading="lazy"
          className="w-full rounded-sm"
        />
        {b.alt && b.alt.trim() && (
          <figcaption className="mt-3 text-center font-mono text-xs uppercase tracking-[0.18em] text-rose-dark">
            {b.alt}
          </figcaption>
        )}
      </figure>
    );
  }
  if (b.type === "h2" || b.type === "h1") {
    return (
      <h2
        key={i}
        className="mt-16 mb-6 font-serif text-3xl md:text-5xl leading-[1.1] text-ink"
      >
        <RichText text={b.text} />
      </h2>
    );
  }
  if (b.type === "h3") {
    return (
      <h3
        key={i}
        className="mt-10 mb-4 font-serif text-xl md:text-2xl leading-[1.2] text-ink"
      >
        <RichText text={b.text} />
      </h3>
    );
  }
  if (b.type === "quote") {
    return (
      <blockquote
        key={i}
        className="my-10 border-l-2 border-rose-dark pl-6 font-serif text-2xl italic leading-snug text-ink md:text-3xl"
      >
        <RichText text={b.text} />
      </blockquote>
    );
  }
  if (b.type === "button") {
    return (
      <div key={i} className="my-10 flex justify-center">
        <a
          href={b.href}
          target={b.href.startsWith("http") ? "_blank" : undefined}
          rel={b.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="inline-flex items-center rounded-full bg-rose-dark px-8 py-4 font-mono text-sm uppercase tracking-[0.18em] text-cream transition-colors hover:bg-bordeaux"
        >
          {b.text}
        </a>
      </div>
    );
  }
  return (
    <p
      key={i}
      className="mt-5 whitespace-pre-line font-mono text-base leading-relaxed text-ink md:text-lg"
    >
      <RichText text={b.text} />
    </p>
  );
}

function ArticlePage() {
  const { slug } = Route.useParams();
  const { data: article } = useSuspenseQuery(articleQueryOptions(slug));
  const { data: allArticles } = useSuspenseQuery(relatedQueryOptions);

  if (!article) return null;

  const related = allArticles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 pt-16 pb-10 md:pt-24">
          <Link
            to="/blog"
            className="font-mono text-xs uppercase tracking-[0.22em] text-rose-dark hover:text-bordeaux"
          >
            ← Le blog
          </Link>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.22em] text-ink">
            {article.author} · {formatDate(article.published_at)}
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-[1.05] text-ink md:text-6xl lg:text-7xl">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Body */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 pb-24">
          {article.content.map(renderBlock)}
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-rose-light">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] text-ink">
              À <em>lire</em> aussi
            </h2>
            <div className="mt-12 grid gap-x-10 gap-y-16 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/blog/$slug"
                  params={{ slug: r.slug }}
                  className="group flex flex-col"
                >
                  {r.cover_url && (
                    <div className="aspect-[4/3] overflow-hidden bg-cream">
                      <img
                        src={r.cover_url}
                        alt={r.cover_alt ?? r.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <p className="mt-5 font-mono text-xs uppercase tracking-[0.22em] text-rose-dark">
                    {formatDate(r.published_at)}
                  </p>
                  <h3 className="mt-2 font-serif text-xl leading-tight text-ink md:text-2xl">
                    {r.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCtaSection />
    </SiteLayout>
  );
}
