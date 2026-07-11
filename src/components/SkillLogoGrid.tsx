import type { SkillLogo } from "@/content/types";

export function SkillLogoGrid({ title, skillLogos }: { title: string; skillLogos: SkillLogo[] }) {
  return (
    <ul className="skills-grid" aria-label={title}>
      {skillLogos.map((s) => (
        <li className="skill-logo-card" key={s.name}>
          <div className="skill-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.icon} alt={s.name} loading="lazy" />
          </div>
          <p className="skill-name">{s.name}</p>
        </li>
      ))}
    </ul>
  );
}
