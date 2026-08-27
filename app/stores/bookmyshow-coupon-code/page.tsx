import type { Metadata } from 'next'
import { Suspense } from 'react'
import BookMyShowStore from './_components/BookMyShowStore'
import { BOOKMYSHOW_COUPONS } from './_components/bookmyshowCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'BookMyShow Coupon Code – Buy 1 Get 1 Free + ₹500 OFF | Aug 2026',

  // Primary + all secondary keywords + max offer
  description:
    'Find the latest BookMyShow coupon code, promo code and movie ticket offers for Aug 2026. Get Buy 1 Get 1 Free movie tickets, up to ₹500 OFF with Rewards and 50% OFF online movies.',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/bookmyshow-coupon-code',
  },

  openGraph: {
    title: 'BookMyShow Coupon Code – Buy 1 Get 1 Free + ₹500 OFF | Aug 2026',
    description:
      'Find the latest BookMyShow coupon code, promo code and movie ticket offers for Aug 2026. Get Buy 1 Get 1 Free movie tickets, up to ₹500 OFF with Rewards and 50% OFF online movies.',
    url: 'https://www.couponscrew.com/stores/bookmyshow-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BookMyShow Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'BookMyShow Coupon Code – Buy 1 Get 1 Free + ₹500 OFF | Aug 2026',
    description:
      'Find the latest BookMyShow coupon code, promo code and movie ticket offers for Aug 2026. Get Buy 1 Get 1 Free movie tickets, up to ₹500 OFF with Rewards and 50% OFF online movies.',
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

const bookmyshowOffers = BOOKMYSHOW_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `BookMyShow ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/bookmyshow-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/bookmyshow-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/bookmyshow-coupon-code',
      name: 'BookMyShow Coupon Code – Buy 1 Get 1 Free + ₹500 OFF | Aug 2026',
      description: 'Find the latest BookMyShow coupon code, promo code and movie ticket offers for Aug 2026. Get Buy 1 Get 1 Free movie tickets, up to ₹500 OFF with Rewards and 50% OFF online movies.',
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
            name: 'BookMyShow Coupon Code',
            item: 'https://www.couponscrew.com/stores/bookmyshow-coupon-code',
          },
        ],
      },
    },

    // FAQPage Schema (AEO + AI Search — sourced from this page's own visible FAQ accordion)
    {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://www.couponscrew.com/stores/bookmyshow-coupon-code#faqpage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I apply a BookMyShow coupon code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Open the BookMyShow app or website, select your movie or event, choose your seats, and proceed to checkout. Enter your BookMyShow coupon code in the "Apply Coupon" field and tap Apply. The discounted price will update in your booking summary before payment.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why is my BookMyShow promo code not working?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Common reasons include: the code has expired, the minimum booking value hasn't been met, the code applies only to specific cinemas or event categories, or the code is for new users only. Check the terms on CouponsCrew for the specific BookMyShow discount code you're using."
      }
    },
    {
      '@type': 'Question',
      name: 'Can I use a BookMyShow coupon code for IPL tickets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some BookMyShow coupon codes apply to sports event bookings including IPL. However, high-demand IPL matches often have restricted offer applicability. Check the terms of the specific BookMyShow offer code before attempting to apply it on BookMyShow IPL tickets.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the BookMyShow promotion code field?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The BookMyShow promotion code field (also labelled "Apply Coupon" or "Have a promo code?") appears at the payment step of the checkout flow. Enter your BookMyShow promotion code here and tap Apply to see the discount reflected in your total.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are there BookMyShow coupon codes for F&B?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Certain BookMyShow offer codes apply specifically to F&B add-ons rather than ticket prices. CouponsCrew lists F&B-specific BookMyShow discount codes alongside movie ticket codes — check the label on each code before applying.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I get discounts on BookMyShow Stream (digital rentals)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. BookMyShow Stream periodically offers discount codes for digital movie rentals and event live streams. These BookMyShow promo codes are separate from cinema ticket codes. Check CouponsCrew for active Stream discount codes.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is BookMyShow Nandan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "BookMyShow Nandan refers to ticket bookings for Nandan Cinema and Cultural Complex in Kolkata — one of the city's most iconic film and cultural venues. BookMyShow lists screenings and events at Nandan alongside commercial multiplex listings."
      }
    },
    {
      '@type': 'Question',
      name: 'How do I book BookMyShow IPL tickets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Search for your IPL team's home matches on BookMyShow during the ticket release window. Select your stand, ticket category, and number of seats. Apply a BookMyShow coupon code or bank card offer at checkout to reduce the total cost. IPL tickets sell out quickly for top matches — book as soon as the window opens."
      }
    },
    {
      '@type': 'Question',
      name: 'Is there a loyalty programme on BookMyShow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. BookMyShow SuperStar is the platform's loyalty programme. Members earn points on every ticket and F&B purchase, receive member-exclusive BookMyShow discount codes, and get early access to high-demand bookings. Points are redeemable on future transactions."
      }
    },
    {
      '@type': 'Question',
      name: 'How do I contact BookMyShow customer support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BookMyShow customer support is available through the Help section on bookmyshow.com and within the BookMyShow app. You can raise a query about a booking, cancellation, or refund through the in-app support flow or via the official website contact page.'
      }
    }
  ]
},

    // Offer Schema (one per visible deal card)
    ...bookmyshowOffers,
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
        <BookMyShowStore />
      </Suspense>
    </>
  )
}
