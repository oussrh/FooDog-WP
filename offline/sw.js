// const version = "0.2.15";
// const cacheName = `FoodDog-${version}`;
// self.addEventListener('install', e => {
//   e.waitUntil(
//     caches.open(cacheName).then(cache => {
//       return cache.addAll([
//         `/FooDog-WP/offline/`,
//         `/FooDog-WP/offline/index.html`
//       ])
//           .then(() => self.skipWaiting());
//     })
//   );
// });

// self.addEventListener('activate', event => {
//   event.waitUntil(self.clients.claim());
// });

// self.addEventListener('fetch', event => {
//   event.respondWith(
//     caches.open(cacheName)
//       .then(cache => cache.match(event.request, {ignoreSearch: true}))
//       .then(response => {
//       return response || fetch(event.request);
//     })
//   );
// });

let CACHE_NAME = 'sw-v1'
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => cache.addAll('/FooDog-WP/offline/index.html'))
  )
})
self.addEventListener('fetch', (event) => {
  if (event.request.method === 'GET') {
    event.respondWith(
      caches.match(event.request)
      .then((cached) => {
        var networked = fetch(event.request)
          .then((response) => {
            let cacheCopy = response.clone()
            caches.open(CACHE_NAME)
              .then(cache => cache.put(event.request, cacheCopy))
            return response;
          })
          .catch(() => caches.match(offlinePage));
        return cached || networked;
      })
    )
  }
  return;
});
