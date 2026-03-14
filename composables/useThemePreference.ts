export const useThemePreference = () => {
    const colorMode = useColorMode();

    const preference = computed<"light" | "dark">({
        get: () => (colorMode.preference === "dark" ? "dark" : "light"),
        set: (value) => {
            colorMode.preference = value;
        },
    });

    const isDark = computed(() => colorMode.value === "dark");

    const toggleTheme = () => {
        preference.value = isDark.value ? "light" : "dark";
    };

    return {
        preference,
        isDark,
        toggleTheme,
    };
};
