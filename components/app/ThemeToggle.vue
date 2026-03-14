<script setup lang="ts">
const { isDark, toggleTheme } = useThemePreference();
</script>

<template>
    <UButton
        color="neutral"
        variant="outline"
        :label="isDark ? 'Light mode' : 'Dark mode'"
        @click="toggleTheme"
    />
</template>
