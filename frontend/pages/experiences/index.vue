<script setup lang="ts">
// Components
import ExperienceSection from '~/components/Section/ExperienceSection.vue'

// Utils
const { t } = useI18n()

useSeoMeta({
  title: t('seo.pages.experience.title'),
  description: t('seo.pages.experience.description'),
  author: t('seo.site.author'),

  // Open graph (Social media)
  ogTitle: t('seo.pages.experience.ogTitle'),
  ogDescription: t('seo.pages.experience.ogDescription'),
})
</script>

<template>
  <ExperienceSection />
</template>
