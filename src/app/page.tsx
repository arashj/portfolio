import { profile } from "@/content/profile";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { Badge } from "@/components/Badge";
import { ExperienceItem } from "@/components/ExperienceItem";
import { EducationItem } from "@/components/EducationItem";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="main">
        <header className="hero" id="top">
          <div className="wrap heroGrid">
            <div className="heroCopy">
              <p className="kicker">{profile.location}</p>
              <h1 className="title">{profile.name}</h1>
              <p className="subtitle">{profile.headline}</p>
              <p className="lede">{profile.summary}</p>
              <div className="ctaRow">
                <a className="btn primary" href="#projects">
                  View projects
                </a>
                <a className="btn" href={profile.links.resumeUrl}>
                  Resume
                </a>
                <a className="btn ghost" href="#contact">
                  Contact
                </a>
              </div>
              <div className="metaRow">
                {profile.links.github && (
                  <a className="metaLink" href={profile.links.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}
                {profile.links.linkedin && (
                  <a className="metaLink" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                )}
                {profile.links.email && (
                  <a className="metaLink" href={`mailto:${profile.links.email}`}>
                    {profile.links.email}
                  </a>
                )}
              </div>
            </div>

            <div className="heroCard" role="presentation">
              <div className="heroCardInner">
                {profile.highlightStats.map((s) => (
                  <div className="heroStat" key={`${s.label}-${s.value}`}>
                    <div className="heroStatNum">{s.value}</div>
                    <div className="heroStatLabel">{s.label}</div>
                  </div>
                ))}
                <div className="heroNote">
                  <p className="heroNoteTitle">Currently</p>
                  <p className="heroNoteBody">{profile.currently}</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <Section id="about" eyebrow="About" title="A quick introduction">
          <div className="twoCol">
            <div className="prose">
              {profile.about.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
            <aside className="asideCard">
              <div className="asideTop">
                <img className="avatar" src="/avatar-placeholder.svg" alt="" />
                <div>
                  <p className="asideName">{profile.name}</p>
                  <p className="asideRole">{profile.headline}</p>
                </div>
              </div>
              <div className="asideGrid">
                <div className="asideItem">
                  <div className="asideLabel">Primary stack</div>
                  <div className="asideValue">{profile.primaryStack}</div>
                </div>
                <div className="asideItem">
                  <div className="asideLabel">Also</div>
                  <div className="asideValue">{profile.secondaryStack}</div>
                </div>
                <div className="asideItem">
                  <div className="asideLabel">Interests</div>
                  <div className="asideValue">{profile.interests.join(", ")}</div>
                </div>
              </div>
            </aside>
          </div>
        </Section>

        <Section id="projects" eyebrow="Projects" title="Selected work">
          <div className="grid">
            {profile.projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Section>

        <Section id="skills" eyebrow="Skills" title="Tools I use to ship">
          <div className="skillGrid">
            {profile.skills.map((group) => (
              <div className="skillCard" key={group.name}>
                <h3 className="skillTitle">{group.name}</h3>
                <div className="badgeRow" role="list">
                  {group.items.map((s) => (
                    <Badge key={s} text={s} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {profile.experience.length > 0 ? (
          <Section id="experience" eyebrow="Experience" title="Where I’ve made impact">
            <div className="stack">
              {profile.experience.map((e) => (
                <ExperienceItem key={`${e.company}-${e.role}-${e.start}`} item={e} />
              ))}
            </div>
          </Section>
        ) : null}

        {profile.education.length > 0 ? (
          <Section id="education" eyebrow="Education" title="Foundation and learning">
            <div className="stack">
              {profile.education.map((ed) => (
                <EducationItem key={`${ed.school}-${ed.program}-${ed.start}`} item={ed} />
              ))}
            </div>
          </Section>
        ) : null}

        <Section id="contact" eyebrow="Contact" title="Let’s build something">
          <div className="contactCard">
            <p className="contactLead">{profile.contactBlurb}</p>
            <div className="contactActions">
              {profile.links.email && (
                <a className="btn primary" href={`mailto:${profile.links.email}`}>
                  Email me
                </a>
              )}
              {profile.links.linkedin && (
                <a className="btn" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                  Message on LinkedIn
                </a>
              )}
              {profile.links.github && (
                <a className="btn ghost" href={profile.links.github} target="_blank" rel="noreferrer">
                  Follow on GitHub
                </a>
              )}
            </div>
            <div className="finePrint">
              <span>Based in {profile.location}.</span>
              <span>Available for {profile.availability}.</span>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
