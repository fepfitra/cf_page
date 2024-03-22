// _worker.js/index.js
import("node:buffer").then(({ Buffer: Buffer2 }) => {
  globalThis.Buffer = Buffer2;
}).catch(() => null);
var __ALSes_PROMISE__ = import("node:async_hooks").then(({ AsyncLocalStorage }) => {
  globalThis.AsyncLocalStorage = AsyncLocalStorage;
  const envAsyncLocalStorage = new AsyncLocalStorage();
  const requestContextAsyncLocalStorage = new AsyncLocalStorage();
  globalThis.process = {
    env: new Proxy(
      {},
      {
        ownKeys: () => Reflect.ownKeys(envAsyncLocalStorage.getStore()),
        getOwnPropertyDescriptor: (_, ...args) => Reflect.getOwnPropertyDescriptor(envAsyncLocalStorage.getStore(), ...args),
        get: (_, property) => Reflect.get(envAsyncLocalStorage.getStore(), property),
        set: (_, property, value) => Reflect.set(envAsyncLocalStorage.getStore(), property, value)
      }
    )
  };
  globalThis[Symbol.for("__cloudflare-request-context__")] = new Proxy(
    {},
    {
      ownKeys: () => Reflect.ownKeys(requestContextAsyncLocalStorage.getStore()),
      getOwnPropertyDescriptor: (_, ...args) => Reflect.getOwnPropertyDescriptor(requestContextAsyncLocalStorage.getStore(), ...args),
      get: (_, property) => Reflect.get(requestContextAsyncLocalStorage.getStore(), property),
      set: (_, property, value) => Reflect.set(requestContextAsyncLocalStorage.getStore(), property, value)
    }
  );
  return { envAsyncLocalStorage, requestContextAsyncLocalStorage };
}).catch(() => null);
var te = Object.create;
var L = Object.defineProperty;
var ae = Object.getOwnPropertyDescriptor;
var se = Object.getOwnPropertyNames;
var re = Object.getPrototypeOf;
var ie = Object.prototype.hasOwnProperty;
var C = (e, t) => () => (e && (t = e(e = 0)), t);
var X = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var ne = (e, t, s, a) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let i of se(t))
      !ie.call(e, i) && i !== s && L(e, i, { get: () => t[i], enumerable: !(a = ae(t, i)) || a.enumerable });
  return e;
};
var H = (e, t, s) => (s = e != null ? te(re(e)) : {}, ne(t || !e || !e.__esModule ? L(s, "default", { value: e, enumerable: true }) : s, e));
var g;
var u = C(() => {
  g = { collectedLocales: [] };
});
var f;
var l = C(() => {
  f = { version: 3, routes: { none: [{ src: "^(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))/$", headers: { Location: "/$1" }, status: 308, continue: true }, { src: "^/_next/__private/trace$", dest: "/404", status: 404, continue: true }, { src: "^(?:/(.*))(?:/)?$", headers: { "Content-Security-Policy": "  default-src 'self';  script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app analytics.umami.is;  style-src 'self' 'unsafe-inline';  img-src * blob: data:;  media-src *.s3.amazonaws.com;  connect-src *;  font-src 'self';  frame-src giscus.app", "Referrer-Policy": "strict-origin-when-cross-origin", "X-Frame-Options": "DENY", "X-Content-Type-Options": "nosniff", "X-DNS-Prefetch-Control": "on", "Strict-Transport-Security": "max-age=31536000; includeSubDomains", "Permissions-Policy": "camera=(), microphone=(), geolocation=()" }, continue: true }, { src: "^/404/?$", status: 404, continue: true, missing: [{ type: "header", key: "x-prerender-revalidate" }] }, { src: "^/500$", status: 500, continue: true }, { src: "^/$", has: [{ type: "header", key: "next-router-prefetch" }], dest: "/__index.prefetch.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" }, continue: true, override: true }, { src: "^/((?!.+\\.rsc).+?)(?:/)?$", has: [{ type: "header", key: "next-router-prefetch" }], dest: "/$1.prefetch.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" }, continue: true, override: true }, { src: "^/$", has: [{ type: "header", key: "rsc" }], dest: "/index.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" }, continue: true, override: true }, { src: "^/((?!.+\\.rsc).+?)(?:/)?$", has: [{ type: "header", key: "rsc" }], dest: "/$1.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" }, continue: true, override: true }], filesystem: [{ src: "^/_next/data/(.*)$", dest: "/_next/data/$1", check: true }, { src: "^/\\.prefetch\\.rsc$", dest: "/__index.prefetch.rsc", check: true }, { src: "^/\\.rsc$", dest: "/index.rsc", check: true }, { src: "^/__index.prefetch.rsc$", dest: "/index.rsc", has: [{ type: "header", key: "next-router-prefetch" }], continue: true, override: true }, { src: "^/(.+?).prefetch.rsc(?:/)?$", dest: "/$1.rsc", has: [{ type: "header", key: "next-router-prefetch" }], continue: true, override: true }], miss: [{ src: "^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media)/.+$", status: 404, check: true, dest: "$0" }], rewrite: [{ src: "^/_next/data/(.*)$", dest: "/404", status: 404 }, { src: "^/blog/page/(?<nxtPpage>[^/]+?)(?:\\.rsc)(?:/)?$", dest: "/blog/page/[page].rsc?nxtPpage=$nxtPpage" }, { src: "^/blog/page/(?<nxtPpage>[^/]+?)(?:/)?$", dest: "/blog/page/[page]?nxtPpage=$nxtPpage" }, { src: "^/blog/(?<nxtPslug>.+?)(?:\\.rsc)(?:/)?$", dest: "/blog/[...slug].rsc?nxtPslug=$nxtPslug" }, { src: "^/blog/(?<nxtPslug>.+?)(?:/)?$", dest: "/blog/[...slug]?nxtPslug=$nxtPslug" }, { src: "^/tags/(?<nxtPtag>[^/]+?)(?:\\.rsc)(?:/)?$", dest: "/tags/[tag].rsc?nxtPtag=$nxtPtag" }, { src: "^/tags/(?<nxtPtag>[^/]+?)(?:/)?$", dest: "/tags/[tag]?nxtPtag=$nxtPtag" }], resource: [{ src: "^/.*$", status: 404 }], hit: [{ src: "^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media|jSoc0wx9EBudXXPocvZP_)/.+$", headers: { "cache-control": "public,max-age=31536000,immutable" }, continue: true, important: true }, { src: "^/index$", headers: { "x-matched-path": "/" }, continue: true, important: true }, { src: "^/((?!index$).*)$", headers: { "x-matched-path": "/$1" }, continue: true, important: true }], error: [{ src: "^/.*$", dest: "/404", status: 404 }, { src: "^/.*$", dest: "/500", status: 500 }] }, images: { domains: [], sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840, 16, 32, 48, 64, 96, 128, 256, 384], remotePatterns: [{ protocol: "https", hostname: "^(?:^(?:picsum\\.photos)$)$", pathname: "^(?:(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/?)$" }], minimumCacheTTL: 60, formats: ["image/webp"], dangerouslyAllowSVG: false, contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;", contentDispositionType: "inline" }, overrides: { "404.html": { path: "404", contentType: "text/html; charset=utf-8" }, "500.html": { path: "500", contentType: "text/html; charset=utf-8" }, "_app.rsc.json": { path: "_app.rsc", contentType: "application/json" }, "_error.rsc.json": { path: "_error.rsc", contentType: "application/json" }, "_document.rsc.json": { path: "_document.rsc", contentType: "application/json" }, "404.rsc.json": { path: "404.rsc", contentType: "application/json" } }, framework: { version: "14.1.0" }, crons: [] };
});
var m;
var d = C(() => {
  m = { "/404.html": { type: "override", path: "/404.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/404.rsc.json": { type: "override", path: "/404.rsc.json", headers: { "content-type": "application/json" } }, "/500.html": { type: "override", path: "/500.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/_app.rsc.json": { type: "override", path: "/_app.rsc.json", headers: { "content-type": "application/json" } }, "/_document.rsc.json": { type: "override", path: "/_document.rsc.json", headers: { "content-type": "application/json" } }, "/_error.rsc.json": { type: "override", path: "/_error.rsc.json", headers: { "content-type": "application/json" } }, "/_next/static/chunks/250-8a00c2ed276249ba.js": { type: "static" }, "/_next/static/chunks/250-8a00c2ed276249ba.js.map": { type: "static" }, "/_next/static/chunks/449-432d7db7ce19d948.js": { type: "static" }, "/_next/static/chunks/449-432d7db7ce19d948.js.map": { type: "static" }, "/_next/static/chunks/538-8202e2d35247c83c.js": { type: "static" }, "/_next/static/chunks/538-8202e2d35247c83c.js.map": { type: "static" }, "/_next/static/chunks/726-ec09664fe5117765.js": { type: "static" }, "/_next/static/chunks/726-ec09664fe5117765.js.map": { type: "static" }, "/_next/static/chunks/749-8ee7d62b4eb303f9.js": { type: "static" }, "/_next/static/chunks/749-8ee7d62b4eb303f9.js.map": { type: "static" }, "/_next/static/chunks/852.730adc74d1b0a9fb.js": { type: "static" }, "/_next/static/chunks/852.730adc74d1b0a9fb.js.map": { type: "static" }, "/_next/static/chunks/app/about/page-7200013bca72fe52.js": { type: "static" }, "/_next/static/chunks/app/about/page-7200013bca72fe52.js.map": { type: "static" }, "/_next/static/chunks/app/blog/[...slug]/page-e0610b9ccabdd47f.js": { type: "static" }, "/_next/static/chunks/app/blog/[...slug]/page-e0610b9ccabdd47f.js.map": { type: "static" }, "/_next/static/chunks/app/blog/page/[page]/page-1fe1c1674c7d8230.js": { type: "static" }, "/_next/static/chunks/app/blog/page-c3c67b570e9a7d69.js": { type: "static" }, "/_next/static/chunks/app/layout-5d3102f81ac79e4d.js": { type: "static" }, "/_next/static/chunks/app/layout-5d3102f81ac79e4d.js.map": { type: "static" }, "/_next/static/chunks/app/not-found-5202e5c70d3efe21.js": { type: "static" }, "/_next/static/chunks/app/not-found-5202e5c70d3efe21.js.map": { type: "static" }, "/_next/static/chunks/app/page-3adfba7233bc1267.js": { type: "static" }, "/_next/static/chunks/app/page-3adfba7233bc1267.js.map": { type: "static" }, "/_next/static/chunks/app/projects/page-d95d2e07af1e1f75.js": { type: "static" }, "/_next/static/chunks/app/projects/page-d95d2e07af1e1f75.js.map": { type: "static" }, "/_next/static/chunks/app/tags/[tag]/page-15c56c86189c1090.js": { type: "static" }, "/_next/static/chunks/app/tags/page-898ec9a580eb2d68.js": { type: "static" }, "/_next/static/chunks/app/tags/page-898ec9a580eb2d68.js.map": { type: "static" }, "/_next/static/chunks/fd9d1056-3029b25dba5b3d48.js": { type: "static" }, "/_next/static/chunks/fd9d1056-3029b25dba5b3d48.js.map": { type: "static" }, "/_next/static/chunks/framework-77a1e5ee07fab189.js": { type: "static" }, "/_next/static/chunks/framework-77a1e5ee07fab189.js.map": { type: "static" }, "/_next/static/chunks/main-app-3c9d02b9e0beaa63.js": { type: "static" }, "/_next/static/chunks/main-app-3c9d02b9e0beaa63.js.map": { type: "static" }, "/_next/static/chunks/main-df0b8b5a36aec75b.js": { type: "static" }, "/_next/static/chunks/main-df0b8b5a36aec75b.js.map": { type: "static" }, "/_next/static/chunks/pages/_app-2bceae7789b212f7.js": { type: "static" }, "/_next/static/chunks/pages/_app-2bceae7789b212f7.js.map": { type: "static" }, "/_next/static/chunks/pages/_error-ebcae4b2488795f0.js": { type: "static" }, "/_next/static/chunks/pages/_error-ebcae4b2488795f0.js.map": { type: "static" }, "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js": { type: "static" }, "/_next/static/chunks/webpack-435d42aa814bb4e6.js": { type: "static" }, "/_next/static/chunks/webpack-435d42aa814bb4e6.js.map": { type: "static" }, "/_next/static/css/0090473be9d08d09.css": { type: "static" }, "/_next/static/css/0090473be9d08d09.css.map": { type: "static" }, "/_next/static/css/a458b28641451446.css": { type: "static" }, "/_next/static/css/a458b28641451446.css.map": { type: "static" }, "/_next/static/jSoc0wx9EBudXXPocvZP_/_buildManifest.js": { type: "static" }, "/_next/static/jSoc0wx9EBudXXPocvZP_/_ssgManifest.js": { type: "static" }, "/_next/static/media/2d141e1a38819612-s.p.woff2": { type: "static" }, "/_next/static/media/62328fecf9e80426-s.woff2": { type: "static" }, "/_next/static/media/KaTeX_AMS-Regular.1608a09b.woff": { type: "static" }, "/_next/static/media/KaTeX_AMS-Regular.4aafdb68.ttf": { type: "static" }, "/_next/static/media/KaTeX_AMS-Regular.a79f1c31.woff2": { type: "static" }, "/_next/static/media/KaTeX_Caligraphic-Bold.b6770918.woff": { type: "static" }, "/_next/static/media/KaTeX_Caligraphic-Bold.cce5b8ec.ttf": { type: "static" }, "/_next/static/media/KaTeX_Caligraphic-Bold.ec17d132.woff2": { type: "static" }, "/_next/static/media/KaTeX_Caligraphic-Regular.07ef19e7.ttf": { type: "static" }, "/_next/static/media/KaTeX_Caligraphic-Regular.55fac258.woff2": { type: "static" }, "/_next/static/media/KaTeX_Caligraphic-Regular.dad44a7f.woff": { type: "static" }, "/_next/static/media/KaTeX_Fraktur-Bold.9f256b85.woff": { type: "static" }, "/_next/static/media/KaTeX_Fraktur-Bold.b18f59e1.ttf": { type: "static" }, "/_next/static/media/KaTeX_Fraktur-Bold.d42a5579.woff2": { type: "static" }, "/_next/static/media/KaTeX_Fraktur-Regular.7c187121.woff": { type: "static" }, "/_next/static/media/KaTeX_Fraktur-Regular.d3c882a6.woff2": { type: "static" }, "/_next/static/media/KaTeX_Fraktur-Regular.ed38e79f.ttf": { type: "static" }, "/_next/static/media/KaTeX_Main-Bold.b74a1a8b.ttf": { type: "static" }, "/_next/static/media/KaTeX_Main-Bold.c3fb5ac2.woff2": { type: "static" }, "/_next/static/media/KaTeX_Main-Bold.d181c465.woff": { type: "static" }, "/_next/static/media/KaTeX_Main-BoldItalic.6f2bb1df.woff2": { type: "static" }, "/_next/static/media/KaTeX_Main-BoldItalic.70d8b0a5.ttf": { type: "static" }, "/_next/static/media/KaTeX_Main-BoldItalic.e3f82f9d.woff": { type: "static" }, "/_next/static/media/KaTeX_Main-Italic.47373d1e.ttf": { type: "static" }, "/_next/static/media/KaTeX_Main-Italic.8916142b.woff2": { type: "static" }, "/_next/static/media/KaTeX_Main-Italic.9024d815.woff": { type: "static" }, "/_next/static/media/KaTeX_Main-Regular.0462f03b.woff2": { type: "static" }, "/_next/static/media/KaTeX_Main-Regular.7f51fe03.woff": { type: "static" }, "/_next/static/media/KaTeX_Main-Regular.b7f8fe9b.ttf": { type: "static" }, "/_next/static/media/KaTeX_Math-BoldItalic.572d331f.woff2": { type: "static" }, "/_next/static/media/KaTeX_Math-BoldItalic.a879cf83.ttf": { type: "static" }, "/_next/static/media/KaTeX_Math-BoldItalic.f1035d8d.woff": { type: "static" }, "/_next/static/media/KaTeX_Math-Italic.5295ba48.woff": { type: "static" }, "/_next/static/media/KaTeX_Math-Italic.939bc644.ttf": { type: "static" }, "/_next/static/media/KaTeX_Math-Italic.f28c23ac.woff2": { type: "static" }, "/_next/static/media/KaTeX_SansSerif-Bold.8c5b5494.woff2": { type: "static" }, "/_next/static/media/KaTeX_SansSerif-Bold.94e1e8dc.ttf": { type: "static" }, "/_next/static/media/KaTeX_SansSerif-Bold.bf59d231.woff": { type: "static" }, "/_next/static/media/KaTeX_SansSerif-Italic.3b1e59b3.woff2": { type: "static" }, "/_next/static/media/KaTeX_SansSerif-Italic.7c9bc82b.woff": { type: "static" }, "/_next/static/media/KaTeX_SansSerif-Italic.b4c20c84.ttf": { type: "static" }, "/_next/static/media/KaTeX_SansSerif-Regular.74048478.woff": { type: "static" }, "/_next/static/media/KaTeX_SansSerif-Regular.ba21ed5f.woff2": { type: "static" }, "/_next/static/media/KaTeX_SansSerif-Regular.d4d7ba48.ttf": { type: "static" }, "/_next/static/media/KaTeX_Script-Regular.03e9641d.woff2": { type: "static" }, "/_next/static/media/KaTeX_Script-Regular.07505710.woff": { type: "static" }, "/_next/static/media/KaTeX_Script-Regular.fe9cbbe1.ttf": { type: "static" }, "/_next/static/media/KaTeX_Size1-Regular.e1e279cb.woff": { type: "static" }, "/_next/static/media/KaTeX_Size1-Regular.eae34984.woff2": { type: "static" }, "/_next/static/media/KaTeX_Size1-Regular.fabc004a.ttf": { type: "static" }, "/_next/static/media/KaTeX_Size2-Regular.57727022.woff": { type: "static" }, "/_next/static/media/KaTeX_Size2-Regular.5916a24f.woff2": { type: "static" }, "/_next/static/media/KaTeX_Size2-Regular.d6b476ec.ttf": { type: "static" }, "/_next/static/media/KaTeX_Size3-Regular.9acaf01c.woff": { type: "static" }, "/_next/static/media/KaTeX_Size3-Regular.a144ef58.ttf": { type: "static" }, "/_next/static/media/KaTeX_Size3-Regular.b4230e7e.woff2": { type: "static" }, "/_next/static/media/KaTeX_Size4-Regular.10d95fd3.woff2": { type: "static" }, "/_next/static/media/KaTeX_Size4-Regular.7a996c9d.woff": { type: "static" }, "/_next/static/media/KaTeX_Size4-Regular.fbccdabe.ttf": { type: "static" }, "/_next/static/media/KaTeX_Typewriter-Regular.6258592b.woff": { type: "static" }, "/_next/static/media/KaTeX_Typewriter-Regular.a8709e36.woff2": { type: "static" }, "/_next/static/media/KaTeX_Typewriter-Regular.d97aaf4a.ttf": { type: "static" }, "/_next/static/media/c7eb187887c48af6-s.woff2": { type: "static" }, "/search.json": { type: "static" }, "/static/favicons/android-chrome-96x96.png": { type: "static" }, "/static/favicons/apple-touch-icon.png": { type: "static" }, "/static/favicons/browserconfig.xml": { type: "static" }, "/static/favicons/favicon-16x16.png": { type: "static" }, "/static/favicons/favicon-32x32.png": { type: "static" }, "/static/favicons/favicon.ico": { type: "static" }, "/static/favicons/mstile-150x150.png": { type: "static" }, "/static/favicons/safari-pinned-tab.svg": { type: "static" }, "/static/favicons/site.webmanifest": { type: "static" }, "/static/images/avatar.png": { type: "static" }, "/static/images/canada/lake.jpg": { type: "static" }, "/static/images/canada/maple.jpg": { type: "static" }, "/static/images/canada/mountains.jpg": { type: "static" }, "/static/images/canada/toronto.jpg": { type: "static" }, "/static/images/github-traffic.png": { type: "static" }, "/static/images/google.png": { type: "static" }, "/static/images/logo.png": { type: "static" }, "/static/images/ocean.jpeg": { type: "static" }, "/static/images/sparrowhawk-avatar.jpg": { type: "static" }, "/static/images/time-machine.jpg": { type: "static" }, "/static/images/twitter-card.png": { type: "static" }, "/api/newsletter": { type: "function", entrypoint: "__next-on-pages-dist__/functions/api/newsletter.func.js" }, "/blog/[...slug]": { type: "function", entrypoint: "__next-on-pages-dist__/functions/blog/[...slug].func.js" }, "/blog/[...slug].rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/blog/[...slug].func.js" }, "/blog/page/[page]": { type: "function", entrypoint: "__next-on-pages-dist__/functions/blog/page/[page].func.js" }, "/blog/page/[page].rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/blog/page/[page].func.js" }, "/tags/[tag]": { type: "function", entrypoint: "__next-on-pages-dist__/functions/tags/[tag].func.js" }, "/tags/[tag].rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/tags/[tag].func.js" }, "/404": { type: "override", path: "/404.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/500": { type: "override", path: "/500.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/_app.rsc": { type: "override", path: "/_app.rsc.json", headers: { "content-type": "application/json" } }, "/_error.rsc": { type: "override", path: "/_error.rsc.json", headers: { "content-type": "application/json" } }, "/_document.rsc": { type: "override", path: "/_document.rsc.json", headers: { "content-type": "application/json" } }, "/404.rsc": { type: "override", path: "/404.rsc.json", headers: { "content-type": "application/json" } }, "/about.html": { type: "override", path: "/about.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/about/layout,_N_T_/about/page,_N_T_/about", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/about": { type: "override", path: "/about.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/about/layout,_N_T_/about/page,_N_T_/about", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/about.rsc": { type: "override", path: "/about.rsc", headers: { "content-type": "text/x-component", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/blog.html": { type: "override", path: "/blog.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/blog/layout,_N_T_/blog/page,_N_T_/blog", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/blog": { type: "override", path: "/blog.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/blog/layout,_N_T_/blog/page,_N_T_/blog", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/blog.rsc": { type: "override", path: "/blog.rsc", headers: { "content-type": "text/x-component", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/index.html": { type: "override", path: "/index.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/index": { type: "override", path: "/index.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/": { type: "override", path: "/index.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/index.rsc": { type: "override", path: "/index.rsc", headers: { "content-type": "text/x-component", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/projects.html": { type: "override", path: "/projects.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/projects/layout,_N_T_/projects/page,_N_T_/projects", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/projects": { type: "override", path: "/projects.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/projects/layout,_N_T_/projects/page,_N_T_/projects", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/projects.rsc": { type: "override", path: "/projects.rsc", headers: { "content-type": "text/x-component", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/robots.txt": { type: "override", path: "/robots.txt", headers: { "cache-control": "public, max-age=0, must-revalidate", "content-type": "text/plain", "x-next-cache-tags": "_N_T_/layout,_N_T_/robots.txt/layout,_N_T_/robots.txt/route,_N_T_/robots.txt", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/sitemap.xml": { type: "override", path: "/sitemap.xml", headers: { "cache-control": "public, max-age=0, must-revalidate", "content-type": "application/xml", "x-next-cache-tags": "_N_T_/layout,_N_T_/sitemap.xml/layout,_N_T_/sitemap.xml/route,_N_T_/sitemap.xml", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/tags.html": { type: "override", path: "/tags.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/tags/layout,_N_T_/tags/page,_N_T_/tags", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/tags": { type: "override", path: "/tags.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/tags/layout,_N_T_/tags/page,_N_T_/tags", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/tags.rsc": { type: "override", path: "/tags.rsc", headers: { "content-type": "text/x-component", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } } };
});
var O = X((Ve, V) => {
  "use strict";
  u();
  l();
  d();
  function R(e, t) {
    e = String(e || "").trim();
    let s = e, a, i = "";
    if (/^[^a-zA-Z\\\s]/.test(e)) {
      a = e[0];
      let c = e.lastIndexOf(a);
      i += e.substring(c + 1), e = e.substring(1, c);
    }
    let r = 0;
    return e = pe(e, (c) => {
      if (/^\(\?[P<']/.test(c)) {
        let o = /^\(\?P?[<']([^>']+)[>']/.exec(c);
        if (!o)
          throw new Error(`Failed to extract named captures from ${JSON.stringify(c)}`);
        let p = c.substring(o[0].length, c.length - 1);
        return t && (t[r] = o[1]), r++, `(${p})`;
      }
      return c.substring(0, 3) === "(?:" || r++, c;
    }), e = e.replace(/\[:([^:]+):\]/g, (c, o) => R.characterClasses[o] || c), new R.PCRE(e, i, s, i, a);
  }
  function pe(e, t) {
    let s = 0, a = 0, i = false;
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      if (i) {
        i = false;
        continue;
      }
      switch (r) {
        case "(":
          a === 0 && (s = n), a++;
          break;
        case ")":
          if (a > 0 && (a--, a === 0)) {
            let c = n + 1, o = s === 0 ? "" : e.substring(0, s), p = e.substring(c), h = String(t(e.substring(s, c)));
            e = o + h + p, n = s;
          }
          break;
        case "\\":
          i = true;
          break;
        default:
          break;
      }
    }
    return e;
  }
  (function(e) {
    class t extends RegExp {
      constructor(a, i, n, r, c) {
        super(a, i), this.pcrePattern = n, this.pcreFlags = r, this.delimiter = c;
      }
    }
    e.PCRE = t, e.characterClasses = { alnum: "[A-Za-z0-9]", word: "[A-Za-z0-9_]", alpha: "[A-Za-z]", blank: "[ \\t]", cntrl: "[\\x00-\\x1F\\x7F]", digit: "\\d", graph: "[\\x21-\\x7E]", lower: "[a-z]", print: "[\\x20-\\x7E]", punct: "[\\]\\[!\"#$%&'()*+,./:;<=>?@\\\\^_`{|}~-]", space: "\\s", upper: "[A-Z]", xdigit: "[A-Fa-f0-9]" };
  })(R || (R = {}));
  R.prototype = R.PCRE.prototype;
  V.exports = R;
});
var Z = X((U) => {
  "use strict";
  u();
  l();
  d();
  U.parse = Re;
  U.serialize = be;
  var xe = Object.prototype.toString, N = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  function Re(e, t) {
    if (typeof e != "string")
      throw new TypeError("argument str must be a string");
    for (var s = {}, a = t || {}, i = a.decode || we, n = 0; n < e.length; ) {
      var r = e.indexOf("=", n);
      if (r === -1)
        break;
      var c = e.indexOf(";", n);
      if (c === -1)
        c = e.length;
      else if (c < r) {
        n = e.lastIndexOf(";", r - 1) + 1;
        continue;
      }
      var o = e.slice(n, r).trim();
      if (s[o] === void 0) {
        var p = e.slice(r + 1, c).trim();
        p.charCodeAt(0) === 34 && (p = p.slice(1, -1)), s[o] = Te(p, i);
      }
      n = c + 1;
    }
    return s;
  }
  function be(e, t, s) {
    var a = s || {}, i = a.encode || Se;
    if (typeof i != "function")
      throw new TypeError("option encode is invalid");
    if (!N.test(e))
      throw new TypeError("argument name is invalid");
    var n = i(t);
    if (n && !N.test(n))
      throw new TypeError("argument val is invalid");
    var r = e + "=" + n;
    if (a.maxAge != null) {
      var c = a.maxAge - 0;
      if (isNaN(c) || !isFinite(c))
        throw new TypeError("option maxAge is invalid");
      r += "; Max-Age=" + Math.floor(c);
    }
    if (a.domain) {
      if (!N.test(a.domain))
        throw new TypeError("option domain is invalid");
      r += "; Domain=" + a.domain;
    }
    if (a.path) {
      if (!N.test(a.path))
        throw new TypeError("option path is invalid");
      r += "; Path=" + a.path;
    }
    if (a.expires) {
      var o = a.expires;
      if (!ve(o) || isNaN(o.valueOf()))
        throw new TypeError("option expires is invalid");
      r += "; Expires=" + o.toUTCString();
    }
    if (a.httpOnly && (r += "; HttpOnly"), a.secure && (r += "; Secure"), a.priority) {
      var p = typeof a.priority == "string" ? a.priority.toLowerCase() : a.priority;
      switch (p) {
        case "low":
          r += "; Priority=Low";
          break;
        case "medium":
          r += "; Priority=Medium";
          break;
        case "high":
          r += "; Priority=High";
          break;
        default:
          throw new TypeError("option priority is invalid");
      }
    }
    if (a.sameSite) {
      var h = typeof a.sameSite == "string" ? a.sameSite.toLowerCase() : a.sameSite;
      switch (h) {
        case true:
          r += "; SameSite=Strict";
          break;
        case "lax":
          r += "; SameSite=Lax";
          break;
        case "strict":
          r += "; SameSite=Strict";
          break;
        case "none":
          r += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    return r;
  }
  function we(e) {
    return e.indexOf("%") !== -1 ? decodeURIComponent(e) : e;
  }
  function Se(e) {
    return encodeURIComponent(e);
  }
  function ve(e) {
    return xe.call(e) === "[object Date]" || e instanceof Date;
  }
  function Te(e, t) {
    try {
      return t(e);
    } catch {
      return e;
    }
  }
});
u();
l();
d();
u();
l();
d();
u();
l();
d();
var b = "INTERNAL_SUSPENSE_CACHE_HOSTNAME.local";
u();
l();
d();
u();
l();
d();
u();
l();
d();
u();
l();
d();
var F = H(O());
function T(e, t, s) {
  if (t == null)
    return { match: null, captureGroupKeys: [] };
  let a = s ? "" : "i", i = [];
  return { match: (0, F.default)(`%${e}%${a}`, i).exec(t), captureGroupKeys: i };
}
function w(e, t, s, { namedOnly: a } = {}) {
  return e.replace(/\$([a-zA-Z0-9_]+)/g, (i, n) => {
    let r = s.indexOf(n);
    return a && r === -1 ? i : (r === -1 ? t[parseInt(n, 10)] : t[r + 1]) || "";
  });
}
function E(e, { url: t, cookies: s, headers: a, routeDest: i }) {
  switch (e.type) {
    case "host":
      return { valid: t.hostname === e.value };
    case "header":
      return e.value !== void 0 ? j(e.value, a.get(e.key), i) : { valid: a.has(e.key) };
    case "cookie": {
      let n = s[e.key];
      return n && e.value !== void 0 ? j(e.value, n, i) : { valid: n !== void 0 };
    }
    case "query":
      return e.value !== void 0 ? j(e.value, t.searchParams.get(e.key), i) : { valid: t.searchParams.has(e.key) };
  }
}
function j(e, t, s) {
  let { match: a, captureGroupKeys: i } = T(e, t);
  return s && a && i.length ? { valid: !!a, newRouteDest: w(s, a, i, { namedOnly: true }) } : { valid: !!a };
}
u();
l();
d();
function $(e) {
  let t = new Headers(e.headers);
  return e.cf && (t.set("x-vercel-ip-city", e.cf.city), t.set("x-vercel-ip-country", e.cf.country), t.set("x-vercel-ip-country-region", e.cf.region), t.set("x-vercel-ip-latitude", e.cf.latitude), t.set("x-vercel-ip-longitude", e.cf.longitude)), t.set("x-vercel-sc-host", b), new Request(e, { headers: t });
}
u();
l();
d();
function y(e, t, s) {
  let a = t instanceof Headers ? t.entries() : Object.entries(t);
  for (let [i, n] of a) {
    let r = i.toLowerCase(), c = s?.match ? w(n, s.match, s.captureGroupKeys) : n;
    r === "set-cookie" ? e.append(r, c) : e.set(r, c);
  }
}
function S(e) {
  return /^https?:\/\//.test(e);
}
function x(e, t) {
  for (let [s, a] of t.entries()) {
    let i = /^nxtP(.+)$/.exec(s), n = /^nxtI(.+)$/.exec(s);
    i?.[1] ? (e.set(s, a), e.set(i[1], a)) : n?.[1] ? e.set(n[1], a.replace(/(\(\.+\))+/, "")) : (!e.has(s) || !!a && !e.getAll(s).includes(a)) && e.append(s, a);
  }
}
function M(e, t) {
  let s = new URL(t, e.url);
  return x(s.searchParams, new URL(e.url).searchParams), s.pathname = s.pathname.replace(/\/index.html$/, "/").replace(/\.html$/, ""), new Request(s, e);
}
function v(e) {
  return new Response(e.body, e);
}
function I(e) {
  return e.split(",").map((t) => {
    let [s, a] = t.split(";"), i = parseFloat((a ?? "q=1").replace(/q *= */gi, ""));
    return [s.trim(), isNaN(i) ? 1 : i];
  }).sort((t, s) => s[1] - t[1]).map(([t]) => t === "*" || t === "" ? [] : t).flat();
}
u();
l();
d();
function K(e) {
  switch (e) {
    case "none":
      return "filesystem";
    case "filesystem":
      return "rewrite";
    case "rewrite":
      return "resource";
    case "resource":
      return "miss";
    default:
      return "miss";
  }
}
async function P(e, { request: t, assetsFetcher: s, ctx: a }, { path: i, searchParams: n }) {
  let r, c = new URL(t.url);
  x(c.searchParams, n);
  let o = new Request(c, t);
  try {
    switch (e?.type) {
      case "function":
      case "middleware": {
        let p = await import(e.entrypoint);
        try {
          r = await p.default(o, a);
        } catch (h) {
          let _ = h;
          throw _.name === "TypeError" && _.message.endsWith("default is not a function") ? new Error(`An error occurred while evaluating the target edge function (${e.entrypoint})`) : h;
        }
        break;
      }
      case "override": {
        r = v(await s.fetch(M(o, e.path ?? i))), e.headers && y(r.headers, e.headers);
        break;
      }
      case "static": {
        r = await s.fetch(M(o, i));
        break;
      }
      default:
        r = new Response("Not Found", { status: 404 });
    }
  } catch (p) {
    return console.error(p), new Response("Internal Server Error", { status: 500 });
  }
  return v(r);
}
function B(e, t) {
  let s = "^//?(?:", a = ")/(.*)$";
  return !e.startsWith(s) || !e.endsWith(a) ? false : e.slice(s.length, -a.length).split("|").every((n) => t.has(n));
}
u();
l();
d();
function ue(e, { protocol: t, hostname: s, port: a, pathname: i }) {
  return !(t && e.protocol.replace(/:$/, "") !== t || !new RegExp(s).test(e.hostname) || a && !new RegExp(a).test(e.port) || i && !new RegExp(i).test(e.pathname));
}
function le(e, t) {
  if (e.method !== "GET")
    return;
  let { origin: s, searchParams: a } = new URL(e.url), i = a.get("url"), n = Number.parseInt(a.get("w") ?? "", 10), r = Number.parseInt(a.get("q") ?? "75", 10);
  if (!i || Number.isNaN(n) || Number.isNaN(r) || !t?.sizes?.includes(n) || r < 0 || r > 100)
    return;
  let c = new URL(i, s);
  if (c.pathname.endsWith(".svg") && !t?.dangerouslyAllowSVG)
    return;
  let o = i.startsWith("/") || i.startsWith("%2F");
  if (!o && !t?.domains?.includes(c.hostname) && !t?.remotePatterns?.find((_) => ue(c, _)))
    return;
  let p = e.headers.get("Accept") ?? "", h = t?.formats?.find((_) => p.includes(_))?.replace("image/", "");
  return { isRelative: o, imageUrl: c, options: { width: n, quality: r, format: h } };
}
function de(e, t, s) {
  let a = new Headers();
  if (s?.contentSecurityPolicy && a.set("Content-Security-Policy", s.contentSecurityPolicy), s?.contentDispositionType) {
    let n = t.pathname.split("/").pop(), r = n ? `${s.contentDispositionType}; filename="${n}"` : s.contentDispositionType;
    a.set("Content-Disposition", r);
  }
  e.headers.has("Cache-Control") || a.set("Cache-Control", `public, max-age=${s?.minimumCacheTTL ?? 60}`);
  let i = v(e);
  return y(i.headers, a), i;
}
async function q(e, { buildOutput: t, assetsFetcher: s, imagesConfig: a }) {
  let i = le(e, a);
  if (!i)
    return new Response("Invalid image resizing request", { status: 400 });
  let { isRelative: n, imageUrl: r } = i, c = new Request(r, { headers: e.headers }), o = n && r.pathname in t ? await s.fetch(c) : await fetch(c);
  return de(o, r, a);
}
u();
l();
d();
u();
l();
d();
var he = "x-vercel-cache-tags";
var fe = "x-next-cache-soft-tags";
async function G(e) {
  let t = `https://${b}/v1/suspense-cache/`;
  if (!e.url.startsWith(t))
    return null;
  try {
    let s = new URL(e.url), a = await me();
    if (s.pathname === "/v1/suspense-cache/revalidate") {
      let n = s.searchParams.get("tags")?.split(",") ?? [];
      for (let r of n)
        await a.revalidateTag(r);
      return new Response(null, { status: 200 });
    }
    let i = s.pathname.replace("/v1/suspense-cache/", "");
    if (!i.length)
      return new Response("Invalid cache key", { status: 400 });
    switch (e.method) {
      case "GET": {
        let n = z(e, fe), r = await a.get(i, { softTags: n });
        return r ? new Response(JSON.stringify(r.value), { status: 200, headers: { "Content-Type": "application/json", "x-vercel-cache-state": "fresh", age: `${(Date.now() - (r.lastModified ?? Date.now())) / 1e3}` } }) : new Response(null, { status: 404 });
      }
      case "POST": {
        let n = await e.json();
        return n.data.tags === void 0 && (n.tags ??= z(e, he) ?? []), await a.set(i, n), new Response(null, { status: 200 });
      }
      default:
        return new Response(null, { status: 405 });
    }
  } catch (s) {
    return console.error(s), new Response("Error handling cache request", { status: 500 });
  }
}
async function me() {
  return process.env.__NEXT_ON_PAGES__KV_SUSPENSE_CACHE ? D("kv") : D("cache-api");
}
async function D(e) {
  let t = await import(`./__next-on-pages-dist__/cache/${e}.js`);
  return new t.default();
}
function z(e, t) {
  return e.headers.get(t)?.split(",")?.filter(Boolean);
}
function J() {
  globalThis.fetch[W] || (ge(), globalThis.fetch[W] = true);
}
function ge() {
  let e = globalThis.fetch;
  globalThis.fetch = async (...t) => {
    let s = new Request(...t), a = await _e(s);
    return a || (a = await G(s), a) ? a : (ye(s), e(s));
  };
}
async function _e(e) {
  if (e.url.startsWith("blob:"))
    try {
      let s = (await import(`./__next-on-pages-dist__/assets/${new URL(e.url).pathname}.bin`)).default, a = { async arrayBuffer() {
        return s;
      }, get body() {
        return new ReadableStream({ start(i) {
          let n = Buffer.from(s);
          i.enqueue(n), i.close();
        } });
      }, async text() {
        return Buffer.from(s).toString();
      }, async json() {
        let i = Buffer.from(s);
        return JSON.stringify(i.toString());
      }, async blob() {
        return new Blob(s);
      } };
      return a.clone = () => ({ ...a }), a;
    } catch {
    }
  return null;
}
function ye(e) {
  e.headers.has("user-agent") || e.headers.set("user-agent", "Next.js Middleware");
}
var W = Symbol.for("next-on-pages fetch patch");
u();
l();
d();
var Q = H(Z());
var k = class {
  constructor(t, s, a, i, n) {
    this.routes = t;
    this.output = s;
    this.reqCtx = a;
    this.url = new URL(a.request.url), this.cookies = (0, Q.parse)(a.request.headers.get("cookie") || ""), this.path = this.url.pathname || "/", this.headers = { normal: new Headers(), important: new Headers() }, this.searchParams = new URLSearchParams(), x(this.searchParams, this.url.searchParams), this.checkPhaseCounter = 0, this.middlewareInvoked = [], this.wildcardMatch = n?.find((r) => r.domain === this.url.hostname), this.locales = new Set(i.collectedLocales);
  }
  url;
  cookies;
  wildcardMatch;
  path;
  status;
  headers;
  searchParams;
  body;
  checkPhaseCounter;
  middlewareInvoked;
  locales;
  checkRouteMatch(t, { checkStatus: s, checkIntercept: a }) {
    let i = T(t.src, this.path, t.caseSensitive);
    if (!i.match || t.methods && !t.methods.map((r) => r.toUpperCase()).includes(this.reqCtx.request.method.toUpperCase()))
      return;
    let n = { url: this.url, cookies: this.cookies, headers: this.reqCtx.request.headers, routeDest: t.dest };
    if (!t.has?.find((r) => {
      let c = E(r, n);
      return c.newRouteDest && (n.routeDest = c.newRouteDest), !c.valid;
    }) && !t.missing?.find((r) => E(r, n).valid) && !(s && t.status !== this.status)) {
      if (a && t.dest) {
        let r = /\/(\(\.+\))+/, c = r.test(t.dest), o = r.test(this.path);
        if (c && !o)
          return;
      }
      return { routeMatch: i, routeDest: n.routeDest };
    }
  }
  processMiddlewareResp(t) {
    let s = "x-middleware-override-headers", a = t.headers.get(s);
    if (a) {
      let o = new Set(a.split(",").map((p) => p.trim()));
      for (let p of o.keys()) {
        let h = `x-middleware-request-${p}`, _ = t.headers.get(h);
        this.reqCtx.request.headers.get(p) !== _ && (_ ? this.reqCtx.request.headers.set(p, _) : this.reqCtx.request.headers.delete(p)), t.headers.delete(h);
      }
      t.headers.delete(s);
    }
    let i = "x-middleware-rewrite", n = t.headers.get(i);
    if (n) {
      let o = new URL(n, this.url), p = this.url.hostname !== o.hostname;
      this.path = p ? `${o}` : o.pathname, x(this.searchParams, o.searchParams), t.headers.delete(i);
    }
    let r = "x-middleware-next";
    t.headers.get(r) ? t.headers.delete(r) : !n && !t.headers.has("location") && (this.body = t.body, this.status = t.status), y(this.headers.normal, t.headers), this.headers.middlewareLocation = t.headers.get("location");
  }
  async runRouteMiddleware(t) {
    if (!t)
      return true;
    let s = t && this.output[t];
    if (!s || s.type !== "middleware")
      return this.status = 500, false;
    let a = await P(s, this.reqCtx, { path: this.path, searchParams: this.searchParams, headers: this.headers, status: this.status });
    return this.middlewareInvoked.push(t), a.status === 500 ? (this.status = a.status, false) : (this.processMiddlewareResp(a), true);
  }
  applyRouteOverrides(t) {
    !t.override || (this.status = void 0, this.headers.normal = new Headers(), this.headers.important = new Headers());
  }
  applyRouteHeaders(t, s, a) {
    !t.headers || (y(this.headers.normal, t.headers, { match: s, captureGroupKeys: a }), t.important && y(this.headers.important, t.headers, { match: s, captureGroupKeys: a }));
  }
  applyRouteStatus(t) {
    !t.status || (this.status = t.status);
  }
  applyRouteDest(t, s, a) {
    if (!t.dest)
      return this.path;
    let i = this.path, n = t.dest;
    this.wildcardMatch && /\$wildcard/.test(n) && (n = n.replace(/\$wildcard/g, this.wildcardMatch.value)), this.path = w(n, s, a);
    let r = /\/index\.rsc$/i.test(this.path), c = /^\/(?:index)?$/i.test(i), o = /^\/__index\.prefetch\.rsc$/i.test(i);
    r && !c && !o && (this.path = i);
    let p = /\.rsc$/i.test(this.path), h = /\.prefetch\.rsc$/i.test(this.path), _ = this.path in this.output;
    p && !h && !_ && (this.path = this.path.replace(/\.rsc/i, ""));
    let A = new URL(this.path, this.url);
    return x(this.searchParams, A.searchParams), S(this.path) || (this.path = A.pathname), i;
  }
  applyLocaleRedirects(t) {
    if (!t.locale?.redirect || !/^\^(.)*$/.test(t.src) && t.src !== this.path || this.headers.normal.has("location"))
      return;
    let { locale: { redirect: a, cookie: i } } = t, n = i && this.cookies[i], r = I(n ?? ""), c = I(this.reqCtx.request.headers.get("accept-language") ?? ""), h = [...r, ...c].map((_) => a[_]).filter(Boolean)[0];
    if (h) {
      !this.path.startsWith(h) && (this.headers.normal.set("location", h), this.status = 307);
      return;
    }
  }
  getLocaleFriendlyRoute(t, s) {
    return !this.locales || s !== "miss" ? t : B(t.src, this.locales) ? { ...t, src: t.src.replace(/\/\(\.\*\)\$$/, "(?:/(.*))?$") } : t;
  }
  async checkRoute(t, s) {
    let a = this.getLocaleFriendlyRoute(s, t), { routeMatch: i, routeDest: n } = this.checkRouteMatch(a, { checkStatus: t === "error", checkIntercept: t === "rewrite" }) ?? {}, r = { ...a, dest: n };
    if (!i?.match || r.middlewarePath && this.middlewareInvoked.includes(r.middlewarePath))
      return "skip";
    let { match: c, captureGroupKeys: o } = i;
    if (this.applyRouteOverrides(r), this.applyLocaleRedirects(r), !await this.runRouteMiddleware(r.middlewarePath))
      return "error";
    if (this.body !== void 0 || this.headers.middlewareLocation)
      return "done";
    this.applyRouteHeaders(r, c, o), this.applyRouteStatus(r);
    let h = this.applyRouteDest(r, c, o);
    if (r.check && !S(this.path))
      if (h === this.path) {
        if (t !== "miss")
          return this.checkPhase(K(t));
        this.status = 404;
      } else if (t === "miss") {
        if (!(this.path in this.output))
          return this.checkPhase("filesystem");
        this.status === 404 && (this.status = void 0);
      } else
        return this.checkPhase("none");
    return r.continue ? "next" : "done";
  }
  async checkPhase(t) {
    if (this.checkPhaseCounter++ >= 50)
      return console.error(`Routing encountered an infinite loop while checking ${this.url.pathname}`), this.status = 500, "error";
    this.middlewareInvoked = [];
    let s = true;
    for (let n of this.routes[t]) {
      let r = await this.checkRoute(t, n);
      if (r === "error")
        return "error";
      if (r === "done") {
        s = false;
        break;
      }
    }
    if (t === "hit" || S(this.path) || this.headers.normal.has("location") || !!this.body)
      return "done";
    if (t === "none")
      for (let n of this.locales) {
        let r = new RegExp(`/${n}(/.*)`), o = this.path.match(r)?.[1];
        if (o && o in this.output) {
          this.path = o;
          break;
        }
      }
    let a = this.path in this.output;
    if (!a && this.path.endsWith("/")) {
      let n = this.path.replace(/\/$/, "");
      a = n in this.output, a && (this.path = n);
    }
    if (t === "miss" && !a) {
      let n = !this.status || this.status < 400;
      this.status = n ? 404 : this.status;
    }
    let i = "miss";
    return a || t === "miss" || t === "error" ? i = "hit" : s && (i = K(t)), this.checkPhase(i);
  }
  async run(t = "none") {
    this.checkPhaseCounter = 0;
    let s = await this.checkPhase(t);
    return this.headers.normal.has("location") && (!this.status || this.status < 300 || this.status >= 400) && (this.status = 307), s;
  }
};
async function Y(e, t, s, a) {
  let i = new k(t.routes, s, e, a, t.wildcard), n = await ee(i);
  return Pe(e, n, s);
}
async function ee(e, t = "none", s = false) {
  return await e.run(t) === "error" || !s && e.status && e.status >= 400 ? ee(e, "error", true) : { path: e.path, status: e.status, headers: e.headers, searchParams: e.searchParams, body: e.body };
}
async function Pe(e, { path: t = "/404", status: s, headers: a, searchParams: i, body: n }, r) {
  let c = a.normal.get("location");
  if (c) {
    if (c !== a.middlewareLocation) {
      let h = [...i.keys()].length ? `?${i.toString()}` : "";
      a.normal.set("location", `${c ?? "/"}${h}`);
    }
    return new Response(null, { status: s, headers: a.normal });
  }
  let o;
  if (n !== void 0)
    o = new Response(n, { status: s });
  else if (S(t)) {
    let h = new URL(t);
    x(h.searchParams, i), o = await fetch(h, e.request);
  } else
    o = await P(r[t], e, { path: t, status: s, headers: a, searchParams: i });
  let p = a.normal;
  return y(p, o.headers), y(p, a.important), o = new Response(o.body, { ...o, status: s || o.status, headers: p }), o;
}
var ia = { async fetch(e, t, s) {
  J();
  let a = await __ALSes_PROMISE__;
  if (!a) {
    let r = new URL(e.url), c = await t.ASSETS.fetch(`${r.protocol}//${r.host}/cdn-cgi/errors/no-nodejs_compat.html`), o = c.ok ? c.body : "Error: Could not access built-in Node.js modules. Please make sure that your Cloudflare Pages project has the 'nodejs_compat' compatibility flag set.";
    return new Response(o, { status: 503 });
  }
  let { envAsyncLocalStorage: i, requestContextAsyncLocalStorage: n } = a;
  return i.run({ ...t, NODE_ENV: "production", SUSPENSE_CACHE_URL: b }, async () => n.run({ env: t, ctx: s, cf: e.cf }, async () => {
    if (new URL(e.url).pathname.startsWith("/_next/image"))
      return q(e, { buildOutput: m, assetsFetcher: t.ASSETS, imagesConfig: f.images });
    let c = $(e);
    return Y({ request: c, ctx: s, assetsFetcher: t.ASSETS }, f, m, g);
  }));
} };
export {
  ia as default
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
//# sourceMappingURL=bundledWorker-0.8399696084108368.mjs.map
