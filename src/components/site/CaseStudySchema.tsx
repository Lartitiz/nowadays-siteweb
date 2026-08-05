import { useRouterState } from "@tanstack/react-router";

import { getEtudeNeighbours } from "@/lib/etudes-index";
import { absoluteUrl } from "@/lib/site";

// Données structurées des études de cas.
//
// Le blog en avait (Article + BreadcrumbList), les 18 études n'avaient que le
// bloc `Organization` commun à tout le site : Google ne savait pas qu'il
// regardait une réalisation, ni où elle se situait dans l'arborescence.
//
// Rendu depuis `CaseStudy` plutôt que dans le `head` de chaque route : les 18
// fichiers restent intacts. Le JSON-LD est valide n'importe où dans le
// document, `<head>` n'est qu'une préférence.
//
// `CreativeWork` et pas `Article` : une étude de cas n'a pas de date de
// publication, et `Article` sans `datePublished` déclenche un avertissement
// dans les outils de test de Google.
export function CaseStudySchema({
  title,
  description,
  image,
}: {
  title: string;
  description?: string;
  image?: string;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const n = getEtudeNeighbours(pathname);
  if (!n) return null;

  const url = absoluteUrl(n.current.path);

  const work: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    headline: title,
    url,
    creator: { "@type": "Organization", name: "Nowadays Agency", url: absoluteUrl("/") },
    about: { "@type": "Organization", name: n.current.brand },
    inLanguage: "fr-FR",
  };
  if (description) work.description = description;
  if (image) work.image = absoluteUrl(image);

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: absoluteUrl("/") },
      {
        "@type": "ListItem",
        position: 2,
        name: n.breadcrumbLabel,
        item: absoluteUrl(n.listingPath),
      },
      { "@type": "ListItem", position: 3, name: n.current.brand, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(work) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
