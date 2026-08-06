# Appliquer les migrations d'articles

## État vérifié

- `supabase/migrations/20260805090000_article_alternative_formation_instagram.sql` : **présent**. Il insère l'article « Existe-t-il une alternative aux formations Instagram en ligne ? » (slug `alternative-formation-instagram`) avec un `ON CONFLICT (slug) DO UPDATE`, donc rejouable sans risque.
- Ses 5 images sont bien dans `public/blog/` (cover + 4 visuels).
- `supabase/migrations/20260806090000_article_prospection_ethique.sql` : **absent du projet**. La synchro depuis main ne l'a pas encore amené.
- L'article `alternative-formation-instagram` n'existe pas encore en base (le dernier article publié date du 29/09/2025).

## Ce que je vais faire

1. Exécuter le contenu du fichier de migration présent, tel quel, via l'outil de migration — un simple INSERT/UPDATE dans `public.articles`.
2. Vérifier par une lecture que la ligne est bien créée (slug, titre, date, nombre de blocs de contenu, champs SEO).
3. Ne toucher à rien d'autre : aucune modification de schéma, aucune modification des policies RLS ni des GRANT de `articles`, aucun fichier de code changé.

## Pour la seconde migration

`20260806090000_article_prospection_ethique.sql` n'est pas disponible : je ne peux pas l'appliquer. Deux options à ton choix une fois la première passée :

- attendre la synchro et me redemander ;
- ou me coller/joindre le SQL, je l'applique tel quel.
