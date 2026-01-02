import type { Metadata } from 'next';
import BackLink from '@/components/products/BackLink';

export const metadata: Metadata = {
  title: 'Products | Rich Lira',
  description: 'Apps and tools built by Rich Lira',
  openGraph: {
    title: 'Products | Rich Lira',
    description: 'Apps and tools built by Rich Lira',
    url: 'https://richlira.dev/products',
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="product-page">
      <nav className="w-full max-w-4xl mb-8">
        <BackLink href="/" label="Back to Home" />
      </nav>
      <main className="w-full max-w-4xl flex flex-col items-center">
        {children}
      </main>
    </div>
  );
}
