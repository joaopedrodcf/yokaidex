<script setup lang="ts">
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
</script>

<template>
    <img
        :src="src"
        :alt="alt"
        loading="lazy"
        class="object-contain"
        :class="[sizeClasses[size], rounded]"
    />
</template>
