# Prochaines étapes de la migration pixel-perfect

## Vue d'ensemble (état actuel)

✅ Faits : Homepage complète (Hero, Tired, Visibility, Manifesto, Offers, Process, Differences, Expertise, Laetitia, Pourquoi, CtaWave, Press, FinalCta, Footer enrichi).

🟡 À faire (par ordre de priorité) :

1. `**/accompagnement-communication**` (cette étape — détaillée ci-dessous)
2. `**/cooperative-asso**` (page jumelle, structure proche)
3. **Sous-pages ressources** linkées dans le footer : `/blog`, `/calendrier-editorial`, `/formation-instagram`, `/template-plan-com` (placeholders ou contenus si fournis)
4. **Page `/notre-demarche-ethique**` (lien footer)
5. **Branchements** : Calendly (CTA "Réserver…") + soumission newsletter
6. **SEO/OG** : og:image par page, sitemap, robots.txt
7. **Polish responsive** : pass mobile sur toutes les sections (≤ 390px)

---

## Étape en cours — `/accompagnement-communication`

Refonte complète de `src/routes/accompagnement-communication.tsx` qui n'a aujourd'hui qu'un H1 placeholder. On reprend la structure de la page source en respectant toutes les règles du design system (Libre Baskerville 400, IBM Plex Mono, palette imposée, H2 = `font-serif text-4xl md:text-6xl leading-[1.05] text-ink`, pas de cercle décoratif).

### Sections à créer (composants dans `src/components/accompagnement/`)

1. **HeroAccompagnement**
  - H1 : `Tu fais un travail <em>magnifique</em>. Mais personne ne le voit.`
  - Sous-titre serif : `Deviens <em>visible</em> sans vendre ton âme.`
  - Accroche mono : `Ta com' te prend la tête ? On la fait ensemble.`
  - Mention prix italique mono : `290€/mois pendant 6 mois. Soit moins de 9€ par jour…`
  - CTA pill `rose-dark` : `Prends rdv pour discuter de ton projet` → `https://calendly.com/laetitia-mattioli/appel-decouverte`
  - Ligne de réassurance mono : `✨ Appel gratuit • 30 minutes • Sans engagement`
2. **ClientsBand** — fond `rose-light`
  - Sur-titre italique serif : `Elles m'ont fait confiance`
  - Rangée de 6 logos de clients (placeholders textuels stylisés en attendant les vrais logos)
  - Note : génération de wordmarks SVG simples (Atelier Tiket, Ikigai, Boom Boom Dance, Hopla, Napperon, SLF) — ne pas reproduire les logos exacts (droits)
3. **ProblemSection** — H2 `Ce que tu proposes est beau et responsable. Il est temps qu'on le voie.` + 3 paragraphes corps mono
4. **LaetitiaIntroSection** — H2 `Enchantée, je suis Laetitia, et je crois que la communication n'est pas de la manipulation, mais un outil <em>d'émancipation</em>.` + paragraphe « safe place » + portrait (placeholder image générée → `src/assets/laetitia-portrait.jpg`)
5. **TransformationGrid** — H2 `Dans 6 mois, ta com' <em>tourne</em>. Et tu n'es plus seule.` + 5 cartes (emoji + titre + texte) sur fond `cream`
  - 🤝 Tu n'es plus seule…
  - 🗺️ Tu as un plan clair…
  - ⚡ Quelqu'un fait pour toi…
  - 📈 Tu vois enfin des résultats
  - 💜 Tu communiques sans trahir tes valeurs
6. **ContrasteSection** — H2 `Imagine avoir quelqu'un qui bosse sur ta com' avec toi.` + liste 3 lignes `coach / formation / plan` → `→ Ici, on…`
7. **TimelineSection** — sous-titre `6 mois pour tout mettre en place` + 3 colonnes (Mois 1→2 « On pose ta stratégie », Mois 3→6 « On applique ensemble », Au quotidien « Un doute ? Je suis là. »)
8. **PrixSection** — fond `rose-soft`
  - H2 `Pour 290 € / mois pendant 6 mois`
  - Sous-texte + encart `Je te rembourse entièrement`
  - CTA Calendly
9. **ComparaisonAgenceSection** — H2 `Parce que déléguer à une agence est souvent hors de prix…`
  - 2 colonnes side-by-side (Agence classique 16 000€ vs Ta binôme de com 1 740€) en tableau stylisé
  - Ligne d'économie : `Soit 91% d'économie par rapport à une agence classique`
10. **LivrablesGrid** — H2 `Concrètement tu repars avec :` + 6 cartes (🎨 branding, 📱 réseaux, 💻 site, ✉️ newsletter, ✨ presse, 🛠️ boîte à outils)
11. **TemoignagesSection** — 2 témoignages texte (Pelin, Sarah/Mazeh) avec citation italique serif et nom mono
12. **PourquoiCreeSection** — H2 `Pourquoi j'ai créé cet accompagnement ?` + bloc texte + liste à puces des préjugés + bio Laetitia (10 ans marketing, +150 projets, écoles) + portrait
13. **ProjetsAccompagnesGrid** — H2 `Elles sont passées par mon accompagnement` + grille 3 col × N (Napperon, Boom Boom Dance, Mazeh Paris, Atelier Tiket, Hopla Studio, La Slow Fashionitude, Yza Handmade, L'école des femmes de Massoba, Sophie Brillouet, Péline, Comme un ruban d'étoile) — placeholder image grise + nom serif + courte description mono
14. **InclusSection** — fond `rose-light`
  - Titre récap prix
    - Deux blocs liste : `👋 Toi + moi, concrètement` et `🛠️ Ce qu'on construit ensemble`
    - Bloc garantie remboursement
    - CTA Calendly
15. **PourToiSection** — 2 colonnes : `Pour toi si…` (✓ × 5) et `Pas pour toi si…` (✕ × 4)
16. **FaqSection** — H2 `Tu as des <em>questions</em> ?` + accordéon (composant `accordion` de shadcn déjà dispo) avec les 9 Q/R
17. **CtaFinalAccompagnement** — réutiliser `FinalCtaSection` ou variante locale ; CTA vers Calendly

### Détails techniques

- Tous les CTA "Réserver" pointent vers la même URL Calendly (`https://calendly.com/laetitia-mattioli/appel-decouverte`), ouvre dans un nouvel onglet (`target="_blank" rel="noopener noreferrer"`).
- Header : passe la nav vers la page si pas déjà fait — vérifier le composant `Header.tsx`.
- Réutiliser tokens couleur (`bg-rose-light`, `bg-rose-soft`, `bg-cream`, `text-ink`, `text-rose-dark`, etc.) — aucune couleur en dur.
- Aucun cercle décoratif (règle mémoire).
- Toutes les images sont des placeholders gris (cards avec fond `rose-soft` + emoji) — pas de génération d'images cette étape (à faire plus tard une fois la structure validée).
- Découpage en sous-composants dans `src/components/accompagnement/` pour garder le route file court et permettre la réutilisation.
- Mise à jour de `head()` : titre + description spécifiques + og:title/og:description ; canonical déjà en place.

### Fichiers touchés

- Édité : `src/routes/accompagnement-communication.tsx` (remplacement complet du `Page()` actuel)
- Nouveaux : 17 composants sous `src/components/accompagnement/` (un par section ci-dessus)

---

## Question rapide avant de me lancer

Veux-tu que je :

- **(a)** construis cette page complète en une seule passe (toutes les 17 sections), ou oui c'est partie mais vraiment pixel perfect 
- **(b)** procède par lot (par ex. d'abord Hero + Clients + Problème + Laetitia + Transformation + Timeline, puis seconde passe pour le reste) ?

Et confirmes-tu l'URL Calendly `https://calendly.com/laetitia-mattioli/appel-decouverte` pour tous les CTA ? oui

&nbsp;