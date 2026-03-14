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
    title: "About Yokaidex",
    description:
        "Learn the purpose of Yokaidex and the fair-use fan reference mission behind the project.",
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
    <div class="max-w-4xl space-y-6">
        <div class="space-y-2">
            <p
                class="text-sm font-semibold uppercase tracking-[0.3em] text-red-500"
            >
                About
            </p>
            <h2 class="text-3xl font-semibold">Why Yokaidex exists</h2>
        </div>

        <SharedSectionCard
            title="Project mission"
            description="A fan-made reference, rebuilt in Nuxt."
        >
            <p class="text-sm leading-7 text-slate-600 dark:text-slate-300">
                Yokaidex is a website with information about the Yo-kai Watch
                games from Level-5. It exists to help the community find
                reliable information about yo-kai, items, rewards, and unlock
                mechanics more quickly.
            </p>
            <p class="text-sm leading-7 text-slate-600 dark:text-slate-300">
                The information gathered here is intended as a reference
                resource. All original intellectual property belongs to Level-5
                Inc., Nintendo Co., Ltd., Bandai Co., Ltd., and Koei Tecmo
                Holdings Co., Ltd.
            </p>
            <p class="text-sm leading-7 text-slate-600 dark:text-slate-300">
                The project is presented as a non-commercial educational fan
                reference. The original content owners retain all rights to the
                underlying games, characters, and assets.
            </p>
        </SharedSectionCard>
    </div>
</template>
