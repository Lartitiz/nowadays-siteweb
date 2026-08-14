/*
 * Toute l'arithmétique du tableau de bord, sans base ni serveur. Séparée pour
 * être vérifiable sur des données fabriquées : c'est ici que se logeraient les
 * erreurs qui comptent — une visiteuse comptée deux fois, un taux calculé sur
 * la mauvaise période, un jour manquant dans la courbe.
 */

export type Periode = "7j" | "30j" | "tout";

export interface LigneEvenement {
  occurred_at: string;
  kind: string;
  path: string;
  source: string;
  label: string | null;
  device: string;
  visiteur_jour: string;
}

export interface Croisement {
  nom: string;
  visiteuses: number;
  appels: number;
  tauxPourCent: number;
}

export interface Statistiques {
  periode: Periode;
  visiteuses: number;
  visiteusesAvant: number | null;
  appels: number;
  appelsAvant: number | null;
  appelsConfirmes: number;
  appelsConfirmesAvant: number | null;
  messages: number;
  aimants: number;
  tauxPourCent: number;
  tauxAvantPourCent: number | null;
  provenances: Croisement[];
  pagesEntree: Array<{ chemin: string; nombre: number }>;
  pagesQuiDeclenchent: Array<{ chemin: string; nombre: number }>;
  aimantsDetail: Array<{ nom: string; nombre: number }>;
  appareils: Croisement[];
  courbe: Array<{ jour: string; visiteuses: number; appels: number }>;
  tronque: boolean;
}

export const JOURS: Record<Periode, number | null> = { "7j": 7, "30j": 30, tout: null };
export const PLAFOND_LIGNES = 100_000;

export function debutPeriode(jours: number | null, decalage = 0, maintenant = Date.now()): string {
  if (jours === null) return "1970-01-01T00:00:00.000Z";
  return new Date(maintenant - (jours + decalage) * 86_400_000).toISOString();
}

function compte(lignes: LigneEvenement[], kind: string): number {
  return lignes.filter((l) => l.kind === kind).length;
}

function visiteusesUniques(lignes: LigneEvenement[]): number {
  // Une empreinte par jour : une personne revenue un autre jour compte deux
  // fois. C'est le prix à payer pour ne poser aucun cookie.
  return new Set(lignes.filter((l) => l.kind === "vue").map((l) => l.visiteur_jour)).size;
}

export function taux(appels: number, visiteuses: number): number {
  if (!visiteuses) return 0;
  return Math.round((appels / visiteuses) * 1000) / 10;
}

export function agreger(
  toutes: LigneEvenement[],
  periode: Periode,
  messages: number,
  maintenant = Date.now(),
): Statistiques {
  const jours = JOURS[periode];
  const limite = jours === null ? null : new Date(maintenant - jours * 86_400_000).toISOString();
  const courante = limite ? toutes.filter((l) => l.occurred_at >= limite) : toutes;
  const precedente = limite ? toutes.filter((l) => l.occurred_at < limite) : [];
  const aDuPasse = limite !== null && precedente.length > 0;

  const visiteuses = visiteusesUniques(courante);
  const appels = compte(courante, "appel");
  const appelsConfirmes = compte(courante, "appel_confirme");
  const visiteusesAvant = aDuPasse ? visiteusesUniques(precedente) : null;
  const appelsAvant = aDuPasse ? compte(precedente, "appel") : null;
  const appelsConfirmesAvant = aDuPasse ? compte(precedente, "appel_confirme") : null;

  // Compte les lignes d'un type donné, regroupées par une clé.
  const parCle = (
    cle: (l: LigneEvenement) => string,
    type: string,
    combien = 6,
  ): Array<[string, number]> => {
    const paniers = new Map<string, number>();
    for (const l of courante) {
      if (l.kind !== type) continue;
      const k = cle(l);
      paniers.set(k, (paniers.get(k) ?? 0) + 1);
    }
    return [...paniers.entries()].sort((a, b) => b[1] - a[1]).slice(0, combien);
  };

  /*
   * Croise les visiteuses et les appels sur une même dimension — provenance ou
   * appareil. C'est la seule façon de voir qu'une source amène du volume sans
   * amener de rendez-vous.
   */
  const croise = (cle: (l: LigneEvenement) => string): Croisement[] => {
    const vues = new Map<string, Set<string>>();
    const clics = new Map<string, number>();
    for (const l of courante) {
      const k = cle(l);
      if (l.kind === "vue") {
        if (!vues.has(k)) vues.set(k, new Set());
        vues.get(k)?.add(l.visiteur_jour);
      } else if (l.kind === "appel") {
        clics.set(k, (clics.get(k) ?? 0) + 1);
      }
    }
    // Une dimension qui n'a produit que des clics et aucune vue reste visible :
    // c'est anormal, et le cacher serait pire que de le montrer.
    const cles = new Set([...vues.keys(), ...clics.keys()]);
    return [...cles]
      .map((nom) => {
        const v = vues.get(nom)?.size ?? 0;
        const a = clics.get(nom) ?? 0;
        return { nom, visiteuses: v, appels: a, tauxPourCent: taux(a, v) };
      })
      .sort((x, y) => y.visiteuses - x.visiteuses || y.appels - x.appels)
      .slice(0, 8);
  };

  // Une barre par jour, du plus ancien au plus récent, sans trou.
  const nbJours = jours ?? 30;
  const parJour = new Map<string, { visiteuses: Set<string>; appels: number }>();
  for (let i = nbJours - 1; i >= 0; i--) {
    const j = new Date(maintenant - i * 86_400_000).toISOString().slice(0, 10);
    parJour.set(j, { visiteuses: new Set(), appels: 0 });
  }
  for (const l of courante) {
    const c = parJour.get(l.occurred_at.slice(0, 10));
    if (!c) continue;
    if (l.kind === "vue") c.visiteuses.add(l.visiteur_jour);
    else if (l.kind === "appel") c.appels += 1;
  }
  const courbe = [...parJour.entries()].map(([jour, c]) => ({
    jour,
    visiteuses: c.visiteuses.size,
    appels: c.appels,
  }));

  return {
    periode,
    visiteuses,
    visiteusesAvant,
    appels,
    appelsAvant,
    appelsConfirmes,
    appelsConfirmesAvant,
    messages,
    aimants: compte(courante, "aimant"),
    tauxPourCent: taux(appels, visiteuses),
    tauxAvantPourCent:
      visiteusesAvant !== null && appelsAvant !== null ? taux(appelsAvant, visiteusesAvant) : null,
    provenances: croise((l) => l.source),
    pagesEntree: parCle((l) => l.path, "vue").map(([chemin, nombre]) => ({ chemin, nombre })),
    pagesQuiDeclenchent: parCle((l) => l.path, "appel").map(([chemin, nombre]) => ({
      chemin,
      nombre,
    })),
    aimantsDetail: parCle((l) => l.label ?? "—", "aimant").map(([nom, nombre]) => ({
      nom,
      nombre,
    })),
    appareils: croise((l) => l.device),
    courbe,
    tronque: toutes.length >= PLAFOND_LIGNES,
  };
}
