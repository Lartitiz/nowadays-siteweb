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

## Non compris
- Aucun changement de contenu des pages cibles.
- Aucune création de nouvelle route.
- Les ancres de la home (`#solutions`, `#resultats`) ne seront plus utilisées dans le header ; elles restent fonctionnelles si un lien externe ou un bouton de la page d'accueil y fait référence.
