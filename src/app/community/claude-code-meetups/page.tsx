import type { Metadata } from 'next';
import Image from 'next/image';
import {
  faMicrophone,
  faUsers,
  faBuilding,
  faGlobe,
  faMapMarkerAlt,
  faCalendarCheck,
  faRoute,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LiquidGlassEffect from '@/components/LiquidGlassEffect';
import FeatureCard from '@/components/products/FeatureCard';
import './meetups.css';

export const metadata: Metadata = {
  title: 'Claude Code Meetups — Claude Ambassador | Rich Lira',
  description:
    'Claude Community Ambassador organizing the Claude Sin Fronteras Tour 2026 across 9 cities in Mexico & USA. 650+ registrations, sold-out events.',
  openGraph: {
    title: 'Claude Code Meetups — Claude Ambassador',
    description:
      'Claude Sin Fronteras Tour 2026 — 9 cities, 2 countries',
    url: 'https://richlira.dev/community/claude-code-meetups',
  },
};

const features = [
  {
    icon: faUsers,
    title: '650+ Registrations & Growing',
    description:
      'First edition sold out at 150 attendees in Mexico City with CTOs, founders, and senior engineers from top companies. Now expanding across 9 cities.',
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

const tourCities = [
  { city: 'Monterrey', date: 'Mar 20', country: 'MX' },
  { city: 'Mexico City', date: 'Mar 21', country: 'MX' },
  { city: 'Mérida', date: 'Mar 24', country: 'MX' },
  { city: 'Cancún', date: 'Mar 26', country: 'MX' },
  { city: 'Colima', date: 'Apr 9', country: 'MX' },
  { city: 'Villahermosa', date: 'Apr 14', country: 'MX' },
  { city: 'Hermosillo', date: 'Apr 16', country: 'MX' },
  { city: 'Stanford', date: 'Apr 21', country: 'US' },
  { city: 'San Francisco', date: 'Apr 23', country: 'US' },
];

const pastEventSpeakers = [
  { name: 'Cesar Mendez', org: 'AWS UG Leader', topic: 'Developer acceleration in the modern era' },
  { name: 'Enrique Diaz', org: 'Google Developer Group', topic: 'Building software products with generative AI' },
  { name: 'Carlos Lara', org: 'Saptiva AI', topic: 'Product engineering with context and MCP' },
  { name: 'Javier Duran Vega', org: 'Globant', topic: 'Intelligent retrieval systems with Claude agents' },
  { name: 'Carolina Acosta', org: '500 Global', topic: 'AI in venture capital' },
  { name: 'Emilio Peña', org: 'Product LatAm', topic: 'Agentic automation workflows' },
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
            Claude Community Ambassador — Organizing the Claude Sin Fronteras Tour 2026
          </p>
          <a
            href="https://claude.com/community/ambassadors"
            target="_blank"
            rel="noopener noreferrer"
            className="ambassador-badge"
          >
            <FontAwesomeIcon icon={faGlobe} style={{ width: 14, height: 14 }} />
            Claude Ambassador Program
          </a>
        </div>

        {/* Features */}
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

        {/* Past Event */}
        <section className="past-event-section">
          <h2 className="section-title">
            <FontAwesomeIcon icon={faCalendarCheck} style={{ width: 18, height: 18 }} />
            First Edition — Mexico City
          </h2>
          <div className="past-event-card">
            <div className="past-event-header">
              <span className="past-event-date">Feb 3, 2026</span>
              <span className="past-event-location">
                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ width: 12, height: 12 }} />
                Ciudad de México
              </span>
            </div>
            <p className="past-event-description">
              Sold-out event with 150+ attendees featuring technical talks, networking dinner, and a live Q&A with Anthropic&apos;s Claude Code team. Six speakers from AWS, Google, Globant, 500 Global, and more.
            </p>
            <div className="speakers-grid">
              {pastEventSpeakers.map((speaker) => (
                <div key={speaker.name} className="speaker-card">
                  <span className="speaker-name">{speaker.name}</span>
                  <span className="speaker-org">{speaker.org}</span>
                  <span className="speaker-topic">{speaker.topic}</span>
                </div>
              ))}
            </div>
            <a
              href="https://luma.com/hi2pfrcy"
              target="_blank"
              rel="noopener noreferrer"
              className="past-event-link"
            >
              View event on Luma
            </a>
          </div>
        </section>

        {/* Tour */}
        <section className="tour-section">
          <h2 className="section-title">
            <FontAwesomeIcon icon={faRoute} style={{ width: 18, height: 18 }} />
            Claude Sin Fronteras Tour 2026
          </h2>
          <p className="tour-tagline">9 cities · 2 countries · La mejor AI no necesita pasaporte</p>
          <div className="tour-grid">
            {tourCities.map((stop) => (
              <div key={stop.city} className="tour-card">
                <span className="tour-city">{stop.city}</span>
                <span className="tour-meta">
                  <span className="tour-date">{stop.date}</span>
                  <span className="tour-country">{stop.country === 'MX' ? '🇲🇽' : '🇺🇸'}</span>
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Description */}
        <section className="privacy-section" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <p style={{ opacity: 0.7, fontSize: '0.95rem', lineHeight: 1.7 }}>
            As a Claude Community Ambassador, I organize meetups, workshops, and hackathons to bring together developers, founders, and AI engineers across Latin America and the US. With support from Anthropic, each event features live demos, lightning talks, and direct access to the Claude Code team — building bridges between LatAm talent and the global AI ecosystem.
          </p>
        </section>

      </div>
    </LiquidGlassEffect>
  );
}
