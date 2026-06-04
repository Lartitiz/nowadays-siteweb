export function FinalCtaSection() {
  return (
    <section id="contact" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] text-ink">
          Prêt·es à <em>avancer</em> ?
        </h2>

        <p className="mx-auto mt-8 max-w-[62ch] font-mono text-base md:text-lg text-ink leading-relaxed">
          Réservez un appel découverte de 30 minutes. On fait le point sur votre projet,
          vos besoins, et je vous dis honnêtement si je peux vous aider (et comment).
        </p>

        <div className="mt-12">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-rose-dark px-10 py-5 font-mono text-sm font-semibold uppercase tracking-[0.12em] text-cream transition-colors hover:bg-bordeaux"
          >
            Réserver mon appel découverte (gratuit)
          </a>
        </div>
      </div>
    </section>
  );
}
