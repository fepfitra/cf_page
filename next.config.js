const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // reactStrictMode: true,
  images: {
    //apply all domains
    domains: [
      "img.shields.io",
      "github-readme-stats.vercel.app",
      "github-readme-streak-stats.herokuapp.com",
      "github-contributor-stats.vercel.app",
      "visitcount.itsvg.in",
      "randommeme-five.vercel.app"
    ],
    dangerouslyAllowSVG: true,
  },
  // Optionally, add any other Next.js config below
};

module.exports = withMDX(nextConfig);
/** @type {import('next').NextConfig} */

// Here we use the @cloudflare/next-on-pages next-dev module to allow us to use bindings during local development
// (when running the application with `next dev`), for more information see:
// https://github.com/dario-piotrowicz/next-on-pages/blob/8e93067/internal-packages/next-dev/README.md
if (process.env.NODE_ENV === "development") {
  import("@cloudflare/next-on-pages/next-dev").then(({ setupDevBindings }) => {
    setupDevBindings({
      bindings: {
        // Add here the Cloudflare Bindings you want to have available during local development,
        // for more details on Bindings see: https://developers.cloudflare.com/pages/functions/bindings/)
        //
        // KV Example:
        // MY_KV: {
        //   type: 'kv',
        //   id: 'xxx',
        // }
      },
    });
  });
}
