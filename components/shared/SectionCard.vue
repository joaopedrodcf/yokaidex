<script setup lang="ts">
defineProps<{
    title: string;
    description?: string;
    accent?: string;
}>();
</script>

<template>
    <UCard :ui="{ body: 'space-y-4', header: 'space-y-2' }">
        <template #header>
            <div class="flex items-center gap-3">
                <span
                    class="h-3 w-3 rounded-full"
                    :style="{ backgroundColor: accent || '#ef4444' }"
                />
                <div>
                    <h2 class="text-lg font-semibold">{{ title }}</h2>
                    <p
                        v-if="description"
                        class="text-sm text-slate-500 dark:text-slate-400"
                    >
                        {{ description }}
                    </p>
                </div>
            </div>
        </template>

        <slot />
    </UCard>
</template>
