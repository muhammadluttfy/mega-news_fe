// https://nuxt.com/docs/api/configuration/nuxt-config
import pkg from './package.json'
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      clientVersion: pkg.version,
      BASE_API_KEY: process.env.BASE_API_KEY,
      BASE_API_URL: process.env.BASE_API_URL
    }
  },
  modules: [
    '@nuxt/devtools',
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    'nuxt-swiper',
    '@nuxtjs/device',
    'dayjs-nuxt'
  ],
  ui: {
    global: true
  },

  googleFonts: {
    families: {
      Roboto: [300, 400, 500, 600, 700, 800]
    },
    useStylesheet: true
  }
})
