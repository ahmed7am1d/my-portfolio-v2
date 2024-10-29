<script setup lang="ts">
// Layout
const navigationItems = computed(() => [
    // Home
    {
        id: 'home',
        iconPath: 'home',
        textToDisplay: 'Home',
        to: '',
    },

    // Folder
    {
        id: 'projects',
        iconPath: 'folder',
        textToDisplay: 'Projects',
        to: '',
    },

    // Blogs
    {
        id: 'blog',
        iconPath: 'edit',
        textToDisplay: 'Blogs',
        to: '',
    },

    // Experience | work
    {
        id: 'experience',
        iconPath: 'briefcase',
        textToDisplay: 'Experience',
        to: '',
    },

    // Tools
    {
        id: 'tools',
        iconPath: 'tool',
        textToDisplay: 'Tools',
        to: '',
    },
])
</script>

<template>
    <nav aria-label="Main navigation">
        <ul role="menubar">
            <li v-for="navItem in navigationItems" :key="navItem.id" role="none">
                <NuxtLink :to="navItem.to" role="menuitem" :aria-label="navItem.textToDisplay">
                    <nuxt-icon :name="navItem.iconPath" filled :aria-hidden="true" />

                    <span class="nav-item-tooltip" role="tooltip"> {{ navItem.textToDisplay }} </span>
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
nav {
    @apply flex justify-center w-full;

    ul {
        @apply flex flex-row items-center gap-x-10 h-12 px-5 text-white rounded-2xl dark:bg-nav-dark bg-nav-light my-10;

        li {
            @apply relative hover:cursor-pointer;

            .nuxt-icon svg {
                @apply w-5 h-5 dark:text-white text-black;
            }

            .nav-item-tooltip {
                @apply invisible opacity-0 absolute w-fit rounded-lg dark:bg-nav-item-tooltip-dark bg-nav-item-tooltip-light px-2 text-center -translate-x-1/2 left-1/2 bottom-0 transition-all duration-500 ease-in-out;
            }

            &:hover {
                .nav-item-tooltip {
                    @apply visible opacity-100 -bottom-10;
                }

                .nuxt-icon svg {
                    @apply text-primary;
                }
            }
        }
    }
}
</style>
