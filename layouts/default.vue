<template>
  <div class="layout">
    <!-- Header/Navbar -->
    <header>
      <NavBar />
    </header>

    <!-- Main -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer></footer>
  </div>
</template>

<style lang="scss">
.layout {
  @apply w-full min-h-full h-full dark:bg-theme-dark bg-theme-light;

  main {
    @apply h-auto lg:w-4/5 mx-auto border-red-50 border-x-2;
  }
}
</style>
