import type { ReactNode } from "react";
import phoneAsset from "@/assets/tired-phone-instagram.jpg.asset.json";
import teamAsset from "@/assets/tired-team.jpg.asset.json";

function PhotoBubble({
  image,
  alt,
  frameColor,
  align,
  children,
}: {
  image: string;
  alt: string;
  frameColor: string;
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
          <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] text-ink">
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

          <p className="mt-8 max-w-lg font-serif text-xl italic leading-[1.4] text-rose-dark md:text-2xl">
            Mais côté communication, c'est une autre histoire…
          </p>
        </div>

        {/* Colonne droite */}
        <div className="relative md:col-span-5">
          <div className="relative z-10">
            <PhotoBubble
              image={phoneAsset.url}
              alt="Personne au téléphone, l'air las"
              frameColor="var(--rose-light)"
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
