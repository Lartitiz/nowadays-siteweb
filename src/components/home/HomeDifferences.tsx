import { Pill } from "@/components/da/Pill";
const SAVOIR_FAIRE = [
  "Branding",
  "Instagram",
  "Pinterest",
  "Influence",
  "Storytelling",
  "Référencement naturel",
  "Contenu éditorial",
  "Emailing",
  "Relations presse",
  "Acquisition",
  "Site web",
  "Publicité sponsorisée",
] as const;

export function HomeDifferences() {
  return (
    <section className="section rose">
      <div className="wrap">
        <Pill>Ce qui nous rend différentes</Pill>
        <h2>Pas votre agence de communication classique.</h2>

        <div className="diff-grid">
          <article className="diff-main">
            <div className="index">01</div>
            <h3>Une com' qui donne envie.</h3>
            <p className="lead">
              Être éthique, ce n'est pas être ennuyeux. Exit les visuels tristes en vert sapin.
              Place aux récits beaux et désirables.
            </p>
          </article>

          <article className="diff-item">
            <div className="index">02</div>
            <h3>Du travail concret.</h3>
            <p>
              Vous payez pour du travail concret, pas pour financer un open space sur les
              Champs-Élysées.
            </p>
          </article>

          <article className="diff-item">
            <div className="index">03</div>
            <h3>+150 projets engagés.</h3>
            <p>
              De la créatrice artisane à la coopérative nationale : on connaît vos enjeux et vos
              contraintes.
            </p>
          </article>
        </div>

        <p className="tools-lead">
          <em>Ce qu'on fait, et qu'on adore faire :</em>
        </p>
        <div className="skills">
          {SAVOIR_FAIRE.map((skill) => (
            <span className="skill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
