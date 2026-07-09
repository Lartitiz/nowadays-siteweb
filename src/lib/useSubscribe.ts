import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import {
  subscribeToMailerLite,
  type SubscribeSource,
} from "@/lib/mailerlite.functions";

// Hook partagé par les 5 formulaires de capture (4 aimants + newsletter footer).
// Gère l'appel MailerLite, l'état d'envoi, le succès et l'erreur — pour ne pas
// dupliquer la logique et éviter les échecs silencieux.
export function useSubscribe(source: SubscribeSource) {
  const subscribe = useServerFn(subscribeToMailerLite);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(firstName: string, email: string) {
    if (sending) return;
    setSending(true);
    setError(null);
    try {
      await subscribe({ data: { firstName, email, source } });
      setSent(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Une erreur est survenue");
    } finally {
      setSending(false);
    }
  }

  return { sent, sending, error, submit };
}
