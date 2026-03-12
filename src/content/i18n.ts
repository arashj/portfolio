export type Locale = "fr" | "en";

export const uiText: Record<
  Locale,
  {
    nav: { about: string; resume: string; portfolio: string; contact: string };
    resume: { experience: string; education: string; skills: string };
    about: { whatIWorkOn: string; snapshot: string; frontend: string; backend: string };
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
  }
> = {
  fr: {
    nav: { about: "À propos", resume: "CV", portfolio: "Portfolio", contact: "Contact" },
    resume: { experience: "Expérience", education: "Formation", skills: "Compétences" },
    about: {
      whatIWorkOn: "Ce sur quoi je travaille",
      snapshot: "En bref",
      frontend: "Frontend",
      backend: "Backend"
    },
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
    }
  },
  en: {
    nav: { about: "About", resume: "Resume", portfolio: "Portfolio", contact: "Contact" },
    resume: { experience: "Experience", education: "Education", skills: "Skills" },
    about: { whatIWorkOn: "What I work on", snapshot: "Snapshot", frontend: "Frontend", backend: "Backend" },
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
    }
  }
};