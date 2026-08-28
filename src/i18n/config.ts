export const locales = ["en", "fr"] as const;

export type Locale = (typeof locales)[number];

export const htmlLanguage: Record<Locale, string> = {
  en: "en-CA",
  fr: "fr-CA",
};
