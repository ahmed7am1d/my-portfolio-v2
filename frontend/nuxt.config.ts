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
    'nuxt-shiki',
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

  // Runtime Config
  runtimeConfig: {
    public: {
      i18n: {
        locales: LOCALES,
      },
    },
  },

  compatibilityDate: '2024-04-03',

  // Nitro
  nitro: {
    preset: 'vercel',
    externals: {
      inline: ['ohash'],
    },
  },

  // Vite
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
    // Needed for Sanity because it uses React internally
    optimizeDeps: {
      include: ['react-compiler-runtime', 'react', 'react-dom'],
    },
  },

  // PostCSS
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
    langDir: '../localization',
  },

  // Image
  image: {
    sanity: {
      projectId: process.env.SANITY_PROJECT_ID,
    },
  },

  // Sanity
  sanity: {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2021-08-31',
  },

  // Shiki (Code Highlighting)
  shiki: {
    // Include all languages
    bundledLangs: ['csharp', 'javascript', 'batch'],
    defaultTheme: 'dark-plus',
  },

  // SEO
  sitemap: {
    sources: ['/api/__sitemap__/urls/blogs'],
  },
})
