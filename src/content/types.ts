export type SkillLogo = {
  name: string;
  icon: string; // path under /public
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  links: {
    source?: string;
    demo?: string;
  };
};

export type Experience = {
  company: string;
  role: string;
  start?: string;
  end?: string;
  bullets: string[];
};

export type Education = {
  school: string;
  program: string;
  start?: string;
  end?: string;
  bullets?: string[];
};

export type Profile = {
  siteUrl: string;
  name: string;
  headline: string;
  location: string;
  summary: string;
  avatar: { src: string; alt: string };
  contact: { email: string; resumeUrl: string };
  links: { github: string; linkedin: string };
  about: { title: string; paragraphs: string[] };
  experience: Experience[];
  education: Education[];
  projects: Project[];
  skillLogos: SkillLogo[];
};