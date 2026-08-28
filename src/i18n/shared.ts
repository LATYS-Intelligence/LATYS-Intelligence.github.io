import type { Locale } from "./config";
import type { RouteKey } from "./routes";

interface SharedCopy {
  skipToContent: string;
  primaryNavigation: string;
  openNavigation: string;
  closeNavigation: string;
  languageLabel: string;
  languages: Record<Locale, string>;
  navigation: Record<RouteKey, string>;
  footer: {
    navigationLabel: string;
    productHeading: string;
    getStartedHeading: string;
    faqs: string;
    privacy: string;
    cookies: string;
    officeHeading: string;
    contactLabel: string;
    addressLine1: string;
    addressLine2: string;
    copyright: string;
  };
}

export const sharedCopy = {
  en: {
    skipToContent: "Skip to content",
    primaryNavigation: "Primary navigation",
    openNavigation: "Open navigation",
    closeNavigation: "Close navigation",
    languageLabel: "Language",
    languages: {
      en: "English",
      fr: "Français",
    },
    navigation: {
      home: "Home",
      solutions: "Solutions",
      insights: "Insights",
      faqs: "FAQs",
      privacy: "Privacy Policy",
      cookies: "Cookie Policy",
    },
    footer: {
      navigationLabel: "Footer navigation",
      productHeading: "Product",
      getStartedHeading: "Get Started",
      faqs: "FAQs",
      privacy: "Privacy Policy",
      cookies: "Cookie Policy",
      officeHeading: "Office",
      contactLabel: "Contact information",
      addressLine1: "321 Rue de la Commune, Suite 300",
      addressLine2: "Montreal, Quebec H2Y 2E1, Canada",
      copyright: "© 2026 LATYS Intelligence. All rights reserved.",
    },
  },
  fr: {
    skipToContent: "Aller au contenu",
    primaryNavigation: "Navigation principale",
    openNavigation: "Ouvrir la navigation",
    closeNavigation: "Fermer la navigation",
    languageLabel: "Langue",
    languages: {
      en: "English",
      fr: "Français",
    },
    navigation: {
      home: "Accueil",
      solutions: "Solutions",
      insights: "Perspectives",
      faqs: "FAQ",
      privacy: "Politique de confidentialité",
      cookies: "Politique relative aux témoins",
    },
    footer: {
      navigationLabel: "Navigation du pied de page",
      productHeading: "Produit",
      getStartedHeading: "Pour commencer",
      faqs: "FAQ",
      privacy: "Politique de confidentialité",
      cookies: "Politique relative aux témoins",
      officeHeading: "Bureau",
      contactLabel: "Coordonnées",
      addressLine1: "321, rue de la Commune, bureau 300",
      addressLine2: "Montréal (Québec) H2Y 2E1, Canada",
      copyright: "© 2026 LATYS Intelligence. Tous droits réservés.",
    },
  },
} satisfies Record<Locale, SharedCopy>;
