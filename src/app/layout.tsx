import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Tarek AlZein | Full Stack Web Developer',
  description:
    'Personal portfolio of Tarek AlZein, a full stack web developer specializing in React, Next.js, Node.js, and modern web development practices. Based in Istanbul, Turkey.',
  keywords: [
    'Tarek AlZein',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'Web Developer',
    'Istanbul',
    'Turkey',
    'JavaScript',
    'TypeScript',
    'MERN Stack',
    'Python Developer',
    'Frontend Developer',
    'Backend Developer',
    'Software Engineer',
    'Portfolio',
    'Web Development',
  ],
  authors: [{ name: 'Tarek AlZein' }],
  creator: 'Tarek AlZein',
  publisher: 'Tarek AlZein',
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL('https://tarekdev.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Tarek AlZein | Full Stack Web Developer',
    description:
      'Personal portfolio of Tarek AlZein, a full stack web developer specializing in React, Next.js, Node.js, and modern web development practices.',
    url: 'https://tarekdev.com',
    siteName: 'Tarek AlZein Portfolio',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/my-avatar.png',
        width: 1200,
        height: 630,
        alt: 'Tarek AlZein - Web Developer Portfolio',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tarek AlZein | Full Stack Web Developer',
    description:
      'Personal portfolio of Tarek AlZein, a full stack web developer specializing in React, Next.js, Node.js, and modern web development practices.',
    images: ['/my-avatar.png'],
    creator: '@tarektech',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/my-avatar.png' },
      { url: '/my-avatar.png', sizes: '16x16', type: 'image/png' },
      { url: '/my-avatar.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/my-avatar.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.json',
  category: 'technology',
  classification: 'Portfolio',
  other: {
    language: 'English',
    'revisit-after': '7 days',
    distribution: 'global',
    rating: 'general',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://tarekdev.com" />

        {/* Performance Hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://vercel-analytics.com" />

        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />

        {/* Additional SEO Meta Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="Tarek Zein Portfolio"
        />
        <meta name="application-name" content="Tarek Zein Portfolio" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />

        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Tarek AlZein',
              jobTitle: 'Full Stack Web Developer',
              description:
                'Passionate and detail-oriented self-taught web developer with a strong foundation in creating high-quality, user-friendly websites and applications.',
              url: 'https://tarekdev.com',
              image: 'https://tarekdev.com/my-avatar.png',
              email: 'tarekzein.dev@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Istanbul',
                addressCountry: 'Turkey',
              },
              knowsAbout: [
                'Web Development',
                'React.js',
                'Node.js',
                'Python',
                'JavaScript',
                'TypeScript',
                'HTML',
                'CSS',
                'MongoDB',
                'Express.js',
                'Next.js',
                'React Native',
                'Full Stack Development',
                'Frontend Development',
                'Backend Development',
                'UI/UX Design',
                'Figma',
              ],
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'Istanbul Aydin University',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Istanbul',
                  addressCountry: 'Turkey',
                },
              },
              sameAs: [
                'https://github.com/tarektech',
                'https://www.linkedin.com/in/tarektech/',
              ],
              hasCredential: [
                {
                  '@type': 'EducationalOccupationalCredential',
                  name: 'Meta Front-End Developer Professional Certificate',
                  url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/F8XK925ZATZF',
                  credentialCategory: 'certificate',
                },
                {
                  '@type': 'EducationalOccupationalCredential',
                  name: 'React Native - The Practical Guide',
                  credentialCategory: 'certificate',
                },
                {
                  '@type': 'EducationalOccupationalCredential',
                  name: 'MERN Fullstack Development',
                  credentialCategory: 'certificate',
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
