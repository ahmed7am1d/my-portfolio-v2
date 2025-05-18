<script setup lang="ts">
// Components
import ProfileCard from '~/components/Card/ProfileCard.vue';

// Utils
const colorMode = useColorMode()
const { setLocale } = useI18n()

// Functions
function handleToggleTheme() {
  colorMode.value = colorMode.value === 'light' ? 'dark' : 'light';
}

</script>

<template>
  <div class="app-layout">
    <!-- Header/Navbar -->
    <header class="app-header" role="banner">
      <!-- Navbar -->
      <NavBar />

      <!-- Dark/light icon -->
      <div class="app-header__dark-light-wrapper">
        <nuxt-icon @click="handleToggleTheme" name="light-bulb" filled :aria-hidden="true" />
      </div>
    </header>

    <!-- Main -->
    <main class="app-main" role="main" id="main-content">
      <div class="content-container">
        <div class="content-grid">
          <!-- Profile card (fixed for all pages) -->
          <aside>
            <ProfileCard />
          </aside>

          <!-- Dynamic content section -->
          <article>
            <slot />
          </article>

          <!-- Locale (just testing) -->
          <div class="col-span-5 flex flex-col gap-y-2">
            <h1 class="dark:text-white text-black">Locale:</h1>
            <div class="flex gap-x-2">
              <button @click="setLocale('en-US')" class="dark:bg-white bg-gray p-2">EN </button>
              <button @click="setLocale('ar-IQ')" class="dark:bg-white bg-gray p-2">AR</button>
            </div>
            <p class="dark:text-white text-black">{{ $t('welcome') }}</p>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="app-footer" role="contentinfo"></footer>
  </div>
</template>

<style lang="scss">
.app-layout {
  @apply w-full min-h-full h-full dark:bg-theme-dark bg-theme-light;

  .app-header {
    @apply relative;

    // Animation for the bulb's tail
    @keyframes swing {
      0% {
        transform: translateX(-50%) rotate(0deg);
      }

      25% {
        transform: translateX(-50%) rotate(5deg);
      }

      50% {
        transform: translateX(-50%) rotate(0deg);
      }

      75% {
        transform: translateX(-50%) rotate(-5deg);
      }

      100% {
        transform: translateX(-50%) rotate(0deg);
      }
    }

    &__dark-light-wrapper {
      /* Position the wrapper fixed on screen */
      @apply fixed right-4 z-10 select-none ;

      /* Mobile positioning at bottom */
      @apply bottom-[6%];

      /* Desktop positioning at top */
      @apply sm:top-4 sm:bottom-0;

      /* Set up the icon container */
      .nuxt-icon {
        @apply relative;
        display: inline-block;
      }

      /* Create the bulb tail */
      .nuxt-icon::after {
        content: '';
        @apply absolute -bottom-3 sm:-bottom-5 left-1/2 ;
        @apply transform -translate-x-1/2;
        @apply w-0.5 h-4 sm:h-6 bg-white rounded-b-md;
        transform: translateX(-50%);
        transform-origin: top center;
        /* This makes it swing from the top */
        transition: all 0.3s ease;
      }


      /* Add a new hover state for the tail */
      .nuxt-icon:hover::after {
        animation: swing 1s ease-in-out infinite;
      }

      /* Style the bulb icon itself */
      .nuxt-icon svg {
        /* Base size and colors */
        @apply relative;
        @apply w-10 h-10 dark:text-white text-primary;;

        /* Larger on desktop */
        @apply sm:w-12 sm:h-12;
      }

      /* Hover effect */
      .nuxt-icon svg:hover {
        @apply cursor-pointer dark:!text-yellow-400 !text-amber-600;
      }
    }
  }

  .app-main {
    @apply flex-1 w-full relative;

    .content-container {
      @apply xl:w-10/12 lg:w-5/6 md:w-5/6 sm:w-5/6 w-11/12 mx-auto;

      .content-grid {
        @apply flex flex-col gap-x-20 lg:grid lg:grid-cols-12 min-h-screen;

        aside {
          @apply col-span-5 xl:col-span-4 lg:sticky lg:top-10 h-fit z-40;
        }

        article {
          @apply col-span-7;
        }
      }
    }
  }
}
</style>
