import { buildPrerenderRoutes } from "./lib/routes";

const siteUrl =
    process.env.NUXT_PUBLIC_SITE_URL || "https://yokaidex.netlify.app";
const gaMeasurementId = process.env.NUXT_PUBLIC_GA_MEASUREMENT_ID || "";

export default defineNuxtConfig({
    compatibilityDate: "2026-03-14",
    modules: [
        "@vite-pwa/nuxt",
        "@nuxt/image",
        "@nuxt/ui",
        "@nuxtjs/seo",
        "@nuxt/scripts",
        "@nuxt/a11y",
        "@nuxt/hints",
    ],
    css: ["~/assets/css/main.css"],
    devtools: { enabled: true },
    experimental: {
        payloadExtraction: false,
        renderJsonPayloads: false,
    },
    vite: {
        optimizeDeps: {
            include: ["@vueuse/core"],
        },
    },
    pwa: {
        registerType: "autoUpdate",
        filename: "pwa-sw.js",
        manifestFilename: "manifest.json",
        client: {
            periodicSyncForUpdates: 3600,
        },
        manifest: {
            id: "/",
            name: "Yokaidex",
            short_name: "Yokaidex",
            description:
                "Contains all yo-kais from the 3 main games, their locations, stats, favorite foods, skills, items, and baffle board solutions.",
            start_url: "/",
            scope: "/",
            display: "standalone",
            theme_color: "#fdd835",
            background_color: "#ffffff",
            icons: [
                {
                    src: "/images/icons/icon-128x128.png",
                    sizes: "128x128",
                    type: "image/png",
                },
                {
                    src: "/images/icons/icon-144x144.png",
                    sizes: "144x144",
                    type: "image/png",
                },
                {
                    src: "/images/icons/icon-152x152.png",
                    sizes: "152x152",
                    type: "image/png",
                },
                {
                    src: "/images/icons/icon-192x192.png",
                    sizes: "192x192",
                    type: "image/png",
                },
                {
                    src: "/images/icons/icon-256x256.png",
                    sizes: "256x256",
                    type: "image/png",
                },
                {
                    src: "/images/icons/icon-512x512.png",
                    sizes: "512x512",
                    type: "image/png",
                },
            ],
        },
        workbox: {
            cleanupOutdatedCaches: true,
            clientsClaim: true,
            skipWaiting: true,
            globPatterns: ["**/*.{js,css,html,ico,png,svg,webp,json}"],
            maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
        },
    },
    site: {
        url: siteUrl,
        name: "Yokaidex",
        description:
            "Contains all yo-kais from the 3 main games, their locations, stats, favorite foods, skills, items, and baffle board solutions.",
        defaultLocale: "en",
    },
    sitemap: {
        zeroRuntime: true,
        credits: false,
    },
    image: {
        provider: "cloudinary",
        cloudinary: {
            baseURL: "https://res.cloudinary.com/dcrcweea8/image/upload/",
        },
    },
    ogImage: false,
    linkChecker: false,
    runtimeConfig: {
        public: {
            siteUrl,
            gaMeasurementId,
        },
    },
    scripts: gaMeasurementId
        ? {
              registry: {
                  googleAnalytics: {
                      id: gaMeasurementId,
                  },
              },
          }
        : {},
    nitro: {
        prerender: {
            routes: buildPrerenderRoutes(),
        },
    },
    typescript: {
        strict: true,
        typeCheck: false,
    },
    app: {
        head: {
            titleTemplate: "%s | Yokaidex",
            meta: [
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                {
                    name: "theme-color",
                    content: "#fdd835",
                },
            ],
            link: [
                { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
                {
                    rel: "apple-touch-icon",
                    href: "/images/icons/icon-152x152.png",
                },
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "192x192",
                    href: "/images/icons/icon-192x192.png",
                },
            ],
        },
    },
});
