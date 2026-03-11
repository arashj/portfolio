import { profile } from "@/content/profile";

export function Navbar() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    ...(profile.experience.length ? [{ href: "#experience", label: "Experience" }] : []),
    ...(profile.education.length ? [{ href: "#education", label: "Education" }] : []),
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className="nav" aria-label="Primary">
      <div className="wrap navInner">
        <a className="brand" href="#top">
          <span className="brandMark" aria-hidden="true" />
          <span className="brandName">{profile.name}</span>
          <span className="brandTag">{profile.headline}</span>
        </a>
        <div className="navLinks">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
