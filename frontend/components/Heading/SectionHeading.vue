<script setup lang="ts">
type IProps = {
  primaryTextTranslationKey: string
  secondaryTextTranslationKey: string
}

defineProps<IProps>()
</script>

<template>
  <h1
    dir="auto"
    class="section-heading"
  >
    <span class="dark:text-white text-gray uppercase">{{ $t(primaryTextTranslationKey) }}</span>
    <span class="dark:text-soft-gray text-black uppercase">{{ $t(secondaryTextTranslationKey) }}</span>
  </h1>
</template>

<style scoped lang="scss">
.section-heading {
    @apply text-5xl sm:text-6xl md:text-7xl font-bold flex flex-col items-center lg:items-start text-center lg:text-start;
}
</style>
