import { profile } from "@/content/profile";

export function ContactPanel() {
  return (
    <section className="contact-form">
      <h3 className="h3 form-title">Contact</h3>
      <div className="contact-card">
        <p className="contact-hint">
          Fastest way to reach me is LinkedIn. You can also check out my GitHub for recent work.
        </p>
        <div className="contact-actions">
          <a className="form-btn" href={profile.links.linkedin} target="_blank" rel="noreferrer">
            <span>Message on LinkedIn</span>
          </a>
          <a className="form-btn" href={profile.links.github} target="_blank" rel="noreferrer">
            <span>View GitHub</span>
          </a>
          {profile.contact.email ? (
            <a className="form-btn" href={`mailto:${profile.contact.email}`}>
              <span>Email</span>
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}