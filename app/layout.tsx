import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';
import { CartButton } from '@/components/cart/CartButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Elite Electronics',
  description: 'Modern electronic store',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <header className="border-b">
          <div className="container-max flex h-16 items-center justify-between">
            <Link href="/" className="text-xl font-semibold">Elite Electronics</Link>
            <nav className="flex items-center gap-3">
              <Link href="/products" className="hover:underline">Products</Link>
              <Link href="/account" className="hover:underline">Account</Link>
              <Link href="/admin" className="hover:underline">Admin</Link>
              <CartButton />
              <ThemeToggle />
            </nav>
          </div>
        </header>
        <main className="flex-1">
          {children}
        </main>
        <footer className="border-t">
          <div className="container-max py-6 text-sm text-gray-500">? {new Date().getFullYear()} Elite Electronics</div>
        </footer>
      </body>
    </html>
  );
}
