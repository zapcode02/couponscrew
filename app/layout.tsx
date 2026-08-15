import type { Metadata } from 'next'
import type React from 'react'
import { Inter, Outfit, Fira_Code } from 'next/font/google'
import AnalyticsLoader from '../src/components/AnalyticsLoader'
import CookieConsentBanner from '../src/components/CookieConsentBanner'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})

// Dedicated single-weight loader for the body-text weight actually used
// above the fold. next/font/google's automatic preload heuristic is
// unreliable once many weights are declared on one loader (as above), so
// this narrower loader exists solely to get a real <link rel="preload">
// emitted for the font file the browser needs first.
const interPreload = Inter({
  subsets: ['latin'],
  weight: '400',
  preload: true,
  variable: '--font-inter-preload',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
  display: 'swap',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-fira-code',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Couponscrew — Coupons, Deals & Offers | India\'s Most Trusted Coupon Site',
    template: '%s | Couponscrew',
  },
  description: "India's most trusted coupon website. Find verified coupons, deals & offers from 500+ brands. Save more on every purchase with Couponscrew.",
  metadataBase: new URL('https://www.couponscrew.com'),
  openGraph: {
    siteName: 'Couponscrew',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@couponscrew',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    // Browser-tab favicon — sized down from the 145KB source PNG via a
    // Cloudinary transform (32x32, ICO format) instead of shipping the
    // full-resolution asset for a 16-32px UI element.
    icon: 'https://res.cloudinary.com/dgy1atvb8/image/upload/w_32,h_32,c_fill,f_ico/v1781539632/favicon_jxwnvu.png',
    shortcut: 'https://res.cloudinary.com/dgy1atvb8/image/upload/w_32,h_32,c_fill,f_ico/v1781539632/favicon_jxwnvu.png',
    // Apple touch icons are used at larger display sizes (iOS home-screen
    // bookmarks), so this keeps a bigger transform rather than reusing the
    // 32x32 favicon, which would look blurry there.
    apple: 'https://res.cloudinary.com/dgy1atvb8/image/upload/w_180,h_180,c_fill,f_auto,q_auto/v1781539632/favicon_jxwnvu.png',
  },
}

// Speculation Rules API — prefetch-only hint for high-confidence next
// navigations. Store pages are listed by URL rather than tied to a specific
// link source, since Speculation Rules' document/list rule type prefetches
// by destination URL regardless of which page links to it; a page prefetching
// itself is a safe no-op the browser skips automatically.
const speculationRules = {
  prefetch: [
    {
      source: 'list',
      urls: ['/stores/amazon-coupon-code', '/stores/pepperfry-coupon-code'],
      eagerness: 'moderate',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${firaCode.variable} ${interPreload.variable}`}>
      <head>
        <AnalyticsLoader />
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(speculationRules) }}
        />
      </head>
      <body className="bg-[#F8F8FF] text-[#4A4A6A] selection:bg-[#5B4FBE] selection:text-white">
        {children}
        <CookieConsentBanner />
      </body>
    </html>
  )
}
