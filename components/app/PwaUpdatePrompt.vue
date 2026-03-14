<script setup lang="ts">
const { $pwa } = useNuxtApp();

const hasPrompt = computed(
    () => Boolean($pwa?.needRefresh) || Boolean($pwa?.offlineReady),
);

const title = computed(() =>
    $pwa?.needRefresh
        ? "A new Yokaidex is ready."
        : "Yokaidex is ready offline.",
);

const description = computed(() =>
    $pwa?.needRefresh
        ? "Refresh once to swap out the cached React-era app shell for the latest Nuxt site."
        : "The latest site assets are cached, so the app can load faster when you revisit.",
);

const refreshApp = async () => {
    if ($pwa?.needRefresh) {
        await $pwa.updateServiceWorker(true);
    }
};
</script>

<template>
    <div
        v-if="hasPrompt"
        class="fixed right-4 bottom-4 z-50 w-[min(28rem,calc(100vw-2rem))]"
    >
        <div
            class="rounded-3xl border border-[var(--color-yokai-border)] bg-white p-4 shadow-2xl shadow-slate-950/10 dark:border-[var(--color-yokai-dark-border)] dark:bg-zinc-950"
        >
            <p class="font-semibold text-sm">{{ title }}</p>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {{ description }}
            </p>

            <div class="mt-4 flex flex-wrap gap-2">
                <UButton
                    v-if="$pwa?.needRefresh"
                    color="primary"
                    label="Refresh now"
                    @click="refreshApp"
                />
                <UButton
                    color="neutral"
                    variant="ghost"
                    label="Dismiss"
                    @click="$pwa?.cancelPrompt()"
                />
            </div>
        </div>
    </div>
</template>
