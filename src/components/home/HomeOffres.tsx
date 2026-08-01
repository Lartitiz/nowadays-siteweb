import { Link } from "@tanstack/react-router";

export function HomeOffres() {
  return (
    <section className="section" id="solutions">
      <div className="wrap">
        <div className="offers-head">
          <span className="eyebrow">Les solutions</span>
          <h2>Votre com' mérite mieux que du bricolage.</h2>
          <p className="lead">
            On a deux façons de vous aider. À vous de choisir celle qui vous ressemble.
          </p>
        </div>

        <div className="offer-paths">
          <article className="offer left vichy card">
            <div className="offer-type">Pour les solopreneur·es</div>
            <h3>Ta binôme de com'</h3>
            <p className="offer-sub">On fait ensemble.</p>
            <p>
              Vous savez que votre com' a besoin de structure, mais vous voulez garder la main.
              Pendant 6 mois, je deviens votre bras droit : on construit votre stratégie, on crée
              vos contenus, on met tout en place. Ensemble.
            </p>
            <ul>
              <li>Stratégie, branding et plan de com' sur six mois</li>
              <li>Sessions de travail à quatre mains</li>
              <li>Livrables concrets, créés et validés ensemble</li>
            </ul>
            <div className="price">
              350 € <small>/ mois × 6 mois</small>
            </div>
            <div className="price-note">Un paiement étalé, pas un abonnement.</div>
            <div className="offer-footer">
              <Link className="btn btn-primary" to="/accompagnement-communication">
                Découvrir l'accompagnement
              </Link>
            </div>
          </article>

          <article className="offer right card">
            <div className="offer-type">Pour les structures engagées</div>
            <h3>Ton agency de com'</h3>
            <p className="offer-sub">On s'en occupe pour vous.</p>
            <p>
              Vous n'avez ni le temps, ni l'envie de gérer votre communication. On prend en charge
              votre stratégie, vos contenus et vos canaux. Vous vous concentrez sur votre mission ;
              nous, on fait le travail.
            </p>
            <ul>
              <li>Mission ou campagne construite sur mesure</li>
              <li>Une équipe légère, adaptée au projet</li>
              <li>Un budget global défini avant de commencer</li>
            </ul>
            <div className="price">À partir de 1 500 €</div>
            <p className="small muted">
              Budget global de mission ou de campagne · paiement échelonnable.
            </p>
            <div className="offer-footer">
              <Link className="btn btn-primary" to="/cooperative-asso">
                Découvrir l'Agency
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
