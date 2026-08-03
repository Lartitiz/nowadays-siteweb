import { Link } from "@tanstack/react-router";

// Bloc de fin d'article : la seule passerelle entre le blog et les offres.
//
// Avant, un article ne renvoyait que vers d'autres articles et vers Calendly
// (donc hors du site) : ni le lecteur ni Google n'avaient de chemin du blog
// vers ce que Nowadays vend. Les articles n'ont ni étiquette ni audience en
// base, donc on ne peut pas deviner à qui s'adresse chaque texte : on propose
// les deux portes et on laisse le lecteur choisir.
export function ArticleOffres() {
  return (
    // Carte rose sur fond blanc, et non un bandeau plein : le « À lire aussi »
    // qui suit est déjà un bandeau rose pleine largeur.
    <section className="bg-white">
      <div
        className="mx-auto mb-20 max-w-4xl bg-rose-pale px-6 py-12 md:px-10"
        style={{ borderRadius: "var(--card-radius, 22px)" }}
      >
        <h2 className="font-titre text-3xl leading-[1.1] text-encre md:text-4xl">
          Et si on le faisait <em className="text-framboise">ensemble</em> ?
        </h2>
        <p className="mt-3 text-base leading-relaxed text-gris-chaud">
          Selon qui vous êtes, ça ne commence pas au même endroit.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Link
            to="/accompagnement-communication"
            className="group block bg-white p-5 transition-colors hover:bg-creme"
            style={{ borderRadius: "var(--card-radius, 22px)" }}
          >
            <span className="block font-titre text-xl text-encre">Ta binôme de com'</span>
            <span className="mt-1 block text-sm leading-relaxed text-gris-chaud">
              Solo, créatrice, indépendante
            </span>
            <span className="mt-3 block text-sm text-bordeaux group-hover:underline">
              L'accompagnement 6 mois →
            </span>
          </Link>

          <Link
            to="/cooperative-asso"
            className="group block bg-white p-5 transition-colors hover:bg-creme"
            style={{ borderRadius: "var(--card-radius, 22px)" }}
          >
            <span className="block font-titre text-xl text-encre">Déléguer votre com'</span>
            <span className="mt-1 block text-sm leading-relaxed text-gris-chaud">
              Coopérative, association, PME
            </span>
            <span className="mt-3 block text-sm text-bordeaux group-hover:underline">
              Voir l'offre →
            </span>
          </Link>
        </div>

        <p className="mt-6 text-sm leading-relaxed text-gris-chaud">
          Ou regardez d'abord{" "}
          <Link to="/etudes-de-cas-pro" className="text-bordeaux underline underline-offset-4">
            ce qu'on a fait pour d'autres
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
