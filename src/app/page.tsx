"use client";

import { useState } from "react";
import { profile } from "@/content/profile";
import { VCardSidebar } from "@/components/VCardSidebar";
import { VCardNavbar } from "@/components/VCardNavbar";
import { Timeline, TimelineItem } from "@/components/Timeline";
import { SkillLogoGrid } from "@/components/SkillLogoGrid";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ContactPanel } from "@/components/ContactPanel";

type Page = "about" | "resume" | "portfolio" | "contact";

function formatDates(start?: string, end?: string) {
  if (!start && !end) return undefined;
  if (start && !end) return `${start} - Present`;
  if (start && end) return `${start} - ${end}`;
  return start ?? end;
}

export default function HomePage() {
  const [activePage, setActivePage] = useState<Page>("about");
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  return (
    <main>
      <VCardSidebar expanded={sidebarExpanded} onToggle={() => setSidebarExpanded((v) => !v)} />

      <div className="main-content">
        <VCardNavbar active={activePage} onChange={setActivePage} />

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
            <h3 className="h3 service-title">What I work on</h3>
            <ul className="service-list">
              <li className="service-item">
                <div className="service-icon-box" aria-hidden="true">
                  <span>▦</span>
                </div>
                <div className="service-content-box">
                  <h4 className="h4 service-item-title">Frontend</h4>
                  <p className="service-item-text">React, Next.js, Redux/RTK, TypeScript. Fast, responsive UI with clean component structure.</p>
                </div>
              </li>
              <li className="service-item">
                <div className="service-icon-box" aria-hidden="true">
                  <span>⚙</span>
                </div>
                <div className="service-content-box">
                  <h4 className="h4 service-item-title">Backend</h4>
                  <p className="service-item-text">Spring Boot, PostgreSQL, MongoDB, REST/GraphQL. Secure APIs, caching, and maintainable services.</p>
                </div>
              </li>
            </ul>
          </section>

          <section className="about-quick">
            <div className="content-card">
              <h3 className="h3">Snapshot</h3>
              <p className="timeline-text">{profile.summary}</p>
            </div>
          </section>
        </article>

        <article className={activePage === "resume" ? "resume active" : "resume"} data-page="resume">
          <header>
            <h2 className="h2 article-title">Resume</h2>
          </header>

          <Timeline title="Experience">
            {profile.experience.map((e) => (
              <TimelineItem
                key={`${e.company}-${e.role}-${e.start}`}
                heading={e.role}
                subheading={e.company}
                dates={formatDates(e.start, e.end)}
              >
                <ul>
                  {e.bullets.map((b) => (
                    <li key={b.slice(0, 30)}>{b}</li>
                  ))}
                </ul>
              </TimelineItem>
            ))}
          </Timeline>

          <Timeline title="Education">
            {profile.education.map((ed) => (
              <TimelineItem
                key={`${ed.school}-${ed.program}`}
                heading={ed.program}
                subheading={ed.school}
                dates={formatDates(ed.start, ed.end)}
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

          <SkillLogoGrid />
        </article>

        <article className={activePage === "portfolio" ? "portfolio active" : "portfolio"} data-page="portfolio">
          <header>
            <h2 className="h2 article-title">Portfolio</h2>
          </header>
          <ProjectGrid />
        </article>

        <article className={activePage === "contact" ? "contact active" : "contact"} data-page="contact">
          <header>
            <h2 className="h2 article-title">Contact</h2>
          </header>
          <ContactPanel />
        </article>
      </div>
    </main>
  );
}