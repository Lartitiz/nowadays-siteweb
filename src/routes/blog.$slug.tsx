import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { DaLayout } from "@/components/da/DaLayout";
import { CtaFinal } from "@/components/da/CtaFinal";
import { ArticleOffres } from "@/components/da/ArticleOffres";
import { VichyBand } from "@/components/da/VichyBand";
import { RichText } from "@/components/site/RichText";
import { pickRelated } from "@/lib/articles-related";
import { imageSize } from "@/lib/image-sizes";
import {
  getArticleBySlug,
  listArticles,
  type ArticleBlock,
  type ArticleFull,
} from "@/lib/articles.functions";
import { absoluteUrl } from "@/lib/site";

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
    const article = await context.queryClient.ensureQueryData(articleQueryOptions(params.slug));
    if (!article) throw notFound();
    // Pré-charger la liste pour les "articles récents" (best effort)
    void context.queryClient.ensureQueryData(relatedQueryOptions);
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article as ArticleFull | undefined;
    if (!a) return { meta: [{ title: "Article | Nowadays" }] };
    const title = a.seo_title ?? `${a.title} | Nowadays`;
    const description = a.seo_description ?? a.excerpt ?? "";
    const meta = [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: absoluteUrl(`/blog/${a.slug}`) },
      { property: "article:published_time", content: a.published_at },
      { property: "article:author", content: a.author },
    ];
    if (a.cover_url) {
      meta.push({ property: "og:image", content: absoluteUrl(a.cover_url) });
      meta.push({ name: "twitter:image", content: absoluteUrl(a.cover_url) });
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
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": absoluteUrl(`/blog/${a.slug}`),
      },
    };
    if (a.cover_url) articleSchema.image = absoluteUrl(a.cover_url);
    // Google privilégie le contenu tenu à jour : sans `dateModified`, un article
    // révisé passe pour aussi vieux que sa date de publication.
    if (a.updated_at) articleSchema.dateModified = a.updated_at;
    const breadcrumbs = {
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
        {
          "@type": "ListItem",
          position: 3,
          name: a.title,
          item: absoluteUrl(`/blog/${a.slug}`),
        },
      ],
    };
    return {
      meta,
      links: [{ rel: "canonical", href: absoluteUrl(`/blog/${a.slug}`) }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(articleSchema) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumbs) },
      ],
    };
  },
  errorComponent: ({ error }) => (
    <DaLayout>
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="font-titre text-4xl text-encre">Erreur de chargement</h1>
        <p className="mt-4 text-sm text-encre">{error.message}</p>
        <Link
          to="/blog"
          className="mt-8 inline-block text-sm uppercase tracking-[0.18em] text-framboise hover:text-bordeaux"
        >
          ← Retour au blog
        </Link>
      </section>
    </DaLayout>
  ),
  notFoundComponent: () => (
    <DaLayout>
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="font-titre text-4xl text-encre">Article introuvable</h1>
        <Link
          to="/blog"
          className="mt-8 inline-block text-sm uppercase tracking-[0.18em] text-framboise hover:text-bordeaux"
        >
          ← Retour au blog
        </Link>
      </section>
    </DaLayout>
  ),
  component: ArticlePage,
});

const MONTHS_FR = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
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
          {...imageSize(b.src)}
          className="h-auto w-full rounded-sm"
        />
        {b.alt && b.alt.trim() && (
          <figcaption className="mt-3 text-center text-xs uppercase tracking-[0.18em] text-framboise">
            {b.alt}
          </figcaption>
        )}
      </figure>
    );
  }
  if (b.type === "h2" || b.type === "h1") {
    return (
      <h2 key={i} className="mt-16 mb-6 font-titre text-3xl md:text-5xl leading-[1.1] text-encre">
        <RichText text={b.text} />
      </h2>
    );
  }
  if (b.type === "h3") {
    return (
      <h3 key={i} className="mt-10 mb-4 font-titre text-xl md:text-2xl leading-[1.2] text-encre">
        <RichText text={b.text} />
      </h3>
    );
  }
  if (b.type === "quote") {
    // Certains blocs "quote" sont en fait des EXEMPLES (« *👉 …* ») : on les
    // rend en encart clair, pas en grande citation. On retire l'italique
    // enveloppant (*…*) qui n'a plus lieu d'être.
    const raw = b.text.trim();
    const isExample = raw.replace(/^\*+/, "").trimStart().startsWith("👉");
    if (isExample) {
      // On ne dégrafe l'italique que si le bloc est vraiment ENVELOPPÉ dedans.
      // Sinon un exemple qui se termine par une annotation en italique
      // (« …*(porte ouverte)*  ») perd son astérisque fermante, et le lecteur
      // voit l'astérisque ouvrante en clair.
      const wrapped = /^\*[\s\S]*\*$/.test(raw);
      const cleaned = wrapped ? raw.replace(/^\*+/, "").replace(/\*+$/, "").trim() : raw;
      return (
        <aside
          key={i}
          className="my-8 rounded-carte bg-rose-pale px-6 py-5 text-sm leading-relaxed text-encre md:text-base"
        >
          <RichText text={cleaned} />
        </aside>
      );
    }
    return (
      <blockquote
        key={i}
        className="my-10 rounded-carte bg-rose-pale px-8 py-6 font-titre text-2xl italic leading-snug text-bordeaux md:text-3xl"
      >
        <RichText text={b.text} />
      </blockquote>
    );
  }
  if (b.type === "table") {
    // Un tableau de 4 colonnes est illisible sur un téléphone. Plutôt que de
    // dupliquer le contenu (une version mobile + une version bureau, que les
    // lecteurs d'écran liraient deux fois), on garde UN SEUL tableau : sur
    // mobile chaque ligne devient une carte, et chaque cellule affiche son
    // en-tête de colonne via `data-label`. À partir de `md`, on rebascule sur
    // un vrai tableau.
    return (
      <figure key={i} className="my-12 md:-mx-12">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            {b.caption && (
              <caption className="mb-5 text-left text-xs uppercase tracking-[0.18em] text-framboise">
                {b.caption}
              </caption>
            )}
            <thead className="hidden md:table-header-group">
              <tr className="bg-rose-pale">
                {b.headers.map((h, j) => (
                  <th
                    key={j}
                    scope="col"
                    className="px-4 py-3 align-bottom font-titre text-base font-normal text-encre"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="block md:table-row-group">
              {b.rows.map((row, r) => (
                <tr
                  key={r}
                  className="mb-4 block rounded-carte bg-rose-pale px-5 py-5 last:mb-0 md:mb-0 md:table-row md:rounded-none md:bg-transparent md:px-0 md:py-0 md:[&>*]:border-b md:[&>*]:border-rose-pale"
                >
                  {row.map((cell, c) => (
                    <td
                      key={c}
                      data-label={b.headers[c] ?? ""}
                      className={
                        c === 0
                          ? "block font-titre text-lg leading-tight text-encre md:table-cell md:px-4 md:py-4 md:align-top md:text-base"
                          : "mt-4 block text-sm leading-relaxed text-encre before:mb-1 before:block before:text-[11px] before:uppercase before:tracking-[0.18em] before:text-framboise before:content-[attr(data-label)] md:mt-0 md:table-cell md:px-4 md:py-4 md:align-top md:before:hidden"
                      }
                    >
                      <RichText text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </figure>
    );
  }
  if (b.type === "button") {
    return (
      <div key={i} className="my-10 flex justify-center">
        <a
          href={b.href}
          target={b.href.startsWith("http") ? "_blank" : undefined}
          rel={b.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="btn btn-primary"
        >
          {b.text}
        </a>
      </div>
    );
  }
  return (
    <p key={i} className="mt-5 whitespace-pre-line text-encre">
      <RichText text={b.text} />
    </p>
  );
}

function ArticlePage() {
  const { slug } = Route.useParams();
  const { data: article } = useSuspenseQuery(articleQueryOptions(slug));
  const { data: allArticles } = useSuspenseQuery(relatedQueryOptions);

  if (!article) return null;

  const related = pickRelated(article.slug, allArticles, 3);

  return (
    <DaLayout>
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 pt-16 pb-10 md:pt-24">
          <Link
            to="/blog"
            className="text-xs uppercase tracking-[0.22em] text-framboise hover:text-bordeaux"
          >
            ← Le blog
          </Link>
          <p className="mt-8 text-xs uppercase tracking-[0.22em] text-encre">
            {article.author} · {formatDate(article.published_at)}
          </p>
          <h1 className="mt-6 font-titre text-4xl leading-[1.05] text-encre md:text-6xl lg:text-7xl">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white">
        <div className="corps-article mx-auto max-w-[70ch] px-6 pb-24">
          {article.content.map(renderBlock)}
        </div>
      </section>

      {/* Passerelle vers les offres : sans elle, un article ne renvoie qu'à
          d'autres articles et à Calendly, donc hors du site. */}
      <ArticleOffres />

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-rose-pale">
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <h2 className="font-titre text-3xl md:text-5xl leading-[1.1] text-encre">
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
                    <div className="aspect-[4/3] overflow-hidden bg-white">
                      <img
                        src={r.cover_url}
                        alt={r.cover_alt ?? r.title}
                        loading="lazy"
                        {...imageSize(r.cover_url)}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <p className="mt-5 text-xs uppercase tracking-[0.22em] text-framboise">
                    {formatDate(r.published_at)}
                  </p>
                  <h3 className="mt-2 font-titre text-xl leading-tight text-encre md:text-2xl">
                    {r.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <VichyBand />
      <CtaFinal />
    </DaLayout>
  );
}
