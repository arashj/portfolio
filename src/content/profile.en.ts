import type { Profile } from "@/content/types";
import { sharedProjects, sharedSkillLogos, siteUrl } from "@/content/profile.shared";

export const profileEn: Profile = {
  siteUrl,

  name: "Arash Jamshidi",
  headline: "Full-Stack Web Developer",
  location: "Montreal, QC, Canada",

  summary:
    "Full-stack web developer with 5+ years of experience building interactive, optimized software and user-centered interfaces. Comfortable across React and modern frontend tooling, as well as backend services and APIs.",

  avatar: {
    src: "/avatar-placeholder.svg",
    alt: "Portrait of Arash"
  },

  contact: {
    // Add an email here if you want it visible publicly.
    email: "",
    resumeUrl: "/resume.pdf"
  },

  links: {
    github: "https://github.com/arashj",
    linkedin: "https://www.linkedin.com/in/arash-jamshidi12/"
  },

  about: {
    title: "About",
    paragraphs: [
      "I'm a full-stack web developer based in Montreal. I like building products that feel fast, readable, and easy to maintain.",
      "On the frontend, I'm comfortable with React/Next.js and state-heavy UIs (Redux/RTK, RTK Query). On the backend, I ship APIs and services with Spring Boot + PostgreSQL and care about auth, caching, and performance.",
      "What I optimize for: clear architecture, measurable performance, and a UI that stays simple as the app grows. I'm bilingual (French/English)."
    ]
  },

  experience: [
    {
      company: "EnerZam",
      role: "Full-Stack Developer",
      start: "2025",
      bullets: [
        "Rebuilt a legacy application using React 19 + Redux and RTK Query to make the frontend more scalable and maintainable.",
        "Designed and maintained backend services with Spring Boot + PostgreSQL, focusing on reliability and performance.",
        "Implemented JWT-based auth and caching strategies and supported real-time measurement/verification with 24/7 monitoring."
      ]
    },
    {
      company: "University of Quebec (ETS)",
      role: "Software Developer",
      start: "2022",
      end: "2024",
      bullets: [
        "Built responsive, user-centered applications and improved engagement through iterative UI delivery.",
        "Worked with UI/UX on A/B tests to validate changes and improve usability.",
        "Optimized request processing, reducing response time from ~500ms to ~350ms via algorithm and data-handling improvements."
      ]
    },
    {
      company: "DayaTeca",
      role: "Web Developer",
      start: "2013",
      end: "2018",
      bullets: [
        "Built and tested 40+ reusable frontend components, cutting future development time by ~30%.",
        "Improved delivery quality and reduced debugging time through better component structure and documentation.",
        "Strengthened reliability with testing habits (TDD), reducing post-release defects and improving user satisfaction."
      ]
    }
  ],

  education: [
    {
      school: "University of Quebec (ETS)",
      program: "Master's Degree, Electrical and Computer Engineering",
      start: "2022",
      end: "2024",
      bullets: ["Scholarship: Ubiquitous Haptics (internal)"]
    },
    {
      school: "Sadjad University",
      program: "Bachelor's Degree, Telecommunication-Electrical Engineering",
      bullets: ["Iran"]
    }
  ],

  projects: sharedProjects,
  skillLogos: sharedSkillLogos
};