/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9d6c44e2ba026cad39f981eabe539999"
  },
  {
    "url": "assets/css/0.styles.7e9ccdc1.css",
    "revision": "96720c736992b4a691b39dfa5f3a12d0"
  },
  {
    "url": "assets/img/1.e2db9497.jpeg",
    "revision": "e2db94974b6acea0176bba89e1a3642e"
  },
  {
    "url": "assets/img/1.f5e3e4de.jpg",
    "revision": "f5e3e4de7c2fbb724cae8441f9632a65"
  },
  {
    "url": "assets/img/2.28c11598.jpeg",
    "revision": "28c115987a4c34b150d04b611955ac76"
  },
  {
    "url": "assets/img/3.7ed78fb7.jpg",
    "revision": "7ed78fb7eab4e7823d339daa90ac0039"
  },
  {
    "url": "assets/img/4.9fa13b61.jpg",
    "revision": "9fa13b61c905df679da913a061b62cd4"
  },
  {
    "url": "assets/img/5.3b61e29e.jpeg",
    "revision": "3b61e29e2db0389c65f880405ecdf24f"
  },
  {
    "url": "assets/img/6.b198627d.jpeg",
    "revision": "b198627d80beee4f3e335d06ef9e9705"
  },
  {
    "url": "assets/img/7.e2db9497.jpeg",
    "revision": "e2db94974b6acea0176bba89e1a3642e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.17bf2be4.js",
    "revision": "82ad44c78943cfb3a93fcae72358f4df"
  },
  {
    "url": "assets/js/11.35e1bff2.js",
    "revision": "da013f59ff076d3a1a7fe0a5e11c5d9e"
  },
  {
    "url": "assets/js/12.5f5c2fb1.js",
    "revision": "c4179702b35a44c87f7dc2b4d46c5fce"
  },
  {
    "url": "assets/js/13.61e55bd5.js",
    "revision": "abb092cc78b77b9e6b02fbd8aea42878"
  },
  {
    "url": "assets/js/14.ecbfbb22.js",
    "revision": "0057399d0045adb51876a9248e389ad5"
  },
  {
    "url": "assets/js/15.ac5c29ce.js",
    "revision": "b0596a20295ef1f4b943a5bbb9ca4c7c"
  },
  {
    "url": "assets/js/16.1cd55828.js",
    "revision": "9af62298f14b1a0098d83b7a1974209a"
  },
  {
    "url": "assets/js/17.fa6dde20.js",
    "revision": "7d0c4dc9e86da8ca91f094710929d285"
  },
  {
    "url": "assets/js/18.27116c72.js",
    "revision": "3ee77fe808e4a3b9a0c115cc89d2756a"
  },
  {
    "url": "assets/js/19.4297fb6c.js",
    "revision": "22fbbcfdaaa33311ad046dc631bd3d5e"
  },
  {
    "url": "assets/js/2.4022fe6a.js",
    "revision": "26f47b6288b5e6906c0f69dc389ad3a8"
  },
  {
    "url": "assets/js/20.7734d363.js",
    "revision": "3a1a39ce60f47de39402c5efeda026c1"
  },
  {
    "url": "assets/js/21.f182c44b.js",
    "revision": "8144d54f44d2172d88193cc06b9e2604"
  },
  {
    "url": "assets/js/22.d2c8692e.js",
    "revision": "a840875cf872779b28cd62e9fef99a2f"
  },
  {
    "url": "assets/js/23.63200394.js",
    "revision": "394b4703923183ba283ceb29bf144e61"
  },
  {
    "url": "assets/js/24.0a9f59da.js",
    "revision": "9e20814dcada2434ed482c0fe9e073c8"
  },
  {
    "url": "assets/js/26.68347950.js",
    "revision": "ab3c9dfaf0a99545a37403e18ea42714"
  },
  {
    "url": "assets/js/3.c5efe22d.js",
    "revision": "ba1ab138e3b934297ef77bb9e58b9051"
  },
  {
    "url": "assets/js/4.090207b8.js",
    "revision": "1b35431d83911467b3767efdf5e869f6"
  },
  {
    "url": "assets/js/5.e5a1d904.js",
    "revision": "8ce4df103bcc3d50fd2675bda3d5fa6c"
  },
  {
    "url": "assets/js/6.af368dc0.js",
    "revision": "be75c2e597e1aaad159b5c444662c488"
  },
  {
    "url": "assets/js/7.598774a2.js",
    "revision": "f325eb5878fbd1680f334c25696cc92b"
  },
  {
    "url": "assets/js/8.106039ac.js",
    "revision": "6f4557447a46d808f3ac5bcf76176557"
  },
  {
    "url": "assets/js/9.1f2bf201.js",
    "revision": "0819c650b2e4a5fc7a044f003596b54d"
  },
  {
    "url": "assets/js/app.5291d6c3.js",
    "revision": "953b2f46a5685cc06c03e6c1e0540a97"
  },
  {
    "url": "conclusion/index.html",
    "revision": "ded0de194246524aeba5141deac5f1a8"
  },
  {
    "url": "design/index.html",
    "revision": "a8340619a2d95fb91250f6ed4ccb4202"
  },
  {
    "url": "index.html",
    "revision": "6661c792e2e2e06ab24d76432fd35e4b"
  },
  {
    "url": "intro/index.html",
    "revision": "0158fcd1a036247ae54018c785be8094"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "9d63d0e11862b08e10baa3fde54ac645"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "28abf42433115167bc5837c8607b603d"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "6e1c89601b09b90f2de18da35ce3e6b8"
  },
  {
    "url": "software/index.html",
    "revision": "53cbe3b94e4b1c3aeb937917b7c51f68"
  },
  {
    "url": "test/index.html",
    "revision": "7769151c66cdf23cc0ab44ec0652343a"
  },
  {
    "url": "use cases/index.html",
    "revision": "0df79eaf0ac8ea019ad694f77444c43f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
