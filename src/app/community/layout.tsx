import type { Metadata } from 'next';
import BackLink from '@/components/products/BackLink';

export const metadata: Metadata = {
  title: 'Claude Meetups | Rich Lira',
  description: 'Claude community events and meetups organized by Rich Lira',
  openGraph: {
    title: 'Claude Meetups | Rich Lira',
    description: 'Claude community events and meetups',
    url: 'https://richlira.dev/community/claude-code-meetups',
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
