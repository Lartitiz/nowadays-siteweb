import lebonbonLogo from "@/assets/press/lebonbon.png.asset.json";
import emarketingLogo from "@/assets/press/emarketing.png.asset.json";
import ladnLogo from "@/assets/press/ladn.png.asset.json";

type PressItem = {
  logo: string;
  alt: string;
  title: string;
  href: string;
};

const items: PressItem[] = [
  {
    logo: lebonbonLogo.url,
    alt: "Le Bonbon",
    title: "Le marché écolo Nowadays Market s'installe au Jardin 21",
    href: "https://www.lebonbon.fr/paris/loisirs/marche-ecolo-nowadays-market-jardin-21/",
  },
  {
    logo: emarketingLogo.url,
    alt: "e-marketing.fr",
    title: "Interview : Laetitia Mattioli, Fondatrice de Nowadays Agency",
    href: "https://www.e-marketing.fr/Thematique/academie-1078/webreportage-10162/Laetitia-Mattioli-Fondatrice-nowadays-Agency-330712.htm",
  },
  {
    logo: ladnLogo.url,
    alt: "L'ADN",
    title: "Comment réussir un programme d'ambassadeurs de marque ?",
    href: "https://www.ladn.eu/adn-business/experts-metiers/marketing/marketing-strategique/future-of-influence/comment-reussir-programme-dambassadeurs-marque/",
  },
];

export function PressSection() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center font-serif text-4xl md:text-6xl leading-[1.05] text-ink">
          Vu dans la{" "}
          <span className="relative inline-block">
            <em>presse</em>
            <span
              className="absolute left-0 right-0 -bottom-1 h-[3px]"
              style={{ backgroundColor: "var(--rose-dark)" }}
              aria-hidden="true"
            />
          </span>
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {items.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center"
            >
              <div className="flex h-24 items-center justify-center">
                <img
                  src={item.logo}
                  alt={item.alt}
                  className="max-h-20 w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <p className="mt-6 max-w-[28ch] font-mono text-sm text-ink group-hover:text-rose-dark transition-colors">
                {item.title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
