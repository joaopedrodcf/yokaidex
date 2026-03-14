<script setup lang="ts">
import { DEFAULT_GAME_VERSION, getAbsoluteUrl } from "../lib/catalog";

const config = useRuntimeConfig();

useSeoMeta({
    title: "Yokaidex",
    description:
        "Find every yo-kai, item, crank-a-kai reward, and baffle board solution across the three main Yo-kai Watch games.",
    ogTitle: "Yokaidex",
    ogDescription:
        "Find every yo-kai, item, crank-a-kai reward, and baffle board solution across the three main Yo-kai Watch games.",
    twitterCard: "summary_large_image",
});

useHead({
    link: [
        { rel: "canonical", href: getAbsoluteUrl(config.public.siteUrl, "/") },
    ],
});
</script>

<template>
    <PagesYokaiCatalogView :version="DEFAULT_GAME_VERSION" />
</template>
