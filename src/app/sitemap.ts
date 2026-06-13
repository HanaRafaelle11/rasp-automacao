import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://raspautomacao.com.br'
  const lastModified = new Date()

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/politica-privacidade`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    // Future pages — uncomment as implemented:
    // { url: `${baseUrl}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    // { url: `${baseUrl}/cases`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    // { url: `${baseUrl}/produtos`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
  ]
}
