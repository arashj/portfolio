import type { Project } from "@/content/types";

function ExternalArrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M14 5h5v5h-2V8.41l-8.29 8.3-1.42-1.42 8.3-8.29H14V5ZM5 7a2 2 0 0 1 2-2h5v2H7v12h12v-5h2v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7Z"
      />
    </svg>
  );
}

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <section className="projects">
      <ul className="project-list">
        {projects.map((p) => (
          <li className="project-item active" key={p.slug}>
            <a href={p.links.source ?? p.links.demo ?? "#"} target="_blank" rel="noreferrer">
              <figure className="project-img">
                <div className="project-item-icon-box" aria-hidden="true">
                  <ExternalArrow />
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