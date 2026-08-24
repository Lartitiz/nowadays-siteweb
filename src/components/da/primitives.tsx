// Décors dessinés en CSS/SVG (aucune image à charger) : mégaphone du manifeste
// et du Mégaphone, astérisques-confettis du hero.

export function Megaphone() {
  return (
    <div className="mega" aria-hidden="true">
      <div className="mega-body" />
      <div className="mega-mouth" />
      <div className="mega-handle" />
      <i className="sound s1" />
      <i className="sound s2" />
      <i className="sound s3" />
    </div>
  );
}

function Asterisque({ couleur }: { couleur: string }) {
  return (
    <g fill={couleur}>
      <rect x="8" y="41" width="84" height="18" rx="9" />
      <rect x="8" y="41" width="84" height="18" rx="9" transform="rotate(60 50 50)" />
      <rect x="8" y="41" width="84" height="18" rx="9" transform="rotate(120 50 50)" />
    </g>
  );
}

const CONFETTIS = [
  { position: "c1", couleur: "#FFE561" },
  { position: "c2", couleur: "#FFA7C6" },
  { position: "c3", couleur: "#FB3D80" },
  { position: "c4", couleur: "#FF7A33" },
] as const;

// Masqués sous 900 px (voir home.css) : purement décoratifs.
export function Confettis() {
  return (
    <>
      {CONFETTIS.map(({ position, couleur }) => (
        <svg key={position} className={`conf ${position}`} viewBox="0 0 100 100" aria-hidden="true">
          <Asterisque couleur={couleur} />
        </svg>
      ))}
    </>
  );
}

// Confettis des heros de pages intérieures : la carte et la photo occupent
// toute la largeur utile, donc les quatre positions du hero d'accueil seraient
// masquées. Ceux-ci se posent dans les marges, et leurs couleurs changent avec
// la couleur du vichy (un confetti jaune sur vichy jaune ne se voit pas).
export function ConfettisBord({ couleurs }: { couleurs: readonly [string, string, string] }) {
  const positions = ["cb1", "cb2", "cb3"] as const;

  return (
    <>
      {positions.map((position, i) => (
        <svg key={position} className={`conf ${position}`} viewBox="0 0 100 100" aria-hidden="true">
          <Asterisque couleur={couleurs[i]} />
        </svg>
      ))}
    </>
  );
}
