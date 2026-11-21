export const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'philosophy', label: 'Philosophy' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const SITE_CONFIG = {
  name: 'Muhammad Jahanzaib',
  title: 'Muhammad Jahanzaib — Frontend Engineer',
  description:
    'Frontend Engineer building fast, scalable, and maintainable experiences with React, Next.js, React Native, and TypeScript.',
  url: 'https://portfolio-web-mu-kohl.vercel.app/',
  email: 'm.jahanzaibjameel@gmail.com',
  location: 'Hyderabad, Sindh, Pakistan',
  github: 'https://github.com/JahanzaibJameel',
  linkedin: 'https://www.linkedin.com/in/muhammad-jahanzaib-khanzada-9029852a3/',
  resume: '/Muhammad_Jahanzaib_Resume_2026.pdf',
};

export const heroData = {
  eyebrow: 'Engineer • Designer • Builder',
  headline: 'I turn product complexity into calm, high-performance experiences.',
  subheading:
    'Frontend Engineer focused on architecture, pixel-level polish, and product thinking. I design interfaces that feel premium, load fast, and scale with real product needs.',
  brand: 'Product-first frontend engineer crafting premium experiences for modern digital products.',
  pillars: ['React', 'Next.js', 'TypeScript', 'Design systems', 'Motion', 'Product UX'],
};

export const philosophyData = {
  intro: 'Performance is part of design.',
  lines: [
    'Architecture enables creativity.',
    'Interfaces should feel as good as they function.',
    'Complex engineering should create simple experiences.',
  ],
  cards: [
    {
      title: 'Systems thinking',
      body: 'I design composable interfaces and scalable patterns so product teams can move quickly without sacrificing clarity.',
    },
    {
      title: 'Performance craft',
      body: 'Fast loading, thoughtful motion, and lean component structure are not extras—they are core product decisions.',
    },
    {
      title: 'Human-centered UX',
      body: 'Every interaction should feel purposeful, grounded in user intent, and confident without overwhelming the experience.',
    },
  ],
};

export const aboutData = {
  mission:
    'I design and engineer interfaces that balance technical depth with emotional clarity. My work is centered on performance, accessibility, product thinking, and interface systems that scale beyond a single feature.',
  story:
    "I'm a Frontend Engineer with hands-on experience in React, Next.js, React Native, and TypeScript. I build reusable UI systems, data-driven interfaces, and product experiences that feel intuitive while staying maintainable and performant. My focus is on turning real-world product constraints into polished digital experiences.",
  principles: [
    'Performance is part of design.',
    'Architecture enables creativity.',
    'Interfaces should feel as good as they function.',
    'Engineering should make complexity disappear.',
  ],
  timeline: [
    { year: '2024', event: 'Started building production-facing frontend products at Apprex Systems' },
    { year: '2025', event: 'Expanded into modern React/Next.js architecture, mobile product experiences, and polished UI systems' },
  ],
  stats: {
    projects: '5+',
    years: '2+',
    focus: 'Product UI',
  },
};

export const storyNarrative = [
  {
    index: '01',
    title: 'Observe the friction',
    summary: 'I study how products feel under pressure — the rough edges, the false complexity, and the moments where users hesitate.',
    detail:
      'The best interfaces rarely begin with visual flair. They begin with understanding where real product friction shows up and how clear systems reduce it.',
  },
  {
    index: '02',
    title: 'Structure the complexity',
    summary: 'I translate messy requirements into composable systems, readable flows, and resilient frontend architecture that can evolve without breaking trust.',
    detail:
      'Strong product design is not just visual polish. It is the deliberate choice of patterns, hierarchy, and information design that makes the experience feel calm at scale.',
  },
  {
    index: '03',
    title: 'Deliver the final rhythm',
    summary: 'I sharpen transitions, interactions, and product storytelling until the interface feels premium, intentional, and unmistakably human.',
    detail:
      'The last phase is where engineering and editorial taste meet: refined motion, measured contrast, and real clarity in every interaction.',
  },
];

export const skills = [
  {
    category: 'Frontend Engineering',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Design Systems'],
  },
  {
    category: 'Mobile Product Development',
    items: ['React Native', 'Expo', 'Native UI Patterns', 'Cross-platform Build Flows' , 'CLI'],
  },
  {
    category: 'State & Data',
    items: ['Zustand', 'TanStack Query', 'REST APIs', 'Local Persistence', 'Offline-ready UIs'],
  },
  {
    category: 'Motion & Experience Design',
    items: ['Framer Motion', 'Interaction Design', 'Responsive Layouts', 'Scroll Storytelling'],
  },
  {
    category: 'Tooling & Workflow',
    items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Testing & QA'],
  },
];

export const projects = [
  {
    title: 'Frontend Nexus',
    slug: 'frontend-nexus',
    description:
      'A frontend reference platform covering browser APIs, design patterns, and practical implementation examples for modern web engineering.',
    longDescription:
      'A broad frontend engineering playground built to help developers explore patterns, browser capability, and reusable implementation strategies for today’s web experiences.',
    challenge:
      'Turning a large amount of frontend knowledge into an organized, navigable experience without creating a cluttered or overwhelming interface.',
    approach:
      'The product uses structured content grouping, reusable UI patterns, and a clear editorial rhythm to surface technical depth without sacrificing usability.',
    outcome:
      'The result is a highly browsable reference experience that balances knowledge density with readability and quick access to practical patterns.',
    highlights: ['browser APIs', 'design systems thinking', 'reference-first UX'],
    image: '/project-1.png',
    demo: 'https://frontend-nexus-omega.vercel.app/',
    repo: 'https://github.com/JahanzaibJameel/Frontend-Nexus',
    tech: ['HTML', 'CSS', 'JavaScript', 'PWA', 'Browser APIs'],
    metrics: [
      { value: '47', label: 'Topics' },
      { value: '28', label: 'Pages' },
      { value: '27', label: 'APIs' },
    ],
    period: '2026 — Present',
    role: 'Frontend Engineer',
  },
  {
    title: 'CryptoVault Pro',
    slug: 'cryptovault-pro',
    description:
      'A production-style crypto dashboard designed around reactive architecture, typed interfaces, offline resilience, and maintainable frontend structure.',
    longDescription:
      'A structured investment dashboard concept with Angular 21, Signals, RxJS, and TypeScript, emphasizing maintainability, responsive state flow, and progressive offline behavior.',
    challenge:
      'Designing a data-heavy product experience that remains readable, responsive, and maintainable across dynamic state updates and offline scenarios.',
    approach:
      'The interface leans on typed state, signal-driven updates, and a modular structure that makes the product easier to reason about over time.',
    outcome:
      'The experience presents complex financial data in a calmer way while still supporting realistic, production-oriented frontend architecture decisions.',
    highlights: ['reactive data flow', 'offline-ready patterns', 'typed UI architecture'],
    image: '/project-2.png',
    demo: 'https://cryptovault-pro12.netlify.app/',
    repo: 'https://github.com/JahanzaibJameel/CryptoVault-Pro',
    tech: ['Angular 21', 'TypeScript 5.9', 'RxJS', 'SCSS', 'PWA', 'IndexedDB'],
    metrics: [
      { value: 'Offline', label: 'Ready' },
      { value: 'Type-safe', label: 'State' },
      { value: 'Reactive', label: 'Flows' },
    ],
    period: '2026 — Present',
    role: 'Frontend Engineer',
  },
  {
    title: 'Lumora Photo Gallery',
    slug: 'lumora-photo-gallery',
    description:
      'A mobile-first photo gallery application focused on local persistence, smooth navigation, efficient rendering, and reusable component design.',
    longDescription:
      'A React Native gallery experience built with Expo, MMKV, FlashList, and TypeScript, optimizing for fast interactions and a clean mobile user journey.',
    challenge:
      'Balancing rich photo browsing with performance, responsive transitions, and local-first data access inside a mobile interface.',
    approach:
      'The app emphasizes efficient list rendering, strong mobile ergonomics, and storage patterns that keep interactions fast and reliable.',
    outcome:
      'The design creates a calmer, more tactile browsing flow that prioritizes speed and usability while remaining production-minded.',
    highlights: ['fast list rendering', 'local-first storage', 'mobile-first UX'],
    image: '/project-3.png',
    demo: 'https://lumora-photogallery-app.netlify.app/',
    repo: 'https://github.com/JahanzaibJameel/Lumora-photogallery-App',
    tech: ['React Native', 'Expo SDK 54', 'TypeScript', 'MMKV', 'FlashList'],
    metrics: [
      { value: 'Fast', label: 'Lists' },
      { value: 'Local', label: 'Storage' },
      { value: 'Mobile', label: 'UX' },
    ],
    period: '2026 — Present',
    role: 'Frontend Engineer',
  },
  {
    title: 'Messaging Application',
    slug: 'messaging-app',
    description:
      'A messaging app concept built around clean state architecture, mobile-friendly interface patterns, and scalable frontend engineering decisions.',
    longDescription:
      'A React Native messaging experience using Zustand, MMKV, and Jest to emphasize maintainable state coordination, local persistence, and app-level architecture clarity.',
    challenge:
      'Keeping a real-time-style app experience organized and maintainable while balancing clean state management and local persistence.',
    approach:
      'The architecture favors clear separation of data flows, minimalist mobile interactions, and testable UI logic to reduce complexity at scale.',
    outcome:
      'The app demonstrates a thoughtful balance between product usability and engineering discipline without overbuilding the UI.',
    highlights: ['state architecture', 'local persistence', 'testability'],
    image: '/project-4.png',
    demo: 'https://messaging-application1.netlify.app/',
    repo: 'https://github.com/JahanzaibJameel/Messaging-Application',
    tech: ['React Native', 'Expo', 'TypeScript', 'Zustand', 'MMKV', 'Jest'],
    metrics: [
      { value: 'State', label: 'Clean' },
      { value: 'Local', label: 'Persistence' },
      { value: 'Testable', label: 'Flow' },
    ],
    period: '2026 — Present',
    role: 'Frontend Engineer',
  },
];

export const experience = [
  {
    company: 'Apprex Systems',
    role: 'Frontend Engineer',
    period: 'January 2024 — Present',
    location: 'Hyderabad, Pakistan / Remote',
    description:
      'Building product interfaces for web and mobile, creating reusable UI systems, integrating APIs, and improving frontend architecture across real-world application flows.',
    achievements: [
      'Developing production-oriented interfaces with React and Next.js',
      'Creating reusable, maintainable frontend components for product work',
      'Designing responsive experiences that prioritize speed and clarity',
      'Combining engineering rigor with product-focused visual decisions',
    ],
    tech: ['React', 'Next.js', 'React Native', 'TypeScript', 'REST APIs', 'Zustand', 'TanStack Query'],
  },
];

export const education = [
  {
    institution: 'Eagle House Higher Secondary School',
    degree: 'Class 12 (Science / Pre-Engineering)',
    period: '2024 — Present',
    location: 'Hyderabad, Sindh, Pakistan',
  },
];
