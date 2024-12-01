<script setup lang="ts">
const colorMode = useColorMode()
const { setLocale } = useI18n()

</script>

<template>
  <div class="app-layout">
    <!-- Header/Navbar -->
    <header class="app-header" role="banner">
      <NavBar />
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
          <section>
            <slot />
          </section>

          <!-- Dark mode (just testing) -->
          <div class="col-span-5">
            <h1 class="dark:text-white">Color mode: {{ colorMode.value }} (bad design I know 😁)</h1>
            <select v-model="$colorMode.preference">
              <option value="system">System</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="sepia">Sepia</option>
            </select>
          </div>

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

  .app-main {
    @apply flex-1 w-full;

    .content-container {
      @apply xl:w-10/12 lg:w-5/6 md:w-5/6 sm:w-5/6 w-11/12 mx-auto;

      .content-grid {
        @apply flex flex-col gap-x-20 lg:grid lg:grid-cols-12;

        aside {
          @apply col-span-5 xl:col-span-4
        }

        section {
          @apply col-span-7
        }
      }
    }
  }
}
</style>
