import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { CALENDLY_URL } from "@/lib/links";

export function StickyCallCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const bottomDistance =
        document.documentElement.scrollHeight - (window.scrollY + window.innerHeight);
      // visible après ~1 écran scrollé, masqué quand on approche du footer
      setVisible(y > 700 && bottomDistance > 500);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 transition-all duration-300 md:bottom-6 md:right-6 md:left-auto md:justify-end md:px-0 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-3 rounded-full bg-framboise py-3 pl-6 pr-3 text-xs uppercase tracking-[0.18em] text-white shadow-[0_12px_32px_rgba(145,1,75,0.25)] transition-colors hover:bg-bordeaux"
      >
        Réserver mon appel
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink transition-transform group-hover:translate-x-1">
          <ArrowRight className="h-4 w-4" />
        </span>
      </a>
    </div>
  );
}
