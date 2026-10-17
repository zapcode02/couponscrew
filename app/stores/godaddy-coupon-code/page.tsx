import type { Metadata } from 'next'
import { Suspense } from 'react'
import GoDaddyStore from './_components/GoDaddyStore'
import { GODADDY_COUPONS } from './_components/godaddyCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),
  title: 'GoDaddy Coupon Code – 80% OFF Hosting & 50% OFF Email Oct 2026',
  description: 'Save more with the latest GoDaddy Coupon Code and GoDaddy Promo Code. Enjoy 80% OFF Managed WordPress Hosting and 50% OFF Professional Email. Save on domains, hosting, VPS, and business email plans. Shop now.',
  alternates: {
    canonical: 'https://www.couponscrew.com/stores/godaddy-coupon-code',
  },
  openGraph: {
    title: 'GoDaddy Coupon Code – 80% OFF Hosting & 50% OFF Email Oct 2026',
    description: 'Save more with the latest GoDaddy Coupon Code and GoDaddy Promo Code. Enjoy 80% OFF Managed WordPress Hosting and 50% OFF Professional Email. Save on domains, hosting, VPS, and business email plans. Shop now.',
    url: 'https://www.couponscrew.com/stores/godaddy-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: 'https://www.couponscrew.com/og-image.jpg', width: 1200, height: 630, alt: 'GoDaddy Coupon Code — CouponsCrew' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoDaddy Coupon Code – 80% OFF Hosting & 50% OFF Email Oct 2026',
    description: 'Save more with the latest GoDaddy Coupon Code and GoDaddy Promo Code. Enjoy 80% OFF Managed WordPress Hosting and 50% OFF Professional Email. Save on domains, hosting, VPS, and business email plans. Shop now.',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-image.jpg'],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  other: { 'geo.region': 'IN', 'geo.country': 'IN', language: 'en-IN' },
}

const titleCase = (s: string) => s.toLowerCase().split(' ').map((word) => (word === '&' ? word : word.charAt(0).toUpperCase() + word.slice(1))).join(' ')

const godaddyOffers = GODADDY_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `GoDaddy ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/godaddy-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/godaddy-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/godaddy-coupon-code',
      name: 'GoDaddy Coupon Code – 80% OFF Hosting & 50% OFF Email Oct 2026',
      description: 'Save more with the latest GoDaddy Coupon Code and GoDaddy Promo Code. Enjoy 80% OFF Managed WordPress Hosting and 50% OFF Professional Email. Save on domains, hosting, VPS, and business email plans. Shop now.',
      isPartOf: { '@type': 'WebSite', '@id': 'https://www.couponscrew.com/#website', name: 'CouponsCrew', url: 'https://www.couponscrew.com' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.couponscrew.com' },
          { '@type': 'ListItem', position: 2, name: 'Stores', item: 'https://www.couponscrew.com/stores' },
          { '@type': 'ListItem', position: 3, name: 'GoDaddy Coupon Code', item: 'https://www.couprintscrew.com/stores/godaddy-coupon-code' },
        ],
      },
    },
    // Organization Schema (Brand entity for GoDaddy)
    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/godaddy-coupon-code#brand',
      name: 'GoDaddy',
      url: 'https://www.godaddy.com',
      sameAs: ['https://en.wikipedia.org/wiki/GoDaddy'],
    },
    // FAQPage Schema — MUST mirror the component's visible FAQ accordion verbatim, full parity
    {
  "@type": "FAQPage",
  "@id": "https://www.couponscrew.com/stores/godaddy-coupon-code#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I use a GoDaddy promo code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Add your desired products (domains, hosting, or email) to your cart, proceed to checkout, look for the \"Have a promo code?\" link under your order summary, paste your code, and click Apply to claim your discount."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use multiple coupon codes on GoDaddy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, GoDaddy only allows one promo code or coupon per transaction at checkout. However, you can choose the code that gives you the maximum overall savings for your cart."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my GoDaddy promo code not working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your code might not work if it has expired, applies only to specific plans (like annual subscriptions), or if the items in your cart are already on sale or promotional clearance."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find the best GoDaddy offers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We keep this GoDaddy store page updated 24/7 with the best discounts, verified coupon codes, bank offers, and upcoming sale dates."
      }
    },
    {
      "@type": "Question",
      "name": "Does GoDaddy offer a free domain?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, GoDaddy offers a free custom domain name for the first year when you purchase qualifying annual hosting or annual website builder plans."
      }
    },
    {
      "@type": "Question",
      "name": "How often are GoDaddy coupons updated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our deals team verifies and updates coupons every morning. Expired promotions are automatically filtered out, ensuring you only spend time on working codes."
      }
    },
    {
      "@type": "Question",
      "name": "Is the GoDaddy ₹1 domain offer real?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, but it needs a 3-year purchase. On 17 October 2026, a .in domain was ₹1 for the first year and ₹899 for each additional year, so you pay ₹1,799 upfront for three years before taxes and fees. The offer was for new customers."
      }
    },
    {
      "@type": "Question",
      "name": "Do GoDaddy promo codes work on renewals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Usually not. Most GoDaddy offers are for new purchases, and GoDaddy's offer terms say renewals are charged at the then-current price. Check your renewal price in My Products."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a GoDaddy domain transfer take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Under 15 minutes if your current registrar releases the domain manually, otherwise usually 5 to 7 days. You get an extra year added."
      }
    },
    {
      "@type": "Question",
      "name": "What's the cheapest GoDaddy hosting plan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Starter, at ₹89 a month on a 36-month term when we checked. It doesn't include a free domain or email."
      }
    },
    {
      "@type": "Question",
      "name": "How do I log in to GoDaddy webmail?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use email.godaddy.com, or sign in to your GoDaddy account and open your email from My Products."
      }
    },
    {
      "@type": "Question",
      "name": "Is GoDaddy Professional Email the same as Microsoft 365?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Professional Email is powered by Titan and is the lower-cost option; Microsoft 365 email is built around Outlook and Microsoft's apps."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a free GoDaddy website builder?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Airo AI Builder has a free plan with 50 AI credits a month for building and previewing. You need a paid plan to publish a live site."
      }
    }
  ]
},
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/godaddy-coupon-code#offerlist',
      name: 'GoDaddy Coupon Codes & Offers',
      numberOfItems: godaddyOffers.length,
      itemListElement: godaddyOffers.map((offer, index) => ({ '@type': 'ListItem', position: index + 1, item: offer })),
    },
    ...godaddyOffers,
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Suspense fallback={null}>
        <GoDaddyStore />
      </Suspense>
    </>
  )
}