// Ham Radio Study PWA - Service Worker
const CACHE_NAME = 'hamradio-v14';
const ASSETS = [
  './',
  './index.html',
  './app.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  '../../pools/2022-2026/questions.json',
  '../../pools/2026-2030/questions.json',
  '../../figures/T-1.png',
  '../../figures/T-2.png',
  '../../figures/T-3.png'
];
const APP_BASE_URL = new URL('./', self.location.href);
const OFFLINE_URL = new URL('./index.html', APP_BASE_URL).href;
const PRECACHE_URLS = new Set(ASSETS.map(path => new URL(path, APP_BASE_URL).href));

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) return;

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(OFFLINE_URL))
    );
    return;
  }

  if (!PRECACHE_URLS.has(requestUrl.href)) return;

  event.respondWith(
    caches.match(requestUrl.href).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') return response;
        const clone = response.clone();
        event.waitUntil(
          caches.open(CACHE_NAME).then(cache => cache.put(requestUrl.href, clone))
        );
        return response;
      }).catch(() => caches.match(requestUrl.href));
    })
  );
});
