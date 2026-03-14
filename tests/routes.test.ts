import { describe, expect, it } from "vitest";
import { buildPrerenderRoutes } from "../lib/routes";

describe("prerender routes", () => {
    it("includes the primary site sections", () => {
        const routes = buildPrerenderRoutes();

        expect(routes).toContain("/");
        expect(routes).toContain("/yokai-watch-3");
        expect(routes).toContain("/yokai-watch-3/items");
        expect(routes).toContain("/yokai-watch-3/crank-a-kai");
    });

    it("includes dynamic detail routes", () => {
        const routes = buildPrerenderRoutes();

        expect(
            routes.some((route) => route.includes("/yokais/sigh-durr")),
        ).toBe(true);
        expect(
            routes.some((route) => route.includes("/items/nasty_medicine")),
        ).toBe(true);
    });
});
