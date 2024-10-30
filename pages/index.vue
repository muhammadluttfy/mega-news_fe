<script setup lang="ts">
import { Pagination } from 'swiper/modules'
import type { INews } from '~/types/INews'
import type { ISelectOptions } from '~/types/ISelectOptions'

definePageMeta({
  colorMode: 'light',
  title: 'MEGA News - Your source for timely and trusted news',
  preview: {
    title: 'Home',
    description: '/home'
  }
})

useSeoMeta({
  title: 'MEGA News - Your source for timely and trusted news',
  description: 'The latest news portal that provides accurate and reliable information.',
  ogDescription: 'The latest news portal that provides accurate and reliable information.'
})

const categories: ISelectOptions[] = [
  { value: 'tesla', label: 'Tesla' },
  { value: 'travel', label: 'Travel' },
  { value: 'tech', label: 'Tech' },
  { value: 'sports', label: 'Sports' },
  { value: 'music', label: 'Music' },
  { value: 'art', label: 'Art' },
  { value: 'books', label: 'Books' },
  { value: 'fashion', label: 'Fashion' },
  { value: 'gaming', label: 'Gaming' },
  { value: 'health', label: 'Health' },
  { value: 'nature', label: 'Nature' },
  { value: 'pets', label: 'Pets' },
  { value: 'movies', label: 'Movies' }
]

const config = useRuntimeConfig()
const selectedCategory = ref<ISelectOptions | undefined>(categories[0])

const { data: news, refresh: refreshNews, pending: pendingNews } = await useApiFetch<INews>('/everything?', {
  params: {
    q: selectedCategory.value?.value ?? undefined,
    from: '2024-09-30',
    sortBy: 'publishedAt',
    apiKey: config.public.BASE_API_KEY
  }
})

watch(
  [selectedCategory],
  () => {
    refreshNews()
  }
)
</script>

<template>
  <div>
    <section class="mb-11">
      <Swiper
        :slides-per-view="2.3"
        :space-between="16"
        :breakpoints="{
          '640': {
            slidesPerView: 2.3,
            spaceBetween: 16,
          },
          '768': {
            slidesPerView: 4.3,
            spaceBetween: 16,
          },
          '1024': {
            slidesPerView: 5.3,
            spaceBetween: 16,
          },
        }"
      >
        <swiperSlide
          v-for="(category, index) in categories"
          :key="index"
        >
          <div
            class="relative bg-gray-300 rounded-xl h-14 flex items-center justify-center overflow-hidden shrink-0 snap-start cursor-pointer transition-all"
            :class="{ 'border-4 border-red-500': category?.value === selectedCategory?.value }"
            @click="selectedCategory = category, refreshNews"
          >
            <NuxtImg
              src="https://picsum.photos/300"
              class="absolute inset-0 w-full h-full object-cover filter blur-sm"
              :alt="category?.label"
            />
            <div class="absolute inset-0 bg-black opacity-20" />
            <p class="relative text-white font-semibold">
              #{{ category?.label }}
            </p>
          </div>
        </swiperSlide>
      </Swiper>
    </section>

    <section class="mb-11">
      <div v-if="news?.articles?.length && !pendingNews" class="grid grid-cols-12 gap-6">
        <NuxtLink
          :to="news?.articles[0]?.url"
          target="_blank"
          class="col-span-12 md:col-span-6 lg:col-span-3 relative bg-gray-300 rounded-xl h-[400px] flex items-end justify-center overflow-hidden shrink-0 snap-start cursor-pointer p-4 order-2 lg:order-1"
        >
          <NuxtImg
            :src="news?.articles[0]?.urlToImage ?? 'https://picsum.photos/300'"
            class="absolute inset-0 w-full h-full object-cover filter"
            :alt="news?.articles[0]?.title"
          />
          <div class="relative bg-white/60 backdrop-blur-sm rounded-xl p-4 w-full">
            <h4 class="text-gray-800 font-semibold text-xl mb-2.5 line-clamp-1">
              {{ news?.articles[0]?.title }}
            </h4>
            <p class="line-clamp-2 text">
              {{ news?.articles[0]?.description }}
            </p>
          </div>
        </NuxtLink>
        <NuxtLink
          :to="news?.articles[1]?.url"
          target="_blank"
          class="col-span-12 md:col-span-6 lg:col-span-3 relative bg-gray-300 rounded-xl h-[400px] flex items-end justify-center overflow-hidden shrink-0 snap-start cursor-pointer p-4 order-3 lg:order-2"
        >
          <NuxtImg
            :src="news?.articles[1]?.urlToImage ?? 'https://picsum.photos/300'"
            class="absolute inset-0 w-full h-full object-cover filter"
            :alt="news?.articles[1]?.title"
          />
          <div class="relative bg-white/60 backdrop-blur-sm rounded-xl p-4 w-full">
            <h4 class="text-gray-800 font-semibold text-xl mb-2.5 line-clamp-1">
              {{ news?.articles[1]?.title }}
            </h4>
            <p class="line-clamp-2 text">
              {{ news?.articles[1]?.description }}
            </p>
          </div>
        </NuxtLink>
        <div class="col-span-12 lg:col-span-6 order-1 lg:order-3">
          <Swiper
            :slides-per-view="1"
            :space-between="16"
            :pagination="true"
            :autoplay="{
              delay: 1000,
              disableOnInteraction: false,
            }"
            :modules="[Pagination]"
          >
            <swiperSlide
              v-for="(item, index) in news?.articles?.slice(2, 9) ?? []"
              :key="index"
            >
              <NuxtLink
                :to="item?.url"
                target="_blank"
                class="col-span-3 relative bg-gray-300 rounded-xl h-[400px] flex items-end justify-center overflow-hidden shrink-0 snap-start cursor-pointer px-4 pt-4 pb-10"
              >
                <NuxtImg
                  :src="item?.urlToImage ?? 'https://picsum.photos/300'"
                  class="absolute inset-0 w-full h-full object-cover filter"
                  :alt="item?.title"
                />
                <div class="relative bg-white/60 backdrop-blur-sm rounded-xl p-4 w-full">
                  <h4 class="text-gray-800 font-semibold text-xl mb-2.5 line-clamp-1">
                    {{ item?.title }}
                  </h4>
                  <p class="line-clamp-2 text">
                    {{ item?.description }}
                  </p>
                </div>
              </NuxtLink>
            </swiperSlide>
          </Swiper>
        </div>
      </div>

      <div v-else class="grid grid-cols-12 gap-6">
        <div class="col-span-12 lg:col-span-3">
          <SkeletonCardNews :is-long="false" />
        </div>
        <div class="col-span-12 lg:col-span-3">
          <SkeletonCardNews :is-long="false" />
        </div>
        <div class="col-span-12 lg:col-span-6">
          <SkeletonCardNews :is-long="true" />
        </div>
      </div>
    </section>

    <section class="mb-11">
      <div class="mb-8 flex items-center justify-between">
        <div class="flex items-center gap-4">
          <div class="h-3.5 w-1.5 bg-red-500 rounded-xl" />
          <h2 class="font-bold text-xl">
            Popular Posts
          </h2>
        </div>
      </div>
      <Swiper
        v-if="news?.articles?.length && !pendingNews"
        :slides-per-view="1.2"
        :space-between="16"
        :breakpoints="{
          '640': {
            slidesPerView: 1.2,
            spaceBetween: 16,
          },
          '768': {
            slidesPerView: 2.2,
            spaceBetween: 16,
          },
          '1024': {
            slidesPerView: 4.2,
            spaceBetween: 16,
          },
        }"
      >
        <swiperSlide
          v-for="(item, index) in news?.articles?.slice(10, 19) ?? []"
          :key="index"
        >
          <NewsCardNews :item="item" />
        </swiperSlide>
      </Swiper>

      <Swiper
        v-else
        :slides-per-view="1.2"
        :space-between="16"
        :breakpoints="{
          '640': {
            slidesPerView: 1.2,
            spaceBetween: 16,
          },
          '768': {
            slidesPerView: 2.2,
            spaceBetween: 16,
          },
          '1024': {
            slidesPerView: 4.2,
            spaceBetween: 16,
          },
        }"
      >
        <swiperSlide
          v-for="(item, index) in 6"
          :key="index"
        >
          <SkeletonCardNews :is-long="true" />
        </swiperSlide>
      </Swiper>
    </section>
  </div>
</template>

<style scoped>
</style>
