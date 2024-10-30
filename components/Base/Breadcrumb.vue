<script setup lang="ts">
const links = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'Navigation',
  icon: 'i-heroicons-square-3-stack-3d'
}, {
  label: 'Breadcrumb',
  icon: 'i-heroicons-link'
}]
</script>

<template>
  <div class="px-4 md:px-16 lg:px-52 py-8">
    <UBreadcrumb :links="links" />
  </div>
</template>

<style scoped></style>
