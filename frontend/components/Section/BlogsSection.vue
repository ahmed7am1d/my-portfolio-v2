<script setup lang="ts">
// Types
import type { Blog } from '~/libs/App/types/sanity.types'

// Components
import BlogCard from '~/components/Card/BlogCard.vue'
import SectionHeading from '~/components/Heading/SectionHeading.vue'

// Utils
const { locale } = useI18n()

// Layout
const blogItemsData = ref<Blog[]>()

// Data fetching and setting
const query = groq`*[_type == "blog" && language == "${locale.value}"] | order(dateTime(publishedAt) desc)`

try {
  const { data } = await useSanityQuery<any[]>(query)
  blogItemsData.value = data.value || []
}
catch (error) {
  console.error('Error fetching data:', error)
}
</script>

<template>
  <section>
    <!-- Heading -->
    <SectionHeading
      primary-text-translation-key="blogsSection.heading.primary"
      secondary-text-translation-key="blogsSection.heading.secondary"
    />

    <!-- Blog card -->
    <BlogCard
      v-for="blog in blogItemsData"
      :blog="blog"
    />
  </section>
</template>

<style scoped lang="scss">
section {
  @apply flex flex-col gap-y-16;
}
</style>
