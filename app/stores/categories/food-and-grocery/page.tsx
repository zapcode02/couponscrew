import type { Metadata } from 'next';
import FoodAndGroceryCategory from './_components/FoodAndGroceryCategory';

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  // ── Core Meta ──────────────────────────────
  title: 'Food & Grocery Coupons, Discount Codes & Promo Codes | August 2026',
  description:
    'Explore the latest food & grocery coupon codes, discount codes, and promo codes for August 2026. Save on food delivery, groceries, fresh fruits, vegetables, beverages, snacks, dairy products, and everyday essentials with verified deals from top brands.',

  keywords: [
    'food coupon codes',
    'grocery coupon codes',
    'food delivery discount codes',
    'grocery discount codes',
    'instant grocery offers',
    'food delivery promo codes',
    'daily essentials coupons',
    'grocery deals today',
    'food delivery deals',
    'restaurant discount codes',
  ],

  // ── Canonical ──────────────────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/categories/food-and-grocery',
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Food & Grocery Coupons, Discount Codes & Promo Codes | August 2026',
    description:
      'Explore the latest food & grocery coupon codes, discount codes, and promo codes for August 2026. Save on food delivery, groceries, fresh fruits, vegetables, beverages, snacks, dairy products, and everyday essentials with verified deals from top brands.',
    url: 'https://www.couponscrew.com/stores/categories/food-and-grocery',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/food-and-grocery-coupons.jpg',
        width: 1200,
        height: 630,
        alt: 'Food & Grocery Coupon Codes – CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Food & Grocery Coupons, Discount Codes & Promo Codes | August 2026',
    description:
      'Explore the latest food & grocery coupon codes, discount codes, and promo codes for August 2026. Save on food delivery, groceries, fresh fruits, vegetables, beverages, snacks, dairy products, and everyday essentials with verified deals from top brands.',
    site: '@CouponsCrew',
    creator: '@CouponsCrew',
    images: ['https://www.couponscrew.com/og-images/food-and-grocery-coupons.jpg'],
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
      '@id': 'https://www.couponscrew.com/stores/categories/food-and-grocery#webpage',
      url: 'https://www.couponscrew.com/stores/categories/food-and-grocery',
      name: 'Food & Grocery Coupons, Discount Codes & Promo Codes | August 2026',
      description:
        'Explore the latest food & grocery coupon codes, discount codes, and promo codes for August 2026. Save on food delivery, groceries, fresh fruits, vegetables, beverages, snacks, dairy products, and everyday essentials with verified deals from top brands.',
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
            name: 'Food & Grocery',
            item: 'https://www.couponscrew.com/stores/categories/food-and-grocery',
          },
        ],
      },
    },

    // 2. FAQPage Schema (AEO + AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/stores/categories/food-and-grocery#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Are the food & grocery coupon codes verified?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Every food and grocery discount code listed on CouponsCrew is checked for validity before it goes live. Expired codes are removed or flagged so you are not wasting time trying dead codes at checkout.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I use a food delivery coupon code?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Copy the code from CouponsCrew, open the food delivery app or website, add items to your cart, and paste the code in the promo or coupon field at checkout to apply the discount.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use multiple coupon codes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Most stores allow only one coupon code per order. If a store allows stacking with a separate cashback or bank offer, that will usually be mentioned in the code's terms.",
          },
        },
        {
          '@type': 'Question',
          name: 'How often are these codes updated?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We check food and grocery coupon codes regularly and update the page as soon as new offers become available or existing ones expire.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are there codes for new users?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Many food and grocery stores offer a first-order coupon code for new accounts. These are often the best discounts available, so check CouponsCrew before placing your first order.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do these coupon codes work on the mobile app as well as the website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Most codes work across both, but some are app-exclusive. Always check the code's terms to see where it is valid before you check out.",
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
      <FoodAndGroceryCategory />
    </>
  );
}
