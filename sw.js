
/* ===== LINGOEMOJICAT - SERVICE WORKER ===== */

const CACHE_NAME = 'lingoemojicat-v1';
const ASSETS_TO_CACHE = [
  // HTML i PWA
  './',
  './index.html',
  './manifest.json',
  
  // Estils
  './styles.css',
  
  // Icones
  './icon-192.png',
  './icon-512.png',
  
  // Dades del joc - ORDE IMPORTANT
  './lec-emoji-data.js',
  './lec-botiga-data.js',
  './lec-frases-data.js',
  './tips-data.js',
  './lectura-content.js',
  './lectura-generator.js',
  './lec-minijoc.js',
  
  // Lògica principal
  './main.js'
];

// Instal·lació: cacheja tot
self.addEventListener('install', event => {
  console.log('[SW] Instal·lant LingoEmojiCat...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Cachejant assets');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// Activació: esborra caches vells
self.addEventListener('activate', event => {
  console.log('[SW] Activant LingoEmojiCat...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Esborrant cache antic:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: serveix des de cache, sinó va a xarxa
self.addEventListener('fetch', event => {
  // Només GET
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Si està al cache, el retorna
        if (response) {
          return response;
        }

        // Sinó fa fetch a xarxa i guarda al cache
        return fetch(event.request).then(networkResponse => {
          // Només cacheja si és OK i del mateix origen
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }

          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        });
      })
      .catch(() => {
        // Si falla xarxa i no hi ha cache, retorna index.html per SPA
        if (event.request.destination === 'document') {
          return caches.match('./index.html');
        }
      })
  );
});