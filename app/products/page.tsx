import type { Metadata } from 'next'
import Products from './_components/Products'

// ─────────────────────────────────────────────
// SEO + AEO + GEO + AI Search Meta
// ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://www.couponscrew.com'),

  // ── Core Meta ──────────────────────────────
  title: 'Best Online Deals & Discount Products Today | CouponsCrew',
  description:
    'Shop the best online deals on CouponsCrew — verified discounts on watches, skincare, clothing, home decor, fitness gear & more. Save big with free delivery offers updated daily.',

  keywords: [
    'best online deals India',
    'discount products today',
    'online shopping deals',
    'best coupon sites for online shopping',
    'verified product deals',
    'watches discount deals',
    'skincare deals online',
    'clothing deals today',
    'home decor discount',
    'fitness gear deals',
    'free delivery offers India',
    'CouponsCrew product deals',
    'best discount products online',
  ],

  // ── Canonical + hreflang ───────────────────
  alternates: {
    canonical: 'https://www.couponscrew.com/products',
    // 💡 Add more locales below as you expand to new countries
    languages: {
      'en-IN': 'https://www.couponscrew.com/products',
      // 'en-US': 'https://www.couponsbit.us/products',
      // 'en-GB': 'https://www.couponscrew.com/products',
    },
  },

  // ── Open Graph ─────────────────────────────
  openGraph: {
    title: 'Best Online Deals & Discount Products Today | CouponsCrew',
    description:
      'Shop the best online deals on CouponsCrew — verified discounts on watches, skincare, clothing, home decor, fitness gear & more. Save big with free delivery offers updated daily.',
    url: 'https://www.couponscrew.com/products',
    siteName: 'CouponsCrew',
    type: 'website',
    // 💡 Primary locale — change per market if needed
    locale: 'en_IN',
    // 💡 Uncomment to add alternate locales as you expand
    alternateLocale: [
      // 'en_US',
      // 'en_GB',
    ],
    images: [
      {
        url: 'https://www.couponscrew.com/og-images/products.jpg',
        width: 1200,
        height: 630,
        alt: 'Best Online Deals & Discount Products — CouponsCrew',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Best Online Deals & Discount Products Today | CouponsCrew',
    description:
      'Shop the best online deals on CouponsCrew — verified discounts on watches, skincare, clothing, home decor, fitness gear & more. Save big with free delivery offers updated daily.',
    site: '@couponscrew',
    creator: '@couponscrew',
    images: ['https://www.couponscrew.com/og-images/products.jpg'],
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

  // ── Geo Tags ───────────────────────────────
  // 💡 Update geo.region + language when targeting a new country
  other: {
    'geo.region': 'IN',
    'geo.country': 'IN',
    // 'geo.placename': 'India',     // uncomment to add country/city name
    language: 'en-IN',
    // 'content-language': 'en-US',  // uncomment for US targeting
  },
}

// ─────────────────────────────────────────────
// JSON-LD Schemas (CollectionPage + ItemList + FAQPage)
// ─────────────────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [

    // 1. CollectionPage Schema
    {
      '@type': 'CollectionPage',
      '@id': 'https://www.couponscrew.com/products#collectionpage',
      name: 'Best Online Deals & Discount Products Today | CouponsCrew',
      url: 'https://www.couponscrew.com/products',
      description:
        'Browse verified product deals across watches, skincare, clothing, home decor, fitness gear and more on CouponsCrew. Updated daily with free delivery offers.',
      inLanguage: 'en-IN',
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
            name: 'Products',
            item: 'https://www.couponscrew.com/products',
          },
        ],
      },
    },

    // 2. ItemList Schema
    // 💡 SCALABLE: add new products by copying a ListItem block below
    // Update numberOfItems to match the total count each time you add products
    {
      '@type': 'ItemList',
      '@id': 'https://www.couponscrew.com/products#itemlist',
      name: 'All Discount Products on CouponsCrew',
      description:
        'Complete list of verified discount product deals on CouponsCrew including watches, skincare, clothing, home decor and fitness gear.',
      url: 'https://www.couponscrew.com/products',
      // 💡 UPDATE THIS NUMBER when you add more products
      numberOfItems: 5,
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      itemListElement: [
        // ── PRODUCT 1 ──────────────────────────
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'Product',
            name: 'Acnos Premium Girl\'s Heart Shape Bangle Analog Watch',
            brand: {
              '@type': 'Brand',
              name: 'Acnos',
            },
            offers: {
              '@type': 'Offer',
              price: '299',
              priceCurrency: 'INR',
              priceValidUntil: '2025-12-31',
              availability: 'https://schema.org/InStock',
              hasMerchantReturnPolicy: {
                '@type': 'MerchantReturnPolicy',
                applicableCountry: 'IN',
              },
              shippingDetails: {
                '@type': 'OfferShippingDetails',
                shippingRate: {
                  '@type': 'MonetaryAmount',
                  value: '0',
                  currency: 'INR',
                },
              },
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4',
              reviewCount: '2300',
            },
            url: 'https://www.couponscrew.com/products',
          },
        },
        // ── PRODUCT 2 ──────────────────────────
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Product',
            name: 'Minimalist Anti-Pigmentation Kit, Face Wash, Serum & Moisturizer',
            brand: {
              '@type': 'Brand',
              name: 'Minimalist',
            },
            offers: {
              '@type': 'Offer',
              price: '1147',
              priceCurrency: 'INR',
              priceValidUntil: '2025-12-31',
              availability: 'https://schema.org/InStock',
              hasMerchantReturnPolicy: {
                '@type': 'MerchantReturnPolicy',
                applicableCountry: 'IN',
              },
              shippingDetails: {
                '@type': 'OfferShippingDetails',
                shippingRate: {
                  '@type': 'MonetaryAmount',
                  value: '0',
                  currency: 'INR',
                },
              },
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.1',
              reviewCount: '306',
            },
            url: 'https://www.couponscrew.com/products',
          },
        },
        // ── PRODUCT 3 ──────────────────────────
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'Product',
            name: 'DEELMO Men\'s Cotton Blend Mandarin Collar Casual Shirt',
            brand: {
              '@type': 'Brand',
              name: 'Deelmo',
            },
            offers: {
              '@type': 'Offer',
              price: '479',
              priceCurrency: 'INR',
              priceValidUntil: '2025-12-31',
              availability: 'https://schema.org/InStock',
              hasMerchantReturnPolicy: {
                '@type': 'MerchantReturnPolicy',
                applicableCountry: 'IN',
              },
              shippingDetails: {
                '@type': 'OfferShippingDetails',
                shippingRate: {
                  '@type': 'MonetaryAmount',
                  value: '0',
                  currency: 'INR',
                },
              },
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '3.6',
              reviewCount: '2300',
            },
            url: 'https://www.couponscrew.com/products',
          },
        },
        // ── PRODUCT 4 ──────────────────────────
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'Product',
            name: 'Desidiya Moon Crystal Ball Night Light with Wooden Base',
            brand: {
              '@type': 'Brand',
              name: 'Desidiya',
            },
            offers: {
              '@type': 'Offer',
              price: '197',
              priceCurrency: 'INR',
              priceValidUntil: '2025-12-31',
              availability: 'https://schema.org/InStock',
              hasMerchantReturnPolicy: {
                '@type': 'MerchantReturnPolicy',
                applicableCountry: 'IN',
              },
              shippingDetails: {
                '@type': 'OfferShippingDetails',
                shippingRate: {
                  '@type': 'MonetaryAmount',
                  value: '0',
                  currency: 'INR',
                },
              },
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4',
              reviewCount: '5500',
            },
            url: 'https://www.couponscrew.com/products',
          },
        },
        // ── PRODUCT 5 ──────────────────────────
        {
          '@type': 'ListItem',
          position: 5,
          item: {
            '@type': 'Product',
            name: 'PulGos 15-in-1 Foldable Pushup Board for Home Workout',
            brand: {
              '@type': 'Brand',
              name: 'PulGos',
            },
            offers: {
              '@type': 'Offer',
              price: '299',
              priceCurrency: 'INR',
              priceValidUntil: '2025-12-31',
              availability: 'https://schema.org/InStock',
              hasMerchantReturnPolicy: {
                '@type': 'MerchantReturnPolicy',
                applicableCountry: 'IN',
              },
              shippingDetails: {
                '@type': 'OfferShippingDetails',
                shippingRate: {
                  '@type': 'MonetaryAmount',
                  value: '0',
                  currency: 'INR',
                },
              },
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '3.8',
              reviewCount: '1000',
            },
            url: 'https://www.couponscrew.com/products',
          },
        },
        // 💡 ADD NEW PRODUCTS HERE — copy a ListItem block above,
        // increment position, and update numberOfItems at the top
      ],
    },

    // 3. FAQPage Schema (AEO + AI Search)
    {
      '@type': 'FAQPage',
      '@id': 'https://www.couponscrew.com/products#faqpage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What kinds of products are available on CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CouponsCrew lists verified discount deals across a wide range of products including watches, skincare kits, clothing, home decor, fitness gear and more. All products come with free delivery and are updated daily.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I get a deal on a product from CouponsCrew?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Browse the products page on CouponsCrew, find the product you want, and click the "Get Deal" button. You will be redirected to the brand\'s website with the discount automatically applied or a coupon code ready to use at checkout.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are the product deals on CouponsCrew verified?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All product deals listed on CouponsCrew are manually verified and updated daily. Prices, savings, and free delivery availability are checked regularly to ensure accuracy.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do CouponsCrew product deals include free delivery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, most product deals on CouponsCrew include free delivery. The free delivery status is shown clearly on each product card so you know before you click.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is CouponsCrew free to use for product deals?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, CouponsCrew is completely free to use. Browse any product deal, click Get Deal, and save instantly — no account or signup required.',
          },
        },
      ],
    },
  ],
}

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
      <Products />
    </>
  )
}