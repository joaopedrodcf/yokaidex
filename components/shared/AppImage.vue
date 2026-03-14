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

const CLOUDINARY_BASE_URL =
    "https://res.cloudinary.com/dcrcweea8/image/upload/";
const sizeClasses = {
    sm: "h-12 w-12",
    md: "h-20 w-20",
    lg: "h-40 w-40",
};

const cloudinarySrc = computed(() =>
    props.src.startsWith(CLOUDINARY_BASE_URL)
        ? props.src.slice(CLOUDINARY_BASE_URL.length)
        : null,
);
</script>

<template>
    <NuxtPicture
        v-if="cloudinarySrc"
        provider="cloudinary"
        :src="cloudinarySrc"
        :img-attrs="{
            alt,
            loading: 'lazy',
            class: `object-contain ${sizeClasses[size]} ${rounded}`,
        }"
        fit="contain"
    />
    <img
        v-else
        :src="src"
        :alt="alt"
        loading="lazy"
        class="object-contain"
        :class="[sizeClasses[size], rounded]"
    />
</template>
