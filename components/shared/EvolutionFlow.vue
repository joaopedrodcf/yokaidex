<script setup lang="ts">
import { computed } from "vue";
import { getItemHref, getYokaiHref } from "../../lib/catalog";
import type {
    EvolutionEntry,
    GameVersion,
    NamedImage,
} from "../../types/domain";

const { entry, version, accent } = defineProps<{
    entry: EvolutionEntry;
    version: GameVersion;
    accent: string;
}>();

const result = computed(() => entry.yokais.at(-1));
const yokaiIngredients = computed(() => entry.yokais.slice(0, -1));
const methodLabel = computed(() =>
    entry.type === "level" ? `Level ${entry.level}` : "Fuse",
);
const methodIcon = computed(() =>
    entry.type === "level" ? "i-lucide-sparkles" : "i-lucide-git-merge",
);

const getIngredientHref = (ingredient: NamedImage, isItem = false) =>
    isItem
        ? getItemHref(version, ingredient.name)
        : getYokaiHref(version, ingredient.name);
</script>

<template>
    <article
        class="relative overflow-hidden rounded-3xl border border-[var(--color-yokai-border)] bg-slate-50/70 p-4 dark:border-[var(--color-yokai-dark-border)] dark:bg-zinc-950/35 sm:p-5"
    >
        <div
            class="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full opacity-[0.08] blur-3xl"
            :style="{ backgroundColor: accent }"
        />

        <div class="relative grid items-stretch gap-3">
            <section
                class="rounded-2xl border border-slate-200/80 bg-white/70 p-3 dark:border-zinc-800 dark:bg-zinc-900/70"
                aria-label="Evolution ingredients"
            >
                <p
                    class="mb-2 px-1 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400"
                >
                    {{ entry.type === "level" ? "Starts as" : "Combine" }}
                </p>

                <div class="space-y-2">
                    <template
                        v-for="(ingredient, index) in yokaiIngredients"
                        :key="ingredient.name"
                    >
                        <div
                            v-if="index > 0"
                            class="flex items-center gap-2 px-2 text-slate-400"
                            aria-hidden="true"
                        >
                            <span class="h-px flex-1 bg-current opacity-30" />
                            <UIcon name="i-lucide-plus" class="h-4 w-4" />
                            <span class="h-px flex-1 bg-current opacity-30" />
                        </div>

                        <component
                            :is="
                                getIngredientHref(ingredient)
                                    ? 'NuxtLink'
                                    : 'div'
                            "
                            :to="getIngredientHref(ingredient) || undefined"
                            class="group flex min-w-0 items-center gap-3 rounded-xl p-2 transition-colors hover:bg-slate-100 dark:hover:bg-zinc-800"
                        >
                            <SharedAppImage
                                :src="ingredient.image"
                                alt=""
                                size="sm"
                                rounded="rounded-xl"
                            />
                            <div class="min-w-0">
                                <span
                                    class="block truncate font-semibold text-slate-900 dark:text-white"
                                >
                                    {{ ingredient.name }}
                                </span>
                                <span
                                    class="text-xs text-slate-500 dark:text-slate-400"
                                >
                                    Yo-kai
                                </span>
                            </div>
                        </component>
                    </template>

                    <template v-if="entry.item">
                        <div
                            class="flex items-center gap-2 px-2 text-slate-400"
                            aria-hidden="true"
                        >
                            <span class="h-px flex-1 bg-current opacity-30" />
                            <UIcon name="i-lucide-plus" class="h-4 w-4" />
                            <span class="h-px flex-1 bg-current opacity-30" />
                        </div>

                        <component
                            :is="
                                getIngredientHref(entry.item, true)
                                    ? 'NuxtLink'
                                    : 'div'
                            "
                            :to="
                                getIngredientHref(entry.item, true) || undefined
                            "
                            class="group flex min-w-0 items-center gap-3 rounded-xl p-2 transition-colors hover:bg-slate-100 dark:hover:bg-zinc-800"
                        >
                            <span
                                class="relative grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-amber-100 dark:bg-amber-950/45"
                            >
                                <SharedAppImage
                                    :src="entry.item.image"
                                    alt=""
                                    size="sm"
                                    rounded="rounded-xl"
                                />
                                <span
                                    class="absolute -bottom-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-amber-500 text-white ring-2 ring-white dark:ring-zinc-900"
                                    aria-hidden="true"
                                >
                                    <UIcon
                                        name="i-lucide-package"
                                        class="h-3 w-3"
                                    />
                                </span>
                            </span>
                            <div class="min-w-0">
                                <span
                                    class="block truncate font-semibold text-slate-900 dark:text-white"
                                >
                                    {{ entry.item.name }}
                                </span>
                                <span
                                    class="text-xs font-medium text-amber-700 dark:text-amber-400"
                                >
                                    Fusion item
                                </span>
                            </div>
                        </component>
                    </template>
                </div>
            </section>

            <div
                class="relative flex items-center justify-center py-1 md:py-0"
                role="group"
                :aria-label="`Evolution requirement: ${methodLabel}`"
            >
                <span
                    class="absolute h-full w-px bg-slate-300 dark:bg-zinc-700"
                    aria-hidden="true"
                />
                <div
                    class="relative z-10 flex items-center gap-2 rounded-full border bg-white px-3 py-2 text-sm font-bold shadow-sm dark:bg-zinc-900"
                    :style="{
                        borderColor: `color-mix(in srgb, ${accent} 45%, transparent)`,
                        color: accent,
                    }"
                >
                    <UIcon :name="methodIcon" class="h-4 w-4" />
                    <span class="whitespace-nowrap">{{ methodLabel }}</span>
                    <UIcon
                        name="i-lucide-arrow-down"
                        class="h-4 w-4"
                        aria-hidden="true"
                    />
                </div>
            </div>

            <section
                v-if="result"
                class="relative flex flex-col rounded-2xl border-2 bg-white p-3 shadow-sm dark:bg-zinc-900"
                :style="{
                    borderColor: `color-mix(in srgb, ${accent} 55%, transparent)`,
                }"
                aria-label="Evolution result"
            >
                <p
                    class="mb-2 px-1 text-[0.68rem] font-bold uppercase tracking-[0.2em]"
                    :style="{ color: accent }"
                >
                    Evolves into
                </p>
                <component
                    :is="getIngredientHref(result) ? 'NuxtLink' : 'div'"
                    :to="getIngredientHref(result) || undefined"
                    class="group flex flex-1 items-center gap-4 rounded-xl p-2 transition-transform hover:translate-x-0.5"
                >
                    <span
                        class="grid h-20 w-20 shrink-0 place-items-center rounded-2xl"
                        :style="{
                            backgroundColor: `color-mix(in srgb, ${accent} 12%, transparent)`,
                        }"
                    >
                        <SharedAppImage
                            :src="result.image"
                            alt=""
                            rounded="rounded-2xl"
                        />
                    </span>
                    <div class="min-w-0">
                        <span
                            class="block text-xl font-bold text-slate-950 dark:text-white"
                        >
                            {{ result.name }}
                        </span>
                        <span
                            class="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-slate-400"
                        >
                            Evolution result
                            <UIcon
                                v-if="getIngredientHref(result)"
                                name="i-lucide-arrow-up-right"
                                class="h-3.5 w-3.5"
                            />
                        </span>
                    </div>
                </component>
            </section>
        </div>
    </article>
</template>
