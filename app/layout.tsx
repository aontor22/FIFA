
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'World Cup Explorer Pro',
  description: 'Interactive FIFA World Cup history website covering every men’s World Cup from 1930 to 2026.',
  keywords: ['FIFA World Cup', 'World Cup history', 'World Cup winners', 'World Cup 2026', 'football stats'],
  openGraph: {
    title: 'World Cup Explorer Pro',
    description: 'Explore every men’s FIFA World Cup edition, winner, host, final, record and 2026 tournament overview.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
