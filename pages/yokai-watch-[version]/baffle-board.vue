<script setup lang="ts">
import {
    getAbsoluteUrl,
    getYokaiHref,
    getVersionPath,
    normalizeGameVersion,
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

const board = useBaffleBoard(version);

if (board.value.length === 0) {
    throw createError({
        statusCode: 404,
        statusMessage: "Baffle board not available",
    });
}

useSeoMeta({
    title: `Yo-kai Watch ${version} baffle board`,
    description: `Find every baffle board clue, solution, and unlock effect in Yo-kai Watch ${version}.`,
    ogTitle: `Yo-kai Watch ${version} baffle board`,
    ogDescription: `Find every baffle board clue, solution, and unlock effect in Yo-kai Watch ${version}.`,
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
                Baffle board
            </p>
            <h2 class="text-3xl font-semibold">Yo-kai Watch {{ version }}</h2>
            <p
                class="max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300"
            >
                Each board entry links back to the matching yo-kai so players
                can jump from a puzzle solution to the full entry details.
            </p>
        </div>

        <div class="grid gap-4 xl:grid-cols-2">
            <UCard v-for="entry in board" :key="entry.index" class="h-full">
                <div class="flex gap-4">
                    <SharedAppImage :src="entry.image" :alt="entry.solution" />
                    <div class="min-w-0 space-y-3">
                        <div>
                            <p
                                class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500"
                            >
                                {{ entry.location }}
                            </p>
                            <h3 class="text-xl font-semibold">
                                {{ entry.solution }}
                            </h3>
                        </div>

                        <p
                            class="text-sm leading-6 text-slate-600 dark:text-slate-300"
                        >
                            {{ entry.effect }}
                        </p>

                        <div class="flex flex-wrap gap-2">
                            <UBadge
                                v-for="clue in entry.clues"
                                :key="clue"
                                color="neutral"
                                variant="soft"
                                :label="clue"
                            />
                        </div>

                        <UButton
                            v-if="getYokaiHref(version, entry.solution)"
                            :to="
                                getYokaiHref(version, entry.solution) ||
                                undefined
                            "
                            label="Open yo-kai entry"
                        />
                    </div>
                </div>
            </UCard>
        </div>
    </div>
</template>
