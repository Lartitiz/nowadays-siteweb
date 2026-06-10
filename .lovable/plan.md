# Refonte « Ta binôme de com » — focus conversion

## Objectif

Page de vente plus courte, plus fluide, plus convertissante. On garde tout le copywriting fort, on supprime les doublons, on réordonne, on ajoute des éléments conversion-driven.

---

## 1. Sections supprimées / fusionnées (4 coupes)


| Avant                                              | Action                                    | Pourquoi                                          |
| -------------------------------------------------- | ----------------------------------------- | ------------------------------------------------- |
| &nbsp;                                             | &nbsp;                                    | &nbsp;                                            |
| `LivrablesGrid` (6 cards "Ce que tu repars avec")  | **Supprimer**                             | Doublon de la colonne droite d'`InclusSection`    |
| `PourquoiCreeSection` (portrait #2 Laetitia + bio) | **Fusionner dans `LaetitiaIntroSection**` | 2 portraits Laetitia sur la même page = redondant |
| `CtaFinalAccompagnement`                           | **Garder mais simplifier**                | OK, dernière chance de convertir                  |


Résultat : **17 → 13 sections**.

## 2. Nouvel ordre narratif

```text
1.  Hero (renforcé)            ← hook + promesse + 1 CTA + reassurance
2.  ClientsBand                ← preuve sociale immédiate
3.  ProblemSection (resserrée) ← la douleur
4.  ContrasteSection           ← la solution différenciée
5.  TransformationGrid         ← la promesse concrète
6.  LaetitiaIntroSection +     ← qui je suis + pourquoi j'ai créé ça
    bio fusionnée
7.  TimelineSection            ← comment ça se passe
8.  ComparaisonAgence (16k€)   ← AVANT le prix, on ancre la valeur
9.  InclusSection (= prix 290€ ← le prix après l'ancrage + garantie
    + inclus + garantie)
10. TemoignagesSection         ← preuve sociale qualitative
11. ProjetsAccompagnesGrid     ← preuve sociale quantitative
12. PourToiSection             ← qualification (pour toi / pas pour toi)
13. FaqSection                 ← traiter les objections
14. CtaFinalAccompagnement     ← dernier appel
```

Changement clé : **comparatif AGENCE → prix** (et plus l'inverse). C'est ce que font toutes les pages de vente qui convertissent.

## 3. Hero renforcé

- Layout **2 colonnes** desktop (texte gauche, portrait Laetitia droite) au lieu du centré actuel.
- Ajouter un **mini social proof** sous le H1 : « ★★★★★ +150 projets accompagnés » (chiffre déjà mentionné plus bas).
- Déplacer la blague « matcha latte » dans `InclusSection` (elle casse l'autorité du hero).
- 1 seul CTA, court : **« Réserver mon appel découverte »**.
- Sous-ligne reassurance : « 30 min · Gratuit · Sans engagement ».

## 4. Sticky CTA mobile + desktop

Composant fixe en bas d'écran (mobile) et en bas-droit (desktop, après scroll > 800px) :

- Bouton rose-dark « Réserver mon appel »
- Visible sur toute la page sauf hero et section CTA finale (`IntersectionObserver`).

## 5. Charte typo respectée

- Tous les `font-serif text-2xl/3xl/4xl` utilisés comme H3 → ramener à `text-xl md:text-2xl` (charte).
- Les "punchlines italiques rose-dark" : garder mais **passer en `font-serif text-xl md:text-2xl**` (pas plus gros qu'un H3) pour qu'elles ne concurrencent pas les H2.
- Supprimer les `text-4xl` parasites (lignes 927, 945 sur les H3 "pour toi / pas pour toi").

## 6. Visuels scrapés depuis Squarespace

À récupérer via `scripts/scrape-accompagnement.mjs` (calqué sur `scrape-blog.mjs`) : [https://www.nowadaysagency.com/accompagnement-communication](https://www.nowadaysagency.com/accompagnement-communication)

- **11 vignettes projets** (Napperon, Boom Boom Dance, Mazeh, Atelier Tiket, Hopla, La Slow Fashionitude, Yza Handmade, École Massoba, Sophie Brillouet, Péline, Comme un ruban d'étoile) depuis nowadaysagency.com.
- **2e portrait Laetitia** (fusionné, donc 1 seul portrait final déjà présent).
- Logos clients → déjà OK.
- Fallback : si scrape échoue pour un projet, on retire la card (mieux qu'un placeholder gris).
  &nbsp;
- Retirer les **placeholders `bg-rose-light` vides** (lignes 769, 687).

## 8. Détails techniques

- Nouveau composant `<StickyCallCta />` dans `src/components/site/` avec `useState` + `useEffect` sur scrollY.
- Constante `CALENDLY` à extraire dans `src/lib/links.ts` partagée avec la home.
- Script de scrape : `scripts/scrape-accompagnement.mjs` → écrit `scripts/projets-accompagnes.json` → importé dans `ProjetsAccompagnesGrid`.

---

## Hors scope (à faire plus tard si tu veux)

- Tests A/B sur le wording CTA.
- Ajout d'une vidéo Laetitia dans le hero.
- Schéma JSON-LD `Service` pour SEO local.