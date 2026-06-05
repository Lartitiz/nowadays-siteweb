import { Link } from "@tanstack/react-router";

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
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-full bg-rose-dark px-10 py-5 font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-cream transition-colors hover:bg-bordeaux"
    >
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
    <div
      aria-hidden
      className="relative overflow-hidden bg-rose-light py-8 md:py-12"
    >
      <div className="flex w-max animate-cs-marquee whitespace-nowrap will-change-transform">
        <span className="font-serif text-4xl md:text-6xl leading-[1.05] text-ink pr-8">
          {phrase}
        </span>
        <span className="font-serif text-4xl md:text-6xl leading-[1.05] text-ink pr-8">
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
      <section className="bg-gradient-to-b from-background to-rose-light">
        <div className="mx-auto max-w-4xl px-6 pt-12 md:pt-20 pb-20 md:pb-28 text-center">
          <div className="mb-4 flex justify-start">
            <Link
              to="/creatrices-ethiques"
              className="font-mono text-xs uppercase tracking-[0.22em] text-rose-dark hover:text-bordeaux"
            >
              ← Études de cas
            </Link>
          </div>

          {data.logo && (
            <div className="mx-auto mb-10 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm md:h-40 md:w-40">
              <img
                src={data.logo.src}
                alt={data.logo.alt}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          <h1 className="mx-auto max-w-3xl font-serif text-4xl leading-[1.05] text-ink md:text-6xl">
            {data.title}
          </h1>

          {data.subtitle && (
            <p className="mx-auto mt-8 max-w-xl font-mono text-sm md:text-base text-ink leading-relaxed">
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
        <section className="bg-background">
          <div className="mx-auto max-w-3xl px-6 pt-20 md:pt-28">
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] text-ink">
              Un peu de <em className="not-italic text-rose-dark italic">contexte</em>
            </h2>
            <div className="mt-10 space-y-5">
              {data.context.paragraphs.map((p, i) => (
                <p key={i} className="font-mono text-base leading-relaxed text-ink">
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
                className="w-full rounded-sm"
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
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28 space-y-20 md:space-y-28">
          {data.solutions.map((s, i) => (
            <article key={i}>
              <div className="mx-auto max-w-3xl">
                <h3 className="font-serif text-3xl leading-[1.1] text-ink md:text-4xl">
                  {s.title}
                </h3>
                {s.paragraphs?.map((p, j) => (
                  <p
                    key={j}
                    className="mt-5 font-mono text-base leading-relaxed text-ink"
                  >
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
                        className="w-full rounded-sm"
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
        <section className="bg-rose-light">
          <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] text-ink text-center">
              <em className="not-italic text-rose-dark italic">Influenceurs</em>
            </h2>
            {data.influencers.intro && (
              <p className="mx-auto mt-6 max-w-2xl text-center font-mono text-base text-ink leading-relaxed">
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
                      <div className="mx-auto aspect-square w-full max-w-[200px] overflow-hidden rounded-full bg-white">
                        <img
                          src={inf.avatar}
                          alt={inf.handle}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <p className="mt-4 font-serif text-xl text-ink">{inf.handle}</p>
                      {inf.role && (
                        <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-ink">
                          {inf.role}
                        </p>
                      )}
                      {inf.followers && (
                        <p className="mt-1 font-mono text-sm text-rose-dark">
                          {inf.followers}
                        </p>
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
        <section className="bg-rose-light">
          <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] text-ink text-center">
              Les <em className="not-italic text-rose-dark italic">résultats</em>
            </h2>
            {data.results.intro && (
              <p className="mx-auto mt-6 max-w-2xl text-center font-mono text-base text-ink leading-relaxed">
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
                  <dt className="font-serif text-4xl leading-none text-ink md:text-6xl">
                    {r.value}
                  </dt>
                  <dd className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-ink">
                    {r.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}
    </>
  );
}
