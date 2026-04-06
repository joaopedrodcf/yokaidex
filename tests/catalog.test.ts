import { describe, expect, it } from "vitest";
import {
    defaultItemFilters,
    defaultYokaiFilters,
    filterItems,
    filterYokais,
    findItemBySlug,
    findYokaiBySlug,
    slugifyName,
} from "../lib/catalog";
import { resolveImageUrl } from "../lib/images";

describe("catalog helpers", () => {
    it("keeps boss slug compatibility", () => {
        expect(slugifyName("Slimamander", "Boss")).toBe("slimamander_boss");
    });

    it("strips crawler-hostile punctuation from slugs", () => {
        expect(slugifyName("D'wanna")).toBe("dwanna");
        expect(slugifyName("Ol' Saint Trick")).toBe("ol_saint_trick");
        expect(slugifyName("General's Soul")).toBe("generals_soul");
    });

    it("resolves yokai slugs from existing data", () => {
        expect(findYokaiBySlug("3", "sigh-durr")?.name).toBe("Sigh-Durr");
        expect(findYokaiBySlug("1", "dwanna")?.name).toBe("D'wanna");
        expect(findYokaiBySlug("1", "d'wanna")?.name).toBe("D'wanna");
    });

    it("resolves item slugs from existing data", () => {
        expect(findItemBySlug("3", "nasty_medicine")?.name).toBe(
            "Nasty Medicine",
        );
        expect(findItemBySlug("1", "generals_soul")?.name).toBe(
            "General's Soul",
        );
        expect(findItemBySlug("1", "general's_soul")?.name).toBe(
            "General's Soul",
        );
    });

    it("filters yokais by text and tribe", () => {
        const filters = defaultYokaiFilters();
        filters.name = "sigh";
        filters.tribe = ["brave"];

        const result = filterYokais(
            [
                {
                    index: 1,
                    name: "Sigh-Durr",
                    tribe: "Brave",
                    rank: "e",
                    element: "Earth",
                    image: "",
                },
                {
                    index: 2,
                    name: "Komajiro",
                    tribe: "Charming",
                    rank: "d",
                    element: "Fire",
                    image: "",
                },
            ],
            filters,
        );

        expect(result).toHaveLength(1);
        expect(result[0]?.name).toBe("Sigh-Durr");
    });

    it("filters items by type", () => {
        const filters = defaultItemFilters();
        filters.selectedTypes = ["items"];

        const result = filterItems(
            [
                { index: 1, name: "Nasty Medicine", type: "items", image: "" },
                {
                    index: 2,
                    name: "Tattered Ring",
                    type: "equipments",
                    image: "",
                },
            ],
            filters,
        );

        expect(result).toHaveLength(1);
        expect(result[0]?.name).toBe("Nasty Medicine");
    });

    it("rewrites cloudinary asset URLs to imagekit", () => {
        expect(
            resolveImageUrl(
                "https://res.cloudinary.com/dcrcweea8/image/upload/v1545501818/Yokai/items/restraint_belt.png",
            ),
        ).toBe(
            "https://ik.imagekit.io/s0558jeir/yokaidex/items/restraint_belt.png",
        );
    });

    it("leaves non-cloudinary URLs unchanged", () => {
        expect(
            resolveImageUrl(
                "https://ik.imagekit.io/s0558jeir/yokaidex/items/restraint_belt.png",
            ),
        ).toBe(
            "https://ik.imagekit.io/s0558jeir/yokaidex/items/restraint_belt.png",
        );
        expect(resolveImageUrl("/images/icons/icon-192x192.png")).toBe(
            "/images/icons/icon-192x192.png",
        );
    });
});
