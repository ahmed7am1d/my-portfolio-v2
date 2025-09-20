<script setup lang="ts">
// Components
import ProjectsSection from '~/components/Section/ProjectsSection.vue'

// Utils
const { t } = useI18n()

useSeoMeta({
  title: t('seo.pages.projects.title'),
  description: t('seo.pages.projects.description'),
  author: t('seo.site.author'),

  // Open graph (Social media)
  ogTitle: t('seo.pages.projects.ogTitle'),
  ogDescription: t('seo.pages.projects.ogDescription'),
})
</script>

<template>
  <ProjectsSection />
</template>
