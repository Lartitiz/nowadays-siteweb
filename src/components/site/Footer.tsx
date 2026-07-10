import { Link } from "@tanstack/react-router";
import { type FormEvent } from "react";
import { useSubscribe } from "@/lib/useSubscribe";
import nowadaysLogoV2 from "@/assets/nowadays-logo-v2.webp.asset.json";

export function Footer() {
  const { sent, sending, error, submit } = useSubscribe("newsletter");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    void submit(
      String(fd.get("firstName") || ""),
      String(fd.get("email") || ""),
    );
  }

  return (
    <footer className="w-full bg-cream">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-12">
        <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] text-ink">
          Votre agence de communication pop & <em>engagée</em>
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {/* Colonne 1 : liens + adresse */}
          <div className="space-y-4">
            <ul className="space-y-4 font-mono text-sm text-ink">
              <li>
                <Link
                  to="/demarche-ethique"
                  className="underline underline-offset-4 hover:text-rose-dark"
                >
                  Notre démarche éthique
                </Link>
              </li>
              <li>
                <Link
                  to="/accompagnement-communication"
                  className="underline underline-offset-4 hover:text-rose-dark"
                >
                  Nos études de cas (solopreneures)
                </Link>
              </li>
              <li>
                <Link
                  to="/cooperative-asso"
                  className="underline underline-offset-4 hover:text-rose-dark"
                >
                  Nos études de cas (PME & Asso)
                </Link>
              </li>
            </ul>

            <div className="pt-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink">
                Nous rendre visite
              </p>
              <p className="mt-4 font-mono text-sm text-ink leading-relaxed">
                La Prochaine Aire - Maison éclusière,
                <br />
                Les Petits Pâtis, 89300 Saint-Aubin-sur-Yonne
              </p>
            </div>
          </div>

          {/* Colonne 2 : ressources */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink">
              Ressources gratuites
            </p>
            <ul className="mt-6 space-y-4 font-mono text-sm text-ink list-disc pl-5 marker:text-rose-dark">
              <li>
                <Link to="/blog" className="underline underline-offset-4 hover:text-rose-dark">
                  Le blog
                </Link>
              </li>
              <li>
                <a
                  href="https://nowadays-assistant.fr"
                  className="underline underline-offset-4 hover:text-rose-dark"
                >
                  Outil Calendrier éditorial
                </a>
              </li>
              <li>
                <Link
                  to="/formation-gratuite-instagram"
                  className="underline underline-offset-4 hover:text-rose-dark"
                >
                  Formation gratuite Instagram
                </Link>
              </li>
              <li>
                <Link
                  to="/guide-storytelling"
                  className="underline underline-offset-4 hover:text-rose-dark"
                >
                  Guide storytelling
                </Link>
              </li>
              <li>
                <a
                  href="https://nowadays-assistant.fr"
                  className="underline underline-offset-4 hover:text-rose-dark"
                >
                  Template Plan de com'
                </a>
              </li>
            </ul>

          </div>

          {/* Colonne 3 : newsletter */}
          <div>
            <p className="font-mono text-sm text-ink leading-relaxed">
              Rejoins les +1 200 projets éthiques qui reçoivent chaque semaine mes conseils
              en com' engagée
            </p>

            {sent ? (
              <p className="mt-6 font-serif text-xl text-ink leading-snug">
                Merci — tu es bien inscrit·e. Pense à vérifier tes spams ♡
              </p>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 space-y-5">
                <div>
                  <label
                    htmlFor="nl-prenom"
                    className="font-mono text-sm text-ink"
                  >
                    Ton doux prénom{" "}
                    <span className="text-ink/60">(obligatoire)</span>
                  </label>
                  <input
                    id="nl-prenom"
                    name="firstName"
                    type="text"
                    required
                    className="mt-2 block w-full rounded-full bg-rose-light px-5 py-3 font-mono text-sm text-ink placeholder:text-ink/40 outline-none focus:ring-2 focus:ring-rose-dark"
                  />
                </div>

                <div>
                  <label htmlFor="nl-email" className="font-mono text-sm text-ink">
                    Ton e-mail <span className="text-ink/60">(obligatoire)</span>
                  </label>
                  <input
                    id="nl-email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 block w-full rounded-full bg-rose-light px-5 py-3 font-mono text-sm text-ink placeholder:text-ink/40 outline-none focus:ring-2 focus:ring-rose-dark"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center justify-center rounded-full bg-rose-mid px-8 py-4 font-mono text-sm text-ink transition-colors hover:bg-rose-dark hover:text-cream disabled:opacity-60"
                >
                  {sending ? "Envoi…" : "Recevoir les conseils secrets"}
                </button>
                {error && (
                  <p className="font-mono text-xs text-rose-dark">{error}</p>
                )}
              </form>
            )}
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-rose-light pt-8 md:flex-row md:items-center md:justify-between">
          <Link to="/" className="flex items-center" aria-label="Nowadays Agency">
            <img
              src={nowadaysLogoV2.url}
              alt="Nowadays Agency"
              className="h-7 w-auto"
            />
          </Link>
          <p className="font-mono text-xs text-ink/60">
            © {new Date().getFullYear()} Nowadays Agency ·{" "}
            <Link
              to="/mentions-legales"
              className="underline underline-offset-4 hover:text-rose-dark"
            >
              Mentions légales
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
