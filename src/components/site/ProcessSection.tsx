const STEPS = [
  {
    n: 1,
    title: (
      <>
        On se <em className="not-italic font-serif italic text-[var(--rose-dark)]">parle</em>.
      </>
    ),
    text: (
      <>
        Un <strong>appel découverte de 30 minutes</strong> pour comprendre votre projet, vos besoins, vos contraintes. Gratuit, sans engagement. On fait le point ensemble et on vous dit honnêtement si on peut vous aider (et comment).
      </>
    ),
  },
  {
    n: 2,
    title: (
      <>
        On construit votre <em className="not-italic font-serif italic text-[var(--rose-dark)]">plan</em>.
      </>
    ),
    text: (
      <>
        Pas de package générique. Une <strong>proposition sur-mesure</strong>, adaptée à votre réalité : votre budget, votre temps disponible, vos objectifs. Vous savez exactement ce qu'on va faire, quand et combien ça coûte.
      </>
    ),
  },
  {
    n: 3,
    title: (
      <>
        On <em className="not-italic font-serif italic text-[var(--rose-dark)]">avance</em>.
      </>
    ),
    text: (
      <>
        Vous n'êtes plus seul·e avec votre com'. Que vous choisissiez <strong>d'apprendre ou de déléguer</strong>, les choses bougent. À la fin, c'est fait, pas « à faire ».
      </>
    ),
  },
];

export function ProcessSection() {
  return (
    <section className="bg-[var(--cream)] py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--rose-dark)]">
            Comment ça marche
          </p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] text-[var(--ink)]">
            3 étapes pour transformer votre communication.{" "}
            <em className="italic text-[var(--rose-dark)]">Zéro prise de tête.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-mono text-[0.95rem] leading-[1.65] text-[var(--ink)]">
            Un parcours simple pour passer de « je galère avec ma com' » à « c'est en place et ça tourne ».
          </p>
        </div>

        {/* Timeline */}
        <div className="rounded-[32px] bg-[var(--rose-light)] px-5 py-6 md:px-12 md:py-10">
          <ol className="relative">
            {/* Vertical line */}
            <span
              aria-hidden
              className="pointer-events-none absolute left-[21px] top-12 bottom-12 w-px bg-[var(--rose-soft)] md:left-[27px]"
            />
            {STEPS.map((s) => (
              <li
                key={s.n}
                className="group relative flex items-start gap-5 py-6 md:gap-7 md:py-7"
              >
                <span
                  className="relative z-10 flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-full border-2 border-[var(--rose-dark)] bg-[var(--cream)] font-serif italic text-[var(--rose-dark)] transition-colors duration-300 group-hover:bg-[var(--rose-dark)] group-hover:text-[var(--cream)] md:h-[54px] md:w-[54px] md:text-lg"
                  aria-hidden
                >
                  {s.n}
                </span>
                <div className="flex-1 pt-1">
                  <h3 className="mb-2 font-serif text-xl leading-[1.3] text-[var(--ink)] md:text-[1.4rem]">
                    {s.title}
                  </h3>
                  <p className="font-mono text-[0.95rem] leading-[1.65] text-[var(--ink)]">
                    {s.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
