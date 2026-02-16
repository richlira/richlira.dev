import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface CommunityCardProps {
  name: string;
  tagline: string;
  slug: string;
  icon?: string;
  badge?: string;
  badgeIcon?: IconDefinition;
}

export default function CommunityCard({
  name,
  tagline,
  slug,
  icon,
  badge = 'Open Source',
  badgeIcon = faCodeBranch,
}: CommunityCardProps) {
  return (
    <Link href={`/community/${slug}`} className="community-card">
      <div className="community-card-icon">
        {icon ? (
          <Image src={icon} alt={`${name} icon`} width={72} height={72} />
        ) : (
          <div className="community-card-icon-placeholder">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <h3>{name}</h3>
      <p>{tagline}</p>
      <span className="community-card-badge">
        <FontAwesomeIcon icon={badgeIcon} />
        {badge}
      </span>
    </Link>
  );
}
