"use client";

import { useEffect, useState } from "react";
import { getProfile } from "@/content/profile";
import { uiText, type Locale } from "@/content/i18n";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollTopButton } from "@/components/ScrollTopButton";

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

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>("fr");

  useEffect(() => {
    const stored = readStoredLocale();
    if (stored) setLocale(stored);
  }, []);

  useEffect(() => {
    writeStoredLocale(locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const profile = getProfile(locale);
  const t = uiText[locale];

  return (
    <>
      <Navbar
        locale={locale}
        onToggleLocale={() => setLocale((l) => (l === "fr" ? "en" : "fr"))}
        labels={t.nav}
        resumeUrl={profile.contact.resumeUrl}
      />
      <Hero profile={profile} text={t.hero} locale={locale} />
      <Experience
        items={profile.experience}
        title={t.resume.experience}
        subtitle={t.sectionSubtitles.experience}
        presentLabel={locale === "fr" ? "Présent" : "Present"}
      />
      <Skills skillLogos={profile.skillLogos} title={t.resume.skills} subtitle={t.sectionSubtitles.skills} />
      <Projects
        projects={profile.projects}
        title={t.nav.projects}
        subtitle={t.sectionSubtitles.projects}
        viewOnGithubLabel={t.projects.viewOnGithub}
      />
      <Education items={profile.education} title={t.nav.education} subtitle={t.sectionSubtitles.education} />
      <ContactSection profile={profile} text={t.contact} subtitle={t.sectionSubtitles.contact} emailLabel={t.sidebar.email} />
      <Footer name={profile.name} rightsText={t.footer.rights} />
      <ScrollTopButton />
    </>
  );
}
