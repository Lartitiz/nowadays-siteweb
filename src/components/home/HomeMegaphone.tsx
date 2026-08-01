import { type FormEvent } from "react";
import { useSubscribe } from "@/lib/useSubscribe";
import { Megaphone } from "./primitives";

export function HomeMegaphone() {
  // Même branchement MailerLite que les autres formulaires du site
  // (groupe « newsletter »).
  const { sent, sending, error, submit } = useSubscribe("newsletter");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    void submit(String(fd.get("firstName") || ""), String(fd.get("email") || ""));
  }

  return (
    <section className="section rose" id="megaphone">
      <div className="wrap newsletter-grid">
        <div className="mini-mega">
          <Megaphone />
        </div>

        <div>
          <span className="eyebrow">Le Mégaphone</span>
          <h2>Des conseils en com' engagée, faits pour circuler.</h2>
          <p className="lead">
            Rejoignez les +2 800 projets engagés qui reçoivent mes conseils. Du concret, sans
            injonction à poster trois fois par jour.
          </p>

          {sent ? (
            <p className="form-feedback">
              C'est noté, merci ! Le prochain Mégaphone arrive dans votre boîte mail.
            </p>
          ) : (
            <form className="form-row" onSubmit={onSubmit}>
              <input name="firstName" aria-label="Prénom" placeholder="Votre prénom" required />
              <input
                type="email"
                name="email"
                aria-label="E-mail"
                placeholder="Votre e-mail"
                required
              />
              <button className="btn btn-primary" type="submit" disabled={sending}>
                {sending ? "Envoi…" : "Recevoir Le Mégaphone"}
              </button>
            </form>
          )}

          {error && <p className="form-feedback error">{error}</p>}

          <p className="rgpd">
            Une fois par mois, désinscription en un clic. Votre e-mail ne sert qu'à ça.
          </p>
        </div>
      </div>
    </section>
  );
}
