import { NavbarItem } from '@/types/navbar';

export const navbarItems: NavbarItem[] = [
  {
    href: 'https://claude.rich',
    id: 'claude-meetups',
    iconName: 'claude',
    hoverColor: '#d4714e',
    isExternal: true,
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
    href: 'https://x.com/soyrichlira',
    id: 'x',
    iconName: 'x',
    hoverColor: '#000000',
    isExternal: true,
    ariaLabel: 'X',
  },
  {
    href: 'https://github.com/richlira',
    id: 'github',
    iconName: 'github',
    hoverColor: '#ff0000',
    isExternal: true,
  },
  {
    href: 'https://huggingface.co/richlira',
    id: 'huggingface',
    iconName: 'huggingface',
    hoverColor: '#ffd21e',
    isExternal: true,
  },
];
