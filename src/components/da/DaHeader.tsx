import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { CALENDLY_URL } from "./constants";

// Logo servi comme fichier du repo (design system : jamais de base64, et pas de
// dépendance au pipeline d'assets Lovable).
const LOGO = "/images/logo-nowadays.png";

const LIENS_DIRECTS = [
  { label: "Faire ensemble", to: "/accompagnement-communication" },
  { label: "Déléguer", to: "/cooperative-asso" },
] as const;

const RESULTATS = [
  { label: "Assos & coopératives", to: "/etudes-de-cas-pro" },
  { label: "Créatrices éthiques", to: "/creatrices-ethiques" },
] as const;

function NavDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="nav-dropdown"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="nav-dropdown-trigger"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        Résultats
        <span className="nav-dropdown-chevron" aria-hidden="true">
          ▾
        </span>
      </button>
      <div className={`nav-dropdown-panel${open ? " open" : ""}`}>
        {RESULTATS.map((lien) => (
          <Link
            key={lien.label}
            to={lien.to}
            className="nav-dropdown-item"
            onClick={() => setOpen(false)}
          >
            {lien.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function DaHeader() {
  // Le bouton « Menu » de la maquette était décoratif : ici il ouvre vraiment
  // la navigation sous 950 px.
  const [ouvert, setOuvert] = useState(false);
  const [resultatsOuverts, setResultatsOuverts] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap">
        <nav>
          <Link className="brand" to="/" aria-label="Nowadays Agency">
            <img className="logo" width={900} height={295} src={LOGO} alt="Nowadays Agency" />
          </Link>

          <div className="navlinks">
            {LIENS_DIRECTS.map((lien) => (
              <Link key={lien.label} to={lien.to}>
                {lien.label}
              </Link>
            ))}
            <NavDropdown />
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
            {LIENS_DIRECTS.map((lien) => (
              <li key={lien.label}>
                <Link to={lien.to} onClick={() => setOuvert(false)}>
                  {lien.label}
                </Link>
              </li>
            ))}
            <li className="mobile-dropdown">
              <button
                type="button"
                className="mobile-dropdown-trigger"
                aria-expanded={resultatsOuverts}
                onClick={() => setResultatsOuverts((v) => !v)}
              >
                Résultats
                <span className={`mobile-dropdown-chevron${resultatsOuverts ? " open" : ""}`} aria-hidden="true">
                  ▾
                </span>
              </button>
              <ul className={`mobile-dropdown-list${resultatsOuverts ? " open" : ""}`}>
                {RESULTATS.map((lien) => (
                  <li key={lien.label}>
                    <Link to={lien.to} onClick={() => setOuvert(false)}>
                      {lien.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <a className="btn btn-primary" href={CALENDLY_URL} onClick={() => setOuvert(false)}>
            Appel découverte
          </a>
        </div>
      </div>
    </header>
  );
}
