import { createFileRoute, Link } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { DaLayout } from "@/components/da/DaLayout";
import { CtaFinal } from "@/components/da/CtaFinal";
import { VichyBand } from "@/components/da/VichyBand";
import { listArticles } from "@/lib/articles.functions";
import { absoluteUrl } from "@/lib/site";

const articlesQueryOptions = queryOptions({
  queryKey: ["articles", "list"],
  queryFn: () => listArticles(),
});

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Le blog | Nowadays | Communication éthique" },
      {
        name: "description",
        content:
          "Des conseils pratiques pour te faire connaître tout en respectant ton éthique. Stratégie, influence, branding, marketing responsable.",
      },
      { property: "og:title", content: "Le blog | Nowadays | Communication éthique" },
      {
        property: "og:description",
        content: "Des conseils pratiques pour te faire connaître tout en respectant ton éthique.",
      },
      { property: "og:url", content: absoluteUrl("/blog") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/blog") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Accueil",
              item: absoluteUrl("/"),
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Blog",
              item: absoluteUrl("/blog"),
            },
          ],
        }),
      },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(articlesQueryOptions),
  errorComponent: ({ error }) => (
    <DaLayout>
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="font-titre text-4xl text-encre">Impossible de charger les articles</h1>
        <p className="mt-4 text-sm text-encre">{error.message}</p>
      </section>
    </DaLayout>
  ),
  notFoundComponent: () => (
    <DaLayout>
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="font-titre text-4xl text-encre">Aucun article</h1>
      </section>
    </DaLayout>
  ),
  component: BlogPage,
});

const MONTHS_FR = [
  "janv.",
  "févr.",
  "mars",
  "avril",
  "mai",
  "juin",
  "juil.",
  "août",
  "sept.",
  "oct.",
  "nov.",
  "déc.",
];

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return `${d.getDate()} ${MONTHS_FR[d.getMonth()]} ${d.getFullYear()}`;
}

function BlogPage() {
  const { data: articles } = useSuspenseQuery(articlesQueryOptions);
  const [featured, ...rest] = articles;

  return (
    <DaLayout>
      {/* Header */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-12 md:pt-28 md:pb-16">
          <p className="text-xs uppercase tracking-[0.22em] text-framboise">Journal</p>
          <h1 className="mt-6 font-titre text-4xl leading-[1.05] text-encre md:text-6xl lg:text-7xl">
            Le <em className="text-framboise">blog</em>
          </h1>
          <p className="mt-8 max-w-2xl text-base text-encre md:text-lg">
            Des conseils pratiques pour te faire connaître tout en respectant ton éthique.
          </p>
        </div>
      </section>

      {/* Featured article */}
      {featured && (
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 pb-16">
            <Link
              to="/blog/$slug"
              params={{ slug: featured.slug }}
              className="group grid gap-10 md:grid-cols-2 md:gap-16"
            >
              {featured.cover_url && (
                <div className="aspect-[4/3] overflow-hidden bg-rose-pale">
                  <img
                    src={featured.cover_url}
                    alt={featured.cover_alt ?? featured.title}
                    loading="eager"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex flex-col justify-center">
                <p className="text-xs uppercase tracking-[0.22em] text-framboise">
                  À la une · {formatDate(featured.published_at)}
                </p>
                <h2 className="mt-6 font-titre text-3xl leading-[1.1] text-encre md:text-5xl">
                  {featured.title}
                </h2>
                {featured.excerpt && (
                  <p className="mt-6 text-base leading-relaxed text-encre md:text-lg">
                    {featured.excerpt}
                  </p>
                )}
                <span className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-framboise group-hover:text-bordeaux">
                  Lire la suite <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="bg-white">
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
                  <div className="aspect-[4/3] overflow-hidden bg-rose-pale">
                    <img
                      src={a.cover_url}
                      alt={a.cover_alt ?? a.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <p className="mt-6 text-xs uppercase tracking-[0.22em] text-framboise">
                  {formatDate(a.published_at)} · {a.author}
                </p>
                <h3 className="mt-3 font-titre text-2xl leading-tight text-encre md:text-3xl">
                  {a.title}
                </h3>
                {a.excerpt && (
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-encre">
                    {a.excerpt}
                  </p>
                )}
                <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-framboise group-hover:text-bordeaux">
                  Lire la suite <span aria-hidden>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <VichyBand />
      <CtaFinal />
    </DaLayout>
  );
}
