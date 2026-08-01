import type { ReactNode } from "react";

// Badge pilule du design system : rectangle très arrondi, majuscules.
// Framboise + blanc par défaut ; jaune + bordeaux ; bordeaux + blanc.
type Ton = "framboise" | "jaune" | "bordeaux";

const CLASSE: Record<Ton, string> = {
  framboise: "eyebrow",
  jaune: "eyebrow yellow",
  bordeaux: "eyebrow plum",
};

export function Pill({ children, ton = "framboise" }: { children: ReactNode; ton?: Ton }) {
  return <span className={CLASSE[ton]}>{children}</span>;
}
