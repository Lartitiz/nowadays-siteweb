import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

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
    return { ok: true };
  });
