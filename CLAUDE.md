# richlira.dev

Personal site for Rich Lira (Next.js 16 App Router, Tailwind, FontAwesome, static prerender, deployed on Vercel).

## Adding a new community event

1. Add an entry to `src/data/communityEvents.ts` (chronological order). Fields: `slug` (Luma slug), `title`, `city`, `date`, `country` ('MX' | 'US'), `lumaUrl`, `cover`, optional `description` and `speakers[{ name, org?, topic? }]`.
2. Download the event cover from Luma into `public/community/claude-code-meetups/covers/<slug>.png` (square `cover_url` from the event page or the Luma API).
3. Source of truth for events: Rich's hosted events on Luma (luma.com/user/richlira). Do not invent dates or speakers.

## Content rules (hard, apply to all copy)

- No em dashes anywhere. Use periods, commas, colons, or parentheses.
- Never use "Claude Sin Fronteras", "Sin Fronteras", or any "tour" framing. These are Claude community events or meetups.
- Never mention attendee or registration numbers. Highlight companies and speakers instead.
- Rich is Independent. Never list Globant as his employer.
- The page is called "Claude Meetups" (not "Claude Code Meetups"); the URL slug `/community/claude-code-meetups` stays as is to avoid breaking shared links.

Verification before shipping copy changes:

```bash
grep -rni "sin fronteras\|tour\|registrations\|attendees\|sold-out\|globant\|—" src/
```

## Structure notes

- `/community` redirects (308) to `/community/claude-code-meetups` via `next.config.ts`.
- `/products` pages have no nav button but must stay reachable: the App Store privacy policies for Afina AI and MeetingMind live there.
- Home navbar data: `src/data/navbarData.ts`; per-icon hover styles live in `src/app/globals.css` (`.glass-icon.<id>:hover` + `<id>Glow` keyframes).
- Beware the global `a:hover { color: white }` rule in `globals.css`; override `color` on card-style anchors.

## Tooling

- For scraping external sites (Luma, etc.) prefer the Firecrawl CLI; API keys load from `~/.env_keys` (`source ~/.env_keys` first).
