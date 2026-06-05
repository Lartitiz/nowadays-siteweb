import type { ReactNode } from "react";
import abigailImg from "@/assets/testimonials/abigail-sia.png";
import emmanuelleImg from "@/assets/testimonials/emmanuelle-riboud.png";
import laurentImg from "@/assets/testimonials/laurent-okahina.png";

type Testimonial = {
  photo: string;
  alt: string;
  name: string;
  role: ReactNode;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    photo: abigailImg,
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
    photo: emmanuelleImg,
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
    photo: laurentImg,
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

export function TestimonialsSection() {
  return (
    <section className="bg-[var(--cream)] py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] text-ink">
            Elles nous font confiance pour leur{" "}
            <em className="italic text-[var(--rose-dark)]">
              communication engagée
            </em>
          </h2>
          <p className="mt-6 font-mono text-[14px] md:text-[15px] text-ink">
            <em className="italic">Plus de 150 projets accompagnés.</em>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col">
              <div className="aspect-square w-full overflow-hidden bg-[var(--rose-soft)]">
                <img
                  src={t.photo}
                  alt={t.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="mt-6">
                <p className="font-mono text-[14px] leading-[1.6] text-ink">
                  <strong className="font-mono font-normal text-ink">
                    {t.name}
                  </strong>{" "}
                  — <span className="italic">{t.role}</span>
                </p>
                <blockquote className="mt-4 font-mono text-[14px] md:text-[15px] leading-[1.85] text-ink italic">
                  « {t.quote} »
                </blockquote>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
