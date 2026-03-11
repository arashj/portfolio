import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { profile } from "@/content/profile";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} | ${profile.headline}`,
    template: `%s | ${profile.name}`
  },
  description: profile.summary,
  openGraph: {
    title: `${profile.name} | ${profile.headline}`,
    description: profile.summary,
    url: profile.siteUrl,
    siteName: profile.name,
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: `${profile.name} portfolio` }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.headline}`,
    description: profile.summary,
    images: ["/og.svg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <div className="bg" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
