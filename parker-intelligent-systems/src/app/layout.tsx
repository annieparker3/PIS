import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/toaster';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PARKER INTELLIGENT SYSTEMS',
  description: 'The next evolution of technology',
  keywords: ['AI', 'Enterprise Solutions', 'Technology', 'Innovation', 'Digital Transformation'],
  authors: [{ name: 'PARKER INTELLIGENT SYSTEMS' }],
  creator: 'PARKER INTELLIGENT SYSTEMS',
  publisher: 'PARKER INTELLIGENT SYSTEMS',
  metadataBase: new URL('https://parkeris.tech'),
  openGraph: {
    title: 'PARKER INTELLIGENT SYSTEMS',
    description: 'The next evolution of technology',
    url: 'https://parkeris.tech',
    siteName: 'PARKER INTELLIGENT SYSTEMS',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PARKER INTELLIGENT SYSTEMS',
    description: 'The next evolution of technology',
    creator: '@parkeris',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <div className="pt-16">
            {children}
          </div>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
