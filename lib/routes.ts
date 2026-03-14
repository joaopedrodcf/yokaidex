import {
    DEFAULT_GAME_VERSION,
    baffleBoardsByVersion,
    crankakaiByVersion,
    getVersionPath,
    itemsByVersion,
    toRouteSlug,
    yokaisByVersion,
} from "./catalog";

export const buildPrerenderRoutes = () => {
    const routes = new Set<string>(["/"]);

    for (const version of ["1", "2", "3"] as const) {
        routes.add(getVersionPath(version));
        routes.add(getVersionPath(version, "/items"));
        routes.add(getVersionPath(version, "/crank-a-kai"));
        routes.add(getVersionPath(version, "/about-us"));

        if (baffleBoardsByVersion[version]?.length) {
            routes.add(getVersionPath(version, "/baffle-board"));
        }

        for (const yokai of yokaisByVersion[version]) {
            routes.add(
                getVersionPath(
                    version,
                    `/yokais/${toRouteSlug(yokai.name, yokai.tribe)}`,
                ),
            );
        }

        for (const item of itemsByVersion[version]) {
            routes.add(
                getVersionPath(version, `/items/${toRouteSlug(item.name)}`),
            );
        }

        for (const entry of crankakaiByVersion[version]) {
            routes.add(
                getVersionPath(version, `/items/${toRouteSlug(entry.type)}`),
            );
        }
    }

    routes.add(getVersionPath(DEFAULT_GAME_VERSION));

    return [...routes];
};
