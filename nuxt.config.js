// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            debug: '',
            clientId: '',
            redirectUri: '',
            authUri: '',
            tokenUri: '',
            apiBaseUri: '',
        }
    },
    app: {
        head: {
            title: process.env.APP_NAME
        }
    },
    // ssr: false,
    css: ['@/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        'nuxt-icon',
        '@nuxt/image',
        '@nuxt/content',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt'
    ],


})
