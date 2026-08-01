import type { ReactNode } from "react";

// Le sticker : petit encart jaune pivoté, ombré, pour UN aparté par page.
// En dessous de 900 px il se remet dans le flux (voir design-system.css).
//
// `lien` prend un élément (et non une chaîne) parce que les routes de TanStack
// Router sont typées : c'est l'appelant qui fournit son <Link to="…">.
export function StickerNote({ children, lien }: { children: ReactNode; lien?: ReactNode }) {
  return (
    <div className="sticker-ethique">
      {children}
      {lien}
    </div>
  );
}
