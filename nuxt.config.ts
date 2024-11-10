// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/color-mode",
    'nuxt-icons',
    "@nuxt/image",
    "@nuxt/fonts",
  ],

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'dark'
  },
  css: ["~/assets/css/main.scss", "~/assets/css/theme.scss" ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  vite:{
    css:{
      preprocessorOptions:{
        scss:{
          api: 'modern-compiler'
        }
      }
    }
  }
});