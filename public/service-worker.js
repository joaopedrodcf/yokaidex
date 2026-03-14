self.addEventListener("install", () => {
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        (async () => {
            const cacheKeys = await caches.keys();
            await Promise.all(
                cacheKeys.map((cacheKey) => caches.delete(cacheKey)),
            );
            await self.registration.unregister();
            await self.clients.claim();

            const clients = await self.clients.matchAll({
                includeUncontrolled: true,
                type: "window",
            });

            for (const client of clients) {
                client.navigate(client.url);
            }
        })(),
    );
});
