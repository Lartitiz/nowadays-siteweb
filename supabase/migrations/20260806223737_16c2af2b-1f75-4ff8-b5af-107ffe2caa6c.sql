UPDATE public.articles 
SET content = jsonb_set(
  content, 
  '{6,text}', 
  '"Les femmes qui me contactent après une formation ne l''ont pas finie. Et c''est pas parce que la formation était mauvaise, ni même qu''elles ont manqué de sérieux... Elles se sont arrêtées au module 4 sur 9, ou au module 7, avec les vidéos toujours accessibles à vie et la culpabilité qui va avec."'
)
WHERE slug = 'alternative-formation-instagram';