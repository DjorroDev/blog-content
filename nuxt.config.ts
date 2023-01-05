// import { Static } from "nuxt/dist/app/compat/capi";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxt/image-edge'],
  // target: 'static',
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'material-palenight',
        // Theme used if `html.dark`
        dark: 'github-dark',
      }
    }
  },
  experimental: {
    payloadExtraction: false
  },
  nitro: {
    // serveStatic: true,
    // preset: 'netlify-edge',
    // output: 

  }
})
