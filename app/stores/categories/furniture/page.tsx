import type { Metadata } from 'next';
import FurnitureCategory from './_components/FurnitureCategory';

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  // ── Core Meta ──────────────────────────────
  title: 'Furniture Coupons, Discount Codes & Promo Codes | August 2026',
  description:
    'Explore the latest furniture coupon codes, discount codes, and promo codes for August 2026. Save on sofas, beds, mattresses, dining sets, office furniture, home décor, storage solutions, lighting, and more from leading furniture brands and online stores.',

  keywords: [
    'furniture coupon codes',
    'furniture discount codes',
    'home furniture promo codes',
    'sofa coupon codes',
    'bedroom furniture discount codes',
    'office furniture offers',
    'home décor coupons',
    'furniture deals today',
    'furniture sale offers',
  ],

  // ── Canonical ──────────────────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/categories/furniture',
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Furniture Coupons, Discount Codes & Promo Codes | August 2026',
    description:
      'Explore the latest furniture coupon codes, discount codes, and promo codes for August 2026. Save on sofas, beds, mattresses, dining sets, office furniture, home décor, storage solutions, lighting, and more from leading furniture brands and online stores.',
    url: 'https://www.couponscrew.com/stores/categories/furniture',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/furniture-coupons.jpg',
        width: 1200,
        height: 630,
        alt: 'Furniture Coupon Codes – CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Furniture Coupons, Discount Codes & Promo Codes | August 2026',
    description:
      'Explore the latest furniture coupon codes, discount codes, and promo codes for August 2026. Save on sofas, beds, mattresses, dining sets, office furniture, home décor, storage solutions, lighting, and more from leading furniture brands and online stores.',
    site: '@CouponsCrew',
    creator: '@CouponsCrew',
    images: ['https://www.couponscrew.com/og-images/furniture-coupons.jpg'],
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
      '@id': 'https://www.couponscrew.com/stores/categories/furniture#webpage',
      url: 'https://www.couponscrew.com/stores/categories/furniture',
      name: 'Furniture Coupons, Discount Codes & Promo Codes | August 2026',
      description:
        'Explore the latest furniture coupon codes, discount codes, and promo codes for August 2026. Save on sofas, beds, mattresses, dining sets, office furniture, home décor, storage solutions, lighting, and more from leading furniture brands and online stores.',
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
            name: 'Furniture',
            item: 'https://www.couponscrew.com/stores/categories/furniture',
          },
        ],
      },
    },

    // 2. FAQPage Schema (AEO + AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/stores/categories/furniture#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Are the furniture coupon codes verified?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Every furniture discount code listed on CouponsCrew is checked for validity before it goes live. Expired codes are removed or flagged so you are not wasting time trying dead codes at checkout.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I use a furniture coupon code?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Copy the furniture coupon code from CouponsCrew, visit the store, add products to your cart, and paste the code at checkout in the promo or discount code field.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use multiple coupon codes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This depends on the store. Most stores allow only one coupon code per order, though some may allow a discount code to be combined with a separate bank or wallet offer. Always check the terms shown with each code.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often are furniture coupon codes updated?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our team updates furniture deals regularly. During major sale windows, updates can happen more frequently to keep codes current.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are there codes for new users?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Many furniture stores offer first-order discount codes for new accounts. These are often good discounts, so check CouponsCrew before creating a new account.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do furniture coupon codes cover delivery and assembly charges?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It depends on the seller and the specific offer. Some codes apply only to the product price, while others include free or discounted delivery and assembly. Always check the terms shown with each code.',
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
      <FurnitureCategory />
    </>
  );
}
