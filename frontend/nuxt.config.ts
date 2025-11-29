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
    '@nuxtjs/seo',
    '@nuxtjs/sitemap',
  ],
  devtools: { enabled: true },
  // App
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  // CSS
  css: ['~/assets/css/main.scss', '~/assets/css/theme.scss'],

  // SEO
  site: {
    url: 'https://www.aldooriahmed.com',
    name: 'Al-Doori Portfolio',
    description: 'Ahmed Al-Doori - Full Stack Developer Portfolio',
    defaultLocale: LOCALE_DEFAULT,
  },

  // Dark/Light
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'dark',
    storage: 'localStorage',
    storageKey: 'color-mode',
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
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    baseUrl: 'https://www.aldooriahmed.com',
  },

  // Sanity
  sanity: {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: 'production',
  },

  // SEO
  sitemap: {
    sources: ['/api/__sitemap__/urls/blogs'],
  },
})
