"use strict";var precacheConfig=[["/index.html","320e7a9f21f9792429c82652563420ae"],["/static/css/main.4a7fa8d4.css","4d41757cb640320a74b0a2a7c0c05826"],["/static/js/main.43b9db4e.js","5c9e08f315e5d4e3f3c0926015d63010"],["/static/media/8buzzerss.5a4dd1d7.jpg","5a4dd1d7ca2f9e809c64f4f005710140"],["/static/media/annotate.5bb8d8f4.png","5bb8d8f44fb142991d0636bb24c3183c"],["/static/media/annotate2.77142c49.png","77142c4979be83964ec35d685cf056da"],["/static/media/apocalipse-zumbi.3de11d9f.jpg","3de11d9f9ac0381fcd7ead676d47ecbd"],["/static/media/brazeapp1.8013c5c8.png","8013c5c82fdfd4ba577659188dc20ad5"],["/static/media/brazeapp2.e59fc559.png","e59fc55978bac9887704fb90eb9c0872"],["/static/media/brazeapp3.87031566.png","870315661b8d242eee89cddcdef95438"],["/static/media/corefinanceiro.1a592f17.png","1a592f176ab45e4c1b60fd8bcf6bf1fd"],["/static/media/corefinanceiro2.fbdbeb60.png","fbdbeb602f406e6761fa32131f2c5a95"],["/static/media/dumbboardss1.6813d7a8.png","6813d7a837a37c6003b5201e2605a070"],["/static/media/euresolvo.0d8d8ba3.png","0d8d8ba3e2505a5e4a6b31e76ed0f6a0"],["/static/media/euresolvo2.462ed4b3.png","462ed4b3cef219633bba1707845abafb"],["/static/media/euresolvo3.2c54a395.png","2c54a395479a2196858fa0467eccbeb1"],["/static/media/euresolvo4.3d259215.png","3d259215dbc37078690ae8f55fea9133"],["/static/media/euresolvoandroid1.235807cb.png","235807cb6c337e1bbaa66f0c58ea9990"],["/static/media/euresolvoandroid2.448844a6.png","448844a6989339bc5672113ed49c8da2"],["/static/media/euresolvoandroid3.81628385.png","8162838568f007efda147cec472465bf"],["/static/media/github.76d344f0.svg","76d344f08412543c74ccd1fb2493d607"],["/static/media/linkedin.82b4488f.svg","82b4488fea9a45312de2bcfef668a667"],["/static/media/picnamess1.24c4a344.jpg","24c4a344b1197ef22b5c632829de82c7"],["/static/media/placeholder.d29570a4.png","d29570a4b85bd61c2920d674ee238379"],["/static/media/portfolio.8651aac1.png","8651aac19615990559889d4fd3a17742"],["/static/media/portfolio2.70336221.png","70336221ca0883b954ab67cc1290e52d"],["/static/media/portfolio3.0d55d0ce.png","0d55d0ce7e2f35ad3e0b9f6e79133bbc"],["/static/media/portfolio4.7e2fcc53.png","7e2fcc539ce4f6180eee61f65b24f5f1"],["/static/media/sentina1.5963ce22.png","5963ce22333204da39ac114c6842b7fd"],["/static/media/sentina2.f73c1ed4.png","f73c1ed46c88589e4f3f9b79882cfb5d"],["/static/media/voiceboardss1.27e6987b.png","27e6987b44e8c48a8f6875dc26c802cd"],["/static/media/watchthis.62260890.webp","62260890dc7f4987c246f44b8eccdf99"],["/static/media/watchthis2.e98f060e.webp","e98f060ede0f46b3b467ae656008b1a8"],["/static/media/zeus1.5b2ec8c8.png","5b2ec8c879ed8be064c8e774c25ce987"],["/static/media/zeus2.e71dde11.png","e71dde11d24003ac42e44f90aba14e0a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var n="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});