import { Pill } from "@/components/da/Pill";
import { PressLogos } from "@/components/da/PressLogos";
import { Section } from "@/components/da/Section";

export function HomePresse() {
  return (
    <Section className="presse">
      <Pill>On en a parlé</Pill>
      <h2>Vu dans la presse</h2>
      <PressLogos />
    </Section>
  );
}
