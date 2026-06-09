import { createFileRoute, Link } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FinalCtaSection } from "@/components/site/FinalCtaSection";
import { listArticles } from "@/lib/articles.functions";

const articlesQueryOptions = queryOptions({
  queryKey: ["articles", "list"],
  queryFn: () => listArticles(),
});

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Le blog — Nowadays | Communication éthique" },
      {
        name: "description",
        content:
          "Des conseils pratiques pour te faire connaître tout en respectant ton éthique. Stratégie, influence, branding, marketing responsable.",
      },
      { property: "og:title", content: "Le blog — Nowadays | Communication éthique" },
      {
        property: "og:description",
        content:
          "Des conseils pratiques pour te faire connaître tout en respectant ton éthique.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: "/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "/blog" },
          ],
        }),
      },
    ],
  }),
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(articlesQueryOptions),
  errorComponent: ({ error }) => (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="font-serif text-4xl text-ink">Impossible de charger les articles</h1>
        <p className="mt-4 font-mono text-sm text-ink">{error.message}</p>
      </section>
    </SiteLayout>
  ),
  notFoundComponent: () => (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="font-serif text-4xl text-ink">Aucun article</h1>
      </section>
    </SiteLayout>
  ),
  component: BlogPage,
});

const MONTHS_FR = [
  "janv.", "févr.", "mars", "avril", "mai", "juin",
  "juil.", "août", "sept.", "oct.", "nov.", "déc.",
];

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return `${d.getDate()} ${MONTHS_FR[d.getMonth()]} ${d.getFullYear()}`;
}

function BlogPage() {
  const { data: articles } = useSuspenseQuery(articlesQueryOptions);
  const [featured, ...rest] = articles;

  return (
    <SiteLayout>
      {/* Header */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-12 md:pt-28 md:pb-16">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-rose-dark">
            Journal
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-[1.05] text-ink md:text-6xl lg:text-7xl">
            Le <em className="text-rose-dark">blog</em>
          </h1>
          <p className="mt-8 max-w-2xl font-mono text-base text-ink md:text-lg">
            Des conseils pratiques pour te faire connaître tout en respectant
            ton éthique.
          </p>
        </div>
      </section>

      {/* Featured article */}
      {featured && (
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-6 pb-16">
            <Link
              to="/blog/$slug"
              params={{ slug: featured.slug }}
              className="group grid gap-10 md:grid-cols-2 md:gap-16"
            >
              {featured.cover_url && (
                <div className="aspect-[4/3] overflow-hidden bg-rose-light">
                  <img
                    src={featured.cover_url}
                    alt={featured.cover_alt ?? featured.title}
                    loading="eager"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex flex-col justify-center">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-rose-dark">
                  À la une · {formatDate(featured.published_at)}
                </p>
                <h2 className="mt-6 font-serif text-3xl leading-[1.1] text-ink md:text-5xl">
                  {featured.title}
                </h2>
                {featured.excerpt && (
                  <p className="mt-6 font-mono text-base leading-relaxed text-ink md:text-lg">
                    {featured.excerpt}
                  </p>
                )}
                <span className="mt-8 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.18em] text-rose-dark group-hover:text-bordeaux">
                  Lire la suite <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((a) => (
              <Link
                key={a.slug}
                to="/blog/$slug"
                params={{ slug: a.slug }}
                className="group flex flex-col"
              >
                {a.cover_url && (
                  <div className="aspect-[4/3] overflow-hidden bg-rose-light">
                    <img
                      src={a.cover_url}
                      alt={a.cover_alt ?? a.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <p className="mt-6 font-mono text-xs uppercase tracking-[0.22em] text-rose-dark">
                  {formatDate(a.published_at)} · {a.author}
                </p>
                <h3 className="mt-3 font-serif text-2xl leading-tight text-ink md:text-3xl">
                  {a.title}
                </h3>
                {a.excerpt && (
                  <p className="mt-3 line-clamp-3 font-mono text-sm leading-relaxed text-ink">
                    {a.excerpt}
                  </p>
                )}
                <span className="mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-rose-dark group-hover:text-bordeaux">
                  Lire la suite <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </SiteLayout>
  );
}
