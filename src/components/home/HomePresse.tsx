import { PRESSE } from "./constants";

export function HomePresse() {
  return (
    <section className="section presse">
      <div className="wrap">
        <span className="eyebrow">On en a parlé</span>
        <h2>Vu dans la presse</h2>

        <div className="press-names">
          {PRESSE.map((media) => (
            <a
              key={media.nom}
              href={media.href}
              target="_blank"
              rel="noopener"
              aria-label={`Article ${media.nom}`}
            >
              <img
                src={media.src}
                alt={media.nom}
                style={{ height: media.hauteur }}
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
