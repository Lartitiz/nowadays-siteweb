import { ArrowRight } from "lucide-react";

const CALENDLY_URL =
  "https://calendly.com/laetitia-mattioli/30-min-de-diagnostic-offert";

type Offer = {
  variant: "binome" | "agency";
  audience: string;
  title: string;
  highlight: string;
  promise: string;
  body: React.ReactNode;
  price: string;
  priceDetail: string;
  cta: string;
  href: string;
};

const OFFERS: Offer[] = [
  {
    variant: "binome",
    audience: "Pour les solopreneur·es",
    title: "Ta binôme",
    highlight: "de com",
    promise: "On fait ensemble.",
    body: (
      <>
        Tu sais que ta com' a besoin de structure, mais tu veux garder la main.
        Pendant 6 mois, je deviens ton bras droit : on construit ta stratégie,
        on crée tes contenus, on met tout en place. Ensemble.
        <br />
        <br />
        <strong>Tu n'es plus seul·e face à ta com'.</strong>
      </>
    ),
    price: "290€ / mois",
    priceDetail: "Pendant 6 mois · Outil inclus",
    cta: "Découvrir l'accompagnement",
    href: "/accompagnement-communication",
  },
  {
    variant: "agency",
    audience: "Pour les structures engagées",
    title: "Ton agency",
    highlight: "de com",
    promise: "On s'en occupe pour vous.",
    body: (
      <>
        Vous n'avez ni le temps, ni l'envie de gérer votre communication. On
        prend en charge votre stratégie, vos contenus, vos canaux. Vous vous
        concentrez sur votre mission ; nous, on vous rend visibles.
        <br />
        <br />
        <strong>Pas une agence corporate. Une agence qui partage vos valeurs.</strong>
      </>
    ),
    price: "À partir de 1 500€",
    priceDetail: "Sur devis · Selon l'ampleur du projet",
    cta: "Découvrir l'Agency",
    href: "/cooperative-asso",
  },
];

function OfferCard({ offer }: { offer: Offer }) {
  const isBinome = offer.variant === "binome";
  const accentVar = isBinome ? "var(--rose-dark)" : "var(--bordeaux)";

  return (
    <article
      className="relative flex flex-col overflow-hidden rounded-[28px] border-2 bg-cream p-10 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(145,1,75,0.08),0_8px_16px_rgba(145,1,75,0.04)] md:p-12"
      style={{ borderColor: "var(--rose-soft)" }}
    >
      {/* Accent bar */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-1"
        style={{
          background: isBinome
            ? "linear-gradient(90deg, var(--rose-dark), var(--rose-mid))"
            : "linear-gradient(90deg, var(--bordeaux), var(--rose-dark))",
        }}
      />

      <span
        className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em]"
        style={{ color: accentVar }}
      >
        {offer.audience}
      </span>

      <h3 className="mt-3 font-serif text-3xl leading-[1.15] text-ink md:text-4xl">
        {offer.title}{" "}
        <span style={{ color: accentVar }}>{offer.highlight}</span>
      </h3>

      <p
        className="mt-2 font-serif text-lg italic md:text-xl"
        style={{ color: accentVar }}
      >
        {offer.promise}
      </p>

      <div className="mt-6 flex-1 font-mono text-[15px] leading-[1.75] text-ink">
        {offer.body}
      </div>

      <div
        className="mt-8 border-t pt-6"
        style={{ borderColor: "var(--rose-soft)" }}
      >
        <p className="font-serif text-3xl text-ink">{offer.price}</p>
        <p className="mt-1 font-mono text-[13px] text-ink/70">
          {offer.priceDetail}
        </p>
      </div>

      <a
        href={offer.href}
        className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 font-mono text-sm font-semibold uppercase tracking-[0.12em] text-cream transition-colors"
        style={{ backgroundColor: accentVar }}
      >
        {offer.cta}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>
    </article>
  );
}

export function OffersSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        {/* Header */}
        <header className="mx-auto mb-16 max-w-3xl text-center">
          <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.25em] text-rose-dark">
            Communication pour projets engagés
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-[1.2] text-ink md:text-5xl">
            Votre com' mérite mieux
            <br />
            que du <em>bricolage.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-mono text-base leading-[1.6] text-ink">
            On a deux façons de vous aider. À vous de choisir celle qui vous
            ressemble.
          </p>
        </header>

        {/* Cards */}
        <div className="relative">
          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
            {OFFERS.map((offer) => (
              <OfferCard key={offer.variant} offer={offer} />
            ))}
          </div>

          {/* Badge "ou" — centré entre les deux cards en desktop */}
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block"
          >
            <span
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 font-mono text-[13px] font-bold uppercase tracking-[0.1em] text-ink shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
              style={{ backgroundColor: "var(--yellow)" }}
            >
              ou
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
