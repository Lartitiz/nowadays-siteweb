import { CALENDLY_URL } from "@/components/da/constants";
import { Confettis } from "@/components/da/primitives";

export function HomeHero() {
  return (
    <section className="hero vichy">
      <Confettis />
      <div className="wrap">
        <div className="hero-card">
          <p className="hero-sub">
            Agence de communication engagée et responsable
          </p>
          <h1>
            Gagnez en <span className="surligne">visibilité</span>
            <br />
            <em>sans vendre votre âme.</em>
          </h1>
          <p className="hero-copy">
            Vous portez un projet plus doux pour le monde ? Votre com' mérite mieux que « je
            posterai lundi » <em>(on est jeudi)</em>. On s'en occupe.
          </p>
          <p className="hero-audience">Créatrices, assos, coopératives, entreprises engagées.</p>
          <div className="actions">
            <a className="btn btn-primary" href={CALENDLY_URL}>
              Réserver un appel découverte
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
