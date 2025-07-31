const CACHE_NAME = 'pntc-v1';
const OFFLINE_URL = '/offline.html';
const PRECACHE_URLS = [
  '/', 
  '/aboutus',
  '/academics',
  '/admissions',
  '/contactus',
  '/src/assets/logo.webp',
  '/src/index.css',
  OFFLINE_URL  // Include offline page in precache list
];

// Install - Cache critical resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(PRECACHE_URLS)  // Now includes OFFLINE_URL
          .then(() => self.skipWaiting());
      })
      .catch(err => {
        console.error('Precache failed:', err);
      })
  );
});

// Activate - Clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch - Serve cached or network
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // For HTML pages, try network first
  if (event.request.headers.get('accept').includes('text/html')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Cache the fetched page
          const responseClone = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => cache.put(event.request, responseClone));
          return response;
        })
        .catch(() => {
          // Show offline page if network fails
          return caches.match(OFFLINE_URL)
            .then(response => response || caches.match('/'));
        })
    );
    return;
  }

  // For assets, try cache first
  event.respondWith(
    caches.match(event.request)
      .then(cached => cached || fetch(event.request))
      .catch(() => {
        // Return a fallback for assets if needed
        if (event.request.url.includes('.webp')) {
          return caches.match('/src/assets/logo.webp');
        }
        return new Response('Offline');
      })
  );
});