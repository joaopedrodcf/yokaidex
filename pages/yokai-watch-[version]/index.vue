<script setup lang="ts">
import { getAbsoluteUrl, normalizeGameVersion } from "../../lib/catalog";

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
    title: `Yo-kai Watch ${version} medallium`,
    description: `Browse every yo-kai in Yo-kai Watch ${version} with filters for tribe, rank, element, and special types.`,
    ogTitle: `Yo-kai Watch ${version} medallium`,
    ogDescription: `Browse every yo-kai in Yo-kai Watch ${version} with filters for tribe, rank, element, and special types.`,
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
    <PagesYokaiCatalogView :version="version" />
</template>
