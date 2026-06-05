import { Link } from "@tanstack/react-router";
import { type FormEvent } from "react";

export function Footer() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <footer className="w-full bg-cream">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-12">
        <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] text-ink">
          Votre agence de communication pop & <em>engagée</em>
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {/* Colonne 1 : liens + adresse */}
          <div className="space-y-4">
            <ul className="space-y-4 font-mono text-sm text-ink">
              <li>
                <a href="#manifesto" className="underline underline-offset-4 hover:text-rose-dark">
                  Notre démarche éthique
                </a>
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
                <a href="#" className="underline underline-offset-4 hover:text-rose-dark">
                  Le blog
                </a>
              </li>
              <li>
                <a href="#" className="underline underline-offset-4 hover:text-rose-dark">
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
                <a href="#" className="underline underline-offset-4 hover:text-rose-dark">
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
                  type="email"
                  required
                  className="mt-2 block w-full rounded-full bg-rose-light px-5 py-3 font-mono text-sm text-ink placeholder:text-ink/40 outline-none focus:ring-2 focus:ring-rose-dark"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-rose-mid px-8 py-4 font-mono text-sm text-ink transition-colors hover:bg-rose-dark hover:text-cream"
              >
                Recevoir les conseils secrets
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-rose-soft pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-1">
            <span className="font-serif text-2xl text-ink">now</span>
            <span className="font-serif text-2xl text-ink">a</span>
            <span className="font-serif text-2xl" style={{ color: "var(--orange)" }}>
              days
            </span>
          </div>
          <p className="font-mono text-xs text-ink/60">
            © {new Date().getFullYear()} Nowadays Agency
          </p>
        </div>
      </div>
    </footer>
  );
}
