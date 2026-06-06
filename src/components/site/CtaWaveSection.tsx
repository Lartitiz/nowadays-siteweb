export function CtaWaveSection() {
  return (
    <section className="relative bg-cream">
      {/* Vague haut : transition cream → rose-light */}
      <svg
        className="block w-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,40 C240,80 480,0 720,30 C960,60 1200,80 1440,40 L1440,80 L0,80 Z"
          fill="var(--rose-light)"
        />
      </svg>

      <div className="bg-rose-light">
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32 text-center">
          <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] text-ink">
            Prête à communiquer autrement ?
          </h2>

          <p className="mt-8 font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-ink">
            Nowadays, votre agence de communication engagée au service de projets éthiques
          </p>

          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-rose-dark px-10 py-5 font-mono text-sm font-semibold uppercase tracking-[0.12em] text-cream transition-colors hover:bg-bordeaux"
            >
              Réserver un appel découverte
            </a>
          </div>
        </div>
      </div>

      {/* Vague bas : transition rose-light → cream */}
      <svg
        className="block w-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,40 C240,0 480,80 720,50 C960,20 1200,0 1440,40 L1440,0 L0,0 Z"
          fill="var(--rose-light)"
        />
      </svg>
    </section>
  );
}
