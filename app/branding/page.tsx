import type { Metadata } from 'next'
import Branding from './_components/Branding'

// ─────────────────────────────────────────────
// SEO + Metadata
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // ── Core Meta ──────────────────────────────
  title: 'Brand Identity & Design Assets — CouponsCrew',
  description:
    'Explore the CouponsCrew brand kit — our logo files, color palette, typography, and usage guidelines. Download assets and learn how to represent our brand correctly.',

  keywords: [
    'CouponsCrew brand kit',
    'CouponsCrew logo download',
    'CouponsCrew visual identity',
    'brand guidelines CouponsCrew',
    'CouponsCrew color palette',
    'CouponsCrew typography',
    'CouponsCrew design assets',
    'CouponsCrew press kit',
    'CouponsCrew media kit',
  ],

  // ── Canonical + hreflang ───────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/branding',
    languages: {
      'en-IN': 'https://www.couponscrew.com/branding',
    },
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Brand Identity & Design Assets — CouponsCrew',
    description:
      'Explore the CouponsCrew brand kit — our logo files, color palette, typography, and usage guidelines. Download assets and learn how to represent our brand correctly.',
    url: 'https://www.couponscrew.com/branding',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://res.cloudinary.com/dgy1atvb8/image/upload/v1781457175/couponscrew-logo_v2da9n.png',
        width: 1200,
        height: 630,
        alt: 'Brand Identity & Design Assets — CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Identity & Design Assets — CouponsCrew',
    description:
      'Explore the CouponsCrew brand kit — our logo files, color palette, typography, and usage guidelines. Download assets and learn how to represent our brand correctly.',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://res.cloudinary.com/dgy1atvb8/image/upload/v1781457175/couponscrew-logo_v2da9n.png'],
  },

  // ── Robots ─────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
}

// ─────────────────────────────────────────────
// JSON-LD Schema
// ─────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/branding#webpage',
      name: 'Brand Identity & Design Assets — CouponsCrew',
      url: 'https://www.couponscrew.com/branding',
      description:
        'Explore the CouponsCrew brand kit — our logo files, color palette, typography, and usage guidelines.',
      isPartOf: {
        '@id': 'https://www.couponscrew.com/#website',
      },
      about: {
        '@id': 'https://www.couponscrew.com/#organization',
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.couponscrew.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Branding',
            item: 'https://www.couponscrew.com/branding',
          },
        ],
      },
    },
  ],
}

// ─────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────

export default function BrandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Branding />
    </>
  )
}
