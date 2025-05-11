<script setup lang="ts">
// Types
import type { Blog } from '~/libs/App/types/sanity.types';

// Components
import SectionHeading from '~/components/Heading/SectionHeading.vue';
import BlogCard from '~/components/Card/BlogCard.vue';

// Utils
const { locale } = useI18n()

// Layout
const blogItemsData = ref<Blog[]>()
const blogItems = [
    {
        blogTitle: 'First blog',
        blogShortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        blogTimePosted: '2 days ago',
        blogTimeToRead: '5 min read',
    },
    {
        blogTitle: 'Second blog',
        blogShortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        blogTimePosted: '3 days ago',
        blogTimeToRead: '7 min read',
    },
    {
        blogTitle: 'Third blog',
        blogShortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        blogTimePosted: '4 days ago',
        blogTimeToRead: '10 min read',
    },
]

// Data fetching and setting
const query = groq`*[_type == "blog" && language == "${locale.value}"]`

try {
  const { data, refresh, error } = await useSanityQuery<any[]>(query)
  console.log('Data fetched:', data.value)
  blogItemsData.value = data.value || []
} catch (error) {
  console.error('Error fetching data:', error)
}

</script>

<template>
  <section>
    <!-- Heading -->
    <SectionHeading primary-text-translation-key="blogsSection.heading.primary"
      secondary-text-translation-key="blogsSection.heading.secondary" />

    <!-- Blog card -->
    <BlogCard
      v-for="blog in blogItemsData"
      :blog="blog"/>
  </section>
</template>

<style scoped lang="scss">
section {
    @apply flex flex-col gap-y-16;
}
</style>
