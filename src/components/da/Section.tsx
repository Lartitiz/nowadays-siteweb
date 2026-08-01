import type { ReactNode } from "react";

// Section du design system. Le fond alterne blanc / rose pâle : c'est la seule
// alternance autorisée, hors les deux zones colorées pleines d'une page
// (manifeste bordeaux, CTA final jaune).
export function Section({
  children,
  fond = "blanc",
  id,
  className = "",
  wrapClassName = "",
}: {
  children: ReactNode;
  fond?: "blanc" | "rose";
  id?: string;
  className?: string;
  /** Classe de grille posée sur le conteneur intérieur (ex. « about-grid »). */
  wrapClassName?: string;
}) {
  const classes = ["section", fond === "rose" ? "rose" : "", className].filter(Boolean).join(" ");

  return (
    <section className={classes} id={id}>
      <div className={`wrap ${wrapClassName}`.trim()}>{children}</div>
    </section>
  );
}
