import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import {
  faLayerGroup,
  faCoins,
  faClockRotateLeft,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';
import LiquidGlassEffect from '@/components/LiquidGlassEffect';
import FeatureCard from '@/components/products/FeatureCard';

export const metadata: Metadata = {
  title: 'Afina AI - The Prompt Engineering Lab | Rich Lira',
  description:
    'The prompt engineering lab for AI developers. Test prompts across Claude, OpenAI, Gemini, and On-Device AI with real-time cost tracking.',
  openGraph: {
    title: 'Afina AI - The Prompt Engineering Lab',
    description:
      'Test prompts across multiple AI models with real-time cost tracking',
    url: 'https://richlira.dev/products/afina-ai',
  },
};

const features = [
  {
    icon: faLayerGroup,
    title: 'Multi-Model Testing',
    description:
      'Test your prompts across Claude, OpenAI, Gemini, and Apple On-Device AI. Compare responses side by side.',
  },
  {
    icon: faCoins,
    title: 'Cost Tracking',
    description:
      'Real-time token counting and cost estimation. Know exactly how much each prompt costs before sending.',
  },
  {
    icon: faClockRotateLeft,
    title: 'Version History',
    description:
      'Keep track of all your prompt iterations. Easily compare and revert to previous versions.',
  },
  {
    icon: faShieldHalved,
    title: 'Privacy First',
    description:
      'API keys stored securely in Keychain. Use on-device AI for sensitive prompts that never leave your device.',
  },
];

export default function AfinaAiPage() {
  return (
    <LiquidGlassEffect>
      <div className="max-w-2xl w-full">
        {/* Hero */}
        <div className="product-hero">
          <div className="product-hero-icon">
            <Image
              src="/products/afina-ai/icon.png"
              alt="Afina AI"
              width={100}
              height={100}
            />
          </div>
          <h1>Afina AI</h1>
          <p className="product-hero-tagline">
            The prompt engineering lab for AI developers
          </p>
        </div>

        {/* Features Grid */}
        <section className="mb-12">
          <div className="features-grid">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="cta-section">
          <div className="app-store-badge">
            <FontAwesomeIcon icon={faApple} />
            <div className="app-store-badge-text">
              <span className="app-store-badge-label">Coming Soon on the</span>
              <span className="app-store-badge-store">App Store</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="product-footer">
          <p>
            <Link href="/products/afina-ai/privacy">Privacy Policy</Link>
          </p>
          <p>Built by Rich Lira</p>
        </footer>
      </div>
    </LiquidGlassEffect>
  );
}
