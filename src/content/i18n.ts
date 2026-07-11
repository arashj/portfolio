export type Locale = "fr" | "en";

export const uiText: Record<
  Locale,
  {
    nav: {
      about: string;
      resume: string;
      portfolio: string;
      contact: string;
      home: string;
      experience: string;
      skills: string;
      projects: string;
      education: string;
    };
    resume: { experience: string; education: string; skills: string };
    about: { whatIWorkOn: string; snapshot: string; frontend: string; backend: string };
    hero: {
      labels: string[];
      roles: string[];
      ctaPrimary: string;
      ctaResume: string;
      scrollHint: string;
      kpis: { label: string; value: string; unit: string; trend: "up" | "down" }[];
    };
    sectionSubtitles: {
      experience: string;
      skills: string;
      projects: string;
      education: string;
      contact: string;
    };
    projects: { viewOnGithub: string };
    contact: {
      title: string;
      formTitle: string;
      fullName: string;
      email: string;
      subject: string;
      message: string;
      send: string;
      sending: string;
      sentTitle: string;
      sentBody: string;
      sendAnother: string;
      linkedin: string;
      github: string;
      location: string;
      notConfigured: string;
      error: string;
    };
    sidebar: {
      showContacts: string;
      hideContacts: string;
      email: string;
      location: string;
      current: string;
      resume: string;
      downloadPdf: string;
    };
    footer: { rights: string };
  }
> = {
  fr: {
    nav: {
      about: "À propos",
      resume: "CV",
      portfolio: "Portfolio",
      contact: "Contact",
      home: "Accueil",
      experience: "Expérience",
      skills: "Compétences",
      projects: "Projets",
      education: "Formation"
    },
    resume: { experience: "Expérience", education: "Formation", skills: "Compétences" },
    about: {
      whatIWorkOn: "Ce sur quoi je travaille",
      snapshot: "En bref",
      frontend: "Frontend",
      backend: "Backend"
    },
    hero: {
      labels: ["Profil.Tableau_de_bord", "Développeur_Full-Stack"],
      roles: ["Développeur Full-Stack", "Ingénieur React/Next.js", "Développeur Backend Spring Boot", "Bâtisseur de produits web"],
      ctaPrimary: "Me contacter",
      ctaResume: "CV",
      scrollHint: "Défiler pour explorer",
      kpis: [
        { label: "Expérience", value: "5", unit: "+ ans", trend: "up" },
        { label: "Temps_réponse", value: "30", unit: "%", trend: "down" },
        { label: "Composants", value: "40", unit: "+", trend: "up" },
        { label: "Langues", value: "2", unit: "FR/EN", trend: "up" }
      ]
    },
    sectionSubtitles: {
      experience: "Construire des logiciels fiables, rapides et centrés utilisateur",
      skills: "Outils et technologies utilisés pour livrer des solutions web robustes",
      projects: "Applications concrètes construites de A à Z",
      education: "Parcours académique",
      contact: "Envie de collaborer ou d'échanger sur un projet ? Écrivez-moi."
    },
    projects: { viewOnGithub: "Voir sur GitHub" },
    contact: {
      title: "Contact",
      formTitle: "Formulaire de contact",
      fullName: "Nom complet",
      email: "Adresse email",
      subject: "Objet",
      message: "Votre message",
      send: "Envoyer",
      sending: "Envoi...",
      sentTitle: "Message envoyé",
      sentBody: "Merci pour votre message. Je vous répondrai rapidement.",
      sendAnother: "Envoyer un autre",
      linkedin: "LinkedIn",
      github: "GitHub",
      location: "Localisation",
      notConfigured:
        "Le formulaire n'est pas configuré. Ajoutez NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY dans les variables d'environnement Vercel.",
      error: "Une erreur s'est produite. Réessayez ou contactez-moi sur LinkedIn."
    },
    sidebar: {
      showContacts: "Afficher les contacts",
      hideContacts: "Masquer les contacts",
      email: "Email",
      location: "Localisation",
      current: "Actuel",
      resume: "CV",
      downloadPdf: "Télécharger PDF"
    },
    footer: { rights: "Tous droits réservés" }
  },
  en: {
    nav: {
      about: "About",
      resume: "Resume",
      portfolio: "Portfolio",
      contact: "Contact",
      home: "Home",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      education: "Education"
    },
    resume: { experience: "Experience", education: "Education", skills: "Skills" },
    about: { whatIWorkOn: "What I work on", snapshot: "Snapshot", frontend: "Frontend", backend: "Backend" },
    hero: {
      labels: ["Profile.Dashboard", "Full-Stack_Developer"],
      roles: ["Full-Stack Developer", "React/Next.js Engineer", "Spring Boot Backend Developer", "Web Product Builder"],
      ctaPrimary: "Get in Touch",
      ctaResume: "Resume",
      scrollHint: "Scroll to explore",
      kpis: [
        { label: "Experience", value: "5", unit: "+ yrs", trend: "up" },
        { label: "Response_time", value: "30", unit: "%", trend: "down" },
        { label: "Components", value: "40", unit: "+", trend: "up" },
        { label: "Languages", value: "2", unit: "FR/EN", trend: "up" }
      ]
    },
    sectionSubtitles: {
      experience: "Building reliable, fast, user-centered software",
      skills: "Tools and technologies used to deliver robust web solutions",
      projects: "Real-world applications built end-to-end",
      education: "Academic background",
      contact: "Interested in collaborating or discussing a project? Write to me."
    },
    projects: { viewOnGithub: "View on GitHub" },
    contact: {
      title: "Contact",
      formTitle: "Contact Form",
      fullName: "Full name",
      email: "Email address",
      subject: "Subject",
      message: "Your message",
      send: "Send message",
      sending: "Sending...",
      sentTitle: "Message sent",
      sentBody: "Thanks for reaching out. I'll get back to you soon.",
      sendAnother: "Send another",
      linkedin: "LinkedIn",
      github: "GitHub",
      location: "Location",
      notConfigured:
        "Contact form is not configured yet. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in Vercel Environment Variables.",
      error: "Something went wrong. Try again, or message me on LinkedIn."
    },
    sidebar: {
      showContacts: "Show Contacts",
      hideContacts: "Hide Contacts",
      email: "Email",
      location: "Location",
      current: "Current",
      resume: "Resume",
      downloadPdf: "Download PDF"
    },
    footer: { rights: "All Rights Reserved" }
  }
};
