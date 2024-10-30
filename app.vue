<script setup lang="ts">
definePageMeta({
  colorMode: 'light',
  title: 'MEGA News - Your source for timely and trusted news'
})
</script>

<template>
  <Html lang="id">
    <Body>
      <div class="font-roboto text-gray-800">
        <NuxtRouteAnnouncer />
        <NuxtLoadingIndicator />
        <NuxtLayout>
          <NuxtPage />
          <UNotifications />
        </NuxtLayout>
      </div>
    </Body>
  </Html>
</template>
