'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTwitter,
  faInstagram,
  faGithub,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { navbarItems } from '@/data/navbarData';

const iconMap: Record<string, IconDefinition> = {
  linkedin: faLinkedin,
  twitter: faTwitter,
  instagram: faInstagram,
  github: faGithub,
};

export default function Navbar() {
  return (
    <nav className="mt-6 text-center flex justify-center flex-wrap gap-4">
      {navbarItems.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          id={item.id}
          aria-label={item.id}
          className={`glass-icon ${item.id}`}
        >
          <FontAwesomeIcon
            icon={iconMap[item.iconName]}
            className="text-xl relative z-10"
          />
        </a>
      ))}
    </nav>
  );
}
