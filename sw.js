const cacheName = 'choply-cache-v1';
const assets = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/images/logo.png',
  '/images/background.jpg',
  '/images/produit1.jpg',
  '/images/produit2.jpg',
  '/images/produit3.jpg'
];

self.addEventListener('install', e => {
    e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys => Promise.all(keys.filter(key => key !== cacheName).map(key => caches.delete(key))))
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(caches.match(e.request).then(response => response || fetch(e.request)));
});
