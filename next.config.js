//ANALYZE=true npm run build

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/ja",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["images.microcms-assets.io"],
  },
  // i18n: {
  //   locales: ["en", "ja"],
  //   defaultLocale: "ja",
  // },
});

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["images.microcms-assets.io"],
//   },
//   i18n: {
//     locales: ["en", "ja"],
//     defaultLocale: "ja",
//   },
//   pageExtensions: ["ts", "tsx"],
// };

// module.exports = nextConfig;
