"use client";

import { useMemo } from "react";
import type { Profile } from "@/content/types";

type Props = {
  expanded: boolean;
  onToggle: () => void;
  profile: Profile;
  labels: {
    showContacts: string;
    hideContacts: string;
    email: string;
    location: string;
    current: string;
    resume: string;
    downloadPdf: string;
  };
};

function prettyDates(start?: string, end?: string) {
  if (!start && !end) return null;
  if (start && !end) return `${start} - Present`;
  if (start && end) return `${start} - ${end}`;
  return start ?? end ?? null;
}

function DotIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" focusable="false">
      <circle cx="6" cy="6" r="3" fill="currentColor" />
    </svg>
  );
}

export function VCardSidebar({ expanded, onToggle, profile, labels }: Props) {
  const contacts = useMemo(() => {
    const items: Array<{ label: string; value: string; href?: string }> = [];

    if (profile.contact.email) {
      items.push({ label: labels.email, value: profile.contact.email, href: `mailto:${profile.contact.email}` });
    }

    items.push({ label: labels.location, value: profile.location });

    const exp = profile.experience[0];
    const dates = exp ? prettyDates(exp.start, exp.end) : null;
    if (exp && dates) {
      items.push({ label: labels.current, value: `${exp.role} @ ${exp.company} (${dates})` });
    }

    if (profile.contact.resumeUrl) {
      items.push({ label: labels.resume, value: labels.downloadPdf, href: profile.contact.resumeUrl });
    }

    return items;
  }, [labels, profile]);

  return (
    <aside className={expanded ? "sidebar active" : "sidebar"} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={profile.avatar.src} alt={profile.avatar.alt} width={80} height={80} />
        </figure>

        <div className="info-content">
          <h1 className="name" title={profile.name}>
            {profile.name}
          </h1>
          <p className="title">{profile.headline}</p>
        </div>

        <button className="info_more-btn" onClick={onToggle} type="button" aria-expanded={expanded}>
          <span>{expanded ? labels.hideContacts : labels.showContacts}</span>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator" />

        <ul className="contacts-list">
          {contacts.map((c) => (
            <li className="contact-item" key={`${c.label}-${c.value}`}>
              <div className="icon-box" aria-hidden="true">
                <DotIcon />
              </div>

              <div className="contact-info">
                <p className="contact-title">{c.label}</p>
                {c.href ? (
                  <a className="contact-link" href={c.href}>
                    {c.value}
                  </a>
                ) : (
                  <p className="contact-link">{c.value}</p>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="separator" />

        <ul className="social-list">
          <li className="social-item">
            <a className="social-link" href={profile.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li className="social-item">
            <a className="social-link" href={profile.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}