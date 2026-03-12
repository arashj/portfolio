import { profile } from "@/content/profile";

export function SkillLogoGrid() {
  return (
    <section className="skill">
      <h3 className="h3 skills-title">Skills</h3>

      <ul className="skills-list content-card" aria-label="Skills">
        {profile.skillLogos.map((s) => (
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