let PRECACHENAME = "salesprit-precashe";
let IMAGESCASHENAME = "salesprit-images";
let STATICCASHENAME = "salesprit-static-resource";
let FONTSCASHENAME = "salesprit-fonts";

this.addEventListener("install", (event) => {
 
  event.waitUntil(
    caches.open(PRECACHENAME).then((cache) => {
      cache.addAll([
        "/",
        "https://code.jquery.com/jquery-3.7.1.js",
        "https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css",
        "http://localhost:3000/static/css/main.2faecbbe.css",
        "https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js",
        "/static/js/main.a6463e7d.js",
        "/index.html",
        "/manifest.json",
      ]);
    })
  );
});

// this.addEventListener("fetch", (event) => {
//     if (!navigator.onLine) {
//         event.respondWith("<b>Ofline</b>")
//     }
// }) 

// self.addEventListener("fetch", function (e) {
//   console.log("[ServiceWorker] Fetch", e.request.url);
//   e.respondWith(
//     caches.match(e.request).then(function (response) {
//       return response || fetch(e.request);
//     })
//   );
// });


// self.addEventListener('fetch', function (event) {
//     event.respondWith(
//         caches.open("network")
//             .then(function(cache) {
//                 cache.match(event.request)
//                     .then( function(cacheResponse) {
//                         if(cacheResponse)
//                             return cacheResponse
//                         else
//                             return fetch(event.request)
//                                 .then(function(networkResponse) {
//                                     cache.put(event.request, networkResponse.clone())
//                                     return networkResponse
//                                 })
//                     })
//             })
//     )
// });