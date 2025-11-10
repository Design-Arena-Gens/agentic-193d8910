import Link from 'next/link';
import { ProductGrid } from '@/components/products/ProductGrid';

export default function HomePage() {
  return (
    <div className="container-max py-8 space-y-8">
      <section className="rounded-lg bg-gradient-to-r from-brand to-brand-dark text-white p-8">
        <h1 className="text-3xl font-bold mb-2">Elite Electronics</h1>
        <p className="opacity-90">Shop the latest phones, laptops, and accessories.</p>
        <div className="mt-4">
          <Link href="/products" className="inline-block bg-white text-brand font-medium px-4 py-2 rounded hover:opacity-90">
            Shop Now
          </Link>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-4">Featured Products</h2>
        <ProductGrid featured />
      </section>
    </div>
  );
}
