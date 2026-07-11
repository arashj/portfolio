"use client";

import { useEffect, useRef, useState } from "react";
import type { Experience as ExperienceItem } from "@/content/types";

const icons = ["bi-code-square", "bi-mortarboard", "bi-diagram-3", "bi-lightning-charge"];

function formatDates(start?: string, end?: string, presentLabel = "Present") {
  if (!start && !end) return "";
  if (start && !end) return `${start} – ${presentLabel}`;
  if (start && end) return `${start} – ${end}`;
  return start ?? end ?? "";
}

function Card({ item, icon, dateLabel }: { item: ExperienceItem; icon: string; dateLabel: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className={visible ? "timeline-item timeline-visible" : "timeline-item"} ref={ref}>
      <div className="timeline-marker">
        <div className="timeline-marker-icon">
          <i className={`bi ${icon}`} />
        </div>
        <span className="timeline-year">{item.start ?? item.end}</span>
      </div>
      <div className="timeline-card">
        <div className="timeline-card-header">
          <span className="timeline-card-date">
            <i className="bi bi-calendar3" /> {dateLabel}
          </span>
          <span className="timeline-card-company">{item.company}</span>
        </div>
        <h3 className="timeline-card-title">{item.role}</h3>
        {item.impact ? (
          <div className="timeline-card-impact">
            <i className="bi bi-trophy" />
            <span>{item.impact}</span>
          </div>
        ) : null}
        <div className="timeline-card-desc">
          {item.bullets.map((b) => (
            <p key={b.slice(0, 24)}>{b}</p>
          ))}
        </div>
        {item.tags?.length ? (
          <div className="timeline-card-tags">
            {item.tags.map((tag) => (
              <span className="timeline-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function Experience({
  items,
  title,
  subtitle,
  presentLabel
}: {
  items: ExperienceItem[];
  title: string;
  subtitle: string;
  presentLabel: string;
}) {
  return (
    <section id="experience" className="light-background">
      <div className="container">
        <div className="section-title">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <div className="timeline-wrapper">
          {items.map((item, i) => (
            <Card
              item={item}
              icon={icons[i % icons.length]}
              dateLabel={formatDates(item.start, item.end, presentLabel)}
              key={`${item.company}-${item.role}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
