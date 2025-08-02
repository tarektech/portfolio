import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { StagewiseToolbar } from '@stagewise/toolbar-next';
import ReactPlugin from '@stagewise-plugins/react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Tarek Zein | Full Stack Web Developer',
  description:
    'Personal portfolio of Tarek Zein, a full stack web developer specializing in React, Next.js, Node.js, and modern web development practices. Based in Istanbul, Turkey.',
  keywords: [
    'Tarek Zein',
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
  ],
  authors: [{ name: 'Tarek Zein' }],
  creator: 'Tarek Zein',
  openGraph: {
    title: 'Tarek Zein | Full Stack Web Developer',
    description:
      'Personal portfolio of Tarek Zein, a full stack web developer specializing in React, Next.js, Node.js, and modern web development practices.',
    url: 'https://tarekdev.com',
    siteName: 'Tarek Zein Portfolio',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tarek Zein | Full Stack Web Developer',
    description:
      'Personal portfolio of Tarek Zein, a full stack web developer specializing in React, Next.js, Node.js, and modern web development practices.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}

        {process.env.NODE_ENV === 'development' && (
          <StagewiseToolbar config={{ plugins: [ReactPlugin] }} />
        )}

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
