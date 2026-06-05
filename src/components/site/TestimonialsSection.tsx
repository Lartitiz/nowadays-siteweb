import type { ReactNode } from "react";
import abigailImg from "@/assets/testimonials/abigail-sia.png.asset.json";
import emmanuelleImg from "@/assets/testimonials/emmanuelle-riboud.png.asset.json";
import laurentImg from "@/assets/testimonials/laurent-okahina.png.asset.json";

type Testimonial = {
  photo: string;
  alt: string;
  name: string;
  role: ReactNode;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    photo: abigailImg.url,
    alt: "Abigail Sia, styliste et art director",
    name: "Abigail Sia",
    role: (
      <>
        Styliste &{" "}
        <a
          href="https://theanimalshadow.com/project/work-w-abigail/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-[var(--rose-dark)] underline-offset-2 hover:text-[var(--rose-dark)] transition-colors"
        >
          Art Director
        </a>
      </>
    ),
    quote:
      "Une vraie expertise et un savoir-faire qui fait la différence pour développer son réseau de clients. Les actions mises en place se sont rapidement traduites par une prise de confiance en moi, et donc de mes tarifs. Le suivi est au top et les conseils pertinents. Ne pas hésiter pour booster son activité.",
  },
  {
    photo: emmanuelleImg.url,
    alt: "Emmanuelle Riboud, cheffe écoresponsable et fondatrice de Ressources",
    name: "Emmanuelle Riboud",
    role: (
      <>
        Cheffe écoresponsable et Fondatrice de{" "}
        <a
          href="https://www.ressources.green/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-[var(--rose-dark)] underline-offset-2 hover:text-[var(--rose-dark)] transition-colors"
        >
          Ressources
        </a>
      </>
    ),
    quote:
      "Laetitia et son équipe ont une grande capacité d'écoute qui leur permet de concevoir des stratégies de marque et de communication pertinentes et très efficientes.",
  },
  {
    photo: laurentImg.url,
    alt: "Laurent, fondateur d'Okahina Wave",
    name: "Laurent",
    role: (
      <>
        Fondateur d'
        <a
          href="https://www.okahinawave.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-[var(--rose-dark)] underline-offset-2 hover:text-[var(--rose-dark)] transition-colors"
        >
          Okahina Wave
        </a>
        , vague de surf artificielle écologique
      </>
    ),
    quote:
      "Lorsque j'ai contacté Nowadays Agency pour gérer mes réseaux sociaux, j'étais au pied du mur. J'ai découvert leurs qualités de rigueur, de suivi, de propositions créatives et pertinentes. Mais surtout un excellent état d'esprit, très positif. À la question : « Est-ce que je les recommanderais à d'autres chefs d'entreprise ? ». Je répondrais : « SANS AUCUN DOUTE ».",
  },
];

const offsets = ["md:translate-y-0", "md:translate-y-16", "md:-translate-y-2"];

export function TestimonialsSection() {
  return (
    <section className="bg-[var(--cream)] py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] text-ink max-w-4xl mx-auto">
            Elles nous font confiance pour leur{" "}
            <em className="italic text-[var(--rose-dark)]">
              communication engagée
            </em>
          </h2>
          <p className="mt-8 font-mono text-[12px] md:text-[13px] uppercase tracking-[0.18em] text-ink">
            Plus de 150 projets accompagnés
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 lg:gap-14 items-start">
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              className={`flex flex-col gap-7 ${offsets[i] ?? ""}`}
            >
              <div className="mx-auto w-full max-w-[240px] border border-[color:color-mix(in_oklab,var(--ink)_20%,transparent)] p-1 bg-white shadow-sm">
                <div className="aspect-[4/5] overflow-hidden bg-[var(--rose-light)]">
                  <img
                    src={t.photo}
                    alt={t.alt}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
              <figcaption className="space-y-5 px-1">
                <div>
                  <h3 className="font-serif text-xl text-ink leading-tight">
                    {t.name}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--rose-dark)]">
                    {t.role}
                  </p>
                </div>
                <blockquote className="font-mono text-[14px] leading-[1.75] text-ink">
                  « {t.quote} »
                </blockquote>
              </figcaption>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

