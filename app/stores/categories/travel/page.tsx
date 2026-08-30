import type { Metadata } from 'next';
import TravelCategory from './_components/TravelCategory';

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  // ── Core Meta ──────────────────────────────
  title: 'Travel Coupons, Discount Codes & Promo Codes | August 2026',
  description:
    'Explore the latest travel coupon codes, discount codes, and promo codes for August 2026. Save on flights, hotels, holiday packages, bus and train bookings, car rentals, travel insurance, airport lounges, eSIMs, and other travel essentials with verified discounts.',

  keywords: [
    'travel coupon codes',
    'travel discount codes',
    'flight booking promo codes',
    'bus ticket coupon codes',
    'cab booking discount codes',
    'bike taxi coupon codes',
    'outstation travel offers',
    'travel deals today',
    'travel booking promo codes',
    'online travel discount codes',
  ],

  // ── Canonical ──────────────────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/categories/travel',
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Travel Coupons, Discount Codes & Promo Codes | August 2026',
    description:
      'Explore the latest travel coupon codes, discount codes, and promo codes for August 2026. Save on flights, hotels, holiday packages, bus and train bookings, car rentals, travel insurance, airport lounges, eSIMs, and other travel essentials with verified discounts.',
    url: 'https://www.couponscrew.com/stores/categories/travel',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/travel-coupons.jpg',
        width: 1200,
        height: 630,
        alt: 'Travel Coupon Codes – CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Travel Coupons, Discount Codes & Promo Codes | August 2026',
    description:
      'Explore the latest travel coupon codes, discount codes, and promo codes for August 2026. Save on flights, hotels, holiday packages, bus and train bookings, car rentals, travel insurance, airport lounges, eSIMs, and other travel essentials with verified discounts.',
    site: '@CouponsCrew',
    creator: '@CouponsCrew',
    images: ['https://www.couponscrew.com/og-images/travel-coupons.jpg'],
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
      '@id': 'https://www.couponscrew.com/stores/categories/travel#webpage',
      url: 'https://www.couponscrew.com/stores/categories/travel',
      name: 'Travel Coupons, Discount Codes & Promo Codes | August 2026',
      description:
        'Explore the latest travel coupon codes, discount codes, and promo codes for August 2026. Save on flights, hotels, holiday packages, bus and train bookings, car rentals, travel insurance, airport lounges, eSIMs, and other travel essentials with verified discounts.',
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
            name: 'Travel',
            item: 'https://www.couponscrew.com/stores/categories/travel',
          },
        ],
      },
    },

    // 2. FAQPage Schema (AEO + AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/stores/categories/travel#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Are the travel coupon codes verified?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Every travel discount code listed on CouponsCrew is checked for validity before it goes live. Expired codes are removed or flagged so you are not wasting time trying dead codes at checkout.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I use a travel coupon code?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Copy the travel coupon code from CouponsCrew, visit the platform website or app, select your booking, and paste the code at checkout in the promo or discount code field to get instant savings.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use multiple coupon codes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most platforms allow only one coupon code per booking. If a travel coupon code does not apply, try removing any other active offer first.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often are these codes updated?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our team updates travel deals regularly, checking codes for validity and adding new ones as they become available.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are there codes for new users?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Many travel platforms offer first-booking discount codes for new accounts. Check CouponsCrew before creating a new account to see what is currently available.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do travel coupon codes work on both website and app bookings?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This depends on the platform. Some travel coupon codes are valid across both website and app bookings, while others are app-exclusive. Always check the terms shown with each code.',
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
      <TravelCategory />
    </>
  );
}
