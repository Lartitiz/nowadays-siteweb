import type { ReactNode } from "react";

// Carte à bordure pointillée : l'effet papier découpé, réservé aux blocs
// d'auto-qualification (« c'est pour vous si » / « pas pour vous si »).
// À garder rare, sinon ça devient un tic.
export function CardPointillee({
  titre,
  children,
  ton = "rose",
}: {
  titre: string;
  children: ReactNode;
  ton?: "rose" | "gris";
}) {
  return (
    <article className={`carte-pointillee carte-pointillee--${ton} card`}>
      <h3>{titre}</h3>
      {children}
    </article>
  );
}
