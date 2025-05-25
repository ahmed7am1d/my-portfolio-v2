<script setup lang="ts">
// Types
import type { Experience } from '~/libs/App/types/sanity.types'

// Components
import SectionHeading from '~/components/Heading/SectionHeading.vue'
import ExperienceCard from '~/components/Card/ExperienceCard.vue'

// Utils
const { locale } = useI18n()

// Layout
const experienceItemsData = ref<Experience[]>()

// Data fetching and setting
const query = groq`*[_type == "experience" && language == "${locale.value}"] | order(startDate desc)`

try {
  const { data } = await useSanityQuery<Experience[]>(query)
  experienceItemsData.value = data.value || []
}
catch (error) {
  console.error('Error fetching data:', error)
}
</script>

<template>
  <section>
    <!-- Heading -->
    <SectionHeading
      primary-text-translation-key="experienceSection.heading.primary"
      secondary-text-translation-key="experienceSection.heading.secondary"
    />

    <!-- Job card -->
    <ExperienceCard
      v-for="experience in experienceItemsData"
      v-if="experienceItemsData"
      :experience="experience"
    />
  </section>
</template>

<style scoped lang="scss">
section {
  @apply flex flex-col gap-y-5;
}
</style>
