var cachename="pwa";
var filescache=[
  '/',
  'index.html',
  'resume.html'
]
self.addEventListener('install',function(e) {
  console.log("installed successfully..!");
  e.waitUntil(
    caches.open(cachename).then(function (ca) {
      console.log("catching files from cache");
      return ca.addAll(filescache);

    })
  )
})
self.addEventListener('activate',function(e) {
  console.log("activated successfully..!");
  e.waitUntil(
    caches.keys().then(function(c) {
      return Promise.all(c.map(function(thiscache){
        if(thiscache !==cachename){
          return caches.delete(thiscache);
          console.log("service Worker removing files");

        }
      }))
    })
  )
})
self.addEventListener('fecth',function(e) {
  console.log("fecthed successfully..!");
  e.respondwith(
    caches.match(e.request).then(function(response) {
      if(response){
        console.log("load from cache");
        return response;
      }

    var rc=e.request.clone();
    fecth(rc).then(function(response) {
      if(!response){
        console.log("no response from fecth");
        return response;
      }
  rc=response.clone();
  caches.open(cachename).then(function(cache) {
    cache.put(e.request,rc);
    return response;
    })
  })
    .cacth(function(error) {
      console.log("eror occured",error);
    })
})
  )
})
