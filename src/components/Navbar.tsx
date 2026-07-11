"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/content/i18n";

const sectionIds = ["hero", "experience", "skills", "projects", "education", "contact"];

export function Navbar({
  locale,
  onToggleLocale,
  labels,
  resumeUrl
}: {
  locale: Locale;
  onToggleLocale: () => void;
  labels: { home: string; experience: string; skills: string; projects: string; education: string; contact: string; resume: string };
  resumeUrl: string;
}) {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      let current = "hero";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      }
      setActive(current);
    }
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items: Array<{ id: string; label: string }> = [
    { id: "hero", label: labels.home },
    { id: "experience", label: labels.experience },
    { id: "skills", label: labels.skills },
    { id: "projects", label: labels.projects },
    { id: "education", label: labels.education },
    { id: "contact", label: labels.contact }
  ];

  return (
    <header className="navbar-top">
      <div className="nav-container">
        <a href="#hero" className="nav-logo">
          <span className="nav-logo-img">AJ</span>
          <span className="nav-logo-text">{locale === "fr" ? "Développeur Full-Stack" : "Full-Stack Developer"}</span>
        </a>

        <ul className={open ? "nav-links open" : "nav-links"}>
          {items.map((it) => (
            <li key={it.id}>
              <a href={`#${it.id}`} className={active === it.id ? "active" : ""} onClick={() => setOpen(false)}>
                {it.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a href={resumeUrl} className="nav-resume-btn">
            <i className="bi bi-download" />
            <span>{labels.resume}</span>
          </a>
          <button className="lang-toggle-btn" onClick={onToggleLocale} title="Switch language" type="button">
            {locale === "fr" ? "EN" : "FR"}
          </button>
          <button className="nav-toggle" onClick={() => setOpen((v) => !v)} type="button" aria-label="Menu">
            &#9776;
          </button>
        </div>
      </div>
    </header>
  );
}
