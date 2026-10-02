import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}