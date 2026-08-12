import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Luna Clan - There's absolutely nothing here yet!" />
        
        {/* Open Graph / Social Media Embed Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lunaa.my/" />
        <meta property="og:title" content="Lunaa" />
        <meta property="og:description" content="There's absolutely nothing here yet, and we're not working on it!" />
        <meta property="og:image" content="https://lunaa.my/ss.jpeg" />
        
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}