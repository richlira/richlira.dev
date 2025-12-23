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
    <nav className="my-10 text-center">
      {navbarItems.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          id={item.id}
          aria-label={item.id}
          className="inline-block px-4 transition-colors duration-200 hover:drop-shadow-lg"
          style={
            {
              '--hover-color': item.hoverColor,
            } as React.CSSProperties
          }
          onMouseEnter={(e) => {
            e.currentTarget.style.color = item.hoverColor;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '';
          }}
        >
          <FontAwesomeIcon
            icon={iconMap[item.iconName]}
            className="text-5xl max-[414px]:text-4xl max-[325px]:text-2xl"
          />
        </a>
      ))}
    </nav>
  );
}
