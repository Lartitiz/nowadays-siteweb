import { ArrowRight } from "lucide-react";
import laetitiaAsset from "@/assets/laetitia-hero.png.asset.json";

const CALENDLY_URL =
  "https://calendly.com/laetitia-mattioli/30-min-de-diagnostic-offert";



const STATS: Array<{ value: string; label: string }> = [
  { value: "+10 ans", label: "d'expérience" },
  { value: "+1200", label: "projets accompagnés" },
  { value: "100%", label: "engagés" },
  { value: "0%", label: "bullshit" },
];

/* — Stickers dessinés "à la main" (style stroke) — */

function CrownSticker() {
  return (
    <svg viewBox="0 0 80 70" className="h-full w-full" aria-hidden>
      <path
        d="M10 55 L15 20 L28 38 L40 14 L52 38 L65 20 L70 55 Z"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx="40" cy="8" r="2.5" fill="var(--ink)" />
      <line
        x1="10"
        y1="62"
        x2="70"
        y2="62"
        stroke="var(--ink)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CurlyArrow() {
  return (
    <svg viewBox="0 0 140 120" className="h-full w-full" aria-hidden>
      <path
        d="M20 20 C 60 10, 100 30, 70 55 C 50 70, 35 50, 60 40 C 90 28, 115 60, 100 90"
        fill="none"
        stroke="var(--rose-dark)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M100 90 L92 82 M100 90 L108 82"
        fill="none"
        stroke="var(--rose-dark)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HeartsCluster() {
  const heart = (
    <path
      d="M20 32 C 6 22, 2 12, 10 7 C 16 4, 20 8, 20 12 C 20 8, 24 4, 30 7 C 38 12, 34 22, 20 32 Z"
      fill="var(--rose-mid)"
    />
  );
  return (
    <svg viewBox="0 0 120 100" className="h-full w-full" aria-hidden>
      <g transform="translate(0,30)">{heart}</g>
      <g transform="translate(30,10) scale(1.4)">{heart}</g>
      <g transform="translate(70,40) scale(1.1)">{heart}</g>
    </svg>
  );
}

function DotsGrid() {
  const dots = [];
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      dots.push(
        <circle
          key={`${r}-${c}`}
          cx={c * 10 + 4}
          cy={r * 10 + 4}
          r="1.6"
          fill="var(--rose-mid)"
        />,
      );
    }
  }
  return (
    <svg viewBox="0 0 60 60" className="h-full w-full" aria-hidden>
      {dots}
    </svg>
  );
}

function EngageStamp() {
  return (
    <svg viewBox="0 0 140 140" className="h-full w-full" aria-hidden>
      <defs>
        <path
          id="stamp-circle"
          d="M70,70 m-52,0 a52,52 0 1,1 104,0 a52,52 0 1,1 -104,0"
        />
      </defs>
      <circle
        cx="70"
        cy="70"
        r="62"
        fill="none"
        stroke="var(--rose-dark)"
        strokeWidth="1.5"
      />
      <circle
        cx="70"
        cy="70"
        r="52"
        fill="none"
        stroke="var(--rose-dark)"
        strokeWidth="1"
        strokeDasharray="2 4"
      />
      <text
        fill="var(--rose-dark)"
        style={{
          fontFamily: "IBM Plex Mono, monospace",
          fontSize: "11px",
          letterSpacing: "3px",
          textTransform: "uppercase",
        }}
      >
        <textPath href="#stamp-circle" startOffset="0">
          Communication · Engagée · Éthique ·{" "}
        </textPath>
      </text>
      <path
        d="M70 84 C 56 74, 52 64, 60 58 C 66 54, 70 60, 70 64 C 70 60, 74 54, 80 58 C 88 64, 84 74, 70 84 Z"
        fill="var(--rose-dark)"
      />
    </svg>
  );
}

/* — Hero — */

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-12 md:gap-8 md:py-20">
        {/* Colonne gauche */}
        <div className="relative md:col-span-7">
          <div className="inline-flex items-center rounded-full bg-rose-light px-4 py-2">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-rose-dark">
              Agence de communication éthique
            </span>
          </div>

          <h1 className="mt-8 text-5xl leading-[1.02] text-ink md:text-6xl lg:text-7xl">
            Gagnez en <em>visibilité</em>
            <br />
            sans vendre votre âme.
          </h1>

          <p className="mt-8 max-w-xl font-mono text-base text-ink md:text-[15px]">
            Vous portez un projet plus doux pour le monde ? Votre com' mérite
            mieux que «&nbsp;je posterai lundi&nbsp;» <em>(on est jeudi)</em>.
            On s'en occupe.
          </p>

          <p className="mt-4 max-w-xl font-mono text-sm text-ink">
            Pour les solopreneur·es, créateur·ices, artisan·es, assos,
            coopératives et PME à impact.
          </p>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-primary py-3 pl-7 pr-3 font-mono text-sm uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-[color:var(--bordeaux)]"
          >
            Réserver un appel découverte
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-ink transition-transform group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>

          {/* Bandeau stats */}
          <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="font-serif text-3xl text-ink md:text-4xl">
                  {s.value}
                </dt>
                <dd className="mt-2 font-mono text-[11px] uppercase tracking-[0.15em] text-ink/70">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Colonne droite */}
        <div className="relative md:col-span-5">
          {/* Photo (inclut déjà les pills services et le blob rose) */}
          <div className="relative z-10 mx-auto w-full max-w-md">
            <img
              src={laetitiaAsset.url}
              alt="Laetitia Mattioli, fondatrice de Nowadays — agence de communication engagée et éthique"
              className="h-auto w-full object-contain"
              loading="eager"
            />
          </div>

          {/* Stickers décoratifs conservés autour de la photo */}
          <div className="pointer-events-none absolute -right-2 -top-2 z-20 h-14 w-14 md:h-16 md:w-16">
            <CrownSticker />
          </div>
          <div className="pointer-events-none absolute right-0 top-1/3 z-20 hidden h-24 w-24 md:block md:h-28 md:w-28">
            <EngageStamp />
          </div>
        </div>
      </div>
    </section>
  );
}
