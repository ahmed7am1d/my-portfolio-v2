<script setup lang="ts">
// Components
import SectionHeading from '~/components/Heading/SectionHeading.vue';
</script>

<template>
    <section class="flex flex-col gap-y-5">
        <!-- Heading -->
        <SectionHeading primary-text-translation-key="experienceSection.heading.primary"
            secondary-text-translation-key="experienceSection.heading.secondary" />
        <!-- Job card -->
        <div class="job-card">
            <h3>Backstage technology</h3>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem a adipisci aliquid voluptatibus
                voluptatum quibusdam facere ullam corrupti! In obcaecati minus eveniet voluptatibus, qui dolores?
                Officiis commodi sapiente voluptas! Numquam.</p>

            <p>Jan 2020 - Present</p>
        </div>
    </section>
</template>

<style scoped lang="scss">
.job-card {
    @apply flex flex-col gap-y-5;

    h3 {
        @apply dark:text-white text-black text-3xl;
    }

    p {
        @apply text-gray;
    }
}
</style>
