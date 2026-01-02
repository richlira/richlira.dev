'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTwitter,
  faInstagram,
  faGithub,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { navbarItems } from '@/data/navbarData';

const iconMap: Record<string, IconDefinition> = {
  linkedin: faLinkedin,
  twitter: faTwitter,
  instagram: faInstagram,
  github: faGithub,
  rocket: faRocket,
};

export default function Navbar() {
  return (
    <nav className="mt-6 text-center grid grid-cols-2 justify-items-center gap-4 md:flex md:justify-center md:flex-wrap">
      {navbarItems.map((item) =>
        item.isExternal ? (
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
        ) : (
          <Link
            key={item.id}
            href={item.href}
            id={item.id}
            aria-label={item.id}
            className={`glass-icon ${item.id}`}
          >
            <FontAwesomeIcon
              icon={iconMap[item.iconName]}
              className="text-4xl relative z-10"
            />
          </Link>
        )
      )}
    </nav>
  );
}
