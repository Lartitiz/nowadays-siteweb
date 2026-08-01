import { Pill } from "@/components/da/Pill";
import { Link } from "@tanstack/react-router";
import { Megaphone } from "@/components/da/primitives";
import { StickerNote } from "@/components/da/StickerNote";

export function HomeManifeste() {
  return (
    <section className="section manifesto" id="manifeste">
      <div className="wrap manifesto-grid">
        <div>
          <Pill ton="jaune">Notre manifeste</Pill>
          <h2>Une communication engagée comme outil d'émancipation.</h2>
          <p className="lead">
            La visibilité, c'est déjà une forme de liberté. Une créatrice qui vit de son métier,
            c'est une personne de moins qui subit un travail qu'elle n'a pas choisi. Une association
            qu'on entend, c'est une cause qui avance. Rendre visible, ce n'est pas décorer : c'est
            donner à un projet les moyens d'exister. Et on choisit de le faire dans le beau et dans
            la joie.
          </p>
          <p className="signature-line">
            <em>Parce que le beau n'est pas futile : c'est un levier de changement.</em>
          </p>
        </div>

        <StickerNote lien={<Link to="/demarche-ethique">Notre démarche</Link>}>
          « 100 % éthique », ça n'existe pas.
          <br />
          Plus éthique chaque année, oui.
        </StickerNote>

        <div className="manifesto-mark">
          <Megaphone />
        </div>
      </div>
    </section>
  );
}
