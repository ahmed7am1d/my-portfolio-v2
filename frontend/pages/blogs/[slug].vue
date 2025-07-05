<script setup lang="ts">
// Types
import type { Blog } from '~/libs/App/types/sanity.types'

// Utils
const { locale } = useI18n()
const route = useRoute()

// Layout
const slug = route.params.slug as string
const blogDetails = ref<Blog>()

// Data fetching
const query = groq`*[_type == "blog" && slug.current == "${slug}" && language == "${locale.value}"][0]{
  _id,
  title,
  excerpt,
  content,
  publishedAt,
  readingTime,
  slug,
  language,
  author->{
    name,
    bio,
    image
  },
  mainImage{
    asset->{
      url,
      alt
    }
  },
  categories[]->{
    title,
    slug
  }
}`

try {
  const { data } = await useSanityQuery<Blog>(query)
  blogDetails.value = data.value || undefined
  console.log('blog details: ', data)
}
catch (error) {
  console.error('Error fetching data:', error)
}
</script>

<template>
  <div>
    {{ blogDetails?.title }}
  </div>
</template>
