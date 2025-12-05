/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",          // This creates the static out/ folder
  trailingSlash: true,       // Fixes links on Render/Netlify/Vercel static
  images: {
    unoptimized: true,       // Required for static export (Next Image won’t work otherwise)
  },
};

export default nextConfig;