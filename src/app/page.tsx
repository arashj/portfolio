"use client";

import { useEffect, useMemo, useState } from "react";
import { getProfile } from "@/content/profile";
import { uiText, type Locale } from "@/content/i18n";
import { VCardSidebar } from "@/components/VCardSidebar";
import { VCardNavbar } from "@/components/VCardNavbar";
import { Timeline, TimelineItem } from "@/components/Timeline";
import { SkillLogoGrid } from "@/components/SkillLogoGrid";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ContactPanel } from "@/components/ContactPanel";

type Page = "about" | "resume" | "portfolio" | "contact";

function formatDates(start?: string, end?: string, presentLabel = "Present") {
  if (!start && !end) return undefined;
  if (start && !end) return `${start} - ${presentLabel}`;
  if (start && end) return `${start} - ${end}`;
  return start ?? end;
}

function readStoredLocale(): Locale | null {
  try {
    const raw = localStorage.getItem("locale");
    if (raw === "fr" || raw === "en") return raw;
    return null;
  } catch {
    return null;
  }
}

function writeStoredLocale(locale: Locale) {
  try {
    localStorage.setItem("locale", locale);
  } catch {
    // ignore
  }
}

function SquareIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M5 5h6v6H5V5Zm8 0h6v6h-6V5ZM5 13h6v6H5v-6Zm8 0h6v6h-6v-6Z" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96a7.1 7.1 0 0 0-1.63-.94l-.36-2.54A.5.5 0 0 0 13.9 1h-3.8a.5.5 0 0 0-.49.41l-.36 2.54c-.58.23-1.12.54-1.63.94l-2.39-.96a.5.5 0 0 0-.6.22L2.71 7.47a.5.5 0 0 0 .12.64l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58a.5.5 0 0 0-.12.64l1.92 3.32c.13.23.4.32.64.22l2.39-.96c.5.4 1.05.71 1.63.94l.36 2.54c.04.24.25.41.49.41h3.8c.24 0 .45-.17.49-.41l.36-2.54c.58-.23 1.12-.54 1.63-.94l2.39.96c.24.1.51.01.64-.22l1.92-3.32a.5.5 0 0 0-.12-.64l-2.03-1.58ZM12 15.5A3.5 3.5 0 1 1 12 8a3.5 3.5 0 0 1 0 7.5Z"
      />
    </svg>
  );
}

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>("fr");
  const [activePage, setActivePage] = useState<Page>("about");
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  useEffect(() => {
    const stored = readStoredLocale();
    if (stored) setLocale(stored);
  }, []);

  useEffect(() => {
    writeStoredLocale(locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const profile = useMemo(() => getProfile(locale), [locale]);
  const t = uiText[locale];

  const serviceDescriptions = useMemo(() => {
    if (locale === "fr") {
      return {
        frontend: "React, Next.js, Redux/RTK, TypeScript. UI rapide et responsive avec une structure de composants claire.",
        backend: "Spring Boot, PostgreSQL, MongoDB, REST/GraphQL. API securisees, caching, et services faciles a maintenir."
      };
    }

    return {
      frontend: "React, Next.js, Redux/RTK, TypeScript. Fast, responsive UI with clean component structure.",
      backend: "Spring Boot, PostgreSQL, MongoDB, REST/GraphQL. Secure APIs, caching, and maintainable services."
    };
  }, [locale]);

  return (
    <main>
      <VCardSidebar
        expanded={sidebarExpanded}
        onToggle={() => setSidebarExpanded((v) => !v)}
        profile={profile}
        labels={t.sidebar}
      />

      <div className="main-content">
        <VCardNavbar
          active={activePage}
          onChange={setActivePage}
          locale={locale}
          onToggleLocale={() => setLocale((l) => (l === "fr" ? "en" : "fr"))}
          labels={t.nav}
        />

        <article className={activePage === "about" ? "about active" : "about"} data-page="about">
          <header>
            <h2 className="h2 article-title">{profile.about.title}</h2>
          </header>

          <section className="about-text">
            {profile.about.paragraphs.map((p) => (
              <p key={p.slice(0, 30)}>{p}</p>
            ))}
          </section>

          <section className="service">
            <h3 className="h3 service-title">{t.about.whatIWorkOn}</h3>
            <ul className="service-list">
              <li className="service-item">
                <div className="service-icon-box" aria-hidden="true">
                  <SquareIcon />
                </div>
                <div className="service-content-box">
                  <h4 className="h4 service-item-title">{t.about.frontend}</h4>
                  <p className="service-item-text">{serviceDescriptions.frontend}</p>
                </div>
              </li>
              <li className="service-item">
                <div className="service-icon-box" aria-hidden="true">
                  <GearIcon />
                </div>
                <div className="service-content-box">
                  <h4 className="h4 service-item-title">{t.about.backend}</h4>
                  <p className="service-item-text">{serviceDescriptions.backend}</p>
                </div>
              </li>
            </ul>
          </section>

          <section className="about-quick">
            <div className="content-card">
              <h3 className="h3">{t.about.snapshot}</h3>
              <p className="timeline-text">{profile.summary}</p>
            </div>
          </section>
        </article>

        <article className={activePage === "resume" ? "resume active" : "resume"} data-page="resume">
          <header>
            <h2 className="h2 article-title">{t.nav.resume}</h2>
          </header>

          <Timeline title={t.resume.experience}>
            {profile.experience.map((e) => (
              <TimelineItem
                key={`${e.company}-${e.role}-${e.start}`}
                heading={e.role}
                subheading={e.company}
                dates={formatDates(e.start, e.end, locale === "fr" ? "Present" : "Present")}
              >
                <ul>
                  {e.bullets.map((b) => (
                    <li key={b.slice(0, 30)}>{b}</li>
                  ))}
                </ul>
              </TimelineItem>
            ))}
          </Timeline>

          <Timeline title={t.resume.education}>
            {profile.education.map((ed) => (
              <TimelineItem
                key={`${ed.school}-${ed.program}`}
                heading={ed.program}
                subheading={ed.school}
                dates={formatDates(ed.start, ed.end, locale === "fr" ? "Present" : "Present")}
              >
                {ed.bullets?.length ? (
                  <ul>
                    {ed.bullets.map((b) => (
                      <li key={b.slice(0, 30)}>{b}</li>
                    ))}
                  </ul>
                ) : null}
              </TimelineItem>
            ))}
          </Timeline>

          <SkillLogoGrid title={t.resume.skills} skillLogos={profile.skillLogos} />
        </article>

        <article className={activePage === "portfolio" ? "portfolio active" : "portfolio"} data-page="portfolio">
          <header>
            <h2 className="h2 article-title">{t.nav.portfolio}</h2>
          </header>
          <ProjectGrid projects={profile.projects} />
        </article>

        <article className={activePage === "contact" ? "contact active" : "contact"} data-page="contact">
          <header>
            <h2 className="h2 article-title">{t.contact.title}</h2>
          </header>
          <ContactPanel profile={profile} text={t.contact} />
        </article>
      </div>
    </main>
  );
}