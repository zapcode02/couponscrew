import type { Metadata } from 'next'
import { Suspense } from 'react'
import HostingerStore from './_components/HostingerStore'
import { HOSTINGER_COUPONS } from './_components/hostingerCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'Hostinger Coupon Code - Up to 75% OFF on Web Hosting | Aug 2026',

  // Primary + secondary keywords + offer | ~150 chars
  description:
    'Get the latest Hostinger coupon code and discount codes with up to 75% OFF web hosting, domains & VPS. Discover verified deals, updated regularly. Aug 2026',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/hostinger-coupon-code',
  },

  openGraph: {
    title: 'Hostinger Coupon Code - Up to 75% OFF on Web Hosting | Aug 2026',
    description:
      'Get the latest Hostinger coupon code and discount codes with up to 75% OFF web hosting, domains & VPS. Discover verified deals, updated regularly. Aug 2026',
    url: 'https://www.couponscrew.com/stores/hostinger-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hostinger Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Hostinger Coupon Code - Up to 75% OFF on Web Hosting | Aug 2026',
    description:
      'Get the latest Hostinger coupon code and discount codes with up to 75% OFF web hosting, domains & VPS. Discover verified deals, updated regularly. Aug 2026',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-image.jpg'],
  },

  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
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

const hostingerOffers = HOSTINGER_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Hostinger ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/hostinger-coupon-code#${coupon.id}`,
  priceCurrency: 'USD',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/hostinger-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/hostinger-coupon-code',
      name: 'Hostinger Coupon Code - Up to 75% OFF on Web Hosting | Aug 2026',
      description: 'Get the latest Hostinger coupon code and discount codes with up to 75% OFF web hosting, domains & VPS. Discover verified deals, updated regularly. Aug 2026',
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
            name: 'Hostinger Coupon Code',
            item: 'https://www.couponscrew.com/stores/hostinger-coupon-code',
          },
        ],
      },
    },

    {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.couponscrew.com/stores/hostinger-coupon-code#faqpage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I find a working Hostinger coupon code today?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every Hostinger coupon code on this CouponsCrew page is verified before publishing. Click \"Show Code\" on any active deal card — the code copies to your clipboard. Expired codes are removed daily. If a code does not apply at checkout, check the plan and billing cycle eligibility shown on the deal card and try the next active listing."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a Hostinger discount code on VPS hosting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some Hostinger discount codes apply sitewide — including VPS plans — while others are restricted to shared hosting or WordPress hosting. Check the individual deal card on this CouponsCrew page for plan eligibility before purchasing. During Black Friday and Cyber Monday, VPS-eligible promo codes are more commonly available."
      }
    },
    {
      "@type": "Question",
      "name": "Does Hostinger offer a free domain with hosting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — the hostinger free domain is included for the first year with the Premium and Business shared hosting plans. It covers .com, .net, .org, .in, and several other extensions. The domain renews at standard rates after the first year — the renewal price is shown during the registration process."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Hostinger website builder?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The hostinger website builder is a drag-and-drop site creation tool included with all Hostinger hosting plans at no extra cost. It supports 100+ templates, AI-generated content suggestions, built-in SEO tools, and e-commerce functionality on eligible plans. No coding knowledge is required. It is a strong option for small business owners and individuals who want to launch a professional website quickly."
      }
    },
    {
      "@type": "Question",
      "name": "Is Hostinger good for WordPress hosting in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — Hostinger's WordPress hosting plans are optimised with LiteSpeed web servers, LiteSpeed Cache, and NVMe SSD storage — all of which contribute to fast WordPress page load times at an affordable price. The one-click WordPress installer and auto-update feature reduce ongoing maintenance. A Hostinger promo code from CouponsCrew makes WordPress hosting even more affordable."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between shared hosting and VPS hosting at Hostinger?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Shared hosting means your website shares server resources (CPU, RAM) with other websites on the same server — lower cost, suitable for low-to-moderate traffic sites. VPS hosting gives you dedicated resources that are not shared — better performance, full root access, more control, and higher cost. Hostinger's KVM VPS plans start from ₹599/month on a 2-year cycle, making the upgrade more accessible than most providers."
      }
    },
    {
      "@type": "Question",
      "name": "Does Hostinger offer dedicated server hosting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — dedicated server hosting is available from Hostinger for enterprise-level requirements. Dedicated servers provide a full physical server exclusively for one customer — maximum performance, security, and control. Pricing is significantly higher than shared or VPS plans. A Hostinger voucher code during a sale event can provide meaningful savings on dedicated server plans given the higher absolute price."
      }
    },
    {
      "@type": "Question",
      "name": "What is Hostinger's refund policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hostinger offers a 30-day money-back guarantee on most hosting plans. If you are not satisfied within the first 30 days, a full refund is issued to your original payment method. Domain registrations are typically non-refundable. The refund policy does not apply to some add-on services — check Hostinger's terms for the specific plan you are purchasing."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a Hostinger promo code as an existing customer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most Hostinger promo codes are designed for new account purchases on the first billing cycle. Existing customers upgrading plans or renewing may find fewer public codes applicable — renewal pricing is set by Hostinger's standard rate schedule. However, during major sale events, some codes do apply to plan upgrades for existing accounts. Check the deal card conditions on this CouponsCrew page."
      }
    },
    {
      "@type": "Question",
      "name": "How does Hostinger compare to other hosting providers for Indian users?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For hostinger india users, the key advantages over competing providers are: lower entry-level pricing (particularly with a Hostinger coupon code applied), LiteSpeed servers on shared hosting (faster than Apache-based competitors at the same price), hPanel usability for non-technical users, and the included hostinger free domain on Premium and Business plans. GoDaddy and BigRock are the most common alternatives — both are competitive on domain registration but generally more expensive on equivalent hosting plans."
      }
    }
  ]
},

    // Offer Schema (one per visible deal card)
    ...hostingerOffers,
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
        <HostingerStore />
      </Suspense>
    </>
  )
}
