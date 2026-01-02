import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';

interface ProductCardProps {
  name: string;
  tagline: string;
  slug: string;
  icon?: string;
  platform: 'ios' | 'web' | 'cross-platform';
}

export default function ProductCard({
  name,
  tagline,
  slug,
  icon,
  platform,
}: ProductCardProps) {
  const platformLabels = {
    ios: 'iOS',
    web: 'Web',
    'cross-platform': 'Cross-Platform',
  };

  return (
    <Link href={`/products/${slug}`} className="product-card">
      <div className="product-card-icon">
        {icon ? (
          <Image src={icon} alt={`${name} icon`} width={72} height={72} />
        ) : (
          <div className="product-card-icon-placeholder">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <h3>{name}</h3>
      <p>{tagline}</p>
      <span className="product-card-badge">
        {platform === 'ios' && <FontAwesomeIcon icon={faApple} />}
        {platformLabels[platform]}
      </span>
    </Link>
  );
}
