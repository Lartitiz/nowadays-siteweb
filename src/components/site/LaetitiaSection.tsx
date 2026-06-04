import laetitiaPhoto from "@/assets/laetitia-portrait.jpg.asset.json";

export function LaetitiaSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Photo */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[2rem] bg-[var(--rose-light)] aspect-[4/5]">
              <img
                src={laetitiaPhoto.url}
                alt="Laetitia Mattioli, fondatrice de Nowadays"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Texte */}
          <div className="lg:col-span-7 flex flex-col gap-8 md:gap-10 lg:pt-6">
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] text-[var(--ink)]">
              Enchantée, moi c'est{" "}
              <em className="not-italic italic text-[var(--rose-dark)]">Laetitia</em>
            </h2>

            <div className="space-y-5 md:space-y-6 max-w-[58ch] px-2 md:px-4">
              <p className="font-mono text-[14px] md:text-[15px] leading-[1.85] text-[var(--ink)]">
                J'ai créé Nowadays après avoir vu trop de marques éthiques et engagées s'épuiser à vouloir "faire comme les autres" : courir après les algorithmes, sacrifier leurs valeurs pour vendre, ou se taire par peur de passer pour trop commerciales.
              </p>
              <p className="font-mono text-[14px] md:text-[15px] leading-[1.85] text-[var(--ink)]">
                Aujourd'hui, j'accompagne les projets engagés qui veulent plus qu'un simple plan marketing : fédérer une communauté, inspirer des changements concrets et bâtir un impact durable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
