import type { ReactNode } from "react";

function Squiggle({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 80 10"
      className="absolute inset-x-0 -bottom-2 block h-1.5 w-full"
      aria-hidden
      preserveAspectRatio="none"
    >
      <path
        d="M2 6 Q 10 1, 18 5 T 38 5 T 58 5 T 78 5"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Underlined({
  children,
  color,
}: {
  children: ReactNode;
  color: string;
}) {
  return (
    <span className="relative inline-block">
      <em className="relative">{children}</em>
      <Squiggle color={color} />
    </span>
  );
}

export function VisibilityBanner() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div
          className="rounded-[28px] px-8 py-14 text-center md:px-16 md:py-20"
          style={{ backgroundColor: "var(--rose-light)" }}
        >
          <p className="font-serif text-2xl leading-[1.55] text-ink md:text-[1.9rem] md:leading-[1.6]">
            Chez Nowadays, nous vous accompagnons à{" "}
            <span
              className="whitespace-nowrap rounded-full px-3 py-0.5 italic text-cream"
              style={{ backgroundColor: "var(--bordeaux)" }}
            >
              vous rendre visible
            </span>{" "}
            grâce à une communication{" "}
            <Underlined color="var(--orange)">joyeuse</Underlined>,{" "}
            <Underlined color="var(--rose-dark)">éthique</Underlined> et{" "}
            <Underlined color="var(--bordeaux)">efficace</Underlined>.
          </p>
        </div>
      </div>
    </section>
  );
}
