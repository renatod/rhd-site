import pkg from './package'

export default {
  mode: 'universal',
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ]
  },
  modules: [
    'bootstrap-vue/nuxt'
  ],
  buildModules: [
    '@nuxtjs/gtm',
  ],
  plugins: [
    '~/plugins/gtm'
  ],
  gtm: {
    enabled: true,
    pageTracking: true,
    pageViewEventName: 'pageView'
  },
  server: {
    port: process.env.PORT || 3000
  }
}
