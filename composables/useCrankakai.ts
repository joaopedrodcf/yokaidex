import { crankakaiByVersion } from "../lib/catalog";
import type { GameVersion } from "../types/domain";

export const useCrankakai = (version: MaybeRefOrGetter<GameVersion>) =>
    computed(() => crankakaiByVersion[toValue(version)]);
