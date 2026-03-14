export type GameVersion = "1" | "2" | "3";

export interface NamedImage {
    name: string;
    image: string;
}

export interface YokaiMove {
    name: string;
    description?: string;
    power?: string;
    soultimeRangeImage?: string;
}

export interface YokaiStats {
    hp?: string;
    str?: string;
    spr?: string;
    def?: string;
    spd?: string;
}

export interface Yokai {
    index: number;
    name: string;
    yokaiNumber?: string;
    bossNumber?: string;
    image: string;
    description?: string;
    locations?: Array<string | null>;
    skill?: YokaiMove;
    attack?: YokaiMove;
    technique?: YokaiMove;
    soultime?: YokaiMove;
    inspirit?: YokaiMove;
    stats?: YokaiStats;
    tribe: string;
    element: string;
    weakness?: string;
    rank: string;
    favouriteFood?: string;
    crankakai?: NamedImage[];
    crankakaiIndexes?: number[];
    type?: string[];
    seal?: number;
    evolutionIndexes?: number[];
}

export interface Item {
    index: number;
    name: string;
    image: string;
    description?: string;
    effect?: string;
    locations?: Array<string | null>;
    statsInfo?: Record<string, string>;
    priceInfo?: Record<string, string>;
    type: string;
    crankakaiIndexes?: number[];
}

export interface BaffleBoardEntry {
    index: number;
    location: string;
    clues: string[];
    solution: string;
    effect: string;
    image: string;
}

export interface CrankakaiPrize extends NamedImage {
    type: "items" | "yokais";
}

export interface CrankakaiEntry {
    index: number;
    type: string;
    image: string;
    variation?: string;
    elements?: CrankakaiPrize[];
    first_prize?: CrankakaiPrize[];
    second_prize?: CrankakaiPrize[];
    third_prize?: CrankakaiPrize[];
    fourth_prize?: CrankakaiPrize[];
    fifth_prize?: CrankakaiPrize[];
    default_prize?: CrankakaiPrize[];
}

export interface EvolutionEntry {
    index: number;
    type: "level" | "fusion";
    level?: string;
    withItems?: boolean;
    item?: NamedImage;
    yokais: NamedImage[];
}

export interface LegendarySeal {
    index: number;
    result: string;
    yokaisToUnlock: NamedImage[];
}

export interface PaletteEntry extends NamedImage {
    color1?: string;
    color2?: string;
}

export interface YokaiFilterState {
    name: string;
    tribe: string[];
    rank: string[];
    element: string[];
    misc: string[];
    types: string[];
}

export interface ItemFilterState {
    name: string;
    selectedTypes: string[];
}
