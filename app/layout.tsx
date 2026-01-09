import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { IntercomProvider } from '@/components/IntercomProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wellysa - Twój osobisty asystent zdrowia',
  description: 'Wellysa to prosty asystent zdrowia dla każdego. Eksperci NZOZ wellysa Nowej Generacji.',
  keywords: 'wellysa, zdrowie, badania, asystent zdrowia, profilaktyka',
  openGraph: {
    title: 'Wellysa - Twój osobisty asystent zdrowia',
    description: 'Wellysa to prosty asystent zdrowia dla każdego.',
    type: 'website',
    locale: 'pl_PL',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <IntercomProvider>
          {children}
        </IntercomProvider>
      </body>
    </html>
  );
}
