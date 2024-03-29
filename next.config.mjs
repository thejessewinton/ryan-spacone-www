// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ["images.prismic.io", "i.vimeocdn.com"],
  },
  redirects: async () => {
    return [
      {
        source: "/admin",
        destination: "https://ryan-spacone.prismic.io",
        permanent: false,
      },
    ];
  },
};
export default config;
