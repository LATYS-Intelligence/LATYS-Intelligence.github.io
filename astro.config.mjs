import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.latys.ca",
  output: "static",
  trailingSlash: "always",
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
