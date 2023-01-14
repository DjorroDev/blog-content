// import { Static } from "nuxt/dist/app/compat/capi";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content', '@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxt/image-edge',
    [
      '@storyblok/nuxt',
      {
        accessToken: process.env.API_KEY,
      },
    ]
  ],
  // target: 'static',
  image: {
    provider: 'storyblok',
    storyblok: {
      baseUrl: 'https://a.storyblok.com/'
    }
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },

  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: {
        default: 'github-dark',
      }
    }
  },

  markdown: {
    toc: {
      depth: 5,
      searchDepth: 5
    },
  },

  experimental: {
    payloadExtraction: false
  },
  // nitro: {
  // serveStatic: true,
  // preset: 'netlify-builder',
  // output: 

  // }
})
