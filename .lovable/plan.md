## Réorganisation du menu (desktop)

Objectif : alléger le menu pour mettre en avant les solutions et les études de cas, sans toucher au menu mobile ni à aucune page.

### Nouveau menu desktop (gauche → droite)

1. **Solutions** → 
  1. `ici il faut renvoyer vers /accompagnement-communication` (renommé, plus court et plus fort)
  2. mais aussi vers mon offre agency
2. **Études de cas** → 
  1. ici faut renvoyer vers celle des coop asso pme
  2. et celles des créatrices éthiques
3. **Blog** → `/blog -> est-ce vraiment nécessaire ?`
4. **Contact** → `/contact`

CTA "Appel découverte gratuit" inchangé à droite.

### Hors scope

- Menu mobile : inchangé.
- Footer : inchangé (les liens vers Coopératives & Créatrices y restent).
- Aucune modification de page, de SEO, ou de logique business.

### Fichier touché

- `src/components/site/Header.tsx` — uniquement les `<Link>` du `<nav className="hidden md:flex">`.