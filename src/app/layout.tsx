import './globals.css';
import { Nunito_Sans } from 'next/font/google';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

const nunito = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  weight: ['200', '300', '400', '600', '700', '800', '900'], // optional range
});

export const metadata: Metadata = {
  title: 'Your App',
  description: 'Using Nunito Sans globally',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={nunito.variable}>
      <body>{children}</body>
    </html>
  );
}