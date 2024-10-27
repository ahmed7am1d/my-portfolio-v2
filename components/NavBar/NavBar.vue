<script setup lang="ts">
// Layout
const navigationItems = computed(() => [
    // Home
    {
        id: 'home',
        iconPath: 'home',
        to: '',
    },

    // Experience | work
    {
        id: 'experience',
        iconPath: 'briefcase',
        to: '',
    },

    // Folder
    {
        id: 'projects',
        iconPath: 'folder',
        to: '',
    },

    // Tools
    {
        id: 'tools',
        iconPath: 'tool',
        to: '',
    },

    // Blogs
    {
        id: 'blog',
        iconPath: 'edit',
        to: '',
    },
])
</script>

<template>
    <nav>
        <ol>
            <li v-for="navItem in navigationItems">
                <nuxt-icon :name="navItem.iconPath" filled />
            </li>
        </ol>
    </nav>
</template>

<style lang="scss">
nav {
    @apply flex justify-center w-full;

    ol {
        @apply flex flex-row items-center gap-x-8 h-12 px-5 text-white rounded-2xl bg-[#FFFFFF]/[0.03] mt-10;

        .nuxt-icon svg {
            @apply w-5 h-5 dark:text-white text-black;
        }
    }
}
</style>
