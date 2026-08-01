/**
 * Réassigne les fonds de section en suivant l'ordre d'AFFICHAGE de la page,
 * et non l'ordre où les composants sont déclarés dans le fichier : sur ces
 * pages, les deux diffèrent, et se fier au fichier donne deux sections roses
 * l'une après l'autre.
 *
 * Usage : node scripts/alterner-fonds-da.mjs src/routes/<page>.tsx
 *
 * Alternance : blanc, rose pâle, blanc… La dernière section affichée est le
 * CTA final : elle reçoit le jaune, seule zone colorée pleine de la page.
 */
import fs from "node:fs";

const chemin = process.argv[2];
let code = fs.readFileSync(chemin, "utf8");

// 1. Ordre d'affichage, lu dans le composant Page().
const page = code.match(/function Page\(\)[\s\S]*?\n\}/)?.[0];
if (!page) {
  console.error("Composant Page() introuvable.");
  process.exit(1);
}
const ordre = [...page.matchAll(/<([A-Z][A-Za-z0-9]*)\s*\/>/g)].map((m) => m[1]);

// 2. Ne garder que les composants déclarés dans ce fichier et qui rendent
//    une <section> : les autres (CTA collant, etc.) ne portent pas de fond.
const rendus = ordre.filter((nom) =>
  new RegExp(`function ${nom}\\([\\s\\S]*?<section[^>]*className="`).test(code),
);

const dernier = rendus[rendus.length - 1];
const resume = [];

rendus.forEach((nom, i) => {
  const fond = nom === dernier ? "bg-jaune" : i % 2 === 0 ? "bg-white" : "bg-rose-pale";
  resume.push(`${String(i + 1).padStart(2)}. ${nom.padEnd(28)} ${fond}`);

  // Remplace le fond dans la première <section> de ce composant.
  const re = new RegExp(`(function ${nom}\\([\\s\\S]*?<section[^>]*className=")([^"]*)"`);
  code = code.replace(re, (tout, avant, classes) => {
    const nettoye = classes.replace(/\bbg-[\w-]+\b\s*/g, "").trim();
    return `${avant}${[nettoye, fond].filter(Boolean).join(" ")}"`;
  });
});

fs.writeFileSync(chemin, code);
console.log(resume.join("\n"));
