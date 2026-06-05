## Suite de la migration

État vs sitemap officiel : il reste **8 pages** à migrer. On commence par la page Contact, puis les 6 études de cas pro manquantes. Les deux lead magnets restants (`/guide-storytelling`, `/creatrices-ethiques`) seront traités après.

---

### 1. Page `/contact`

La version actuelle de Squarespace est minimaliste (titre + formulaire + reCAPTCHA). On en fait une vraie page de conversion alignée sur le ton du site.

**Route** : `src/routes/contact.tsx`

**Structure** :
- **Hero éditorial** : titre serif "Discutons de _votre projet_." + sous-titre court ("Réponse sous 24 h ouvrées, sans script de vente.")
- **Layout 2 colonnes** (desktop) / empilé (mobile) :
  - **Gauche — Formulaire de contact** :
    - Champs : Nom & prénom, Email (requis), Structure / projet (optionnel), Type de besoin (select : accompagnement com', coopérative/asso, formation, autre), Message (requis), case RGPD.
    - Validation Zod (trim, longueurs min/max, email valide).
    - Soumission via **server function** `createServerFn` (`src/lib/contact.functions.ts`) qui enregistre dans une table `contact_messages` (Lovable Cloud) + envoi d'un email de notification via l'infra Email Lovable.
    - États : idle / sending / success (message de remerciement) / error.
  - **Droite — Carte "Autres façons de nous joindre"** :
    - CTA Calendly (réutilise `CALENDLY_URL`) : "Réserver un appel découverte de 30 min".
    - Email direct (mailto).
    - Réseaux : Instagram, LinkedIn (récupérés du Footer existant).
    - Mini-bloc "Pour qui ?" rappelant freelances / assos / PME engagées.
- **Section "Ce qui se passe ensuite"** : 3 étapes numérotées (Vous écrivez → On échange en visio 30 min → Devis sur-mesure sous 5 j).
- **FAQ courte** (3-4 questions) : délais, tarifs, zones géographiques, type de structures accompagnées.
- **Footer CTA existant** réutilisé.

**SEO** : `head()` avec title, description, og:title, og:description, canonical `/contact`.

**Lien header/footer** : le header pointe déjà vers Calendly ; on ajoute un lien "Contact" dans la nav principale + on remplace l'un des `href="#"` du footer.

---

### 2. Six études de cas pro manquantes

Pages détaillées pour : **Atelier des Lunettes, Emmaüs Défi, ENSAD, L214, Okahina Wave, Sea Shepherd**.

Routes : `src/routes/etudes.<slug>.tsx` (même convention que les 6 existantes : `etudes.fat-moose.tsx`, etc.).

**Approche** :
1. Scrape des 6 pages source pour récupérer : titre, contexte, mission, livrables, résultats, visuels, témoignage éventuel.
2. Réutilisation du composant existant `src/components/site/CaseStudy.tsx` (pattern identique aux études déjà migrées). Vérifier qu'il accepte bien les variantes "asso/ONG" (L214, Sea Shepherd, Emmaüs Défi, ENSAD) vs "marque" (Atelier des Lunettes, Okahina Wave) — sinon ajout d'une prop `type` pour adapter le label de section ("Mission", "Campagne", "Programme").
3. Génération des assets : cover + 1-2 visuels mockup par étude (12-18 images au total) via imagegen, stockés dans `src/assets/etudes/<slug>/`.
4. Mise à jour de la liste sur `/etudes-de-cas-pro.tsx` pour activer le lien "Voir l'étude de cas →" sur les 6 cartes concernées (le CTA conditionnel sur `p.slug` existe déjà).

**SEO** : chaque page a son propre `head()` (title, description, og:title/description, og:image = cover de l'étude, canonical, JSON-LD `Article` ou `CreativeWork`).

---

### Détails techniques

**Backend Contact** :
- Migration SQL : table `public.contact_messages` (id uuid pk, created_at timestamptz default now(), name text, email text, organization text, need_type text, message text, consent boolean). GRANTS : `INSERT` pour `anon` (formulaire public), `SELECT/ALL` pour `service_role`. RLS activée, policy `INSERT` ouverte à `anon`, lecture admin uniquement.
- Server function `submitContactForm` (Zod validation côté serveur + côté client).
- Email de notification : `email_domain--check_email_domain_status` d'abord ; si pas de domaine, on propose le setup avant d'activer l'envoi.

**Mémoires respectées** : H2 `font-serif text-4xl md:text-6xl leading-[1.05] text-ink`, body IBM Plex Mono, palette ink/bordeaux/rose-dark/cream, pas de CrownSticker, EngageStamp, stats hero, pas de cercles décoratifs, arrondis légers (3-22px déjà fixés dans `styles.css`).

---

### Reste après ce lot

- `/guide-storytelling` (second lead magnet, calque sur formation-gratuite-instagram)
- `/creatrices-ethiques` (à scraper pour clarifier le format)

À traiter dans un prochain lot une fois Contact + études validés.
