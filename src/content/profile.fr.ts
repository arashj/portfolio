import type { Profile } from "@/content/types";
import { sharedProjects, sharedSkillLogos, siteUrl } from "@/content/profile.shared";

export const profileFr: Profile = {
  siteUrl,

  name: "Arash Jamshidi",
  headline: "Développeur Full-Stack Web",
  location: "Montréal, QC, Canada",

  summary:
    "Développeur full stack avec plus de 5 ans d'expérience en développement de logiciels interactifs et optimisés, axés sur l'expérience utilisateur. À l'aise avec React et les outils frontend modernes, ainsi qu'avec les services backend et les API.",

  avatar: {
    src: "/avatar-placeholder.svg",
    alt: "Portrait d'Arash"
  },

  contact: {
    // Ajoutez un email ici si vous voulez qu'il soit visible publiquement.
    email: "",
    resumeUrl: "/resume.pdf"
  },

  links: {
    github: "https://github.com/arashj",
    linkedin: "https://www.linkedin.com/in/arash-jamshidi12/"
  },

  about: {
    title: "À propos",
    paragraphs: [
      "Je suis développeur full stack basé à Montréal. J'aime construire des produits rapides, lisibles et faciles à maintenir.",
      "Côté frontend, je travaille avec React/Next.js et des interfaces riches en état (Redux/RTK, RTK Query). Côté backend, je livre des API et des services avec Spring Boot + PostgreSQL, en restant attentif à l'authentification, au caching et à la performance.",
      "Ce que j'optimise: une architecture claire, des performances mesurables et une interface qui reste simple à faire évoluer. Je suis bilingue (français/anglais)."
    ]
  },

  experience: [
    {
      company: "EnerZam",
      role: "Développeur Full-Stack",
      start: "2025",
      bullets: [
        "Refonte d'une application legacy avec React 19 + Redux et RTK Query pour rendre le frontend plus évolutif et maintenable.",
        "Conception et maintenance de services backend avec Spring Boot + PostgreSQL, en mettant l'accent sur la fiabilité et la performance.",
        "Mise en place d'une authentification JWT, de stratégies de caching et support de la mesure/vérification en temps réel avec supervision 24/7."
      ]
    },
    {
      company: "Université du Québec (ÉTS)",
      role: "Développeur logiciel",
      start: "2022",
      end: "2024",
      bullets: [
        "Développement d'applications responsives, centrées utilisateur, avec des itérations UI pour améliorer l'adoption.",
        "Collaboration UI/UX sur des tests A/B pour valider les changements et améliorer l'utilisabilité.",
        "Optimisation du traitement des requêtes, réduction du temps de réponse d'environ 500ms à 350ms via des améliorations d'algorithmes et de gestion des données."
      ]
    },
    {
      company: "DayaTeca",
      role: "Développeur web",
      start: "2013",
      end: "2018",
      bullets: [
        "Construction et tests de plus de 40 composants frontend réutilisables, réduisant le temps de développement futur d'environ 30%.",
        "Amélioration de la qualité de livraison et réduction du temps de débogage via une meilleure structure de composants et de la documentation.",
        "Renforcement de la fiabilité via des pratiques de tests (TDD), réduisant les défauts après livraison et augmentant la satisfaction utilisateur."
      ]
    }
  ],

  education: [
    {
      school: "Université du Québec (ÉTS)",
      program: "Maîtrise, Génie électrique et génie informatique",
      start: "2022",
      end: "2024",
      bullets: ["Bourse: Ubiquitous Haptics (interne)"]
    },
    {
      school: "Université Sadjad",
      program: "Baccalauréat, Télécommunications et génie électrique",
      bullets: ["Iran"]
    }
  ],

  projects: sharedProjects,
  skillLogos: sharedSkillLogos
};