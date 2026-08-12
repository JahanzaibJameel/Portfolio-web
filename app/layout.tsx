import { Inter, Inter_Tight, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Muhammad Jahanzaib | Senior Frontend Engineer',
  description:
    'Senior frontend engineer building exceptional digital products with React, Next.js, and TypeScript. I craft high-performance experiences that scale.',
  keywords: ['frontend', 'engineer', 'react', 'next.js', 'typescript', 'portfolio'],
  authors: [{ name: 'Muhammad Jahanzaib' }],
  creator: 'Muhammad Jahanzaib',
  publisher: 'Muhammad Jahanzaib',
  formatDetection: {
    phoneNumbers: false,
    email: false,
    address: false,
    images: false,
  },
  metadataBase: new URL('https://jahanzaib.dev'),
  alternates: {
    canonical: 'https://jahanzaib.dev',
  },
  openGraph: {
    title: 'Muhammad Jahanzaib | Senior Frontend Engineer',
    description:
      'Building exceptional digital products with React, Next.js, and TypeScript.',
    url: 'https://jahanzaib.dev',
    siteName: 'Muhammad Jahanzaib Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Muhammad Jahanzaib Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Jahanzaib | Senior Frontend Engineer',
    description:
      'Building exceptional digital products with React, Next.js, and TypeScript.',
    creators: ['@jahanzaib_dev'],
    creator: '@jahanzaib_dev',
  },
  robots: {
    index: true,
    follow: true,
    maxImagePreview: 'large',
    maxSnippet: -1,
    maxVideoPreview: -1,
  },
  category: 'technology',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <head />
      <body className="min-h-screen font-body antialiased bg-[#09090B] text-[#FAFAFA]">
        {children}
      </body>
    </html>
  );
}