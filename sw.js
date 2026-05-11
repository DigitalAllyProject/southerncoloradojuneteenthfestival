/* Southern Colorado Juneteenth Festival — service worker
 *
 * Strategy:
 *   - Install: pre-cache the four core pages + styles + manifest + icons
 *   - Fetch: stale-while-revalidate for same-origin GETs (instant offline,
 *     refresh in background); fall back to cache for navigation when offline.
 *
 * Bump CACHE_VERSION when shipping a meaningful content/code change so old
 * caches get evicted on the next install.
 */

const CACHE_VERSION = 'v5-2026-05-11';
const CACHE_NAME = `socojuneteenth-${CACHE_VERSION}`;

const PRECACHE_URLS = [
  './',
  './index.html',
  './heritage-map.html',
  './festival-app.html',
  './meet-alai.html',
  './open-questions.html',
  './styles.css',
  './install-prompt.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './assets/festival-logo.png',
  './assets/dap-logo.png',
  './assets/dap-project2.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      // addAll fails atomically if any URL 404s — use individual adds for resilience
      Promise.all(
        PRECACHE_URLS.map(url =>
          cache.add(url).catch(err => console.warn('[sw] skip precache', url, err))
        )
      )
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k.startsWith('socojuneteenth-') && k !== CACHE_NAME)
            .map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Cross-origin (fonts, etc): network with cache fallback
  if (url.origin !== location.origin) {
    event.respondWith(
      fetch(req)
        .then(resp => {
          const copy = resp.clone();
          caches.open(CACHE_NAME).then(c => c.put(req, copy)).catch(() => {});
          return resp;
        })
        .catch(() => caches.match(req))
    );
    return;
  }

  // Same-origin navigation: try network, fall back to cached page, then to /
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then(resp => {
          const copy = resp.clone();
          caches.open(CACHE_NAME).then(c => c.put(req, copy)).catch(() => {});
          return resp;
        })
        .catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
    );
    return;
  }

  // Same-origin assets: stale-while-revalidate
  event.respondWith(
    caches.match(req).then(cached => {
      const network = fetch(req)
        .then(resp => {
          if (resp && resp.status === 200 && resp.type === 'basic') {
            const copy = resp.clone();
            caches.open(CACHE_NAME).then(c => c.put(req, copy)).catch(() => {});
          }
          return resp;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
