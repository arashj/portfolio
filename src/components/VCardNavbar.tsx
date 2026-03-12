"use client";

import type { Locale } from "@/content/i18n";

type Page = "about" | "resume" | "portfolio" | "contact";

export function VCardNavbar({
  active,
  onChange,
  locale,
  onToggleLocale,
  labels
}: {
  active: Page;
  onChange: (p: Page) => void;
  locale: Locale;
  onToggleLocale: () => void;
  labels: { about: string; resume: string; portfolio: string; contact: string };
}) {
  const links: Array<{ id: Page; label: string }> = [
    { id: "about", label: labels.about },
    { id: "resume", label: labels.resume },
    { id: "portfolio", label: labels.portfolio },
    { id: "contact", label: labels.contact }
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
              aria-current={active === l.id ? "page" : undefined}
            >
              {l.label}
            </button>
          </li>
        ))}

        <li className="navbar-item" style={{ marginLeft: "auto" }}>
          <button
            type="button"
            className="navbar-link"
            onClick={onToggleLocale}
            aria-label={locale === "fr" ? "Switch to English" : "Passer en francais"}
            title={locale === "fr" ? "English" : "Francais"}
          >
            {locale === "fr" ? "EN" : "FR"}
          </button>
        </li>
      </ul>
    </nav>
  );
}