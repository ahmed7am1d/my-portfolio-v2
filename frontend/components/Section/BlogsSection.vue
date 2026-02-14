<script setup lang="ts">
// Types
import type { Blog } from '~/libs/App/types/sanity.types'
// Components
import BlogCard from '~/components/Card/BlogCard.vue'

import SectionHeading from '~/components/Heading/SectionHeading.vue'

// Utils
const { locale } = useI18n()

// Layout
const query = computed(() =>
  groq`*[_type == "blog" && language == $lang] | order(dateTime(publishedAt) desc)`,
)

// Data fetching
const { data: blogItemsData } = await useAsyncData(
  `blogs-${locale.value}`,
  () => useSanityQuery<Blog[]>(query.value, { lang: locale.value }).then(res => res.data.value),
)
</script>

<template>
  <section>
    <SectionHeading
      primary-text-translation-key="blogsSection.heading.primary"
      secondary-text-translation-key="blogsSection.heading.secondary"
    />

    <BlogCard
      v-for="blog in blogItemsData"
      :key="blog._id"
      :blog="blog"
    />
  </section>
</template>

<style scoped lang="scss">
section {
  @apply flex flex-col gap-y-16;
}
</style>
