## Nouvelle section : Comment ça marche

Créer `src/components/site/ProcessSection.tsx` et l'insérer dans `src/routes/index.tsx` entre `ManifestoSection` et `OffersSection`.

### Contenu

- Eyebrow : « Comment ça marche »
- Titre (h2) : « 3 étapes pour transformer votre communication. *Zéro prise de tête.* »
- Sous-titre : « Un parcours simple pour passer de "je galère avec ma com'" à "c'est en place et ça tourne". »
- 3 étapes numérotées :
  1. **On se parle.** — appel découverte 30 min, gratuit, sans engagement.
  2. **On construit votre plan.** — proposition sur-mesure, budget/temps/objectifs.
  3. **On avance.** — apprendre ou déléguer, à la fin c'est fait, pas « à faire ».

### Design (adapté à la DA Nowadays)

Reprend la structure timeline verticale de la maquette de référence, mais avec **votre identité** :

- **Fond** : `--cream` (#fff7f5) avec une variante : un bloc central `--rose-light` arrondi (`rounded-[32px]`) pour poser la timeline et créer du contraste avec les sections voisines.
- **Ligne verticale** : 1px `--rose-soft` (au lieu du gris #E5E7EB).
- **Cercles numérotés** : 54px, fond `--cream`, bordure 2px `--rose-dark`, numéro en Libre Baskerville italique 400 couleur `--rose-dark`. Au hover : fond `--rose-dark`, numéro `--cream`. Transition douce.
- **Titres d'étape (h3)** : Libre Baskerville 400 (jamais bold), `--ink`, ~22px, avec un mot italique en `--rose-dark` quand pertinent (ex : *parle*, *plan*, *avance*).
- **Texte d'étape** : IBM Plex Mono 400, `--ink`, ~15px, line-height 1.65. Mots-clés en `<strong>` mais toujours `--ink` (le gras vient du poids, jamais d'opacité).
- **Eyebrow** : IBM Plex Mono uppercase tracking-wide, `--rose-dark`.
- **Titre section** : Libre Baskerville 400, `--ink`, italique `--rose-dark` sur « Zéro prise de tête ».
- **Pas de SVG décoratif** (respecte la règle : pas de couronne, pas de tampon).
- **Pas d'opacité** sur les textes, conformément aux règles globales.

### Responsive

- Mobile : cercles 42px, line-left 21px, paddings réduits comme dans la maquette, mais avec nos tokens.
- Container `max-w-3xl` centré, `px-6 md:px-10`, `py-20 md:py-28`.

### Fichiers modifiés

- **Créer** `src/components/site/ProcessSection.tsx`
- **Éditer** `src/routes/index.tsx` (import + insertion entre `ManifestoSection` et `OffersSection`)
