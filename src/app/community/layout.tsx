import type { Metadata } from 'next';
import BackLink from '@/components/products/BackLink';

export const metadata: Metadata = {
  title: 'Community | Rich Lira',
  description: 'Open source projects and community initiatives by Rich Lira',
  openGraph: {
    title: 'Community | Rich Lira',
    description: 'Open source projects and community initiatives',
    url: 'https://richlira.dev/community',
  },
};

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="community-page">
      <nav className="w-full max-w-4xl mb-8">
        <BackLink href="/" label="Back to Home" />
      </nav>
      <main className="w-full max-w-4xl flex flex-col items-center">
        {children}
      </main>
    </div>
  );
}
