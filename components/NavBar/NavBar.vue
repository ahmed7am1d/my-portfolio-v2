<script setup lang="ts">
/* __placeholder__ */
import type { INavigationItem } from './types/navbar.type';

// Layout
const navigationItems = computed<INavigationItem[]>(() => [
    // Home
    {
        id: 'home',
        iconPath: 'home',
        textToDisplay: 'Home',
        translationKey:'nav.home',
        translationKeyPosition: 1,
        to: '',
    },

    // Projects
    {
        id: 'projects',
        iconPath: 'folder',
        textToDisplay: 'Projects',
        translationKey: 'nav.project',
        translationKeyPosition: 2,
        to: '',
    },

    // Blogs
    {
        id: 'blog',
        iconPath: 'edit',
        textToDisplay: 'Blogs',
        translationKey: 'nav.blog',
        translationKeyPosition: 2,
        to: '',
    },

    // Experience | work
    {
        id: 'experience',
        iconPath: 'briefcase',
        textToDisplay: 'Experience',
        translationKey: 'nav.experience',
        translationKeyPosition: 1,
        to: '',
    },

    // Tools
    {
        id: 'tools',
        iconPath: 'tool',
        textToDisplay: 'Tools',
        translationKey: 'nav.tool',
        translationKeyPosition: 2,
        to: '',
    },
])
</script>

<template>
    <nav aria-label="Main navigation">
        <ul role="menubar">
            <li v-for="navItem in navigationItems" :key="navItem.id" role="none">
                <NuxtLink :to="navItem.to" role="menuitem" :aria-label="$t(navItem.translationKey)">
                    <nuxt-icon :name="navItem.iconPath" filled :aria-hidden="true" />

                    <span class="nav-item-tooltip" role="tooltip"> {{ $t(navItem.translationKey, navItem.translationKeyPosition) }} </span>
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
