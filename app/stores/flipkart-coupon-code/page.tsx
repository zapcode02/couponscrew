import type { Metadata } from 'next'
import { Suspense } from 'react'
import FlipkartStore from './_components/FlipkartStore'
import { FLIPKART_COUPONS } from './_components/flipkartCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  title: 'Flipkart Coupon Codes & Deals – Up to 95% OFF | Aug 2026',

  description:
    "Save more with verified Flipkart coupon codes, voucher codes, and today's best offers. Enjoy up to 95% OFF sitewide, 10% OFF gift cards, Freedom Sale discounts, bank offers, and exclusive deals across mobiles, fashion, electronics, home, beauty, and more.",

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/flipkart-coupon-code',
  },

  openGraph: {
    title: 'Flipkart Coupon Codes & Deals – Up to 95% OFF | Aug 2026',
    description:
      "Save more with verified Flipkart coupon codes, voucher codes, and today's best offers. Enjoy up to 95% OFF sitewide, 10% OFF gift cards, Freedom Sale discounts, bank offers, and exclusive deals across mobiles, fashion, electronics, home, beauty, and more.",
    url: 'https://www.couponscrew.com/stores/flipkart-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Flipkart Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Flipkart Coupon Codes & Deals – Up to 95% OFF | Aug 2026',
    description:
      "Save more with verified Flipkart coupon codes, voucher codes, and today's best offers. Enjoy up to 95% OFF sitewide, 10% OFF gift cards, Freedom Sale discounts, bank offers, and exclusive deals across mobiles, fashion, electronics, home, beauty, and more.",
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-image.jpg'],
  },

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

  other: {
    'geo.region': 'IN',
    'geo.country': 'IN',
    language: 'en-IN',
  },
}

const titleCase = (s: string) =>
  s
    .toLowerCase()
    .split(' ')
    .map((word) => (word === '&' ? word : word.charAt(0).toUpperCase() + word.slice(1)))
    .join(' ')

const flipkartOffers = FLIPKART_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Flipkart ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/flipkart-coupon-code#${coupon.id}`,
  price: '0',
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/flipkart-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/flipkart-coupon-code',
      name: 'Flipkart Coupon Codes & Deals – Up to 95% OFF | Aug 2026',
      description: "Save more with verified Flipkart coupon codes, voucher codes, and today's best offers. Enjoy up to 95% OFF sitewide, 10% OFF gift cards, Freedom Sale discounts, bank offers, and exclusive deals across mobiles, fashion, electronics, home, beauty, and more.",
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://www.couponscrew.com/#website',
        name: 'CouponsCrew',
        url: 'https://www.couponscrew.com',
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
            name: 'Stores',
            item: 'https://www.couponscrew.com/stores',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Flipkart Coupon Code',
            item: 'https://www.couponscrew.com/stores/flipkart-coupon-code',
          },
        ],
      },
    },

    // FAQPage — only the 3 questions with real (non-placeholder) answers.
    // The 4th visible FAQ item ("Where can I find the best Flipkart offers?")
    // has a [PLACEHOLDER] answer and is deliberately excluded from schema
    // until it has real content, so JSON-LD never claims more than the page
    // actually says.
    {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.couponscrew.com/stores/flipkart-coupon-code#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Use the Flipkart App for Lower Prices",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flipkart shopping via the app frequently yields prices 5–10% lower than the same product on the desktop site. For any purchase over ₹1,000, check the app price before completing the order on desktop."
      }
    },
    {
      "@type": "Question",
      "name": "Get the Flipkart Axis Bank Credit Card",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you shop on Flipkart more than 3–4 times a month, the axis bank Flipkart credit card is one of the best cashback cards available — 5% unlimited cashback on Flipkart, no cap, applied as a statement credit. Over a year of regular shopping it can add up to significant savings without requiring any additional effort."
      }
    },
    {
      "@type": "Question",
      "name": "Stack a Coupon with a Bank Offer",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flipkart allows stacking a Flipkart promo code on top of an eligible bank-card discount in many (not all) promotions. The combination of a sale price + a coupon + a bank card offer is where the deepest discounts happen — especially during Big Billion Days and the Diwali sale."
      }
    },
    {
      "@type": "Question",
      "name": "Join Flipkart Plus or Upgrade to Black",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flipkart Plus (free tier, earned via SuperCoins) gives early access to sale events and member-only deals. Flipkart Black (₹1,499/year) adds free delivery on all orders, priority service, and exclusive discounts. If you are a frequent Flipkart shopper, Flipkart Black pays for itself within 2–3 large purchases annually."
      }
    },
    {
      "@type": "Question",
      "name": "Track the Flipkart Upcoming Sale Calendar",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Timing your purchases around Flipkart upcoming sale events is the single most reliable way to save on big-ticket items. Smartphones, televisions, and appliances all see their deepest annual discounts during Big Billion Days and the Diwali sale. Use the sale calendar on this page to plan purchases 2–3 weeks in advance."
      }
    },
    {
      "@type": "Question",
      "name": "Check Flipkart Gift Card Bonus Promotions",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "During certain promotional windows, Flipkart runs bonus-credit offers on gift card purchases — e.g., buy ₹2,000 in gift cards and receive ₹100–200 in extra credits. If you are a regular shopper, purchasing gift cards during these windows is a low-effort way to bank free credits. CouponsCrew lists all active Flipkart gift card free bonus offers on this page."
      }
    },
    {
      "@type": "Question",
      "name": "Enable Price Drop Alerts on Saved Items",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flipkart's wishlist feature sends price-drop notifications when a saved item goes on sale. For high-demand items during Flipkart big billion days or the Flipkart mobile sale, enabling this alert lets you act immediately when the discount hits — before stock sells out."
      }
    },
    {
      "@type": "Question",
      "name": "Watch for the Christmas Sale on Flipkart",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Christmas sale on Flipkart (late December) is often overlooked but delivers strong discounts, particularly on electronics and fashion — essentially a continuation of the year-end clearance window. Combined with a Flipkart voucher code, this is a reliable time to pick up high-value items at reduced prices."
      }
    }
  ]
},
    // Offer Schema (one per placeholder deal card — replace FLIPKART_COUPONS
    // with real data before this page is linked/indexed)
    ...flipkartOffers,
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Suspense fallback={null}>
        <FlipkartStore />
      </Suspense>
    </>
  )
}