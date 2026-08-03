/*
 * Classement d'une visite par provenance. Fonction pure, sans aucun import :
 * c'est la pièce la plus facile à se tromper (un référent mal rangé fausse tout
 * un panneau du tableau de bord), donc elle vit à part pour être vérifiable
 * seule, sans base ni serveur.
 */

const MOTEURS = /google|bing|duckduckgo|ecosia|qwant|yahoo|brave/i;

export function provenance(referent: string | null, utmSource: string | null): string {
  // Un utm_source posé à la main l'emporte : c'est une intention explicite.
  const utm = (utmSource || "").trim().toLowerCase();
  if (utm) {
    if (utm.includes("instagram")) return "Instagram";
    if (utm.includes("linkedin")) return "LinkedIn";
    if (utm.includes("newsletter") || utm.includes("megaphone") || utm.includes("mailerlite"))
      return "Le Mégaphone";
    return utm.charAt(0).toUpperCase() + utm.slice(1);
  }

  if (!referent) return "Accès direct";
  let url: URL;
  try {
    url = new URL(referent);
  } catch {
    return "Accès direct";
  }

  /*
   * Un lien ouvert depuis une application mobile arrive avec un référent du
   * genre `android-app://com.google.android.gm/` (Gmail). Son « hôte » est un
   * nom de paquet, pas un domaine : le traiter comme un site donnait « Com ».
   */
  if (url.protocol !== "http:" && url.protocol !== "https:") return "Application mobile";

  const hote = url.hostname.replace(/^www\./, "");

  // Navigation interne : ce n'est pas une nouvelle provenance.
  if (hote === "nowadaysagency.com" || hote.endsWith(".nowadaysagency.com")) return "Accès direct";
  if (hote.includes("instagram")) return "Instagram";
  if (hote.includes("linkedin") || hote.includes("lnkd.in")) return "LinkedIn";
  if (hote.includes("facebook") || hote.includes("fb.com")) return "Facebook";
  if (hote.includes("pinterest")) return "Pinterest";
  if (hote === "t.co" || hote.includes("twitter") || hote === "x.com") return "X (Twitter)";
  if (hote.includes("subscribepage") || hote.includes("mailerlite")) return "Le Mégaphone";

  // Moteur de recherche : on garde le nom du moteur, pas le premier morceau du
  // domaine — sinon « google.fr » deviendrait « Google » mais pas toujours.
  const moteur = hote.match(MOTEURS)?.[0];
  if (moteur) return moteur.charAt(0).toUpperCase() + moteur.slice(1).toLowerCase();

  return hote;
}
