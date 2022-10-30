'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "840c6069a7fd24f2b6666e69f177dc8c",
"index.html": "9fa2308d4e877d263316fb7013e0da52",
"/": "9fa2308d4e877d263316fb7013e0da52",
"main.dart.js": "27543080c42cdafb1aa20d91fab71078",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8b687b77c13581dbae4e67332424e300",
"assets/AssetManifest.json": "eb0ec993bd601de6ba5e6cc78d22b170",
"assets/NOTICES": "5afcadbfaa189cb8ae4d5c845aa20e61",
"assets/FontManifest.json": "03825d2ac6f5777f403bfe934098d6f1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "9947c57a34f16bce23baa3e58018d85b",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/strings/en.json": "f22371b8255b7b44024dea1dac0bc461",
"assets/assets/strings/fr.json": "0b2e0702d96225846a69def4b63591b5",
"assets/assets/images/ripple_effect_screenshot_fr_3.png": "46b49a7322186e186deb0af780ff0df3",
"assets/assets/images/ripple_effect_screenshot_fr_2.png": "9f47353c38fbf1c71835ad377c9d0fde",
"assets/assets/images/ripple_effect_icon.png": "0b51a7bb702e9a34f6bf496da9d0d9c4",
"assets/assets/images/banner.jpg": "452db6e372bd49eb44609a168a2ec1ac",
"assets/assets/images/frenchie_games.png": "df2f94112ed693c71c83f24a3d34c6ce",
"assets/assets/images/ripple_effect_screenshot_fr_1.png": "4086b152c20c0e255b66f24550709041",
"assets/assets/images/nonogram_colors_screenshot_fr_3.png": "17c90aa37c3b0978b522c2596acdf42a",
"assets/assets/images/nonogram_colors_screenshot_fr_2.png": "fe24e2fe4f8b8f468d3089bddff7d5ca",
"assets/assets/images/nonogram_colors_screenshot_fr_1.png": "df48e0688588b509f67ccdbf66e8f400",
"assets/assets/images/app_store_badge.png": "f3e9495b99b38622485d78c8430cabe5",
"assets/assets/images/nonogram_colors_screenshot_en_1.png": "83b257740dd890e8cf079909a0fc2e83",
"assets/assets/images/linked_words_icon.png": "85817693dcc3de130d72b0328b202a9f",
"assets/assets/images/nonogram_colors_screenshot_en_2.png": "d4293c31ded80fffbc44bde237ebb3fd",
"assets/assets/images/nonogram_colors_screenshot_en_3.png": "69ce1150cb23ac34a69c2b97be756919",
"assets/assets/images/baguette.png": "b67f1b59d688121dba46500095548460",
"assets/assets/images/play_store_badge.png": "6715899e7b4005ea37de44a48abed711",
"assets/assets/images/ripple_effect_screenshot_en_1.png": "b5677d8e49702641b4ee63ae853fe950",
"assets/assets/images/linked_words_screenshot_fr_1.png": "2d82b9479b4e865a10ffbea76f615de3",
"assets/assets/images/nonogram_icon.png": "6985f6967847f81a340aa05bb0a02063",
"assets/assets/images/ripple_effect_screenshot_en_2.png": "4b8a9259879e5967d8f1a5e8ff4abe3c",
"assets/assets/images/linked_words_screenshot_fr_2.png": "47936aad1359fbff46026d4570363212",
"assets/assets/images/linked_words_screenshot_fr_3.png": "f00c78a35de3bcd58c4fb3146dc08c23",
"assets/assets/images/ripple_effect_screenshot_en_3.png": "b8596c56c2d6476812027cc10607c37b",
"assets/assets/fonts/Dosis_Medium.ttf": "9bc7d1d17b09ff0b8bb1017bd51533b4",
"assets/assets/fonts/Dosis_Bold.ttf": "77c62314f5d3d19c081ddb58872ed5da",
"assets/assets/fonts/Dosis_Light.ttf": "16cd99c1ac888ba28fe737785bf001be",
"assets/assets/fonts/Dosis_SemiBold.ttf": "cacdd7a5c24ba9c2da2519d31f210b54",
"assets/assets/fonts/Dosis_ExtraLight.ttf": "18640b6254dc6331b1ae12276bd60b7d",
"assets/assets/fonts/Dosis_ExtraBold.ttf": "b6d17f25e8b1f17f848c82c9c506eff5",
"assets/assets/fonts/Dosis_Regular.ttf": "f955f2f8e27d40d466433459d2df444c",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
