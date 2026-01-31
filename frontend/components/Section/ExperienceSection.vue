<script setup lang="ts">
// Components
import ExperienceCard from '~/components/Card/ExperienceCard.vue'
import SectionHeading from '~/components/Heading/SectionHeading.vue'

// Types
import type { Experience } from '~/libs/App/types/sanity.types'

// Utils
const { locale } = useI18n()

// Layout
const query = computed(() => groq`*[_type == "experience" && language == $lang] | order(startDate desc)`)

// Data fetching
const { data: experienceItemsData } = await useAsyncData(
  `experience-${locale.value}`,
  () => useSanityQuery<Experience[]>(query.value, { lang: locale.value }).then(res => res.data.value)
)
</script>

<template>
  <section>
    <SectionHeading
      primary-text-translation-key="experienceSection.heading.primary"
      secondary-text-translation-key="experienceSection.heading.secondary"
    />

    <ExperienceCard
      v-for="experience in experienceItemsData"
      :key="experience._id"
      :experience="experience"
    />
  </section>
</template>

<style scoped lang="scss">
section {
  @apply flex flex-col gap-y-5;
}
</style>