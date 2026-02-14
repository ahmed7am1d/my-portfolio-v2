<script setup lang="ts">
// Types
import type { BlogDetailQueryResponse } from '~/libs/Blogs/types/api.types'

// Components
import ProfileCard from '~/components/Card/ProfileCard.vue'

// Utils
const route = useRoute()
const { locale } = useI18n()
const setI18nParams = useSetI18nParams()

// Layout
const slug = computed(() => route.params.slug as string)
const blogDetails = computed(() => queryResult.value?.blog)
const localeVersions = computed(() => queryResult.value?.localeVersions || [])

const components = {
  types: {
    // Image - props.value contains the data now
    image: (props: any) => {
      const { _key, alt, url, height, width, caption } = props.value

      if (!url) {
        console.error('Image value is null/undefined', props.value)
        return h('div', { class: 'error' }, 'Image data missing')
      }

      return h('img', {
        key: _key,
        src: url,
        alt: alt || caption || 'Image',
        width,
        height,
        loading: 'lazy',
        class: 'my-4 rounded-lg w-full',
      })
    },

    // Code block
    code: (props: any) => {
      const { language, code } = props.value

      let lang = language
      if (language === 'batchfile') {
        lang = 'batch'
      }

      return h(resolveComponent('Shiki'), {
        code,
        lang,
        theme: 'dark-plus',
      })
    },
  },
}

// Queries and data fetching
const query = groq`{
  "blog": *[_type == "blog" && slug.current == $slug && language == $lang][0]{
    _id,
    title,
    sharedId,
    excerpt,
    content[]{
      ...,
      // Expand image blocks and extract URL to top level
      _type == "image" => {
        ...,
        asset->{
          _id,
          altText,
          originalFilename,
          metadata {
            dimensions {
              width,
              height,
              aspectRatio
            },
            lqip,
            blurHash
          }
        },
        // Extract URL outside of asset for SanityContent
        "url": asset->url,
        "width": asset->metadata.dimensions.width,
        "height": asset->metadata.dimensions.height
      },
      // Handle other block types normally
      _type == "block" => {
        ...,
        children[]{
          ...,
          // Expand any inline images in marks if you have them
          _type == "image" => {
            ...,
            asset->{
              altText
            },
            "url": asset->url
          }
        }
      }
    },
    publishedAt,
    readingTime,
    slug,
    language,
    author->{
      name,
      bio,
      image{
        asset->{
          url,
          altText,
          metadata {
            dimensions {
              width,
              height
            }
          }
        }
      }
    },
    mainImage{
      asset->{
        url,
        altText,
        metadata {
          dimensions {
            width,
            height
          },
          lqip
        }
      },
      alt,
      hotspot,
      crop
    },
    categories[]->{
      _id,
      title,
      slug
    }
  },
  "localeVersions": *[_type == "blog" && sharedId == *[_type == "blog" && slug.current == $slug && language == $lang][0].sharedId]{
    language,
    "slug": slug.current,
    sharedId
  }
}`

const { data: queryResult, status, error, refresh } = await useSanityQuery<BlogDetailQueryResponse>(query, ({
  slug: slug.value,
  lang: locale.value,
}))

// Functions
function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-CA')
}

setI18nParams({
  'en-US': { slug: localeVersions.value.find(lv => lv.language === 'en-US')?.slug },
  'ar-IQ': { slug: localeVersions.value.find(lv => lv.language === 'ar-IQ')?.slug },
})

definePageMeta({
  layout: false,
})

useSeoMeta({
  title: () => blogDetails.value?.title || 'Blog',
  description: () => blogDetails.value?.excerpt || 'Blog details page',
})
</script>

<template>
  <NuxtLayout name="default">
    <template #aside>
      <aside>
        <ProfileCard />
      </aside>
    </template>

    <div class="blog-details-page-wrapper">
      <div
        v-if="status === 'success'"
        class="dark:color-white"
      >
        <!-- Image -->
        <NuxtImg
          :src="blogDetails?.mainImage?.asset?.url"
          sizes="100vw"
        />

        <!-- Blog info -->
        <div class="blog-details-page-wrapper__blog-info">
          <!-- Date of posting -->
          <p>{{ formatDate(blogDetails?.publishedAt!) }}</p>

          <!-- Time to read -->
          <p>{{ blogDetails?.readingTime }} {{ $t('blogCard.minRead') }}</p>
        </div>

        <!-- Header (Title) -->
        <h1>
          {{ blogDetails?.title }}
        </h1>

        <!-- Content -->
        <div class="blog-details-page-wrapper__content">
          <SanityContent
            :value="blogDetails?.content"
            :components="components"
          />
        </div>
      </div>

      <div v-else-if="status === 'pending'">
        Loading...
      </div>

      <div v-else-if="status === 'error'">
        Error loading blog post
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">
aside {
  @apply hidden lg:block;
}

.blog-details-page-wrapper {
  @apply dark:text-white;

  img {
    @apply mt-4 lg:mt-0;
  }

  // Date and reading time
  &__blog-info {
    @apply flex justify-between items-center text-gray text-lg mt-4;
  }

  // Header (Title)
  h1 {
    @apply mb-4;
  }

  // Content
  .blog-details-page-wrapper__content {
    // Headings
    :deep(h2),
    :deep(h3),
    :deep(h4) {
      @apply mb-4 mt-6;
    }

    :deep(p) {
      @apply text-gray text-lg;
    }

    // Ordered and unordered lists
    :deep(ol),
    :deep(ul) {
      @apply pl-5 pt-3 text-gray marker:text-primary;

      li {
        @apply mb-2;
      }
    }

    :deep(ol) {
      list-style: decimal inside;
    }

    :deep(ul) {
      list-style: square inside;
    }
  }
}
</style>
