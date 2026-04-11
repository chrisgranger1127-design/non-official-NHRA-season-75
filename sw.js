// Service worker v10 - clears all old caches and unregisters
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});
// No caching - always fetch fresh from network
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
