import { baffleBoardsByVersion } from "../lib/catalog";
import type { GameVersion } from "../types/domain";

export const useBaffleBoard = (version: MaybeRefOrGetter<GameVersion>) =>
    computed(() => baffleBoardsByVersion[toValue(version)] || []);
