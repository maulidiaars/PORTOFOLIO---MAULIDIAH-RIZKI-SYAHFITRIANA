import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Maulidiah - Fullstack Developer',
  description: 'Professional Fullstack Developer specializing in modern web technologies',
};

// layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-[#561c24] text-white`}>
        {children}
      </body>
    </html>
  );
}