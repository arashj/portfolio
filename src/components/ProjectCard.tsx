import type { Project } from "@/content/profile";
import { Badge } from "@/components/Badge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card">
      <div className="cardTop">
        <h3 className="cardTitle">{project.title}</h3>
      </div>
      <p className="cardDesc">{project.description}</p>
      {project.highlights?.length ? (
        <div className="cardMeta" aria-label="Project highlights">
          {project.highlights.map((h) => (
            <Badge key={h} text={h} />
          ))}
        </div>
      ) : null}
      <div className="cardLinks" aria-label="Project links">
        {project.links.source && (
          <a className="pillLink" href={project.links.source} target="_blank" rel="noreferrer">
            Source
          </a>
        )}
        {project.links.demo && (
          <a className="pillLink" href={project.links.demo} target="_blank" rel="noreferrer">
            Demo
          </a>
        )}
        {project.links.caseStudy && (
          <a className="pillLink" href={project.links.caseStudy}>
            Write-up
          </a>
        )}
      </div>
    </article>
  );
}
