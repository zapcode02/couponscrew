import type { Metadata } from 'next';
import HomeKitchenProductCategory from './_components/HomeKitchenProductCategory';

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  // ── Core Meta ──────────────────────────────
  title: 'Home and Kitchen Deals – Verified Pricing on Home Essentials | CouponsCrew',
  description:
    'Browse verified deal pricing on home and kitchen products — cookware, appliances, furniture, and home décor. Compare prices and save on your next purchase.',

  keywords: [
    'home and kitchen deals',
    'home and kitchen discounts',
    'cookware deals',
    'furniture deals',
    'home décor pricing',
    'verified deal pricing',
    'CouponsCrew home and kitchen',
  ],

  // ── Canonical ──────────────────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/products/categories/home-and-kitchen',
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Home and Kitchen Deals – Verified Pricing on Home Essentials | CouponsCrew',
    description:
      'Browse verified deal pricing on home and kitchen products — cookware, appliances, furniture, and home décor. Compare prices and save on your next purchase.',
    url: 'https://www.couponscrew.com/products/categories/home-and-kitchen',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/home-and-kitchen-products.jpg',
        width: 1200,
        height: 630,
        alt: 'Home and Kitchen Deals – CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Home and Kitchen Deals – Verified Pricing on Home Essentials | CouponsCrew',
    description:
      'Browse verified deal pricing on home and kitchen products — cookware, appliances, furniture, and home décor. Compare prices and save on your next purchase.',
    site: '@CouponsCrew',
    creator: '@CouponsCrew',
    images: ['https://www.couponscrew.com/og-images/home-and-kitchen-products.jpg'],
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
      '@id': 'https://www.couponscrew.com/products/categories/home-and-kitchen#webpage',
      url: 'https://www.couponscrew.com/products/categories/home-and-kitchen',
      name: 'Home and Kitchen Deals – Verified Pricing on Home Essentials | CouponsCrew',
      description:
        'Browse verified deal pricing on home and kitchen products — cookware, appliances, furniture, and home décor. Compare prices and save on your next purchase.',
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
            name: 'Home and Kitchen',
            item: 'https://www.couponscrew.com/products/categories/home-and-kitchen',
          },
        ],
      },
    },

    // 2. FAQPage Schema (AEO + AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/products/categories/home-and-kitchen#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: "Is the pricing on CouponsCrew's home and kitchen deals verified?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — all deal pricing listed on CouponsCrew is checked before it goes live. If a price changes or a deal ends, the listing is updated or removed so you are not looking at outdated information.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often are home and kitchen deals updated?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Deals are reviewed and updated regularly. During major sale events, updates happen more frequently to keep listings accurate.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are there home and kitchen deals for every budget?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Home and kitchen deals cover a wide range of price points across cookware, furniture, home décor, and storage solutions.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need an account to view home and kitchen deals?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No account is needed to browse deals on CouponsCrew. Simply browse the category and click through to view any product.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if I cannot find a specific home and kitchen product?',
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
      <HomeKitchenProductCategory />
    </>
  );
}
