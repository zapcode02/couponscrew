import type { Metadata } from 'next'
import { Suspense } from 'react'
import PepperfryStore from './_components/PepperfryStore'
import { PEPPERFRY_COUPONS } from './_components/pepperfryCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'Pepperfry Coupon Code - Up to 75% OFF + 20% Cashback | Aug 2026',

  // Primary + all secondary keywords + max offer | 148 chars
  description:
    'Get the latest Pepperfry coupon code and discount codes with up to 75% OFF furniture + 20% cashback. Discover verified deals and sales, updated daily. Aug 2026',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/pepperfry-coupon-code',
  },

  openGraph: {
    title: 'Pepperfry Coupon Code - Up to 75% OFF + 20% Cashback | Aug 2026',
    description:
      'Get the latest Pepperfry coupon code and discount codes with up to 75% OFF furniture + 20% cashback. Discover verified deals and sales, updated daily. Aug 2026',
    url: 'https://www.couponscrew.com/stores/pepperfry-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pepperfry Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Pepperfry Coupon Code - Up to 75% OFF + 20% Cashback | Aug 2026',
    description:
      'Get the latest Pepperfry coupon code and discount codes with up to 75% OFF furniture + 20% cashback. Discover verified deals and sales, updated daily. Aug 2026',
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

const pepperfryOffers = PEPPERFRY_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Pepperfry ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/pepperfry-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/pepperfry-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/pepperfry-coupon-code',
      name: 'Pepperfry Coupon Code - Up to 75% OFF + 20% Cashback | Aug 2026',
      description: 'Get the latest Pepperfry coupon code and discount codes with up to 75% OFF furniture + 20% cashback. Discover verified deals and sales, updated daily. Aug 2026',
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
            name: 'Pepperfry Coupon Code',
            item: 'https://www.couponscrew.com/stores/pepperfry-coupon-code',
          },
        ],
      },
    },

    // FAQPage Schema (AEO + AI Search — sourced from this page's own visible FAQ accordion)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/stores/pepperfry-coupon-code#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the best Pepperfry coupon code available right now?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The best active Pepperfry coupon code is listed at the top of this page along with its current success rate and verified date, so you can see at a glance which offer is working best right now rather than guessing. For new users, HELLO1500 gives a flat ₹1,500 off your first order. Sitewide codes offering up to 75% off plus 20% cashback are also regularly available for all users, and tend to apply across furniture, home décor, and kitchenware categories rather than being restricted to a single product type. Codes are checked daily, so the offer showing as "best" today reflects what is actually live rather than a static listing.',
          },
        },
        {
          '@type': 'Question',
          name: "What is Pepperfry's return policy?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pepperfry offers a 45-day return window on furniture — a standard that is notably longer than most competitors in the Indian online furniture market, where 7 to 10 days is typical. This extended window is meant to reduce the risk of buying large furniture items sight-unseen. Home décor and accessories carry a shorter 10-day return window. Products must be returned in original condition to qualify. In serviceable cities, Pepperfry arranges doorstep pickup for returns rather than requiring buyers to arrange their own shipping or logistics. A cancellation fee of up to 2.5% of the paid amount applies at the time refund processing begins, so it is worth factoring that into the decision before requesting a return.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is Studio Pepperfry?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Studio Pepperfry is Pepperfry's network of 50+ offline experience centres spread across 30+ cities in India. It exists to solve the main hesitation shoppers have with buying furniture online — not being able to see, touch, or sit on the piece before committing. At a Studio, you can view furniture in person, check the material quality and finish directly, and get a free interior design consultation from staff on-site. After that, you still place the order online, at the same discounted price and with the same coupon codes available on this page — the in-person visit does not change the price or remove eligibility for active offers.",
          },
        },
        {
          '@type': 'Question',
          name: 'Does Pepperfry offer no-cost EMI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. No-cost EMI is available on orders above ₹5,000 through HDFC Bank, SBI, ICICI Bank, Axis Bank, and Bajaj Finserv, with tenures ranging from 3 to 24 months depending on the card and order value. "No-cost" means Pepperfry absorbs the standard interest charge rather than passing it on, so the total you pay across installments matches the order price rather than including added interest. Some offers do include a processing fee charged by the bank, which is separate from the interest waiver, so it is worth checking the full EMI breakdown shown at checkout — including the exact tenure options available for your card — before choosing this payment method.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Pepperfry cashback work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Cashback earned on Pepperfry is credited to your Pepperfry Wallet as credits rather than paid out directly, and those credits auto-apply at checkout on your next order. Wallet credits can offset up to 15% of the cart value per order, which makes them most useful when combined with a coupon code rather than relied on alone for the full discount. One important detail: credits expire five days from the date they are issued, so they need to be used quickly rather than saved up over time, and they cannot be transferred to another account or converted to cash. Checking your wallet balance before checkout ensures you don't lose credits that are about to expire.",
          },
        },
      ],
    },

    // Offer Schema (one per visible deal card)
    ...pepperfryOffers,
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
        <PepperfryStore />
      </Suspense>
    </>
  )
}
