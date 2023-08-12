/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        defaultLocale: "en-US",
        locales: ["en-US", "fr-FR", "es-ES"],
    },
    experimental: {
        forceSwcTransforms: true,
    },
};

module.exports = nextConfig;
