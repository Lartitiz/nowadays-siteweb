import type { ReactNode } from "react";

import { CALENDLY_URL } from "./constants";
import { Pill } from "./Pill";
import { imageSize } from "@/lib/image-sizes";

/**
 * En-tête des pages intérieures (offres, résultats, ressources).
 *
 * Même grammaire que le hero de la page d'accueil — vichy en ouverture,
 * astérisques-confettis, carte blanche à coins asymétriques, un seul bouton —
 * mais une composition différente : la carte prend deux tiers, une photo (ou un
 * encart) prend le tiers restant. La page d'accueil garde sa carte centrée, qui
 * reste sa signature ; les pages sans visuel (les index de résultats) reprennent
 * cette carte centrée, en plus sobre.
 *
 * Ce qui change d'une famille de page à l'autre, c'est la couleur du vichy :
 *  - « jaune » pour « Faire ensemble » (binôme, créatrices) ;
 *  - « prune » pour « Déléguer » (coopératives, assos, PME) ;
 *  - « clair » pour les ressources gratuites.
 *
 * Sur le vichy jaune, la pilule jaune disparaîtrait : on passe la pilule en
 * bordeaux. Le surligneur jaune, lui, reste lisible — il est posé sur la carte
 * blanche, jamais sur le vichy.
 */

type Vichy = "jaune" | "prune" | "clair";

/**
 * Les couvertures de ressources passent par l'import Vite : leur URL est hachée
 * au build, donc absente de la table des tailles. On accepte alors les
 * dimensions à la main, pour ne pas perdre la réservation de place (le CLS).
 */
type Visuel = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  /** object-position en desktop, et dans la carte en mobile. */
  position?: string;
  positionMobile?: string;
};

function dimensions({ src, width, height }: Visuel) {
  return width && height ? { width, height } : imageSize(src);
}


// Les confettis ne doivent jamais reprendre la couleur du vichy qu'ils
// ponctuent, sinon ils s'y effacent.
const CONFETTIS: Record<Vichy, readonly [string, string, string]> = {
  jaune: ["#FB3D80", "#91014B", "#FFA7C6"],
  prune: ["#FFE561", "#FF7A33", "#FFA7C6"],
  clair: ["#FFE561", "#FB3D80", "#FF7A33"],
};

export function PageHero({
  vichy,
  pill,
  pillTon = "framboise",
  logo,
  titre,
  chapo,
  mention,
  photo,
  couverture,
  aside,
  cta = "Réserver un appel découverte",
  ctaHref = CALENDLY_URL,
  note = "30 minutes, gratuites, sans engagement.",
}: {
  vichy: Vichy;
  /** Pilule d'offre, ex. « Ta binôme de com' · 6 mois ». */
  pill?: string;
  pillTon?: "framboise" | "jaune" | "bordeaux";
  /**
   * Logo d'offre posé en haut de la carte. Quand il est fourni, il remplace la
   * pilule et les confettis : un seul signe fort en ouverture.
   */
  logo?: { src: string; alt: string; width: number };
  /** Titre H1, avec ses <em> et son surligneur. */
  titre: ReactNode;
  chapo: ReactNode;
  /** Le prix et sa modalité, ou toute mention sous le chapô. */
  mention?: ReactNode;
  /** Colonne de droite : une photo, recadrée pour remplir son cadre… */
  photo?: Visuel;
  /** …ou une couverture de ressource, montrée entière, jamais rognée… */
  couverture?: Visuel;
  /** …ou un encart (formulaire de capture, par exemple). */
  aside?: ReactNode;
  cta?: string;
  /** Une ancre interne (« #recevoir ») reste dans l'onglet courant. */
  ctaHref?: string;
  note?: string;
}) {
  const externe = ctaHref.startsWith("http");
  const visuel = photo ?? couverture;
  const colonne = visuel ? (
    <div className={photo ? "page-hero-photo" : "page-hero-cover"}>
      <img
        src={visuel.src}
        {...dimensions(visuel)}
        alt={visuel.alt}
        style={visuel.position ? { objectPosition: visuel.position } : undefined}
      />
    </div>
  ) : aside ? (
    <div className="page-hero-aside">{aside}</div>
  ) : null;

  return (
    <section className={`page-hero vichy-${vichy}${logo ? " page-hero--logo" : ""}`}>
      {logo ? null : <ConfettisBord couleurs={CONFETTIS[vichy]} />}
      <div className="wrap">
        <div className={`page-hero-grid${colonne ? "" : " solo"}`}>
          <div className="page-hero-card">
            {logo ? (
              <img
                className="page-hero-logo"
                src={logo.src}
                alt={logo.alt}
                style={{ width: logo.width }}
              />
            ) : pill ? (
              <div>
                <Pill ton={pillTon}>{pill}</Pill>
              </div>
            ) : null}
            <h1>{titre}</h1>
            <p className="page-hero-copy">{chapo}</p>
            {mention ? (
              <p className={logo ? "page-hero-prix" : "page-hero-mini"}>{mention}</p>
            ) : null}
            {cta ? (
              <>
                <div className="actions">
                  <a
                    className="btn btn-primary"
                    href={ctaHref}
                    target={externe ? "_blank" : undefined}
                    rel={externe ? "noopener" : undefined}
                  >
                    {cta}
                  </a>
                </div>
                {note ? <p className="page-hero-mini">{note}</p> : null}
              </>
            ) : null}
            {logo && photo ? (
              <img
                className="page-hero-photo-mobile"
                src={photo.src}
                alt={photo.alt}
                style={
                  photo.positionMobile ? { objectPosition: photo.positionMobile } : undefined
                }
              />
            ) : null}
          </div>
          {colonne}
        </div>
      </div>
    </section>
  );

}
