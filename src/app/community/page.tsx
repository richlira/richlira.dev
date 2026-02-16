import { faUsers } from '@fortawesome/free-solid-svg-icons';
import CommunityCard from '@/components/community/CommunityCard';

export default function CommunityPage() {
  return (
    <>
      <header className="text-center mb-12">
        <h1 className="text-4xl font-semibold mb-3">Community</h1>
        <p className="text-lg opacity-70">Projects and communities I&apos;m part of</p>
      </header>

      <div className="community-grid">
        <CommunityCard
          name="Claude Code Meetups"
          tagline="Organizing Claude Code meetups in Mexico City & Monterrey"
          slug="claude-code-meetups"
          icon="/community/claude-code-meetups/icon.svg"
          badge="Meetup Host"
          badgeIcon={faUsers}
        />
        <CommunityCard
          name="Cron Quiles"
          tagline="Mexico's tech event calendar aggregator"
          slug="cron-quiles"
        />
      </div>
    </>
  );
}
