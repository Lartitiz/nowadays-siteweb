export function ManifestoSection() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          {/* Colonne titre */}
          <div className="md:col-span-6 lg:col-span-7">
            <p className="block font-mono text-xs uppercase tracking-[0.2em] text-rose-dark mb-8">
              Notre manifeste
            </p>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] text-ink">
              Une communication engagée comme outil{" "}
              <em>d'émancipation</em>.
            </h2>
          </div>

          {/* Colonne contenu */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col gap-8 pt-2 md:pt-24">
            <div className="font-mono text-[14px] md:text-[15px] leading-[1.85] text-ink space-y-6">
              <p>
                Nowadays est née d'une conviction : on peut communiquer
                autrement. Avec <em>éthique</em>, <em>beauté</em>,{" "}
                <em>respect</em> et <em>joie</em>. Sans tomber dans la violence,
                les stéréotypes ou la course au «&nbsp;toujours plus&nbsp;».
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

            {/* Trait final éditorial */}
            <div className="h-px w-12 bg-bordeaux mt-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
