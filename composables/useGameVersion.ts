import { DEFAULT_GAME_VERSION, normalizeGameVersion } from "../lib/catalog";
import type { GameVersion } from "../types/domain";

export const useGameVersion = (
    fallback: GameVersion = DEFAULT_GAME_VERSION,
) => {
    const route = useRoute();

    return computed<GameVersion>(() => {
        const version = normalizeGameVersion(
            typeof route.params.version === "string"
                ? route.params.version
                : undefined,
        );

        return version || fallback;
    });
};
