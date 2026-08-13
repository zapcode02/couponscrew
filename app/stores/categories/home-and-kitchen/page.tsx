import type { Metadata } from 'next';
import HomeKitchenCategory from './_components/HomeKitchenCategory';

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  // ── Core Meta ──────────────────────────────
  title: 'Home & Kitchen Coupon Codes – Save on Appliances & Furniture',
  description:
    'Get verified home & kitchen coupon codes & home appliances discount codes for Amazon, Pepperfry, IKEA, Philips, Prestige, Flipkart & more. Kitchen promo codes updated daily.',

  keywords: [
    'home and kitchen coupon codes',
    'home appliances discount codes',
    'kitchen promo codes',
    'Amazon home deals',
    'Pepperfry coupon codes',
    'IKEA discount codes',
    'Philips promo codes',
    'Prestige coupons',
    'Flipkart home offers',
    'furniture coupon codes',
    'kitchen appliance deals today',
    'home decor discount codes',
    'home sale offers',
  ],

  // ── Canonical ──────────────────────────────
  alternates: {
    canonical: 'https://couponscrew.com/home-and-kitchen',
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Home & Kitchen Coupon Codes – Save on Appliances & Furniture',
    description:
      'Get verified home & kitchen coupon codes & home appliances discount codes for Amazon, Pepperfry, IKEA, Philips, Prestige, Flipkart & more. Kitchen promo codes updated daily.',
    url: 'https://couponscrew.com/home-and-kitchen',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://couponscrew.com/og-images/home-kitchen-coupons.jpg',
        width: 1200,
        height: 630,
        alt: 'Home & Kitchen Coupon Codes – CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Home & Kitchen Coupon Codes – Save on Appliances & Furniture',
    description:
      'Get verified home & kitchen coupon codes & home appliances discount codes for Amazon, Pepperfry, IKEA, Philips, Prestige, Flipkart & more. Kitchen promo codes updated daily.',
    site: '@CouponsCrew',
    creator: '@CouponsCrew',
    images: ['https://couponscrew.com/og-images/home-kitchen-coupons.jpg'],
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
      '@id': 'https://couponscrew.com/home-and-kitchen#webpage',
      url: 'https://couponscrew.com/home-and-kitchen',
      name: 'Home & Kitchen Coupon Codes – Save on Appliances & Furniture',
      description:
        'Get verified home & kitchen coupon codes & home appliances discount codes for Amazon, Pepperfry, IKEA, Philips, Prestige, Flipkart & more. Kitchen promo codes updated daily.',
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
            name: 'Home & Kitchen',
            item: 'https://couponscrew.com/home-and-kitchen',
          },
        ],
      },
    },

    // 2. ItemList Schema (Top Home & Kitchen Brands)
    {
      '@type': 'ItemList',
      '@id': 'https://couponscrew.com/home-and-kitchen#itemlist',
      name: 'Top Home & Kitchen Brands with Coupon Codes',
      description:
        'Verified coupon codes and discount offers for top home and kitchen brands including Amazon, Pepperfry, IKEA, Philips, Prestige and Flipkart.',
      url: 'https://couponscrew.com/home-and-kitchen',
      numberOfItems: 6,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Amazon Home & Kitchen Deals',
          url: 'https://couponscrew.com/stores/amazon',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Pepperfry Coupon Codes',
          url: 'https://couponscrew.com/stores/pepperfry',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'IKEA Discount Codes',
          url: 'https://couponscrew.com/stores/ikea',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Philips Promo Codes',
          url: 'https://couponscrew.com/stores/philips',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Prestige Coupon Codes',
          url: 'https://couponscrew.com/stores/prestige',
        },
        {
          '@type': 'ListItem',
          position: 6,
          name: 'Flipkart Home Offers',
          url: 'https://couponscrew.com/stores/flipkart',
        },
      ],
    },

    // 3. FAQPage Schema (AEO + AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://couponscrew.com/home-and-kitchen#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I use a home & kitchen coupon code?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Copy the home & kitchen coupon code from CouponsCrew, visit the brand website (Amazon, Pepperfry, IKEA, etc.), add your appliances or furniture to the cart, and paste the code at checkout in the promo or discount code field to save instantly.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which home & kitchen brands have the best coupon codes today?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Amazon, Pepperfry, IKEA, Philips, Prestige, and Flipkart regularly offer the best home and kitchen coupon codes. CouponsCrew verifies and updates all deals daily so you always get working promo codes.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are the home & kitchen coupon codes on CouponsCrew verified?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All home and kitchen coupon codes on CouponsCrew are manually verified and updated daily to ensure they are active and working at checkout.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use home coupon codes on both appliances and furniture?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, most home & kitchen coupon codes on CouponsCrew work across appliances, cookware, and furniture. Some codes may be category-specific — always check the offer terms before applying at checkout.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much can I save with home & kitchen coupon codes on CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Savings vary by brand and deal. Pepperfry and Amazon frequently offer 20–50% off furniture and appliances, while Flipkart and IKEA run seasonal sales with even higher discounts on home essentials.',
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
      <HomeKitchenCategory />
    </>
  );
}