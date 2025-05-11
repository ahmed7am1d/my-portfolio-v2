<script setup lang="ts">
// Types
import type { Project } from '~/libs/App/types/sanity.types';

type IProp = {
    project: Project
}

defineProps<IProp>()
// Utils
const { locale } = useI18n()
</script>

<template>
    <div class="project-card">
        <div class="project-card__image-container">
            <SanityImage :asset-id="project.image?.asset?._ref" auto="format" />
        </div>

        <div class="project-card__about-container">
            <h3>{{ project.title }}</h3>

            <p>{{ project.description }}</p>
        </div>

        <!-- Arrow -->
        <NuxtLink :to="project.projectLink" rel="noopener" target="_blank"
            :class="['arrow-nav', locale === 'ar-IQ' ? 'left-0' : 'right-0']">
            <span>➤</span>
        </NuxtLink>
    </div>
</template>

<style scoped lang="scss">
.project-card {
    @apply flex flex-row items-center gap-x-5 h-36 relative;

    &__image-container {
        @apply h-fit w-fit border-primary border rounded-md;

        img {
            @apply min-h-40 max-h-44 min-w-20 max-w-36 object-cover pt-2 px-2 bg-primary;
        }
    }

    &__about-container {
        @apply flex flex-col justify-center overflow-hidden;

        h3 {
            @apply dark:text-white text-black text-3xl truncate; // Truncate for long titles
        }

        p {
            @apply text-gray text-lg line-clamp-3; // 3 lines only
        }
    }

    .arrow-nav {
        @apply absolute text-primary -rotate-45 hover:cursor-pointer top-0;
    }
}
</style>
