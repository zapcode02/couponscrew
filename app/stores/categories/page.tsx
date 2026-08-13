import type { Metadata } from 'next';
import ProductCategories from './_components/ProductCategories';

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  // ── Core Meta ──────────────────────────────
  title: 'Coupon Codes by Category – Fashion, Beauty, Fitness & More',
  description:
    'Browse all coupon code categories on CouponsCrew. Find verified discount codes for Fashion, Beauty, Fitness, Home & Kitchen, Clothing & Accessories and top brands — updated daily.',

  keywords: [
    'coupon codes by category',
    'all coupon categories',
    'fashion coupon codes',
    'beauty discount codes',
    'fitness promo codes',
    'home and kitchen coupons',
    'clothing coupon codes',
    'brand coupon codes',
    'store discount codes',
    'verified coupon codes',
    'deals by category',
    'CouponsCrew categories',
  ],

  // ── Canonical ──────────────────────────────
  alternates: {
    canonical: 'https://couponscrew.com/categories',
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Coupon Codes by Category – Fashion, Beauty, Fitness & More',
    description:
      'Browse all coupon code categories on CouponsCrew. Find verified discount codes for Fashion, Beauty, Fitness, Home & Kitchen, Clothing & Accessories and top brands — updated daily.',
    url: 'https://couponscrew.com/categories',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://couponscrew.com/og-images/categories.jpg',
        width: 1200,
        height: 630,
        alt: 'Coupon Codes by Category – CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Coupon Codes by Category – Fashion, Beauty, Fitness & More',
    description:
      'Browse all coupon code categories on CouponsCrew. Find verified discount codes for Fashion, Beauty, Fitness, Home & Kitchen, Clothing & Accessories and top brands — updated daily.',
    site: '@CouponsCrew',
    creator: '@CouponsCrew',
    images: ['https://couponscrew.com/og-images/categories.jpg'],
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
      '@id': 'https://couponscrew.com/categories#webpage',
      url: 'https://couponscrew.com/categories',
      name: 'Coupon Codes by Category – Fashion, Beauty, Fitness & More',
      description:
        'Browse all coupon code categories on CouponsCrew. Find verified discount codes for Fashion, Beauty, Fitness, Home & Kitchen, Clothing & Accessories and top brands — updated daily.',
      inLanguage: 'en-US',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://couponscrew.com/#website',
        url: 'https://couponscrew.com',
        name: 'CouponsCrew',
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://couponscrew.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Categories',
            item: 'https://couponscrew.com/categories',
          },
        ],
      },
    },

    // 2. ItemList Schema (All 5 Category Pages)
    {
      '@type': 'ItemList',
      '@id': 'https://couponscrew.com/categories#itemlist',
      name: 'All Coupon Code Categories on CouponsCrew',
      description:
        'A complete directory of coupon code categories on CouponsCrew including Fashion, Beauty, Exercise & Fitness, Home & Kitchen, and Clothing & Accessories.',
      url: 'https://couponscrew.com/categories',
      numberOfItems: 5,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Fashion Coupon Codes',
          url: 'https://couponscrew.com/fashion',
          description:
            'Verified fashion coupon codes for Myntra, AJIO, Amazon, Meesho, Nykaa Fashion, H&M and Zara.',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Beauty Coupon Codes',
          url: 'https://couponscrew.com/beauty',
          description:
            'Verified beauty and skincare coupon codes for Nykaa, Mamaearth, Dot & Key, The Body Shop, Minimalist and Plum.',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Exercise & Fitness Coupon Codes',
          url: 'https://couponscrew.com/exercise-and-fitness',
          description:
            'Verified fitness coupon codes for Decathlon, Healthkart, MuscleBlaze, Boldfit, Nike and Amazon.',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Home & Kitchen Coupon Codes',
          url: 'https://couponscrew.com/home-and-kitchen',
          description:
            'Verified home and kitchen coupon codes for Amazon, Pepperfry, IKEA, Philips, Prestige and Flipkart.',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Clothing & Accessories Coupon Codes',
          url: 'https://couponscrew.com/clothing-and-accessories',
          description:
            "Verified clothing and accessories coupon codes for Myntra, AJIO, Levi's, Allen Solly, Van Heusen and FabIndia.",
        },
      ],
    },

    // 3. FAQPage Schema (AEO + AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://couponscrew.com/categories#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What coupon code categories are available on CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CouponsCrew covers five main coupon code categories: Fashion, Beauty, Exercise & Fitness, Home & Kitchen, and Clothing & Accessories. Each category lists verified promo codes and discount deals for top brands, updated daily.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I find coupon codes for a specific category on CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Browse the categories page on CouponsCrew and select the category you need — Fashion, Beauty, Fitness, Home & Kitchen, or Clothing & Accessories. Each category page lists all active verified coupon codes for the top brands in that segment.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are coupon codes on CouponsCrew updated daily?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All coupon codes across every category on CouponsCrew are manually verified and updated daily to ensure only active, working promo codes are listed.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which category has the best deals on CouponsCrew today?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'All five categories — Fashion, Beauty, Fitness, Home & Kitchen, and Clothing & Accessories — are updated daily with the latest deals. Fashion and Beauty tend to have the highest frequency of new offers, while Home & Kitchen sees the biggest discounts during seasonal sales.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is CouponsCrew free to use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, CouponsCrew is completely free to use. Simply browse any category, copy the coupon code you need, and apply it at checkout on the brand\'s website to save instantly — no signup required.',
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
      <ProductCategories />
    </>
  );
}