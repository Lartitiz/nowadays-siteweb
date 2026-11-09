-- Prix HT depuis l'assujettissement à la TVA (06/11/2026) : article « alternative-formation-instagram ».
-- Trois remplacements exacts ; le bloc s'annule si l'ancien texte reste ou si le nouveau manque.
BEGIN;
UPDATE public.articles
SET excerpt = replace(excerpt, 'de la communauté à 39 € par mois à la délégation', 'de la communauté à 39 € TTC par mois à la délégation'),
    content = (replace(replace(content::text, 'Premium de Nowadays est à 39 € par mois', 'Premium de Nowadays est à 32,50 € HT par mois (39 € TTC)'), '(/accompagnement-communication) : 350 € par mois pendant six mois.', '(/accompagnement-communication) : 325 € HT par mois (390 € TTC) pendant six mois.'))::jsonb
WHERE slug = 'alternative-formation-instagram';
DO $$
DECLARE c text; e text;
BEGIN
  SELECT content::text, excerpt INTO c, e FROM public.articles WHERE slug = 'alternative-formation-instagram';
  IF e NOT LIKE '%39 € TTC par mois%'
     OR c NOT LIKE '%32,50 € HT par mois (39 € TTC)%'
     OR c NOT LIKE '%325 € HT par mois (390 € TTC)%'
     OR c LIKE '%350 € par mois%' THEN
    RAISE EXCEPTION 'Prix HT : remplacement incomplet, rien n''est enregistré';
  END IF;
END $$;
COMMIT;
