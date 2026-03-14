<script setup lang="ts">
import { getAbsoluteUrl, normalizeGameVersion } from "../../../lib/catalog";

const route = useRoute();
const config = useRuntimeConfig();
const version = normalizeGameVersion(route.params.version as string);

if (!version) {
    throw createError({
        statusCode: 404,
        statusMessage: "Game version not found",
    });
}

useSeoMeta({
    title: `Yo-kai Watch ${version} items`,
    description: `Browse items and equipment for Yo-kai Watch ${version} with search and type filters.`,
    ogTitle: `Yo-kai Watch ${version} items`,
    ogDescription: `Browse items and equipment for Yo-kai Watch ${version} with search and type filters.`,
    twitterCard: "summary_large_image",
});

useHead({
    link: [
        {
            rel: "canonical",
            href: getAbsoluteUrl(config.public.siteUrl, route.path),
        },
    ],
});
</script>

<template>
    <PagesItemCatalogView :version="version" />
</template>
