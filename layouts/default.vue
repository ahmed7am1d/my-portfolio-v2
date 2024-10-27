<template>
  <div class="layout">
    <NavBar />

    <slot />
  </div>
</template>

<style lang="scss">

.layout {
  @apply w-full min-h-full h-full dark:bg-theme-dark bg-theme-light;
}
</style>
