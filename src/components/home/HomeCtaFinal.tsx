import { Pill } from "@/components/da/Pill";
import { VichyBand } from "@/components/da/VichyBand";
import { CALENDLY_URL } from "@/components/da/constants";

export function HomeCtaFinal() {
  return (
    <>
      <VichyBand />

      <section className="final-cta">
        <div className="wrap">
          <Pill ton="bordeaux">Le point de rendez-vous</Pill>
          <h2>Prêt·es à avancer ?</h2>
          <p className="lead">
            Réservez un appel découverte de 30 minutes. On fait le point sur votre projet, vos
            besoins, et je vous dis honnêtement si je peux vous aider, et comment.
          </p>
          <div className="actions">
            <a className="btn btn-plum" href={CALENDLY_URL}>
              Réserver mon appel découverte
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
