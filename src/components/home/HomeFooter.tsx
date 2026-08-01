import { Link } from "@tanstack/react-router";
import nowadaysLogo from "@/assets/nowadays-logo-v2.webp.asset.json";
import { ASSISTANT_URL } from "./constants";

export function HomeFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="brand" aria-label="Nowadays Agency">
              <img
                className="logo logo-footer"
                src={nowadaysLogo.url}
                alt="Nowadays Agency"
                loading="lazy"
              />
            </div>
            <p>
              Agence de communication pop &amp; engagée pour les projets qui font bouger le monde.
            </p>
          </div>

          <div>
            <h4>Avancer ensemble</h4>
            <ul>
              <li>
                <Link to="/accompagnement-communication">Ta binôme de com'</Link>
              </li>
              <li>
                <Link to="/cooperative-asso">Ton agency de com'</Link>
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
                <a href="#manifeste">Le Manifeste</a>
              </li>
              <li>
                <a href="#megaphone">Le Mégaphone</a>
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
                <a href={ASSISTANT_URL} target="_blank" rel="noopener">
                  Le calendrier éditorial
                </a>
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
        </div>
      </div>
    </footer>
  );
}
