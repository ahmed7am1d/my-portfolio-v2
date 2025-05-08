<script setup lang="ts">
// Types
import type { Experience } from '~/libs/App/types/sanity.types';

type IProp = {
  experience: Experience
}

defineProps<IProp>()

// Utils
const { locale } = useI18n()
</script>

<template>
  <div dir="auto" class="experience-card">
    <!-- Details (Title + Description) -->
    <div class="experience-card__details">
      <!-- Title -->
      <h3>{{ experience.title }}</h3>

      <!-- Description -->
      <p>{{ experience.description }}</p>
    </div>

    <!-- Duration -->
    <p>{{ experience.startDate }} {{ experience.endDate ? ` | ${experience.endDate}` : ' | Current'  }}</p>

    <!-- Arrow -->
    <NuxtLink :to="experience.url" rel="noopener" target="_blank" :class="['arrow-nav', locale === 'ar-IQ' ? 'left-0' : 'right-0']">
      <spna>➤</spna>
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.experience-card{
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
    @apply absolute text-primary  -rotate-45 hover:cursor-pointer;
  }
}
</style>
