export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-blog-dev',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/svg',
    '@nuxtjs/eslint-module',
    '@nuxt/postcss8'
  ],

  router: {
    middleware: ['auth']
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-buefy',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyCUCDipjx7VdCIcBrgfjHxd6X6VbmOL98g',
          authDomain: 'users-e7228.firebaseapp.com',
          databaseURL: 'https://users-e7228-default-rtdb.firebaseio.com',
          projectId: 'users-e7228',
          storageBucket: 'users-e7228.appspot.com',
          messagingSenderId: '192656141486',
          appId: '1:192656141486:web:f92229e21a49e6d17d513f',
          measurementId: 'G-2BR2QHGTBB'
        },
        services: {
          auth: {
            persistence: 'local', // default
            initialize: {
              onAuthStateChangedAction: 'onAuthStateChangedAction',
              subscribeManually: false
            },
            ssr: false
          }
        }
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://api.github.com'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
