import type { Metadata } from 'next';
import Image from 'next/image';
import {
  faMicrophone,
  faUsers,
  faBuilding,
  faGlobe,
  faMapMarkerAlt,
  faCalendarDays,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LiquidGlassEffect from '@/components/LiquidGlassEffect';
import FeatureCard from '@/components/products/FeatureCard';
import { communityEvents } from '@/data/communityEvents';
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
              width={120}
              height={120}
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

        {/* Community Events */}
        <section className="events-section">
          <h2 className="section-title">
            <FontAwesomeIcon icon={faCalendarDays} style={{ width: 18, height: 18 }} />
            Claude Community Events
          </h2>
          <p className="events-tagline">Community events and meetups across Mexico and the US</p>
          <div className="event-list">
            {communityEvents.map((event) => (
              <a
                key={event.slug}
                href={event.lumaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="event-row"
              >
                <div className="event-row-main">
                  <Image
                    src={event.cover}
                    alt={`${event.city}: ${event.title}`}
                    width={112}
                    height={112}
                    className="event-cover"
                  />
                  <div className="event-info">
                    <span className="event-city">{event.city}</span>
                    <span className="event-title">{event.title}</span>
                    <span className="event-meta">
                      <span className="event-date">{event.date}</span>
                      <span className="event-country">{event.country === 'MX' ? '🇲🇽' : '🇺🇸'}</span>
                      <span className="event-location">
                        <FontAwesomeIcon icon={faMapMarkerAlt} style={{ width: 10, height: 10 }} />
                        {event.city}
                      </span>
                    </span>
                    {event.description && (
                      <p className="event-description">{event.description}</p>
                    )}
                  </div>
                </div>
                {event.speakers && (
                  <ul className="event-speakers">
                    {event.speakers.map((speaker) => (
                      <li key={speaker.name} className="event-speaker">
                        <FontAwesomeIcon
                          icon={faMicrophone}
                          style={{ width: 10, height: 10 }}
                          className="event-speaker-icon"
                        />
                        <span>
                          <span className="event-speaker-name">{speaker.name}</span>
                          {speaker.org && <span className="event-speaker-org"> · {speaker.org}</span>}
                          {speaker.topic && <span className="event-speaker-topic">: {speaker.topic}</span>}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                <span className="event-luma-link">View on Luma →</span>
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
