import { ArrowRight } from "lucide-react";

const CALENDLY_URL =
  "https://calendly.com/laetitia-mattioli/30-min-de-diagnostic-offert";

const STATS: Array<{ value: string; label: string }> = [
  { value: "+10 ans", label: "d'expérience" },
  { value: "+1200", label: "projets accompagnés" },
  { value: "100%", label: "engagés" },
  { value: "0%", label: "bullshit" },
];

type Bubble = {
  label: string;
  bg: string;
  fg: string;
  border?: string;
  /** position relative to the centered hero column */
  className: string;
  rotate: string;
};

const SERVICES: Bubble[] = [
  {
    label: "branding",
    bg: "var(--rose-soft)",
    fg: "var(--ink)",
    className: "left-[2%] top-[8%] md:left-[6%] md:top-[12%]",
    rotate: "-rotate-6",
  },
  {
    label: "story telling",
    bg: "var(--cream)",
    fg: "var(--bordeaux)",
    border: "var(--rose-dark)",
    className: "right-[4%] top-[6%] md:right-[8%] md:top-[10%]",
    rotate: "rotate-3",
  },
  {
    label: "réseaux sociaux",
    bg: "var(--yellow)",
    fg: "var(--ink)",
    className: "left-[-1%] top-[44%] md:left-[2%] md:top-[46%]",
    rotate: "-rotate-3",
  },
  {
    label: "SEO",
    bg: "var(--bordeaux)",
    fg: "var(--cream)",
    className: "right-[2%] top-[40%] md:right-[4%] md:top-[42%]",
    rotate: "rotate-6",
  },
  {
    label: "emailing",
    bg: "var(--rose-light)",
    fg: "var(--rose-dark)",
    border: "var(--rose-dark)",
    className: "left-[6%] bottom-[8%] md:left-[10%] md:bottom-[12%]",
    rotate: "rotate-3",
  },
  {
    label: "site web",
    bg: "var(--orange)",
    fg: "var(--ink)",
    className: "right-[6%] bottom-[10%] md:right-[12%] md:bottom-[14%]",
    rotate: "-rotate-6",
  },
];

/* — Stickers — */

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

function ServiceBubble({ b }: { b: Bubble }) {
  return (
    <div
      className={`pointer-events-none absolute z-20 ${b.className} ${b.rotate}`}
    >
      <span
        className="inline-flex items-center rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] shadow-[0_8px_20px_rgba(145,1,75,0.10)] md:text-xs"
        style={{
          backgroundColor: b.bg,
          color: b.fg,
          border: b.border ? `1.5px solid ${b.border}` : undefined,
        }}
      >
        {b.label}
      </span>
    </div>
  );
}

/* — Hero — */

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        {/* Stickers décoratifs */}
        <div className="pointer-events-none absolute left-6 top-10 z-20 h-12 w-12 md:left-10 md:top-12 md:h-14 md:w-14">
          <CrownSticker />
        </div>
        <div className="pointer-events-none absolute right-4 top-4 z-20 hidden h-24 w-24 md:block md:h-28 md:w-28">
          <EngageStamp />
        </div>

        {/* Bulles de services flottantes */}
        {SERVICES.map((b) => (
          <ServiceBubble key={b.label} b={b} />
        ))}

        {/* Contenu centré */}
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
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
          <dl className="mt-16 grid w-full grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-4">
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
      </div>
    </section>
  );
}
