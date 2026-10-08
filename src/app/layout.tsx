import type { Metadata, Viewport } from 'next';
import { Manrope, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: {
    default: 'Escuela y comunidad de handpan — Universo Handpan',
    template: '%s | Universo Handpan',
  },
  description: 'Clases, cursos, eventos, tienda y comunidad alrededor del handpan en Buenos Aires.',
  metadataBase: new URL('https://universohandpan.com'),
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    siteName: 'Universo Handpan',
    title: 'Escuela y comunidad de handpan — Universo Handpan',
    description: 'Clases, cursos, eventos, tienda y comunidad alrededor del handpan en Buenos Aires.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Escuela y comunidad de handpan — Universo Handpan',
    description: 'Clases, cursos, eventos, tienda y comunidad alrededor del handpan en Buenos Aires.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: { media: '(prefers-color-scheme: dark)', color: '#141210' },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${manrope.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
