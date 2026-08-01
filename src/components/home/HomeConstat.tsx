const NOTES = [
  {
    position: "one",
    titre: "Dans la vraie vie",
    texte: "Vous postez quand vous pouvez, entre deux urgences.",
  },
  {
    position: "two",
    titre: "Dans l'équipe",
    texte: "Personne n'a vraiment le temps, ni toujours les compétences, de s'en occuper.",
  },
  {
    position: "three",
    titre: "Et le plan de com'",
    texte: "Il finit parfois dans un Google Doc jamais rouvert.",
  },
] as const;

export function HomeConstat() {
  return (
    <section className="section">
      <div className="wrap pain-grid">
        <div>
          <span className="eyebrow">Le constat</span>
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
            <div className={`pain-note ${note.position}`} key={note.position}>
              <b>{note.titre}</b>
              {note.texte}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
