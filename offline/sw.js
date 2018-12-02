let cacheVersion = "foodog5";
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheVersion).then(cache => {
      return cache.addAll([
        `offline/`,
        `offline/index.html`
      ])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheVersion)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
})