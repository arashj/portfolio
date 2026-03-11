import type { MetadataRoute } from "next";
import { profile } from "@/content/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = profile.siteUrl.replace(/\/$/, "");
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now },
    { url: `${base}/#about`, lastModified: now },
    { url: `${base}/#projects`, lastModified: now },
    { url: `${base}/#skills`, lastModified: now },
    { url: `${base}/#experience`, lastModified: now },
    { url: `${base}/#education`, lastModified: now },
    { url: `${base}/#contact`, lastModified: now }
  ];
}
