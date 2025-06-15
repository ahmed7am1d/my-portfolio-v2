<script setup lang="ts">
// Layout
const socialmediaNavItems = computed(() => [
  // LinkedIn
  {
    id: 1,
    iconPath: 'linkedin',
    to: 'https://www.linkedin.com/in/al-doori/',
  },

  // Github
  {
    id: 2,
    iconPath: 'github',
    to: 'https://github.com/ahmed7am1d',
  },

  // Instagram
  {
    id: 3,
    iconPath: 'instagram',
    to: 'https://www.instagram.com/thefit.dev/',
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

      <!-- Accent circle with connecting line -->
      <div class="accent-element">
        <div class="accent-circle">
          <nuxt-icon
            name="profile-card-flame"
            filled
          />
        </div>
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
            <NuxtLink
              :to="navItem.to"
              target="_blank"
            >
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
  @apply h-[650px] w-full bg-white rounded-xl flex flex-col justify-start items-center py-6 px-7 text-center overflow-hidden;

  .profile-image {
    @apply h-[284px] w-[240px] flex justify-center;

    img {
      @apply rounded-xl;
    }
  }

  .profile-bio {
    @apply relative mt-6 h-full flex flex-col justify-between;

    &__name {
      h4 {
        @apply text-4xl uppercase font-bold;
        font-family: 'Poppins', sans-serif;
      }
    }

    .accent-element {
      @apply absolute w-full left-8 top-10;

      .accent-circle {
        @apply w-9 h-9 bg-primary rounded-full;
        @apply flex items-center justify-center shadow-lg;
        @apply relative z-20;

        .nuxt-icon svg {
          @apply w-6 h-6 text-white;
        }

        &::after {
          position: absolute;
          content: '';
          width: 100vw;
          min-width: 60px;
          height: 120px;
          right: 100%;
          top: 60%;
          transform: translateY(-50%);
          border-bottom: dashed 4px var(--primary-theme);
          border-radius: 50%;
        }
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
