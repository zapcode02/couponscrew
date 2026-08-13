import type { Metadata } from 'next';
import ClothingAccessoriesCategory from './_components/ClothingAccessoriesCategory';

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  // ── Core Meta ──────────────────────────────
  title: 'Clothing Coupon Codes – Save on Branded Wear & Accessories',
  description:
    'Find verified clothing coupon codes & clothing discount codes for Myntra, AJIO, Levi\'s, Allen Solly, Van Heusen, FabIndia & more. Accessories promo codes updated daily.',

  keywords: [
    'clothing coupon codes',
    'clothing discount codes',
    'accessories promo codes',
    'Myntra clothing coupons',
    'AJIO discount codes',
    "Levi's promo codes",
    'Allen Solly coupon codes',
    'Van Heusen discount codes',
    'FabIndia coupons',
    'branded wear discount codes',
    'accessories deals today',
    'clothing sale offers',
    'apparel coupon codes',
  ],

  // ── Canonical ──────────────────────────────
  alternates: {
    canonical: 'https://couponscrew.com/clothing-and-accessories',
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Clothing Coupon Codes – Save on Branded Wear & Accessories',
    description:
      'Find verified clothing coupon codes & clothing discount codes for Myntra, AJIO, Levi\'s, Allen Solly, Van Heusen, FabIndia & more. Accessories promo codes updated daily.',
    url: 'https://couponscrew.com/clothing-and-accessories',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://couponscrew.com/og-images/clothing-accessories-coupons.jpg',
        width: 1200,
        height: 630,
        alt: 'Clothing & Accessories Coupon Codes – CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Clothing Coupon Codes – Save on Branded Wear & Accessories',
    description:
      'Find verified clothing coupon codes & clothing discount codes for Myntra, AJIO, Levi\'s, Allen Solly, Van Heusen, FabIndia & more. Accessories promo codes updated daily.',
    site: '@CouponsCrew',
    creator: '@CouponsCrew',
    images: ['https://couponscrew.com/og-images/clothing-accessories-coupons.jpg'],
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
      '@id': 'https://couponscrew.com/clothing-and-accessories#webpage',
      url: 'https://couponscrew.com/clothing-and-accessories',
      name: 'Clothing Coupon Codes – Save on Branded Wear & Accessories',
      description:
        "Find verified clothing coupon codes & clothing discount codes for Myntra, AJIO, Levi's, Allen Solly, Van Heusen, FabIndia & more. Accessories promo codes updated daily.",
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
            name: 'Clothing & Accessories',
            item: 'https://couponscrew.com/clothing-and-accessories',
          },
        ],
      },
    },

    // 2. ItemList Schema (Top Clothing & Accessories Brands)
    {
      '@type': 'ItemList',
      '@id': 'https://couponscrew.com/clothing-and-accessories#itemlist',
      name: 'Top Clothing & Accessories Brands with Coupon Codes',
      description:
        "Verified coupon codes and discount offers for top clothing and accessories brands including Myntra, AJIO, Levi's, Allen Solly, Van Heusen and FabIndia.",
      url: 'https://couponscrew.com/clothing-and-accessories',
      numberOfItems: 6,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Myntra Clothing Coupons',
          url: 'https://couponscrew.com/stores/myntra',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'AJIO Discount Codes',
          url: 'https://couponscrew.com/stores/ajio',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: "Levi's Promo Codes",
          url: 'https://couponscrew.com/stores/levis',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Allen Solly Coupon Codes',
          url: 'https://couponscrew.com/stores/allen-solly',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Van Heusen Discount Codes',
          url: 'https://couponscrew.com/stores/van-heusen',
        },
        {
          '@type': 'ListItem',
          position: 6,
          name: 'FabIndia Coupon Codes',
          url: 'https://couponscrew.com/stores/fabindia',
        },
      ],
    },

    // 3. FAQPage Schema (AEO + AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://couponscrew.com/clothing-and-accessories#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I use a clothing coupon code?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Copy the clothing coupon code from CouponsCrew, visit the brand website (Myntra, AJIO, Levi's, etc.), add your clothing or accessories to the cart, and paste the code at checkout in the promo or discount code field to save instantly.",
          },
        },
        {
          '@type': 'Question',
          name: 'Which clothing brands have the best coupon codes today?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Myntra, AJIO, Levi's, Allen Solly, Van Heusen, and FabIndia regularly offer the best clothing and accessories coupon codes. CouponsCrew verifies and updates all deals daily so you always get working promo codes.",
          },
        },
        {
          '@type': 'Question',
          name: 'Are the clothing coupon codes on CouponsCrew verified?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All clothing and accessories coupon codes on CouponsCrew are manually verified and updated daily to ensure they are active and working at checkout.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use clothing coupon codes on accessories too?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, most clothing coupon codes on CouponsCrew are valid across both apparel and accessories like bags, belts, and jewellery. Some codes may be category-specific — always check the offer terms before applying at checkout.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much can I save with clothing coupon codes on CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Savings vary by brand and deal. Myntra and AJIO frequently offer 30–70% off during sales, while brands like Levi's, Allen Solly, and Van Heusen run seasonal and end-of-season sales with strong discounts on branded wear.",
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
      <ClothingAccessoriesCategory />
    </>
  );
}