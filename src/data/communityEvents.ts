// Source of truth: Rich's hosted events on Luma (luma.com/user/richlira).
// Speakers and descriptions curated from each event's Luma page.

export interface CommunityEventSpeaker {
  name: string;
  org?: string;
  topic?: string;
}

export interface CommunityEvent {
  slug: string;
  title: string;
  city: string;
  date: string;
  country: 'MX' | 'US';
  lumaUrl: string;
  cover: string;
  description?: string;
  speakers?: CommunityEventSpeaker[];
}

const coverPath = (slug: string) =>
  `/community/claude-code-meetups/covers/${slug}.png`;

export const communityEvents: CommunityEvent[] = [
  {
    slug: 'hi2pfrcy',
    title: 'Claude Code Meetup (First Edition)',
    city: 'Mexico City',
    date: 'Feb 3, 2026',
    country: 'MX',
    lumaUrl: 'https://luma.com/hi2pfrcy',
    cover: coverPath('hi2pfrcy'),
    description:
      'Technical talks, networking dinner, and a live Q&A with Anthropic’s Claude Code team.',
    speakers: [
      { name: 'Cesar Mendez', org: 'AWS UG Leader', topic: 'Developer acceleration in the modern era' },
      { name: 'Enrique Diaz', org: 'Google Developer Group', topic: 'Building software products with generative AI' },
      { name: 'Carlos Lara', org: 'Saptiva AI', topic: 'Product engineering with context and MCP' },
      { name: 'Javier Duran Vega', topic: 'Intelligent retrieval systems with Claude agents' },
      { name: 'Carolina Acosta', org: '500 Global', topic: 'AI in venture capital' },
      { name: 'Emilio Peña', org: 'Product LatAm', topic: 'Agentic automation workflows' },
    ],
  },
  {
    slug: 'claudemonterrey',
    title: 'Claude Code for Everyone',
    city: 'Monterrey',
    date: 'Mar 20, 2026',
    country: 'MX',
    lumaUrl: 'https://luma.com/claudemonterrey',
    cover: coverPath('claudemonterrey'),
    description:
      'Technical talks, live demos, and a virtual session with the Anthropic team.',
    speakers: [
      { name: 'Eduardo de la Garza', org: 'Klira AI', topic: 'Becoming a 10x founder using Claude Cowork' },
      { name: 'Ricardo Sandoval', org: 'Klira AI', topic: 'Workflows for Claude Code in a GenAI startup' },
      { name: 'Erick Siller', org: 'Salesforce', topic: 'Extend Claude Code: Skills, Hooks y MCP' },
      { name: 'Rodrigo Benavides', org: 'Danu Analitica', topic: 'Scaling Claude Code with AWS: from prototype to production' },
      { name: 'Gustavo Barrientos', org: 'Ambystech', topic: 'Multi-agent teams en Claude Code' },
    ],
  },
  {
    slug: 'claudemexicocity',
    title: 'Claude Build Day',
    city: 'Mexico City',
    date: 'Mar 21, 2026',
    country: 'MX',
    lumaUrl: 'https://luma.com/claudemexicocity',
    cover: coverPath('claudemexicocity'),
    description:
      'A hands-on building afternoon with two tracks: free building with on-site mentors, and a "Build an Agent in 90 min" challenge with templates and starter repos.',
  },
  {
    slug: 'claudemerida',
    title: 'Claude Code for Everyone',
    city: 'Mérida',
    date: 'Mar 24, 2026',
    country: 'MX',
    lumaUrl: 'https://luma.com/claudemerida',
    cover: coverPath('claudemerida'),
    speakers: [
      { name: 'Anuar Chapur', org: 'The Palace Company', topic: 'Blurred lines: how roles are merging with Claude' },
      { name: 'Mario Soberanis', org: 'Neuraan', topic: 'Agentic Claude engineering con supervisión humana' },
      { name: 'Samuel Servín', org: 'Vilo', topic: 'Claude Cowork + Dispatch: el coworker que contrataste sin saberlo' },
    ],
  },
  {
    slug: 'claudecancun',
    title: 'Claude Code for Everyone',
    city: 'Cancún',
    date: 'Mar 26, 2026',
    country: 'MX',
    lumaUrl: 'https://luma.com/claudecancun',
    cover: coverPath('claudecancun'),
    speakers: [
      { name: 'Maximiliano Rocca', org: 'HomesApp', topic: 'Building a PropTech platform without writing a line of code' },
      { name: 'Ricardo Celaya', org: 'Kolab Ventures', topic: 'Running a venture capital fund with Claude' },
      { name: 'Esteban Gorupicz', org: 'La Bolsa MX', topic: 'Lo que no puedes hacer con la IA' },
      { name: 'Amauri Sotolongo & Gerardo del Real', org: 'Digital Compass', topic: 'Cómo Claude nos cambió la productividad' },
    ],
  },
  {
    slug: 'claudecolima',
    title: 'Claude Code for Everyone',
    city: 'Colima',
    date: 'Apr 9, 2026',
    country: 'MX',
    lumaUrl: 'https://luma.com/claudecolima',
    cover: coverPath('claudecolima'),
    speakers: [
      { name: 'Edson Morfin', org: 'Sr. ML Engineer', topic: 'RAG, agentes y guardrails: los pilares de una app de IA robusta' },
      { name: 'David Padilla Chávez', topic: 'Una breve guía para navegar la era de la IA' },
      { name: 'Mario Alberto Chávez Cárdenas', topic: 'Del prompt al MVP con Claude' },
      { name: 'Carlos Andrés Robles Hernández', topic: 'Building an AI copilot for ports: PortTech in Manzanillo' },
    ],
  },
  {
    slug: 'claudevillahermosa',
    title: 'Claude Code para Todos',
    city: 'Villahermosa',
    date: 'Apr 14, 2026',
    country: 'MX',
    lumaUrl: 'https://luma.com/claudevillahermosa',
    cover: coverPath('claudevillahermosa'),
    speakers: [
      { name: 'Oscar Portela', org: 'Turing MX', topic: 'Inteligencia de datos para la industria petrolera' },
      { name: 'Rodrigo Osorio', org: '6D Consultoría', topic: 'De consultor tradicional a consultor aumentado con Claude' },
      { name: 'Kelvin Perea', org: 'KAI', topic: 'Implementar Claude en tu empresa en menos de 5 días' },
      { name: 'Mariana Reyes', org: 'Stanford', topic: 'Claude Code para llevar tus hackathons al siguiente nivel' },
    ],
  },
  {
    slug: 'claudehermosillo',
    title: 'Claude Code for Everyone',
    city: 'Hermosillo',
    date: 'Apr 16, 2026',
    country: 'MX',
    lumaUrl: 'https://luma.com/claudehermosillo',
    cover: coverPath('claudehermosillo'),
    speakers: [
      { name: 'Altobeli Ramirez', topic: 'I fell in love with the CLI again' },
      { name: 'Jesús Santiago Carrasco', topic: 'CLI vs MCP: where MCP helps and where the CLI still wins' },
      { name: 'Javier Salazar', topic: 'Agentes especializados con guardrails en Claude Code' },
      { name: 'Tadeo Zamora', topic: 'Spec driven development' },
    ],
  },
  {
    slug: 'claudemexicocityfinance',
    title: 'Claude for Finance',
    city: 'Mexico City',
    date: 'Apr 17, 2026',
    country: 'MX',
    lumaUrl: 'https://luma.com/claudemexicocityfinance',
    cover: coverPath('claudemexicocityfinance'),
    speakers: [
      { name: 'Manuel Rábade', org: 'Clara', topic: 'AI-first engineering en Clara' },
      { name: 'Cris Huertas', org: 'Saptiva AI', topic: 'Building and evaluating business cases with Claude' },
      { name: 'Carlos Agüero', org: 'ebitda mx', topic: 'Claude love story: automatizando las finanzas de una pyme' },
      { name: 'Jonathan Olvera', org: 'hiveflow', topic: 'Build for agents: el nuevo paradigma de creación' },
    ],
  },
  {
    slug: 'claudemexicocitylab',
    title: 'Claude Impact Lab',
    city: 'Mexico City',
    date: 'Apr 18, 2026',
    country: 'MX',
    lumaUrl: 'https://luma.com/claudemexicocitylab',
    cover: coverPath('claudemexicocitylab'),
    description:
      'A full-day collaborative lab building apps and agents with Claude Code on Mexico City open government data: mobility, safety, budget, and air quality challenge tracks.',
  },
  {
    slug: 'z5l01ry7',
    title: 'Claude Clinic for Builders',
    city: 'San Francisco',
    date: 'Apr 20, 2026',
    country: 'US',
    lumaUrl: 'https://luma.com/z5l01ry7',
    cover: coverPath('z5l01ry7'),
    description:
      'A builders clinic co-hosted with Olivier Legris (Alter): Claude Code Desktop, Managed Agents, and Opus 4.7, with hands-on help and best practices.',
  },
  {
    slug: 'claudesanfrancisco',
    title: 'Claude Para Todos: La Edición Latina',
    city: 'San Francisco',
    date: 'Apr 22, 2026',
    country: 'US',
    lumaUrl: 'https://luma.com/claudesanfrancisco',
    cover: coverPath('claudesanfrancisco'),
    description:
      'Founders, investors, and builders using Claude to ship real products. An entire evening in Spanish, from San Francisco.',
    speakers: [
      { name: 'Christian Van Der Henst', org: 'Region Cuatro', topic: 'Building Valerie Vending with Claude Code' },
      { name: 'Santiago Zavala', org: '500', topic: 'Claude Code y Cowork dentro de un fondo de inversión' },
      { name: 'Juan Ignacio Caviglia', org: 'Ritual', topic: 'Claude Code para reservas de restaurantes' },
      { name: 'Inés Illarramendi', org: 'Oyster', topic: 'Cero código, cero límites: de cero a producción sin saber programar' },
      { name: 'Carlos Lara', org: 'Saptiva AI', topic: 'Finetuning a model on my desk with Claude and a DGX Spark' },
      { name: 'Irina Vélez', org: 'deltanova.io', topic: 'Cowork: el asistente AI que todo founder necesita' },
    ],
  },
  {
    slug: 'wxlb908s',
    title: 'Claude Workshop for Students',
    city: 'Xalapa',
    date: 'May 29, 2026',
    country: 'MX',
    lumaUrl: 'https://luma.com/wxlb908s',
    cover: coverPath('wxlb908s'),
    description:
      'A workshop for university students: prompting, context engineering, the agentic era, and building software with Claude Code.',
  },
  {
    slug: 'lerwgp43',
    title: 'Claude Meetup for Education',
    city: 'Mexico City',
    date: 'Jun 2, 2026',
    country: 'MX',
    lumaUrl: 'https://luma.com/lerwgp43',
    cover: coverPath('lerwgp43'),
    description:
      'How Anthropic, Platzi, and L&D teams are using Claude to redesign corporate learning, with networking for People and Talent Development leaders.',
    speakers: [
      { name: 'Ricardo Lira', org: 'Claude Ambassador', topic: 'State of Claude' },
      { name: 'Fabiola Gutierrez', org: 'Platzi', topic: 'Cómo Platzi usa Claude internamente y en producto' },
      { name: 'Frederico Bello', org: 'LUCA', topic: 'Transformando la educación K-12 en México con IA' },
    ],
  },
];
