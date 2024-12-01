import type { NextConfig } from "next";

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnline: true,
  swMinify: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  },
  fallbacks: {
    // Failed page requests fallback to this.
    document: "/offline.html",

  },

});

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = withPWA(nextConfig);
