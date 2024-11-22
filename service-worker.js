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
    "revision": "2f1e84a00e8d12b03032931afa2b0364"
  },
  {
    "url": "about.html",
    "revision": "59612c324b22564caebbb24d536191dd"
  },
  {
    "url": "about2.html",
    "revision": "afc115a9663c3593bd36c777abfefa43"
  },
  {
    "url": "assets/css/0.styles.2bc6c462.css",
    "revision": "f7823d14f2307f93cefa4116148e5d8b"
  },
  {
    "url": "assets/img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "assets/img/dai.jpg",
    "revision": "a81288680eaf1dc79d2c32120dfba7ee"
  },
  {
    "url": "assets/img/favicon_io/android-chrome-192x192.png",
    "revision": "a1a0c6fef0cd95315ac23f3ebc9ef69d"
  },
  {
    "url": "assets/img/favicon_io/android-chrome-512x512.png",
    "revision": "238d834aa9f5eaafeb9a70fadeaa189e"
  },
  {
    "url": "assets/img/favicon_io/apple-touch-icon.png",
    "revision": "09c8872333d08eafa84b960a8fcb302e"
  },
  {
    "url": "assets/img/favicon_io/favicon-16x16.png",
    "revision": "6a70040eaccf37c6725ba5d1a38de881"
  },
  {
    "url": "assets/img/favicon_io/favicon-32x32.png",
    "revision": "37616195cfa34795c619b3639aaf76cb"
  },
  {
    "url": "assets/img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "0a18b5cda3a96e0e0e2c52def7e5f970"
  },
  {
    "url": "assets/img/logo3.png",
    "revision": "ce30ae268f3d444724ef64bc08658206"
  },
  {
    "url": "assets/img/qq.jpg",
    "revision": "4da9b6218f03d46f2341062bb74e9a65"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/wx.png",
    "revision": "bcfeaa485eb3cf2a73d60e83e744751a"
  },
  {
    "url": "assets/img/赛博朋克.jpg",
    "revision": "4da10fc6dd98f96340053b0b9dd963a7"
  },
  {
    "url": "assets/js/1.a5b7b27f.js",
    "revision": "fceb268565adc4ade75641fbadecf0b6"
  },
  {
    "url": "assets/js/11.1f1179e9.js",
    "revision": "77ef7ce5d704ab872424785fd559ea73"
  },
  {
    "url": "assets/js/12.f9e47bc9.js",
    "revision": "d2e3c13d4c2fd8175469e0c1af79ba42"
  },
  {
    "url": "assets/js/13.b9829312.js",
    "revision": "629f2ac9ec77b830d2f27f74e29544b9"
  },
  {
    "url": "assets/js/14.2f66d271.js",
    "revision": "0379f8b9a50863dd255ee85b4e38bd97"
  },
  {
    "url": "assets/js/15.86ec0a88.js",
    "revision": "ecf4cd1c1eb3ef697a935ddcb0e82773"
  },
  {
    "url": "assets/js/16.124a600a.js",
    "revision": "b744ccb34b1ffbc3a93d2b4ecbdf8f14"
  },
  {
    "url": "assets/js/17.8614f9c8.js",
    "revision": "927edb9c243e18a674d7e899d9923e3b"
  },
  {
    "url": "assets/js/18.0f2661f6.js",
    "revision": "f8832c0947c872b5c018a97d498e3808"
  },
  {
    "url": "assets/js/19.1ed563ff.js",
    "revision": "378ac8061a5fa425031ea3585d524fd8"
  },
  {
    "url": "assets/js/2.1e46ec91.js",
    "revision": "5405dea64456a33d6e79e7ce6f9a2b17"
  },
  {
    "url": "assets/js/20.def5f844.js",
    "revision": "fc7c19f4a3d18c3b48583dff536b6d5b"
  },
  {
    "url": "assets/js/21.4f7b4c39.js",
    "revision": "a71de0a437f30d5e305d3c9c4e0a5898"
  },
  {
    "url": "assets/js/22.1df4690d.js",
    "revision": "1646bb5d170b9f755d3c4350f6c1efac"
  },
  {
    "url": "assets/js/23.8079ddb6.js",
    "revision": "8ce849ff188d207b8be33d09cfac703c"
  },
  {
    "url": "assets/js/24.8234a7ae.js",
    "revision": "07beb8cc38feb8b2b54e8b8aca47ac59"
  },
  {
    "url": "assets/js/25.a5c6ac72.js",
    "revision": "b50ea742095de95b4c9e2ae958fc2671"
  },
  {
    "url": "assets/js/26.6a10f5b2.js",
    "revision": "c2682492c8af0d549d6307ed3c4c664f"
  },
  {
    "url": "assets/js/27.5d3f2ba4.js",
    "revision": "f6a95d8caa16c71432d73ae27a70524a"
  },
  {
    "url": "assets/js/28.fbb03e2a.js",
    "revision": "3a561635575a6624ee58ea072c55e854"
  },
  {
    "url": "assets/js/29.0c1e243b.js",
    "revision": "e5a45f1bb7531f23e399a937bb69ff57"
  },
  {
    "url": "assets/js/3.d9f5cb60.js",
    "revision": "1fb0dfbe3695f57b1ee6ffe5fdbf76f5"
  },
  {
    "url": "assets/js/30.94902d02.js",
    "revision": "881def40bfd973787ca6495c77a49d7f"
  },
  {
    "url": "assets/js/31.2744fcb2.js",
    "revision": "272b985111965e3ecf5b3f62cc8e296b"
  },
  {
    "url": "assets/js/32.61ba0522.js",
    "revision": "8a106a63a60b724e5c9e9e2ab1ee52d9"
  },
  {
    "url": "assets/js/33.323c2d00.js",
    "revision": "1610c492eed37b2fba8241c3b071b652"
  },
  {
    "url": "assets/js/34.7bc176b0.js",
    "revision": "f977cb53b37ce9741d1421ebbc9ba0de"
  },
  {
    "url": "assets/js/35.dd47c357.js",
    "revision": "df977c4e1c1f8ba24bdfe40788a5f273"
  },
  {
    "url": "assets/js/36.0baf9084.js",
    "revision": "e1f7f1f47b238cd98f5707a9cfc39b94"
  },
  {
    "url": "assets/js/37.48ee9a91.js",
    "revision": "1c529d3005551cc8194fbc8b613d8d91"
  },
  {
    "url": "assets/js/4.af81d99d.js",
    "revision": "75e36f7ef49a83c7f6f90fe94c4777a1"
  },
  {
    "url": "assets/js/5.fae6a00d.js",
    "revision": "9f4ae1cabb0014a35a6cd321b069bbb5"
  },
  {
    "url": "assets/js/6.eb2a9840.js",
    "revision": "400b87be8e0a44323d904f8955d18d33"
  },
  {
    "url": "assets/js/7.b9dd6dac.js",
    "revision": "2180277295beefcde1e4f00191c4308e"
  },
  {
    "url": "assets/js/8.e7d0b915.js",
    "revision": "8bcd9175da18a52a59c16c2bacbd0a5c"
  },
  {
    "url": "assets/js/app.46d22d62.js",
    "revision": "1dac923c98adc26a9a7a0e1365cda5d4"
  },
  {
    "url": "assets/js/vendors~docsearch.72eb81cf.js",
    "revision": "e96d773c6f1fb2f2308d26f2051da823"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide.md/index.html",
    "revision": "97ef1e3774556af57a9b3f9c77e09e9d"
  },
  {
    "url": "gyw.html",
    "revision": "c4b4192dec86128d4f34c43c0141808c"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "a1a0c6fef0cd95315ac23f3ebc9ef69d"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "238d834aa9f5eaafeb9a70fadeaa189e"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "09c8872333d08eafa84b960a8fcb302e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "6a70040eaccf37c6725ba5d1a38de881"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "37616195cfa34795c619b3639aaf76cb"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "691623c1ca409940f8df424596dc7572"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "timeline/index.html",
    "revision": "07e55da06509b7a73c435945f4170cc3"
  },
  {
    "url": "技术文章/博客插件/插件文章.html",
    "revision": "b163da7b7b2c70eb9d40a2d0f74282d5"
  },
  {
    "url": "技术文章/建站指南/pl.html",
    "revision": "2ef104b72e0008072f7f0df59cf6da65"
  },
  {
    "url": "技术文章/建站指南/senran03.html",
    "revision": "7108dc7ad7a6133057db8faea4b81f30"
  },
  {
    "url": "电商自媒体/life.html",
    "revision": "b72c62c8181999a0dfc773294a908af5"
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
