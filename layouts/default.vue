<script setup lang="ts">
const menuOpen = ref(false);

const closeMenu = () => {
    menuOpen.value = false;
};
</script>

<template>
    <div
        class="min-h-screen bg-[var(--color-yokai-bg)] dark:bg-[var(--color-yokai-dark-bg)]"
    >
        <aside
            class="fixed inset-y-0 left-0 z-40 hidden w-80 border-r border-[var(--color-yokai-border)] bg-white/95 backdrop-blur dark:border-[var(--color-yokai-dark-border)] dark:bg-zinc-950/95 lg:block"
        >
            <AppSiteNavigation @navigate="closeMenu" />
        </aside>

        <div class="lg:pl-80">
            <header
                class="sticky top-0 z-30 flex items-center justify-between border-b border-[var(--color-yokai-border)] bg-white/90 px-4 py-3 backdrop-blur dark:border-[var(--color-yokai-dark-border)] dark:bg-zinc-950/90 lg:px-8"
            >
                <div>
                    <p
                        class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500"
                    >
                        Yo-kai Watch guide
                    </p>
                    <h1 class="font-semibold text-xl">Yokaidex</h1>
                </div>

                <div class="flex items-center gap-2">
                    <AppThemeToggle />
                    <UButton
                        class="lg:hidden"
                        color="neutral"
                        variant="outline"
                        label="Menu"
                        @click="menuOpen = true"
                    />
                </div>
            </header>

            <main class="px-4 py-6 lg:px-8">
                <slot />
            </main>
        </div>

        <div
            v-if="menuOpen"
            class="fixed inset-0 z-50 bg-black/60 lg:hidden"
            @click.self="closeMenu"
        >
            <aside class="h-full w-80 max-w-[90vw] bg-white dark:bg-zinc-950">
                <AppSiteNavigation @navigate="closeMenu" />
            </aside>
        </div>
    </div>
</template>
