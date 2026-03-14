<script setup lang="ts">
import { DEFAULT_GAME_VERSION, getVersionPath } from "../../lib/catalog";

const emit = defineEmits<{
    navigate: [];
}>();

const route = useRoute();
const version = useGameVersion(DEFAULT_GAME_VERSION);

const links = computed(() => [
    { label: "Medallium", to: getVersionPath(version.value) },
    ...(version.value !== "1"
        ? [
              {
                  label: "Baffle board",
                  to: getVersionPath(version.value, "/baffle-board"),
              },
          ]
        : []),
    { label: "Items", to: getVersionPath(version.value, "/items") },
    { label: "Crank-a-kai", to: getVersionPath(version.value, "/crank-a-kai") },
    { label: "About us", to: getVersionPath(version.value, "/about-us") },
]);

const isActive = (to: string) =>
    to === "/"
        ? route.path === "/"
        : route.path === to || route.path.startsWith(`${to}/`);
</script>

<template>
    <div class="flex h-full flex-col gap-8 p-6">
        <div class="space-y-2">
            <p
                class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500"
            >
                Yokaidex
            </p>
            <p
                class="max-w-xs text-sm leading-6 text-slate-600 dark:text-slate-300"
            >
                A modernized field guide for Yo-kai Watch 1, 2, and 3 with
                searchable catalogs, detailed entries, items, crank-a-kai
                rewards, and puzzle references.
            </p>
        </div>

        <nav class="space-y-2">
            <p
                class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500"
            >
                Pages
            </p>
            <NuxtLink
                v-for="link in links"
                :key="link.to"
                :to="link.to"
                class="block rounded-2xl px-4 py-3 text-sm font-medium transition"
                :class="
                    isActive(link.to)
                        ? 'bg-black text-white dark:bg-white dark:text-black'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-zinc-900 dark:text-slate-200 dark:hover:bg-zinc-800'
                "
                @click="emit('navigate')"
            >
                {{ link.label }}
            </NuxtLink>
        </nav>

        <div class="space-y-3">
            <p
                class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500"
            >
                Game version
            </p>
            <div class="grid grid-cols-3 gap-2">
                <NuxtLink
                    v-for="gameVersion in ['1', '2', '3']"
                    :key="gameVersion"
                    :to="getVersionPath(gameVersion as '1' | '2' | '3')"
                    class="rounded-2xl border px-3 py-3 text-center text-sm font-semibold transition"
                    :class="
                        version === gameVersion
                            ? 'border-black bg-black text-white dark:border-white dark:bg-white dark:text-black'
                            : 'border-[var(--color-yokai-border)] bg-white hover:border-black dark:border-[var(--color-yokai-dark-border)] dark:bg-zinc-900 dark:hover:border-white'
                    "
                    @click="emit('navigate')"
                >
                    YW {{ gameVersion }}
                </NuxtLink>
            </div>
        </div>

        <div
            class="mt-auto rounded-3xl border border-[var(--color-yokai-border)] p-4 dark:border-[var(--color-yokai-dark-border)]"
        >
            <p class="text-sm font-semibold">Stay in touch</p>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Follow the original project on
                <a
                    class="font-semibold underline decoration-red-400 underline-offset-4"
                    href="https://twitter.com/yokaidex"
                    target="_blank"
                    rel="noreferrer"
                >
                    Twitter
                </a>
                for updates and new additions.
            </p>
        </div>
    </div>
</template>
