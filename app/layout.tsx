import type { Metadata } from 'next'
import type React from 'react'
import './globals.css'

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@400;500;600;700;800;900&family=Fira+Code:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#F8F8FF] text-[#4A4A6A] selection:bg-[#5B4FBE] selection:text-white">{children}</body>
    </html>
  )
}
