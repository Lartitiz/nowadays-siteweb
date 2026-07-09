import { createServerFn } from "@tanstack/react-start";
import process from "node:process";
import { z } from "zod";

const NEED_LABELS: Record<string, string> = {
  accompagnement: "Accompagnement",
  "cooperative-asso": "Coopérative / association",
  formation: "Formation",
  autre: "Autre",
};

// Notifie Laetitia par e-mail via Resend. Best-effort : ne bloque jamais
// l'enregistrement du message si l'envoi échoue.
async function notifyByEmail(data: {
  name: string;
  email: string;
  organization?: string | null;
  needType: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[submitContact] RESEND_API_KEY manquant — notif ignorée");
    return;
  }
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Site Nowadays <hello@nowadaysagency.com>",
        to: ["hello@nowadaysagency.com"],
        reply_to: data.email,
        subject: `Nouveau message — ${data.name} (${NEED_LABELS[data.needType] ?? data.needType})`,
        html: `
          <h2>Nouveau message depuis le site</h2>
          <p><strong>Nom :</strong> ${data.name}</p>
          <p><strong>Email :</strong> ${data.email}</p>
          <p><strong>Organisation :</strong> ${data.organization || "—"}</p>
          <p><strong>Type de besoin :</strong> ${NEED_LABELS[data.needType] ?? data.needType}</p>
          <p><strong>Message :</strong></p>
          <p>${data.message.replace(/\n/g, "<br>")}</p>
        `,
      }),
    });
    if (!res.ok) {
      console.error("[submitContact] Resend", res.status, await res.text().catch(() => ""));
    }
  } catch (err) {
    console.error("[submitContact] Resend exception", err);
  }
}

const ContactSchema = z.object({
  name: z.string().trim().min(2, "Nom requis").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  organization: z.string().trim().max(200).optional().or(z.literal("")),
  needType: z.enum([
    "accompagnement",
    "cooperative-asso",
    "formation",
    "autre",
  ]),
  message: z.string().trim().min(10, "Message trop court").max(4000),
  consent: z.literal(true, { errorMap: () => ({ message: "Consentement requis" }) }),
  // honeypot
  website: z.string().max(0).optional().or(z.literal("")),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ContactSchema.parse(input))
  .handler(async ({ data }) => {
    if (data.website && data.website.length > 0) {
      // honeypot tripped — pretend success
      return { ok: true };
    }
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("contact_messages").insert({
      name: data.name,
      email: data.email,
      organization: data.organization || null,
      need_type: data.needType,
      message: data.message,
      consent: data.consent,
    });
    if (error) {
      console.error("[submitContact]", error);
      throw new Error("Impossible d'envoyer le message pour le moment");
    }
    await notifyByEmail(data);
    return { ok: true };
  });
