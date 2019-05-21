const staticCache = 'cacheNr1';

const siteData = [
    '/',
    '/index.html',
    '/restaurant.html',
    '/css/styles.css',
    '/css/responsive_access.css',
    '/data/restaurants.json',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/js/sw_setup.js'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(staticCache).then(function(cache) {
            return cache.addAll(siteData) 
        }).catch(function(err) {
            console.log('cache saving problem :(' + err);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            // return response || fetch(event.request);
            if (response) return response;

            return fetch(event.request).then(function(response) {
                if(response.status === 404) {
                    return new Response (`<h1>Sorry. Page does not exist :(<h1>`, {
                        headers: { 'Content-Type': 'text/html' }
                    });
                }
                return response;
            });
        })
    );
});