import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import process from "node:process";

import { deleteCookie, getCookie, getRequest, setCookie } from "@tanstack/react-start/server";

import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { provenance } from "@/lib/mesure-provenance";

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

export type Periode = "7j" | "30j" | "tout";

export interface Statistiques {
  periode: Periode;
  visiteuses: number;
  visiteusesAvant: number | null;
  appels: number;
  appelsAvant: number | null;
  messages: number;
  aimants: number;
  tauxPourCent: number;
  tauxAvantPourCent: number | null;
  provenances: Array<{ nom: string; nombre: number }>;
  pagesEntree: Array<{ chemin: string; nombre: number }>;
  tronque: boolean;
}

interface LigneEvenement {
  occurred_at: string;
  kind: string;
  path: string;
  source: string;
  label: string | null;
  device: string;
  visiteur_jour: string;
}

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
  kind: "vue" | "appel" | "aimant",
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

export async function enregistrerAppelServeur(path: string) {
  await enregistrer("appel", path, "—", null);
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

const JOURS: Record<Periode, number | null> = { "7j": 7, "30j": 30, tout: null };
const PLAFOND_LIGNES = 100_000;

function debut(jours: number | null, decalage = 0): string {
  if (jours === null) return "1970-01-01T00:00:00.000Z";
  return new Date(Date.now() - (jours + decalage) * 86_400_000).toISOString();
}

function compte(lignes: LigneEvenement[], kind: string): number {
  return lignes.filter((l) => l.kind === kind).length;
}

function visiteusesUniques(lignes: LigneEvenement[]): number {
  // Une empreinte par jour : une personne revenue un autre jour compte deux
  // fois. C'est le prix à payer pour ne poser aucun cookie.
  return new Set(lignes.filter((l) => l.kind === "vue").map((l) => l.visiteur_jour)).size;
}

function taux(appels: number, visiteuses: number): number {
  if (!visiteuses) return 0;
  return Math.round((appels / visiteuses) * 1000) / 10;
}

export async function calculerStatistiques(periode: Periode): Promise<Statistiques> {
  const jours = JOURS[periode];
  // On remonte deux périodes en arrière pour pouvoir comparer à la précédente.
  const depuis = debut(jours, jours ?? 0);

  const { data: lignes, error } = await evenements()
    .select("occurred_at,kind,path,source,label,device,visiteur_jour")
    .gte("occurred_at", depuis)
    .order("occurred_at", { ascending: false })
    .limit(PLAFOND_LIGNES);

  if (error) throw new Error(`Lecture impossible : ${error.message}`);
  const toutes = lignes ?? [];

  const limite = jours === null ? null : new Date(Date.now() - jours * 86_400_000).toISOString();
  const courante = limite ? toutes.filter((l) => l.occurred_at >= limite) : toutes;
  const precedente = limite ? toutes.filter((l) => l.occurred_at < limite) : [];
  const aDuPasse = limite !== null && precedente.length > 0;

  const visiteuses = visiteusesUniques(courante);
  const appels = compte(courante, "appel");
  const visiteusesAvant = aDuPasse ? visiteusesUniques(precedente) : null;
  const appelsAvant = aDuPasse ? compte(precedente, "appel") : null;

  const parCle = (cle: (l: LigneEvenement) => string) => {
    const paniers = new Map<string, number>();
    for (const l of courante) {
      if (l.kind !== "vue") continue;
      const k = cle(l);
      paniers.set(k, (paniers.get(k) ?? 0) + 1);
    }
    return [...paniers.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6);
  };

  // Les messages du formulaire sont déjà en base : on les compte à la source.
  const requeteMessages = supabaseAdmin
    .from("contact_messages")
    .select("id", { count: "exact", head: true });
  const { count } = limite
    ? await requeteMessages.gte("created_at", limite)
    : await requeteMessages;

  return {
    periode,
    visiteuses,
    visiteusesAvant,
    appels,
    appelsAvant,
    messages: count ?? 0,
    aimants: compte(courante, "aimant"),
    tauxPourCent: taux(appels, visiteuses),
    tauxAvantPourCent:
      visiteusesAvant !== null && appelsAvant !== null ? taux(appelsAvant, visiteusesAvant) : null,
    provenances: parCle((l) => l.source).map(([nom, nombre]) => ({ nom, nombre })),
    pagesEntree: parCle((l) => l.path).map(([chemin, nombre]) => ({ chemin, nombre })),
    tronque: toutes.length >= PLAFOND_LIGNES,
  };
}
