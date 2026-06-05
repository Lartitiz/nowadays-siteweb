export function PourquoiNowadaysSection() {
  return (
    <section className="bg-[var(--rose-light)] py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Titre avec underline calligraphique */}
          <div className="lg:col-span-6">
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] text-[var(--ink)]">
              Pourquoi <em>Nowadays</em> ?
            </h2>
          </div>

          {/* Paragraphe */}
          <div className="lg:col-span-6">
            <p className="font-mono text-[14px] md:text-[15px] leading-[1.85] text-[var(--ink)] max-w-[60ch]">
              Parce que Nowadays signifie « de nos jours ». Pas pour coller à une tendance ni pour surfer sur un effet de mode, mais pour affirmer ce qui compte vraiment : construire des projets engagés avec éthique, qui respectent le vivant et participent à un avenir plus juste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
