<script setup lang="ts">
import { refDebounced } from "@vueuse/core";
import {
    defaultYokaiFilters,
    elements,
    filterYokais,
    getGradientStyle,
    getMetadataEntry,
    getVersionPath,
    ranks,
    toRouteSlug,
    tribes,
    yokaiFilterOptions,
} from "../../lib/catalog";
import type { GameVersion } from "../../types/domain";

const props = defineProps<{
    version: GameVersion;
}>();

const yokais = useYokaiCatalog(toRef(props, "version"));
const filters = reactive(defaultYokaiFilters());
const mobileFiltersOpen = ref(false);
const nameQuery = ref("");
const debouncedNameQuery = refDebounced(nameQuery, 120);
const currentPage = ref(1);
const itemsPerPage = 24;
const appliedFilters = computed(() => ({
    ...filters,
    name: debouncedNameQuery.value,
}));

const filteredYokais = computed(() =>
    filterYokais(yokais.value, appliedFilters.value),
);
const totalPages = computed(() =>
    Math.max(1, Math.ceil(filteredYokais.value.length / itemsPerPage)),
);
const paginatedYokais = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;

    return filteredYokais.value.slice(start, start + itemsPerPage);
});
const activeFilterCount = computed(
    () =>
        filters.tribe.length +
        filters.rank.length +
        filters.element.length +
        filters.misc.length +
        filters.types.length,
);

const toggleFilter = (
    group: "tribe" | "rank" | "element" | "misc" | "types",
    value: string,
) => {
    const normalized = value.toLowerCase();
    const current = filters[group];

    filters[group] = current.includes(normalized)
        ? current.filter((entry) => entry !== normalized)
        : [...current, normalized];
};

const resetFilters = () => {
    Object.assign(filters, defaultYokaiFilters());
};

const closeMobileFilters = () => {
    mobileFiltersOpen.value = false;
};

watch(
    appliedFilters,
    () => {
        currentPage.value = 1;
    },
    { deep: true },
);

watch(totalPages, (pageCount) => {
    if (currentPage.value > pageCount) {
        currentPage.value = pageCount;
    }
});
</script>

<template>
    <div class="space-y-6">
        <section class="grid gap-6 xl:grid-cols-[22rem_minmax(0,1fr)]">
            <UCard class="hidden xl:block">
                <template #header>
                    <div class="space-y-2">
                        <p
                            class="text-sm font-semibold uppercase tracking-[0.3em] text-red-500"
                        >
                            Medallium
                        </p>
                        <h2 class="text-2xl font-semibold">
                            Yo-kai Watch {{ version }}
                        </h2>
                        <p
                            class="text-sm leading-6 text-slate-600 dark:text-slate-300"
                        >
                            Search by name and stack filters for tribe, rank,
                            element, special type, and progression clues.
                        </p>
                    </div>
                </template>

                <div class="space-y-5">
                    <UInput
                        v-model="nameQuery"
                        size="xl"
                        placeholder="Search yo-kai by name"
                    />

                    <div class="space-y-3">
                        <p
                            class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500"
                        >
                            Tribe
                        </p>
                        <div class="flex flex-wrap gap-2">
                            <UButton
                                v-for="tribe in yokaiFilterOptions.tribes"
                                :key="tribe"
                                :label="tribe"
                                size="sm"
                                :variant="
                                    filters.tribe.includes(tribe.toLowerCase())
                                        ? 'solid'
                                        : 'outline'
                                "
                                @click="toggleFilter('tribe', tribe)"
                            />
                        </div>
                    </div>

                    <div class="space-y-3">
                        <p
                            class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500"
                        >
                            Rank
                        </p>
                        <div class="flex flex-wrap gap-2">
                            <UButton
                                v-for="rank in yokaiFilterOptions.ranks"
                                :key="rank"
                                :label="rank"
                                size="sm"
                                color="neutral"
                                :variant="
                                    filters.rank.includes(rank.toLowerCase())
                                        ? 'solid'
                                        : 'outline'
                                "
                                @click="toggleFilter('rank', rank)"
                            />
                        </div>
                    </div>

                    <div class="space-y-3">
                        <p
                            class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500"
                        >
                            Element
                        </p>
                        <div class="flex flex-wrap gap-2">
                            <UButton
                                v-for="element in yokaiFilterOptions.elements"
                                :key="element"
                                :label="element"
                                size="sm"
                                color="neutral"
                                :variant="
                                    filters.element.includes(
                                        element.toLowerCase(),
                                    )
                                        ? 'solid'
                                        : 'outline'
                                "
                                @click="toggleFilter('element', element)"
                            />
                        </div>
                    </div>

                    <div class="space-y-3">
                        <p
                            class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500"
                        >
                            Special tags
                        </p>
                        <div class="flex flex-wrap gap-2">
                            <UButton
                                v-for="type in yokaiFilterOptions.types"
                                :key="type"
                                :label="type"
                                size="sm"
                                color="primary"
                                :variant="
                                    filters.types.includes(type.toLowerCase())
                                        ? 'solid'
                                        : 'outline'
                                "
                                @click="toggleFilter('types', type)"
                            />
                        </div>
                    </div>

                    <div class="space-y-3">
                        <p
                            class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500"
                        >
                            Misc
                        </p>
                        <div class="flex flex-wrap gap-2">
                            <UButton
                                v-for="misc in yokaiFilterOptions.misc"
                                :key="misc"
                                :label="misc"
                                size="sm"
                                color="neutral"
                                :variant="
                                    filters.misc.includes(misc.toLowerCase())
                                        ? 'solid'
                                        : 'outline'
                                "
                                @click="toggleFilter('misc', misc)"
                            />
                        </div>
                    </div>

                    <UButton
                        color="neutral"
                        variant="soft"
                        label="Reset filters"
                        @click="resetFilters"
                    />
                </div>
            </UCard>

            <div class="space-y-4">
                <UCard class="xl:hidden">
                    <template #header>
                        <div class="space-y-2">
                            <p
                                class="text-sm font-semibold uppercase tracking-[0.3em] text-red-500"
                            >
                                Medallium
                            </p>
                            <h2 class="text-2xl font-semibold">
                                Yo-kai Watch {{ version }}
                            </h2>
                            <p
                                class="text-sm leading-6 text-slate-600 dark:text-slate-300"
                            >
                                Search quickly, then open filters only when you
                                need to narrow the medallium.
                            </p>
                        </div>
                    </template>

                    <div class="space-y-4">
                        <UInput
                            v-model="nameQuery"
                            size="xl"
                            placeholder="Search yo-kai by name"
                        />
                        <div
                            class="flex items-center justify-between rounded-2xl border border-[var(--color-yokai-border)] px-4 py-3 text-sm dark:border-[var(--color-yokai-dark-border)]"
                        >
                            <div>
                                <p
                                    class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500"
                                >
                                    Results
                                </p>
                                <p class="mt-1 font-semibold">
                                    {{ filteredYokais.length }} yo-kai found
                                </p>
                            </div>
                            <UBadge
                                v-if="activeFilterCount > 0"
                                color="primary"
                                variant="soft"
                                :label="`${activeFilterCount} active`"
                            />
                        </div>
                    </div>
                </UCard>

                <div class="flex items-center justify-between">
                    <div>
                        <p
                            class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500"
                        >
                            Results
                        </p>
                        <h3 class="text-2xl font-semibold">
                            {{ filteredYokais.length }} yo-kai found
                        </h3>
                    </div>
                    <UBadge
                        color="primary"
                        variant="soft"
                        :label="`Version ${version}`"
                    />
                </div>

                <div class="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
                    <NuxtLink
                        v-for="yokai in paginatedYokais"
                        :key="`${version}-${yokai.name}`"
                        :to="
                            getVersionPath(
                                version,
                                `/yokais/${toRouteSlug(yokai.name, yokai.tribe)}`,
                            )
                        "
                        class="block"
                    >
                        <UCard
                            class="h-full overflow-hidden transition-transform duration-200 hover:-translate-y-1"
                        >
                            <template #header>
                                <div
                                    class="rounded-2xl p-4 text-white"
                                    :style="getGradientStyle(yokai.tribe)"
                                >
                                    <div class="flex items-center gap-4">
                                        <SharedAppImage
                                            :src="yokai.image"
                                            :alt="yokai.name"
                                        />
                                        <div>
                                            <p
                                                class="text-xs font-semibold uppercase tracking-[0.25em] text-white/80"
                                            >
                                                #{{
                                                    yokai.yokaiNumber ||
                                                    yokai.bossNumber ||
                                                    yokai.index
                                                }}
                                            </p>
                                            <h4 class="text-xl font-semibold">
                                                {{ yokai.name }}
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </template>

                            <div class="space-y-4">
                                <div class="flex flex-wrap gap-2">
                                    <UBadge
                                        color="neutral"
                                        variant="soft"
                                        :label="yokai.tribe"
                                    />
                                    <UBadge
                                        color="neutral"
                                        variant="soft"
                                        :label="yokai.element"
                                    />
                                    <UBadge
                                        color="primary"
                                        variant="soft"
                                        :label="yokai.rank.toUpperCase()"
                                    />
                                </div>

                                <p
                                    class="line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
                                >
                                    {{ yokai.description }}
                                </p>

                                <div
                                    class="grid grid-cols-3 gap-3 text-xs text-slate-500 dark:text-slate-400"
                                >
                                    <div
                                        class="rounded-2xl bg-slate-100 p-3 dark:bg-zinc-900"
                                    >
                                        <p class="font-semibold uppercase">
                                            Tribe
                                        </p>
                                        <p class="mt-1">
                                            {{
                                                getMetadataEntry(
                                                    tribes,
                                                    yokai.tribe,
                                                )?.name || yokai.tribe
                                            }}
                                        </p>
                                    </div>
                                    <div
                                        class="rounded-2xl bg-slate-100 p-3 dark:bg-zinc-900"
                                    >
                                        <p class="font-semibold uppercase">
                                            Element
                                        </p>
                                        <p class="mt-1">
                                            {{
                                                getMetadataEntry(
                                                    elements,
                                                    yokai.element,
                                                )?.name || yokai.element
                                            }}
                                        </p>
                                    </div>
                                    <div
                                        class="rounded-2xl bg-slate-100 p-3 dark:bg-zinc-900"
                                    >
                                        <p class="font-semibold uppercase">
                                            Rank
                                        </p>
                                        <p class="mt-1">
                                            {{
                                                getMetadataEntry(
                                                    ranks,
                                                    yokai.rank,
                                                )?.name || yokai.rank
                                            }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </UCard>
                    </NuxtLink>
                </div>

                <UAlert
                    v-if="filteredYokais.length === 0"
                    color="neutral"
                    variant="soft"
                    title="No yo-kai match these filters."
                    description="Try clearing a few tags or broadening the name search."
                />

                <div
                    v-else-if="totalPages > 1"
                    class="flex justify-center pt-2"
                >
                    <UPagination
                        v-model:page="currentPage"
                        :total="filteredYokais.length"
                        :items-per-page="itemsPerPage"
                        :sibling-count="1"
                        show-edges
                    />
                </div>
            </div>
        </section>

        <UModal
            v-model:open="mobileFiltersOpen"
            fullscreen
            dismissible
            :close="{
                color: 'neutral',
                variant: 'ghost',
                class: 'rounded-full',
            }"
            close-icon="i-lucide-x"
            class="xl:hidden"
            :ui="{
                content: 'xl:hidden flex min-h-dvh flex-col bg-[var(--ui-bg)]',
                body: 'flex-1 overflow-y-auto px-6 pb-6',
                header: 'border-b border-[var(--color-yokai-border)] px-6 py-5 dark:border-[var(--color-yokai-dark-border)]',
                footer: 'border-t border-[var(--color-yokai-border)] px-6 py-4 dark:border-[var(--color-yokai-dark-border)]',
            }"
        >
            <template #header>
                <div class="space-y-2 pr-10">
                    <p
                        class="text-sm font-semibold uppercase tracking-[0.3em] text-red-500"
                    >
                        Filters
                    </p>
                    <h3 class="text-2xl font-semibold">Refine medallium</h3>
                    <p
                        class="text-sm leading-6 text-slate-600 dark:text-slate-300"
                    >
                        Stack tribe, rank, element, tag, and misc filters
                        without losing your place in the list.
                    </p>
                </div>
            </template>

            <template #body>
                <div class="space-y-5">
                    <div class="space-y-3">
                        <p
                            class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500"
                        >
                            Tribe
                        </p>
                        <div class="flex flex-wrap gap-2">
                            <UButton
                                v-for="tribe in yokaiFilterOptions.tribes"
                                :key="tribe"
                                :label="tribe"
                                size="sm"
                                :variant="
                                    filters.tribe.includes(tribe.toLowerCase())
                                        ? 'solid'
                                        : 'outline'
                                "
                                @click="toggleFilter('tribe', tribe)"
                            />
                        </div>
                    </div>

                    <div class="space-y-3">
                        <p
                            class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500"
                        >
                            Rank
                        </p>
                        <div class="flex flex-wrap gap-2">
                            <UButton
                                v-for="rank in yokaiFilterOptions.ranks"
                                :key="rank"
                                :label="rank"
                                size="sm"
                                color="neutral"
                                :variant="
                                    filters.rank.includes(rank.toLowerCase())
                                        ? 'solid'
                                        : 'outline'
                                "
                                @click="toggleFilter('rank', rank)"
                            />
                        </div>
                    </div>

                    <div class="space-y-3">
                        <p
                            class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500"
                        >
                            Element
                        </p>
                        <div class="flex flex-wrap gap-2">
                            <UButton
                                v-for="element in yokaiFilterOptions.elements"
                                :key="element"
                                :label="element"
                                size="sm"
                                color="neutral"
                                :variant="
                                    filters.element.includes(
                                        element.toLowerCase(),
                                    )
                                        ? 'solid'
                                        : 'outline'
                                "
                                @click="toggleFilter('element', element)"
                            />
                        </div>
                    </div>

                    <div class="space-y-3">
                        <p
                            class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500"
                        >
                            Special tags
                        </p>
                        <div class="flex flex-wrap gap-2">
                            <UButton
                                v-for="type in yokaiFilterOptions.types"
                                :key="type"
                                :label="type"
                                size="sm"
                                color="primary"
                                :variant="
                                    filters.types.includes(type.toLowerCase())
                                        ? 'solid'
                                        : 'outline'
                                "
                                @click="toggleFilter('types', type)"
                            />
                        </div>
                    </div>

                    <div class="space-y-3">
                        <p
                            class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500"
                        >
                            Misc
                        </p>
                        <div class="flex flex-wrap gap-2">
                            <UButton
                                v-for="misc in yokaiFilterOptions.misc"
                                :key="misc"
                                :label="misc"
                                size="sm"
                                color="neutral"
                                :variant="
                                    filters.misc.includes(misc.toLowerCase())
                                        ? 'solid'
                                        : 'outline'
                                "
                                @click="toggleFilter('misc', misc)"
                            />
                        </div>
                    </div>
                </div>
            </template>

            <template #footer>
                <div class="flex gap-3">
                    <UButton
                        color="neutral"
                        variant="soft"
                        label="Reset"
                        @click="resetFilters"
                    />
                    <UButton
                        color="primary"
                        variant="solid"
                        class="flex-1 justify-center"
                        :label="`Show ${filteredYokais.length} yo-kai`"
                        @click="closeMobileFilters"
                    />
                </div>
            </template>
        </UModal>

        <UButton
            class="fixed bottom-6 right-6 z-40 rounded-full px-5 py-3 shadow-xl xl:hidden"
            color="primary"
            variant="solid"
            icon="i-lucide-sliders-horizontal"
            @click="mobileFiltersOpen = true"
        >
            <template #default>
                <span class="flex items-center gap-2">
                    <span>Filters</span>
                    <UBadge
                        v-if="activeFilterCount > 0"
                        color="neutral"
                        variant="solid"
                        :label="String(activeFilterCount)"
                    />
                </span>
            </template>
        </UButton>
    </div>
</template>
