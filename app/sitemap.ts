import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.couponscrew.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/stores`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/stores/amazon-coupon-code`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/stores/pepperfry-coupon-code`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/stores/myntra-coupon-code`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/stores/flipkart-coupon-code`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/stores/dominos-coupon-code`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/stores/red-bus-coupon-code`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/stores/jiomart-coupon-code`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/stores/puma-coupon-code`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/stores/lenskart-coupon-code`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/stores/hostinger-coupon-code`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/stores/nykaa-coupon-code`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/stores/ajio-coupon-code`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/stores/muscleblaze-coupon-code`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/stores/indigo-coupon-code`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/stores/categories`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/stores/categories/fashion`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${baseUrl}/stores/categories/beauty`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${baseUrl}/stores/categories/exercise-and-fitness`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${baseUrl}/stores/categories/home-and-kitchen`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${baseUrl}/stores/categories/clothing-and-accessories`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${baseUrl}/products`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/products/acnos-bangle-watch-pack-of-2`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${baseUrl}/products/deelmo-mens-mandarin-collar-kurta`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${baseUrl}/products/desidiya-moon-crystal-night-light`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${baseUrl}/products/minimalist-anti-pigmentation-kit`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${baseUrl}/products/pulgos-15-in-1-pushup-board`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${baseUrl}/deals`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/deals-of-the-day`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/deals-of-the-month`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/deals-page`, lastModified: now, changeFrequency: 'daily', priority: 0.7 },
    { url: `${baseUrl}/offers`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/categories`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/categories/fashion`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${baseUrl}/blog/how-to-save-money-shopping-online-india`, lastModified: new Date('2026-06-22'), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/faqs`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${baseUrl}/about-us`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/terms-conditions`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
  ]
}
