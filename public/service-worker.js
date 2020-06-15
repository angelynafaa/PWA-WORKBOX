importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');
 
if (workbox)
  console.log(`Workbox berhasil dimuat`);
else
  console.log(`Workbox gagal dimuat`);
//pastikan kalo ngubah yang sudah di daftarain dibawah revison nya diganti biar ke update
  workbox.precaching.precacheAndRoute([
      { url: `/index.html`, revision: '2'}, 
      { url: '/nav.html', revision: '2' },
      { url: '/css/materialize.min.css', revision: '2' },
      { url: '/js/materialize.min.js', revision: '2' },
      { url: '/js/script.js', revision: '2' },
  ]);

  workbox.routing.registerRoute(
    new RegExp('/pages/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName : 'pages'
    })
  );