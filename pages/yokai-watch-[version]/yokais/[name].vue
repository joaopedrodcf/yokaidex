<script setup lang="ts">
import {
    elements,
    findYokaiBySlug,
    foods,
    getAbsoluteUrl,
    getEvolutionEntries,
    getItemHref,
    getLegendarySeal,
    getMetadataEntry,
    getVersionPath,
    getYokaiHref,
    normalizeGameVersion,
    tribes,
} from "../../../lib/catalog";
import { resolveImageUrl } from "../../../lib/images";

const route = useRoute();
const config = useRuntimeConfig();
const version = normalizeGameVersion(route.params.version as string);

if (!version) {
    throw createError({
        statusCode: 404,
        statusMessage: "Game version not found",
    });
}

const yokai = findYokaiBySlug(version, route.params.name as string);

if (!yokai) {
    throw createError({ statusCode: 404, statusMessage: "Yo-kai not found" });
}

const tribePalette = getMetadataEntry(tribes, yokai.tribe);
const foodMeta = getMetadataEntry(foods, yokai.favouriteFood);
const accent = tribePalette?.color1 || "#ef4444";
const evolutionEntries = getEvolutionEntries(yokai.evolutionIndexes);
const seal = getLegendarySeal(yokai.seal);
const isBoss = yokai.tribe === "Boss";
const yokaiLocations = (yokai.locations ?? []).filter(
    (location): location is string => Boolean(location),
);

const moveSections = [
    { label: "Skill", value: yokai.skill },
    { label: "Attack", value: yokai.attack },
    { label: "Technique", value: yokai.technique },
    { label: "Soultimate", value: yokai.soultime },
    { label: "Inspirit", value: yokai.inspirit },
].filter((section) => section.value);

const movePalette: Record<
    string,
    {
        card: string;
        label: string;
        badge: string;
    }
> = {
    Skill: {
        card: "bg-violet-200/90 text-violet-950 dark:bg-violet-300/85 dark:text-violet-950",
        label: "text-violet-700 dark:text-violet-700",
        badge: "bg-violet-600 text-white",
    },
    Attack: {
        card: "bg-amber-200/90 text-amber-950 dark:bg-amber-300/85 dark:text-amber-950",
        label: "text-amber-600 dark:text-amber-700",
        badge: "bg-amber-500 text-white",
    },
    Technique: {
        card: "bg-sky-200/90 text-sky-950 dark:bg-sky-300/85 dark:text-sky-950",
        label: "text-sky-700 dark:text-sky-700",
        badge: "bg-sky-500 text-white",
    },
    Soultimate: {
        card: "bg-rose-300/90 text-rose-950 dark:bg-rose-300/85 dark:text-rose-950",
        label: "text-rose-700 dark:text-rose-700",
        badge: "bg-rose-500 text-white",
    },
    Inspirit: {
        card: "bg-pink-200/90 text-pink-950 dark:bg-pink-300/85 dark:text-pink-950",
        label: "text-pink-700 dark:text-pink-700",
        badge: "bg-pink-500 text-white",
    },
};

const statPalette: Record<string, string> = {
    hp: "bg-pink-500",
    str: "bg-rose-400",
    spr: "bg-violet-500",
    def: "bg-sky-500",
    spd: "bg-emerald-500",
};

const seoTitle = `${yokai.name} in Yo-kai Watch ${version}`;
const seoDescription = `${yokai.name} is a ${yokai.tribe} yo-kai of rank ${yokai.rank.toUpperCase()} with the ${yokai.element} attribute in Yo-kai Watch ${version}. Browse stats, locations, favourite food, moves, and evolution details on Yokaidex.`;

useSeoMeta({
    title: seoTitle,
    description: seoDescription,
    ogTitle: seoTitle,
    ogDescription: seoDescription,
    ogImage: resolveImageUrl(yokai.image),
    twitterCard: "summary_large_image",
    twitterTitle: seoTitle,
    twitterDescription: seoDescription,
    twitterImage: resolveImageUrl(yokai.image),
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
                class="rounded-[1.5rem] p-6 text-white"
                :style="{
                    background: `linear-gradient(135deg, ${tribePalette?.color1 || '#f87171'}, ${tribePalette?.color2 || '#dc2626'})`,
                }"
            >
                <div
                    class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
                >
                    <div class="flex items-center gap-5">
                        <SharedAppImage
                            :src="yokai.image"
                            :alt="yokai.name"
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
                                {{ yokai.name }}
                            </h2>
                            <div class="flex flex-wrap gap-2">
                                <UBadge
                                    color="neutral"
                                    variant="solid"
                                    :label="yokai.tribe"
                                />
                                <UBadge
                                    color="neutral"
                                    variant="solid"
                                    :label="yokai.element"
                                />
                                <UBadge
                                    color="neutral"
                                    variant="solid"
                                    :label="yokai.rank.toUpperCase()"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="space-y-3">
                        <div
                            class="grid grid-cols-2 gap-3 text-sm text-white/85"
                        >
                            <div class="rounded-2xl bg-white/10 p-4">
                                <p
                                    class="text-xs font-semibold uppercase tracking-[0.25em]"
                                >
                                    No.
                                </p>
                                <p class="mt-1 text-lg font-semibold">
                                    {{ yokai.yokaiNumber || yokai.bossNumber }}
                                </p>
                            </div>
                            <div class="rounded-2xl bg-white/10 p-4">
                                <p
                                    class="text-xs font-semibold uppercase tracking-[0.25em]"
                                >
                                    Weakness
                                </p>
                                <p class="mt-1 text-lg font-semibold">
                                    {{ yokai.weakness || "Unknown" }}
                                </p>
                            </div>
                        </div>
                        <SharedShareActions />
                    </div>
                </div>
            </div>
        </UCard>

        <div class="grid gap-6 xl:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <div class="space-y-6">
                <SharedSectionCard title="Description" :accent="accent">
                    <p
                        class="text-sm leading-7 text-slate-600 dark:text-slate-300"
                    >
                        {{ yokai.description }}
                    </p>
                </SharedSectionCard>

                <SharedSectionCard
                    v-if="!isBoss"
                    title="Battle profile"
                    :accent="accent"
                >
                    <div class="grid gap-4 md:grid-cols-2">
                        <div
                            class="rounded-2xl bg-slate-100 p-4 dark:bg-zinc-900"
                        >
                            <p
                                class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500"
                            >
                                Food
                            </p>
                            <p
                                class="mt-2 flex items-center gap-3 text-lg font-semibold"
                            >
                                <SharedAppImage
                                    v-if="foodMeta?.image"
                                    :src="foodMeta.image"
                                    :alt="yokai.favouriteFood || 'Unknown food'"
                                    size="sm"
                                />
                                {{ yokai.favouriteFood || "Unknown" }}
                            </p>
                        </div>
                        <div
                            class="rounded-2xl bg-slate-100 p-4 dark:bg-zinc-900"
                        >
                            <p
                                class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500"
                            >
                                Element
                            </p>
                            <p
                                class="mt-2 flex items-center gap-3 text-lg font-semibold"
                            >
                                <SharedAppImage
                                    v-if="
                                        getMetadataEntry(
                                            elements,
                                            yokai.element,
                                        )?.image
                                    "
                                    :src="
                                        getMetadataEntry(
                                            elements,
                                            yokai.element,
                                        )!.image
                                    "
                                    :alt="yokai.element"
                                    size="sm"
                                />
                                {{ yokai.element }}
                            </p>
                        </div>
                    </div>
                </SharedSectionCard>

                <SharedSectionCard
                    v-if="!isBoss && yokaiLocations.length"
                    title="Locations"
                    :accent="accent"
                >
                    <div class="flex flex-wrap gap-2">
                        <UBadge
                            v-for="location in yokaiLocations"
                            :key="location"
                            color="neutral"
                            variant="soft"
                            :label="location"
                        />
                    </div>
                </SharedSectionCard>

                <SharedSectionCard
                    v-if="!isBoss && moveSections.length"
                    title="Moves and abilities"
                    :accent="accent"
                >
                    <div class="space-y-4">
                        <div
                            v-for="section in moveSections"
                            :key="section.label"
                            class="rounded-[1.75rem] p-5 shadow-sm"
                            :class="
                                movePalette[section.label]?.card ||
                                'bg-slate-100 text-slate-900 dark:bg-zinc-900 dark:text-white'
                            "
                        >
                            <div
                                class="flex items-center justify-between gap-4"
                            >
                                <div class="space-y-2">
                                    <p
                                        class="text-sm font-semibold"
                                        :class="
                                            movePalette[section.label]?.label ||
                                            'text-slate-500 dark:text-slate-300'
                                        "
                                    >
                                        {{ section.label }}
                                    </p>
                                    <h3 class="text-2xl font-semibold">
                                        {{ section.value?.name }}
                                    </h3>
                                </div>
                                <div
                                    v-if="section.value?.power"
                                    class="rounded-full px-3 py-1 text-sm font-semibold shadow-sm"
                                    :class="
                                        movePalette[section.label]?.badge ||
                                        'bg-slate-900 text-white'
                                    "
                                >
                                    Power {{ section.value.power }}
                                </div>
                            </div>
                            <p
                                v-if="section.value?.description"
                                class="mt-3 text-base leading-7"
                            >
                                {{ section.value.description }}
                            </p>
                        </div>
                    </div>
                </SharedSectionCard>

                <SharedSectionCard
                    v-if="!isBoss && evolutionEntries.length"
                    title="Evolution"
                    :accent="accent"
                >
                    <div class="space-y-4">
                        <div
                            v-for="entry in evolutionEntries"
                            :key="entry.index"
                            class="rounded-2xl border border-[var(--color-yokai-border)] p-4 dark:border-[var(--color-yokai-dark-border)]"
                        >
                            <div
                                v-if="entry.type === 'level'"
                                class="space-y-3"
                            >
                                <p class="text-sm font-semibold text-slate-500">
                                    Level {{ entry.level }}
                                </p>
                                <div class="grid gap-3 md:grid-cols-2">
                                    <component
                                        v-for="member in entry.yokais"
                                        :key="member.name"
                                        :is="
                                            getYokaiHref(version, member.name)
                                                ? 'NuxtLink'
                                                : 'div'
                                        "
                                        :to="
                                            getYokaiHref(
                                                version,
                                                member.name,
                                            ) || undefined
                                        "
                                        class="flex items-center gap-3 rounded-2xl bg-slate-100 p-3 dark:bg-zinc-900"
                                    >
                                        <SharedAppImage
                                            :src="member.image"
                                            :alt="member.name"
                                        />
                                        <span class="font-semibold">{{
                                            member.name
                                        }}</span>
                                    </component>
                                </div>
                            </div>

                            <div v-else class="space-y-3">
                                <p class="text-sm font-semibold text-slate-500">
                                    {{
                                        entry.withItems
                                            ? "Fusion with item"
                                            : "Fusion"
                                    }}
                                </p>
                                <div class="grid gap-3 md:grid-cols-3">
                                    <component
                                        v-for="member in entry.yokais"
                                        :key="member.name"
                                        :is="
                                            getYokaiHref(version, member.name)
                                                ? 'NuxtLink'
                                                : 'div'
                                        "
                                        :to="
                                            getYokaiHref(
                                                version,
                                                member.name,
                                            ) || undefined
                                        "
                                        class="flex items-center gap-3 rounded-2xl bg-slate-100 p-3 dark:bg-zinc-900"
                                    >
                                        <SharedAppImage
                                            :src="member.image"
                                            :alt="member.name"
                                        />
                                        <span class="font-semibold">{{
                                            member.name
                                        }}</span>
                                    </component>
                                    <component
                                        v-if="entry.item"
                                        :is="
                                            getItemHref(
                                                version,
                                                entry.item.name,
                                            )
                                                ? 'NuxtLink'
                                                : 'div'
                                        "
                                        :to="
                                            getItemHref(
                                                version,
                                                entry.item.name,
                                            ) || undefined
                                        "
                                        class="flex items-center gap-3 rounded-2xl bg-slate-100 p-3 dark:bg-zinc-900"
                                    >
                                        <SharedAppImage
                                            :src="entry.item.image"
                                            :alt="entry.item.name"
                                        />
                                        <span class="font-semibold">{{
                                            entry.item.name
                                        }}</span>
                                    </component>
                                </div>
                            </div>
                        </div>
                    </div>
                </SharedSectionCard>

                <SharedSectionCard
                    v-if="!isBoss && seal"
                    title="Yo-kai seal"
                    :accent="accent"
                >
                    <div class="grid gap-3 md:grid-cols-2">
                        <component
                            v-for="member in seal.yokaisToUnlock"
                            :key="member.name"
                            :is="
                                getYokaiHref(version, member.name)
                                    ? 'NuxtLink'
                                    : 'div'
                            "
                            :to="
                                getYokaiHref(version, member.name) || undefined
                            "
                            class="flex items-center gap-3 rounded-2xl bg-slate-100 p-3 dark:bg-zinc-900"
                        >
                            <SharedAppImage
                                :src="member.image"
                                :alt="member.name"
                            />
                            <span class="font-semibold">{{ member.name }}</span>
                        </component>
                    </div>
                </SharedSectionCard>

                <SharedSectionCard
                    v-if="!isBoss && yokai.crankakai?.length"
                    title="Crank-a-kai sources"
                    :accent="accent"
                >
                    <div class="grid gap-3 md:grid-cols-2">
                        <div
                            v-for="source in yokai.crankakai"
                            :key="source.name"
                            class="flex items-center gap-3 rounded-2xl bg-slate-100 p-3 dark:bg-zinc-900"
                        >
                            <SharedAppImage
                                :src="source.image"
                                :alt="source.name"
                            />
                            <span class="font-semibold">{{ source.name }}</span>
                        </div>
                    </div>
                </SharedSectionCard>
            </div>

            <div class="space-y-6">
                <SharedSectionCard
                    v-if="!isBoss && yokai.stats"
                    title="Stats"
                    :accent="accent"
                >
                    <div class="space-y-4">
                        <div
                            v-for="(value, stat) in yokai.stats"
                            :key="stat"
                            class="grid gap-3 rounded-2xl bg-slate-100 p-4 dark:bg-zinc-900 md:grid-cols-[5rem_5rem_minmax(0,1fr)] md:items-center"
                        >
                            <p
                                class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500"
                            >
                                {{ stat }}
                            </p>
                            <p class="text-2xl font-semibold">
                                {{ value }}
                            </p>
                            <div
                                class="h-4 overflow-hidden rounded-full bg-slate-200 dark:bg-zinc-800"
                            >
                                <div
                                    class="h-full rounded-full transition-[width] duration-300"
                                    :class="
                                        statPalette[String(stat)] ||
                                        'bg-slate-500'
                                    "
                                    :style="{
                                        width: `${Math.min((Number(value) / 500) * 100, 100)}%`,
                                    }"
                                />
                            </div>
                        </div>
                    </div>
                </SharedSectionCard>

                <SharedSectionCard
                    v-if="yokai.type?.length"
                    title="Special types"
                    :accent="accent"
                >
                    <div class="flex flex-wrap gap-2">
                        <UBadge
                            v-for="type in yokai.type"
                            :key="type"
                            color="primary"
                            variant="soft"
                            :label="type"
                        />
                    </div>
                </SharedSectionCard>
            </div>
        </div>
    </div>
</template>
