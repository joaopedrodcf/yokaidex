import baffleBoardYW2 from "../data/yokai-watch-2/baffle-boards";
import baffleBoardYW3 from "../data/yokai-watch-3/baffle-boards";
import crankakai1 from "../data/yokai-watch-1/crankakai";
import crankakai2 from "../data/yokai-watch-2/crankakai";
import crankakai3 from "../data/yokai-watch-3/crankakai";
import equipments1 from "../data/yokai-watch-1/equipments";
import equipments2 from "../data/yokai-watch-2/equipments";
import equipments3 from "../data/yokai-watch-3/equipments";
import items1 from "../data/yokai-watch-1/items";
import items2 from "../data/yokai-watch-2/items";
import items3 from "../data/yokai-watch-3/items";
import yokais1 from "../data/yokai-watch-1/yokais";
import yokais2 from "../data/yokai-watch-2/yokais";
import yokais3 from "../data/yokai-watch-3/yokais";
import elementsMeta from "../data/elements";
import evolutions from "../data/evolutions";
import filtersElements from "../data/filters/elements";
import itemFilterLabels from "../data/filters/items";
import filterMisc from "../data/filters/misc";
import filterRanks from "../data/filters/ranks";
import filterTribes from "../data/filters/tribes";
import filterTypes from "../data/filters/types";
import foodsMeta from "../data/foods";
import legendarys from "../data/legendarys";
import ranksMeta from "../data/ranks";
import tribesMeta from "../data/tribes";
import type {
    BaffleBoardEntry,
    CrankakaiEntry,
    EvolutionEntry,
    GameVersion,
    Item,
    ItemFilterState,
    LegendarySeal,
    PaletteEntry,
    Yokai,
    YokaiFilterState,
} from "../types/domain";

export const DEFAULT_GAME_VERSION: GameVersion = "3";

export const GAME_VERSIONS: GameVersion[] = ["1", "2", "3"];

export const yokaisByVersion: Record<GameVersion, Yokai[]> = {
    "1": yokais1 as Yokai[],
    "2": yokais2 as Yokai[],
    "3": yokais3 as Yokai[],
};

export const itemsByVersion: Record<GameVersion, Item[]> = {
    "1": [...(items1 as Item[]), ...(equipments1 as Item[])],
    "2": [...(items2 as Item[]), ...(equipments2 as Item[])],
    "3": [...(items3 as Item[]), ...(equipments3 as Item[])],
};

export const baffleBoardsByVersion: Partial<
    Record<GameVersion, BaffleBoardEntry[]>
> = {
    "2": baffleBoardYW2 as BaffleBoardEntry[],
    "3": baffleBoardYW3 as BaffleBoardEntry[],
};

export const crankakaiByVersion: Record<GameVersion, CrankakaiEntry[]> = {
    "1": crankakai1 as CrankakaiEntry[],
    "2": crankakai2 as CrankakaiEntry[],
    "3": crankakai3 as CrankakaiEntry[],
};

export const tribes = tribesMeta as PaletteEntry[];
export const elements = elementsMeta as PaletteEntry[];
export const ranks = ranksMeta as PaletteEntry[];
export const foods = foodsMeta as PaletteEntry[];
export const evolutionEntries = evolutions as EvolutionEntry[];
export const legendarySeals = legendarys as LegendarySeal[];

export const yokaiFilterOptions = {
    tribes: filterTribes as string[],
    ranks: filterRanks as string[],
    elements: filtersElements as string[],
    misc: filterMisc as string[],
    types: filterTypes as string[],
};

export const itemFilterOptions = itemFilterLabels as string[];

export const defaultYokaiFilters = (): YokaiFilterState => ({
    name: "",
    tribe: [],
    rank: [],
    element: [],
    misc: [],
    types: [],
});

export const defaultItemFilters = (): ItemFilterState => ({
    name: "",
    selectedTypes: [],
});

export const normalizeGameVersion = (value?: string): GameVersion | null => {
    if (value && GAME_VERSIONS.includes(value as GameVersion)) {
        return value as GameVersion;
    }

    return null;
};

const normalizeSlugValue = (value: string) =>
    value
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/['’]/g, "")
        .replace(/&/g, " and ")
        .replace(/[^a-z0-9_-]+/g, "_")
        .replace(/_+/g, "_")
        .replace(/^_+|_+$/g, "");

export const slugifyName = (name: string, tribe = ""): string => {
    let slug = normalizeSlugValue(name.replace(/ /g, "_"));

    if (tribe.toLowerCase() === "boss") {
        slug += "_boss";
    }

    return slug;
};

export const toRouteSlug = (name: string, tribe = "") =>
    encodeURIComponent(slugifyName(name, tribe));

export const getVersionPath = (version: GameVersion, suffix = "") =>
    `/yokai-watch-${version}${suffix}`;

export const getMetadataEntry = (
    collection: PaletteEntry[],
    wanted: string | undefined,
) =>
    collection.find(
        (entry) => entry.name.toLowerCase() === (wanted || "").toLowerCase(),
    );

export const getGradientStyle = (tribe: string) => {
    const palette = getMetadataEntry(tribes, tribe);

    if (!palette?.color1 || !palette.color2) {
        return {};
    }

    return {
        background: `linear-gradient(135deg, ${palette.color1}, ${palette.color2})`,
    };
};

export const filterYokais = (
    yokais: Yokai[],
    filters: YokaiFilterState,
): Yokai[] => {
    const normalizedName = filters.name.trim().toLowerCase();
    const tribeFilters = new Set(filters.tribe);
    const rankFilters = new Set(filters.rank);
    const elementFilters = new Set(filters.element);
    const miscFilters = new Set(filters.misc);
    const typeFilters = new Set(filters.types);

    return getIndexedYokais(yokais)
        .filter((entry) => {
            if (normalizedName && !entry.searchName.includes(normalizedName)) {
                return false;
            }

            if (tribeFilters.size > 0 && !tribeFilters.has(entry.tribe)) {
                return false;
            }

            if (rankFilters.size > 0 && !rankFilters.has(entry.rank)) {
                return false;
            }

            if (elementFilters.size > 0 && !elementFilters.has(entry.element)) {
                return false;
            }

            if (miscFilters.has("has evolution") && !entry.hasEvolution) {
                return false;
            }

            if (miscFilters.has("crank-a-kai") && !entry.hasCrankakai) {
                return false;
            }

            for (const type of typeFilters) {
                if (!entry.types.has(type)) {
                    return false;
                }
            }

            return true;
        })
        .map((entry) => entry.raw);
};

export const filterItems = (
    items: Item[],
    filters: ItemFilterState,
): Item[] => {
    const normalizedName = filters.name.trim().toLowerCase();
    const typeFilters = new Set(filters.selectedTypes);

    return getIndexedItems(items)
        .filter((entry) => {
            if (normalizedName && !entry.searchName.includes(normalizedName)) {
                return false;
            }

            if (typeFilters.size > 0 && !typeFilters.has(entry.type)) {
                return false;
            }

            return true;
        })
        .map((entry) => entry.raw);
};

interface IndexedYokai {
    raw: Yokai;
    searchName: string;
    tribe: string;
    rank: string;
    element: string;
    hasEvolution: boolean;
    hasCrankakai: boolean;
    types: Set<string>;
}

interface IndexedItem {
    raw: Item;
    searchName: string;
    type: string;
}

const indexedYokaiCache = new WeakMap<Yokai[], IndexedYokai[]>();
const indexedItemCache = new WeakMap<Item[], IndexedItem[]>();

const getIndexedYokais = (yokais: Yokai[]) => {
    const cached = indexedYokaiCache.get(yokais);

    if (cached) {
        return cached;
    }

    const indexed = yokais.map((yokai) => ({
        raw: yokai,
        searchName: yokai.name.toLowerCase(),
        tribe: yokai.tribe.toLowerCase(),
        rank: yokai.rank.toLowerCase(),
        element: yokai.element.toLowerCase(),
        hasEvolution: Boolean(yokai.evolutionIndexes?.length),
        hasCrankakai: Boolean(yokai.crankakai?.length),
        types: new Set((yokai.type || []).map((type) => type.toLowerCase())),
    }));

    indexedYokaiCache.set(yokais, indexed);

    return indexed;
};

const getIndexedItems = (items: Item[]) => {
    const cached = indexedItemCache.get(items);

    if (cached) {
        return cached;
    }

    const indexed = items.map((item) => ({
        raw: item,
        searchName: item.name.toLowerCase(),
        type: item.type.toLowerCase(),
    }));

    indexedItemCache.set(items, indexed);

    return indexed;
};

export const findYokaiBySlug = (
    version: GameVersion,
    slug: string,
): Yokai | undefined => {
    const decodedSlug = decodeURIComponent(slug);
    const normalizedSlug = normalizeSlugValue(decodedSlug);

    return yokaisByVersion[version].find((yokai) => {
        const normalized = slugifyName(yokai.name, yokai.tribe);

        if (decodedSlug.includes("_boss")) {
            return (
                yokai.tribe.toLowerCase() === "boss" &&
                normalized === normalizedSlug
            );
        }

        return normalized === normalizedSlug;
    });
};

export const findItemBySlug = (
    version: GameVersion,
    slug: string,
): Item | undefined =>
    itemsByVersion[version].find(
        (item) =>
            slugifyName(item.name) ===
            normalizeSlugValue(decodeURIComponent(slug)),
    );

const findByName = <T extends { name: string }>(
    collection: T[],
    name: string,
) => {
    const normalizedName = normalizeSlugValue(name);
    const exactMatch = collection.find(
        (entry) => normalizeSlugValue(entry.name) === normalizedName,
    );

    if (exactMatch) {
        return exactMatch;
    }

    const compactName = normalizedName.replace(/_/g, "");
    const fuzzyMatches = collection.filter((entry) => {
        const normalizedEntry = normalizeSlugValue(entry.name);
        const compactEntry = normalizedEntry.replace(/_/g, "");

        return (
            normalizedEntry.startsWith(normalizedName) ||
            normalizedName.startsWith(normalizedEntry) ||
            compactEntry.startsWith(compactName) ||
            compactName.startsWith(compactEntry)
        );
    });

    return fuzzyMatches.length === 1 ? fuzzyMatches[0] : undefined;
};

export const findYokaiByName = (version: GameVersion, name: string) =>
    findByName(yokaisByVersion[version], name);

export const findItemByName = (version: GameVersion, name: string) =>
    findByName(itemsByVersion[version], name);

export const getEvolutionEntries = (indexes?: number[]) => {
    if (!indexes?.length) {
        return [];
    }

    return indexes
        .map((index) => evolutionEntries[index])
        .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));
};

export const getLegendarySeal = (seal?: number) => {
    if (typeof seal !== "number") {
        return null;
    }

    return legendarySeals[seal] || null;
};

export const getCrankakaiEntries = (
    version: GameVersion,
    indexes?: number[],
): CrankakaiEntry[] => {
    if (!indexes?.length) {
        return [];
    }

    return indexes
        .map((index) => crankakaiByVersion[version][index])
        .filter((entry): entry is CrankakaiEntry => Boolean(entry));
};

export const findCrankakaiBySlug = (
    version: GameVersion,
    slug: string,
): CrankakaiEntry | undefined =>
    crankakaiByVersion[version].find(
        (entry) =>
            slugifyName(entry.type) ===
            normalizeSlugValue(decodeURIComponent(slug)),
    );

export const getCrankakaiPrizeGroups = (entry: CrankakaiEntry) => {
    const groups = [
        { label: "Prize", prizes: entry.elements || [] },
        { label: "First prize", prizes: entry.first_prize || [] },
        { label: "Second prize", prizes: entry.second_prize || [] },
        { label: "Third prize", prizes: entry.third_prize || [] },
        { label: "Fourth prize", prizes: entry.fourth_prize || [] },
        { label: "Fifth prize", prizes: entry.fifth_prize || [] },
        { label: "Default prize", prizes: entry.default_prize || [] },
    ];

    return groups.filter((group) => group.prizes.length > 0);
};

export const getPrizeHref = (
    version: GameVersion,
    type: string,
    name: string,
) => {
    if (type === "yokais") {
        const yokai = findYokaiByName(version, name);
        return yokai
            ? getVersionPath(
                  version,
                  `/yokais/${toRouteSlug(yokai.name, yokai.tribe)}`,
              )
            : null;
    }

    const item = findItemByName(version, name);
    return item
        ? getVersionPath(version, `/items/${toRouteSlug(item.name)}`)
        : null;
};

export const getYokaiHref = (version: GameVersion, name: string) => {
    const yokai = findYokaiByName(version, name);
    return yokai
        ? getVersionPath(
              version,
              `/yokais/${toRouteSlug(yokai.name, yokai.tribe)}`,
          )
        : null;
};

export const getItemHref = (version: GameVersion, name: string) => {
    const item = findItemByName(version, name);
    return item
        ? getVersionPath(version, `/items/${toRouteSlug(item.name)}`)
        : null;
};

export const getAbsoluteUrl = (siteUrl: string, path: string) =>
    new URL(path, siteUrl).toString();
