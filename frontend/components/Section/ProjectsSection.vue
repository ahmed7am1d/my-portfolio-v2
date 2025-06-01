<script setup lang="ts">
// Types
import type { Project } from '~/libs/App/types/sanity.types'

// Components
import ProjectCard from '~/components/Card/ProjectCard.vue'
import SectionHeading from '~/components/Heading/SectionHeading.vue'

// Utils
const { locale } = useI18n()

// Layout
const projectItemsData = ref<Project[]>()

// Data fetching and setting
const query = groq`*[_type == "project" && language == "${locale.value}"]`

try {
  const { data } = await useSanityQuery<Project[]>(query)
  projectItemsData.value = data.value || []
}
catch (error) {
  console.error('Error fetching data:', error)
}
</script>

<template>
  <section>
    <!-- Heading -->
    <SectionHeading
      primary-text-translation-key="projectsSection.heading.primary"
      secondary-text-translation-key="projectsSection.heading.secondary"
    />

    <!-- Project card -->
    <ProjectCard
      v-for="project in projectItemsData"
      v-if="projectItemsData"
      :project="project"
    />
  </section>
</template>

<style scoped lang="scss">
section {
  @apply flex flex-col gap-y-16;
}
</style>
