<script setup lang="ts">

</script>

<template>
    <section>
        <!-- Info -->
        <div class="hero-info">
            <h1 class="hero-info__heading">
                <span class="dark:text-white text-gray">SOFTWARE</span>
                <span class="dark:text-soft-gray text-black">ENGINEER</span>
            </h1>

            <p class="hero-info__about">
                Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into
                beautifully crafted products.
            </p>
        </div>

        <!-- Stats -->
        <div class="hero-stats"></div>

        <!-- Additional info -->
        <div class="hero-additional"></div>
    </section>
</template>

<style scoped lang="scss">
.hero-info {
    @apply flex flex-col gap-y-10;

    &__heading {
        @apply text-7xl font-bold flex flex-col;
    }

    &__about {
        @apply max-w-md text-gray;
    }
}
</style>
