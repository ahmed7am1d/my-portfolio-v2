<script setup lang="ts">
// Types
import type { INavigationItem } from './types/navbar.type'

// Utils
const { setLocale, locale: i18nLocale } = useI18n()
const localePath = useLocalePath()

// Layout
const navigationItems = computed<INavigationItem[]>(() => [
  // Home
  {
    id: 'home',
    iconPath: 'home',
    textToDisplay: 'Home',
    translationKey: 'nav.home',
    translationKeyPosition: 1,
    to: '/',
  },

  // Projects
  {
    id: 'projects',
    iconPath: 'folder',
    textToDisplay: 'Projects',
    translationKey: 'nav.project',
    translationKeyPosition: 2,
    to: 'projects',
  },

  // Blogs
  {
    id: 'blog',
    iconPath: 'edit',
    textToDisplay: 'Blogs',
    translationKey: 'nav.blog',
    translationKeyPosition: 2,
    to: 'blogs',
  },

  // Experience | work
  {
    id: 'experience',
    iconPath: 'briefcase',
    textToDisplay: 'Experience',
    translationKey: 'nav.experience',
    translationKeyPosition: 1,
    to: 'experiences',
  },

  // Tools
  {
    id: 'tools',
    iconPath: 'tool',
    textToDisplay: 'Tools',
    translationKey: 'nav.tool',
    translationKeyPosition: 2,
    to: 'tools',
  },
])

// Functions
function handleLocaleChange(locale: 'EN' | 'AR') {
  const localeCode = locale === 'EN' ? 'en-US' : 'ar-IQ'
  setLocale(localeCode)
}

function getLocaleClass(locale: 'EN' | 'AR') {
  const currentLocaleCode = i18nLocale.value
  const isActive = (locale === 'EN' && currentLocaleCode === 'en-US')
    || (locale === 'AR' && currentLocaleCode === 'ar-IQ')

  return isActive ? 'is-active-locale' : ''
}

function getLocalizedPath(path: string) {
  return localePath(path)
}
</script>

<template>
  <nav aria-label="Main navigation">
    <ul role="menubar">
      <li
        v-for="navItem in navigationItems"
        :key="navItem.id"
        role="none"
      >
        <NuxtLink
          :to="getLocalizedPath(navItem.to)"
          role="menuitem"
          :aria-label="$t(navItem.translationKey)"
        >
          <nuxt-icon
            :name="navItem.iconPath"
            filled
            :aria-hidden="true"
          />

          <span
            class="nav-item-tooltip"
            role="tooltip"
          >
            {{ $t(navItem.translationKey, navItem.translationKeyPosition) }}
          </span>
        </NuxtLink>
      </li>

      <div class="locale-container">
        <span
          class="locale-container__EN"
          :class="getLocaleClass('EN')"
          @click="handleLocaleChange('EN')"
        >
          EN
        </span>

        <span>|</span>

        <span
          class="locale-container__AR"
          :class="getLocaleClass('AR')"
          @click="handleLocaleChange('AR')"
        >
          AR
        </span>
      </div>
    </ul>
  </nav>
</template>

<style lang="scss">
nav {
  @apply flex justify-center w-full;

  ul {
    @apply flex flex-row items-center gap-x-9 h-12 px-5 text-white rounded-2xl dark:bg-nav-dark bg-nav-light my-10;

    li {
      @apply relative hover:cursor-pointer;

      .nuxt-icon svg {
        @apply w-5 h-5 dark:text-white text-black;
      }

      .nav-item-tooltip {
        @apply select-none invisible opacity-0 absolute w-fit rounded-lg dark:bg-nav-item-tooltip-dark bg-nav-item-tooltip-light px-2 text-center -translate-x-1/2 left-1/2 bottom-0 transition-all duration-[350ms] ease-in-out;
        pointer-events: none;
        white-space: nowrap;
      }

      a.router-link-active {
        .nuxt-icon svg {
          @apply text-primary;
        }
      }

      &:hover {
        .nav-item-tooltip {
          @apply visible opacity-100 -bottom-10;
        }

        .nuxt-icon svg {
          @apply text-primary;
        }
      }
    }

    .locale-container {
      @apply flex gap-x-2 select-none text-black dark:text-white;

      &__EN,
      &__AR {
        @apply hover:cursor-pointer hover:text-primary;

        &.is-active-locale {
          @apply text-primary font-semibold;
        }
      }
    }
  }
}
</style>
