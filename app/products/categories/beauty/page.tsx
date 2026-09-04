import type { Metadata } from 'next';
import BeautyProductCategory from './_components/BeautyProductCategory';

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  // ── Core Meta ──────────────────────────────
  title: 'Beauty and Personal Care Deals – Verified Pricing on Beauty Essentials | CouponsCrew',
  description:
    'Browse verified deal pricing on beauty and personal care products — skincare, haircare, makeup, and fragrances. Compare prices and save on your next purchase.',

  keywords: [
    'beauty and personal care deals',
    'beauty deals',
    'skincare deals',
    'haircare deals',
    'makeup pricing',
    'verified deal pricing',
    'CouponsCrew beauty',
  ],

  // ── Canonical ──────────────────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/products/categories/beauty',
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Beauty and Personal Care Deals – Verified Pricing on Beauty Essentials | CouponsCrew',
    description:
      'Browse verified deal pricing on beauty and personal care products — skincare, haircare, makeup, and fragrances. Compare prices and save on your next purchase.',
    url: 'https://www.couponscrew.com/products/categories/beauty',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/beauty-products.jpg',
        width: 1200,
        height: 630,
        alt: 'Beauty and Personal Care Deals – CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Beauty and Personal Care Deals – Verified Pricing on Beauty Essentials | CouponsCrew',
    description:
      'Browse verified deal pricing on beauty and personal care products — skincare, haircare, makeup, and fragrances. Compare prices and save on your next purchase.',
    site: '@CouponsCrew',
    creator: '@CouponsCrew',
    images: ['https://www.couponscrew.com/og-images/beauty-products.jpg'],
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
};

// ─────────────────────────────────────────────
// JSON-LD Schemas (WebPage + FAQPage)
// ─────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [

    // 1. WebPage Schema
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/products/categories/beauty#webpage',
      url: 'https://www.couponscrew.com/products/categories/beauty',
      name: 'Beauty and Personal Care Deals – Verified Pricing on Beauty Essentials | CouponsCrew',
      description:
        'Browse verified deal pricing on beauty and personal care products — skincare, haircare, makeup, and fragrances. Compare prices and save on your next purchase.',
      inLanguage: 'en-IN',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://www.couponscrew.com/#website',
        url: 'https://www.couponscrew.com',
        name: 'CouponsCrew',
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
            name: 'Products',
            item: 'https://www.couponscrew.com/products',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Product Categories',
            item: 'https://www.couponscrew.com/products/categories',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Beauty and Personal Care',
            item: 'https://www.couponscrew.com/products/categories/beauty',
          },
        ],
      },
    },

    // 2. FAQPage Schema (AEO + AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/products/categories/beauty#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: "Is the pricing on CouponsCrew's beauty and personal care deals verified?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — all deal pricing listed on CouponsCrew is checked before it goes live. If a price changes or a deal ends, the listing is updated or removed so you are not looking at outdated information.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often are beauty and personal care deals updated?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Deals are reviewed and updated regularly. During major sale events, updates happen more frequently to keep listings accurate.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are there beauty and personal care deals for every budget?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Beauty and personal care deals cover a wide range of price points across skincare, haircare, makeup, and fragrances.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need an account to view beauty and personal care deals?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No account is needed to browse deals on CouponsCrew. Simply browse the category and click through to view any product.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if I cannot find a specific beauty product?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'New products are added to this category regularly. Check back soon, or use the search bar to look for something specific.',
          },
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────
// Page Export
// ─────────────────────────────────────────────

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BeautyProductCategory />
    </>
  );
}
