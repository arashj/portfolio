import type { Project } from "@/content/types";

const icons = ["bi-person-badge", "bi-list-check", "bi-geo-alt", "bi-basket", "bi-check2-square"];

export function ProjectGrid({ projects, viewOnGithubLabel }: { projects: Project[]; viewOnGithubLabel: string }) {
  return (
    <div className="projects-grid">
      {projects.map((p, i) => (
        <div className="project-card" key={p.slug}>
          <div className="project-icon">
            <i className={`bi ${icons[i % icons.length]}`} />
          </div>
          <h3 className="project-title">{p.title}</h3>
          <p className="project-description">{p.description}</p>
          {p.tags?.length ? (
            <div className="project-tech">
              {p.tags.map((tag) => (
                <span className="tech-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
          <a href={p.links.source ?? p.links.demo ?? "#"} target="_blank" rel="noopener noreferrer" className="project-link">
            {viewOnGithubLabel} <i className="bi bi-arrow-right" />
          </a>
        </div>
      ))}
    </div>
  );
}
