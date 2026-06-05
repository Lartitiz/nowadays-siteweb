## Direction retenue : Éditorial asymétrique

Refondre `src/components/site/ManifestoSection.tsx` en grille asymétrique 7/5 :

- **Fond** : `bg-cream` (différent du `rose-light` des sections voisines)
- **Colonne gauche (7/12)** : eyebrow "Notre manifeste" en rose-dark + H2 (taille canonique : `font-serif text-4xl md:text-6xl leading-[1.05] text-ink`)
- **Colonne droite (5/12)** : décalée vers le bas (`md:pt-24`) — 3 paragraphes IBM Plex Mono avec emphases en rose-dark via `<em>`, et un trait final bordeaux 12px comme signature éditoriale

Mots emphasés (rose-dark via `<em>`) :
- P1 : éthique, beauté, respect, joie
- P3 : un levier de changement
- Titre : d'émancipation

Le contenu textuel reste identique. Pas de SVG décoratif, pas de ronds, pas de squiggles.