import type { SkillLogo } from "@/content/types";

export function SkillLogoGrid({ title, skillLogos }: { title: string; skillLogos: SkillLogo[] }) {
  return (
    <section className="skill">
      <h3 className="h3 skills-title">{title}</h3>

      <ul className="skills-list content-card" aria-label={title}>
        {skillLogos.map((s) => (
          <li className="skills-item" key={s.name}>
            <div className="skill-logo">
              <img src={s.icon} alt={s.name} loading="lazy" />
            </div>
            <p className="skill-name">{s.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}