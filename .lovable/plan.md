## Sections à ajouter (dans cet ordre, après DifferencesSection)

1. **ExpertiseSection** — "Une *expertise pointue*, sans le blabla corporate"
2. **LaetitiaSection** — "Enchantée, moi c'est *Laetitia*"
3. **PourquoiNowadaysSection** — "Pourquoi Nowadays ?"

Toutes respectent la charte mémo : titres Libre Baskerville 400 (jamais bold), italiques en `--rose-dark`, corps IBM Plex Mono en `--ink`, palette projet. Aucun cercle décoratif, aucun élément interdit (couronne, stamp, stats hero).

---

### 1. ExpertiseSection (`src/components/site/ExpertiseSection.tsx`)

- Fond `--cream`, padding vertical large.
- Eyebrow mono `(CE QU'ON FAIT ET QU'ON ADORE FAIRE)` en `--rose-dark`, sous le titre.
- Titre serif XL centré : `Une <em>expertise pointue</em>, sans le blabla corporate`.
- 10 pilules disposées en flex-wrap centré (responsive : 2 colonnes mobile, jusqu'à 5 par ligne desktop) :
  - Branding 💛 · Instagram 💛 · Pinterest 🩷 · Influence 🧡 · Storytelling 🩷
  - Référencement 🧡 · Contenu édito 🩷 · Emailing 💛 · Acquisition 🧡 · Site web 💛
- Pilule : `bg-[var(--rose-light)]`, `rounded-full`, padding `px-7 py-4`, label mono `--ink`, emoji à gauche. Hover : translate-y léger + border `--rose-dark`.

### 2. LaetitiaSection (`src/components/site/LaetitiaSection.tsx`)

- Fond blanc, padding large.
- Grille 2 colonnes desktop (5/7), 1 colonne mobile.
- **Colonne gauche** : photo Laetitia dans un cadre `rounded-[2rem]` débordant légèrement en bas, ratio portrait 4/5, object-cover.
- **Colonne droite** :
  - Bloc titre dans un "ruban" `bg-[var(--rose-soft)]` rounded-[2rem] (rappel exact de la capture) : `Enchantée, moi c'est <em>Laetitia</em>` en serif, padding généreux.
  - Sous le ruban, 2 paragraphes IBM Plex Mono `--ink`, leading 1.75, max-width ~55ch :
    - "J'ai créé Nowadays après avoir vu trop de marques éthiques…"
    - "Aujourd'hui, j'accompagne les projets engagés…"

**Asset photo** : téléchargement depuis `https://images.squarespace-cdn.com/.../Photo+de+Laetitia+Mattioli+...` puis upload via `lovable-assets create --file /tmp/laetitia.jpg --filename laetitia-portrait.jpg > src/assets/laetitia-portrait.jpg.asset.json`. Import du pointer dans le composant.

### 3. PourquoiNowadaysSection (`src/components/site/PourquoiNowadaysSection.tsx`)

- Fond `--rose-light` (rose pâle exact capture), padding vertical large.
- Grille desktop 2 colonnes (5/7), centrée verticalement.
- **Gauche** : `<h2>` serif XXL `Pourquoi Nowadays ?` avec "Nowadays" souligné via un SVG underline tracé à la main en `--rose-dark` (path sinueux, `stroke-width: 4`, stroke-linecap round). Pas de cercle — un trait calligraphique uniquement.
- **Droite** : un paragraphe IBM Plex Mono `--ink`, leading 1.75 :
  > Parce que Nowadays signifie "de nos jours". Pas pour coller à une tendance, pas pour surfer sur un effet de mode, mais pour affirmer ce qui compte vraiment. Ce qui est nécessaire ici et maintenant : construire des projets engagés avec éthique, qui respectent le vivant, qui participent à un avenir plus juste.

### Wiring `src/routes/index.tsx`

Ordre final :

```text
Hero
TiredSection
VisibilityBanner
ManifestoSection
OffersSection
ProcessSection
DifferencesSection
ExpertiseSection      ← nouveau
LaetitiaSection       ← nouveau
PourquoiNowadaysSection ← nouveau
(Footer via SiteLayout)
```

---

### Détails techniques

- Composants en TSX exportés nommés, sans state, pas de dépendance externe.
- Underline SVG inline, viewBox responsive, `aria-hidden`.
- Image Laetitia : `loading="lazy"`, `alt="Laetitia Mattioli, fondatrice de Nowadays"`.
- Aucune utilisation de `font-bold` sur les titres serif (règle mémoire).
- Vérification après build : screenshot du bas de la home pour QA visuel.
