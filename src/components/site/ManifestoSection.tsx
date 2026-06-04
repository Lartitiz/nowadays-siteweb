export function ManifestoSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="relative mx-auto flex max-w-3xl flex-col px-6">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--bordeaux)]">
          Notre manifeste
        </p>

        <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] text-ink">
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
