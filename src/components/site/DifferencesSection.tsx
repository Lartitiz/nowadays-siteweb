const CARDS = [
  {
    label: "Tarifs",
    title: (
      <>
        Des prix <em className="not-italic italic text-[var(--rose-dark)]">accessibles</em>.
      </>
    ),
    text: (
      <>
        Pas une grosse agence avec des bureaux sur les Champs-Élysées. Des tarifs pensés pour des structures comme les vôtres. <strong className="font-normal text-[var(--bordeaux)]">Vous payez pour du travail concret</strong>, pas pour financer un open space.
      </>
    ),
  },
  {
    label: "Création",
    title: (
      <>
        Une com' qui <em className="not-italic italic text-[var(--rose-dark)]">donne envie</em>.
      </>
    ),
    text: (
      <>
        Être éthique, ce n'est pas être ennuyeux. Exit les visuels tristes en vert sapin et les discours culpabilisants. <strong className="font-normal text-[var(--bordeaux)]">Place aux récits beaux, désirables</strong>, qui donnent envie de s'engager.
      </>
    ),
  },
  {
    label: "Expérience",
    title: (
      <>
        <em className="not-italic italic text-[var(--rose-dark)]">+100 projets</em> engagés depuis 2017.
      </>
    ),
    text: (
      <>
        De la créatrice artisane à la coopérative nationale : on connaît vos enjeux, vos valeurs et vos contraintes. <strong className="font-normal text-[var(--bordeaux)]">L214, ENSAD, Coopérative Oasis, Sea Shepherd</strong> nous font confiance.
      </>
    ),
  },
];

export function DifferencesSection() {
  return (
    <section className="bg-[var(--cream)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="text-center mb-14 md:mb-20">
          <p className="font-mono text-xs md:text-sm tracking-[0.22em] uppercase text-[var(--rose-dark)] mb-6">
            Pas votre agence de communication classique
          </p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] text-[var(--ink)]">
            Ce qui nous rend <em className="not-italic italic text-[var(--rose-dark)]">différentes</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {CARDS.map((card, i) => (
            <article
              key={i}
              className="group relative rounded-[28px] bg-white border border-[var(--rose-soft)] p-8 md:p-10 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-[var(--rose-dark)] hover:shadow-[0_20px_50px_-25px_rgba(145,1,75,0.35)]"
            >
              <div className="flex items-baseline justify-between mb-8 pb-6 border-b border-[var(--rose-soft)]">
                <span className="font-serif text-5xl md:text-6xl text-[var(--rose-dark)] leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--bordeaux)]">
                  {card.label}
                </span>
              </div>

              <h3 className="font-serif text-2xl md:text-[1.75rem] leading-[1.15] text-[var(--ink)] mb-5">
                {card.title}
              </h3>

              <p className="font-mono text-[14px] leading-[1.75] text-[var(--ink)]">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
