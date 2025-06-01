import { LOCALE_DEFAULT, LOCALES } from './localization/messages'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/color-mode',
    'nuxt-icons',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxtjs/i18n',
    '@nuxtjs/sanity',
    '@nuxt/eslint',
  ],
  devtools: { enabled: true },

  // CSS
  css: ['~/assets/css/main.scss', '~/assets/css/theme.scss'],

  // Dark/Light
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'dark',
  },
  compatibilityDate: '2024-04-03',

  // Vite
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Eslint
  eslint: {
    config: {
      stylistic: true,
      standalone: false,
    },
  },

  // i18n
  i18n: {
    vueI18n: './localization/i18n.config.ts',
    locales: LOCALES,
    defaultLocale: LOCALE_DEFAULT,
  },

  // Sanity
  sanity: {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: 'production',
  },
})
