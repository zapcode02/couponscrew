import type { Metadata } from 'next';
import ToysProductCategory from './_components/ToysProductCategory';

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  // ── Core Meta ──────────────────────────────
  title: 'Toys Deals – Verified Pricing on Toys & Games | CouponsCrew',
  description:
    'Browse verified deal pricing on toys — educational toys, action figures, outdoor toys, and puzzles. Compare prices and save on your next purchase.',

  keywords: [
    'toys deals',
    'toys discounts',
    'educational toys deals',
    'action figures deals',
    'puzzle and games pricing',
    'verified deal pricing',
    'CouponsCrew toys',
  ],

  // ── Canonical ──────────────────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/products/categories/toys',
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Toys Deals – Verified Pricing on Toys & Games | CouponsCrew',
    description:
      'Browse verified deal pricing on toys — educational toys, action figures, outdoor toys, and puzzles. Compare prices and save on your next purchase.',
    url: 'https://www.couponscrew.com/products/categories/toys',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/toys-products.jpg',
        width: 1200,
        height: 630,
        alt: 'Toys Deals – CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Toys Deals – Verified Pricing on Toys & Games | CouponsCrew',
    description:
      'Browse verified deal pricing on toys — educational toys, action figures, outdoor toys, and puzzles. Compare prices and save on your next purchase.',
    site: '@CouponsCrew',
    creator: '@CouponsCrew',
    images: ['https://www.couponscrew.com/og-images/toys-products.jpg'],
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
      '@id': 'https://www.couponscrew.com/products/categories/toys#webpage',
      url: 'https://www.couponscrew.com/products/categories/toys',
      name: 'Toys Deals – Verified Pricing on Toys & Games | CouponsCrew',
      description:
        'Browse verified deal pricing on toys — educational toys, action figures, outdoor toys, and puzzles. Compare prices and save on your next purchase.',
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
            name: 'Toys',
            item: 'https://www.couponscrew.com/products/categories/toys',
          },
        ],
      },
    },

    // 2. FAQPage Schema (AEO + AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/products/categories/toys#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: "Is the pricing on CouponsCrew's toys deals verified?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — all deal pricing listed on CouponsCrew is checked before it goes live. If a price changes or a deal ends, the listing is updated or removed so you are not looking at outdated information.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often are toys deals updated?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Deals are reviewed and updated regularly. During major sale events, updates happen more frequently to keep listings accurate.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are there toys deals for every budget?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Toys deals cover a wide range of price points across educational toys, action figures, outdoor toys, and puzzles.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need an account to view toys deals?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No account is needed to browse deals on CouponsCrew. Simply browse the category and click through to view any product.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if I cannot find a specific toy?',
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
      <ToysProductCategory />
    </>
  );
}
