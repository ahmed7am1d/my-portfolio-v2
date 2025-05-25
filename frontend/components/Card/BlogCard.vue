<script setup lang="ts">
// Types
import type { Blog } from '~/libs/App/types/sanity.types'

type IProp = {
  blog: Blog
}

defineProps<IProp>()
</script>

<template>
  <div class="job-card">
    <!-- Details (Title + Description) -->
    <div class="job-card__details">
      <!-- Title -->
      <h3>{{ blog.title }}</h3>

      <!-- Description -->
      <p>{{ blog.excerpt }}</p>
    </div>

    <!-- Time posted and time to read -->
    <div class="w-full flex justify-between">
      <p>{{ blog.publishedAt }}</p>
      <p>{{ blog.readingTime }}</p>
    </div>

    <!-- Arrow -->
    <div class="arrow-nav">
      <span>➤</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.job-card {
  @apply flex flex-col gap-y-5 relative;

  &__details {
    @apply flex flex-col relative gap-y-3 max-w-[80%];
  }

  h3 {
    @apply dark:text-white text-black text-3xl;
  }

  p {
    @apply text-gray text-lg;
  }

  .arrow-nav {
    @apply absolute text-primary right-0 -rotate-45 hover:cursor-pointer;
  }
}
</style>
