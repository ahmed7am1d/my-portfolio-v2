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
