/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true, // Enable support for the new `app` directory (if necessary)
    },
    trailingSlash: true, // Add trailing slashes to URLs for GitHub Pages
    async generateStaticParams(defaultPathMap) {
        return {
        '/': { page: '/' },
        // Define additional paths as needed
        }
    },
}

module.exports = nextConfig
