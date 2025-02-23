<script setup lang="ts">
type IProp = {
  blogTitle: string
  blogShortDescription: string
  blogTimePosted: string
  blogTimeToRead: string
}

const props = defineProps<IProp>()
</script>

<template>
  <div class="job-card">
    <!-- Details (Title + Description) -->
    <div class="job-card__details">
      <!-- Title -->
      <h3>{{ blogTitle }}</h3>

      <!-- Description -->
      <p>{{ blogShortDescription }}</p>
    </div>

    <!-- Time posted and time to read -->
     <div class="w-full flex justify-between">
        <p>{{ blogTimePosted }}</p>
        <p>{{ blogTimeToRead }}</p>
     </div>

    <!-- Arrow -->
    <div class="arrow-nav">
      <spna>➤</spna>
    </div>
  </div>
</template>

<style scoped lang="scss">
.job-card {
  @apply flex flex-col gap-y-5 relative;

  &__details {
    @apply flex flex-col relative gap-y-3 max-w-[80%];
  }

  h3 {
    @apply dark:text-white text-black text-3xl;
  }

  p {
    @apply text-gray text-lg;
  }

  .arrow-nav {
    @apply absolute text-primary right-0 -rotate-45 hover:cursor-pointer;
  }
}
</style>
