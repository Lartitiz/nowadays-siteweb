import type { ReactNode } from "react";

// Post-it incliné : réservé aux verbatims et aux constats. C'est la seule
// famille de blocs qui a le droit de pencher.
//
// Le composant ne porte que l'aspect ; le placement (absolu dans le constat de
// la home, en grille ailleurs) reste à la charge de la page, via `className`.
type Couleur = "rose-doux" | "jaune" | "rose";

export function PostIt({
  titre,
  children,
  couleur = "rose-doux",
  className = "",
}: {
  titre?: string;
  children: ReactNode;
  couleur?: Couleur;
  className?: string;
}) {
  return (
    <div className={`post-it post-it--${couleur} ${className}`.trim()}>
      {titre && <b>{titre}</b>}
      {children}
    </div>
  );
}
