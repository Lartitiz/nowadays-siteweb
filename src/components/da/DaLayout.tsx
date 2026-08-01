import type { ReactNode } from "react";
import { DaHeader } from "./DaHeader";
import { DaFooter } from "./DaFooter";

// Gabarit des pages passées à la nouvelle direction artistique.
//
// C'est lui qui porte la classe .nowadays-da : sans elle, les styles du design
// system n'ont aucun effet. Les pages pas encore converties continuent d'utiliser
// SiteLayout et gardent leur aspect actuel, jusqu'à leur lot de conversion.
export function DaLayout({
  children,
  className = "",
}: {
  children: ReactNode;
  /** « page-accueil » pour la home, qui garde ses très grands titres. */
  className?: string;
}) {
  return (
    <div className={`nowadays-da ${className}`.trim()}>
      <DaHeader />
      <main id="top">{children}</main>
      <DaFooter />
    </div>
  );
}
