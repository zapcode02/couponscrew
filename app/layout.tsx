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
    icon: 'https://res.cloudinary.com/dgy1atvb8/image/upload/v1781539632/favicon_jxwnvu.png',
    shortcut: 'https://res.cloudinary.com/dgy1atvb8/image/upload/v1781539632/favicon_jxwnvu.png',
    apple: 'https://res.cloudinary.com/dgy1atvb8/image/upload/v1781539632/favicon_jxwnvu.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${firaCode.variable}`}>
      <head>
        <AnalyticsLoader />
      </head>
      <body className="bg-[#F8F8FF] text-[#4A4A6A] selection:bg-[#5B4FBE] selection:text-white">
        {children}
        <CookieConsentBanner />
      </body>
    </html>
  )
}
