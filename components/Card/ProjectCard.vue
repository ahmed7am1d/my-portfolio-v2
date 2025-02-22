<script setup lang="ts">
type IProp = {
    imageLocation: string
    projectTitle: string
    projectDescription: string
}

defineProps<IProp>()
</script>

<template>
    <div class="project-card">
        <div class="project-card__image-container">
            <NuxtImg :src="imageLocation" />
        </div>

        <div class="project-card__about-container">
            <h3>{{ projectTitle }}</h3>
            <p>{{ projectDescription }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.project-card {
    @apply flex flex-row items-center gap-x-5 h-36;

    &__image-container {
        @apply h-fit w-fit border-primary border;

        img {
            @apply min-h-44 max-h-48 min-w-20 max-w-36 object-cover;
        }
    }

    &__about-container {
        @apply flex flex-col justify-center overflow-hidden;

        h3 {
            @apply dark:text-white text-black text-3xl
                   truncate; // Truncate for long titles
        }

        p {
            @apply text-gray text-lg
                   line-clamp-3; // 3 lines only
        }
    }
}
</style>
