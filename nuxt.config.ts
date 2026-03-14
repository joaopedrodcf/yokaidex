import { buildPrerenderRoutes } from "./lib/routes";

const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || "https://yokaidex.com";
const gaMeasurementId = process.env.NUXT_PUBLIC_GA_MEASUREMENT_ID || "";

export default defineNuxtConfig({
    compatibilityDate: "2026-03-14",
    modules: [
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
    site: {
        url: siteUrl,
        name: "Yokaidex",
        description:
            "Contains all yo-kais from the 3 main games, their locations, stats, favorite foods, skills, items, and baffle board solutions.",
        defaultLocale: "en",
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
                { rel: "manifest", href: "/manifest.json" },
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
