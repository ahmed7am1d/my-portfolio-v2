<script setup lang="ts">
// Components
import HeroSection from '~/components/Section/HeroSection.vue';
import ExperienceSection from '~/components/Section/ExperienceSection.vue';
import ProjectsSection from '~/components/Section/ProjectsSection.vue';
import BlogsSection from '~/components/Section/BlogsSection.vue';
</script>

<template>
    <div class="home-container">
        <!-- Hero -->
        <HeroSection />

        <!-- Expereince -->
        <ExperienceSection class="pt-32"/>

        <!-- Projects -->
        <ProjectsSection class="pt-32"/>

        <!-- Tools I use -->

        <!-- Blogs -->
         <BlogsSection class="pt-32"/>

        <!-- Contact Form -->
    </div>
</template>