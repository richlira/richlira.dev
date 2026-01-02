import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface FeatureCardProps {
  icon: IconDefinition;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="feature-card">
      <div className="feature-card-icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
