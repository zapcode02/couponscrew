import type { Metadata } from 'next';
import ElectronicsCategory from './_components/ElectronicsCategory';

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  // ── Core Meta ──────────────────────────────
  title: 'Electronics Coupons & Offers: Save Up to 80% OFF | August 2026',
  description:
    'Explore the latest electronics coupon codes and offers for August 2026. Save on smartphones, laptops, TVs, audio devices, gaming accessories, smartwatches, cameras, home appliances, and more with verified discounts from leading brands and retailers.',

  keywords: [
    'electronics coupon codes',
    'electronics discount codes',
    'gadget promo codes',
    'smartphone coupon codes',
    'laptop discount codes',
    'audio and wearables offers',
    'electronics accessories coupons',
    'electronics deals today',
    'electronics sale offers',
  ],

  // ── Canonical ──────────────────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/categories/electronics',
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Electronics Coupons & Offers: Save Up to 80% OFF | August 2026',
    description:
      'Explore the latest electronics coupon codes and offers for August 2026. Save on smartphones, laptops, TVs, audio devices, gaming accessories, smartwatches, cameras, home appliances, and more with verified discounts from leading brands and retailers.',
    url: 'https://www.couponscrew.com/stores/categories/electronics',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/electronics-coupons.jpg',
        width: 1200,
        height: 630,
        alt: 'Electronics Coupon Codes – CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Electronics Coupons & Offers: Save Up to 80% OFF | August 2026',
    description:
      'Explore the latest electronics coupon codes and offers for August 2026. Save on smartphones, laptops, TVs, audio devices, gaming accessories, smartwatches, cameras, home appliances, and more with verified discounts from leading brands and retailers.',
    site: '@CouponsCrew',
    creator: '@CouponsCrew',
    images: ['https://www.couponscrew.com/og-images/electronics-coupons.jpg'],
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
      '@id': 'https://www.couponscrew.com/stores/categories/electronics#webpage',
      url: 'https://www.couponscrew.com/stores/categories/electronics',
      name: 'Electronics Coupons & Offers: Save Up to 80% OFF | August 2026',
      description:
        'Explore the latest electronics coupon codes and offers for August 2026. Save on smartphones, laptops, TVs, audio devices, gaming accessories, smartwatches, cameras, home appliances, and more with verified discounts from leading brands and retailers.',
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
            name: 'Electronics',
            item: 'https://www.couponscrew.com/stores/categories/electronics',
          },
        ],
      },
    },

    // 2. FAQPage Schema (AEO + AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/stores/categories/electronics#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Are the electronics coupon codes verified?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Every electronics discount code listed on CouponsCrew is checked for validity before it goes live. Expired codes are removed or flagged so you are not wasting time trying dead codes at checkout.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I use an electronics coupon code?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Copy the electronics coupon code from CouponsCrew, visit the store, add products to your cart, and paste the code at checkout in the promo or discount code field.',
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
          name: 'How often are electronics coupon codes updated?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our team updates electronics deals regularly. During major sale windows, updates can happen more frequently to keep codes current.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are there codes for new users?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Many electronics stores offer first-order discount codes for new accounts. These are often good discounts, so check CouponsCrew before creating a new account.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do these coupon codes work on both app and website orders?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It varies by store. Some electronics coupon codes are app-exclusive, while others work on both the website and the app. The terms shown with each code will indicate where it applies.',
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
      <ElectronicsCategory />
    </>
  );
}
