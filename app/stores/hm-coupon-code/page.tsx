import type { Metadata } from 'next'
import { Suspense } from 'react'
import HandMStore from './_components/HandMStore'
import { HANDM_COUPONS } from './_components/handmCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'H&M Coupon Code: Save Up to 75% OFF + Get Extra 10% OFF | Sept 2026',

  // Primary + all secondary keywords + max offer | ~150 chars
  description:
    'Find the latest H&M coupon code and H&M promo code at Maxiku Offers. Save up to 75% OFF, get an extra 10% OFF for new users, plus flat 50% OFF accessories and 50% OFF kidswear.',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/hm-coupon-code',
  },

  openGraph: {
    title: 'H&M Coupon Code: Save Up to 75% OFF + Get Extra 10% OFF | Sept 2026',
    description:
      'Find the latest H&M coupon code and H&M promo code at Maxiku Offers. Save up to 75% OFF, get an extra 10% OFF for new users, plus flat 50% OFF accessories and 50% OFF kidswear.',
    url: 'https://www.couponscrew.com/stores/hm-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'H&M Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'H&M Coupon Code: Save Up to 75% OFF + Get Extra 10% OFF | Sept 2026',
    description:
      'Find the latest H&M coupon code and H&M promo code at Maxiku Offers. Save up to 75% OFF, get an extra 10% OFF for new users, plus flat 50% OFF accessories and 50% OFF kidswear.',
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

const handmOffers = HANDM_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `H&M ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/hm-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/hm-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/hm-coupon-code',
      name: 'H&M Coupon Code: Save Up to 75% OFF + Get Extra 10% OFF | Sept 2026',
      description: 'Find the latest H&M coupon code and H&M promo code at Maxiku Offers. Save up to 75% OFF, get an extra 10% OFF for new users, plus flat 50% OFF accessories and 50% OFF kidswear.',
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
            name: 'H&M Coupon Code',
            item: 'https://www.couponscrew.com/stores/hm-coupon-code',
          },
        ],
      },
    },

    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/hm-coupon-code#brand',
      name: 'H&M',
      url: 'https://www2.hm.com/en_in/index.html',
      sameAs: ['https://en.wikipedia.org/wiki/H%26M'],
    },

    // FAQPage Schema (AEO + AI Search — sourced from this page's own visible FAQ accordion)
    {
  "@type": "FAQPage",
  "@id": "https://www.couponscrew.com/stores/hm-coupon-code#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an H&M coupon code and how do I apply it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An H&M coupon code is a discount code that reduces your cart total on H&M online India. Add items to your bag, proceed to checkout, and enter the code in the promo code field on the order summary page. Confirm the discount shows in the total before completing payment. Codes are case-sensitive."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my H&M promo code not working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most common reasons are: the code has expired, the items in your cart are sale items (most H&M discount codes exclude already-reduced products), the code is single-use and has already been claimed, or the code is for a specific category and your cart has items outside that category. Check the deal card terms on this page before trying the code."
      }
    },
    {
      "@type": "Question",
      "name": "Does H&M India have free shipping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "H&M India offers free standard delivery on orders above a certain threshold. The threshold varies and is shown at cart level. For orders below it, a flat delivery fee applies. Click & Collect from a store near you is always free."
      }
    },
    {
      "@type": "Question",
      "name": "What is H&M Member and is it free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "H&M Member is H&M's loyalty programme. It's free to join. Members earn points on purchases that convert to money-off vouchers, get early sale access, and receive a birthday discount. Sign up through the H&M app or website — points start accruing from your first order after joining."
      }
    },
    {
      "@type": "Question",
      "name": "Can I return H&M online purchases to a physical store?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Items bought through H&M online India can be returned to any H&M store within the 30-day return window, provided the item is unworn, unwashed, and has original tags. Bring your order confirmation. The store processes the return, and the refund goes back to your original payment method."
      }
    },
    {
      "@type": "Question",
      "name": "Does H&M India sell gift cards?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. H&M gift cards are available H&M online and in-store. They can be used for online and in-store purchases in India. Gift cards are non-returnable and non-refundable once purchased. Watch for gift card promotions — occasional bonus-credit deals make them worth buying ahead of a planned purchase."
      }
    },
    {
      "@type": "Question",
      "name": "Are H&M sale items eligible for coupon codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In most cases, no. H&M coupon codes typically apply to full-price items only. Sale items already have a markdown applied, and the code won't stack on top. Check the specific terms on each deal card — occasional sitewide codes do cover sale items, but these are less common."
      }
    },
    {
      "@type": "Question",
      "name": "What is H&M Move?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "H&M Move is H&M's activewear sub-line — sportswear designed for training, yoga, running, and general movement. It's available on the H&M website alongside the main clothing range. Styles include leggings, sports bras, training tops, and outerwear. H&M coupon codes may or may not apply to Move — check the offer terms."
      }
    },
    {
      "@type": "Question",
      "name": "How long does H&M India delivery take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard delivery to metro cities typically takes three to five business days. Tier-2 and Tier-3 cities may take slightly longer depending on the logistics partner and pin code serviceability. Tracking details are sent to your registered email and phone after dispatch."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use multiple coupon codes on one H&M order?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. H&M's checkout accepts one promo code per order. If you have both an H&M Member voucher and an external H&M offer code, you'll need to choose one. The Member voucher is applied at account level before checkout; the external code goes in the promo field. Plan which gives the higher saving before committing."
      }
    }
  ]
},

    // Offer Schema (one per visible deal card)
    ...handmOffers,
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
        <HandMStore />
      </Suspense>
    </>
  )
}
