// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ssr: true,
  nitro: {
    minify: true,
    static: true,
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      script: [
        {
          async: true,
          src: 'https://us.umami.is/script.js',
          'data-website-id': '6857da96-70a0-4516-af51-23e9f4a5525c',
        },
      ],
      meta: [{ name: 'google-site-verification', content: '6WcTKGtmiFOZFJEG5jf501X7P8bxHkto5EQe6WNn9RY' }]
    }
  },
  colorMode: {
    classSuffix: ''
  },
  build: {
    transpile: ['gsap']
  },
  supabase: {
    redirect: false,
    url: 'https://xxxlxzetisbkluaxstze.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4eGx4emV0aXNia2x1YXhzdHplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA2MzI1NDMsImV4cCI6MjAxNjIwODU0M30.g2U49HghH98kYvROp8UCw30uh_fEGttWkXntp11sSoE'
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  site: {
    url: 'https://mattiecarlylelegacy.com/',
  },

  modules: ["@nuxt/image", "@nuxtjs/color-mode", 'radix-vue/nuxt', '@nuxtjs/supabase', 'nuxt-simple-sitemap', 'nuxt-simple-robots', 'nuxt-link-checker']
})