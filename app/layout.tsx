import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import '../style.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jahanzaib | Frontend Engineer & Product Designer',
  description:
    'Premium frontend engineer crafting high-performance web and mobile experiences with React, Next.js, and React Native.',
  alternates: {
    canonical: 'https://jahanzaib.dev',
  },
  metadataBase: new URL('https://jahanzaib.dev'),
  openGraph: {
    title: 'Jahanzaib | Frontend Engineer & Product Designer',
    description: 'React · Next.js · React Native · Product-grade interfaces',
    type: 'website',
    url: 'https://jahanzaib.dev',
    images: ['/logo.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@jahanzaib_dev',
  },
  other: {
    'theme-color': '#06070d',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/logo.svg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
