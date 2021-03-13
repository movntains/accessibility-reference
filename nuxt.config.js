export default {
  target: 'static',

  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Accessibility Reference',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Tips and tricks for making accessible websites and web apps' },
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'alternate icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  css: [
    '@/assets/css/tailwind.scss',
  ],

  plugins: [
    { src: '@/plugins/vuedraggable.js' },
    { src: '@/plugins/accessibility-helpers.js', mode: 'client' },
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],

  modules: [],

  tailwindcss: {
    exposeConfig: true,
  },

  googleFonts: {
    families: {
      Inter: true,
    },
  },

  build: {},
}
