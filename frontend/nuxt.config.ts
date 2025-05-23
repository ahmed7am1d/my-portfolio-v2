import { LOCALE_DEFAULT, LOCALES } from "./localization/messages";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/color-mode",
    "nuxt-icons",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxtjs/i18n",
    "@nuxtjs/sanity",
  ],

  // i18n
  i18n: {
    vueI18n: "./localization/i18n.config.ts",
    locales: LOCALES,
    defaultLocale: LOCALE_DEFAULT,
  },

  // Dark/Light
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "dark",
  },

  // CSS
  css: ["~/assets/css/main.scss", "~/assets/css/theme.scss"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Vite
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },

  // Sanity
  sanity: {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: 'production',
  }
});