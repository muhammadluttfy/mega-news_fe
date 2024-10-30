import { defu } from 'defu'
import type { UseFetchOptions } from 'nuxt/app'

export function useApiFetch<T> (url: string | (() => string), options: UseFetchOptions<T> = {}) {
  const config = useRuntimeConfig()

  const defaults: UseFetchOptions<T> = {
    baseURL: config.public.BASE_API_URL,
    key: url as any,

    onResponse (_ctx) {
    },

    onResponseError (_ctx) {
    }
  }

  const params = defu(options, defaults)

  return useFetch(url, params)
}
