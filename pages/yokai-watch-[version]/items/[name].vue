<script setup lang="ts">
import {
    findCrankakaiBySlug,
    findItemBySlug,
    getAbsoluteUrl,
    getCrankakaiEntries,
    getCrankakaiPrizeGroups,
    getItemHref,
    getPrizeHref,
    getVersionPath,
    normalizeGameVersion,
} from "../../../lib/catalog";

const route = useRoute();
const config = useRuntimeConfig();
const version = normalizeGameVersion(route.params.version as string);

if (!version) {
    throw createError({
        statusCode: 404,
        statusMessage: "Game version not found",
    });
}

const item = findItemBySlug(version, route.params.name as string);
const crankakaiFallback = item
    ? null
    : findCrankakaiBySlug(version, route.params.name as string);

if (!item && !crankakaiFallback) {
    throw createError({ statusCode: 404, statusMessage: "Item not found" });
}

const displayItem =
    item ||
    ({
        index: crankakaiFallback!.index,
        name: crankakaiFallback!.type,
        image: crankakaiFallback!.image,
        description: "Crank-a-kai coin or capsule entry.",
        type: "items",
    } as const);

const crankakaiEntries = item
    ? getCrankakaiEntries(version, item.crankakaiIndexes)
    : [crankakaiFallback!];
const itemLocations = (item?.locations ?? []).filter(
    (location): location is string => Boolean(location),
);
const crankakaiPrizeGroups = crankakaiEntries.map((entry) => ({
    entry,
    groups: getCrankakaiPrizeGroups(entry).map((group) => ({
        ...group,
        prizes: group.prizes.map((prize) => ({
            ...prize,
            href: getPrizeHref(version, prize.type, prize.name),
        })),
    })),
}));

useSeoMeta({
    title: displayItem.name,
    description: `${displayItem.name} is an item from Yo-kai Watch ${version}.`,
    ogTitle: displayItem.name,
    ogDescription: `${displayItem.name} is an item from Yo-kai Watch ${version}.`,
    ogImage: displayItem.image,
    twitterCard: "summary_large_image",
    twitterTitle: displayItem.name,
    twitterDescription: `${displayItem.name} is an item from Yo-kai Watch ${version}.`,
    twitterImage: displayItem.image,
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
        <UCard class="overflow-hidden">
            <div
                class="rounded-[1.5rem] bg-gradient-to-br from-zinc-900 via-zinc-800 to-red-600 p-6 text-white"
            >
                <div
                    class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
                >
                    <div class="flex items-center gap-5">
                        <SharedAppImage
                            :src="displayItem.image"
                            :alt="displayItem.name"
                            size="lg"
                            rounded="rounded-3xl"
                        />
                        <div class="space-y-3">
                            <p
                                class="text-xs font-semibold uppercase tracking-[0.35em] text-white/80"
                            >
                                Yo-kai Watch {{ version }}
                            </p>
                            <h2 class="text-4xl font-semibold">
                                {{ displayItem.name }}
                            </h2>
                            <div class="flex flex-wrap gap-2">
                                <UBadge
                                    color="neutral"
                                    variant="solid"
                                    :label="item ? item.type : 'crank-a-kai'"
                                />
                            </div>
                        </div>
                    </div>

                    <SharedShareActions />
                </div>
            </div>
        </UCard>

        <div class="grid gap-6 xl:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
            <div class="space-y-6">
                <SharedSectionCard title="Description" accent="#f87171">
                    <p
                        class="text-sm leading-7 text-slate-600 dark:text-slate-300"
                    >
                        {{ displayItem.description }}
                    </p>
                </SharedSectionCard>

                <SharedSectionCard
                    v-if="item?.effect"
                    title="Effect"
                    accent="#f87171"
                >
                    <p
                        class="text-sm leading-7 text-slate-600 dark:text-slate-300"
                    >
                        {{ item.effect }}
                    </p>
                </SharedSectionCard>

                <SharedSectionCard
                    v-if="itemLocations.length"
                    title="Locations"
                    accent="#f87171"
                >
                    <div class="flex flex-wrap gap-2">
                        <UBadge
                            v-for="location in itemLocations"
                            :key="location"
                            color="neutral"
                            variant="soft"
                            :label="location"
                        />
                    </div>
                </SharedSectionCard>

                <SharedSectionCard
                    v-if="crankakaiEntries.length"
                    title="Crank-a-kai rewards"
                    accent="#f87171"
                >
                    <div class="space-y-4">
                        <div
                            v-for="entryGroup in crankakaiPrizeGroups"
                            :key="entryGroup.entry.index"
                            class="rounded-2xl border border-[var(--color-yokai-border)] p-4 dark:border-[var(--color-yokai-dark-border)]"
                        >
                            <div class="flex items-center gap-3">
                                <SharedAppImage
                                    :src="entryGroup.entry.image"
                                    :alt="entryGroup.entry.type"
                                />
                                <div>
                                    <p
                                        class="text-sm font-semibold text-slate-500"
                                    >
                                        Crank-a-kai
                                    </p>
                                    <h3 class="text-lg font-semibold">
                                        {{ entryGroup.entry.type
                                        }}<span
                                            v-if="entryGroup.entry.variation"
                                        >
                                            {{
                                                entryGroup.entry.variation
                                            }}</span
                                        >
                                    </h3>
                                </div>
                            </div>

                            <div class="mt-4 space-y-4">
                                <div
                                    v-for="group in entryGroup.groups"
                                    :key="group.label"
                                >
                                    <p
                                        class="mb-2 text-sm font-semibold text-slate-500"
                                    >
                                        {{ group.label }}
                                    </p>
                                    <div class="grid gap-3 md:grid-cols-2">
                                        <template
                                            v-for="prize in group.prizes"
                                            :key="`${group.label}-${prize.name}`"
                                        >
                                            <NuxtLink
                                                v-if="prize.href"
                                                :to="prize.href"
                                                class="flex items-center gap-3 rounded-2xl bg-slate-100 p-3 dark:bg-zinc-900"
                                            >
                                                <SharedAppImage
                                                    :src="prize.image"
                                                    :alt="prize.name"
                                                />
                                                <div>
                                                    <p class="font-semibold">
                                                        {{ prize.name }}
                                                    </p>
                                                    <p
                                                        class="text-xs uppercase tracking-[0.25em] text-slate-500"
                                                    >
                                                        {{ prize.type }}
                                                    </p>
                                                </div>
                                            </NuxtLink>
                                            <div
                                                v-else
                                                class="flex items-center gap-3 rounded-2xl bg-slate-100 p-3 dark:bg-zinc-900"
                                            >
                                                <SharedAppImage
                                                    :src="prize.image"
                                                    :alt="prize.name"
                                                />
                                                <div>
                                                    <p class="font-semibold">
                                                        {{ prize.name }}
                                                    </p>
                                                    <p
                                                        class="text-xs uppercase tracking-[0.25em] text-slate-500"
                                                    >
                                                        {{ prize.type }}
                                                    </p>
                                                </div>
                                            </div>
                                        </template>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SharedSectionCard>
            </div>

            <div class="space-y-6">
                <SharedSectionCard
                    v-if="item?.priceInfo"
                    title="Price"
                    accent="#f87171"
                >
                    <div class="grid grid-cols-2 gap-3">
                        <div
                            v-for="(value, key) in item.priceInfo"
                            :key="key"
                            class="rounded-2xl bg-slate-100 p-4 dark:bg-zinc-900"
                        >
                            <p
                                class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500"
                            >
                                {{ key }}
                            </p>
                            <p class="mt-2 text-2xl font-semibold">
                                {{ value }}
                            </p>
                        </div>
                    </div>
                </SharedSectionCard>

                <SharedSectionCard
                    v-if="item?.statsInfo"
                    title="Stats"
                    accent="#f87171"
                >
                    <div class="grid grid-cols-2 gap-3">
                        <div
                            v-for="(value, key) in item.statsInfo"
                            :key="key"
                            class="rounded-2xl bg-slate-100 p-4 dark:bg-zinc-900"
                        >
                            <p
                                class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500"
                            >
                                {{ key }}
                            </p>
                            <p class="mt-2 text-2xl font-semibold">
                                {{ value }}
                            </p>
                        </div>
                    </div>
                </SharedSectionCard>

                <UButton
                    color="neutral"
                    variant="outline"
                    :to="getVersionPath(version, '/items')"
                    label="Back to items"
                />
            </div>
        </div>
    </div>
</template>
