import type { Metadata } from 'next';
import GiftCategory from './_components/GiftCategory';

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  // ── Core Meta ──────────────────────────────
  title: 'Gift Coupon Codes & Offers – Personalized Gifts, Flowers & Hampers',
  description:
    'Discover the latest gift coupon codes and gift discount offers for IGP, FNP, Amazon, Flipkart & top gifting stores. Save on personalized gifts, flowers, cakes & hampers.',

  keywords: [
    'gift coupon codes',
    'gift discount codes',
    'gifting promo codes',
    'IGP coupon codes',
    'FNP coupon codes',
    'Ferns N Petals promo code',
    'personalized gifts coupons',
    'flower delivery discount codes',
    'cake delivery coupon codes',
    'gift hampers offers',
    'birthday gift coupons',
    'anniversary gift discount codes',
  ],

  // ── Canonical ──────────────────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/categories/gift',
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Gift Coupon Codes & Offers – Personalized Gifts, Flowers & Hampers',
    description:
      'Discover the latest gift coupon codes and gift discount offers for IGP, FNP, Amazon, Flipkart & top gifting stores. Save on personalized gifts, flowers, cakes & hampers.',
    url: 'https://www.couponscrew.com/stores/categories/gift',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://res.cloudinary.com/dqjlffxja/image/upload/v1795438836/gift-category_vuaq5b.webp',
        width: 1200,
        height: 630,
        alt: 'Gift Coupon Codes – CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Gift Coupon Codes & Offers – Personalized Gifts, Flowers & Hampers',
    description:
      'Discover the latest gift coupon codes and gift discount offers for IGP, FNP, Amazon, Flipkart & top gifting stores. Save on personalized gifts, flowers, cakes & hampers.',
    site: '@CouponsCrew',
    creator: '@CouponsCrew',
    images: ['https://res.cloudinary.com/dqjlffxja/image/upload/v1795438836/gift-category_vuaq5b.webp'],
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
// JSON-LD Schemas (WebPage + ItemList + FAQPage)
// ─────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [

    // 1. WebPage Schema
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/categories/gift#webpage',
      url: 'https://www.couponscrew.com/stores/categories/gift',
      name: 'Gift Coupon Codes & Offers – Personalized Gifts, Flowers & Hampers',
      description:
        'Discover the latest gift coupon codes and gift discount offers for IGP, FNP, Amazon, Flipkart & top gifting stores. Save on personalized gifts, flowers, cakes & hampers.',
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
            name: 'Store Categories',
            item: 'https://www.couponscrew.com/stores/categories',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Gift',
            item: 'https://www.couponscrew.com/stores/categories/gift',
          },
        ],
      },
    },

    // 2. FAQPage Schema (AEO + AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/stores/categories/gift#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What are the best gift coupon codes in India right now?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "The best codes depend on what you're buying and from which platform. For flowers and cakes, category-specific codes from India's major delivery platforms give 10–20% off with low minimums. For personalised gifts, 10–15% codes are available year-round through CouponsCrew. For premium gifting, bank card codes from HDFC and ICICI give 15–20% off at checkout. Visit the individual store page on CouponsCrew for the latest verified codes for each gifting platform.",
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use a gift coupon code on same-day delivery orders?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Usually yes — coupon codes on gifting platforms apply regardless of the delivery type selected. The delivery type (same-day, midnight, standard) affects the delivery fee and slot availability, not code eligibility. Some bank card codes have minimum order thresholds that may push you above what a same-day delivery of a small gift costs — check the minimum before applying.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are gift discount codes available during Diwali and other festivals?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes, and festival season is when the deepest codes appear. Major gifting platforms run their most aggressive discounts during Diwali, Raksha Bandhan, Valentine's Day, and Mother's Day. CouponsCrew updates festival gift codes throughout each gifting season — check the category page as the occasion approaches for the most current codes.",
          },
        },
        {
          '@type': 'Question',
          name: 'Do gift promo codes work on international delivery orders?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Most codes listed on gifting platforms are India-only. International delivery orders are typically priced separately and exclude standard coupon codes. If you're sending a gift internationally through an Indian platform, check the specific platform's international code availability — CouponsCrew notes this where relevant.",
          },
        },
        {
          '@type': 'Question',
          name: 'Can I combine a gift coupon code with a bank card offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'On most gifting platforms, a coupon code and a bank card cashback or discount cannot be applied simultaneously — you use one or the other. The exception is platforms where bank cashback is processed separately from the coupon code discount, in which case both apply. Check the terms at checkout before confirming the order to see which combination is available.',
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
      <GiftCategory />
    </>
  );
}
