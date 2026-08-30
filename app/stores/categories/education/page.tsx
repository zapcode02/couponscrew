import type { Metadata } from 'next';
import EducationCategory from './_components/EducationCategory';

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  // ── Core Meta ──────────────────────────────
  title: 'Education Coupon Codes, Discount Code, promo Codes | August 2026 ',
  description:
    'Explore the latest education coupon codes and discounts for August 2026. Save on online courses, certifications, competitive exam preparation, coding bootcamps, language learning, study materials, and professional training from leading education platforms.',

  keywords: [
    'education coupon codes',
    'education discount codes',
    'course promo codes',
    'online course coupons',
    'test series discount codes',
    'exam prep coupon codes',
    'skill certification offers',
    'live classes discount codes',
    'e-learning promo codes',
    'education deals today',
    'education sale offers',
  ],

  // ── Canonical ──────────────────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/categories/education',
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Education Coupon Codes, Discount Code, promo Codes | August 2026 ',
    description:
      'Explore the latest education coupon codes and discounts for August 2026. Save on online courses, certifications, competitive exam preparation, coding bootcamps, language learning, study materials, and professional training from leading education platforms.',
    url: 'https://www.couponscrew.com/stores/categories/education',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/education-coupons.jpg',
        width: 1200,
        height: 630,
        alt: 'Education Coupon Codes – CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Education Coupon Codes, Discount Code, promo Codes | August 2026 ',
    description:
      'Explore the latest education coupon codes and discounts for August 2026. Save on online courses, certifications, competitive exam preparation, coding bootcamps, language learning, study materials, and professional training from leading education platforms.',
    site: '@CouponsCrew',
    creator: '@CouponsCrew',
    images: ['https://www.couponscrew.com/og-images/education-coupons.jpg'],
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
      '@id': 'https://www.couponscrew.com/stores/categories/education#webpage',
      url: 'https://www.couponscrew.com/stores/categories/education',
      name: 'Education Coupon Codes, Discount Code, promo Codes | August 2026 ',
      description:
        'Explore the latest education coupon codes and discounts for August 2026. Save on online courses, certifications, competitive exam preparation, coding bootcamps, language learning, study materials, and professional training from leading education platforms.',
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
            name: 'Education',
            item: 'https://www.couponscrew.com/stores/categories/education',
          },
        ],
      },
    },

    // 2. FAQPage Schema (AEO + AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/stores/categories/education#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Are the education coupon codes on CouponsCrew verified?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Every education discount code listed on CouponsCrew is checked for validity before it goes live. Expired codes are removed or flagged so you are not wasting time trying dead codes at checkout.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I use an education coupon code?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Copy the code from CouponsCrew, visit the learning platform, select your course or plan, and paste the code at checkout in the promo or discount code field.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use multiple coupon codes on one order?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Usually only one coupon code can be applied per order. Check the terms shown with each code, as this can vary by platform.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often are these codes updated?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our team updates education deals regularly. During major sale windows, updates can happen more frequently to keep codes current.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are there codes for new users?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Many platforms offer first-purchase education coupon codes for new accounts. These are often the best discounts available, so check CouponsCrew before signing up.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do these coupon codes work on both courses and test series?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most education coupon codes on CouponsCrew are valid across courses and test series, though some codes may be category-specific. Always check the coupon terms before applying.',
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
      <EducationCategory />
    </>
  );
}
