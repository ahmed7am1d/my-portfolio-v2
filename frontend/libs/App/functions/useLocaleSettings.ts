// composables/useLocaleSettings.ts
export function useLocaleSettings() {
    const { locale } = useI18n()

    const isRtl = computed(() => ['ar', 'ar-IQ', 'ar-SA', 'ar-EG'].includes(locale.value))

    const fontFamily = computed(() =>
      isRtl.value ? 'notokufiarabic, sans-serif' : 'Poppins, sans-serif'
    )

    const dir = computed(() => isRtl.value ? 'rtl' : 'ltr')

    return {
      isRtl,
      fontFamily,
      dir
    }
  }