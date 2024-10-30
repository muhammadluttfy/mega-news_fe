<script setup lang="ts">
const props = defineProps({
  isLong: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div>
    <USkeleton
      class="bg-gray-200 rounded-xl h-[250px] p-4 mb-6"
    />
    <div class="flex flex-col gap-2">
      <USkeleton
        class="h-4 w-[250px] bg-gray-200"
        :class="{ 'w-[80%]': props?.isLong }"
      />
      <USkeleton
        class="h-4 w-[200px] bg-gray-200"
        :class="{ 'w-[55%]': props?.isLong }"
      />
    </div>
  </div>
</template>

<style scoped></style>
