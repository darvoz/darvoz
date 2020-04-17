export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        name: 'image',
        property: 'og:image:secure_url',
        content: 'https://darvoz.pt/seo/ogImage.jpg',
        'data-hid': 'og:image:secure_url'
      },
      {
        name: 'image',
        property: 'og:image',
        content: 'https://darvoz.pt/seo/ogImage.jpg',
        'data-hid': 'og:image'
      },
      {
        property: 'og:image:type',
        content: 'image/jpeg'
      },
      {
        itemprop: 'image',
        content: 'https://darvoz.pt/seo/ogImage.jpg'
      },
      { name: 'twitter:image', content: 'https://darvoz.pt/seo/ogImage.jpg' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  pwa: {
    meta: {
      name: 'darvoz',
      description:
        'Doa telemóveis ou tablets e dê o teu toque humano a todos aqueles que neste momento de isolamento, mais precisam de estar ligados.',
      lang: 'pt',
      ogHost: 'https://darvoz.pt'
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-163701036-1'
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', 'nuxt-leaflet'],
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
