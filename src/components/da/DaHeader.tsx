import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { CALENDLY_URL } from "./constants";

// Logo servi comme fichier du repo (design system : jamais de base64, et pas de
// dépendance au pipeline d'assets Lovable).
const LOGO = "/images/logo-nowadays.png";

// Menu par besoin, pas par rubrique. Les trois sections visées vivent sur la
// page d'accueil : on passe par le routeur avec une ancre, pour que le lien
// marche aussi depuis les autres pages, et sans recharger la page.
const LIENS = [
  { label: "Faire ensemble", hash: "solutions" },
  { label: "Déléguer", hash: "solutions" },
  { label: "Résultats", hash: "resultats" },
] as const;

export function DaHeader() {
  // Le bouton « Menu » de la maquette était décoratif : ici il ouvre vraiment
  // la navigation sous 950 px.
  const [ouvert, setOuvert] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap">
        <nav>
          <Link className="brand" to="/" aria-label="Nowadays Agency">
            <img className="logo" src={LOGO} alt="Nowadays Agency" />
          </Link>

          <div className="navlinks">
            {LIENS.map((lien) => (
              <Link key={lien.label} to="/" hash={lien.hash}>
                {lien.label}
              </Link>
            ))}
            <a className="btn btn-primary" href={CALENDLY_URL}>
              Appel découverte
            </a>
          </div>

          <button
            type="button"
            className="menu-btn"
            aria-expanded={ouvert}
            aria-controls="menu-mobile"
            onClick={() => setOuvert((v) => !v)}
          >
            {ouvert ? "Fermer" : "Menu"}
          </button>
        </nav>
      </div>

      <div id="menu-mobile" className={`mobile-menu${ouvert ? " open" : ""}`} hidden={!ouvert}>
        <div className="wrap">
          <ul>
            {LIENS.map((lien) => (
              <li key={lien.label}>
                <Link to="/" hash={lien.hash} onClick={() => setOuvert(false)}>
                  {lien.label}
                </Link>
              </li>
            ))}
          </ul>
          <a className="btn btn-primary" href={CALENDLY_URL} onClick={() => setOuvert(false)}>
            Appel découverte
          </a>
        </div>
      </div>
    </header>
  );
}
