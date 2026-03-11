export type Stat = { value: string; label: string };

export type Project = {
  slug: string;
  title: string;
  description: string;
  highlights?: string[];
  links: {
    source?: string;
    demo?: string;
    caseStudy?: string;
  };
};

export type Experience = {
  company: string;
  role: string;
  start?: string;
  end?: string;
  summary: string;
  bullets?: string[];
};

export type Education = {
  school: string;
  program: string;
  start?: string;
  end?: string;
  details: string;
  highlights?: string[];
};

export type SkillGroup = { name: string; items: string[] };

export const profile = {
  // Update this to your final domain (or your Vercel URL) once deployed.
  siteUrl: "https://portfolio-arashjs-projects.vercel.app",

  name: "Arash Jamshidi",
  headline: "Full-Stack Web Developer",
  location: "Montreal, QC, Canada",
  summary:
    "Full-stack web developer with 5+ years of experience building interactive, optimized software and user-centered interfaces. Comfortable across React and modern frontend tooling, as well as backend services and APIs.",

  currently:
    "Full-stack developer at EnerZam, contributing to rebuilding a legacy system with React 19 + Redux and maintaining backend services with Spring Boot + PostgreSQL.",
  availability: "full-time roles and freelance",

  links: {
    email: "",
    github: "https://github.com/arashj",
    linkedin: "https://www.linkedin.com/in/arash-jamshidi12/",
    resumeUrl: "/resume.pdf"
  },

  highlightStats: [
    { value: "5+", label: "Years experience" },
    { value: "React 19", label: "Frontend" },
    { value: "Spring Boot", label: "Backend" }
  ] satisfies Stat[],

  about: [
    "Iâ€™m a full-stack web developer based in Montreal. I enjoy building responsive, accessible UIs and reliable backend services that ship cleanly and scale.",
    "Iâ€™ve worked across modern React stacks (React, Next.js, Redux/RTK) and backend systems (Spring Boot, PostgreSQL), with a focus on performance, maintainability, and clear collaboration.",
    "Iâ€™m bilingual (French and English) and Iâ€™m always learning new tools and best practices to deliver better software."
  ],

  primaryStack: "React, Next.js, Redux/RTK, TypeScript, JavaScript",
  secondaryStack: "Spring Boot, PostgreSQL, MongoDB, REST, GraphQL, JWT",
  interests: ["UI engineering", "Performance", "System design", "Developer experience"],

  projects: [
    {
      slug: "food-ordering-app",
      title: "Food Ordering App",
      description:
        "A React app for browsing a menu, adding items to a cart, and checking out. Uses context providers to manage cart state and UI progress flow.",
      highlights: ["React", "Vite", "Context"],
      links: {
        source: "https://github.com/arashj/Food-order-app"
      }
    },
    {
      slug: "task-management-application",
      title: "Task Management Application",
      description:
        "Task manager with create/edit/delete flows plus sorting and filtering (completed, incomplete, overdue). Built with a reusable component structure and Tailwind styling.",
      highlights: ["React", "Tailwind CSS", "Filtering"],
      links: {
        source: "https://github.com/arashj/Task-Management-Application"
      }
    },
    {
      slug: "todo-web-app",
      title: "Todo Web App",
      description:
        "A simple todo web app built with React and modern tooling, focused on clean component patterns and practical state handling.",
      highlights: ["React", "Vite", "UI"],
      links: {
        source: "https://github.com/arashj/Todo-web-app"
      }
    },
    {
      slug: "placefinder",
      title: "Place Finder Web App",
      description:
        "Helps users save and remember places to visit. Locations are sorted by geographical proximity, with animations for a more engaging UI.",
      highlights: ["React", "Tailwind CSS", "Animations"],
      links: {
        source: "https://github.com/arashj/PlaceFinder"
      }
    }
  ] satisfies Project[],

  skills: [
    {
      name: "Frontend",
      items: ["React", "Next.js", "Redux", "RTK Query", "TypeScript", "JavaScript (ES6+)", "HTML", "CSS", "Tailwind CSS"]
    },
    { name: "Backend", items: ["Spring Boot", "PostgreSQL", "MongoDB", "Node.js", "REST APIs", "GraphQL", "JWT", "Caching"] },
    { name: "Tools", items: ["Git", "GitHub", "GitLab", "VS Code", "Jira", "Confluence", "npm", "Yarn", "Webpack", "Babel"] },
    { name: "Cloud", items: ["AWS", "Firebase"] }
  ] satisfies SkillGroup[],

  experience: [
    {
      company: "EnerZam",
      role: "Full-Stack Developer",
      start: "2025",
      end: undefined,
      summary: "Contributing to redevelopment of a legacy system and building reliable backend services for energy optimization products.",
      bullets: [
        "Rebuilt a legacy application from the ground up using React 19, Redux, and RTK Query for a modern and maintainable frontend.",
        "Designed and maintained backend services with Spring Boot and PostgreSQL, focusing on performance and reliability.",
        "Implemented JWT-based auth and caching strategies, and contributed to real-time measurement and verification with 24/7 monitoring."
      ]
    },
    {
      company: "University of Quebec (Ã‰TS)",
      role: "Software Developer",
      start: "2022",
      end: "2024",
      summary: "Built user-centered applications and improved performance through responsive design, experimentation, and optimization.",
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
      summary: "Built and tested reusable frontend components and improved delivery quality with responsive UI and TDD practices.",
      bullets: [
        "Engineered and tested 40+ reusable frontend components, reducing future development time by ~30%.",
        "Led frontend development to increase code quality and reduce debugging time by ~25%.",
        "Improved reliability with stronger testing habits (TDD), reducing post-release defects and improving user satisfaction."
      ]
    }
  ] satisfies Experience[],

  education: [
    {
      school: "University of Quebec (Ã‰TS)",
      program: "Masterâ€™s Degree, Electrical and Computer Engineering",
      start: "2022",
      end: "2024",
      details: "Graduate studies in electrical and computer engineering in Montreal.",
      highlights: ["Scholarship: Ubiquitous Haptics (internal)"]
    },
    {
      school: "Sadjad University",
      program: "Bachelorâ€™s Degree, Telecommunication-Electrical Engineering",
      details: "Undergraduate studies in telecommunication/electrical engineering.",
      highlights: ["Iran"]
    }
  ] satisfies Education[],

  contactBlurb:
    "If youâ€™re hiring or want to collaborate on a project, feel free to reach out. Iâ€™m happy to share code samples, demos, or a quick walkthrough of recent work."
};
