function DiscoSticker() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden>
      <circle cx="50" cy="50" r="44" fill="var(--rose-dark)" />
      <circle cx="50" cy="50" r="44" fill="url(#disco-grid)" opacity="0.4" />
      <defs>
        <pattern
          id="disco-grid"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <rect width="10" height="10" fill="var(--rose-dark)" />
          <rect width="5" height="5" fill="var(--rose-soft)" />
          <rect x="5" y="5" width="5" height="5" fill="var(--rose-soft)" />
        </pattern>
      </defs>
      {/* Étoiles autour */}
      <path
        d="M12 12 L14 18 L20 20 L14 22 L12 28 L10 22 L4 20 L10 18 Z"
        fill="var(--rose-dark)"
      />
      <path
        d="M86 18 L88 24 L94 26 L88 28 L86 34 L84 28 L78 26 L84 24 Z"
        fill="var(--rose-dark)"
      />
      <path
        d="M88 78 L90 84 L96 86 L90 88 L88 94 L86 88 L80 86 L86 84 Z"
        fill="var(--rose-dark)"
      />
    </svg>
  );
}

export function ManifestoSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="pointer-events-none absolute left-4 top-16 h-16 w-16 md:left-16 md:top-24 md:h-24 md:w-24">
        <DiscoSticker />
      </div>

      <div className="relative mx-auto flex max-w-3xl flex-col px-6">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--bordeaux)]">
          Notre manifeste
        </p>

        <h2 className="text-3xl leading-tight md:text-5xl">
          Une communication engagée
          <br />
          comme outil <em>d'émancipation</em>.
        </h2>

        <div className="mt-10 space-y-6 font-mono text-base text-foreground md:text-lg">
          <p>
            Nowadays est née d'une conviction : on peut communiquer autrement.
            Avec <em>éthique</em>, <em>beauté</em>, <em>respect</em> et{" "}
            <em>joie</em>. Sans tomber dans la violence, les stéréotypes ou la
            course au «&nbsp;toujours plus&nbsp;».
          </p>
          <p>
            Notre rôle ? Aider les projets plus doux pour le monde à trouver
            leur voix, leur visibilité et leur légitimité.
          </p>
          <p>
            Parce que pour nous le beau n'est pas futile mais{" "}
            <em>un levier de changement</em>.
          </p>
        </div>
      </div>
    </section>
  );
}
