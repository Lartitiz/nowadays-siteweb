const CARDS = [
  {
    emoji: "💰",
    title: (
      <>
        Des prix <em className="not-italic font-serif italic text-[var(--rose-dark)]">accessibles</em>.
      </>
    ),
    text: (
      <>
        Pas une grosse agence avec des bureaux sur les Champs-Élysées. Des tarifs pensés pour des structures comme les vôtres. <strong>Vous payez pour du travail concret</strong>, pas pour financer un open space.
      </>
    ),
  },
  {
    emoji: "✨",
    title: (
      <>
        Une com' qui <em className="not-italic font-serif italic text-[var(--rose-dark)]">donne envie</em>.
      </>
    ),
    text: (
      <>
        Être éthique, ce n'est pas être ennuyeux. Exit les visuels tristes en vert sapin et les discours culpabilisants. <strong>Place aux récits beaux, désirables</strong>, qui donnent envie de s'engager.
      </>
    ),
  },
  {
    emoji: "🌍",
    title: (
      <>
        <em className="not-italic font-serif italic text-[var(--rose-dark)]">+100 projets</em> engagés et lifestyle depuis 2017.
      </>
    ),
    text: (
      <>
        De la créatrice artisane à la coopérative nationale : on connaît vos enjeux, vos valeurs et vos contraintes. <strong>L214, ENSAD, Coopérative Oasis, Sea Shepherd</strong> nous font confiance.
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {CARDS.map((card, i) => (
            <article
              key={i}
              className="rounded-3xl bg-white border border-[var(--rose-soft)] p-8 md:p-10 flex flex-col gap-5 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl leading-none" aria-hidden="true">
                {card.emoji}
              </div>
              <h3 className="font-mono text-xl md:text-[1.35rem] leading-snug text-[var(--ink)] font-bold">
                {card.title}
              </h3>
              <p className="font-mono text-[15px] leading-[1.75] text-[var(--ink)]">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
