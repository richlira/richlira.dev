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
    <nav className="mt-6 text-center grid grid-cols-2 justify-items-center gap-4 md:flex md:justify-center md:flex-wrap">
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
            className="text-4xl relative z-10"
          />
        </a>
      ))}
    </nav>
  );
}
