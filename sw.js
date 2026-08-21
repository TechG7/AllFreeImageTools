const CACHE_NAME="all-free-image-tools-v4";

const CORE=[
  "./",
  "./index.html",
  "./assets/style.css",
  "./assets/theme.js",
  "./manifest.json",
  "./logo-192.png",
  "./logo-512.png"
];

self.addEventListener("install",e=>{
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(c=>c.addAll(CORE))
      .then(()=>self.skipWaiting())
      .catch(()=>self.skipWaiting())
  );
});

self.addEventListener("activate",e=>{
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(
      keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k))
    )).then(()=>self.clients.claim())
  );
});

self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;

  const url=new URL(e.request.url);
  if(url.origin!==self.location.origin)return;

  e.respondWith(
    fetch(e.request).then(res=>{
      if(res.ok){
        const copy=res.clone();
        caches.open(CACHE_NAME)
          .then(c=>c.put(e.request,copy))
          .catch(()=>{});
      }
      return res;
    }).catch(()=>
      caches.match(e.request)
        .then(r=>r||caches.match("./index.html"))
    )
  );
});
