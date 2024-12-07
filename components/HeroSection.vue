<script setup lang="ts">

</script>

<template>
    <section>
        <!-- Info -->
        <div class="hero-info">
            <h1 class="hero-info__heading">
                <span class="dark:text-white text-gray uppercase">{{ $t('heroSection.heading.software') }}</span>
                <span class="dark:text-soft-gray text-black uppercase">{{ $t('heroSection.heading.engineer') }}</span>
            </h1>

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

    &__heading {
        @apply text-7xl font-bold flex flex-col;
    }

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
