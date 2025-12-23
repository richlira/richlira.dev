import type { Metadata, Viewport } from 'next';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './globals.css';

config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'Rich Lira, Full-Stack AI Engineer',
  description: 'My name is Rich. I am a Full-Stack AI Engineer.',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon/safari-pinned-tab.svg',
        color: '#b90606',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    url: 'https://www.richlira.dev',
    type: 'profile',
    title: 'Rich Lira',
    description: 'Full-Stack AI Engineer',
    images: [
      {
        url: 'https://richlira.dev/rich.jpg',
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="msapplication-TileColor" content="#da532c" />
      </head>
      <body>
        {/* Animated Background Orbs */}
        <div className="bg-orbs" aria-hidden="true">
          <div className="bg-orb bg-orb-1" />
          <div className="bg-orb bg-orb-2" />
          <div className="bg-orb bg-orb-3" />
          <div className="bg-orb bg-orb-4" />
        </div>
        {children}
      </body>
    </html>
  );
}
