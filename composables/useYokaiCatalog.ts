import { yokaisByVersion } from "../lib/catalog";
import type { GameVersion } from "../types/domain";

export const useYokaiCatalog = (version: MaybeRefOrGetter<GameVersion>) =>
    computed(() => yokaisByVersion[toValue(version)]);
