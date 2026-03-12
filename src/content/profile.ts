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

const projects: Project[] = [
  {
    slug: "task-management",
    title: "Task Management Web App",
    description:
      "A task management application to track deadlines, add/delete/modify tasks, assign dates, and add descriptions.",
    links: { source: "https://github.com/arashj/Task-Management-Application" }
  },
  {
    slug: "place-finder",
    title: "Place Finder Web App",
    description:
      "Helps users save places to visit. Locations are sorted by geographic proximity and the UI uses animations to stay engaging.",
    links: { source: "https://github.com/arashj/PlaceFinder" }
  },
  {
    slug: "food-order",
    title: "Food Ordering App",
    description:
      "A React app for browsing foods, adding items to a cart, and checking out. Uses context providers for cart and progress state.",
    links: { source: "https://github.com/arashj/Food-order-app" }
  },
  {
    slug: "todo",
    title: "Todo Web App",
    description: "A simple todo app focused on clean component patterns and practical state handling.",
    links: { source: "https://github.com/arashj/Todo-web-app" }
  }
];

const skillLogos: SkillLogo[] = [
  { name: "React", icon: "/skill-icons/react.svg" },
  { name: "Next.js", icon: "/skill-icons/nextjs.svg" },
  { name: "Redux", icon: "/skill-icons/redux.svg" },
  { name: "TypeScript", icon: "/skill-icons/typescript.svg" },
  { name: "JavaScript", icon: "/skill-icons/javascript.svg" },
  { name: "Node.js", icon: "/skill-icons/nodejs.svg" },
  { name: "Spring", icon: "/skill-icons/spring.svg" },
  { name: "PostgreSQL", icon: "/skill-icons/postgresql.svg" },
  { name: "MongoDB", icon: "/skill-icons/mongodb.svg" },
  { name: "Tailwind CSS", icon: "/skill-icons/tailwindcss.svg" },
  { name: "Git", icon: "/skill-icons/git.svg" },
  { name: "GitHub", icon: "/skill-icons/github.svg" },
  { name: "AWS", icon: "/skill-icons/amazonwebservices.svg" },
  { name: "Firebase", icon: "/skill-icons/firebase.svg" }
];

export const profile = {
  siteUrl: "https://arashj.vercel.app",

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
      "I’m a full-stack web developer based in Montreal. I enjoy building responsive, accessible UIs and reliable backend services that ship cleanly and scale.",
      "I’ve worked across modern React stacks (React, Next.js, Redux/RTK) and backend systems (Spring Boot, PostgreSQL), with a focus on performance, maintainability, and clear collaboration.",
      "I’m bilingual (French and English) and I’m always learning new tools and best practices to deliver better software."
    ]
  },

  experience: [
    {
      company: "EnerZam",
      role: "Full-Stack Developer",
      start: "2025",
      bullets: [
        "Rebuilt a legacy application from the ground up using React 19, Redux, and RTK Query for a modern and maintainable frontend.",
        "Designed and maintained backend services with Spring Boot and PostgreSQL, focusing on performance and reliability.",
        "Implemented JWT-based auth and caching strategies, and contributed to real-time measurement and verification with 24/7 monitoring."
      ]
    },
    {
      company: "University of Quebec (ÉTS)",
      role: "Software Developer",
      start: "2022",
      end: "2024",
      bullets: [
        "Engineered responsive, user-centered applications and improved engagement through UI improvements and iterative delivery.",
        "Partnered with UI/UX on A/B testing to improve usability and validate design decisions.",
        "Optimized request processing, reducing response time from ~500ms to ~350ms via algorithm refinement and better data handling."
      ]
    },
    {
      company: "DayaTeca",
      role: "Web Developer",
      start: "2013",
      end: "2018",
      bullets: [
        "Engineered and tested 40+ reusable frontend components, reducing future development time by ~30%.",
        "Led frontend development to increase code quality and reduce debugging time by ~25%.",
        "Improved reliability with stronger testing habits (TDD), reducing post-release defects and improving user satisfaction."
      ]
    }
  ] satisfies Experience[],

  education: [
    {
      school: "University of Quebec (ÉTS)",
      program: "Master’s Degree, Electrical and Computer Engineering",
      start: "2022",
      end: "2024",
      bullets: ["Scholarship: Ubiquitous Haptics (internal)"]
    },
    {
      school: "Sadjad University",
      program: "Bachelor’s Degree, Telecommunication-Electrical Engineering",
      bullets: ["Iran"]
    }
  ] satisfies Education[],

  projects,
  skillLogos
};