import type { Education } from "@/content/profile";

function formatDates(start?: string, end?: string) {
  if (!start && !end) return null;
  if (start && end) return `${start} to ${end}`;
  return start ?? end ?? null;
}

export function EducationItem({ item }: { item: Education }) {
  const dates = formatDates(item.start, item.end);
  return (
    <article className="item">
      <div className="itemTop">
        <div>
          <h3 className="itemTitle">
            {item.school} <span className="itemWhere">{item.program}</span>
          </h3>
        </div>
        {dates ? <div className="itemDates">{dates}</div> : null}
      </div>
      <div className="itemBody">
        <p style={{ margin: 0 }}>{item.details}</p>
        {item.highlights?.length ? (
          <ul>
            {item.highlights.map((h) => (
              <li key={h.slice(0, 32)}>{h}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
