## Changement

Supprimer le blob organique rond dans `src/components/site/TiredSection.tsx` (lignes 111-116), conformément à la règle mémoire « jamais de cercles/ronds décoratifs ».

- Retrait du `<div>` aria-hidden avec `rounded-[60%_40%_55%_45%/50%_60%_40%_50%]` et `var(--rose-soft)`.
- Aucun autre changement de layout (la colonne droite garde ses deux PhotoBubble).
- Vérification rapide des autres sections pour s'assurer qu'aucun autre élément rond décoratif n'a été réintroduit.