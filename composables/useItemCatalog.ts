import { itemsByVersion } from "../lib/catalog";
import type { GameVersion } from "../types/domain";

export const useItemCatalog = (version: MaybeRefOrGetter<GameVersion>) =>
    computed(() => itemsByVersion[toValue(version)]);
