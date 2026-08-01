/**
 * Extrait les images encodées en base64 de la maquette de la page d'accueil
 * (nowadays_homepage_v13.html) vers public/images/home/.
 *
 * Usage : node scripts/extract-home-images.mjs <chemin/vers/nowadays_homepage_v13.html>
 *
 * Le logo n'est PAS extrait : le repo a déjà src/assets/nowadays-logo-v2.webp.asset.json,
 * qui est réutilisé par le header et le footer de la home.
 */
import fs from "node:fs";
import path from "node:path";

const source = process.argv[2];
if (!source) {
  console.error("Usage : node scripts/extract-home-images.mjs <maquette.html>");
  process.exit(1);
}

const outDir = path.join(process.cwd(), "public/images/home");
fs.mkdirSync(outDir, { recursive: true });

const html = fs.readFileSync(source, "utf8");
const matches = [...html.matchAll(/data:image\/([a-zA-Z+]+);base64,([A-Za-z0-9+/=]+)/g)];

// Les images apparaissent dans l'ordre du document. Le logo (1re et dernière)
// est ignoré, il existe déjà dans le repo.
const names = [
  null, // logo header — déjà dans le repo
  "laetitia-objections.jpg",
  "laetitia-atelier.jpg",
  "temoin-abigail.jpg",
  "temoin-emmanuelle.jpg",
  "temoin-laurent.jpg",
  "presse-ladn.png",
  "presse-emarketing.png",
  "presse-lebonbon.png",
  null, // logo footer — identique au logo header
];

if (matches.length !== names.length) {
  console.error(
    `Attendu ${names.length} images dans la maquette, ${matches.length} trouvées : ` +
      "l'ordre du document a changé, vérifier le mapping avant de relancer.",
  );
  process.exit(1);
}

matches.forEach((match, i) => {
  const name = names[i];
  if (!name) return;
  const buffer = Buffer.from(match[2], "base64");
  fs.writeFileSync(path.join(outDir, name), buffer);
  console.log(`${name.padEnd(26)} ${(buffer.length / 1024).toFixed(0)} Ko`);
});
