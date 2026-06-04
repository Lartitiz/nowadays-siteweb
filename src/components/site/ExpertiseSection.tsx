const EXPERTISES = [
  { label: "Branding", emoji: "💛" },
  { label: "Instagram", emoji: "💛" },
  { label: "Pinterest", emoji: "🩷" },
  { label: "Influence", emoji: "🧡" },
  { label: "Storytelling", emoji: "🩷" },
  { label: "Référencement", emoji: "🧡" },
  { label: "Contenu édito", emoji: "🩷" },
  { label: "Emailing", emoji: "💛" },
  { label: "Acquisition", emoji: "🧡" },
  { label: "Site web", emoji: "💛" },
];

export function ExpertiseSection() {
  return (
    <section className="bg-[var(--cream)] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] text-[var(--ink)] mb-6">
            Une <em className="not-italic italic text-[var(--rose-dark)]">expertise pointue</em>, sans le blabla corporate
          </h2>
          <p className="font-mono text-xs md:text-sm tracking-[0.22em] uppercase text-[var(--rose-dark)]">
            (Ce qu'on fait et qu'on adore faire)
          </p>
        </div>

        <ul className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
          {EXPERTISES.map((item) => (
            <li
              key={item.label}
              className="group inline-flex items-center gap-2.5 rounded-full bg-[var(--rose-light)] px-6 md:px-7 py-3.5 md:py-4 border border-transparent transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--rose-dark)] hover:bg-[var(--rose-soft)]"
            >
              <span className="text-lg leading-none" aria-hidden="true">{item.emoji}</span>
              <span className="font-mono text-[14px] md:text-[15px] text-[var(--ink)]">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
