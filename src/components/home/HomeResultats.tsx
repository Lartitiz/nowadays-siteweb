import { Pill } from "@/components/da/Pill";
import { CtaInline } from "@/components/da/CtaInline";
import logoL214 from "@/assets/logos-resultats/l214.png.asset.json";
import logoAtelier from "@/assets/logos-resultats/atelier-des-lunettes.png.asset.json";
import logoOasis from "@/assets/logos-resultats/cooperative-oasis.png.asset.json";
import logoPeline from "@/assets/logos-resultats/peline-coach-sopk.jpg.asset.json";

const RESULTATS = [
  {
    nom: "L214",
    logo: logoL214.url,
    action:
      "Un camion immersif et des micro-influenceur·ses mobilisé·es pour dénoncer l'élevage intensif.",
    chiffre: "500 000 vues",
    suite: "et plus de 10 000 signatures à la pétition.",
  },
  {
    nom: "L'Atelier des Lunettes",
    logo: logoAtelier.url,
    action:
      "Présence renforcée sur Instagram, Facebook et LinkedIn, site web refondu, manifeste écrit.",
    chiffre: "+46 % de reach",
    suite:
      "première page Google, +2 000 abonné·es. Dans les mois qui ont suivi : trois embauches et une nouvelle boutique.",
  },
  {
    nom: "Coopérative Oasis",
    logo: logoOasis.url,
    action: "Identité, storytelling et community management pour leur festival.",
    chiffre: "700 personnes réunies",
    suite: "60 places vendues en entier, +10 000 abonné·es en un an.",
  },
  {
    nom: "Péline, coach SOPK",
    logo: logoPeline.url,
    action: "Six mois de binôme : positionnement, offre et contenus.",
    chiffre: "Accompagnement remboursé",
    suite: "dès le deuxième mois, grâce aux client·es gagnées.",
  },
] as const;

export function HomeResultats() {
  return (
    <section className="section results" id="resultats">
      <div className="wrap">
        <Pill ton="jaune">Quatre exemples</Pill>
        <h2>Ce qu'on a mis en place, et ce que ça a donné.</h2>

        <div className="result-list">
          {RESULTATS.map((resultat) => (
            <article className="result" key={resultat.nom}>
              <div className="result-logo">
                <img src={resultat.logo} alt={`Logo ${resultat.nom}`} loading="lazy" />
              </div>
              <div className="result-action">{resultat.action}</div>
              <div className="arrow-solid" aria-hidden="true" />
              <div className="result-outcome whitespace-pre-line">
                <strong>{resultat.chiffre}</strong>
                {"\n"}{resultat.suite}
              </div>
            </article>
          ))}
        </div>

        <CtaInline accroche="Et si le prochain exemple, c'était le vôtre ?" />
      </div>
    </section>
  );
}
