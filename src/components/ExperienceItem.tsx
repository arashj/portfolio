import type { Experience } from "@/content/profile";

function formatDates(start?: string, end?: string) {
  if (!start && !end) return null;
  if (start && !end) return `${start} to Present`;
  if (!start && end) return end;
  return `${start} to ${end}`;
}

export function ExperienceItem({ item }: { item: Experience }) {
  const dates = formatDates(item.start, item.end);
  return (
    <article className="item">
      <div className="itemTop">
        <div>
          <h3 className="itemTitle">
            {item.role} <span className="itemWhere">@ {item.company}</span>
          </h3>
        </div>
        {dates ? <div className="itemDates">{dates}</div> : null}
      </div>
      <div className="itemBody">
        <p style={{ margin: 0 }}>{item.summary}</p>
        {item.bullets?.length ? (
          <ul>
            {item.bullets.map((b) => (
              <li key={b.slice(0, 32)}>{b}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
