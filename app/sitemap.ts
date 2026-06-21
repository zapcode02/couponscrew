import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.couponscrew.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/stores`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/products`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/deals`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/deals-of-the-day`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/deals-of-the-month`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/offers`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/categories`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/categories/fashion`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
  ]
}
