<script setup lang="ts">
import { computed } from "vue";
import { resolveImageUrl } from "../../lib/images";

const props = withDefaults(
    defineProps<{
        src: string;
        alt: string;
        size?: "sm" | "md" | "lg";
        rounded?: string;
    }>(),
    {
        size: "md",
        rounded: "rounded-2xl",
    },
);
const sizeClasses = {
    sm: "h-12 w-12",
    md: "h-20 w-20",
    lg: "h-40 w-40",
};

const resolvedSrc = computed(() => resolveImageUrl(props.src));
</script>

<template>
    <img
        :src="resolvedSrc"
        :alt="alt"
        loading="lazy"
        class="object-contain"
        :class="[sizeClasses[size], rounded]"
    />
</template>
