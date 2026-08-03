import { PRESSE } from "./constants";
import { imageSize } from "@/lib/image-sizes";

// Logos de presse cliquables. La liste fait foi : L'ADN, e-marketing.fr,
// Le Bonbon uniquement (jamais Brut, Capital retiré).
export function PressLogos() {
  return (
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
            {...imageSize(media.src)}
          />
        </a>
      ))}
    </div>
  );
}
