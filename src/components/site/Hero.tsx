import { ArrowRight } from "lucide-react";

const CALENDLY_URL =
  "https://calendly.com/laetitia-mattioli/30-min-de-diagnostic-offert";

function HeartSticker() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden>
      <circle cx="50" cy="50" r="48" fill="var(--rose-soft)" />
      <path
        d="M50 72 C 30 58, 24 44, 34 36 C 42 30, 50 38, 50 44 C 50 38, 58 30, 66 36 C 76 44, 70 58, 50 72 Z"
        fill="var(--bordeaux)"
      />
    </svg>
  );
}

function LeafSticker() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden>
      <circle cx="50" cy="50" r="48" fill="var(--rose-dark)" />
      <path
        d="M50 18 C 72 28, 78 48, 50 82 C 22 48, 28 28, 50 18 Z"
        fill="var(--cream)"
      />
      <path
        d="M50 82 L50 45"
        stroke="var(--cream)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function StarSticker() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden>
      <circle cx="50" cy="50" r="48" fill="var(--orange)" />
      <path
        d="M50 18 L56 44 L82 50 L56 56 L50 82 L44 56 L18 50 L44 44 Z"
        fill="var(--cream)"
      />
    </svg>
  );
}

function DotSticker() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden>
      <circle cx="50" cy="50" r="48" fill="var(--rose-mid)" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Stickers décoratifs */}
      <div className="pointer-events-none absolute left-4 top-10 h-16 w-16 md:left-16 md:top-20 md:h-24 md:w-24">
        <HeartSticker />
      </div>
      <div className="pointer-events-none absolute right-6 top-24 h-14 w-14 md:right-24 md:top-16 md:h-20 md:w-20">
        <LeafSticker />
      </div>
      <div className="pointer-events-none absolute bottom-24 left-8 hidden h-16 w-16 md:bottom-32 md:left-32 md:block md:h-20 md:w-20">
        <DotSticker />
      </div>
      <div className="pointer-events-none absolute bottom-16 right-6 h-16 w-16 md:bottom-24 md:right-28 md:h-24 md:w-24">
        <StarSticker />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center md:py-32">
        <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--rose-mid)]">
          Agence de communication éthique
        </p>

        <h1 className="text-4xl leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
          Gagnez en <em>visibilité</em>
          <br />
          sans vendre votre âme.
        </h1>

        <p className="mt-10 max-w-2xl font-mono text-base text-foreground/80 md:text-lg">
          Vous portez un projet plus doux pour le monde ? Votre com' mérite
          mieux que «&nbsp;je posterai lundi&nbsp;»{" "}
          <em className="not-italic text-foreground/80">
            <span className="italic">(on est jeudi)</span>
          </em>
          . On s'en occupe.
        </p>

        <p className="mt-6 max-w-xl font-mono text-sm text-[color:var(--rose-mid)] md:text-base">
          Pour les solopreneur·es, créateur·ices, artisan·es, assos,
          coopératives et PME à impact.
        </p>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-5 font-mono text-sm uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-[color:var(--bordeaux)] md:text-base"
        >
          Réserver un appel découverte
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
