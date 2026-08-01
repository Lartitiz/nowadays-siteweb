import { Link } from "@tanstack/react-router";
import { Megaphone } from "./primitives";

export function HomeManifeste() {
  return (
    <section className="section manifesto" id="manifeste">
      <div className="wrap manifesto-grid">
        <div>
          <span className="eyebrow yellow">Notre manifeste</span>
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

        <div className="sticker-ethique">
          « 100 % éthique », ça n'existe pas.
          <br />
          Plus éthique chaque année, oui.
          <Link to="/demarche-ethique">Notre démarche</Link>
        </div>

        <div className="manifesto-mark">
          <Megaphone />
        </div>
      </div>
    </section>
  );
}
