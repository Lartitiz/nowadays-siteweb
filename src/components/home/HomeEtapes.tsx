import { Pill } from "@/components/da/Pill";
const ETAPES = [
  {
    numero: "1",
    titre: "On se parle.",
    texte:
      "Un appel découverte de 30 minutes, gratuites. On regarde où vous en êtes, et je vous dis franchement si je peux aider.",
  },
  {
    numero: "2",
    titre: "On construit votre plan.",
    texte:
      "Une proposition sur mesure : votre budget, votre temps, vos objectifs. Vous ajustez avant qu'on lance quoi que ce soit.",
  },
  {
    numero: "3",
    titre: "On avance.",
    texte: "On produit, vous validez, on met en ligne. À la fin, c'est fait, pas « à faire ».",
  },
] as const;

export function HomeEtapes() {
  return (
    <section className="section steps">
      <div className="wrap">
        <Pill>Comment ça marche</Pill>
        <h2>3 étapes. Zéro prise de tête.</h2>
        <div className="step-grid">
          {ETAPES.map((etape) => (
            <article className="step" key={etape.numero}>
              <div className="step-num">{etape.numero}</div>
              <h3 className="!font-bold">{etape.titre}</h3>
              <p>{etape.texte}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
