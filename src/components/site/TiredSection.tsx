import type { ReactNode } from "react";
import phoneAsset from "@/assets/tired-phone.webp.asset.json";
import teamAsset from "@/assets/tired-team.jpg.asset.json";

function Squiggle({ color = "var(--rose-dark)" }: { color?: string }) {
  return (
    <svg
      viewBox="0 0 80 12"
      className="h-2 w-20"
      aria-hidden
      preserveAspectRatio="none"
    >
      <path
        d="M2 8 Q 10 1, 18 6 T 38 6 T 58 6 T 78 6"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AsteriskSticker() {
  return (
    <svg viewBox="0 0 40 40" className="h-full w-full" aria-hidden>
      <g
        stroke="var(--rose-dark)"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      >
        <line x1="20" y1="6" x2="20" y2="34" />
        <line x1="6" y1="20" x2="34" y2="20" />
        <line x1="10" y1="10" x2="30" y2="30" />
        <line x1="30" y1="10" x2="10" y2="30" />
      </g>
    </svg>
  );
}


function PhotoBubble({
  image,
  alt,
  frameColor,
  squiggleColor,
  align,
  children,
}: {
  image: string;
  alt: string;
  frameColor: string;
  squiggleColor: string;
  align: "left" | "right";
  children: ReactNode;
}) {
  const photoOnLeft = align === "left";
  return (
    <div className="relative">
      {/* Cadre photo couleur */}
      <div
        className={`relative w-[68%] overflow-hidden rounded-[32px] ${
          photoOnLeft ? "mr-auto" : "ml-auto"
        }`}
        style={{ backgroundColor: frameColor, aspectRatio: "4 / 4.3" }}
      >
        <img
          src={image}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Bulle de dialogue chevauchant */}
      <div
        className={`absolute bottom-4 z-10 w-[58%] rounded-[22px] bg-cream p-5 shadow-[0_12px_28px_rgba(145,1,75,0.10)] md:p-6 ${
          photoOnLeft ? "right-0" : "left-0"
        }`}
      >
        <p className="font-mono text-[13px] leading-[1.65] text-ink md:text-sm">
          {children}
        </p>
        <div className="mt-3">
          <Squiggle color={squiggleColor} />
        </div>
      </div>
    </div>
  );
}

export function TiredSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-12 md:gap-12">
        {/* Colonne gauche */}
        <div className="relative md:col-span-7">
          <h2 className="font-serif text-4xl leading-[1.1] text-ink md:text-6xl">
            Fatiguée du <em>marketing</em>
            <br />
            <em>agressif et des injonctions ?</em>
          </h2>

          <div className="mt-8 inline-flex items-center rounded-full bg-[color:var(--bordeaux)] px-5 py-2.5">
            <span className="font-mono text-sm font-semibold text-cream">
              Nous aussi.
            </span>
          </div>

          <p className="mt-8 max-w-lg font-mono text-base leading-[1.75] text-ink">
            Vous portez un projet qui a du sens. Que vous soyez créateur·ice,
            freelance ou à la tête d'une structure engagée, vous y mettez tout :
            de l'attention, de l'éthique, du soin.
          </p>

          <div className="mt-6">
            <Squiggle color="var(--yellow)" />
          </div>

          <p className="mt-6 max-w-lg font-serif text-xl italic leading-[1.4] text-rose-dark md:text-2xl">
            Mais côté communication, c'est une autre histoire…
          </p>
        </div>

        {/* Colonne droite */}
        <div className="relative md:col-span-5">
          {/* Astérisque */}
          <div className="absolute right-0 top-0 h-10 w-10 md:-top-6 md:h-12 md:w-12">
            <AsteriskSticker />
          </div>
          {/* Blob organique */}
          <div
            aria-hidden
            className="absolute -right-16 top-1/3 -z-0 hidden h-52 w-52 rounded-[60%_40%_55%_45%/50%_60%_40%_50%] md:block"
            style={{ backgroundColor: "var(--rose-soft)", opacity: 0.4 }}
          />

          <div className="relative z-10">
            <PhotoBubble
              image={phoneAsset.url}
              alt="Personne au téléphone, l'air las"
              frameColor="var(--rose-soft)"
              squiggleColor="var(--rose-dark)"
              align="left"
            >
              Peut-être que vous postez quand vous pouvez, entre deux urgences.
            </PhotoBubble>
          </div>

          <div className="relative z-10 mt-10 md:mt-14">
            <PhotoBubble
              image={teamAsset.url}
              alt="Équipe devant un écran, perplexe"
              frameColor="var(--yellow)"
              squiggleColor="var(--bordeaux)"
              align="right"
            >
              Peut-être que personne dans l'équipe n'a vraiment le temps (ni les
              compétences) de s'en occuper.
            </PhotoBubble>
          </div>
        </div>
      </div>
    </section>
  );
}
