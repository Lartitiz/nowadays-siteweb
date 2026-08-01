import { useState } from "react";
import nowadaysLogo from "@/assets/nowadays-logo-v2.webp.asset.json";
import { CALENDLY_URL } from "./constants";

const LIENS = [
  { label: "Faire ensemble", href: "#solutions" },
  { label: "Déléguer", href: "#solutions" },
  { label: "Résultats", href: "#resultats" },
] as const;

export function DaHeader() {
  // Le bouton « Menu » de la maquette était décoratif : ici il ouvre vraiment
  // la navigation sous 950 px.
  const [ouvert, setOuvert] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap">
        <nav>
          <a className="brand" href="#top" aria-label="Nowadays Agency">
            <img className="logo" src={nowadaysLogo.url} alt="Nowadays Agency" />
          </a>

          <div className="navlinks">
            {LIENS.map((lien) => (
              <a key={lien.label} href={lien.href}>
                {lien.label}
              </a>
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
                <a href={lien.href} onClick={() => setOuvert(false)}>
                  {lien.label}
                </a>
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
