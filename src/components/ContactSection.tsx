import type { Profile } from "@/content/types";
import { ContactPanel } from "@/components/ContactPanel";

type ContactText = {
  title: string;
  formTitle: string;
  fullName: string;
  email: string;
  subject: string;
  message: string;
  send: string;
  sending: string;
  sentTitle: string;
  sentBody: string;
  sendAnother: string;
  linkedin: string;
  github: string;
  location: string;
  notConfigured: string;
  error: string;
};

export function ContactSection({
  profile,
  text,
  subtitle,
  emailLabel
}: {
  profile: Profile;
  text: ContactText;
  subtitle: string;
  emailLabel: string;
}) {
  return (
    <section id="contact" className="contact light-background">
      <div className="container">
        <div className="section-title">
          <h2>{text.title}</h2>
          <p>{subtitle}</p>
        </div>
        <div className="contact-grid">
          <div className="info-wrap">
            {profile.contact.email ? (
              <div className="info-item">
                <i className="bi bi-envelope" />
                <div>
                  <h3>{emailLabel}</h3>
                  <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
                </div>
              </div>
            ) : null}
            <div className="info-item">
              <i className="bi bi-linkedin" />
              <div>
                <h3>{text.linkedin}</h3>
                <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
                  {profile.links.linkedin.replace("https://", "")}
                </a>
              </div>
            </div>
            <div className="info-item">
              <i className="bi bi-github" />
              <div>
                <h3>{text.github}</h3>
                <a href={profile.links.github} target="_blank" rel="noopener noreferrer">
                  {profile.links.github.replace("https://", "")}
                </a>
              </div>
            </div>
            <div className="info-item">
              <i className="bi bi-geo-alt" />
              <div>
                <h3>{text.location}</h3>
                <p>{profile.location}</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            <ContactPanel profile={profile} text={text} />
          </div>
        </div>
      </div>
    </section>
  );
}
