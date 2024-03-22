// .wrangler/tmp/bundle-fjXPlV/checked-fetch.js
var urls = /* @__PURE__ */ new Set();
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}

// .wrangler/tmp/pages-hLEtVi/bundledWorker-0.19732992779078162.mjs
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
        getOwnPropertyDescriptor: (_2, ...args) => Reflect.getOwnPropertyDescriptor(envAsyncLocalStorage.getStore(), ...args),
        get: (_2, property) => Reflect.get(envAsyncLocalStorage.getStore(), property),
        set: (_2, property, value) => Reflect.set(envAsyncLocalStorage.getStore(), property, value)
      }
    )
  };
  globalThis[Symbol.for("__cloudflare-request-context__")] = new Proxy(
    {},
    {
      ownKeys: () => Reflect.ownKeys(requestContextAsyncLocalStorage.getStore()),
      getOwnPropertyDescriptor: (_2, ...args) => Reflect.getOwnPropertyDescriptor(requestContextAsyncLocalStorage.getStore(), ...args),
      get: (_2, property) => Reflect.get(requestContextAsyncLocalStorage.getStore(), property),
      set: (_2, property, value) => Reflect.set(requestContextAsyncLocalStorage.getStore(), property, value)
    }
  );
  return { envAsyncLocalStorage, requestContextAsyncLocalStorage };
}).catch(() => null);
var te = Object.create;
var H = Object.defineProperty;
var se = Object.getOwnPropertyDescriptor;
var ae = Object.getOwnPropertyNames;
var re = Object.getPrototypeOf;
var ne = Object.prototype.hasOwnProperty;
var k = (e, t) => () => (e && (t = e(e = 0)), t);
var O = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var ie = (e, t, a, s) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let n of ae(t))
      !ne.call(e, n) && n !== a && H(e, n, { get: () => t[n], enumerable: !(s = se(t, n)) || s.enumerable });
  return e;
};
var V = (e, t, a) => (a = e != null ? te(re(e)) : {}, ie(t || !e || !e.__esModule ? H(a, "default", { value: e, enumerable: true }) : a, e));
var g;
var l = k(() => {
  g = { collectedLocales: [] };
});
var f;
var p = k(() => {
  f = { version: 3, routes: { none: [{ src: "^(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))/$", headers: { Location: "/$1" }, status: 308, continue: true }, { src: "^/_next/__private/trace$", dest: "/404", status: 404, continue: true }, { src: "^(?:/(.*))(?:/)?$", headers: { "Content-Security-Policy": "  default-src 'self';  script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app analytics.umami.is;  style-src 'self' 'unsafe-inline';  img-src * blob: data:;  media-src *.s3.amazonaws.com;  connect-src *;  font-src 'self';  frame-src giscus.app", "Referrer-Policy": "strict-origin-when-cross-origin", "X-Frame-Options": "DENY", "X-Content-Type-Options": "nosniff", "X-DNS-Prefetch-Control": "on", "Strict-Transport-Security": "max-age=31536000; includeSubDomains", "Permissions-Policy": "camera=(), microphone=(), geolocation=()" }, continue: true }, { src: "^/404/?$", status: 404, continue: true, missing: [{ type: "header", key: "x-prerender-revalidate" }] }, { src: "^/500$", status: 500, continue: true }, { src: "^/$", has: [{ type: "header", key: "next-router-prefetch" }], dest: "/__index.prefetch.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" }, continue: true, override: true }, { src: "^/((?!.+\\.rsc).+?)(?:/)?$", has: [{ type: "header", key: "next-router-prefetch" }], dest: "/$1.prefetch.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" }, continue: true, override: true }, { src: "^/$", has: [{ type: "header", key: "rsc" }], dest: "/index.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" }, continue: true, override: true }, { src: "^/((?!.+\\.rsc).+?)(?:/)?$", has: [{ type: "header", key: "rsc" }], dest: "/$1.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" }, continue: true, override: true }], filesystem: [{ src: "^/_next/data/(.*)$", dest: "/_next/data/$1", check: true }, { src: "^/\\.prefetch\\.rsc$", dest: "/__index.prefetch.rsc", check: true }, { src: "^/\\.rsc$", dest: "/index.rsc", check: true }, { src: "^/__index.prefetch.rsc$", dest: "/index.rsc", has: [{ type: "header", key: "next-router-prefetch" }], continue: true, override: true }, { src: "^/(.+?).prefetch.rsc(?:/)?$", dest: "/$1.rsc", has: [{ type: "header", key: "next-router-prefetch" }], continue: true, override: true }], miss: [{ src: "^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media)/.+$", status: 404, check: true, dest: "$0" }], rewrite: [{ src: "^/_next/data/(.*)$", dest: "/404", status: 404 }, { src: "^/tags/(?<nxtPtag>[^/]+?)(?:\\.rsc)(?:/)?$", dest: "/tags/[tag].rsc?nxtPtag=$nxtPtag" }, { src: "^/tags/(?<nxtPtag>[^/]+?)(?:/)?$", dest: "/tags/[tag]?nxtPtag=$nxtPtag" }], resource: [{ src: "^/.*$", status: 404 }], hit: [{ src: "^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media|cfO17jKWWKVJI5RPbkO03)/.+$", headers: { "cache-control": "public,max-age=31536000,immutable" }, continue: true, important: true }, { src: "^/index$", headers: { "x-matched-path": "/" }, continue: true, important: true }, { src: "^/((?!index$).*)$", headers: { "x-matched-path": "/$1" }, continue: true, important: true }], error: [{ src: "^/.*$", dest: "/404", status: 404 }, { src: "^/.*$", dest: "/500", status: 500 }] }, images: { domains: [], sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840, 16, 32, 48, 64, 96, 128, 256, 384], remotePatterns: [{ protocol: "https", hostname: "^(?:^(?:picsum\\.photos)$)$", pathname: "^(?:(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/?)$" }], minimumCacheTTL: 60, formats: ["image/webp"], dangerouslyAllowSVG: false, contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;", contentDispositionType: "inline" }, overrides: { "404.html": { path: "404", contentType: "text/html; charset=utf-8" }, "500.html": { path: "500", contentType: "text/html; charset=utf-8" }, "_app.rsc.json": { path: "_app.rsc", contentType: "application/json" }, "_error.rsc.json": { path: "_error.rsc", contentType: "application/json" }, "_document.rsc.json": { path: "_document.rsc", contentType: "application/json" }, "404.rsc.json": { path: "404.rsc", contentType: "application/json" } }, framework: { version: "14.1.0" }, crons: [] };
});
var m;
var h = k(() => {
  m = { "/404.html": { type: "override", path: "/404.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/404.rsc.json": { type: "override", path: "/404.rsc.json", headers: { "content-type": "application/json" } }, "/500.html": { type: "override", path: "/500.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/_app.rsc.json": { type: "override", path: "/_app.rsc.json", headers: { "content-type": "application/json" } }, "/_document.rsc.json": { type: "override", path: "/_document.rsc.json", headers: { "content-type": "application/json" } }, "/_error.rsc.json": { type: "override", path: "/_error.rsc.json", headers: { "content-type": "application/json" } }, "/_next/static/cfO17jKWWKVJI5RPbkO03/_buildManifest.js": { type: "static" }, "/_next/static/cfO17jKWWKVJI5RPbkO03/_ssgManifest.js": { type: "static" }, "/_next/static/chunks/250-e28bbf8fa382c906.js": { type: "static" }, "/_next/static/chunks/449-4286f10c3338afbe.js": { type: "static" }, "/_next/static/chunks/726-dcf483a5b9149d3f.js": { type: "static" }, "/_next/static/chunks/749-f6008d0ebe807dba.js": { type: "static" }, "/_next/static/chunks/852.54616c98b177ffd9.js": { type: "static" }, "/_next/static/chunks/app/about/page-a687e65cc7ea8875.js": { type: "static" }, "/_next/static/chunks/app/layout-63379803bbd27ec6.js": { type: "static" }, "/_next/static/chunks/app/not-found-abf2f0cbdd86e0ec.js": { type: "static" }, "/_next/static/chunks/app/page-8c92b6c5e275a1d9.js": { type: "static" }, "/_next/static/chunks/app/projects/page-49e887136d8e5230.js": { type: "static" }, "/_next/static/chunks/app/tags/[tag]/page-91022962d2957625.js": { type: "static" }, "/_next/static/chunks/app/tags/page-0d724919ff820da2.js": { type: "static" }, "/_next/static/chunks/fd9d1056-9bedce8167cae854.js": { type: "static" }, "/_next/static/chunks/framework-aec844d2ccbe7592.js": { type: "static" }, "/_next/static/chunks/main-app-bbc7f49da6cc853c.js": { type: "static" }, "/_next/static/chunks/main-d02da282917ac073.js": { type: "static" }, "/_next/static/chunks/pages/_app-75f6107b0260711c.js": { type: "static" }, "/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js": { type: "static" }, "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js": { type: "static" }, "/_next/static/chunks/webpack-1b3a5a919eed7d0d.js": { type: "static" }, "/_next/static/css/b8544fc33a7a7845.css": { type: "static" }, "/_next/static/media/2d141e1a38819612-s.p.woff2": { type: "static" }, "/_next/static/media/62328fecf9e80426-s.woff2": { type: "static" }, "/_next/static/media/c7eb187887c48af6-s.woff2": { type: "static" }, "/search.json": { type: "static" }, "/static/favicons/android-chrome-96x96.png": { type: "static" }, "/static/favicons/apple-touch-icon.png": { type: "static" }, "/static/favicons/browserconfig.xml": { type: "static" }, "/static/favicons/favicon-16x16.png": { type: "static" }, "/static/favicons/favicon-32x32.png": { type: "static" }, "/static/favicons/favicon.ico": { type: "static" }, "/static/favicons/mstile-150x150.png": { type: "static" }, "/static/favicons/safari-pinned-tab.svg": { type: "static" }, "/static/favicons/site.webmanifest": { type: "static" }, "/static/images/avatar.png": { type: "static" }, "/static/images/canada/lake.jpg": { type: "static" }, "/static/images/canada/maple.jpg": { type: "static" }, "/static/images/canada/mountains.jpg": { type: "static" }, "/static/images/canada/toronto.jpg": { type: "static" }, "/static/images/github-traffic.png": { type: "static" }, "/static/images/google.png": { type: "static" }, "/static/images/logo.png": { type: "static" }, "/static/images/ocean.jpeg": { type: "static" }, "/static/images/sparrowhawk-avatar.jpg": { type: "static" }, "/static/images/time-machine.jpg": { type: "static" }, "/static/images/twitter-card.png": { type: "static" }, "/api/newsletter": { type: "function", entrypoint: "__next-on-pages-dist__/functions/api/newsletter.func.js" }, "/tags/[tag]": { type: "function", entrypoint: "__next-on-pages-dist__/functions/tags/[tag].func.js" }, "/tags/[tag].rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/tags/[tag].func.js" }, "/404": { type: "override", path: "/404.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/500": { type: "override", path: "/500.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/_app.rsc": { type: "override", path: "/_app.rsc.json", headers: { "content-type": "application/json" } }, "/_error.rsc": { type: "override", path: "/_error.rsc.json", headers: { "content-type": "application/json" } }, "/_document.rsc": { type: "override", path: "/_document.rsc.json", headers: { "content-type": "application/json" } }, "/404.rsc": { type: "override", path: "/404.rsc.json", headers: { "content-type": "application/json" } }, "/about.html": { type: "override", path: "/about.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/about/layout,_N_T_/about/page,_N_T_/about", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/about": { type: "override", path: "/about.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/about/layout,_N_T_/about/page,_N_T_/about", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/about.rsc": { type: "override", path: "/about.rsc", headers: { "content-type": "text/x-component", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/index.html": { type: "override", path: "/index.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/index": { type: "override", path: "/index.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/": { type: "override", path: "/index.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/index.rsc": { type: "override", path: "/index.rsc", headers: { "content-type": "text/x-component", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/projects.html": { type: "override", path: "/projects.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/projects/layout,_N_T_/projects/page,_N_T_/projects", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/projects": { type: "override", path: "/projects.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/projects/layout,_N_T_/projects/page,_N_T_/projects", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/projects.rsc": { type: "override", path: "/projects.rsc", headers: { "content-type": "text/x-component", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/robots.txt": { type: "override", path: "/robots.txt", headers: { "cache-control": "public, max-age=0, must-revalidate", "content-type": "text/plain", "x-next-cache-tags": "_N_T_/layout,_N_T_/robots.txt/layout,_N_T_/robots.txt/route,_N_T_/robots.txt", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/sitemap.xml": { type: "override", path: "/sitemap.xml", headers: { "cache-control": "public, max-age=0, must-revalidate", "content-type": "application/xml", "x-next-cache-tags": "_N_T_/layout,_N_T_/sitemap.xml/layout,_N_T_/sitemap.xml/route,_N_T_/sitemap.xml", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/tags.html": { type: "override", path: "/tags.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/tags/layout,_N_T_/tags/page,_N_T_/tags", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/tags": { type: "override", path: "/tags.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/tags/layout,_N_T_/tags/page,_N_T_/tags", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } }, "/tags.rsc": { type: "override", path: "/tags.rsc", headers: { "content-type": "text/x-component", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Url" } } };
});
var $ = O((Fe, F) => {
  "use strict";
  l();
  p();
  h();
  function R(e, t) {
    e = String(e || "").trim();
    let a = e, s, n = "";
    if (/^[^a-zA-Z\\\s]/.test(e)) {
      s = e[0];
      let o = e.lastIndexOf(s);
      n += e.substring(o + 1), e = e.substring(1, o);
    }
    let r = 0;
    return e = ue(e, (o) => {
      if (/^\(\?[P<']/.test(o)) {
        let c = /^\(\?P?[<']([^>']+)[>']/.exec(o);
        if (!c)
          throw new Error(`Failed to extract named captures from ${JSON.stringify(o)}`);
        let u = o.substring(c[0].length, o.length - 1);
        return t && (t[r] = c[1]), r++, `(${u})`;
      }
      return o.substring(0, 3) === "(?:" || r++, o;
    }), e = e.replace(/\[:([^:]+):\]/g, (o, c) => R.characterClasses[c] || o), new R.PCRE(e, n, a, n, s);
  }
  function ue(e, t) {
    let a = 0, s = 0, n = false;
    for (let i = 0; i < e.length; i++) {
      let r = e[i];
      if (n) {
        n = false;
        continue;
      }
      switch (r) {
        case "(":
          s === 0 && (a = i), s++;
          break;
        case ")":
          if (s > 0 && (s--, s === 0)) {
            let o = i + 1, c = a === 0 ? "" : e.substring(0, a), u = e.substring(o), d = String(t(e.substring(a, o)));
            e = c + d + u, i = a;
          }
          break;
        case "\\":
          n = true;
          break;
        default:
          break;
      }
    }
    return e;
  }
  (function(e) {
    class t extends RegExp {
      constructor(s, n, i, r, o) {
        super(s, n), this.pcrePattern = i, this.pcreFlags = r, this.delimiter = o;
      }
    }
    e.PCRE = t, e.characterClasses = { alnum: "[A-Za-z0-9]", word: "[A-Za-z0-9_]", alpha: "[A-Za-z]", blank: "[ \\t]", cntrl: "[\\x00-\\x1F\\x7F]", digit: "\\d", graph: "[\\x21-\\x7E]", lower: "[a-z]", print: "[\\x20-\\x7E]", punct: "[\\]\\[!\"#$%&'()*+,./:;<=>?@\\\\^_`{|}~-]", space: "\\s", upper: "[A-Z]", xdigit: "[A-Fa-f0-9]" };
  })(R || (R = {}));
  R.prototype = R.PCRE.prototype;
  F.exports = R;
});
var X = O((A) => {
  "use strict";
  l();
  p();
  h();
  A.parse = Re;
  A.serialize = we;
  var _e = Object.prototype.toString, C = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  function Re(e, t) {
    if (typeof e != "string")
      throw new TypeError("argument str must be a string");
    for (var a = {}, s = t || {}, n = s.decode || ve, i = 0; i < e.length; ) {
      var r = e.indexOf("=", i);
      if (r === -1)
        break;
      var o = e.indexOf(";", i);
      if (o === -1)
        o = e.length;
      else if (o < r) {
        i = e.lastIndexOf(";", r - 1) + 1;
        continue;
      }
      var c = e.slice(i, r).trim();
      if (a[c] === void 0) {
        var u = e.slice(r + 1, o).trim();
        u.charCodeAt(0) === 34 && (u = u.slice(1, -1)), a[c] = Pe(u, n);
      }
      i = o + 1;
    }
    return a;
  }
  function we(e, t, a) {
    var s = a || {}, n = s.encode || Se;
    if (typeof n != "function")
      throw new TypeError("option encode is invalid");
    if (!C.test(e))
      throw new TypeError("argument name is invalid");
    var i = n(t);
    if (i && !C.test(i))
      throw new TypeError("argument val is invalid");
    var r = e + "=" + i;
    if (s.maxAge != null) {
      var o = s.maxAge - 0;
      if (isNaN(o) || !isFinite(o))
        throw new TypeError("option maxAge is invalid");
      r += "; Max-Age=" + Math.floor(o);
    }
    if (s.domain) {
      if (!C.test(s.domain))
        throw new TypeError("option domain is invalid");
      r += "; Domain=" + s.domain;
    }
    if (s.path) {
      if (!C.test(s.path))
        throw new TypeError("option path is invalid");
      r += "; Path=" + s.path;
    }
    if (s.expires) {
      var c = s.expires;
      if (!be(c) || isNaN(c.valueOf()))
        throw new TypeError("option expires is invalid");
      r += "; Expires=" + c.toUTCString();
    }
    if (s.httpOnly && (r += "; HttpOnly"), s.secure && (r += "; Secure"), s.priority) {
      var u = typeof s.priority == "string" ? s.priority.toLowerCase() : s.priority;
      switch (u) {
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
    if (s.sameSite) {
      var d = typeof s.sameSite == "string" ? s.sameSite.toLowerCase() : s.sameSite;
      switch (d) {
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
  function ve(e) {
    return e.indexOf("%") !== -1 ? decodeURIComponent(e) : e;
  }
  function Se(e) {
    return encodeURIComponent(e);
  }
  function be(e) {
    return _e.call(e) === "[object Date]" || e instanceof Date;
  }
  function Pe(e, t) {
    try {
      return t(e);
    } catch {
      return e;
    }
  }
});
l();
p();
h();
l();
p();
h();
l();
p();
h();
var w = "INTERNAL_SUSPENSE_CACHE_HOSTNAME.local";
l();
p();
h();
l();
p();
h();
l();
p();
h();
l();
p();
h();
var q = V($());
function P(e, t, a) {
  if (t == null)
    return { match: null, captureGroupKeys: [] };
  let s = a ? "" : "i", n = [];
  return { match: (0, q.default)(`%${e}%${s}`, n).exec(t), captureGroupKeys: n };
}
function v(e, t, a, { namedOnly: s } = {}) {
  return e.replace(/\$([a-zA-Z0-9_]+)/g, (n, i) => {
    let r = a.indexOf(i);
    return s && r === -1 ? n : (r === -1 ? t[parseInt(i, 10)] : t[r + 1]) || "";
  });
}
function M(e, { url: t, cookies: a, headers: s, routeDest: n }) {
  switch (e.type) {
    case "host":
      return { valid: t.hostname === e.value };
    case "header":
      return e.value !== void 0 ? E(e.value, s.get(e.key), n) : { valid: s.has(e.key) };
    case "cookie": {
      let i = a[e.key];
      return i && e.value !== void 0 ? E(e.value, i, n) : { valid: i !== void 0 };
    }
    case "query":
      return e.value !== void 0 ? E(e.value, t.searchParams.get(e.key), n) : { valid: t.searchParams.has(e.key) };
  }
}
function E(e, t, a) {
  let { match: s, captureGroupKeys: n } = P(e, t);
  return a && s && n.length ? { valid: !!s, newRouteDest: v(a, s, n, { namedOnly: true }) } : { valid: !!s };
}
l();
p();
h();
function D(e) {
  let t = new Headers(e.headers);
  return e.cf && (t.set("x-vercel-ip-city", e.cf.city), t.set("x-vercel-ip-country", e.cf.country), t.set("x-vercel-ip-country-region", e.cf.region), t.set("x-vercel-ip-latitude", e.cf.latitude), t.set("x-vercel-ip-longitude", e.cf.longitude)), t.set("x-vercel-sc-host", w), new Request(e, { headers: t });
}
l();
p();
h();
function x(e, t, a) {
  let s = t instanceof Headers ? t.entries() : Object.entries(t);
  for (let [n, i] of s) {
    let r = n.toLowerCase(), o = a?.match ? v(i, a.match, a.captureGroupKeys) : i;
    r === "set-cookie" ? e.append(r, o) : e.set(r, o);
  }
}
function S(e) {
  return /^https?:\/\//.test(e);
}
function _(e, t) {
  for (let [a, s] of t.entries()) {
    let n = /^nxtP(.+)$/.exec(a), i = /^nxtI(.+)$/.exec(a);
    n?.[1] ? (e.set(a, s), e.set(n[1], s)) : i?.[1] ? e.set(i[1], s.replace(/(\(\.+\))+/, "")) : (!e.has(a) || !!s && !e.getAll(a).includes(s)) && e.append(a, s);
  }
}
function j(e, t) {
  let a = new URL(t, e.url);
  return _(a.searchParams, new URL(e.url).searchParams), a.pathname = a.pathname.replace(/\/index.html$/, "/").replace(/\.html$/, ""), new Request(a, e);
}
function b(e) {
  return new Response(e.body, e);
}
function U(e) {
  return e.split(",").map((t) => {
    let [a, s] = t.split(";"), n = parseFloat((s ?? "q=1").replace(/q *= */gi, ""));
    return [a.trim(), isNaN(n) ? 1 : n];
  }).sort((t, a) => a[1] - t[1]).map(([t]) => t === "*" || t === "" ? [] : t).flat();
}
l();
p();
h();
function L(e) {
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
async function N(e, { request: t, assetsFetcher: a, ctx: s }, { path: n, searchParams: i }) {
  let r, o = new URL(t.url);
  _(o.searchParams, i);
  let c = new Request(o, t);
  try {
    switch (e?.type) {
      case "function":
      case "middleware": {
        let u = await import(e.entrypoint);
        try {
          r = await u.default(c, s);
        } catch (d) {
          let y = d;
          throw y.name === "TypeError" && y.message.endsWith("default is not a function") ? new Error(`An error occurred while evaluating the target edge function (${e.entrypoint})`) : d;
        }
        break;
      }
      case "override": {
        r = b(await a.fetch(j(c, e.path ?? n))), e.headers && x(r.headers, e.headers);
        break;
      }
      case "static": {
        r = await a.fetch(j(c, n));
        break;
      }
      default:
        r = new Response("Not Found", { status: 404 });
    }
  } catch (u) {
    return console.error(u), new Response("Internal Server Error", { status: 500 });
  }
  return b(r);
}
function B(e, t) {
  let a = "^//?(?:", s = ")/(.*)$";
  return !e.startsWith(a) || !e.endsWith(s) ? false : e.slice(a.length, -s.length).split("|").every((i) => t.has(i));
}
l();
p();
h();
function le(e, { protocol: t, hostname: a, port: s, pathname: n }) {
  return !(t && e.protocol.replace(/:$/, "") !== t || !new RegExp(a).test(e.hostname) || s && !new RegExp(s).test(e.port) || n && !new RegExp(n).test(e.pathname));
}
function pe(e, t) {
  if (e.method !== "GET")
    return;
  let { origin: a, searchParams: s } = new URL(e.url), n = s.get("url"), i = Number.parseInt(s.get("w") ?? "", 10), r = Number.parseInt(s.get("q") ?? "75", 10);
  if (!n || Number.isNaN(i) || Number.isNaN(r) || !t?.sizes?.includes(i) || r < 0 || r > 100)
    return;
  let o = new URL(n, a);
  if (o.pathname.endsWith(".svg") && !t?.dangerouslyAllowSVG)
    return;
  let c = n.startsWith("/") || n.startsWith("%2F");
  if (!c && !t?.domains?.includes(o.hostname) && !t?.remotePatterns?.find((y) => le(o, y)))
    return;
  let u = e.headers.get("Accept") ?? "", d = t?.formats?.find((y) => u.includes(y))?.replace("image/", "");
  return { isRelative: c, imageUrl: o, options: { width: i, quality: r, format: d } };
}
function he(e, t, a) {
  let s = new Headers();
  if (a?.contentSecurityPolicy && s.set("Content-Security-Policy", a.contentSecurityPolicy), a?.contentDispositionType) {
    let i = t.pathname.split("/").pop(), r = i ? `${a.contentDispositionType}; filename="${i}"` : a.contentDispositionType;
    s.set("Content-Disposition", r);
  }
  e.headers.has("Cache-Control") || s.set("Cache-Control", `public, max-age=${a?.minimumCacheTTL ?? 60}`);
  let n = b(e);
  return x(n.headers, s), n;
}
async function K(e, { buildOutput: t, assetsFetcher: a, imagesConfig: s }) {
  let n = pe(e, s);
  if (!n)
    return new Response("Invalid image resizing request", { status: 400 });
  let { isRelative: i, imageUrl: r } = n, o = new Request(r, { headers: e.headers }), c = i && r.pathname in t ? await a.fetch(o) : await fetch(o);
  return he(c, r, s);
}
l();
p();
h();
l();
p();
h();
var de = "x-vercel-cache-tags";
var fe = "x-next-cache-soft-tags";
async function G(e) {
  let t = `https://${w}/v1/suspense-cache/`;
  if (!e.url.startsWith(t))
    return null;
  try {
    let a = new URL(e.url), s = await me();
    if (a.pathname === "/v1/suspense-cache/revalidate") {
      let i = a.searchParams.get("tags")?.split(",") ?? [];
      for (let r of i)
        await s.revalidateTag(r);
      return new Response(null, { status: 200 });
    }
    let n = a.pathname.replace("/v1/suspense-cache/", "");
    if (!n.length)
      return new Response("Invalid cache key", { status: 400 });
    switch (e.method) {
      case "GET": {
        let i = z(e, fe), r = await s.get(n, { softTags: i });
        return r ? new Response(JSON.stringify(r.value), { status: 200, headers: { "Content-Type": "application/json", "x-vercel-cache-state": "fresh", age: `${(Date.now() - (r.lastModified ?? Date.now())) / 1e3}` } }) : new Response(null, { status: 404 });
      }
      case "POST": {
        let i = await e.json();
        return i.data.tags === void 0 && (i.tags ??= z(e, de) ?? []), await s.set(n, i), new Response(null, { status: 200 });
      }
      default:
        return new Response(null, { status: 405 });
    }
  } catch (a) {
    return console.error(a), new Response("Error handling cache request", { status: 500 });
  }
}
async function me() {
  return process.env.__NEXT_ON_PAGES__KV_SUSPENSE_CACHE ? W("kv") : W("cache-api");
}
async function W(e) {
  let t = await import(`./__next-on-pages-dist__/cache/${e}.js`);
  return new t.default();
}
function z(e, t) {
  return e.headers.get(t)?.split(",")?.filter(Boolean);
}
function Z() {
  globalThis.fetch[J] || (ge(), globalThis.fetch[J] = true);
}
function ge() {
  let e = globalThis.fetch;
  globalThis.fetch = async (...t) => {
    let a = new Request(...t), s = await ye(a);
    return s || (s = await G(a), s) ? s : (xe(a), e(a));
  };
}
async function ye(e) {
  if (e.url.startsWith("blob:"))
    try {
      let a = (await import(`./__next-on-pages-dist__/assets/${new URL(e.url).pathname}.bin`)).default, s = { async arrayBuffer() {
        return a;
      }, get body() {
        return new ReadableStream({ start(n) {
          let i = Buffer.from(a);
          n.enqueue(i), n.close();
        } });
      }, async text() {
        return Buffer.from(a).toString();
      }, async json() {
        let n = Buffer.from(a);
        return JSON.stringify(n.toString());
      }, async blob() {
        return new Blob(a);
      } };
      return s.clone = () => ({ ...s }), s;
    } catch {
    }
  return null;
}
function xe(e) {
  e.headers.has("user-agent") || e.headers.set("user-agent", "Next.js Middleware");
}
var J = Symbol.for("next-on-pages fetch patch");
l();
p();
h();
var Q = V(X());
var T = class {
  constructor(t, a, s, n, i) {
    this.routes = t;
    this.output = a;
    this.reqCtx = s;
    this.url = new URL(s.request.url), this.cookies = (0, Q.parse)(s.request.headers.get("cookie") || ""), this.path = this.url.pathname || "/", this.headers = { normal: new Headers(), important: new Headers() }, this.searchParams = new URLSearchParams(), _(this.searchParams, this.url.searchParams), this.checkPhaseCounter = 0, this.middlewareInvoked = [], this.wildcardMatch = i?.find((r) => r.domain === this.url.hostname), this.locales = new Set(n.collectedLocales);
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
  checkRouteMatch(t, { checkStatus: a, checkIntercept: s }) {
    let n = P(t.src, this.path, t.caseSensitive);
    if (!n.match || t.methods && !t.methods.map((r) => r.toUpperCase()).includes(this.reqCtx.request.method.toUpperCase()))
      return;
    let i = { url: this.url, cookies: this.cookies, headers: this.reqCtx.request.headers, routeDest: t.dest };
    if (!t.has?.find((r) => {
      let o = M(r, i);
      return o.newRouteDest && (i.routeDest = o.newRouteDest), !o.valid;
    }) && !t.missing?.find((r) => M(r, i).valid) && !(a && t.status !== this.status)) {
      if (s && t.dest) {
        let r = /\/(\(\.+\))+/, o = r.test(t.dest), c = r.test(this.path);
        if (o && !c)
          return;
      }
      return { routeMatch: n, routeDest: i.routeDest };
    }
  }
  processMiddlewareResp(t) {
    let a = "x-middleware-override-headers", s = t.headers.get(a);
    if (s) {
      let c = new Set(s.split(",").map((u) => u.trim()));
      for (let u of c.keys()) {
        let d = `x-middleware-request-${u}`, y = t.headers.get(d);
        this.reqCtx.request.headers.get(u) !== y && (y ? this.reqCtx.request.headers.set(u, y) : this.reqCtx.request.headers.delete(u)), t.headers.delete(d);
      }
      t.headers.delete(a);
    }
    let n = "x-middleware-rewrite", i = t.headers.get(n);
    if (i) {
      let c = new URL(i, this.url), u = this.url.hostname !== c.hostname;
      this.path = u ? `${c}` : c.pathname, _(this.searchParams, c.searchParams), t.headers.delete(n);
    }
    let r = "x-middleware-next";
    t.headers.get(r) ? t.headers.delete(r) : !i && !t.headers.has("location") && (this.body = t.body, this.status = t.status), x(this.headers.normal, t.headers), this.headers.middlewareLocation = t.headers.get("location");
  }
  async runRouteMiddleware(t) {
    if (!t)
      return true;
    let a = t && this.output[t];
    if (!a || a.type !== "middleware")
      return this.status = 500, false;
    let s = await N(a, this.reqCtx, { path: this.path, searchParams: this.searchParams, headers: this.headers, status: this.status });
    return this.middlewareInvoked.push(t), s.status === 500 ? (this.status = s.status, false) : (this.processMiddlewareResp(s), true);
  }
  applyRouteOverrides(t) {
    !t.override || (this.status = void 0, this.headers.normal = new Headers(), this.headers.important = new Headers());
  }
  applyRouteHeaders(t, a, s) {
    !t.headers || (x(this.headers.normal, t.headers, { match: a, captureGroupKeys: s }), t.important && x(this.headers.important, t.headers, { match: a, captureGroupKeys: s }));
  }
  applyRouteStatus(t) {
    !t.status || (this.status = t.status);
  }
  applyRouteDest(t, a, s) {
    if (!t.dest)
      return this.path;
    let n = this.path, i = t.dest;
    this.wildcardMatch && /\$wildcard/.test(i) && (i = i.replace(/\$wildcard/g, this.wildcardMatch.value)), this.path = v(i, a, s);
    let r = /\/index\.rsc$/i.test(this.path), o = /^\/(?:index)?$/i.test(n), c = /^\/__index\.prefetch\.rsc$/i.test(n);
    r && !o && !c && (this.path = n);
    let u = /\.rsc$/i.test(this.path), d = /\.prefetch\.rsc$/i.test(this.path), y = this.path in this.output;
    u && !d && !y && (this.path = this.path.replace(/\.rsc/i, ""));
    let I = new URL(this.path, this.url);
    return _(this.searchParams, I.searchParams), S(this.path) || (this.path = I.pathname), n;
  }
  applyLocaleRedirects(t) {
    if (!t.locale?.redirect || !/^\^(.)*$/.test(t.src) && t.src !== this.path || this.headers.normal.has("location"))
      return;
    let { locale: { redirect: s, cookie: n } } = t, i = n && this.cookies[n], r = U(i ?? ""), o = U(this.reqCtx.request.headers.get("accept-language") ?? ""), d = [...r, ...o].map((y) => s[y]).filter(Boolean)[0];
    if (d) {
      !this.path.startsWith(d) && (this.headers.normal.set("location", d), this.status = 307);
      return;
    }
  }
  getLocaleFriendlyRoute(t, a) {
    return !this.locales || a !== "miss" ? t : B(t.src, this.locales) ? { ...t, src: t.src.replace(/\/\(\.\*\)\$$/, "(?:/(.*))?$") } : t;
  }
  async checkRoute(t, a) {
    let s = this.getLocaleFriendlyRoute(a, t), { routeMatch: n, routeDest: i } = this.checkRouteMatch(s, { checkStatus: t === "error", checkIntercept: t === "rewrite" }) ?? {}, r = { ...s, dest: i };
    if (!n?.match || r.middlewarePath && this.middlewareInvoked.includes(r.middlewarePath))
      return "skip";
    let { match: o, captureGroupKeys: c } = n;
    if (this.applyRouteOverrides(r), this.applyLocaleRedirects(r), !await this.runRouteMiddleware(r.middlewarePath))
      return "error";
    if (this.body !== void 0 || this.headers.middlewareLocation)
      return "done";
    this.applyRouteHeaders(r, o, c), this.applyRouteStatus(r);
    let d = this.applyRouteDest(r, o, c);
    if (r.check && !S(this.path))
      if (d === this.path) {
        if (t !== "miss")
          return this.checkPhase(L(t));
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
    let a = true;
    for (let i of this.routes[t]) {
      let r = await this.checkRoute(t, i);
      if (r === "error")
        return "error";
      if (r === "done") {
        a = false;
        break;
      }
    }
    if (t === "hit" || S(this.path) || this.headers.normal.has("location") || !!this.body)
      return "done";
    if (t === "none")
      for (let i of this.locales) {
        let r = new RegExp(`/${i}(/.*)`), c = this.path.match(r)?.[1];
        if (c && c in this.output) {
          this.path = c;
          break;
        }
      }
    let s = this.path in this.output;
    if (!s && this.path.endsWith("/")) {
      let i = this.path.replace(/\/$/, "");
      s = i in this.output, s && (this.path = i);
    }
    if (t === "miss" && !s) {
      let i = !this.status || this.status < 400;
      this.status = i ? 404 : this.status;
    }
    let n = "miss";
    return s || t === "miss" || t === "error" ? n = "hit" : a && (n = L(t)), this.checkPhase(n);
  }
  async run(t = "none") {
    this.checkPhaseCounter = 0;
    let a = await this.checkPhase(t);
    return this.headers.normal.has("location") && (!this.status || this.status < 300 || this.status >= 400) && (this.status = 307), a;
  }
};
async function Y(e, t, a, s) {
  let n = new T(t.routes, a, e, s, t.wildcard), i = await ee(n);
  return Ne(e, i, a);
}
async function ee(e, t = "none", a = false) {
  return await e.run(t) === "error" || !a && e.status && e.status >= 400 ? ee(e, "error", true) : { path: e.path, status: e.status, headers: e.headers, searchParams: e.searchParams, body: e.body };
}
async function Ne(e, { path: t = "/404", status: a, headers: s, searchParams: n, body: i }, r) {
  let o = s.normal.get("location");
  if (o) {
    if (o !== s.middlewareLocation) {
      let d = [...n.keys()].length ? `?${n.toString()}` : "";
      s.normal.set("location", `${o ?? "/"}${d}`);
    }
    return new Response(null, { status: a, headers: s.normal });
  }
  let c;
  if (i !== void 0)
    c = new Response(i, { status: a });
  else if (S(t)) {
    let d = new URL(t);
    _(d.searchParams, n), c = await fetch(d, e.request);
  } else
    c = await N(r[t], e, { path: t, status: a, headers: s, searchParams: n });
  let u = s.normal;
  return x(u, c.headers), x(u, s.important), c = new Response(c.body, { ...c, status: a || c.status, headers: u }), c;
}
var ns = { async fetch(e, t, a) {
  Z();
  let s = await __ALSes_PROMISE__;
  if (!s) {
    let r = new URL(e.url), o = await t.ASSETS.fetch(`${r.protocol}//${r.host}/cdn-cgi/errors/no-nodejs_compat.html`), c = o.ok ? o.body : "Error: Could not access built-in Node.js modules. Please make sure that your Cloudflare Pages project has the 'nodejs_compat' compatibility flag set.";
    return new Response(c, { status: 503 });
  }
  let { envAsyncLocalStorage: n, requestContextAsyncLocalStorage: i } = s;
  return n.run({ ...t, NODE_ENV: "production", SUSPENSE_CACHE_URL: w }, async () => i.run({ env: t, ctx: a, cf: e.cf }, async () => {
    if (new URL(e.url).pathname.startsWith("/_next/image"))
      return K(e, { buildOutput: m, assetsFetcher: t.ASSETS, imagesConfig: f.images });
    let o = D(e);
    return Y({ request: o, ctx: a, assetsFetcher: t.ASSETS }, f, m, g);
  }));
} };

// node_modules/wrangler/templates/pages-dev-util.ts
function isRoutingRuleMatch(pathname, routingRule) {
  if (!pathname) {
    throw new Error("Pathname is undefined.");
  }
  if (!routingRule) {
    throw new Error("Routing rule is undefined.");
  }
  const ruleRegExp = transformRoutingRuleToRegExp(routingRule);
  return pathname.match(ruleRegExp) !== null;
}
function transformRoutingRuleToRegExp(rule) {
  let transformedRule;
  if (rule === "/" || rule === "/*") {
    transformedRule = rule;
  } else if (rule.endsWith("/*")) {
    transformedRule = `${rule.substring(0, rule.length - 2)}(/*)?`;
  } else if (rule.endsWith("/")) {
    transformedRule = `${rule.substring(0, rule.length - 1)}(/)?`;
  } else if (rule.endsWith("*")) {
    transformedRule = rule;
  } else {
    transformedRule = `${rule}(/)?`;
  }
  transformedRule = `^${transformedRule.replaceAll(/\./g, "\\.").replaceAll(/\*/g, ".*")}$`;
  return new RegExp(transformedRule);
}

// .wrangler/tmp/pages-hLEtVi/b56y41mfhj6.js
var define_ROUTES_default = { version: 1, description: "Built with @cloudflare/next-on-pages@1.10.0.", include: ["/*"], exclude: ["/_next/static/*"] };
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        if (ns.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return ns.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;
var wrap = void 0;

// .wrangler/tmp/bundle-fjXPlV/middleware-insertion-facade.js
var envWrappers = [wrap].filter(Boolean);
var facade = {
  ...pages_dev_pipeline_default,
  envWrappers,
  middleware: [
    middleware_miniflare3_json_error_default,
    ...pages_dev_pipeline_default.middleware ? pages_dev_pipeline_default.middleware : []
  ].filter(Boolean)
};
var middleware_insertion_facade_default = facade;

// .wrangler/tmp/bundle-fjXPlV/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
var __facade_modules_fetch__ = function(request, env, ctx) {
  if (middleware_insertion_facade_default.fetch === void 0)
    throw new Error("Handler does not export a fetch() function.");
  return middleware_insertion_facade_default.fetch(request, env, ctx);
};
function getMaskedEnv(rawEnv) {
  let env = rawEnv;
  if (middleware_insertion_facade_default.envWrappers && middleware_insertion_facade_default.envWrappers.length > 0) {
    for (const wrapFn of middleware_insertion_facade_default.envWrappers) {
      env = wrapFn(env);
    }
  }
  return env;
}
var registeredMiddleware = false;
var facade2 = {
  ...middleware_insertion_facade_default.tail && {
    tail: maskHandlerEnv(middleware_insertion_facade_default.tail)
  },
  ...middleware_insertion_facade_default.trace && {
    trace: maskHandlerEnv(middleware_insertion_facade_default.trace)
  },
  ...middleware_insertion_facade_default.scheduled && {
    scheduled: maskHandlerEnv(middleware_insertion_facade_default.scheduled)
  },
  ...middleware_insertion_facade_default.queue && {
    queue: maskHandlerEnv(middleware_insertion_facade_default.queue)
  },
  ...middleware_insertion_facade_default.test && {
    test: maskHandlerEnv(middleware_insertion_facade_default.test)
  },
  ...middleware_insertion_facade_default.email && {
    email: maskHandlerEnv(middleware_insertion_facade_default.email)
  },
  fetch(request, rawEnv, ctx) {
    const env = getMaskedEnv(rawEnv);
    if (middleware_insertion_facade_default.middleware && middleware_insertion_facade_default.middleware.length > 0) {
      if (!registeredMiddleware) {
        registeredMiddleware = true;
        for (const middleware of middleware_insertion_facade_default.middleware) {
          __facade_register__(middleware);
        }
      }
      const __facade_modules_dispatch__ = function(type, init) {
        if (type === "scheduled" && middleware_insertion_facade_default.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return middleware_insertion_facade_default.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(
        request,
        env,
        ctx,
        __facade_modules_dispatch__,
        __facade_modules_fetch__
      );
    } else {
      return __facade_modules_fetch__(request, env, ctx);
    }
  }
};
function maskHandlerEnv(handler) {
  return (data, env, ctx) => handler(data, getMaskedEnv(env), ctx);
}
var middleware_loader_entry_default = facade2;
export {
  middleware_loader_entry_default as default
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
//# sourceMappingURL=b56y41mfhj6.js.map
