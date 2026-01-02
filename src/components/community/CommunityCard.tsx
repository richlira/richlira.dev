import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

interface CommunityCardProps {
  name: string;
  tagline: string;
  slug: string;
  icon?: string;
}

export default function CommunityCard({
  name,
  tagline,
  slug,
  icon,
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
        <FontAwesomeIcon icon={faCodeBranch} />
        Open Source
      </span>
    </Link>
  );
}
