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
          <aside></aside>

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
      @apply xl:w-4/5 lg:w-5/6 md:w-5/6 sm:w-5/6 w-11/12 mx-auto
    }
  }
}
</style>
