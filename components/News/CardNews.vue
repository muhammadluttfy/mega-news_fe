<script setup lang="ts">
import type { Article } from '~/types/INews'

interface IProps {
  item: Article
}

const props = defineProps<IProps>()
const dayjs = useDayjs()
</script>

<template>
  <NuxtLink
    class="bg-white p-4 rounded-xl shadow-xl"
    :to="props?.item?.url"
    target="_blank"
  >
    <div class="rounded-xl overflow-hidden h-[190px] mb-4">
      <NuxtImg :src="props?.item?.urlToImage ?? 'https://picsum.photos/300'" class="w-full h-full object-cover" />
    </div>
    <div class="mb-4">
      <h3 class="font-bold mb-4 line-clamp-1">
        {{ props?.item?.title === '[Removed]' ? '[Removed] Lorem ipsum dolor sit amet consectetur adipisicing elit.' : props?.item?.title }}
      </h3>
      <p class="line-clamp-2 text-gray-500 text-sm">
        {{ props?.item?.description === '[Removed]' ? '[Removed] Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo commodi ad rem exercitationem hic recusandae tempora quam. Laboriosam assumenda maiores modi perspiciatis dolorum molestiae porro veniam suscipit numquam iste ipsam doloremque dignissimos molestias, minus itaque odit animi quidem officia aliquid nulla.' : props?.item?.description }}
      </p>
    </div>
    <div class="bg-gray-200/60 p-4 rounded-xl flex items-center justify-between gap-2">
      <div class="flex items-center gap-2">
        <NuxtImg src="https://avatars.githubusercontent.com/u/739984?v=4" class="w-11 h-11 rounded-xl" />
        <div class="max-w-[150px]">
          <h4 class="text-sm font-bold mb-1 line-clamp-1 truncate">
            {{ props?.item?.author }}
          </h4>
          <p class="text-gray-500 text-xs">
            {{ dayjs(item?.publishedAt).format('MMM DD, YYYY') }}
          </p>
        </div>
      </div>
      <button type="button">
        <UIcon name="i-heroicons-bookmark" class="w-6 h-6" />
      </button>
    </div>
  </NuxtLink>
</template>

<style scoped></style>
