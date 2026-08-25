# Design system Nowadays : le fichier de référence

> Version 1.0, août 2026. Ce fichier fait foi pour tout ce qui se conçoit chez Nowadays : site, carrousels, slides, documents. À placer à la racine du repo (`DESIGN_SYSTEM_NOWADAYS.md`) et à donner à toute IA ou graphiste qui produit un visuel. En cas de contradiction avec un document plus ancien, celui-ci gagne.

## Le fil rouge : la manif joyeuse

La conviction d'une manif, l'énergie d'une boum. Tout visuel doit pouvoir répondre à : « qu'est-ce que ça rend visible, et où est la joie ? » L'univers d'objets : la pancarte (grands messages), le badge et le pin's (preuves), le sticker (apartés), la banderole (transitions), les confettis-astérisques (respiration). Le folklore sans le fond est interdit : si la pancarte ne dit rien, on ne la sort pas.

## Couleurs (rôles stricts)

| Rôle | Nom | Hex | Usage |
|---|---|---|---|
| Fond de base | Blanc | `#FFFFFF` | La base de toute page |
| Fond d'alternance | Rose pâle | `#FFF4F8` | Une section sur deux environ |
| Accent principal | Framboise | `#FB3D80` | Boutons, badges, liens, « a » du logo |
| Ancrage | Bordeaux | `#91014B` | Titres, texte sur fonds clairs, la section manifeste |
| Lumière | Jaune | `#FFE561` | Surligneur, stickers, badges numéros, CTA final |
| Énergie | Orange `#FF7A33` / Rouge `#E8402E` | Petites touches (flèches, confettis), jamais en fond |
| Douceur | Rose moyen `#FFA7C6` / Rose doux `#FFD6E8` | Vichy, bordures, post-it |
| Encre | `#1A1A1A` | Texte courant |
| Gris chaud | `#6B5A62` | Légendes, mentions |

Règles dures :
- **La crème `#FFF7EE` ne sert plus de fond de section** (elle rend mal avec le rose). Tolérée uniquement en tout petit élément si indispensable.
- **Deux zones colorées pleines maximum par page** : chez nous, le manifeste (bordeaux) et le CTA final (jaune). Tout le reste : blanc / rose pâle.
- Un seul accent fort par écran.
- Le jaune ne porte jamais de texte blanc (toujours bordeaux). Sur framboise et bordeaux, texte blanc. Contraste minimum 4,5:1 pour le texte courant : le framboise sur blanc est réservé aux gros titres, aux boutons et aux liens, jamais au petit texte (utiliser bordeaux).

## Typographie

- **Titres : Instrument Serif**, regular et italique, JAMAIS en gras. Caractère de titrage : jamais sous 24 px.
- **Corps : Hanken Grotesk** (400 à 800).
- **Logo : Neulis Cursive** (commerciale, licence webfont obligatoire avant mise en ligne). Le « a » framboise est le détail signature.
- Plus de police cursive/manuscrite dans la charte : les apartés passent par l'italique.
- Échelle web (desktop/mobile) : H1 56/36 · H2 40/28 · H3 28/22 · chapô 22/19 · corps 18/17 · légende 13/12. Interlignes : 1.1 titres, 1.6 corps.

## Les interdits absolus (les tics « IA »)

1. **Aucun trait d'accent** : pas de barre de couleur sur le côté d'une carte, pas de filet au-dessus d'un bloc, pas de trait sous un titre, pas de bordure sur un seul côté. (Seuls séparateurs autorisés : filets 1 px très transparents entre lignes d'une liste ou sous un header.)
2. **Aucun tiret cadratin (—)** dans les textes : « : » ou « ; ».
3. Pas de faux effet verre / flou translucide sur le header : fonds opaques.
4. Pas de cercle décoratif posé au hasard : les rondeurs passent par les rectangles arrondis, les formes organiques dessinées, l'astérisque-fleur.
5. Pas de rafales de cartes identiques sur toute une page : varier les formats de section.
6. Pas de dégradés.
7. Titres serif jamais en gras.

## Les composants signature

- **Rectangles arrondis asymétriques** : border-radius du type `12px 24px 10px 20px` (jamais quatre coins égaux sur les cartes importantes) : c'est le côté « découpé à la main ».
- **Badges pilules** : rectangle très arrondi, framboise + texte blanc majuscules, ou jaune + bordeaux.
- **Numéros d'étapes** : badges jaunes arrondis, chiffre serif bordeaux.
- **Post-it inclinés** : cartes pivotées de 1 à 3°, réservées aux verbatims et constats. La seule section où des blocs penchent.
- **Le sticker** : petit encart jaune pivoté de 2-3°, ombré, pour UN message d'aparté par page maximum (ex. « "100 % éthique", ça n'existe pas »).
- **Le surligneur** : un mot-clé surligné jaune (gradient sous la ligne de base), un par section maximum.
- **Bordures pointillées** : l'effet papier découpé, réservé aux cartes d'auto-qualification (« c'est pour vous si / pas pour vous si »). Rare, sinon ça devient un tic.
- **Le vichy** : motif signature (répétition de bandes translucides croisées). Il ouvre la page (hero) et la referme (fine bande avant le CTA final). Pas ailleurs. Sur la page d'accueil, toujours framboise ; sur les pages intérieures, décliné par famille d'offre (voir PageHero ci-dessous).
- **Astérisques-confettis** : le motif ponctue, il ne tapisse jamais. 2 à 4 par zone, masqués en mobile si ça serre.
- **Photos** : rectangles arrondis, jamais de rond. Aplat organique décalé derrière si besoin de chaleur. Uniquement les photos du shooting en cours.

## PageHero : le header des pages intérieures

Composant `src/components/da/PageHero.tsx`. Même grammaire que le hero de la page d'accueil (vichy en ouverture, 2 à 4 astérisques-confettis, carte blanche à coins asymétriques `20px 38px 18px 34px`, titre serif jamais gras, un seul bouton, un seul surligneur), mais la carte prend deux tiers de la largeur ; le tiers restant montre une photo (recadrée), la couverture d'une ressource (montrée entière, jamais rognée), ou un encart (formulaire de capture). Sans colonne de droite, la carte passe en variante **solo**, centrée comme sur la page d'accueil.

**Nuancier de vichy** (même motif, `background-size: 18px 18px`) :

| Nom | Base | Bandes | Affectation |
|---|---|---|---|
| Framboise `.vichy` | `#FFD6E8` | `rgba(251,61,128,.42)` | Page d'accueil, réservé |
| Jaune blé `.vichy-jaune` | `#FFF6D1` | `rgba(255,203,0,.40)` | « Faire ensemble » |
| Prune `.vichy-prune` | `#FFD6E8` | `rgba(145,1,75,.46)` | « Déléguer » |
| Rose clair `.vichy-clair` | `#FFFFFF` | `rgba(251,61,128,.20)` | Ressources gratuites |
| Orange | — | — | Écarté : la charte interdit l'orange en fond |

Règles associées :
- Sur le vichy jaune, la pilule passe en bordeaux (une pilule jaune y disparaîtrait).
- Le surligneur jaune reste utilisable partout : il se pose sur la carte blanche, jamais sur le vichy.
- Les confettis ne reprennent jamais la couleur du vichy qu'ils ponctuent.

## Mouvements et playful (le dosage)

Un seul effet par section, et **tout est immobile sauf quand on interagit**. Autorisés : compteurs qui montent à l'apparition, pancartes qui se redressent au survol, salve de confettis au clic du CTA final (une fois), « a » du logo qui rebondit au survol. Interdits : parallaxe, curseurs personnalisés, éléments qui flottent en continu, confettis au scroll.

## Conversion et parcours

- Un seul bouton d'action par écran ; le libellé principal est toujours « Réserver un appel découverte », suivi de « 30 minutes, gratuites, sans engagement. »
- Rappels du CTA après chaque bloc de preuve ou d'argument (4 à 5 par page longue), chacun introduit par une phrase serif différente.
- Menu par besoin, pas par rubrique : « Faire ensemble · Déléguer · Résultats ».
- Prix toujours accompagnés de leur modalité (« paiement étalé, pas un abonnement » / « budget global de mission, échelonnable »).

## Les mots (rappels croisés avec la charte éditoriale)

- « Agence de communication **plus** éthique » : jamais « éthique » tout court. Auto-description : « engagée et responsable ».
- Vouvoiement sur le site (sauf noms d'offres : « Ta binôme de com' »).
- Bannis : « en toute transparence », « résultats concrets », le mot « impact » en répétition, toute métaphore à décoder sur une section fonctionnelle.
- Écriture inclusive au point médian.
- Presse : L'ADN, e-marketing.fr, Le Bonbon uniquement (jamais Brut ; Capital retiré).

## Accessibilité et performance (web)

Contrastes AA (4,5:1 texte courant). Cibles tactiles ≥ 44 px. Menu mobile fonctionnel. Images en fichiers (jamais de base64 en production), `loading="lazy"` sous la ligne de flottaison, aucune image > 300 Ko. `prefers-reduced-motion` respecté sur toutes les animations.
