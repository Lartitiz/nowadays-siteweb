import { Pill } from "@/components/da/Pill";
import { PostIt } from "@/components/da/PostIt";
import { Section } from "@/components/da/Section";

const NOTES = [
  {
    position: "une",
    couleur: "rose-doux",
    titre: "Dans la vraie vie",
    texte: "Vous postez quand vous pouvez, entre deux urgences.",
  },
  {
    position: "deux",
    couleur: "jaune",
    titre: "Dans l'équipe",
    texte: "Personne n'a vraiment le temps, ni toujours les compétences, de s'en occuper.",
  },
  {
    position: "trois",
    couleur: "rose",
    titre: "Et le plan de com'",
    texte: "Il finit parfois dans un Google Doc jamais rouvert.",
  },
] as const;

export function HomeConstat() {
  return (
    <Section wrapClassName="pain-grid">
      <div>
        <Pill>Le constat</Pill>
        <h2>
          Fatiguée du marketing agressif et des injonctions ?
          <br />
          <em>Nous aussi.</em>
        </h2>
        <p className="lead">
          Vous portez un projet qui a du sens. Que vous soyez créateur·ice, freelance ou à la tête
          d'une structure engagée, vous y mettez tout : de l'attention, de l'éthique, du soin.
        </p>
        <p>Mais côté communication, c'est une autre histoire…</p>
      </div>

      <div className="pain-panels">
        {NOTES.map((note) => (
          <PostIt
            key={note.position}
            titre={note.titre}
            couleur={note.couleur}
            className={note.position}
          >
            {note.texte}
          </PostIt>
        ))}
      </div>
    </Section>
  );
}
