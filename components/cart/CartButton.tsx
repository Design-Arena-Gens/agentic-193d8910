"use client";
import Link from 'next/link';
import { useCartStore } from '@/store/cart';

export function CartButton() {
  const count = useCartStore((s) => s.items.reduce((acc, it) => acc + it.quantity, 0));
  return (
    <Link href="/cart" className="relative rounded border px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
      Cart
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-brand text-white text-xs rounded-full px-2 py-0.5">
          {count}
        </span>
      )}
    </Link>
  );
}
