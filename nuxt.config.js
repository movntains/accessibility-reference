export default {
  target: 'static',

  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Accessibility Reference',
    meta: [
      { charset: 'utf-8' },
      { httpEquiv: 'Content-Type', content: 'text/html;charset=UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:site_name', content: 'Accessibility Reference', key: 'ogsitename' },
      { hid: 'description', name: 'description', content: 'Tips and tricks for making accessible websites and web apps' },
      { property: 'og:description', content: 'Tips and tricks for making accessible websites and web apps', key: 'ogdesc' },
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
    '@nuxtjs/gtm',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
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

  gtm: {
    enabled: true,
    id: 'GTM-MDDVM6H',
    layer: 'dataLayer',
    variables: {},
    pageTracking: true,
    pageViewEventName: 'nuxtRoute',
    autoInit: false,
    respectDoNotTrack: true,
    scriptId: 'gtm-script',
    scriptDefer: false,
    scriptURL: 'https://www.googletagmanager.com/gtm.js',
    noscript: true,
    noscriptId: 'gtm-noscript',
    noscriptURL: 'https://www.googletagmanager.com/ns.html',
  },

  build: {},
}
