interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
}

const DEFAULT_SEO = {
  title: 'Tarek Alzein - Full Stack Developer & Designer',
  description:
    'Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Creating innovative digital solutions and beautiful user experiences.',
  image: '/projects/frontend-project-1.png', // Using one of your project images
  url: 'https://tarekalzein.com', // Update with your actual domain
  type: 'website' as const,
};

export function SEO({
  title = DEFAULT_SEO.title,
  description = DEFAULT_SEO.description,
  image = DEFAULT_SEO.image,
  url = DEFAULT_SEO.url,
  type = DEFAULT_SEO.type,
}: SEOProps) {
  const fullTitle =
    title === DEFAULT_SEO.title ? title : `${title} | Tarek Alzein`;
  const fullImageUrl = image.startsWith('http') ? image : `${url}${image}`;
  const canonicalUrl = url;

  return (
    <>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Full Stack Developer, React Developer, Next.js, Node.js, TypeScript, JavaScript, Web Development, Frontend, Backend, Portfolio"
      />
      <meta name="author" content="Tarek Alzein" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Tarek Alzein Portfolio" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="revisit-after" content="1 days" />
    </>
  );
}
