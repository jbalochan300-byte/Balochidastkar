import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Balochidastkar',
  description: 'Traditional Balochi handcrafted collection',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
