import type { Locale } from "./config";

export const routes = {
  home: { en: "/", fr: "/fr/" },
  solutions: { en: "/solutions/", fr: "/fr/solutions/" },
  insights: { en: "/insights/", fr: "/fr/insights/" },
  faqs: { en: "/faqs/", fr: "/fr/faqs/" },
  privacy: { en: "/privacy/", fr: "/fr/privacy/" },
  cookies: { en: "/cookies/", fr: "/fr/cookies/" },
} as const;

export type RouteKey = keyof typeof routes;

export const navigationOrder: RouteKey[] = [
  "home",
  "solutions",
  "faqs",
];

export function getLocalizedPath(route: RouteKey, locale: Locale): string {
  return routes[route][locale];
}
