export default function sitemap() {
  const now = new Date();

  return [
    {
      url: "https://beadersafrica.com",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://beadersafrica.com/about",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://beadersafrica.com/features",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: "https://beadersafrica.com/waitlist",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://beadersafrica.com/contact",
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://beadersafrica.com/marketplace",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://beadersafrica.com/suppliers",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://beadersafrica.com/academy",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
  ];
}
