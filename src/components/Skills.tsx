import type { SkillLogo } from "@/content/types";
import { SkillLogoGrid } from "@/components/SkillLogoGrid";

export function Skills({ skillLogos, title, subtitle }: { skillLogos: SkillLogo[]; title: string; subtitle: string }) {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-title">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <SkillLogoGrid title={title} skillLogos={skillLogos} />
      </div>
    </section>
  );
}
