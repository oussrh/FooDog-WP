const version = "0.1.1";
const cacheName = `Foodog-${version}`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        `/`,
        `/index.html`,
        `/CSS/style.css`,
        `/CSS/index.css`,
        `/CSS/footer.css`,
        `/CSS/categorie.css`,
        `/CSS/article.css`,
        `/JS/article.js`,
        `/JS/categorie.js`,
        `/JS/foodogwebc.js`,
        `/JS/footer.js`,
        `/JS/header.js`,
        `/JS/index.js`,
        `/img/nophoto.svg`
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
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
})