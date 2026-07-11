import type { Education as EducationItem } from "@/content/types";

function formatYears(start?: string, end?: string) {
  if (start && end) return `${start} – ${end}`;
  return start ?? end ?? "";
}

export function Education({ items, title, subtitle }: { items: EducationItem[]; title: string; subtitle: string }) {
  return (
    <section id="education">
      <div className="container">
        <div className="section-title">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <div className="edu-grid">
          {items.map((item) => (
            <div className="edu-card" key={item.program}>
              <div className="edu-icon">
                <i className="bi bi-mortarboard" />
              </div>
              <h3 className="edu-degree">{item.program}</h3>
              <div className="edu-school">{item.school}</div>
              <div className="edu-year">{formatYears(item.start, item.end)}</div>
              {item.bullets?.length ? (
                <div className="edu-honor">
                  <i className="bi bi-award" /> {item.bullets[0]}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
