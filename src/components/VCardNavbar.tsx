"use client";

type Page = "about" | "resume" | "portfolio" | "contact";

export function VCardNavbar({ active, onChange }: { active: Page; onChange: (p: Page) => void }) {
  const links: Array<{ id: Page; label: string }> = [
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav className="navbar" aria-label="Primary">
      <ul className="navbar-list">
        {links.map((l) => (
          <li className="navbar-item" key={l.id}>
            <button
              type="button"
              className={active === l.id ? "navbar-link active" : "navbar-link"}
              onClick={() => onChange(l.id)}
            >
              {l.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}