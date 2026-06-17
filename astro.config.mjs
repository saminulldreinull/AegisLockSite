import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://saminulldreinull.github.io",
  base: "/AegisLockSite",
  output: "static",
  trailingSlash: "always",
  integrations: [sitemap()]
});
