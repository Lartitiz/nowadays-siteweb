import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import type { Periode, Statistiques } from "@/lib/mesure.server";

/*
 * Les enveloppes appelables depuis le site. Tout le travail est dans
 * `mesure.server.ts`, importé UNIQUEMENT dans les corps de handler : c'est ce
 * qui permet au bundler de le retirer du navigateur, avec son `node:crypto` et
 * sa clé de service Supabase.
 */

export type { Periode, Statistiques };

const schemaVue = z.object({
  path: z.string().min(1).max(200),
  referent: z.string().max(500).nullable().optional(),
  utmSource: z.string().max(60).nullable().optional(),
});

export const enregistrerVue = createServerFn({ method: "POST" })
  .inputValidator(schemaVue)
  .handler(async ({ data }) => {
    const { enregistrerVueServeur } = await import("@/lib/mesure.server");
    await enregistrerVueServeur(data.path, data.referent ?? null, data.utmSource ?? null);
    return { ok: true };
  });

export const enregistrerClicAppel = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      path: z.string().min(1).max(200),
      referent: z.string().max(500).nullable().optional(),
      utmSource: z.string().max(60).nullable().optional(),
    }),
  )
  .handler(async ({ data }) => {
    const { enregistrerAppelServeur } = await import("@/lib/mesure.server");
    await enregistrerAppelServeur(data.path, data.referent ?? null, data.utmSource ?? null);
    return { ok: true };
  });

export const enregistrerAppelConfirme = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      path: z.string().min(1).max(200),
      referent: z.string().max(500).nullable().optional(),
      utmSource: z.string().max(60).nullable().optional(),
    }),
  )
  .handler(async ({ data }) => {
    const { enregistrerAppelConfirmeServeur } = await import("@/lib/mesure.server");
    await enregistrerAppelConfirmeServeur(data.path, data.referent ?? null, data.utmSource ?? null);
    return { ok: true };
  });

export const connexionCoulisses = createServerFn({ method: "POST" })
  .inputValidator(z.object({ motDePasse: z.string().max(200) }))
  .handler(async ({ data }) => {
    const { ouvrirSession } = await import("@/lib/mesure.server");
    return ouvrirSession(data.motDePasse);
  });

export const deconnexionCoulisses = createServerFn({ method: "POST" }).handler(async () => {
  const { fermerSession } = await import("@/lib/mesure.server");
  fermerSession();
  return { ok: true };
});

/*
 * Résultat explicite plutôt qu'une exception : sinon la page ne peut pas faire
 * la différence entre « tu n'es pas connectée » (montrer le mot de passe) et
 * « la base n'a pas répondu » (montrer l'erreur). Renvoyer au formulaire après
 * un bon mot de passe serait le pire des deux mondes.
 */
export type ResultatStatistiques =
  | { ok: true; stats: Statistiques }
  | { ok: false; raison: "acces" }
  | { ok: false; raison: "lecture"; message: string };

export const lireStatistiques = createServerFn({ method: "POST" })
  .inputValidator(z.object({ periode: z.enum(["7j", "30j", "tout"]) }))
  .handler(async ({ data }): Promise<ResultatStatistiques> => {
    const { sessionAdminValide, calculerStatistiques } = await import("@/lib/mesure.server");
    if (!sessionAdminValide()) return { ok: false, raison: "acces" };
    try {
      return { ok: true, stats: await calculerStatistiques(data.periode) };
    } catch (e) {
      const message = e instanceof Error ? e.message : "Erreur inconnue";
      console.error("[mesure] lecture du tableau de bord :", message);
      return { ok: false, raison: "lecture", message };
    }
  });

/*
 * La ligne SQL à programmer dans Supabase pour l'envoi du lundi. Elle contient
 * le jeton, donc elle ne sort que pour une session admin valide : c'est plus
 * sûr que de faire circuler le jeton dans une conversation ou un e-mail.
 */
export const lireLignePlanification = createServerFn({ method: "POST" }).handler(async () => {
  const { sessionAdminValide, jetonRecap } = await import("@/lib/mesure.server");
  if (!sessionAdminValide()) return { ok: false as const };
  return { ok: true as const, jeton: jetonRecap() };
});

// Envoi immédiat, pour vérifier que l'e-mail part avant d'attendre lundi.
export const envoyerRecapMaintenant = createServerFn({ method: "POST" }).handler(async () => {
  const { sessionAdminValide, envoyerRecapHebdo } = await import("@/lib/mesure.server");
  if (!sessionAdminValide()) return { ok: false, message: "Accès refusé" };
  return envoyerRecapHebdo();
});
