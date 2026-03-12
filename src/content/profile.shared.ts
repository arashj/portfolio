import type { SkillLogo, Project } from "@/content/types";

export const siteUrl = "https://arashj.vercel.app";

export const sharedProjects: Project[] = [
  {
    slug: "this-portfolio",
    title: "Portfolio (This Site)",
    description:
      "A fast, responsive portfolio built in Next.js with an interactive vCard layout, SEO basics (sitemap/robots/OG), and a contact form. Designed to showcase projects and experience clearly.",
    links: {
      demo: siteUrl,
      source: "https://github.com/arashj/portfolio"
    }
  },
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

export const sharedSkillLogos: SkillLogo[] = [
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