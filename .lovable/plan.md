## Objectif

Faire en sorte que le formulaire `/contact` :
1. enregistre le message en base (déjà OK),
2. **envoie une notification interne** à `laetitia@nowadaysagency.com`,
3. **envoie un accusé de réception** à la personne qui a écrit,
4. s'appuie sur des **mentions légales** à jour côté RGPD/formulaire.

## 1. Mise en place de l'infrastructure e-mail (Lovable Emails)

Aucun domaine d'envoi n'est encore configuré dans le workspace. Étapes :

1. Ouvrir la **boîte de configuration du domaine d'envoi** (sous-domaine type `notify.nowadaysagency.com`) — la propagation DNS peut prendre jusqu'à 72 h, mais le code peut être posé avant.
2. Initialiser l'infrastructure e-mail (files d'attente, table de logs, suppressions, cron de traitement).
3. Scaffold des **app emails** (templates React Email + route `/lovable/email/transactional/send`).

Tant que le DNS n'est pas vert, les e-mails s'empilent en file et partent dès vérification. Tu pourras suivre l'état dans Cloud → Emails.

## 2. Templates e-mail

Deux templates React Email dans `src/lib/email-templates/`, brandés Nowadays (cream/ink/rose-dark, Libre Baskerville pour les titres) :

- **`contact-notification.tsx`** → envoyé à `laetitia@nowadaysagency.com`
  Sujet : « Nouveau message via le site — {prénom} ({type de besoin}) »
  Contenu : nom, email, structure, type de besoin, message complet, date.
  `reply_to` = e-mail de l'expéditeur pour répondre en un clic.

- **`contact-confirmation.tsx`** → envoyé à l'expéditeur
  Sujet : « Bien reçu — on revient vers vous sous 24 h ouvrées »
  Contenu : merci personnalisé, rappel du délai, liens vers les études de cas et un créneau Calendly, signature Laetitia.

Enregistrement des deux dans `src/lib/email-templates/registry.ts`.

## 3. Route d'envoi côté serveur

Le formulaire est public (pas d'auth requise), donc on ne peut pas appeler directement la route d'envoi authentifiée. Approche :

- Modifier `src/lib/contact.functions.ts` (`submitContact`) pour, après l'insert en base, appeler en interne `/lovable/email/transactional/send` avec les credentials service-role pour les deux templates.
- `idempotencyKey` dérivé de l'`id` de la ligne `contact_messages` pour éviter les doublons en cas de retry.
- Si l'envoi échoue, on log mais on ne casse pas l'UX (le message est déjà sauvegardé).

## 4. Mentions légales (compléter `src/routes/mentions-legales.tsx`)

Sections à ajouter / mettre à jour pour couvrir le formulaire de contact :

- **Données collectées via le formulaire** : nom, email, structure, type de besoin, message, consentement, date.
- **Finalité** : répondre à la demande, qualifier le projet.
- **Base légale** : consentement (case à cocher) + intérêt légitime (réponse commerciale).
- **Durée de conservation** : 3 ans après le dernier contact pour les prospects non clients, 5 ans pour les clients.
- **Destinataires** : Laetitia Mattioli (Nowadays Agency). Aucun transfert hors UE.
- **Sous-traitants** : hébergeur backend (Supabase, UE) + prestataire e-mail (Lovable Emails / Mailgun, UE).
- **Droits RGPD** : accès, rectification, effacement, opposition, portabilité, retrait du consentement, réclamation CNIL — adresse de contact `laetitia@nowadaysagency.com`.
- **Cookies / mesure d'audience** : préciser ce qui est posé (ou « aucun cookie tiers » si c'est le cas).

Mise à jour de la date `LAST_UPDATE`.

## 5. Côté page Contact

- Reformuler la phrase de consentement pour pointer vers `/mentions-legales` (lien) et mentionner explicitement la durée de conservation.
- Garder le honeypot existant.
- Conserver l'écran de succès actuel ; ajouter une petite mention « Un accusé de réception vient de vous être envoyé par e-mail. »

## Ce qui ne change pas

- Schéma de la table `contact_messages`, RLS, design tokens, structure du site.
- Aucune nouvelle dépendance hors packages e-mail standard installés par le scaffold.

## Action côté toi avant que je code

J'ai besoin que tu valides le **sous-domaine d'envoi** (ex. `notify.nowadaysagency.com`) au moment où la boîte de configuration s'ouvrira, et que tu ajoutes les enregistrements NS chez ton registrar. Sans ça, les e-mails partent en file mais n'arrivent pas tant que le DNS n'est pas vert.
