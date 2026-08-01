import { CtaInline } from "./CtaInline";

const FONDATIONS = [
  "Votre offre",
  "La désirabilité",
  "Vos messages",
  "Votre positionnement",
] as const;

const ACTIONS = [
  "On reprend votre compte Instagram et votre LinkedIn",
  "On construit votre stratégie presse",
  "On va chercher des partenariats et collaborations",
  "On active la visibilité locale",
  "On diffuse avec de la publicité sponsorisée, quand ça vaut le coup",
  "On automatise et on utilise l'IA de manière éthique",
] as const;

export function HomeConcretement() {
  return (
    <section className="section rose" id="concret">
      <div className="wrap">
        <div className="concrete-intro">
          <div>
            <span className="eyebrow">Le travail</span>
            <h2>Concrètement, on fait quoi ensemble ?</h2>
          </div>
          <p className="lead">
            <em>On ne commence jamais par poster. On commence par vous écouter.</em>
          </p>
        </div>

        <div className="concrete-grid">
          <div className="foundation grid-soft card">
            <div className="big-num">01</div>
            {/* Espace fine insécable avant le « ? » : sinon il tombe seul
                sur la ligne suivante dans cette colonne étroite. */}
            <h3>Et si on commençait par le début&#8239;?</h3>
            <p>
              Qu'est-ce que vous proposez ? Comment on le rend désirable ? Quels sont vos messages,
              votre positionnement, ce qui vous différencie ? De là, on construit votre plan de
              communication.
            </p>
            <div className="foundation-tags">
              {FONDATIONS.map((tag) => (
                <span className="foundation-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="actions-stage card">
            <div className="big-num">02</div>
            <h3>Ensuite, on passe à l'action.</h3>
            <div className="action-ribbon">
              {ACTIONS.map((action) => (
                <div className="action-item" key={action}>
                  {action}
                </div>
              ))}
            </div>
          </div>
        </div>

        <CtaInline accroche="On regarde ensemble ce qui manque à votre com' ?" />
      </div>
    </section>
  );
}
