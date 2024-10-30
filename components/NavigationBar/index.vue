<script setup lang="ts">
const isOpenToggle = ref<boolean>(false)
</script>

<template>
  <div class="px-4 md:px-16 lg:px-52 py-8 flex items-center justify-between gap-6">
    <div class="flex items-center gap-6 lg:gap-16">
      <div class="block lg:hidden">
        <button
          type="button"
          class="w-11 h-11 bg-gray-200/60 p-2 flex items-center justify-center rounded-xl"
          @click="isOpenToggle = true"
        >
          <UIcon name="i-heroicons-bars-3" class="w-6 h-6" />
        </button>
      </div>
      <h1 class="text-red-500 font-bold text-2xl hidden md:block">
        MEGA.news
      </h1>

      <div class="hidden lg:block">
        <div class="flex items-center gap-9 font-medium">
          <NuxtLink to="/">
            Home
          </NuxtLink>
          <NuxtLink to="/contact-us">
            Contact Us
          </NuxtLink>
          <NuxtLink to="/about-us">
            About Us
          </NuxtLink>
        </div>
        <div>
          <USlideover v-model="isOpenToggle" side="left">
            <div class="flex flex-col flex-1 p-4">
              <div class="flex items-center justify-between mb-8">
                <h1 class="text-red-500 font-bold text-2xl">
                  MEGA.news
                </h1>
                <button
                  type="button"
                  class="w-11 h-11 bg-gray-200/60 p-2 flex items-center justify-center rounded-xl"
                  @click="isOpenToggle = false"
                >
                  <UIcon name="i-heroicons-x-mark" class="w-6 h-6" />
                </button>
              </div>

              <div class="h-full flex flex-col gap-3 font-semibold">
                <NuxtLink to="/" class="bg-gray-200/60 p-3.5 rounded-xl flex items-center gap-1.5">
                  <div class="w-1 h-2.5 bg-red-500 rounded-sm" />
                  <p>Home</p>
                </NuxtLink>

                <NuxtLink to="/contact-us" class="group hover:bg-gray-200/60 p-3.5 rounded-xl flex items-center gap-1.5 transition-all">
                  <div class="w-1 h-2.5 bg-red-500 rounded-sm hidden" />
                  <p>Contact Us</p>
                </NuxtLink>

                <NuxtLink to="/about-us" class="group hover:bg-gray-200/60 p-3.5 rounded-xl flex items-center gap-1.5 transition-all">
                  <div class="w-1 h-2.5 bg-red-500 rounded-sm hidden" />
                  <p>About Us</p>
                </NuxtLink>
              </div>
            </div>
          </USlideover>
        </div>
      </div>
    </div>
    <div class="flex items-center gap-6">
      <UInput
        icon="i-heroicons-magnifying-glass-20-solid"
        size="xl"
        color="white"
        variant="none"
        :trailing="false"
        class="w-full lg:w-96 bg-gray-200/60 rounded-xl"
        placeholder="Search..."
      />
      <NuxtLink to="/bookmarks" class="w-11 h-11 bg-gray-200/60 p-2 flex items-center justify-center rounded-xl">
        <UIcon name="i-heroicons-bookmark" class="w-6 h-6" />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
