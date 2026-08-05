import { Link } from "@tanstack/react-router";

import { imageSize } from "@/lib/image-sizes";

import { CaseStudyNav } from "./CaseStudyNav";
import { CaseStudySchema } from "./CaseStudySchema";

const CALENDLY_URL = "https://calendly.com/laetitia-mattioli/rendez-vous-avec-laetitia";

export type Img = { src: string; alt: string };

export type Solution = {
  title: string;
  paragraphs?: string[];
  images?: Img[];
  /** images layout, default "stacked" (full-width). "grid" = 2 cols on md+ */
  imageLayout?: "stacked" | "grid";
};

export type Influencer = {
  avatar: string;
  handle: string;
  role?: string;
  followers?: string;
  link?: string;
};

export type Stat = { value: string; label: string };

export type CaseStudyData = {
  brand: string;
  logo?: Img;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  /** Page de liste vers laquelle renvoie le lien « ← Études de cas » */
  backTo?: "/creatrices-ethiques" | "/etudes-de-cas-pro";
  /** "Un peu de contexte" block */
  context?: { paragraphs: string[]; image?: Img };
  /** Pulled marquee header text (default "Les solutions apportées") */
  solutionsTitle?: string;
  solutions: Solution[];
  influencers?: { intro?: string; items: Influencer[] };
  results?: { intro?: string; items: Stat[] };
};

/** Type kept for backward compat with old route files (unused by new layout). */
export type Block =
  | { type: "h1"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "quote"; text: string }
  | { type: "img"; src: string; alt: string };

function CtaButton({ label, href }: { label: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
      {label}
    </a>
  );
}

function SolutionsMarquee({ text }: { text: string }) {
  // Repeated word with squiggly separator, scrolling horizontally
  const sep = "〰️";
  const unit = `${text} ${sep} `;
  const phrase = unit.repeat(8);
  return (
    <div aria-hidden className="relative overflow-hidden bg-rose-pale py-8 md:py-12">
      <div className="flex w-max animate-cs-marquee whitespace-nowrap will-change-transform">
        <span className="font-titre text-3xl md:text-5xl leading-[1.1] text-encre pr-8">
          {phrase}
        </span>
        <span className="font-titre text-3xl md:text-5xl leading-[1.1] text-encre pr-8">
          {phrase}
        </span>
      </div>
      <style>{`
        @keyframes cs-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-cs-marquee {
          animation: cs-marquee 60s linear infinite;
        }
      `}</style>
    </div>
  );
}

export function CaseStudy({ data }: { data: CaseStudyData }) {
  const ctaLabel = data.ctaLabel ?? "Prendre rendez-vous pour discuter de votre projet";
  const ctaHref = data.ctaHref ?? CALENDLY_URL;
  const solutionsTitle = data.solutionsTitle ?? "Les solutions apportées";

  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 pt-12 md:pt-20 pb-20 md:pb-28 text-center">
          <div className="mb-4 flex justify-start">
            <Link
              to={data.backTo ?? "/creatrices-ethiques"}
              className="text-xs uppercase tracking-[0.22em] text-framboise hover:text-bordeaux"
            >
              ← Études de cas
            </Link>
          </div>

          {data.logo && (
            <div className="mx-auto mb-10 flex h-32 w-32 items-center justify-center overflow-hidden rounded-carte bg-white shadow-sm md:h-40 md:w-40">
              <img
                src={data.logo.src}
                alt={data.logo.alt}
                {...imageSize(data.logo.src)}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          <h1 className="mx-auto max-w-4xl font-titre text-4xl leading-[1.05] text-encre md:text-6xl lg:text-7xl">
            {data.title}
          </h1>

          {data.subtitle && (
            <p className="mx-auto mt-8 max-w-xl text-sm md:text-base text-encre leading-relaxed">
              {data.subtitle}
            </p>
          )}

          <div className="mt-10">
            <CtaButton label={ctaLabel} href={ctaHref} />
          </div>
        </div>
      </section>

      {/* Contexte */}
      {data.context && (
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-6 pt-20 md:pt-28">
            <h2 className="font-titre text-3xl md:text-5xl leading-[1.1] text-encre">
              Un peu de <em className="not-italic text-framboise italic">contexte</em>
            </h2>
            <div className="mt-10 space-y-5">
              {data.context.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-encre">
                  {p}
                </p>
              ))}
            </div>
          </div>
          {data.context.image && (
            <div className="mx-auto mt-14 max-w-5xl px-6">
              <img
                src={data.context.image.src}
                alt={data.context.image.alt}
                loading="lazy"
                {...imageSize(data.context.image.src)}
                className="h-auto w-full rounded-sm"
              />
            </div>
          )}
        </section>
      )}

      {/* Marquee */}
      <div className="mt-20 md:mt-28">
        <SolutionsMarquee text={solutionsTitle} />
      </div>

      {/* Solutions */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28 space-y-20 md:space-y-28">
          {data.solutions.map((s, i) => (
            <article key={i}>
              <div className="mx-auto max-w-3xl">
                <h3 className="font-titre text-xl leading-[1.2] text-encre md:text-2xl">
                  {s.title}
                </h3>
                {s.paragraphs?.map((p, j) => (
                  <p key={j} className="mt-5 text-base leading-relaxed text-encre">
                    {p}
                  </p>
                ))}
              </div>
              {s.images && s.images.length > 0 && (
                <div
                  className={
                    s.imageLayout === "grid" && s.images.length > 1
                      ? "mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6"
                      : "mt-10 space-y-6"
                  }
                >
                  {s.images.map((img, k) => (
                    <figure key={k}>
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        {...imageSize(img.src)}
                        className="h-auto w-full rounded-sm"
                      />
                    </figure>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Influenceurs */}
      {data.influencers && data.influencers.items.length > 0 && (
        <section className="bg-rose-pale">
          <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
            <h2 className="font-titre text-3xl md:text-5xl leading-[1.1] text-encre text-center">
              <em className="not-italic text-framboise italic">Influenceurs</em>
            </h2>
            {data.influencers.intro && (
              <p className="mx-auto mt-6 max-w-2xl text-center text-base text-encre leading-relaxed">
                {data.influencers.intro}
              </p>
            )}
            <ul className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-10">
              {data.influencers.items.map((inf, i) => {
                const Wrap = ({ children }: { children: React.ReactNode }) =>
                  inf.link ? (
                    <a
                      href={inf.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      {children}
                    </a>
                  ) : (
                    <div>{children}</div>
                  );
                return (
                  <li key={i} className="text-center">
                    <Wrap>
                      <div className="mx-auto aspect-square w-full max-w-[200px] overflow-hidden rounded-carte bg-white">
                        <img
                          src={inf.avatar}
                          alt={inf.handle}
                          loading="lazy"
                          {...imageSize(inf.avatar)}
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <p className="mt-4 font-titre text-xl text-encre">{inf.handle}</p>
                      {inf.role && (
                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-encre">
                          {inf.role}
                        </p>
                      )}
                      {inf.followers && (
                        <p className="mt-1 text-sm text-framboise">{inf.followers}</p>
                      )}
                    </Wrap>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      {/* Résultats */}
      {data.results && data.results.items.length > 0 && (
        <section className="bg-rose-pale">
          <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
            <h2 className="font-titre text-3xl md:text-5xl leading-[1.1] text-encre text-center">
              Les <em className="not-italic text-framboise italic">résultats</em>
            </h2>
            {data.results.intro && (
              <p className="mx-auto mt-6 max-w-2xl text-center text-base text-encre leading-relaxed">
                {data.results.intro}
              </p>
            )}
            <dl
              className={`mt-14 grid gap-10 ${
                data.results.items.length <= 2
                  ? "grid-cols-1 sm:grid-cols-2"
                  : data.results.items.length === 3
                    ? "grid-cols-1 sm:grid-cols-3"
                    : "grid-cols-2 md:grid-cols-4"
              }`}
            >
              {data.results.items.map((r, i) => (
                <div key={i} className="text-center">
                  <dt className="font-titre text-4xl leading-none text-bordeaux md:text-6xl">
                    {r.value}
                  </dt>
                  <dd className="mt-3 text-xs uppercase tracking-[0.18em] text-gris-chaud">
                    {r.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* Projet précédent / suivant + rappel de l'offre. Rendu ici pour que
          les 18 routes en bénéficient sans être modifiées une à une. */}
      <CaseStudyNav />

      {/* Idem pour les données structurées : CreativeWork + fil d'Ariane. */}
      <CaseStudySchema
        title={data.title}
        description={data.subtitle}
        image={data.logo?.src}
      />
    </>
  );
}
