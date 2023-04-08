var cacheName = 'vinoth-dev-kumar';
var filesToCache = [
    '/',
    '/index.html',
    '/vendor/bootstrap/css/bootstrap.min.css',
    '/vendor/fontawesome-free/css/all.min.css',
    '/vendor/jquery/jquery.min.js',
    '/vendor/bootstrap/js/bootstrap.bundle.min.js',
    '/js/resume.min.js',
    '/css/resume.min.css',
    '/img/profile.jpg',
    '/img/favicons/favicon.ico',
    '/img/favicons/favicon-192.png',
    '/img/favicons/favicon-160.png',
    '/img/favicons/favicon-96.png',
    '/img/favicons/favicon-64.png',
    '/img/favicons/favicon-32.png',
    '/img/favicons/favicon-16.png',

    '/img/favicons/favicon-57.png',
    '/img/favicons/favicon-114.png',
    '/img/favicons/favicon-72.png',
    '/img/favicons/favicon-144.png',
    '/img/favicons/favicon-60.png',
    '/img/favicons/favicon-120.png',
    '/img/favicons/favicon-76.png',
    '/img/favicons/favicon-152.png',
    '/img/favicons/favicon-180.png'
];
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});
self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request, {
            ignoreSearch: true
        }).then(response => {
            return response || fetch(event.request);
        })
    );
});