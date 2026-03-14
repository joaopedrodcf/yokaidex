<script setup lang="ts">
const copied = ref(false);

const share = async () => {
    if (typeof window === "undefined") {
        return;
    }

    const href = window.location.href;

    if (navigator.share) {
        await navigator.share({ url: href });
        return;
    }

    await navigator.clipboard.writeText(href);
    copied.value = true;

    window.setTimeout(() => {
        copied.value = false;
    }, 2000);
};
</script>

<template>
    <div class="flex flex-wrap gap-2">
        <UButton
            color="neutral"
            variant="solid"
            class="shadow-sm"
            @click="share"
        >
            <template #default>
                <span class="flex items-center gap-2">
                    <UIcon name="i-lucide-share-2" class="h-4 w-4" />
                    <span>Share</span>
                </span>
            </template>
        </UButton>
        <UBadge
            v-if="copied"
            color="neutral"
            variant="soft"
            label="Link copied"
        />
    </div>
</template>
