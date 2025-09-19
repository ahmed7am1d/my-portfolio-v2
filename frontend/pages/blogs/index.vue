<script setup lang="ts">
// Components
import BlogsSection from '~/components/Section/BlogsSection.vue'

// Utils
const { t } = useI18n()

useSeoMeta({
  title: t('seo.pages.blogs.title'),
  description: t('seo.pages.blogs.description'),
  author: t('seo.site.author'),

  // Open graph (Social media)
  ogTitle: t('seo.pages.blogs.ogTitle'),
  ogDescription: t('seo.pages.blogs.ogDescription'),
})
</script>

<template>
  <BlogsSection />
</template>
