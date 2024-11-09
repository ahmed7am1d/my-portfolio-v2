<script setup lang="ts">

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
                <p>
                    A dedicated full stack software engineer, who is always willing to learn new stuff,
                    and try new things.
                </p>

                <div class="flex justify-center">
                    <div>👍</div>
                    <div>👍</div>
                    <div>👍</div>
                    <div>👍</div>
                </div>
            </div>
        </div>
    </article>
</template>

<style scoped lang="scss">
.profile-card {
    @apply h-[640px] w-full bg-white rounded-xl flex flex-col justify-start items-center py-6 px-7 text-center;

    .profile-image {
        @apply h-[284px] w-[240px] flex justify-center;

        img {
            @apply rounded-xl
        }
    }

    .profile-bio {
        @apply mt-6 h-full flex flex-col justify-between;

        &__name {
            h4 {
                @apply text-4xl uppercase font-bold;
                font-family: "Poppins", sans-serif;
            }
        }

        &__description-icon {
            @apply flex flex-col gap-y-4 max-w-80
        }
    }

}
</style>
