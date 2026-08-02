# Plan : refonte du menu de navigation

## Objectif
Faire atterrir les liens du header sur les vraies pages du site : offres et études de cas, avec deux cibles distinctes pour les résultats (assos/coopératives vs créatrices).

## Structure proposée

```text
Nowadays Agency (logo)

Solutions ▾              Résultats ▾              Contact      Appel découverte (CTA)
  ├─ Ta binôme de com      ├─ Assos & coopératives
  │   (solopreneures,        (études de cas pro)
  │    créatrices éthiques)
  └─ Ton agency            └─ Créatrices éthiques
      (assos, coopératives,    (études de cas créatrices)
       PME engagées)
```

## Changements

1. **Mettre à jour `src/components/da/DaHeader.tsx`**
   - Remplacer les 3 liens actuels (ancres `#solutions`, `#resultats`) par une navigation vers les vraies routes.
   - Créer un composant `NavDropdown` réutilisable pour les deux groupes (Solutions, Résultats).
   - Chaque dropdown affiche un label + une description courte pour orienter l'utilisateur.
   - Conserver le bouton « Appel découverte » vers `CALENDLY_URL`.
   - Adapter le menu mobile : les groupes se déplient pour montrer leurs sous-liens.

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
