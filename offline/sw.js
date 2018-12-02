if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/offline/sw.js', {
      scope: '/offline/'
    })
    .then(function () {
      console.log("Service Worker Registered");
      self.addEventListener('install', e => {
        e.waitUntil(
          caches.open('foodog').then(cache => {
            return cache.addAll([
                `/offline/`,
                `/index.html`,
                `/CSS/style.css`,
                `/offline/CSS/index.css`
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
          caches.open('foodog')
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