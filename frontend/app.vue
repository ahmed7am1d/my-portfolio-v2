<script setup lang="ts">
// Functions
import { useLocaleSettings } from '~/libs/App/functions/useLocaleSettings'

// Utils
const { locale } = useI18n()
const { dir, fontFamily } = useLocaleSettings()

useHead(() => ({
  htmlAttrs: {
    lang: locale.value,
    dir: dir.value,
  },
  bodyAttrs: {
    class: dir.value === 'rtl' ? 'font-arabic' : 'font-default',
  },
}))
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
