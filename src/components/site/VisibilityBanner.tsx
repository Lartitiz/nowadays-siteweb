export function VisibilityBanner() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div
          className="rounded-[28px] px-8 py-14 text-center md:px-16 md:py-20"
          style={{ backgroundColor: "var(--rose-light)" }}
        >
          <p className="font-serif text-2xl leading-[1.55] text-ink md:text-[1.9rem] md:leading-[1.6]">
            Chez Nowadays, nous vous accompagnons à{" "}
            <span
              className="whitespace-nowrap rounded-full px-3 py-0.5 italic text-cream"
              style={{ backgroundColor: "var(--bordeaux)" }}
            >
              vous rendre visible
            </span>{" "}
            grâce à une communication <em>joyeuse</em>, <em>éthique</em> et{" "}
            <em>efficace</em>.
          </p>
        </div>
      </div>
    </section>
  );
}
