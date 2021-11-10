"use strict";var precacheConfig=[["./BigNoodleTitling-Oblique.7edfefeb.ttf","52629e481c4d4df7a9783ed08bdecdef"],["./BigNoodleTitling-Oblique.bcdc5973.woff","e4c153529df3dbc66fc96532063fdeed"],["./BigNoodleTitling-Oblique.eb692457.woff2","60155d88b01a1ec68de99fad8e7b693c"],["./android-icon-144x144.f75e92fc.png","4910e66314dbf87ec482ff7e05848253"],["./android-icon-192x192.5f6b5aba.png","2c13b041616cc6883f9897a4de39bf16"],["./android-icon-36x36.2f71a721.png","0a0d5e661c0986b0fe09c2d3b948c617"],["./android-icon-48x48.92682963.png","57e0b6ee36a518dcc3de21356af7cbae"],["./android-icon-72x72.148adeba.png","f89fae5018c96cc8aa2791c0ea96e83a"],["./android-icon-96x96.5d071b4e.png","22c30945bedab1319772920a65714659"],["./apple-icon-114x114.67b7015a.png","b95b7ebf066509a3a2338893221e36bd"],["./apple-icon-120x120.fd9e1b5e.png","3ebae40bcb62c81b891f7fc0cb422cf7"],["./apple-icon-144x144.f75e92fc.png","4910e66314dbf87ec482ff7e05848253"],["./apple-icon-152x152.c1505170.png","18c9581b307fd19e06d0f66bce62f836"],["./apple-icon-180x180.0eb91b17.png","2c5f8462b4b45f4ef76c226b1e0c4452"],["./apple-icon-57x57.04a59ec0.png","bf3cfad9440c3498df11c7b20b395775"],["./apple-icon-60x60.6eb85f3e.png","98639665b934ee71842ae92b152a6d5f"],["./apple-icon-72x72.148adeba.png","f89fae5018c96cc8aa2791c0ea96e83a"],["./apple-icon-76x76.02bbb5dc.png","92427f51400624975b2d64de3c237a87"],["./favicon-16x16.38f1053c.png","acda3946a80a4f83e01e297533a4cb62"],["./favicon-32x32.4816468b.png","a42fea4a194aa3f1bf00ed58165a6443"],["./favicon-96x96.5d071b4e.png","22c30945bedab1319772920a65714659"],["./icomoon.3db28260.woff","67e06c13597526a05c3622fac0a3d9e2"],["./icomoon.5c6c4942.eot","10f64d9234a4efff250f0211ad58bb50"],["./icomoon.7b676a58.svg","87de5da0a53c1a5714db6998812c29c6"],["./icomoon.f115ec5e.ttf","2bd9b312d9bef7c4175ec22480d645e6"],["./index.html","d398003b6240fda6c45e3aa399b0d677"],["./main.36f1e59d.css","e8ae593aaabeec6264bcc023eacae7eb"],["./main.bd257af8.js","98c2b092245a89b7152f5c4f33fc027e"],["./ms-icon-144x144.f75e92fc.png","4910e66314dbf87ec482ff7e05848253"],["./normalize.02b6c58e.css","845fbad011278e5514df34df5acde927"],["./repeating-pattern-dark.1dae67d6.png","e8dfbc246778d7f4110254cfc61c5372"],["./service-worker.js","dee7f5358334b3f30626096cc845d42a"],["./website-hero-desktop.9851dd3d.jpg","216ce867ebbae830cb05ad8c8f462656"],["./website-hero-mobile.d1e5ed96.jpg","cc12dceb6b8c3ac0b1ca228973330c73"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=n),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,a,c){var t=new URL(e);return c&&t.pathname.match(c)||(t.search+=(t.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(a)),t.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var a=new URL(n).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,n){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],a=e[1],c=new URL(n,self.location),t=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),t]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!n.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(n){if(!n.ok)throw new Error("Request for "+a+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(a,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!n.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(n=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),n=urlsToCacheKeys.has(a));!n&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("./index.html",self.location).toString(),n=urlsToCacheKeys.has(a)),n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});