export default defineSitemapEventHandler(async () => {
  const sanity = useSanity()
  const blogsQuery = `*[_type == "blog" && defined(slug.current)] | order(publishedAt desc) {
      "slug": slug.current,
      language,
      publishedAt,
      _updatedAt,
      title
    }`
  const data = await sanity.fetch(blogsQuery)

  const blogUrls = data?.map((blog: any) => ({
    loc: blog.language === 'en-US'
      ? `/blogs/${blog.slug}` // English: /blogs/slug
      : `/ar-IQ/blogs/${blog.slug}`, // Arabic: /ar-IQ/blogs/slug
    lastmod: blog._updatedAt || blog.publishedAt,
    changefreq: 'weekly',
    priority: 0.8,
  })) || []

  return blogUrls
})
