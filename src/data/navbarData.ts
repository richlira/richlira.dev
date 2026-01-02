import { NavbarItem } from '@/types/navbar';

export const navbarItems: NavbarItem[] = [
  {
    href: '/products',
    id: 'products',
    iconName: 'rocket',
    hoverColor: '#0d9488',
    isExternal: false,
  },
  {
    href: '/community',
    id: 'community',
    iconName: 'users',
    hoverColor: '#8b5cf6',
    isExternal: false,
  },
  {
    href: 'https://www.linkedin.com/in/ricardolira/',
    id: 'linkedin',
    iconName: 'linkedin',
    hoverColor: '#0a66c2',
    isExternal: true,
  },
  {
    href: 'https://www.instagram.com/richlira/',
    id: 'instagram',
    iconName: 'instagram',
    hoverColor: '#f84dd0',
    isExternal: true,
  },
  {
    href: 'https://twitter.com/soyrichlira',
    id: 'twitter',
    iconName: 'twitter',
    hoverColor: '#006eff',
    isExternal: true,
  },
  {
    href: 'https://github.com/richlira',
    id: 'github',
    iconName: 'github',
    hoverColor: '#ff0000',
    isExternal: true,
  },
];
