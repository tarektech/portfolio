interface StructuredDataProps {
  type?: 'person' | 'website' | 'portfolio';
}

export function StructuredData({ type = 'person' }: StructuredDataProps) {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Tarek Alzein',
    jobTitle: 'Full Stack Developer',
    description:
      'Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies',
    url: 'https://tarekalzein.com', // Update with your actual domain
    image: 'https://tarekalzein.com/projects/frontend-project-1.png', // Update with your photo
    sameAs: [
      'https://github.com/tarekalzein', // Update with your actual social links
      'https://linkedin.com/in/tarekalzein',
      'https://twitter.com/tarekalzein',
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'MongoDB',
      'PostgreSQL',
      'Full Stack Development',
      'Frontend Development',
      'Backend Development',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance Developer',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Tarek Alzein Portfolio',
    description:
      'Full Stack Developer Portfolio - Showcasing modern web development projects and skills',
    url: 'https://tarekalzein.com',
    author: {
      '@type': 'Person',
      name: 'Tarek Alzein',
    },
  };

  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'Tarek Alzein Portfolio',
    description:
      'A collection of full stack development projects showcasing modern web technologies',
    author: {
      '@type': 'Person',
      name: 'Tarek Alzein',
    },
    genre: 'Web Development Portfolio',
    keywords: 'React, Next.js, Node.js, TypeScript, Full Stack Development',
  };

  const getSchema = () => {
    switch (type) {
      case 'website':
        return websiteSchema;
      case 'portfolio':
        return portfolioSchema;
      default:
        return personSchema;
    }
  };

  return (
    <script type="application/ld+json">{JSON.stringify(getSchema())}</script>
  );
}
