<script setup lang="ts">
// Components
import SectionHeading from '~/components/Heading/SectionHeading.vue';
import ProjectCard from '~/components/Card/ProjectCard.vue';

// Layout 
const projectItems = [
    {
        imageLocation: '/todo-project.png',
        projectTitle: 'First project',
        projectDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eaque repudiandae laudantium? Sequi possimus corporis quos dignissimos distinctio velit, omnis consequuntur accusantium, deserunt harum asperiores quo! Fugit debitis necessitatibus nam?',
    },
    {
        imageLocation: '/todo-project.png',
        projectTitle: 'Second project',
        projectDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eaque repudiandae laudantium? Sequi possimus corporis quos dignissimos distinctio velit, omnis consequuntur accusantium, deserunt harum asperiores quo! Fugit debitis necessitatibus nam?',
    },
    {
        imageLocation: '/todo-project.png',
        projectTitle: 'Third project',
        projectDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eaque repudiandae laudantium? Sequi possimus corporis quos dignissimos distinctio velit, omnis consequuntur accusantium, deserunt harum asperiores quo! Fugit debitis necessitatibus nam?',
    },
]

</script>

<template>
    <section>
        <!-- Heading -->
        <SectionHeading primary-text-translation-key="projectsSection.heading.primary"
            secondary-text-translation-key="projectsSection.heading.secondary" />

        <!-- Project card -->
         <ProjectCard v-for="project in projectItems"
            :image-location="project.imageLocation"
            :project-title="project.projectTitle"
            v-bind:project-description="project.projectDescription"
         />
    </section>
</template>

<style scoped lang="scss">
section {
    @apply flex flex-col gap-y-5;
}
</style>
