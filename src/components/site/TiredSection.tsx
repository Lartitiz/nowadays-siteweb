function SparkleSticker() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden>
      <circle cx="50" cy="50" r="48" fill="var(--orange)" />
      <path
        d="M50 20 C 54 42, 58 46, 80 50 C 58 54, 54 58, 50 80 C 46 58, 42 54, 20 50 C 42 46, 46 42, 50 20 Z"
        fill="var(--cream)"
      />
    </svg>
  );
}

export function TiredSection() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--rose-light)] py-24 md:py-32">
      <div className="pointer-events-none absolute right-6 top-12 h-16 w-16 md:right-20 md:top-20 md:h-24 md:w-24">
        <SparkleSticker />
      </div>

      <div className="relative mx-auto flex max-w-3xl flex-col px-6">
        <h2 className="text-3xl leading-tight md:text-5xl">
          Fatiguée du <em>marketing agressif</em>
          <br />
          et des injonctions&nbsp;?
        </h2>

        <p className="mt-10 font-mono text-lg text-[color:var(--bordeaux)] md:text-xl">
          Nous aussi.
        </p>

        <div className="mt-8 space-y-6 font-mono text-base text-foreground/90 md:text-lg">
          <p>
            Vous portez un projet qui a du sens. Que vous soyez créateur·ice,
            freelance ou à la tête d'une structure engagée, vous y mettez tout
            : de l'attention, de l'éthique, du soin.
          </p>
          <p>Mais côté communication, c'est une autre histoire…</p>
          <p>
            Peut-être que vous postez quand vous pouvez, entre deux urgences.
            Peut-être que personne dans l'équipe n'a vraiment le temps (ni les
            compétences) de s'en occuper.
          </p>
          <p>
            Chez Nowadays, nous vous accompagnons à vous rendre visible grâce à
            une communication <em>joyeuse</em>, <em>éthique</em> et{" "}
            <em>efficace</em>.
          </p>
        </div>
      </div>
    </section>
  );
}
