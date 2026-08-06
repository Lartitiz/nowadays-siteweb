import { Link } from "@tanstack/react-router";
// Logo servi comme fichier du repo (design system : jamais de base64, et pas de
// dépendance au pipeline d'assets Lovable).
const LOGO = "/images/logo-nowadays.png";
import { ASSISTANT_URL } from "./constants";

export function DaFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="brand" aria-label="Nowadays Agency">
              <img className="logo logo-footer" width={900} height={295} src={LOGO} alt="Nowadays Agency" loading="lazy" />
            </div>
            <p>
              Agence de communication pop &amp; engagée pour les projets qui font bouger le monde.
            </p>
            <p className="mt-4 text-xs text-ink/70">
              <a href="mailto:laetitia@nowadaysagency.com" className="hover:text-framboise">laetitia@nowadaysagency.com</a>
            </p>
          </div>

          <div>
            <h4>Avancer ensemble</h4>
            <ul>
              <li>
                <Link to="/accompagnement-communication">Ta binôme de com'</Link>
              </li>
              <li>
                <Link to="/cooperative-asso">Votre agency de com'</Link>
              </li>
              <li>
                <Link to="/a-propos">À propos</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Faire circuler</h4>
            <ul>
              <li>
                <Link to="/blog">Les Tracts (le blog)</Link>
              </li>
              <li>
                <Link to="/" hash="manifeste">
                  Le Manifeste
                </Link>
              </li>
              <li>
                <Link to="/demarche-ethique">Notre démarche éthique</Link>
              </li>
              <li>
                <Link to="/" hash="megaphone">
                  Le Mégaphone
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>À emporter, gratuitement</h4>
            <ul>
              <li>
                <Link to="/formation-gratuite-instagram">La formation Instagram</Link>
              </li>
              <li>
                <Link to="/guide-storytelling">Le guide storytelling</Link>
              </li>
              <li>
                <Link to="/template-branding">Le template branding</Link>
              </li>
              <li>
                {/* Menait vers l'Assistant, exactement comme la ligne suivante :
                    deux libellés, une seule destination. Le calendrier a sa
                    propre page d'aimant, c'est elle qu'il faut servir. */}
                <Link to="/template-calendrier-editorial">Le calendrier éditorial</Link>
              </li>
              <li>
                <a href={ASSISTANT_URL} target="_blank" rel="noopener">
                  Le template plan de com'
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Nowadays Agency</span>
          <span>Joigny · Paris · Partout où les projets engagés ont besoin d'une voix.</span>
          <Link to="/mentions-legales" className="hover:text-framboise">Mentions légales</Link>
        </div>
      </div>
    </footer>
  );
}
