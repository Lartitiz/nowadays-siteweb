import type { ReactNode } from "react";

function Squiggle({
  color,
  className = "",
}: {
  color: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 80 10"
      className={`block h-1.5 w-full ${className}`}
      aria-hidden
      preserveAspectRatio="none"
    >
      <path
        d="M2 6 Q 10 1, 18 5 T 38 5 T 58 5 T 78 5"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HandsHeart() {
  return (
    <svg viewBox="0 0 80 80" className="h-full w-full" aria-hidden>
      <g
        fill="none"
        stroke="var(--rose-dark)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* cœur */}
        <path d="M40 38 C 28 30, 24 22, 30 18 C 34 16, 40 20, 40 24 C 40 20, 46 16, 50 18 C 56 22, 52 30, 40 38 Z" />
        {/* main gauche */}
        <path d="M10 56 L18 48 L26 48 L30 52 L36 50 L40 56 L40 64 L18 64 L10 60 Z" />
        {/* main droite */}
        <path d="M70 56 L62 48 L54 48 L50 52 L44 50 L40 56 L40 64 L62 64 L70 60 Z" />
        {/* petits rayons au-dessus du cœur */}
        <line x1="40" y1="10" x2="40" y2="6" />
        <line x1="28" y1="14" x2="25" y2="10" />
        <line x1="52" y1="14" x2="55" y2="10" />
      </g>
    </svg>
  );
}

function MedallionStickers() {
  return (
    <>
      {/* étoile en haut à droite */}
      <svg
        viewBox="0 0 20 20"
        className="absolute -right-1 -top-2 h-6 w-6"
        aria-hidden
      >
        <g
          stroke="var(--rose-dark)"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        >
          <line x1="10" y1="3" x2="10" y2="17" />
          <line x1="3" y1="10" x2="17" y2="10" />
          <line x1="5" y1="5" x2="15" y2="15" />
          <line x1="15" y1="5" x2="5" y2="15" />
        </g>
      </svg>
      {/* petit cercle en bas à gauche */}
      <svg
        viewBox="0 0 12 12"
        className="absolute -bottom-1 -left-2 h-3 w-3"
        aria-hidden
      >
        <circle
          cx="6"
          cy="6"
          r="4.5"
          fill="none"
          stroke="var(--bordeaux)"
          strokeWidth="1.4"
        />
      </svg>
    </>
  );
}

function Underlined({
  children,
  color,
}: {
  children: ReactNode;
  color: string;
}) {
  return (
    <span className="relative inline-block">
      <em className="relative">{children}</em>
      <Squiggle
        color={color}
        className="absolute inset-x-0 -bottom-2 left-0 w-full"
      />
    </span>
  );
}

export function VisibilityBanner() {
  return (
    <section className="bg-background pb-8">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className="relative flex flex-col items-center gap-8 overflow-hidden rounded-[36px] px-8 py-10 md:flex-row md:gap-12 md:px-14 md:py-12"
          style={{ backgroundColor: "var(--rose-light)" }}
        >
          {/* Médaillon jaune */}
          <div className="relative shrink-0">
            <div
              className="flex h-32 w-32 items-center justify-center rounded-full md:h-40 md:w-40"
              style={{ backgroundColor: "var(--yellow)" }}
            >
              <span className="font-serif text-5xl text-ink md:text-6xl">
                ✦
              </span>
            </div>
            <MedallionStickers />
          </div>

          {/* Texte */}
          <p className="font-serif text-2xl leading-[1.4] text-ink md:text-3xl">
            Chez Nowadays,{" "}
            <span className="font-mono text-[0.85em] font-semibold not-italic">
              nous vous accompagnons à
            </span>{" "}
            <span
              className="inline-block rounded-full px-3 py-0.5 font-serif italic"
              style={{ backgroundColor: "var(--rose-soft)" }}
            >
              vous rendre visible
            </span>{" "}
            grâce à une communication{" "}
            <Underlined color="var(--orange)">joyeuse</Underlined>,{" "}
            <Underlined color="var(--rose-dark)">éthique</Underlined> et{" "}
            <Underlined color="var(--bordeaux)">efficace</Underlined>.
          </p>

          {/* Sticker mains-cœur */}
          <div className="hidden h-20 w-20 shrink-0 md:block">
            <HandsHeart />
          </div>
        </div>
      </div>
    </section>
  );
}
