<script setup lang="ts">
// Components
import SectionHeading from '~/components/Heading/SectionHeading.vue'
</script>

<template>
  <section>
    <!-- Info -->
    <div
      dir="auto"
      class="hero-info"
    >
      <SectionHeading
        primary-text-translation-key="heroSection.heading.software"
        secondary-text-translation-key="heroSection.heading.engineer"
      />

      <p class="hero-info__about">
        {{ $t('heroSection.bio') }}
      </p>
    </div>

    <!-- Stats -->
    <div
      dir="auto"
      class="hero-stats"
    >
      <div class="hero-stats__item">
        <span>{{ $t('heroSection.stats.yearsOfExp.number') }}</span>

        <p>{{ $t('heroSection.stats.yearsOfExp.title') }}</p>
      </div>

      <div class="hero-stats__item">
        <span>{{ $t('heroSection.stats.projectsCompleted.number') }}</span>

        <p>{{ $t('heroSection.stats.projectsCompleted.title') }}</p>
      </div>

      <div class="hero-stats__item">
        <span>{{ $t('heroSection.stats.worldWorldClient.number') }}</span>

        <p>{{ $t('heroSection.stats.worldWorldClient.title') }}</p>
      </div>
    </div>

    <!-- Additional info -->
    <div class="hero-additional" />
  </section>
</template>

<style scoped lang="scss">
section {
  @apply pt-10 lg:pt-0;

  .hero-info {
    @apply flex flex-col gap-y-2.5 items-center lg:items-start;

    &__about {
      @apply max-w-md text-gray text-lg items-center lg:items-start text-center lg:text-start;
    }
  }

  .hero-stats {
    @apply flex flex-row gap-x-10 w-full mt-12 justify-center lg:justify-start;

    &__item {
      @apply flex flex-col items-center lg:items-start;
    }

    span {
      @apply text-black dark:text-white text-5xl sm:text-6xl md:text-7xl font-bold;
    }

    p {
      @apply text-center lg:text-start text-gray w-full lg:w-1/2;
    }
  }
}
</style>
