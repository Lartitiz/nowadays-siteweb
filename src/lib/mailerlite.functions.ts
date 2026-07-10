import { createServerFn } from "@tanstack/react-start";
import process from "node:process";
import { z } from "zod";

// Sources = un aimant (lead magnet) ou la newsletter. Chaque source est
// rattachée à un GROUPE MailerLite. L'ajout au groupe déclenche l'automation
// MailerLite existante qui envoie le PDF / la séquence. On remplace ainsi
// entièrement Zapier : le site parle directement à l'API MailerLite.
export const SUBSCRIBE_SOURCES = [
  "formation-instagram",
  "guide-storytelling",
  "plan-communication",
  "calendrier-editorial",
  "template-branding",
  "newsletter",
] as const;

export type SubscribeSource = (typeof SUBSCRIBE_SOURCES)[number];

// Map source -> id de groupe MailerLite (relevés dans le compte le 09/07/2026).
// Les ids ne sont pas secrets. L'ajout au groupe déclenche l'automation
// MailerLite qui envoie le PDF / la séquence.
const GROUP_IDS: Record<SubscribeSource, string> = {
  "formation-instagram": "97403595324917086", // Instagram Lead Magnet
  "guide-storytelling": "97403595302896957", // Storytelling
  "plan-communication": "171976181183153753", // Lead Magnet Plan de com'
  "calendrier-editorial": "140326980271736757", // Calendrier Éditorial
  "template-branding": "121129867221665139", // Branding Lead Magnet
  newsletter: "168045674357589073", // Newsletter sans email de bienvenue
};

const SubscribeSchema = z.object({
  email: z.string().trim().email("Email invalide").max(255),
  firstName: z.string().trim().min(1, "Prénom requis").max(100),
  source: z.enum(SUBSCRIBE_SOURCES),
  // honeypot anti-spam : un vrai humain le laisse vide
  website: z.string().max(0).optional().or(z.literal("")),
});

export const subscribeToMailerLite = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => SubscribeSchema.parse(input))
  .handler(async ({ data }) => {
    if (data.website && data.website.length > 0) {
      // honeypot déclenché — on fait semblant que tout va bien
      return { ok: true };
    }

    const apiKey = process.env.MAILERLITE_API_KEY;
    if (!apiKey) {
      console.error("[subscribeToMailerLite] MAILERLITE_API_KEY manquant");
      throw new Error("Inscription indisponible pour le moment");
    }

    const groupId = GROUP_IDS[data.source];
    const body: Record<string, unknown> = {
      email: data.email,
      fields: { name: data.firstName },
    };
    // Si le groupe est mappé, on l'ajoute → déclenche l'automation MailerLite.
    if (groupId) body.groups = [groupId];

    const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("[subscribeToMailerLite]", data.source, res.status, text);
      throw new Error("Impossible de t'inscrire pour le moment");
    }

    return { ok: true };
  });
