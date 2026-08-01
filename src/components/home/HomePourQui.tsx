const POUR_VOUS = [
  "vous portez un projet éthique, engagé ou artisanal ;",
  "vous voulez poser la base avant d'empiler des contenus ;",
  "vous cherchez du concret : stratégie, livrables et mise en place ;",
  "vous voulez garder la main, ou déléguer sans perdre votre voix.",
] as const;

const PAS_POUR_VOUS = [
  "vous voulez devenir viral·e le mois prochain ;",
  "vous voulez qu'on copie le compte d'un concurrent, à la virgule près ;",
  "vous comptez valider vos contenus une fois par trimestre, entre deux avions ;",
  "vous vendez des formations pour devenir riche en dormant, et vous roulez en Lamborghini.",
] as const;

export function HomePourQui() {
  return (
    <section className="section">
      <div className="wrap">
        <span className="eyebrow">Pour qui</span>
        <h2>La bonne collaboration, c'est aussi savoir où on met les pieds.</h2>

        <div className="audience-grid">
          <article className="audience-card yes card">
            <h3>C'est pour vous si…</h3>
            <ul>
              {POUR_VOUS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="audience-card no card">
            <h3>Ce n'est probablement pas pour vous si…</h3>
            <ul>
              {PAS_POUR_VOUS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
