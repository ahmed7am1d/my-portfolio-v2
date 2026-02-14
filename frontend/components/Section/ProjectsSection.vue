<script setup lang="ts">
// Types
import type { Project } from '~/libs/App/types/sanity.types'
// Components
import ProjectCard from '~/components/Card/ProjectCard.vue'

import SectionHeading from '~/components/Heading/SectionHeading.vue'

// Utils
const { locale } = useI18n()

// Layout
const query = computed(() => groq`*[_type == "project" && language == $lang]`)

// Data fetching
const { data: projectItemsData } = await useAsyncData(
  `projects-${locale.value}`,
  () => useSanityQuery<Project[]>(query.value, { lang: locale.value }).then(res => res.data.value),
)
</script>

<template>
  <section>
    <SectionHeading
      primary-text-translation-key="projectsSection.heading.primary"
      secondary-text-translation-key="projectsSection.heading.secondary"
    />

    <ProjectCard
      v-for="project in projectItemsData"
      :key="project._id"
      :project="project"
    />
  </section>
</template>

<style scoped lang="scss">
section {
  @apply flex flex-col gap-y-16;
}
</style>
