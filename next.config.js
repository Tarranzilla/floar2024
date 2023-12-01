/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const prod = process.env.NODE_ENV === "production";

const usePWA = false;
const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    disable: prod ? false : true,
    skipWaiting: true,
});

module.exports = usePWA ? withPWA({
    ...nextConfig,
    // next.js config
}) : nextConfig;