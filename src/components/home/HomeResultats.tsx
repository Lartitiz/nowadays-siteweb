import { CtaInline } from "./CtaInline";

const RESULTATS = [
  {
    nom: "L214",
    action:
      "Un camion immersif et des micro-influenceur·ses mobilisé·es pour dénoncer l'élevage intensif.",
    chiffre: "500 000 vues",
    suite: "et plus de 10 000 signatures.",
  },
  {
    nom: "L'Atelier des Lunettes",
    action:
      "Présence renforcée sur Instagram, Facebook et LinkedIn, site web refondu, manifeste écrit.",
    chiffre: "+46 % de reach",
    suite:
      "première page Google, +2 000 abonné·es. Dans les mois qui ont suivi : trois embauches et une nouvelle boutique.",
  },
  {
    nom: "Coopérative Oasis",
    action: "Identité, storytelling et community management pour leur festival.",
    chiffre: "700 personnes réunies",
    suite: "60 places vendues en entier, +10 000 abonné·es en un an.",
  },
  {
    nom: "Péline, coach SOPK",
    action: "Six mois de binôme : positionnement, offre et contenus.",
    chiffre: "Accompagnement remboursé",
    suite: "dès le deuxième mois, grâce aux client·es gagnées.",
  },
] as const;

export function HomeResultats() {
  return (
    <section className="section results" id="resultats">
      <div className="wrap">
        <span className="eyebrow yellow">Quatre exemples</span>
        <h2>Ce qu'on a mis en place, et ce que ça a donné.</h2>

        <div className="result-list">
          {RESULTATS.map((resultat) => (
            <article className="result" key={resultat.nom}>
              <div className="result-name">{resultat.nom}</div>
              <div className="result-action">{resultat.action}</div>
              <div className="arrow-solid" aria-hidden="true" />
              <div className="result-outcome">
                <strong>{resultat.chiffre}</strong>
                {resultat.suite}
              </div>
            </article>
          ))}
        </div>

        <CtaInline accroche="Et si le prochain exemple, c'était le vôtre ?" />
      </div>
    </section>
  );
}
