import type { Metadata } from 'next';
import Image from 'next/image';
import {
  faMicrophone,
  faUsers,
  faBuilding,
  faGlobe,
  faMapMarkerAlt,
  faCalendarCheck,
  faCalendarDays,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LiquidGlassEffect from '@/components/LiquidGlassEffect';
import FeatureCard from '@/components/products/FeatureCard';
import './meetups.css';

export const metadata: Metadata = {
  title: 'Claude Meetups, Claude Ambassador | Rich Lira',
  description:
    'Claude Community Ambassador organizing Claude community events and meetups across Mexico and the US. Talks, demos, and networking with top companies and speakers.',
  openGraph: {
    title: 'Claude Meetups, Claude Ambassador',
    description:
      'Claude community events and meetups across Mexico and the US',
    url: 'https://richlira.dev/community/claude-code-meetups',
  },
};

const features = [
  {
    icon: faUsers,
    title: 'Top Companies & Speakers',
    description:
      'CTOs, founders, and senior engineers from companies like AWS, Google, 500 Global, and Saptiva AI sharing how they build with Claude.',
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

// Source of truth: Rich's hosted events on Luma (luma.com/user/richlira)
const communityEvents: {
  name: string;
  date: string;
  country: 'MX' | 'US';
  href: string;
}[] = [
  { name: 'Monterrey', date: 'Mar 20', country: 'MX', href: 'https://luma.com/claudemonterrey' },
  { name: 'Mexico City: Build Day', date: 'Mar 21', country: 'MX', href: 'https://luma.com/claudemexicocity' },
  { name: 'Mérida', date: 'Mar 24', country: 'MX', href: 'https://luma.com/claudemerida' },
  { name: 'Cancún', date: 'Mar 26', country: 'MX', href: 'https://luma.com/claudecancun' },
  { name: 'Colima', date: 'Apr 9', country: 'MX', href: 'https://luma.com/claudecolima' },
  { name: 'Villahermosa', date: 'Apr 14', country: 'MX', href: 'https://luma.com/claudevillahermosa' },
  { name: 'Hermosillo', date: 'Apr 16', country: 'MX', href: 'https://luma.com/claudehermosillo' },
  { name: 'Claude for Finance CDMX', date: 'Apr 17', country: 'MX', href: 'https://luma.com/claudemexicocityfinance' },
  { name: 'Claude Impact Lab CDMX', date: 'Apr 18', country: 'MX', href: 'https://luma.com/claudemexicocitylab' },
  { name: 'Claude Clinic SF', date: 'Apr 20', country: 'US', href: 'https://luma.com/z5l01ry7' },
  { name: 'Claude Para Todos SF', date: 'Apr 22', country: 'US', href: 'https://luma.com/claudesanfrancisco' },
  { name: 'Xalapa: Workshop for Students', date: 'May 29', country: 'MX', href: 'https://luma.com/wxlb908s' },
  { name: 'Claude Meetup for Education CDMX', date: 'Jun 2', country: 'MX', href: 'https://luma.com/lerwgp43' },
];

const pastEventSpeakers: { name: string; org?: string; topic: string }[] = [
  { name: 'Cesar Mendez', org: 'AWS UG Leader', topic: 'Developer acceleration in the modern era' },
  { name: 'Enrique Diaz', org: 'Google Developer Group', topic: 'Building software products with generative AI' },
  { name: 'Carlos Lara', org: 'Saptiva AI', topic: 'Product engineering with context and MCP' },
  { name: 'Javier Duran Vega', topic: 'Intelligent retrieval systems with Claude agents' },
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
              alt="Claude Meetups"
              width={100}
              height={100}
            />
          </div>
          <h1>Claude Meetups</h1>
          <p className="community-hero-tagline">
            Claude Community Ambassador organizing Claude community events across Mexico and the US
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
            First Edition: Mexico City
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
              Technical talks, networking dinner, and a live Q&A with Anthropic&apos;s Claude Code team. Six speakers from AWS, Google, 500 Global, Saptiva AI, and more.
            </p>
            <div className="speakers-grid">
              {pastEventSpeakers.map((speaker) => (
                <div key={speaker.name} className="speaker-card">
                  <span className="speaker-name">{speaker.name}</span>
                  {speaker.org && <span className="speaker-org">{speaker.org}</span>}
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

        {/* Community Events */}
        <section className="events-section">
          <h2 className="section-title">
            <FontAwesomeIcon icon={faCalendarDays} style={{ width: 18, height: 18 }} />
            Claude Community Events
          </h2>
          <p className="events-tagline">Community events and meetups across Mexico and the US</p>
          <div className="events-grid">
            {communityEvents.map((event) => (
              <a
                key={event.name}
                href={event.href}
                target="_blank"
                rel="noopener noreferrer"
                className="events-card"
              >
                <span className="events-city">{event.name}</span>
                <span className="events-meta">
                  <span className="events-date">{event.date}</span>
                  <span className="events-country">{event.country === 'MX' ? '🇲🇽' : '🇺🇸'}</span>
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Description */}
        <section className="privacy-section" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <p style={{ opacity: 0.7, fontSize: '0.95rem', lineHeight: 1.7 }}>
            As a Claude Community Ambassador, I organize meetups, workshops, and hackathons to bring together developers, founders, and AI engineers across Latin America and the US. With support from Anthropic, each event features live demos, lightning talks, and direct access to the Claude Code team, building bridges between LatAm talent and the global AI ecosystem.
          </p>
        </section>

      </div>
    </LiquidGlassEffect>
  );
}
