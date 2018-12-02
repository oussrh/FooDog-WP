if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/offline/sw.js', {
      scope: '/offline/'
    })
    .then(function () {
      console.log("Service Worker Registered");
      self.addEventListener('install', e => {
        e.waitUntil(
          caches.open('foodog1').then(cache => {
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
          caches.open('foodog1')
          .then(cache => cache.match(event.request, {
            ignoreSearch: true
          }))
          .then(response => {
            return response || fetch(event.request);
          })
        );
      })
    });
}