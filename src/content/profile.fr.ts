import type { Profile } from "@/content/types";
import { sharedProjects, sharedSkillLogos, siteUrl } from "@/content/profile.shared";

export const profileFr: Profile = {
  siteUrl,

  name: "Arash Jamshidi",
  headline: "Developpeur Full Stack Web",
  location: "Montreal, QC, Canada",

  summary:
    "Developpeur full stack avec plus de 5 ans d'experience en developpement de logiciels interactifs et optimises, axes sur l'experience utilisateur. A l'aise avec React et les outils frontend modernes, ainsi qu'avec les services backend et les API.",

  avatar: {
    src: "/avatar-placeholder.svg",
    alt: "Portrait de Arash"
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
    title: "A propos",
    paragraphs: [
      "Je suis developpeur full stack base a Montreal. J'aime construire des produits rapides, lisibles et faciles a maintenir.",
      "Cote frontend, je travaille avec React/Next.js et des interfaces riches en etat (Redux/RTK, RTK Query). Cote backend, je livre des API et des services avec Spring Boot + PostgreSQL, en restant attentif a l'authentification, au caching et a la performance.",
      "Ce que j'optimise: une architecture claire, des performances mesurables et une interface qui reste simple a faire evoluer. Je suis bilingue (francais/anglais)."
    ]
  },

  experience: [
    {
      company: "EnerZam",
      role: "Developpeur Full Stack",
      start: "2025",
      bullets: [
        "Refonte d'une application legacy avec React 19 + Redux et RTK Query pour rendre le frontend plus evolutif et maintenable.",
        "Conception et maintenance de services backend avec Spring Boot + PostgreSQL, en mettant l'accent sur la fiabilite et la performance.",
        "Mise en place d'une authentification JWT, de strategies de caching et support de la mesure/verif en temps reel avec supervision 24/7."
      ]
    },
    {
      company: "Universite du Quebec (ETS)",
      role: "Developpeur logiciel",
      start: "2022",
      end: "2024",
      bullets: [
        "Developpement d'applications responsives, centrees utilisateur, avec des iterations UI pour ameliorer l'adoption.",
        "Collaboration UI/UX sur des tests A/B pour valider les changements et ameliorer l'utilisabilite.",
        "Optimisation du traitement des requetes, reduction du temps de reponse d'environ 500ms a 350ms via des ameliorations d'algorithmes et de gestion des donnees."
      ]
    },
    {
      company: "DayaTeca",
      role: "Developpeur web",
      start: "2013",
      end: "2018",
      bullets: [
        "Construction et tests de plus de 40 composants frontend reutilisables, reduisant le temps de developpement futur d'environ 30%.",
        "Amelioration de la qualite de livraison et reduction du temps de debogage via une meilleure structure de composants et de la documentation.",
        "Renforcement de la fiabilite via des pratiques de tests (TDD), reduisant les defauts apres livraison et augmentant la satisfaction utilisateur."
      ]
    }
  ],

  education: [
    {
      school: "Universite du Quebec (ETS)",
      program: "Maitrise, Genie electrique et genie informatique",
      start: "2022",
      end: "2024",
      bullets: ["Bourse: Ubiquitous Haptics (interne)"]
    },
    {
      school: "Universite Sadjad",
      program: "Baccalaureat, Telecommunications et genie electrique",
      bullets: ["Iran"]
    }
  ],

  projects: sharedProjects,
  skillLogos: sharedSkillLogos
};