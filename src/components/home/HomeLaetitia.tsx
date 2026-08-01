const FAITS = [
  "10+ ans de marketing digital",
  "150+ projets accompagnés",
  "Enseignante en grandes écoles",
] as const;

export function HomeLaetitia() {
  return (
    <section className="section" id="laetitia">
      <div className="wrap about-grid">
        <div className="about-photo">
          <img
            src="/images/home/laetitia-atelier.jpg"
            alt="Laetitia Mattioli, fondatrice de Nowadays Agency"
            loading="lazy"
          />
        </div>

        <div className="about-text">
          <span className="eyebrow">Derrière Nowadays</span>
          <h2>Enchantée, moi c'est Laetitia.</h2>
          <p className="lead">
            J'ai créé Nowadays après avoir vu trop de marques éthiques et engagées s'épuiser à
            vouloir « faire comme les autres » : courir après les algorithmes, sacrifier leurs
            valeurs pour vendre, ou se taire par peur de passer pour trop commerciales.
          </p>
          <p>
            Aujourd'hui, j'accompagne les projets engagés qui veulent plus qu'un simple plan
            marketing : fédérer une communauté, inspirer des changements concrets et bâtir un impact
            durable.
          </p>
          <div className="about-facts">
            {FAITS.map((fait) => (
              <span className="fact" key={fait}>
                {fait}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
