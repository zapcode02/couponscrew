import type { Metadata } from 'next';
import FinanceCategory from './_components/FinanceCategory';

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  // ── Core Meta ──────────────────────────────
  title: 'Finance Coupons, Discount Codes & Promo Codes | August 2026',
  description:
    'Explore the latest finance coupon codes, discount codes, and promo codes for August 2026. Save on credit cards, personal loans, insurance, investments, banking services, UPI payments, wallets, tax filing, and other financial products with verified deals.',
  
  keywords: [
    'finance coupon codes',
    'finance discount codes',
    'personal loan offers',
    'credit card coupon codes',
    'insurance discount codes',
    'investment platform offers',
    'finance promo codes',
    'finance deals today',
    'finance sale offers',
  ],

  // ── Canonical ──────────────────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/categories/finance',
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Finance Coupons, Discount Codes & Promo Codes | August 2026',
    description:
      'Explore the latest finance coupon codes, discount codes, and promo codes for August 2026. Save on credit cards, personal loans, insurance, investments, banking services, UPI payments, wallets, tax filing, and other financial products with verified deals.',
    url: 'https://www.couponscrew.com/stores/categories/finance',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/finance-coupons.jpg',
        width: 1200,
        height: 630,
        alt: 'Finance Coupon Codes – CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Finance Coupons, Discount Codes & Promo Codes | August 2026',
    description:
      'Explore the latest finance coupon codes, discount codes, and promo codes for August 2026. Save on credit cards, personal loans, insurance, investments, banking services, UPI payments, wallets, tax filing, and other financial products with verified deals.',
    site: '@CouponsCrew',
    creator: '@CouponsCrew',
    images: ['https://www.couponscrew.com/og-images/finance-coupons.jpg'],
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
      '@id': 'https://www.couponscrew.com/stores/categories/finance#webpage',
      url: 'https://www.couponscrew.com/stores/categories/finance',
      name: 'Finance Coupons, Discount Codes & Promo Codes | August 2026',
      description:
        'Explore the latest finance coupon codes, discount codes, and promo codes for August 2026. Save on credit cards, personal loans, insurance, investments, banking services, UPI payments, wallets, tax filing, and other financial products with verified deals.',
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
            name: 'Finance',
            item: 'https://www.couponscrew.com/stores/categories/finance',
          },
        ],
      },
    },

    // 2. FAQPage Schema (AEO + AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/stores/categories/finance#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Are the finance coupon codes verified?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Every finance discount code listed on CouponsCrew is checked for validity before it goes live. Expired codes are removed or flagged so you are not wasting time trying dead codes at checkout.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I use a finance coupon code?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Copy the finance coupon code from CouponsCrew, visit the provider, start your application or purchase, and paste the code at checkout in the promo or discount code field.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use multiple coupon codes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This depends on the provider. Most providers allow only one coupon code per application or order. Always check the terms shown with each code.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often are finance coupon codes updated?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our team updates finance deals regularly. During promotional windows, updates can happen more frequently to keep codes current.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are there codes for new users?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Many finance providers offer first-time user discounts or fee waivers for new accounts. These are often good offers, so check CouponsCrew before signing up.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do these coupon codes guarantee approval or a specific rate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. A coupon code may reduce a fee or unlock a limited-time offer, but approval, eligibility, and any rates or terms are always determined by the provider based on their own criteria.',
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
      <FinanceCategory />
    </>
  );
}
