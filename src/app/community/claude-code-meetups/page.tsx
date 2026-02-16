import type { Metadata } from 'next';
import Image from 'next/image';
import {
  faMicrophone,
  faUsers,
  faBuilding,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import LiquidGlassEffect from '@/components/LiquidGlassEffect';
import FeatureCard from '@/components/products/FeatureCard';
import './meetups.css';

export const metadata: Metadata = {
  title: 'Claude Code Meetups - Mexico City & Monterrey | Rich Lira',
  description:
    'Organizing Claude Code community meetups in Mexico City and Monterrey. 650+ registrations, sold-out events with top industry talent.',
  openGraph: {
    title: 'Claude Code Meetups - Mexico City & Monterrey',
    description:
      'Organizing Claude Code community meetups in Mexico',
    url: 'https://richlira.dev/community/claude-code-meetups',
  },
};

const features = [
  {
    icon: faUsers,
    title: '650+ Registrations & Growing',
    description:
      'First edition sold out at 150 attendees in Mexico City with CTOs, founders, and senior engineers from top companies. Now expanding to Monterrey.',
  },
  {
    icon: faMicrophone,
    title: 'Lightning Talks & Demos',
    description:
      'Learn from real builders shipping with Claude Code. Talks cover agentic workflows, prompt engineering, AI-powered development, and hands-on demos.',
  },
  {
    icon: faGlobe,
    title: 'Networking & Community',
    description:
      'Connect with developers, founders, and AI engineers building the future. A space to share ideas, find collaborators, and grow your network.',
  },
  {
    icon: faBuilding,
    title: 'Industry Access',
    description:
      'Direct access to Anthropic team members, AI tooling companies, and engineering leaders. Bridging the gap between LatAm talent and the global AI ecosystem.',
  },
];

export default function ClaudeCodeMeetupsPage() {
  return (
    <LiquidGlassEffect>
      <div className="max-w-2xl w-full anthropic-themed">
        {/* Hero */}
        <div className="community-hero">
          <div className="community-hero-icon">
            <Image
              src="/community/claude-code-meetups/icon.svg"
              alt="Claude Code Meetups"
              width={100}
              height={100}
            />
          </div>
          <h1>Claude Code Meetups</h1>
          <p className="community-hero-tagline">
            Organizing Claude Code community meetups in Mexico City &amp; Monterrey
          </p>
        </div>

        {/* First Edition Highlight */}
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

        {/* Description */}
        <section className="privacy-section" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <p style={{ opacity: 0.7, fontSize: '0.95rem', lineHeight: 1.7 }}>
            Claude Code Meetups bring together developers, founders, and AI engineers across Mexico to share knowledge, demo projects, and build community around Claude and AI tooling. From lightning talks to hands-on build sessions, each event is a space for the LatAm tech community to connect and ship together.
          </p>
        </section>

      </div>
    </LiquidGlassEffect>
  );
}
