import { Link } from "@tanstack/react-router";

export type Block =
  | { type: "h1"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "quote"; text: string }
  | { type: "img"; src: string; alt: string };

export function CaseStudy({
  brand,
  tagline,
  blocks,
}: {
  brand: string;
  tagline?: string;
  blocks: Block[];
}) {
  // First block is the H1 (question), then optional first image as cover
  const h1Idx = blocks.findIndex((b) => b.type === "h1");
  const h1 = h1Idx >= 0 ? (blocks[h1Idx] as Extract<Block, { type: "h1" }>) : null;
  const firstImgIdx = blocks.findIndex((b) => b.type === "img");
  const cover =
    firstImgIdx >= 0 ? (blocks[firstImgIdx] as Extract<Block, { type: "img" }>) : null;
  const rest: Block[] = blocks.filter((_, i) => i !== h1Idx && i !== firstImgIdx);

  return (
    <>
      {/* Hero */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 pt-16 pb-12 md:pt-24">
          <Link
            to="/etudes-de-cas"
            className="font-mono text-xs uppercase tracking-[0.22em] text-rose-dark hover:text-bordeaux"
          >
            ← Études de cas
          </Link>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.22em] text-ink">
            {brand}
          </p>
          {h1 && (
            <h1 className="mt-6 font-serif text-4xl leading-[1.05] text-ink md:text-6xl">
              {h1.text}
            </h1>
          )}
          {tagline && (
            <p className="mt-8 font-mono text-base text-ink md:text-lg">
              {tagline}
            </p>
          )}
        </div>
        {cover && (
          <div className="mx-auto max-w-5xl px-6 pb-16">
            <img
              src={cover.src}
              alt={cover.alt}
              loading="eager"
              className="w-full rounded-sm"
            />
          </div>
        )}
      </section>

      {/* Body blocks */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 pb-24">
          {rest.map((b, i) => {
            if (b.type === "img") {
              return (
                <figure key={i} className="my-10 -mx-2 md:-mx-12">
                  <img
                    src={b.src}
                    alt={b.alt}
                    loading="lazy"
                    className="w-full rounded-sm"
                  />
                </figure>
              );
            }
            if (b.type === "h2") {
              return (
                <h2
                  key={i}
                  className="mt-16 font-serif text-4xl leading-[1.05] text-ink md:text-6xl"
                >
                  {b.text}
                </h2>
              );
            }
            if (b.type === "h3") {
              return (
                <h3
                  key={i}
                  className="mt-10 font-serif text-2xl leading-tight text-ink md:text-3xl"
                >
                  {b.text}
                </h3>
              );
            }
            if (b.type === "quote") {
              return (
                <blockquote
                  key={i}
                  className="my-8 border-l-2 border-rose-dark pl-6 font-serif text-2xl italic leading-snug text-ink md:text-3xl"
                >
                  {b.text}
                </blockquote>
              );
            }
            return (
              <p
                key={i}
                className="mt-5 whitespace-pre-line font-mono text-base leading-relaxed text-ink"
              >
                {b.text}
              </p>
            );
          })}
        </div>
      </section>
    </>
  );
}
