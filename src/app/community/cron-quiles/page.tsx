import type { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faCalendarDays,
  faUsers,
  faRss,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import LiquidGlassEffect from '@/components/LiquidGlassEffect';
import FeatureCard from '@/components/products/FeatureCard';

export const metadata: Metadata = {
  title: 'Cron Quiles - Mexico Tech Events Calendar | Rich Lira',
  description:
    'A calendar aggregator for Mexico tech community events. Centralizes ICS feeds from Meetup, Luma, and Google Calendar.',
  openGraph: {
    title: 'Cron Quiles - Mexico Tech Events Calendar',
    description: 'Centralizing Mexico tech community events in one calendar',
    url: 'https://richlira.dev/community/cron-quiles',
  },
};

const features = [
  {
    icon: faCalendarDays,
    title: 'Calendar Aggregation',
    description:
      'Combines ICS feeds from Meetup, Luma, and Google Calendar into a single unified calendar.',
  },
  {
    icon: faUsers,
    title: 'Community Driven',
    description:
      'Open source and MIT licensed. Anyone can contribute events or suggest new calendar sources.',
  },
  {
    icon: faRss,
    title: 'Subscribe via ICS',
    description:
      'Add to your favorite calendar app with a single ICS URL. Works with Google Calendar, Apple Calendar, and more.',
  },
  {
    icon: faGlobe,
    title: 'Always Updated',
    description:
      'Automated via GitHub Actions. Events are refreshed regularly so you never miss a tech meetup.',
  },
];

export default function CronQuilesPage() {
  return (
    <LiquidGlassEffect>
      <div className="max-w-2xl w-full">
        {/* Hero */}
        <div className="community-hero">
          <div className="community-hero-icon">
            <div className="community-card-icon-placeholder">CQ</div>
          </div>
          <h1>Cron Quiles</h1>
          <p className="community-hero-tagline">
            Mexico&apos;s tech event calendar aggregator
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

        {/* CTAs */}
        <div className="cta-section">
          <a
            href="https://shellaquiles.github.io/cron-quiles"
            target="_blank"
            rel="noopener noreferrer"
            className="community-cta-primary"
          >
            <FontAwesomeIcon icon={faCalendarDays} />
            View Calendar
          </a>
          <a
            href="https://github.com/shellaquiles/cron-quiles"
            target="_blank"
            rel="noopener noreferrer"
            className="community-cta-secondary"
          >
            <FontAwesomeIcon icon={faGithub} />
            GitHub Repo
          </a>
        </div>

        {/* Footer */}
        <footer className="community-footer">
          <p>Open Source - MIT License</p>
          <p>Maintained by the Mexico Tech Community</p>
        </footer>
      </div>
    </LiquidGlassEffect>
  );
}
