import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

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
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
