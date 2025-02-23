<script setup lang="ts">
// Components
import SectionHeading from '~/components/Heading/SectionHeading.vue';
import BlogCard from '~/components/Card/BlogCard.vue';

// Layout
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

</script>

<template>
  <section>
    <!-- Heading -->
    <SectionHeading primary-text-translation-key="blogsSection.heading.primary"
      secondary-text-translation-key="blogsSection.heading.secondary" />

    <!-- Blog card -->
    <BlogCard v-for="blog in blogItems"
      :blog-title="blog.blogTitle"
      :blog-short-description="blog.blogShortDescription"
      :blog-time-posted="blog.blogTimePosted"
      :blog-time-to-read="blog.blogTimeToRead"/>
  </section>
</template>

<style scoped lang="scss">
section {
    @apply flex flex-col gap-y-16;
}
</style>
