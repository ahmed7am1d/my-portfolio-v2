<script setup lang="ts">
// Types 
import type { Experience } from '~/libs/App/types/sanity.types';

// Components
import SectionHeading from '~/components/Heading/SectionHeading.vue';
import JobCard from '~/components/Card/JobCard.vue';

// Utils
const { locale } = useI18n()

// Layout
const jobItemsData = ref<Experience[]>()


// Data fetching and setting
const query = groq`*[_type == "experience" && language == "${locale.value}"]`

try {
  const { data, refresh, error } = await useSanityQuery<Experience[]>(query)
  console.log('Data fetched:', data.value)
  jobItemsData.value = data.value || []
} catch (error) {
  console.error('Error fetching data:', error)
}
</script>

<template>
  <section>
    <!-- Heading -->
    <SectionHeading primary-text-translation-key="experienceSection.heading.primary"
      secondary-text-translation-key="experienceSection.heading.secondary" />

    <!-- Job card -->
    <JobCard v-if="jobItemsData" v-for="job in jobItemsData" :experience="job" />
  </section>
</template>

<style scoped lang="scss">
section {
  @apply flex flex-col gap-y-5;
}
</style>
