import { Link, useRouterState } from "@tanstack/react-router";

import { getEtudeNeighbours } from "@/lib/etudes-index";

// Navigation de bas d'étude de cas : projet précédent / suivant dans la même
// famille, puis un rappel de l'offre correspondante et de la page de liste.
//
// Le slug est lu dans l'URL plutôt que passé en prop : ça évite de modifier
// les 18 fichiers de route, et il n'y a donc pas de slug à tenir à jour à deux
// endroits. Si l'étude n'est pas dans l'index, le bloc ne s'affiche pas.
export function CaseStudyNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const n = getEtudeNeighbours(pathname);
  if (!n) return null;

  return (
    <section className="bg-white">
      {/* Un <div role="navigation"> et non un <nav> : le design system applique
          `.nowadays-da nav { height: 82px; display: flex }` à TOUTE balise nav
          de la page (règle écrite pour le menu du header). Un vrai <nav> ici se
          retrouvait aplati sur 82 px, les liens et le rappel d'offre alignés
          sur une seule ligne. Même sémantique pour les lecteurs d'écran. */}
      <div
        role="navigation"
        aria-label="Autres projets"
        className="mx-auto max-w-5xl px-6 py-16 md:py-20"
      >
        <div className="grid gap-8 sm:grid-cols-2">
          <Link to={n.prev.path} className="group block border-t-2 border-rose-doux pt-4">
            <span className="text-xs uppercase tracking-[0.18em] text-framboise">
              ← Projet précédent
            </span>
            <span className="mt-2 block font-titre text-2xl leading-tight text-encre group-hover:text-bordeaux">
              {n.prev.brand}
            </span>
            <span className="mt-1 block text-sm leading-relaxed text-gris-chaud">
              {n.prev.teaser}
            </span>
          </Link>

          <Link
            to={n.next.path}
            className="group block border-t-2 border-rose-doux pt-4 sm:text-right"
          >
            <span className="text-xs uppercase tracking-[0.18em] text-framboise">
              Projet suivant →
            </span>
            <span className="mt-2 block font-titre text-2xl leading-tight text-encre group-hover:text-bordeaux">
              {n.next.brand}
            </span>
            <span className="mt-1 block text-sm leading-relaxed text-gris-chaud">
              {n.next.teaser}
            </span>
          </Link>
        </div>

        <p className="mt-12 text-center text-base leading-relaxed text-gris-chaud">
          Un projet comme celui-là, pour vous ?{" "}
          <Link to={n.offerPath} className="text-bordeaux underline underline-offset-4">
            {n.offerLabel}
          </Link>{" "}
          ·{" "}
          <Link to={n.listingPath} className="text-bordeaux underline underline-offset-4">
            {n.listingLabel}
          </Link>
        </p>
      </div>
    </section>
  );
}
