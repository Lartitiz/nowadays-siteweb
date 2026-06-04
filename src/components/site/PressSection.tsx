type PressItem = {
  outlet: React.ReactNode;
  title: string;
  href: string;
};

const items: PressItem[] = [
  {
    outlet: (
      <span
        className="text-4xl md:text-5xl text-ink"
        style={{ fontFamily: '"Libre Baskerville", Georgia, serif', fontStyle: "italic" }}
      >
        le Bonbon
      </span>
    ),
    title: "Le marché écolo Nowadays Market s'installe au Jardin 21",
    href: "#",
  },
  {
    outlet: (
      <span className="font-mono text-2xl md:text-3xl text-ink lowercase tracking-tight">
        <span style={{ color: "var(--orange)" }}>e</span>marketing
        <span style={{ color: "var(--orange)" }}>.fr</span>
      </span>
    ),
    title: "Interview : Laetitia Mattioli, Fondatrice de Nowadays Agency",
    href: "#",
  },
  {
    outlet: (
      <span
        className="text-3xl md:text-4xl tracking-widest"
        style={{ fontFamily: '"Libre Baskerville", Georgia, serif', color: "#1a2d80" }}
      >
        L'ADN
      </span>
    ),
    title: "Comment réussir un programme d'ambassadeurs de marque ?",
    href: "#",
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
              className="group flex flex-col items-center text-center"
            >
              <div className="flex h-24 items-center justify-center">{item.outlet}</div>
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
