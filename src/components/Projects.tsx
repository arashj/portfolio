import type { Project } from "@/content/types";
import { ProjectGrid } from "@/components/ProjectGrid";

export function Projects({
  projects,
  title,
  subtitle,
  viewOnGithubLabel
}: {
  projects: Project[];
  title: string;
  subtitle: string;
  viewOnGithubLabel: string;
}) {
  return (
    <section id="projects" className="light-background">
      <div className="container">
        <div className="section-title">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <ProjectGrid projects={projects} viewOnGithubLabel={viewOnGithubLabel} />
      </div>
    </section>
  );
}
