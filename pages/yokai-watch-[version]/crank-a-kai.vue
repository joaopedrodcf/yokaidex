<script setup lang="ts">
import {
    getAbsoluteUrl,
    getVersionPath,
    normalizeGameVersion,
    toRouteSlug,
} from "../../lib/catalog";

const route = useRoute();
const config = useRuntimeConfig();
const version = normalizeGameVersion(route.params.version as string);

if (!version) {
    throw createError({
        statusCode: 404,
        statusMessage: "Game version not found",
    });
}

const entries = useCrankakai(version);

useSeoMeta({
    title: `Yo-kai Watch ${version} crank-a-kai`,
    description: `Browse every crank-a-kai coin and reward pool in Yo-kai Watch ${version}.`,
    ogTitle: `Yo-kai Watch ${version} crank-a-kai`,
    ogDescription: `Browse every crank-a-kai coin and reward pool in Yo-kai Watch ${version}.`,
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
    <div class="space-y-6">
        <div class="space-y-2">
            <p
                class="text-sm font-semibold uppercase tracking-[0.3em] text-red-500"
            >
                Crank-a-kai
            </p>
            <h2 class="text-3xl font-semibold">Yo-kai Watch {{ version }}</h2>
            <p
                class="max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300"
            >
                Open any coin or capsule type to see the linked item entry and
                its prize group breakdown.
            </p>
        </div>

        <div class="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
            <NuxtLink
                v-for="entry in entries"
                :key="entry.index"
                :to="
                    getVersionPath(version, `/items/${toRouteSlug(entry.type)}`)
                "
            >
                <UCard
                    class="h-full transition-transform duration-200 hover:-translate-y-1"
                >
                    <div class="flex items-center gap-4">
                        <SharedAppImage :src="entry.image" :alt="entry.type" />
                        <div class="space-y-1">
                            <p
                                class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500"
                            >
                                Crank-a-kai
                            </p>
                            <h3 class="text-xl font-semibold">
                                {{ entry.type
                                }}<span v-if="entry.variation">
                                    {{ entry.variation }}</span
                                >
                            </h3>
                        </div>
                    </div>
                </UCard>
            </NuxtLink>
        </div>
    </div>
</template>
