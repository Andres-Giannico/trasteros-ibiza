import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://trasterosibiza.com'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          es: baseUrl,
          en: `${baseUrl}?lang=en`,
        },
      },
    },
    {
      url: `${baseUrl}/storagefy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          es: `${baseUrl}/storagefy`,
          en: `${baseUrl}/storagefy?lang=en`,
        },
      },
    },
    {
      url: `${baseUrl}/plano-ses-paisses`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
      alternates: {
        languages: {
          es: `${baseUrl}/plano-ses-paisses`,
          en: `${baseUrl}/plano-ses-paisses?lang=en`,
        },
      },
    },
    {
      url: `${baseUrl}/disponibilidad`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
      alternates: {
        languages: {
          es: `${baseUrl}/disponibilidad`,
          en: `${baseUrl}/disponibilidad?lang=en`,
        },
      },
    },
    {
      url: `${baseUrl}/terminos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
      alternates: {
        languages: {
          es: `${baseUrl}/terminos`,
          en: `${baseUrl}/terminos?lang=en`,
        },
      },
    },
    {
      url: `${baseUrl}/privacidad`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
      alternates: {
        languages: {
          es: `${baseUrl}/privacidad`,
          en: `${baseUrl}/privacidad?lang=en`,
        },
      },
    },
  ]
}

