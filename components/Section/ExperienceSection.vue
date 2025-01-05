<script setup lang="ts">
// Components
import SectionHeading from '~/components/Heading/SectionHeading.vue';
import JobCard from '~/components/Card/JobCard.vue';

// Layout
const jobItems = [
    {
        jobTitle: 'Software Engineer',
        jobDescription: 'Developed and maintained web applications and used DevOps tools to deploy applications on AWS and Azure.',
        jobDuration: '2019 - 2021',
    },
    {
        jobTitle: 'Software Engineer',
        jobDescription: 'Developed and maintained web applications and used DevOps tools to deploy applications on AWS and Azure.',
        jobDuration: '2019 - 2021',
    },
    {
        jobTitle: 'Software Engineer',
        jobDescription: 'Developed and maintained web applications and used DevOps tools to deploy applications on AWS and Azure.',
        jobDuration: '2019 - 2021',
    },
];

</script>

<template>
    <section>
        <!-- Heading -->
        <SectionHeading primary-text-translation-key="experienceSection.heading.primary"
            secondary-text-translation-key="experienceSection.heading.secondary" />

        <!-- Job card -->
        <JobCard v-for="job in jobItems"
            :job-title="job.jobTitle"
            :job-description="job.jobDescription"
            :job-duration="job.jobDuration"
        />
    </section>
</template>

<style scoped lang="scss">
section {
    @apply flex flex-col gap-y-5;
}
</style>
