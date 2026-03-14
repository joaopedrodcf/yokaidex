<script setup lang="ts">
import { refDebounced } from "@vueuse/core";
import {
    defaultItemFilters,
    filterItems,
    getVersionPath,
    itemFilterOptions,
    toRouteSlug,
} from "../../lib/catalog";
import type { GameVersion } from "../../types/domain";

const props = defineProps<{
    version: GameVersion;
}>();

const items = useItemCatalog(toRef(props, "version"));
const filters = reactive(defaultItemFilters());
const mobileFiltersOpen = ref(false);
const nameQuery = ref("");
const debouncedNameQuery = refDebounced(nameQuery, 120);
const currentPage = ref(1);
const itemsPerPage = 24;
const appliedFilters = computed(() => ({
    ...filters,
    name: debouncedNameQuery.value,
}));

const filteredItems = computed(() =>
    filterItems(items.value, appliedFilters.value),
);
const totalPages = computed(() =>
    Math.max(1, Math.ceil(filteredItems.value.length / itemsPerPage)),
);
const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;

    return filteredItems.value.slice(start, start + itemsPerPage);
});
const activeFilterCount = computed(() => filters.selectedTypes.length);

const toggleType = (type: string) => {
    const normalized = type.toLowerCase();

    filters.selectedTypes = filters.selectedTypes.includes(normalized)
        ? filters.selectedTypes.filter((entry) => entry !== normalized)
        : [...filters.selectedTypes, normalized];
};

const resetFilters = () => {
    Object.assign(filters, defaultItemFilters());
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
        <div class="grid gap-6 xl:grid-cols-[20rem_minmax(0,1fr)]">
            <UCard class="hidden xl:block">
                <template #header>
                    <div class="space-y-2">
                        <p
                            class="text-sm font-semibold uppercase tracking-[0.3em] text-red-500"
                        >
                            Items
                        </p>
                        <h2 class="text-2xl font-semibold">
                            Yo-kai Watch {{ version }}
                        </h2>
                        <p
                            class="text-sm leading-6 text-slate-600 dark:text-slate-300"
                        >
                            Browse all items and equipment entries, then narrow
                            the list by type and name.
                        </p>
                    </div>
                </template>

                <div class="space-y-5">
                    <UInput
                        v-model="nameQuery"
                        size="xl"
                        placeholder="Search items by name"
                    />

                    <div class="space-y-3">
                        <p
                            class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500"
                        >
                            Item type
                        </p>
                        <div class="flex flex-wrap gap-2">
                            <UButton
                                v-for="type in itemFilterOptions"
                                :key="type"
                                :label="type"
                                size="sm"
                                :variant="
                                    filters.selectedTypes.includes(
                                        type.toLowerCase(),
                                    )
                                        ? 'solid'
                                        : 'outline'
                                "
                                @click="toggleType(type)"
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
                                Items
                            </p>
                            <h2 class="text-2xl font-semibold">
                                Yo-kai Watch {{ version }}
                            </h2>
                            <p
                                class="text-sm leading-6 text-slate-600 dark:text-slate-300"
                            >
                                Search the inventory first, then open filters
                                only when you need to narrow by item type.
                            </p>
                        </div>
                    </template>

                    <div class="space-y-4">
                        <UInput
                            v-model="nameQuery"
                            size="xl"
                            placeholder="Search items by name"
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
                                    {{ filteredItems.length }} items found
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
                            {{ filteredItems.length }} items found
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
                        v-for="item in paginatedItems"
                        :key="`${version}-${item.name}`"
                        :to="
                            getVersionPath(
                                version,
                                `/items/${toRouteSlug(item.name)}`,
                            )
                        "
                        class="block"
                    >
                        <UCard
                            class="h-full transition-transform duration-200 hover:-translate-y-1"
                        >
                            <div class="flex items-start gap-4">
                                <SharedAppImage
                                    :src="item.image"
                                    :alt="item.name"
                                />
                                <div class="min-w-0 flex-1 space-y-3">
                                    <div>
                                        <h4 class="text-lg font-semibold">
                                            {{ item.name }}
                                        </h4>
                                        <p
                                            class="text-sm text-slate-500 dark:text-slate-400"
                                        >
                                            {{ item.type }}
                                        </p>
                                    </div>
                                    <p
                                        class="line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
                                    >
                                        {{ item.description }}
                                    </p>
                                    <div class="flex flex-wrap gap-2">
                                        <UBadge
                                            color="primary"
                                            variant="soft"
                                            :label="item.type"
                                        />
                                        <UBadge
                                            v-if="
                                                item.locations?.filter(Boolean)
                                                    .length
                                            "
                                            color="neutral"
                                            variant="soft"
                                            :label="`${item.locations.filter(Boolean).length} locations`"
                                        />
                                    </div>
                                </div>
                            </div>
                        </UCard>
                    </NuxtLink>
                </div>

                <UAlert
                    v-if="filteredItems.length === 0"
                    color="neutral"
                    variant="soft"
                    title="No items match these filters."
                    description="Try removing a type filter or broadening the name search."
                />

                <div
                    v-else-if="totalPages > 1"
                    class="flex justify-center pt-2"
                >
                    <UPagination
                        v-model:page="currentPage"
                        :total="filteredItems.length"
                        :items-per-page="itemsPerPage"
                        :sibling-count="1"
                        show-edges
                    />
                </div>
            </div>
        </div>

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
                    <h3 class="text-2xl font-semibold">Refine items</h3>
                    <p
                        class="text-sm leading-6 text-slate-600 dark:text-slate-300"
                    >
                        Filter the inventory by type without pushing the results
                        grid far down the page.
                    </p>
                </div>
            </template>

            <template #body>
                <div class="space-y-5">
                    <div class="space-y-3">
                        <p
                            class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500"
                        >
                            Item type
                        </p>
                        <div class="flex flex-wrap gap-2">
                            <UButton
                                v-for="type in itemFilterOptions"
                                :key="type"
                                :label="type"
                                size="sm"
                                :variant="
                                    filters.selectedTypes.includes(
                                        type.toLowerCase(),
                                    )
                                        ? 'solid'
                                        : 'outline'
                                "
                                @click="toggleType(type)"
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
                        :label="`Show ${filteredItems.length} items`"
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
