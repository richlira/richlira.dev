import type { Metadata, Viewport } from 'next';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './globals.css';

config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'Rich Lira, Software Engineer Frontend',
  description: 'My name is Rich. I am a Software Engineer Frontend.',
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
    description: 'Software Engineer Frontend',
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
      <body>{children}</body>
    </html>
  );
}
