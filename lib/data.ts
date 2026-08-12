export const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'open-source', label: 'Open Source' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export const SITE_CONFIG = {
  name: 'Muhammad Jahanzaib',
  title: 'Muhammad Jahanzaib | Senior Frontend Engineer',
  description:
    'Senior frontend engineer building exceptional digital products with React, Next.js, and TypeScript. I craft high-performance experiences that scale.',
  url: 'https://jahanzaib.dev',
  email: 'm.jahanzaibjameel@gmail.com',
  location: 'Remote',
};

export const PERSONAL_INFO = {
  name: 'Muhammad Jahanzaib',
  title: 'Senior Frontend Engineer',
  tagline: 'I build digital products that scale.',
  email: 'm.jahanzaibjameel@gmail.com',
  location: 'Remote',
};

export const heroData = {
  headline: 'I build digital products.',
  subheading:
    'Senior frontend engineer specializing in React, Next.js, and React Native. I craft high-performance experiences with a focus on scalability, accessibility, and elegant architecture.',
  metrics: [
    { value: '100K+', label: 'Users served' },
    { value: '99', label: 'Lighthouse score' },
    { value: '2.5s', label: 'LCP' },
    { value: '0', label: 'Console errors' },
  ],
};

export const aboutData = {
  mission:
    'I build systems that scale gracefully. My approach combines deep technical expertise with a designer\'s eye for detail, ensuring every pixel serves a purpose.',
  story:
    'With over 5 years of experience, I\'ve helped startups and enterprises ship high-leverage products. My expertise spans: React, Next.js, React Native, TypeScript, Node.js, and modern CSS solutions.',
  timeline: [
    { year: '2021', event: 'Started my development career' },
    { year: '2022', event: 'Built and shipped a React Native app with 500K+ downloads' },
    { year: '2023', event: 'Led migration to Next.js App Router, reducing bundle size by 40%' },
    { year: '2024', event: 'Open-sourced a design system used by 20+ teams' },
    { year: '2025', event: 'Published technical articles reaching 100K+ developers' },
  ],
  stats: {
    projects: 15,
    users: '100K+',
    years: 5,
    awards: 3,
  },
};

export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Framer Motion', level: 90 },
    ],
  },
  {
    category: 'Mobile',
    items: [
      { name: 'React Native', level: 85 },
      { name: 'Expo', level: 80 },
      { name: 'Redux Toolkit', level: 85 },
      { name: 'Zustand', level: 90 },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', level: 95 },
      { name: 'Vercel', level: 90 },
      { name: 'AWS', level: 80 },
      { name: 'Docker', level: 85 },
      { name: 'Figma', level: 85 },
    ],
  },
];

export const projects = [
  {
    title: 'Design System Framework',
    slug: 'design-system-framework',
    description:
      'A comprehensive design system powering multiple products at scale.',
    longDescription:
      'Built a production-grade design system used across 20+ internal products. Implemented token management, automated documentation, and cross-platform consistency. Reduced design-to-development handoff time by 60%.',
    image: '/project-1.png',
    demo: 'https://designsystem.example.com',
    repo: 'https://github.com/JahanzaibJameel/design-system',
    tech: ['React', 'Storybook', 'Figma API', 'TypeScript', 'Tailwind'],
    metrics: [
      { value: '60%', label: 'Faster handoff' },
      { value: '20+', label: 'Products using' },
      { value: '0.5s', label: 'Component load' },
    ],
    period: 'Q1 2024 - Q3 2024',
    role: 'Lead Frontend Engineer',
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    slug: 'ai-analytics-dashboard',
    description:
      'A real-time analytics platform with predictive insights.',
    longDescription:
      'Developed a full-stack analytics solution with real-time data processing, AI-powered predictions, and interactive visualizations. Achieved 99 Lighthouse score and sub-2s LCP.',
    image: '/project-2.png',
    demo: 'https://analytics.example.com',
    repo: 'https://github.com/JahanzaibJameel/analytics-dashboard',
    tech: ['Next.js', 'React', 'D3.js', 'Python', 'PostgreSQL', 'Redis'],
    metrics: [
      { value: '99', label: 'Lighthouse score' },
      { value: '2.1s', label: 'Avg LCP' },
      { value: '10M+', label: 'Events/day' },
    ],
    period: 'Q2 2024 - Q4 2024',
    role: 'Frontend Architect',
  },
  {
    title: 'Mobile-First E-commerce App',
    slug: 'ecommerce-react-native',
    description:
      'A cross-platform e-commerce application with offline-first capabilities.',
    longDescription:
      'Built a React Native e-commerce app with 500K+ downloads. Implemented offline-first architecture, push notifications, and native-like performance.',
    image: '/project-3.png',
    demo: 'https://apps.apple.com/app/id123456789',
    repo: 'https://github.com/JahanzaibJameel/ecommerce-app',
    tech: ['React Native', 'Expo', 'Redux', 'GraphQL', 'Firebase'],
    metrics: [
      { value: '500K+', label: 'Downloads' },
      { value: '4.9', label: 'Rating' },
      { value: '60fps', label: 'Framerate' },
    ],
    period: 'Q3 2023 - Q2 2024',
    role: 'React Native Developer',
  },
];

export const experience = [
  {
    company: 'Apprex Systems',
    role: 'Senior Frontend Engineer',
    period: '2024 - Present',
    location: 'Remote',
    description:
      'Lead frontend engineering for enterprise-scale applications. Architecture design, team mentoring, and performance optimization.',
    achievements: [
      'Reduced bundle size by 40% through code splitting and tree-shaking',
      'Improved Core Web Vitals scores across all products',
      'Built reusable component library with 100+ components',
      'Mentored 5 junior developers to senior roles',
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'GraphQL'],
  },
  {
    company: 'TechStart Inc.',
    role: 'Frontend Engineer',
    period: '2022 - 2024',
    location: 'San Francisco, CA',
    description:
      'Built customer-facing products with a focus on performance and user experience.',
    achievements: [
      'Launched e-commerce platform serving 1M+ users',
      'Reduced page load time by 50%',
      'Implemented automated testing with 90% coverage',
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Jest', 'Cypress'],
  },
  {
    company: 'StartupXYZ',
    role: 'Junior Frontend Developer',
    period: '2021 - 2022',
    location: 'Austin, TX',
    description:
      'Started my development career building modern web applications with React and Next.js.',
    achievements: [
      'Built MVP that acquired first 10K users',
      'Created design system adopted company-wide',
      'Contributed to open-source projects',
    ],
    tech: ['React', 'Next.js', 'CSS-in-JS', 'Firebase'],
  },
];

export const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechStart Inc.',
    quote:
      'Muhammad led our frontend rewrite using Next.js and TypeScript. The result was a 60% reduction in bundle size and flawless performance.',
    avatar: '/testimonial-1.png',
  },
  {
    name: 'Michael Chen',
    role: 'Product Lead, Apprex Systems',
    quote:
      'Working with Muhammad transformed our product delivery. He takes complex problems and makes them elegantly simple.',
    avatar: '/testimonial-2.png',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Engineering Manager, DigitalFlow',
    quote:
      'Muhammad built our React Native app that now serves 500K+ users. His attention to detail is exceptional.',
    avatar: '/testimonial-3.png',
  },
  {
    name: 'David Kim',
    role: 'Founder, StartupXYZ',
    quote:
      'Muhammad joined as a junior and grew into one of our most valuable engineers. He taught our team better patterns.',
    avatar: '/testimonial-4.png',
  },
];

export const achievements = [
  {
    year: 2024,
    title: 'Featured Contributor',
    organization: 'Next.js Community',
    description: 'Contributed official examples and documentation improvements',
  },
  {
    year: 2023,
    title: 'Open Source Award',
    organization: 'GitHub Stars',
    description: 'Design system reached 1K stars',
  },
  {
    year: 2022,
    title: 'Best Hackathon Project',
    organization: 'TechCrunch Disrupt',
    description: 'AI-Powered Productivity Tool',
  },
];

export const openSource = [
  {
    name: 'Design System',
    description: 'A comprehensive design system for React applications',
    url: 'https://github.com/JahanzaibJameel/design-system',
    stars: 1240,
    language: 'TypeScript',
  },
  {
    name: 'React Components',
    description: 'A collection of accessible UI components',
    url: 'https://github.com/JahanzaibJameel/react-components',
    stars: 850,
    language: 'JavaScript',
  },
  {
    name: 'Portfolio Starter',
    description: 'A modern portfolio starter in Next.js',
    url: 'https://github.com/JahanzaibJameel/portfolio-starter',
    stars: 520,
    language: 'TypeScript',
  },
];

export const calendarData = [
  { year: 2021, week: 36, count: 5 },
  { year: 2021, week: 37, count: 8 },
  { year: 2021, week: 38, count: 12 },
  { year: 2021, week: 39, count: 15 },
  { year: 2021, week: 40, count: 10 },
  { year: 2021, week: 41, count: 7 },
  { year: 2021, week: 42, count: 3 },
  { year: 2021, week: 43, count: 2 },
  { year: 2021, week: 44, count: 1 },
  { year: 2021, week: 45, count: 8 },
  { year: 2021, week: 46, count: 14 },
  { year: 2021, week: 47, count: 18 },
  { year: 2021, week: 48, count: 22 },
  { year: 2021, week: 49, count: 16 },
  { year: 2021, week: 50, count: 12 },
  { year: 2021, week: 51, count: 9 },
  { year: 2021, week: 52, count: 6 },
  { year: 2022, week: 1, count: 4 },
  { year: 2022, week: 2, count: 5 },
  { year: 2022, week: 3, count: 7 },
  { year: 2022, week: 4, count: 11 },
  { year: 2022, week: 5, count: 13 },
  { year: 2022, week: 6, count: 15 },
  { year: 2022, week: 7, count: 18 },
  { year: 2022, week: 8, count: 22 },
  { year: 2022, week: 9, count: 25 },
  { year: 2022, week: 10, count: 28 },
  { year: 2022, week: 11, count: 31 },
  { year: 2022, week: 12, count: 35 },
  { year: 2022, week: 13, count: 38 },
  { year: 2022, week: 14, count: 42 },
  { year: 2022, week: 15, count: 45 },
  { year: 2022, week: 16, count: 48 },
  { year: 2022, week: 17, count: 52 },
  { year: 2022, week: 18, count: 55 },
  { year: 2022, week: 19, count: 58 },
  { year: 2022, week: 20, count: 62 },
  { year: 2022, week: 21, count: 65 },
];