<script setup lang="ts">
// Components
import SectionHeading from '~/components/Heading/SectionHeading.vue';

</script>

<template>
    <section>
        <!-- Info -->
        <div class="hero-info">
            <SectionHeading 
                primary-text-translation-key="heroSection.heading.software"
                secondary-text-translation-key="heroSection.heading.engineer" />

            <p class="hero-info__about">
                {{ $t('heroSection.bio') }}
            </p>
        </div>

        <!-- Stats -->
        <div class="hero-stats">
            <div>
                <span>+99</span>
                <p>YEARS OF EXPEREINCE</p>
            </div>

            <div>
                <span>+99</span>
                <p>PROJECTS COMPLETED</p>
            </div>

            <div>
                <span>+99</span>
                <p>WORLDWIDE CLIENTS</p>
            </div>

        </div>

        <!-- Additional info -->
        <div class="hero-additional"></div>
    </section>
</template>

<style scoped lang="scss">
.hero-info {
    @apply flex flex-col gap-y-10;

    &__about {
        @apply max-w-md text-gray;
    }
}

.hero-stats {
    @apply flex flex-row gap-x-10 w-full mt-12;

    span {
        @apply text-black dark:text-white text-7xl font-bold;
    }

    p {
        @apply text-gray w-1/2;
    }
}
</style>
