/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // This line is essential for static export

  // Optional: If you use next/image, you might need to unoptimize them
  // or use a custom loader that doesn't rely on Cloud Functions.
  // For a simple landing page, unoptimized is often fine.
  images: {
    unoptimized: true,
  },

  // If you have any redirects or rewrites in your next.config.mjs,
  // ensure they can be translated to Firebase Hosting config.
  // Simple ones often work, but complex ones might require Cloud Functions.
  // For a basic landing page, you might not have complex ones anyway.
};

export default nextConfig;
