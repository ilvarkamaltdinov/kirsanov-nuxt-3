// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  app: {
    pageTransition: { name: 'page-slide-forward', mode: 'default' },
  },
  devtools: { enabled: true }
})
