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
import { faRocket, faUsers } from '@fortawesome/free-solid-svg-icons';
import { navbarItems } from '@/data/navbarData';

const iconMap: Record<string, IconDefinition> = {
  linkedin: faLinkedin,
  twitter: faTwitter,
  instagram: faInstagram,
  github: faGithub,
  rocket: faRocket,
  users: faUsers,
};

export default function Navbar() {
  const internalItems = navbarItems.filter((item) => !item.isExternal);
  const externalItems = navbarItems.filter((item) => item.isExternal);

  const renderItem = (item: (typeof navbarItems)[0]) =>
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
    );

  return (
    <nav className="mt-6 text-center">
      {/* Mobile: single grid with all items */}
      <div className="grid grid-cols-2 justify-items-center gap-4 md:hidden">
        {navbarItems.map(renderItem)}
      </div>

      {/* Desktop: two rows */}
      <div className="hidden md:flex md:flex-col md:items-center md:gap-4">
        <div className="flex justify-center gap-4">
          {internalItems.map(renderItem)}
        </div>
        <div className="flex justify-center gap-4">
          {externalItems.map(renderItem)}
        </div>
      </div>
    </nav>
  );
}
