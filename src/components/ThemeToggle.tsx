'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);
  const [mounted, setMounted] = useState(false);

  // Get current system theme from CSS media query
  const getSystemTheme = (): Theme => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  };

  useEffect(() => {
    setMounted(true);

    // Check if user toggled theme in THIS session only (sessionStorage)
    const sessionTheme = sessionStorage.getItem('theme');

    if (sessionTheme === 'light' || sessionTheme === 'dark') {
      // User toggled theme in this session, apply it
      setTheme(sessionTheme);
      document.documentElement.setAttribute('data-theme', sessionTheme);
    } else {
      // No session override: let CSS handle it via prefers-color-scheme
      // Just sync React state with system theme for the toggle icon
      const systemTheme = getSystemTheme();
      setTheme(systemTheme);
      // Ensure no data-theme attribute - let CSS media query handle it
      document.documentElement.removeAttribute('data-theme');
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't manually toggled in this session
      const sessionOverride = sessionStorage.getItem('theme');
      if (!sessionOverride) {
        const newTheme: Theme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
        // Remove data-theme to let CSS handle it
        document.documentElement.removeAttribute('data-theme');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    const currentTheme = theme || getSystemTheme();
    const newTheme: Theme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    // Save to sessionStorage (only persists for this browser session/tab)
    sessionStorage.setItem('theme', newTheme);
    // Apply via data-theme attribute for manual override
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  if (!mounted || theme === null) return null;

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )}
    </button>
  );
}
