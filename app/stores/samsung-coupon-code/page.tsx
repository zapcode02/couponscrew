import type { Metadata } from 'next'
import { Suspense } from 'react'
import SamsungStore from './_components/SamsungStore'
import { SAMSUNG_COUPONS } from './_components/samsungCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'Samsung Coupon Code – Save Up to 41% + ₹30,000 OFF | Sept 2026',

  // Primary + all secondary keywords + max offer | 148 chars
  description:
    'Get the latest Samsung Coupon Code and Samsung Discount Code to save up to 41% on the Galaxy S23 5G and ₹30,000 on the Galaxy S25 Ultra. Discover verified Samsung deals on smartphones, TVs, appliances, and more. Shop now.',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/samsung-coupon-code',
  },

  openGraph: {
    title: 'Samsung Coupon Code – Save Up to 41% + ₹30,000 OFF | Sept 2026',
    description:
      'Get the latest Samsung Coupon Code and Samsung Discount Code to save up to 41% on the Galaxy S23 5G and ₹30,000 on the Galaxy S25 Ultra. Discover verified Samsung deals on smartphones, TVs, appliances, and more. Shop now.',
    url: 'https://www.couponscrew.com/stores/samsung-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Samsung Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Samsung Coupon Code – Save Up to 41% + ₹30,000 OFF | Sept 2026',
    description:
      'Get the latest Samsung Coupon Code and Samsung Discount Code to save up to 41% on the Galaxy S23 5G and ₹30,000 on the Galaxy S25 Ultra. Discover verified Samsung deals on smartphones, TVs, appliances, and more. Shop now.',
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
      'max-image-preview': 'large',
      'max-snippet': -1,
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

const samsungOffers = SAMSUNG_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Samsung ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/samsung-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/samsung-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/samsung-coupon-code',
      name: 'Samsung Coupon Code – Save Up to 41% + ₹30,000 OFF | Sept 2026',
      description: 'Get the latest Samsung Coupon Code and Samsung Discount Code to save up to 41% on the Galaxy S23 5G and ₹30,000 on the Galaxy S25 Ultra. Discover verified Samsung deals on smartphones, TVs, appliances, and more. Shop now.',
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
            name: 'Samsung Coupon Code',
            item: 'https://www.couponscrew.com/stores/samsung-coupon-code',
          },
        ],
      },
    },

    // Organization Schema (Brand entity for Samsung)
    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/samsung-coupon-code#brand',
      name: 'Samsung',
      url: 'https://www.samsung.com/in',
      sameAs: ['https://en.wikipedia.org/wiki/Samsung_Electronics'],
    },

    // FAQPage Schema (AEO + AI Search — mirrors this page's own visible FAQ accordion, full parity)
    {
  "@type": "FAQPage",
  "@id": "https://www.couponscrew.com/stores/samsung-coupon-code#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best Samsung coupon code available right now?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best active Samsung coupon code is listed at the top of this page along with its verified date, so you can see which offer is working best right now. Galaxy S-series exchange bonuses and no-cost EMI on Bespoke appliances are typically the highest-value offers, while new users get a flat discount on their first Samsung Shop order. Codes are checked daily, so the listing reflects what is actually live rather than a static page."
      }
    },
    {
      "@type": "Question",
      "name": "Does Samsung offer no-cost EMI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. No-cost EMI is available on most Galaxy smartphones, tablets, and Bespoke home appliances through partner banks including HDFC, ICICI, and SBI Card, with tenures ranging from 3 to 12 months depending on the product and card. \"No-cost\" means Samsung absorbs the standard interest charge rather than passing it on, so the total across installments matches the listed price. Some banks charge a small processing fee separate from the interest waiver, so check the EMI breakdown at checkout before choosing this option."
      }
    },
    {
      "@type": "Question",
      "name": "How does the Samsung exchange offer work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Samsung's exchange programme lets you trade in an old smartphone, tablet, or select appliance for an instant valuation-based discount on a new purchase. The final exchange value depends on the device's brand, model, and condition, assessed at the time of order. During Galaxy Unpacked launch windows, Samsung frequently adds an extra flat exchange bonus of ₹2,000–₹15,000 on top of the standard trade-in value, which is where a CouponsCrew-listed offer adds the most value."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a student discount on Samsung products?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Samsung runs a dedicated Education Store offering verified students a discount — commonly up to 20% — primarily on Galaxy Book laptops and select tablets. Verification is typically done through a student ID or college email address at checkout. This discount can often be combined with an active exchange offer for additional savings."
      }
    },
    {
      "@type": "Question",
      "name": "What is Samsung's return and replacement policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Samsung offers a standard 7 to 10 day replacement window on the official Samsung Shop for manufacturing defects or damage on arrival, subject to the product remaining in original condition with all accessories and packaging. Extended warranty and screen protection plans are available separately through Samsung Care+ at the time of purchase, which cover accidental damage beyond the standard warranty period."
      }
    },
    {
      "@type": "Question",
      "name": "When does Samsung hold its biggest sales?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Samsung runs its biggest promotional windows around Galaxy Unpacked launch events (S-series in January/February, Z Fold and Z Flip in July/August), plus festive sale periods around Republic Day, Independence Day, and the October–November festive season. Clearance discounts on previous-generation devices are usually deepest right after a new Unpacked launch."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a Samsung coupon code with a bank card offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Apply your CouponsCrew Samsung offer at checkout, then pay with an eligible HDFC or ICICI Bank card to unlock an additional instant discount — typically around 10%. This stacks on top of any exchange bonus or sitewide discount, giving you multiple layers of savings on the same order via Samsung's official Shop app or website."
      }
    },
    {
      "@type": "Question",
      "name": "Are Samsung Shop app deals different from the website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Occasionally, yes. The Samsung Shop mobile app sometimes carries app-exclusive flash deals or early access to new launches a few hours before the website. Samsung Members app users also get loyalty rewards points on purchases, redeemable against future orders — so it is worth checking both channels before completing a purchase."
      }
    }
  ]
},

    // ItemList Schema — groups all coupon Offers into one connected list
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/samsung-coupon-code#offerlist',
      name: 'Samsung Coupon Codes & Offers',
      numberOfItems: samsungOffers.length,
      itemListElement: samsungOffers.map((offer, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: offer,
      })),
    },

    // Offer Schema (one per visible deal card)
    ...samsungOffers,
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
        <SamsungStore />
      </Suspense>
    </>
  )
}
