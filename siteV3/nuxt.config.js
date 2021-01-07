export default {
  generate: {
    fallback: "404.html",
    minify: {
      collapseWhitespace: false
    },
  },
  target: 'static',
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/index.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-analytics'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/prismic'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  
  styleResources: {
    scss: [
      './styles/_colors.scss',
      './styles/_variables.scss',
    ]
  },

  prismic: {
    endpoint: "https://your-repo-name.cdn.prismic.io/api/v2",
    // linkResolver: "",
    // htmlSerializer: "",
  },

  googleAnalytics: {
    id: 'UA-134957187-2'
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Nu Renaissance Productions',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { property:"og:title", content:"Nu Renaissance Productions" },
      { property:"og:description", content:"Watch our new short film 'All of the Lights' today!" },
      { property:"og:image", content:"https://cdn.image4.io/obsidiantech/f_auto/nuren/aotl/header.jpg" },
      { property:"og:url", content:"https://nurenproductions.com/allofthelights" },
      { property:"twitter:title", content:"Nu Renaissance Productions" },
      { property:"twitter:description", content:"Watch our new short film 'All of the Lights' today!" },
      { property:"twitter:image", content:"https://cdn.image4.io/obsidiantech/f_auto/nuren/aotl/header.jpg" },
      { property:"twitter:url", content:"https://nurenproductions.com/allofthelights" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans&family=Raleway&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Biryani:200|Open+Sans+Condensed:300&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Work+Sans:200|Yantramanav&display=swap' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css', integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T", crossorigin: "anonymous" },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,900&display=swap' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css', integrity: "sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==", crossorigin: "anonymous" },
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js', integrity: 'sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo', crossorigin: "anonymous" },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js', integrity: 'sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1', crossorigin: "anonymous" },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js', integrity: 'sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM', crossorigin: "anonymous" },
      { src: 'https://www.googletagmanager.com/gtag/js?id=UA-134957187-2', async: true },
    ]
  },
}
