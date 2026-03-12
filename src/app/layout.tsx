import type { Metadata } from "next";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "./globals.css";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} | ${profile.headline}`,
    template: `%s | ${profile.name}`
  },
  description: profile.summary,
  alternates: {
    canonical: profile.siteUrl
  },
  openGraph: {
    title: `${profile.name} | ${profile.headline}`,
    description: profile.summary,
    url: profile.siteUrl,
    siteName: profile.name,
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: `${profile.name} portfolio` }],
    locale: "fr_CA",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.headline}`,
    description: profile.summary,
    images: ["/og.svg"]
  }
};

function structuredData() {
  const base = profile.siteUrl.replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: `${base}/`,
        name: `${profile.name} | ${profile.headline}`,
        description: profile.summary,
        inLanguage: ["fr", "en"],
        publisher: { "@id": `${base}/#person` }
      },
      {
        "@type": "Person",
        "@id": `${base}/#person`,
        name: profile.name,
        jobTitle: profile.headline,
        url: `${base}/`,
        sameAs: [profile.links.github, profile.links.linkedin].filter(Boolean)
      }
    ]
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          // JSON-LD needs to be a raw string.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData()) }}
        />
        {children}
      </body>
    </html>
  );
}