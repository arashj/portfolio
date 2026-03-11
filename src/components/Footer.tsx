import { profile } from "@/content/profile";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap footerInner">
        <div className="footerSmall">
          <span>
            © {year} {profile.name}. Built with Next.js.
          </span>
        </div>
        <div className="footerLinks" aria-label="Social links">
          {profile.links.github && (
            <a href={profile.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {profile.links.linkedin && (
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
          {profile.links.email && <a href={`mailto:${profile.links.email}`}>Email</a>}
        </div>
      </div>
    </footer>
  );
}
