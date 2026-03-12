import type { Locale } from "@/content/i18n";
import type { Profile } from "@/content/types";
import { profileEn } from "@/content/profile.en";
import { profileFr } from "@/content/profile.fr";

export const profiles: Record<Locale, Profile> = {
  fr: profileFr,
  en: profileEn
};

// Back-compat: existing imports default to French.
export const profile = profileFr;

export function getProfile(locale: Locale): Profile {
  return profiles[locale];
}