import { CALENDLY_URL } from "./constants";

// CTA final des pages intérieures : la seule zone colorée pleine de la page.
// Sur le jaune, le bouton est bordeaux (le jaune ne porte jamais de texte blanc).
//
// Reprend mot pour mot le texte de l'ancien FinalCtaSection, qui reste en place
// pour les pages pas encore converties.
export function CtaFinal() {
  return (
    <section id="contact" className="final-cta centre">
      <div className="flower" aria-hidden="true" />
      <div className="wrap">
        <h2>
          Prêt·es à <em>avancer</em> ?
        </h2>
        <p className="lead" style={{ marginTop: 24 }}>
          Réservez un appel découverte de 30 minutes. On fait le point sur votre projet, vos
          besoins, et je vous dis honnêtement si je peux vous aider (et comment).
        </p>
        <div className="actions">
          <a className="btn btn-plum" href={CALENDLY_URL} target="_blank" rel="noopener">
            Réserver un appel découverte
          </a>
        </div>
        <span className="cta-note">30 minutes, gratuites, sans engagement.</span>
      </div>
    </section>
  );
}
