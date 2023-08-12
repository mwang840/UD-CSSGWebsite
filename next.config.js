/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        defaultLocale: "en-US",
        locales: ["en-US", "fr", "es"],
    },
    experimental: {
        forceSwcTransforms: true,
    },
};

module.exports = nextConfig;
