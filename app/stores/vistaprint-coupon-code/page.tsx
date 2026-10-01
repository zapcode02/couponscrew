import type { Metadata } from 'next'
import { Suspense } from 'react'
import VistaprintStore from './_components/VistaprintStore'
import { VISTAPRINT_COUPONS } from './_components/vistaprintCoupons'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // Primary keyword first | ~58 chars
  title: 'Vistaprint Coupon Code - Up to 50% OFF Business Cards | Aug 2026',

  // Primary + all secondary keywords + max offer | 148 chars
  description:
    'Get the latest Vistaprint coupon code and discount codes with up to 50% OFF business cards, signage & custom printing. Discover verified deals, updated daily. Aug 2026',

  alternates: {
    canonical: 'https://www.couponscrew.com/stores/vistaprint-coupon-code',
  },

  openGraph: {
    title: 'Vistaprint Coupon Code - Up to 50% OFF Business Cards | Aug 2026',
    description:
      'Get the latest Vistaprint coupon code and discount codes with up to 50% OFF business cards, signage & custom printing. Discover verified deals, updated daily. Aug 2026',
    url: 'https://www.couponscrew.com/stores/vistaprint-coupon-code',
    siteName: 'CouponsCrew',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.couponscrew.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vistaprint Coupon Code — CouponsCrew',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Vistaprint Coupon Code - Up to 50% OFF Business Cards | Aug 2026',
    description:
      'Get the latest Vistaprint coupon code and discount codes with up to 50% OFF business cards, signage & custom printing. Discover verified deals, updated daily. Aug 2026',
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

const vistaprintOffers = VISTAPRINT_COUPONS.map((coupon) => ({
  '@type': 'Offer',
  name: `Vistaprint ${titleCase(coupon.type)} ${coupon.badge}`,
  description: coupon.description,
  url: `https://www.couponscrew.com/stores/vistaprint-coupon-code#${coupon.id}`,
  priceCurrency: 'INR',
  availability: 'https://schema.org/InStock',
}))

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.couponscrew.com/stores/vistaprint-coupon-code/#webpage',
      url: 'https://www.couponscrew.com/stores/vistaprint-coupon-code',
      name: 'Vistaprint Coupon Code - Up to 50% OFF Business Cards | Aug 2026',
      description: 'Get the latest Vistaprint coupon code and discount codes with up to 50% OFF business cards, signage & custom printing. Discover verified deals, updated daily. Aug 2026',
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
            name: 'Vistaprint Coupon Code',
            item: 'https://www.couponscrew.com/stores/vistaprint-coupon-code',
          },
        ],
      },
    },

    // Organization Schema (Brand entity for Vistaprint)
    {
      '@type': 'Organization',
      '@id': 'https://www.couponscrew.com/stores/vistaprint-coupon-code#brand',
      name: 'Vistaprint',
      url: 'https://www.vistaprint.in',
      sameAs: ['https://en.wikipedia.org/wiki/Vistaprint'],
    },

    // FAQPage Schema (AEO + AI Search — mirrors this page's own visible FAQ accordion, full parity)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/stores/vistaprint-coupon-code#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the best Vistaprint coupon code available right now?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The best active Vistaprint coupon code is listed at the top of this page along with its verified date, so you can see which offer is working best right now. New users typically get a flat discount on their first order, while business cards and bulk print orders regularly carry the deepest percentage discounts. Codes are checked daily, so the listing reflects what is actually live rather than a static page.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there a minimum order quantity on Vistaprint?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Minimum order quantities vary by product — business cards are typically sold starting from packs of 100, while larger-format items like banners and signage can often be ordered as a single piece. Bulk pricing tiers automatically apply as quantity increases, so the per-unit cost drops the more you order, which is displayed on the product page before checkout.",
          },
        },
        {
          '@type': 'Question',
          name: 'How does the VistaCreate design tool work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "VistaCreate is Vistaprint's free online design tool that lets you customise templates for business cards, flyers, social media graphics, and more, directly in your browser without needing separate design software. Free templates cover most common use cases, while some premium templates and stock assets may carry an additional cost — clearly marked before you add them to your design.",
          },
        },
        {
          '@type': 'Question',
          name: 'How long does a rush order take to arrive?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standard production and delivery timelines are shown on every product page before you order, typically ranging from a few business days to around two weeks depending on the product and customisation complexity. Rush production is available as a paid add-on on select products, reducing production time — though shipping time is separate and depends on your delivery location.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are there bulk discounts for business orders?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Vistaprint applies automatic bulk pricing tiers as your order quantity increases — the per-unit price for 500 business cards is lower than for 100, and larger quantities unlock progressively deeper per-unit rates. This is separate from promotional coupon codes, so a bulk order combined with an active CouponsCrew offer typically delivers the best overall value.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is Vistaprint\'s return and reprint policy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vistaprint offers a satisfaction guarantee on most products — if an order arrives with a print defect or production error, a free reprint or refund is typically available when reported within the stated claim window on the order confirmation. Custom-designed items are generally non-returnable for buyer\'s-remorse reasons once printed, since they are made to order, so it is worth reviewing your proof carefully before confirming.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use a Vistaprint coupon code with a bank card offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Apply your CouponsCrew Vistaprint offer at checkout, then pay with an eligible HDFC or ICICI card to unlock an additional instant discount. This stacks on top of any bulk-order pricing tier already applied to your cart, giving you multiple layers of savings on the same order.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does VistaCreate cost anything to use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The core VistaCreate design tool and most templates are free to use for designing your print products. Certain premium stock photos, fonts, or advanced template packs may carry a small additional licensing cost, which is clearly shown before you add them to a design — the base design experience itself does not require a paid subscription.',
          },
        },
      ],
    },

    // ItemList Schema — groups all coupon Offers into one connected list
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/stores/vistaprint-coupon-code#offerlist',
      name: 'Vistaprint Coupon Codes & Offers',
      numberOfItems: vistaprintOffers.length,
      itemListElement: vistaprintOffers.map((offer, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: offer,
      })),
    },

    // Offer Schema (one per visible deal card)
    ...vistaprintOffers,
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
        <VistaprintStore />
      </Suspense>
    </>
  )
}
