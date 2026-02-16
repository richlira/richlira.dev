import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import {
  faMicrophone,
  faComments,
  faFileLines,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';
import LiquidGlassEffect from '@/components/LiquidGlassEffect';
import FeatureCard from '@/components/products/FeatureCard';

export const metadata: Metadata = {
  title: 'MeetingMind - AI Meeting Assistant | Rich Lira',
  description:
    'AI-powered meeting assistant that listens, questions, and summarizes — running on iPhone with swappable cloud and on-device providers.',
  openGraph: {
    title: 'MeetingMind - AI Meeting Assistant',
    description:
      'AI-powered meeting assistant that listens, questions, and summarizes',
    url: 'https://richlira.dev/products/meeting-mind',
  },
};

const features = [
  {
    icon: faMicrophone,
    title: 'Real-Time Transcription',
    description:
      'Cloud via OpenAI Whisper or fully on-device via SpeechAnalyzer. Works offline with zero data leaving your phone.',
  },
  {
    icon: faComments,
    title: 'Smart Questions',
    description:
      'AI generates probing questions during recording to deepen your meeting insights and surface what matters.',
  },
  {
    icon: faFileLines,
    title: 'Instant Summaries',
    description:
      'Automatic structured summaries with key points, action items, and participants when recording ends.',
  },
  {
    icon: faShieldHalved,
    title: 'Privacy First',
    description:
      'No servers, no accounts, no tracking. Fully offline mode available. API keys stored securely in Keychain.',
  },
];

export default function MeetingMindPage() {
  return (
    <LiquidGlassEffect>
      <div className="max-w-2xl w-full">
        {/* Hero */}
        <div className="product-hero">
          <div className="product-hero-icon">
            <Image
              src="/products/meeting-mind/icon.png"
              alt="MeetingMind"
              width={100}
              height={100}
            />
          </div>
          <h1>MeetingMind</h1>
          <p className="product-hero-tagline">
            AI-powered meeting assistant that listens, questions, and summarizes
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
            <Link href="/products/meeting-mind/privacy">Privacy Policy</Link>
          </p>
          <p>Built by Rich Lira</p>
        </footer>
      </div>
    </LiquidGlassEffect>
  );
}
