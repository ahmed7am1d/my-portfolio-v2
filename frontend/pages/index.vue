<script setup lang="ts">
// Components
import BlogsSection from '~/components/Section/BlogsSection.vue'
import ExperienceSection from '~/components/Section/ExperienceSection.vue'
import HeroSection from '~/components/Section/HeroSection.vue'
import ProjectsSection from '~/components/Section/ProjectsSection.vue'

// Utils
const { t } = useI18n()

useSeoMeta({
  title: t('seo.pages.home.title'),
  description: t('seo.pages.home.description'),
  author: t('seo.site.author'),

  // Open graph (Social media)
  ogTitle: t('seo.pages.home.ogTitle'),
  ogDescription: t('seo.pages.home.ogDescription'),
})
</script>

<template>
  <div class="home-container">
    <!-- Hero -->
    <HeroSection />

    <!-- Expereince -->
    <ExperienceSection class="pt-32" />

    <!-- Projects -->
    <ProjectsSection class="pt-32" />

    <!-- Tools I use -->

    <!-- Blogs -->
    <BlogsSection class="pt-32" />

    <!-- Contact Form -->
  </div>
</template>
