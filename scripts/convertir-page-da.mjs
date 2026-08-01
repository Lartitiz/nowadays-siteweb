/**
 * Convertit une page existante à la direction artistique Nowadays.
 *
 * Usage : node scripts/convertir-page-da.mjs src/routes/<page>.tsx
 *
 * Ne touche QUE l'habillage : classes utilitaires, gabarit, fonds de section.
 * Les textes ne sont pas modifiés ici (les corrections factuelles autorisées
 * sont faites à part, explicitement).
 *
 * L'alternance des fonds est déterministe : blanc, rose pâle, blanc, rose pâle…
 * en suivant l'ordre des <section> du fichier. La dernière section, qui est le
 * CTA final, n'est pas touchée : elle reçoit le jaune à la main.
 */
import fs from "node:fs";

const chemin = process.argv[2];
if (!chemin) {
  console.error("Usage : node scripts/convertir-page-da.mjs <fichier.tsx>");
  process.exit(1);
}

let code = fs.readFileSync(chemin, "utf8");
const avant = code;
const journal = [];

function remplacer(libelle, motif, valeur) {
  const n = (code.match(motif) || []).length;
  if (n) {
    code = code.replace(motif, valeur);
    journal.push(`${libelle.padEnd(42)} ${n}`);
  }
}

// Gabarit : le design system remplace SiteLayout.
remplacer(
  "SiteLayout → DaLayout (import)",
  /import \{ SiteLayout \} from "@\/components\/site\/SiteLayout";/g,
  'import { DaLayout } from "@/components/da/DaLayout";',
);
remplacer("SiteLayout → DaLayout (balises)", /SiteLayout>/g, "DaLayout>");

// Typographie : la famille et la couleur des titres viennent des règles du
// design system. Les classes de taille de la page sont devenues mortes
// (la règle .nowadays-da h2 l'emporte sur text-3xl) : on les retire.
remplacer("titres : classes H2/H3 retirées", / className=\{H[23]\}/g, "");
remplacer("font-serif → font-titre", /\bfont-serif\b/g, "font-titre");
remplacer("font-mono retiré (corps hérité)", /\bfont-mono\s*/g, "");
remplacer("text-ink → text-encre", /\btext-ink\b/g, "text-encre");
remplacer("text-cream → text-white", /\btext-cream\b/g, "text-white");
remplacer("bg-rose-dark → bg-framboise", /\bbg-rose-dark\b/g, "bg-framboise");
remplacer("text-rose-dark → text-framboise", /\btext-rose-dark\b/g, "text-framboise");

// Photos : jamais de rond (règle du design system). Les pilules et les puces
// gardent rounded-full, seules les images passent en rectangle arrondi.
remplacer("photos rondes → rectangle arrondi", /(<img[^>]*?)\brounded-full\b/g, "$1rounded-carte");

// Les fonds de section ne sont PAS traités ici : ils dépendent de l'ordre
// d'affichage de la page, pas de l'ordre du fichier. C'est le rôle de
// scripts/alterner-fonds-da.mjs, à lancer juste après.

// Les constantes de titres n'ont plus d'usage.
code = code.replace(/^const H[23] = "[^"]*";\n/gm, "");

if (code === avant) {
  console.log("Aucun changement.");
} else {
  fs.writeFileSync(chemin, code);
  console.log(journal.join("\n"));
  console.log(`\nalternance obtenue : ${fonds.join(" · ")}`);
}
