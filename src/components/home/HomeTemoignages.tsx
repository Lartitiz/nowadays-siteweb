import { Pill } from "@/components/da/Pill";
import { imageSize } from "@/lib/image-sizes";
const TEMOIGNAGES = [
  {
    photo: "/images/home/temoin-abigail.jpg",
    citation:
      "« Une vraie expertise et un savoir-faire qui fait la différence pour développer son réseau de clients. Les actions mises en place se sont rapidement traduites par une prise de confiance en moi, et donc de mes tarifs. Le suivi est au top et les conseils pertinents. »",
    nom: "Abigail Sia",
    role: "Styliste & Art Director",
  },
  {
    photo: "/images/home/temoin-emmanuelle.jpg",
    citation:
      "« Laetitia et son équipe ont une grande capacité d'écoute qui leur permet de concevoir des stratégies de marque et de communication pertinentes et très efficientes. »",
    nom: "Emmanuelle Riboud",
    role: "Cheffe écoresponsable, fondatrice de Ressources",
  },
  {
    photo: "/images/home/temoin-laurent.jpg",
    citation:
      "« J'ai découvert leurs qualités de rigueur, de suivi, de propositions créatives et pertinentes. Mais surtout un excellent état d'esprit, très positif. Est-ce que je les recommanderais ? SANS AUCUN DOUTE. »",
    nom: "Laurent Hequily",
    role: "Fondateur d'Okahina Wave",
  },
] as const;

export function HomeTemoignages() {
  return (
    <section className="testimonials rose">
      <div className="wrap">
        <h2 className="text-center">Elles en parlent mieux que moi</h2>

        <div className="test-grid">
          {TEMOIGNAGES.map((temoignage) => (
            <article className="testimonial" key={temoignage.nom}>
              <img
                className="avatar"
                src={temoignage.photo}
                alt={temoignage.nom}
                loading="lazy"
                {...imageSize(temoignage.photo)}
              />
              <blockquote>{temoignage.citation}</blockquote>
              <cite>
                {temoignage.nom}
                <span>{temoignage.role}</span>
              </cite>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
