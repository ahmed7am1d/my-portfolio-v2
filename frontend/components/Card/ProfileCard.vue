<script setup lang="ts">
// Layout
const socialmediaNavItems = computed(() => [
  // LinkedIn
  {
    id: 1,
    iconPath: 'linkedin',
    to: '',
  },

  // Github
  {
    id: 2,
    iconPath: 'github',
    to: '',
  },

  // Instagram
  {
    id: 3,
    iconPath: 'instagram',
    to: '',
  },
])
</script>

<template>
  <article class="profile-card">
    <!-- Profile image -->
    <div class="profile-image">
      <NuxtImg src="/profile-card.png" />
    </div>

    <!-- Profile bio -->
    <div class="profile-bio">
      <!-- Name -->
      <div class="profile-bio__name">
        <h4>Ahmed Al-Doori</h4>
      </div>

      <!-- Description and icons -->
      <div class="profile-bio__description-icon">
        <p dir="auto">
          {{ $t('profileCard.bio') }}
        </p>

        <ul>
          <li
            v-for="navItem in socialmediaNavItems"
            :key="navItem.id"
          >
            <NuxtLink :to="navItem.to">
              <nuxt-icon
                :name="navItem.iconPath"
                filled
                :aria-hidden="true"
              />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
.profile-card {
  @apply h-[650px] w-full bg-white rounded-xl flex flex-col justify-start items-center py-6 px-7 text-center;

  .profile-image {
    @apply h-[284px] w-[240px] flex justify-center;

    img {
      @apply rounded-xl;
    }
  }

  .profile-bio {
    @apply mt-6 h-full flex flex-col justify-between;

    &__name {
      h4 {
        @apply text-4xl uppercase font-bold;
        font-family: 'Poppins', sans-serif;
      }
    }

    &__description-icon {
      @apply flex flex-col gap-y-7 max-w-80;

      // Description
      p {
        @apply text-dark-gray font-medium;
      }

      // Icons wrapper (navigation)
      ul {
        @apply flex justify-center gap-x-4;

        li {
          @apply hover:cursor-pointer;

          .nuxt-icon svg {
            @apply text-primary w-5 h-5;
          }
        }
      }
    }
  }
}
</style>
