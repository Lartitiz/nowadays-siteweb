const CHIFFRES = [
  { valeur: "+10 ans", libelle: "d'expérience en communication digitale" },
  { valeur: "+150", libelle: "projets engagés accompagnés" },
] as const;

export function HomePreuve() {
  return (
    <section className="stats bande">
      <div className="wrap stats-grid two">
        {CHIFFRES.map((chiffre) => (
          <div className="stat" key={chiffre.valeur}>
            <strong>{chiffre.valeur}</strong>
            <span>{chiffre.libelle}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
