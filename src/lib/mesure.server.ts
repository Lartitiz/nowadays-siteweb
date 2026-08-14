import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import process from "node:process";

import { deleteCookie, getCookie, getRequest, setCookie } from "@tanstack/react-start/server";

import { supabaseAdmin } from "@/integrations/supabase/client.server";
import {
  agreger,
  debutPeriode,
  JOURS,
  PLAFOND_LIGNES,
  type LigneEvenement,
  type Periode,
  type Statistiques,
} from "@/lib/mesure-agregation";
import { provenance } from "@/lib/mesure-provenance";

export type { Periode, Statistiques };

/*
 * Mesure d'audience maison — tout ce qui ne doit jamais partir au navigateur.
 * Les enveloppes appelables depuis le site sont dans `mesure.functions.ts` ;
 * ce module-ci n'est importé que depuis des corps de fonction serveur, ce qui
 * garantit qu'il est retiré du bundle client (il importe `node:crypto`).
 *
 * Aucun cookie de suivi, aucune donnée personnelle, rien qui sorte du Supabase
 * de Nowadays. On enregistre : la page vue, d'où vient la visiteuse, l'appareil,
 * et une empreinte qui ne vit qu'une journée. Cette empreinte est un hachage de
 * (secret + date du jour + IP + navigateur) : elle évite de compter dix fois la
 * même personne dans la journée, et devient irréversible le lendemain puisque
 * le sel change. L'IP elle-même n'est jamais écrite.
 *
 * C'est ce qui permet de se passer de bandeau : la CNIL exempte la mesure
 * d'audience de consentement quand elle est strictement limitée à ça, sans
 * recoupement entre sites.
 */

const NOM_COOKIE_ADMIN = "coulisses";
const DUREE_SESSION_ADMIN = 60 * 60 * 24 * 30; // 30 jours

// Aspirateurs et robots les plus courants : on ne les compte pas.
const ROBOTS =
  /bot|crawler|spider|crawling|slurp|bingpreview|headlesschrome|lighthouse|pagespeed|gtmetrix|pingdom|uptime|curl|wget|python-requests|axios|node-fetch|postman|facebookexternalhit|whatsapp|telegrambot|semrush|ahrefs|mj12|dotbot|petalbot|dataforseo|screaming frog/i;

type NouvelEvenement = Omit<LigneEvenement, "occurred_at">;

/*
 * `site_events` est créée par migration Lovable, et `types.ts` n'est régénéré
 * qu'après coup. On décrit donc à la main la petite surface dont on a besoin,
 * plutôt qu'un `any` qui contaminerait tout le fichier.
 */
interface AccesEvenements {
  from(table: "site_events"): {
    insert(lignes: NouvelEvenement[]): Promise<{ error: { message: string } | null }>;
    select(colonnes: string): {
      gte(
        colonne: string,
        valeur: string,
      ): {
        order(
          colonne: string,
          options: { ascending: boolean },
        ): {
          limit(
            n: number,
          ): Promise<{ data: LigneEvenement[] | null; error: { message: string } | null }>;
        };
      };
    };
  };
}

function evenements() {
  return (supabaseAdmin as unknown as AccesEvenements).from("site_events");
}

/* ------------------------------------------------------------------ *
 * Contexte de la requête : provenance, appareil, empreinte du jour
 * ------------------------------------------------------------------ */

function secretServeur(): string {
  // Un sel dédié est préférable, mais on ne veut pas que la mesure tombe si la
  // variable n'a pas encore été posée : la clé de service fait un secret de
  // repli acceptable, elle ne quitte jamais le serveur.
  return process.env.MESURE_SEL || process.env.SUPABASE_SERVICE_ROLE_KEY || "sel-de-secours";
}

function adresseIp(entetes: Headers): string {
  return (
    entetes.get("cf-connecting-ip") ||
    entetes.get("x-real-ip") ||
    entetes.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "inconnue"
  );
}

function empreinteDuJour(ip: string, navigateur: string): string {
  const jour = new Date().toISOString().slice(0, 10);
  return createHash("sha256")
    .update(`${secretServeur()}|${jour}|${ip}|${navigateur}`)
    .digest("hex")
    .slice(0, 32);
}

function appareil(navigateur: string): "mobile" | "ordinateur" {
  return /mobile|android|iphone|ipad|ipod|windows phone/i.test(navigateur)
    ? "mobile"
    : "ordinateur";
}

async function enregistrer(
  kind: "vue" | "appel" | "aimant" | "appel_confirme",
  path: string,
  source: string,
  label: string | null,
) {
  try {
    const entetes = getRequest().headers;
    const navigateur = entetes.get("user-agent") || "";
    if (!navigateur || ROBOTS.test(navigateur)) return;

    const { error } = await evenements().insert([
      {
        kind,
        path: path.slice(0, 200),
        source: source.slice(0, 60),
        label: label ? label.slice(0, 60) : null,
        device: appareil(navigateur),
        visiteur_jour: empreinteDuJour(adresseIp(entetes), navigateur),
      },
    ]);
    if (error) console.error("[mesure] écriture impossible :", error.message);
  } catch (e) {
    console.error("[mesure] écriture impossible :", e instanceof Error ? e.message : e);
  }
}

export async function enregistrerVueServeur(
  path: string,
  referent: string | null,
  utmSource: string | null,
) {
  await enregistrer("vue", path, provenance(referent, utmSource), null);
}

/*
 * On enregistre la provenance sur le clic aussi, pas seulement sur la vue :
 * sans ça, impossible de dire si Instagram amène des gens qui demandent un
 * appel ou seulement du volume. C'est le chiffre qui décide où passe le temps.
 */
export async function enregistrerAppelServeur(
  path: string,
  referent: string | null,
  utmSource: string | null,
) {
  await enregistrer("appel", path, provenance(referent, utmSource), null);
}

/*
 * Appelé depuis /merci-rdv, la page vers laquelle Calendly redirige après une
 * réservation réellement confirmée (réglage côté Calendly, pas côté site).
 * Distinct de `enregistrerAppelServeur` : un clic sur le bouton ne dit pas si
 * la visiteuse a réellement choisi un créneau.
 */
export async function enregistrerAppelConfirmeServeur(
  path: string,
  referent: string | null,
  utmSource: string | null,
) {
  await enregistrer("appel_confirme", path, provenance(referent, utmSource), null);
}

/*
 * Appelé depuis `mailerlite.functions.ts`, une fois l'inscription réellement
 * acceptée. On compte donc des inscriptions abouties, pas des clics.
 */
export async function enregistrerAimant(source: string) {
  await enregistrer("aimant", "/", "—", source);
}

/* ------------------------------------------------------------------ *
 * Accès à la page privée
 * ------------------------------------------------------------------ */

function signature(valeur: string): string {
  return createHmac("sha256", secretServeur()).update(valeur).digest("hex");
}

function comparaisonSure(a: string, b: string): boolean {
  const ta = Buffer.from(a);
  const tb = Buffer.from(b);
  if (ta.length !== tb.length) return false;
  return timingSafeEqual(ta, tb);
}

export function sessionAdminValide(): boolean {
  const jeton = getCookie(NOM_COOKIE_ADMIN);
  if (!jeton) return false;
  const [expiration, signe] = jeton.split(".");
  if (!expiration || !signe) return false;
  if (!comparaisonSure(signature(expiration), signe)) return false;
  return Number(expiration) > Date.now();
}

export async function ouvrirSession(
  motDePasse: string,
): Promise<{ ok: true } | { ok: false; message: string }> {
  const attendu = process.env.MESURE_MOT_DE_PASSE;
  if (!attendu) {
    return { ok: false, message: "Le mot de passe n'est pas encore configuré côté serveur." };
  }
  // Petit délai constant : rend le tâtonnement pénible sans gêner l'usage.
  await new Promise((r) => setTimeout(r, 400));
  if (!comparaisonSure(motDePasse, attendu)) {
    return { ok: false, message: "Mot de passe incorrect." };
  }
  const expiration = String(Date.now() + DUREE_SESSION_ADMIN * 1000);
  setCookie(NOM_COOKIE_ADMIN, `${expiration}.${signature(expiration)}`, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: DUREE_SESSION_ADMIN,
  });
  return { ok: true };
}

export function fermerSession() {
  deleteCookie(NOM_COOKIE_ADMIN, { path: "/" });
}

/* ------------------------------------------------------------------ *
 * Lecture — le tableau de bord
 * ------------------------------------------------------------------ */

export async function calculerStatistiques(periode: Periode): Promise<Statistiques> {
  const jours = JOURS[periode];
  // On remonte deux périodes en arrière pour pouvoir comparer à la précédente.
  const depuis = debutPeriode(jours, jours ?? 0);

  const { data: lignes, error } = await evenements()
    .select("occurred_at,kind,path,source,label,device,visiteur_jour")
    .gte("occurred_at", depuis)
    .order("occurred_at", { ascending: false })
    .limit(PLAFOND_LIGNES);

  if (error) throw new Error(`Lecture impossible : ${error.message}`);

  // Les messages du formulaire sont déjà en base : on les compte à la source.
  const limite = jours === null ? null : new Date(Date.now() - jours * 86_400_000).toISOString();
  const requeteMessages = supabaseAdmin
    .from("contact_messages")
    .select("id", { count: "exact", head: true });
  const { count } = limite
    ? await requeteMessages.gte("created_at", limite)
    : await requeteMessages;

  return agreger(lignes ?? [], periode, count ?? 0);
}

/* ------------------------------------------------------------------ *
 * Récap hebdomadaire par e-mail
 * ------------------------------------------------------------------ */

/*
 * Le site est déployé sur Cloudflare, dont la configuration est régénérée à
 * chaque build : on ne peut pas y inscrire une tâche planifiée durablement.
 * C'est donc Supabase qui appellera cette route chaque lundi (pg_cron +
 * pg_net). Le jeton n'est pas le mot de passe : il ne donne le droit que de
 * déclencher l'envoi du récap, et il est dérivé du secret serveur, donc
 * impossible à deviner et jamais écrit dans le code.
 */
export function jetonRecap(): string {
  return createHmac("sha256", secretServeur()).update("recap-hebdo").digest("hex").slice(0, 40);
}

function fleche(actuel: number, avant: number | null): string {
  if (avant === null || avant === 0) return "";
  const p = Math.round(((actuel - avant) / avant) * 100);
  if (p === 0) return " (stable)";
  return p > 0 ? ` (+${p} %)` : ` (${p} %)`;
}

export async function composerRecapHebdo(): Promise<{
  sujet: string;
  html: string;
  texte: string;
}> {
  const s = await calculerStatistiques("7j");

  const meilleure = s.provenances
    .filter((p) => p.appels > 0)
    .sort((a, b) => b.appels - a.appels)[0];
  const grosseSource = s.provenances[0];

  // Une phrase de lecture, pas un tableau de plus : c'est ce qu'on lit vraiment
  // sur un téléphone le lundi matin.
  let lecture: string;
  if (s.visiteuses === 0) {
    lecture = "Aucune visite cette semaine. À creuser du côté de l'acquisition.";
  } else if (s.appels === 0) {
    lecture = `${s.visiteuses} visiteuses, aucune demande d'appel. Le trafic vient surtout de ${grosseSource?.nom ?? "sources variées"}.`;
  } else if (s.appelsConfirmes > 0) {
    lecture = `${s.appelsConfirmes} appel${s.appelsConfirmes > 1 ? "s" : ""} vraiment confirmé${s.appelsConfirmes > 1 ? "s" : ""} sur ${s.appels} clic${s.appels > 1 ? "s" : ""}, surtout depuis ${meilleure?.nom ?? grosseSource?.nom ?? "sources variées"}.`;
  } else if (meilleure) {
    lecture = `${s.appels} demande${s.appels > 1 ? "s" : ""} d'appel, surtout depuis ${meilleure.nom} — mais aucune n'a encore débouché sur un créneau vraiment confirmé.`;
  } else {
    lecture = `${s.appels} demande${s.appels > 1 ? "s" : ""} d'appel cette semaine.`;
  }

  const lignes: Array<[string, string]> = [
    ["Visiteuses", `${s.visiteuses}${fleche(s.visiteuses, s.visiteusesAvant)}`],
    ["Ont cliqué pour réserver un appel", `${s.appels}${fleche(s.appels, s.appelsAvant)}`],
    [
      "Ont vraiment confirmé un appel",
      `${s.appelsConfirmes}${fleche(s.appelsConfirmes, s.appelsConfirmesAvant)}`,
    ],
    ["Messages reçus", String(s.messages)],
    ["Inscriptions", String(s.aimants)],
    ["Sur 100 visiteuses", `${s.tauxPourCent.toLocaleString("fr-FR")} demandent un appel`],
  ];

  const sujet = `Nowadays — ${s.visiteuses} visiteuses, ${s.appels} demande${s.appels > 1 ? "s" : ""} d'appel`;

  const html = `
    <div style="font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;color:#1a1a1a;max-width:520px">
      <h2 style="font-size:18px;font-weight:500;color:#91014b;margin:0 0 4px">Ta semaine sur le site</h2>
      <p style="font-size:14px;color:#6b5a62;margin:0 0 20px">7 derniers jours</p>
      <table style="border-collapse:collapse;width:100%">
        ${lignes
          .map(
            ([k, v]) =>
              `<tr><td style="padding:9px 0;border-bottom:1px solid #ffd6e8;font-size:15px">${k}</td>
               <td style="padding:9px 0;border-bottom:1px solid #ffd6e8;font-size:15px;text-align:right;font-weight:500">${v}</td></tr>`,
          )
          .join("")}
      </table>
      <p style="font-size:15px;line-height:1.6;margin:20px 0">${lecture}</p>
      <p style="margin:24px 0 0">
        <a href="https://nowadaysagency.com/coulisses" style="color:#d4155c">Voir le détail</a>
      </p>
    </div>`;

  const texte = `Ta semaine sur le site (7 derniers jours)\n\n${lignes
    .map(([k, v]) => `${k} : ${v}`)
    .join("\n")}\n\n${lecture}\n\nhttps://nowadaysagency.com/coulisses`;

  return { sujet, html, texte };
}

export async function envoyerRecapHebdo(): Promise<{ ok: boolean; message: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { ok: false, message: "RESEND_API_KEY manquant" };

  const { sujet, html, texte } = await composerRecapHebdo();
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: "Site Nowadays <notifications@nowadaysagency.com>",
      to: ["laetitia@nowadaysagency.com"],
      subject: sujet,
      html,
      text: texte,
    }),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    return { ok: false, message: `Resend ${res.status} ${detail.slice(0, 120)}` };
  }
  return { ok: true, message: "envoyé" };
}
