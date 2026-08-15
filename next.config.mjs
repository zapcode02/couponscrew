// Content-Security-Policy — Report-Only for now (see FIX-ISSUES.md Phase 4).
// Scoped from an actual audit of every external origin loaded by this codebase:
//   scripts: www.googletagmanager.com (GA4 gtag.js), translate.google.com (Google
//            Translate widget), www.google.com + www.gstatic.com (reCAPTCHA v2)
//   frames:  www.google.com (reCAPTCHA widget), translate.google.com (Translate banner)
//   images:  res.cloudinary.com, images.unsplash.com (the only two next/image remotePatterns)
//   connect: www.google-analytics.com (GA4 beacon calls made internally by gtag.js)
// No Vercel Analytics/Speed Insights package is installed, so no vercel.live/
// vitals.vercel-insights.com entries are included.
const cspReportOnly = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' www.googletagmanager.com translate.google.com www.google.com www.gstatic.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: res.cloudinary.com images.unsplash.com www.google.com www.gstatic.com",
  "font-src 'self' data:",
  "frame-src 'self' www.google.com translate.google.com",
  "connect-src 'self' www.google-analytics.com www.googletagmanager.com",
  "object-src 'none'",
  "base-uri 'self'",
].join('; ')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), camera=(), microphone=()',
          },
          {
            key: 'Content-Security-Policy-Report-Only',
            value: cspReportOnly,
          },
        ],
      },
    ]
  },
}

export default nextConfig;
