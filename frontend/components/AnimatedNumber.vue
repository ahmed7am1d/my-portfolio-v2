<script setup lang="ts">
type IProps = {
  /**
   * Value can be English/Arabic number with/without + (7+, ٧+)
   */
  value: string | number
  duration?: number
}

const props = withDefaults(defineProps<IProps>(), {
  duration: 2000,
})

// Layout
const el = ref()
const displayValue = ref(0)

const { number: targetValue, suffix, originalString } = parseValue(props.value)

const usesArabicNumerals = /[٠-٩]/.test(originalString || '')

// Functions
function parseValue(val: string | number) {
  if (typeof val === 'number')
    return { number: val, suffix: '' }

  // Convert Arabic numerals to Western numerals for parsing
  const convertArabicNumerals = (str: string) => {
    const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']
    const westernNumerals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    let converted = str
    arabicNumerals.forEach((arabic, index) => {
      converted = converted.replace(new RegExp(arabic, 'g'), westernNumerals[index])
    })

    return converted
  }

  const converted = convertArabicNumerals(val.toString())
  const matches = converted.match(/(\d+)(.*)/)
  return {
    number: matches ? Number.parseInt(matches[1]) : 0,
    suffix: matches ? matches[2] : '',
    originalString: val.toString(),
  }
}

function formatNumber(num: number) {
  if (!usesArabicNumerals)
    return num.toString()

  const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']
  return num.toString().replace(/\d/g, digit => arabicNumerals[Number.parseInt(digit)])
}

function animateNumber() {
  if (!import.meta.client)
    return

  const startTime = performance.now()

  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / props.duration, 1)

    // Ease out animation
    const easeProgress = 1 - (1 - progress) ** 3
    const currentValue = Math.floor(targetValue * easeProgress)

    // Update the DOM directly with formatted number
    el.value.textContent = `${formatNumber(currentValue)}${suffix}`

    if (progress < 1) {
      requestAnimationFrame(animate)
    } else {
      el.value.textContent = `${formatNumber(targetValue)}${suffix}`
    }
  }

  requestAnimationFrame(animate)
}

onMounted(() => {
  if (!import.meta.client)
    return

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateNumber()
      observer.disconnect()
    }
  })

  observer.observe(el.value)
})
</script>

<template>
  <span ref="el">{{ displayValue }}</span>
</template>
