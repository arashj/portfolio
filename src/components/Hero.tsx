"use client";

import { useEffect, useRef, useState } from "react";
import type { Profile } from "@/content/types";

type HeroText = {
  labels: string[];
  roles: string[];
  ctaPrimary: string;
  ctaResume: string;
  scrollHint: string;
  kpis: { label: string; value: string; unit: string; trend: "up" | "down" }[];
};

const sparklinePoints = [
  "0,15 20,13 40,14 60,9 80,7 100,3",
  "0,3 20,6 40,8 60,12 80,15 100,17",
  "0,16 20,14 40,10 60,11 80,6 100,4",
  "0,12 20,12 40,8 60,8 80,4 100,4"
];

const GITHUB_AVATAR_URL = "https://github.com/arashj.png?size=400";

export function Hero({ profile, text, locale }: { profile: Profile; text: HeroText; locale: string }) {
  const [typed, setTyped] = useState("");
  const [imgFailed, setImgFailed] = useState(false);
  const stateRef = useRef({ roleIdx: 0, charIdx: 0, deleting: false });

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const roles = text.roles;
    stateRef.current = { roleIdx: 0, charIdx: 0, deleting: false };
    setTyped("");

    function tick() {
      const s = stateRef.current;
      const current = roles[s.roleIdx % roles.length];
      if (!s.deleting) {
        s.charIdx++;
        setTyped(current.slice(0, s.charIdx));
        if (s.charIdx === current.length) {
          s.deleting = true;
          timer = setTimeout(tick, 1800);
          return;
        }
      } else {
        s.charIdx--;
        setTyped(current.slice(0, s.charIdx));
        if (s.charIdx === 0) {
          s.deleting = false;
          s.roleIdx = (s.roleIdx + 1) % roles.length;
        }
      }
      timer = setTimeout(tick, s.deleting ? 40 : 70);
    }
    tick();
    return () => clearTimeout(timer);
  }, [locale, text.roles]);

  return (
    <section className="hero-section" id="hero">
      <div className="container hero-container">
        <div className="hero-content-col">
          <div className="dashboard-header">
            {text.labels.map((label) => (
              <span className="dashboard-label" key={label}>
                <span className="label-dot" />
                {label}
              </span>
            ))}
          </div>

          <h1 className="hero-name">{profile.name}</h1>

          <div className="hero-typed-wrap">
            <span className="typed">{typed}</span>
            <span className="typed-cursor">|</span>
          </div>

          <p className="hero-description">{profile.summary}</p>

          <div className="hero-cta-group">
            <a href="#contact" className="hero-btn hero-btn-primary">
              <i className="bi bi-chat-dots" /> {text.ctaPrimary}
            </a>
            <a href={profile.contact.resumeUrl} className="hero-btn hero-btn-secondary">
              <i className="bi bi-download" /> {text.ctaResume}
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn-icon">
              <i className="bi bi-linkedin" />
            </a>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn-icon">
              <i className="bi bi-github" />
            </a>
          </div>

          <div className="kpi-grid">
            {text.kpis.map((kpi, i) => (
              <div className="kpi-card" key={kpi.label}>
                <div className="kpi-header">
                  <span className="kpi-label">{kpi.label}</span>
                  <span className="kpi-trend">{kpi.trend === "up" ? "▲" : "▼"}</span>
                </div>
                <div className="kpi-value">
                  {kpi.value}
                  <span className="kpi-unit">{kpi.unit}</span>
                </div>
                <div className="kpi-footer">
                  <svg className="kpi-sparkline" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <polyline points={sparklinePoints[i % sparklinePoints.length]} fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-image-col">
          <div className="hero-profile-wrap">
            <div className="hero-profile-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imgFailed ? profile.avatar.src : GITHUB_AVATAR_URL}
                alt={profile.avatar.alt}
                onError={() => setImgFailed(true)}
              />
            </div>
          </div>
          <div className="terminal-status">
            <span className="status-dot" />
            {profile.location}
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span>{text.scrollHint}</span>
        <div className="mouse">
          <div className="wheel" />
        </div>
      </div>
    </section>
  );
}
