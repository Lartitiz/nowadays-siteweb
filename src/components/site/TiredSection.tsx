import type { ReactNode } from "react";

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

function HeartOutline() {
  return (
    <svg viewBox="0 0 40 40" className="h-full w-full" aria-hidden>
      <path
        d="M20 34 C 6 24, 2 14, 10 8 C 16 4, 20 10, 20 14 C 20 10, 24 4, 30 8 C 38 14, 34 24, 20 34 Z"
        fill="none"
        stroke="var(--bordeaux)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M4 4 L8 8 M2 12 L7 12"
        stroke="var(--bordeaux)"
        strokeWidth="1.5"
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

function CircleRing({ color = "var(--rose-mid)" }: { color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden>
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
      />
    </svg>
  );
}

function QuoteCard({
  bg,
  squiggleColor,
  className = "",
  children,
}: {
  bg: string;
  squiggleColor: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`relative rounded-[28px] p-6 md:p-7 ${className}`}
      style={{ backgroundColor: bg }}
    >
      <div className="relative rounded-2xl bg-cream p-5 shadow-[0_8px_24px_rgba(145,1,75,0.06)] md:p-6">
        <p className="font-mono text-sm leading-[1.7] text-ink md:text-[15px]">
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
            <span className="relative inline-block">
              <span
                aria-hidden
                className="absolute inset-x-[-6px] top-[55%] bottom-[8%] -rotate-1 rounded-sm"
                style={{ backgroundColor: "var(--yellow)" }}
              />
              <em className="relative">agressif et des injonctions ?</em>
            </span>
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
          {/* Cercles */}
          <div className="absolute left-0 top-1/2 hidden h-5 w-5 md:block">
            <CircleRing />
          </div>
          <div className="absolute -left-2 top-1/3 hidden h-3 w-3 md:block">
            <CircleRing color="var(--orange)" />
          </div>
          {/* Blob organique côté droit */}
          <div
            aria-hidden
            className="absolute -right-12 top-1/4 -z-0 hidden h-48 w-48 rounded-[60%_40%_55%_45%/50%_60%_40%_50%] md:block"
            style={{ backgroundColor: "var(--rose-soft)", opacity: 0.55 }}
          />

          <QuoteCard
            bg="var(--rose-soft)"
            squiggleColor="var(--rose-dark)"
            className="relative z-10 md:mr-12"
          >
            Peut-être que vous postez quand vous pouvez, entre deux urgences.
          </QuoteCard>

          <QuoteCard
            bg="var(--yellow)"
            squiggleColor="var(--bordeaux)"
            className="relative z-10 mt-6 md:ml-12 md:mt-8"
          >
            Peut-être que personne dans l'équipe n'a vraiment le temps (ni les
            compétences) de s'en occuper.
          </QuoteCard>
        </div>
      </div>
    </section>
  );
}
