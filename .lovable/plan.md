# Plan : refonte du menu de navigation

## Objectif
Faire atterrir les liens du header sur les vraies pages du site : offres et études de cas, avec deux cibles distinctes pour les résultats (assos/coopératives vs créatrices).

## Structure proposée

```text
Nowadays Agency (logo)

Faire ensemble      Déléguer      Résultats ▾              Contact      Appel découverte (CTA)
                       ├─ Assos & coopératives
                       └─ Créatrices éthiques
```

- **Faire ensemble** → `/accompagnement-communication` (offre « Ta binôme de com » pour solopreneures et créatrices éthiques).
- **Déléguer** → `/cooperative-asso` (offre « Ton agency » pour assos, coopératives et PME engagées).
- **Résultats** → dropdown avec deux sous-liens :
  - **Assos & coopératives** → `/etudes-de-cas-pro`
  - **Créatrices éthiques** → `/creatrices-ethiques`
- **Contact** → `/contact`
- **Appel découverte** → `CALENDLY_URL`

## Changements

1. **Mettre à jour `src/components/da/DaHeader.tsx`**
   - Transformer les liens ancres (`#solutions`, `#resultats`) en liens vers les vraies routes.
   - « Faire ensemble » devient un lien direct vers `/accompagnement-communication`.
   - « Déléguer » devient un lien direct vers `/cooperative-asso`.
   - « Résultats » devient un dropdown avec deux sous-liens : `/etudes-de-cas-pro` et `/creatrices-ethiques`.
   - Ajouter un lien « Contact » vers `/contact`.
   - Conserver le bouton « Appel découverte » vers `CALENDLY_URL`.
   - Adapter le menu mobile pour afficher le dropdown « Résultats » dépliable.

2. **Ajouter les styles dans `src/styles/design-system.css`**
   - Styles pour `.nav-dropdown`, `.dropdown-panel`, `.dropdown-item`.
   - Comportement au survol sur desktop (`group-hover`) et au clic sur mobile.
   - Garantir que le dropdown reste lisible sur le fond blanc du header.

3. **Vérifier les routes existantes**
   - `/accompagnement-communication` — offre pour solopreneures/créatrices.
   - `/cooperative-asso` — offre pour assos/coopératives/PME.
   - `/etudes-de-cas-pro` — résultats pour assos/coopératives/PME.
   - `/creatrices-ethiques` — résultats pour créatrices.
   - `/contact` — page de contact.

## Non compris
- Aucun changement de contenu des pages cibles.
- Aucune création de nouvelle route.
- Les ancres de la home (`#solutions`, `#resultats`) ne seront plus utilisées dans le header ; elles restent fonctionnelles si un lien externe ou un bouton de la page d'accueil y fait référence.
