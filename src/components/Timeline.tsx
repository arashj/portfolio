import { ReactNode } from "react";

export function Timeline({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box" aria-hidden="true">
          <span>•</span>
        </div>
        <h3 className="h3">{title}</h3>
      </div>
      <ol className="timeline-list">{children}</ol>
    </section>
  );
}

export function TimelineItem({
  heading,
  subheading,
  dates,
  children
}: {
  heading: string;
  subheading?: string;
  dates?: string;
  children?: ReactNode;
}) {
  return (
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">{heading}</h4>
      {subheading ? <p className="timeline-subtitle">{subheading}</p> : null}
      {dates ? <span>{dates}</span> : null}
      {children ? <div className="timeline-text">{children}</div> : null}
    </li>
  );
}