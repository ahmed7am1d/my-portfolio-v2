<script setup lang="ts">
type IProps = {
    primaryTextTranslationKey: string,
    secondaryTextTranslationKey: string,
}

const props = defineProps<IProps>();

</script>

<template>
    <h1 class="section-heading">
        <span class="dark:text-white text-gray uppercase">{{ $t(primaryTextTranslationKey) }}</span>
        <span class="dark:text-soft-gray text-black uppercase">{{ $t(secondaryTextTranslationKey) }}</span>
    </h1>
</template>

<style scoped lang="scss">
.section-heading {
    @apply text-7xl font-bold flex flex-col;
}
</style>
