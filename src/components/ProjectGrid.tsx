import { profile } from "@/content/profile";

export function ProjectGrid() {
  return (
    <section className="projects">
      <ul className="project-list">
        {profile.projects.map((p) => (
          <li className="project-item active" key={p.slug}>
            <a href={p.links.source ?? p.links.demo ?? "#"} target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box" aria-hidden="true">
                  <span>↗</span>
                </div>
                <div className="project-img-placeholder" aria-hidden="true" />
              </figure>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-category">{p.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}