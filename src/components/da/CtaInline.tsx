import { CALENDLY_URL } from "./constants";

// Relance intercalaire, reprise à l'identique après « Concrètement »,
// « Quatre exemples » et les objections.
export function CtaInline({ accroche }: { accroche: string }) {
  return (
    <div className="cta-inline">
      <p>{accroche}</p>
      <a className="btn btn-primary" href={CALENDLY_URL}>
        Réserver un appel découverte
      </a>
      <span className="cta-note">30 minutes, gratuites, sans engagement.</span>
    </div>
  );
}
