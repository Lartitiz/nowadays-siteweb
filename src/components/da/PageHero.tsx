import type { ReactNode } from "react";

import { CALENDLY_URL } from "./constants";
import { ConfettisBord } from "./primitives";
import { Pill } from "./Pill";
import { imageSize } from "@/lib/image-sizes";

/**
 * En-tête des pages intérieures (offres et ressources).
 *
 * Même grammaire que le hero de la page d'accueil — vichy en ouverture,
 * astérisques-confettis, carte blanche à coins asymétriques, un seul bouton —
 * mais une composition différente : la carte prend deux tiers, une photo prend
 * le tiers restant. La page d'accueil garde sa carte centrée, qui reste sa
 * signature.
 *
 * Ce qui change d'une famille de page à l'autre, c'est la couleur du vichy :
 *  - « jaune » pour « Faire ensemble » (binôme, créatrices) ;
 *  - « prune » pour « Déléguer » (coopératives, assos, PME) ;
 *  - « clair » pour les ressources gratuites et les pages courtes.
 *
 * Sur le vichy jaune, la pilule jaune disparaîtrait : on passe la pilule en
 * bordeaux. Le surligneur jaune, lui, reste lisible — il est posé sur la carte
 * blanche, jamais sur le vichy.
 */

type Vichy = "jaune" | "prune" | "clair";

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
  titre,
  chapo,
  mention,
  photo,
  cta = "Réserver un appel découverte",
  note = "30 minutes, gratuites, sans engagement.",
}: {
  vichy: Vichy;
  /** Pilule d'offre, ex. « Ta binôme de com' · 6 mois ». */
  pill?: string;
  pillTon?: "framboise" | "jaune" | "bordeaux";
  /** Titre H1, avec ses <em> et son surligneur. */
  titre: ReactNode;
  chapo: ReactNode;
  /** Le prix et sa modalité, ou toute mention sous le chapô. */
  mention?: ReactNode;
  photo: { src: string; alt: string };
  cta?: string;
  note?: string;
}) {
  return (
    <section className={`page-hero vichy-${vichy}`}>
      <ConfettisBord couleurs={CONFETTIS[vichy]} />
      <div className="wrap">
        <div className="page-hero-grid">
          <div className="page-hero-card">
            {pill ? (
              <div>
                <Pill ton={pillTon}>{pill}</Pill>
              </div>
            ) : null}
            <h1>{titre}</h1>
            <p className="page-hero-copy">{chapo}</p>
            {mention ? <p className="page-hero-mini">{mention}</p> : null}
            <div className="actions">
              <a className="btn btn-primary" href={CALENDLY_URL} target="_blank" rel="noopener">
                {cta}
              </a>
            </div>
            <p className="page-hero-mini">{note}</p>
          </div>
          <div className="page-hero-photo">
            <img src={photo.src} {...imageSize(photo.src)} alt={photo.alt} />
          </div>
        </div>
      </div>
    </section>
  );
}
