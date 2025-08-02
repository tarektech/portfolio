export function PerformanceOptimizer() {
  return (
    <>
      {/* Preload critical resources */}
      <link rel="preload" href="/src/index.css" as="style" />

      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />

      {/* Preconnect to analytics domains */}
      <link rel="preconnect" href="//vitals.vercel-analytics.com" />
      <link rel="preconnect" href="//va.vercel-scripts.com" />

      {/* Resource hints for better performance */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />

      {/* Additional performance optimizations */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="msapplication-tap-highlight" content="no" />
    </>
  );
}
