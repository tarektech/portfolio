import type { MetadataRoute } from 'next'

const SITE_URL = 'https://tarekzein.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString()

  // Static routes
  const staticRoutes = [
    {
      url: SITE_URL,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/certifications`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/experience`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/education`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.4,
    },
  ]

  // Dynamic project routes (if you have individual project pages)
  const projectRoutes = [
    'devblog',
    'education-platform',
    'shop-clone-ecommerce',
    'single-product-page',
  ].map((project) => ({
    url: `${SITE_URL}/projects/${project}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Blog routes (if you have a blog)
  const blogRoutes = [
    {
      url: `${SITE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  return [...staticRoutes, ...projectRoutes, ...blogRoutes]
}

// Alternative function for dynamic sitemap generation
export async function generateSitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date().toISOString()

  try {
    // If you have a CMS or database, fetch dynamic content here
    // const projects = await getProjects()
    // const blogPosts = await getBlogPosts()

    const baseRoutes = [
      {
        url: SITE_URL,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 1.0,
      },
    ]

    // Add dynamic routes when you have them
    // const dynamicRoutes = projects.map(project => ({
    //   url: `${SITE_URL}/projects/${project.slug}`,
    //   lastModified: project.updatedAt,
    //   changeFrequency: 'monthly' as const,
    //   priority: 0.7,
    // }))

    return baseRoutes
  } catch (error) {
    console.error('Error generating sitemap:', error)
    return [
      {
        url: SITE_URL,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 1.0,
      },
    ]
  }
}
