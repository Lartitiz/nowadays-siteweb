import { useEffect, useRef } from "react";
import { useRouterState } from "@tanstack/react-router";

import { enregistrerClicAppel, enregistrerVue } from "@/lib/mesure.functions";

/*
 * Le mouchard maison, côté navigateur. Il fait deux choses :
 *  - signaler une page vue à chaque changement de route ;
 *  - signaler un clic vers Calendly, qui est le geste qui compte.
 *
 * Le clic est capté par un seul écouteur posé sur le document, pas par 164
 * gestionnaires collés sur chaque lien : rien à maintenir quand une page en
 * ajoute un. On écoute en phase de capture pour être servi avant que le
 * navigateur ne parte sur l'onglet suivant.
 */

// La page de mesure elle-même ne se mesure pas.
const IGNOREES = ["/coulisses"];

function estIgnoree(chemin: string) {
  return IGNOREES.some((p) => chemin === p || chemin.startsWith(`${p}/`));
}

export function Mesure() {
  const chemin = useRouterState({ select: (s) => s.location.pathname });
  const dernierChemin = useRef<string | null>(null);

  // Page vue
  useEffect(() => {
    if (estIgnoree(chemin)) return;
    // React monte deux fois en développement : on ne compte qu'une seule fois.
    if (dernierChemin.current === chemin) return;
    dernierChemin.current = chemin;

    const params = new URLSearchParams(window.location.search);
    void enregistrerVue({
      data: {
        path: chemin,
        // Le référent n'a de sens qu'à la première page ; ensuite c'est le site
        // lui-même, que `provenance()` ramène à « Accès direct ».
        referent: document.referrer || null,
        utmSource: params.get("utm_source"),
      },
    }).catch(() => {
      /* la mesure ne doit jamais gêner la visite */
    });
  }, [chemin]);

  // Clic vers Calendly
  useEffect(() => {
    function surClic(e: MouseEvent) {
      const cible = e.target as HTMLElement | null;
      const lien = cible?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!lien) return;
      const href = lien.getAttribute("href") || "";
      if (!href.includes("calendly.com")) return;

      // Même provenance que la vue : `document.referrer` ne bouge pas pendant
      // la navigation interne, il désigne toujours la porte d'entrée.
      const params = new URLSearchParams(window.location.search);
      void enregistrerClicAppel({
        data: {
          path: window.location.pathname,
          referent: document.referrer || null,
          utmSource: params.get("utm_source"),
        },
      }).catch(() => {
        /* on n'empêche jamais le départ vers la prise de rendez-vous */
      });
    }

    document.addEventListener("click", surClic, { capture: true });
    return () => document.removeEventListener("click", surClic, { capture: true });
  }, []);

  return null;
}
