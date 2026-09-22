export const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
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
    'Frontend Engineer building fast, scalable, and maintainable web and mobile experiences with React, Next.js, React Native, and TypeScript.',
  url: 'https://muhammadjahanzaibdev.netlify.app/',
  email: 'm.jahanzaibjameel@gmail.com',
  location: 'Hyderabad, Sindh, Pakistan',
};

export const PERSONAL_INFO = {
  name: 'Muhammad Jahanzaib',
  title: 'Frontend Engineer',
  tagline: 'I build fast, scalable, and maintainable interfaces for web and mobile.',
  email: 'm.jahanzaibjameel@gmail.com',
  location: 'Hyderabad, Sindh, Pakistan',
};

export const heroData = {
  headline: 'I build fast, scalable, and maintainable interfaces.',
  subheading:
    'Frontend Engineer specializing in React, Next.js, and React Native. I craft performant experiences with a focus on scalability, accessibility, and clean architecture.',
 
};

export const aboutData = {
  mission:
    "I build fast, scalable, and maintainable web and mobile interfaces. My approach combines modern frontend expertise with a designer's eye for detail, ensuring every pixel serves a purpose.",
  story:
    "I'm a Frontend Engineer with production experience in React, Next.js, and React Native. I enjoy building real products, reusable UI systems, API integrations, and modern development workflows. I'm currently continuing my academic journey while building production-oriented applications.",
  timeline: [
    { year: '2024', event: 'Started as Frontend Engineer at Apprex Systems' },
    { year: '2025', event: 'Continuing to build production-focused applications' },
  ],
  stats: {
    projects: '15+',   
    years: '2+',
  },
};

export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'Tailwind CSS', level: 95 },
    ],
  },
  {
    category: 'Mobile',
    items: [
      { name: 'React Native', level: 90 },
      { name: 'Expo', level: 95 },
      { name: 'React Native CLI', level: 85 },
    ],
  },
  {
    category: 'State Management',
    items: [
      { name: 'Zustand', level: 80 },
      { name: 'TanStack Query', level: 85 },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', level: 90 },
      { name: 'GitHub', level: 90 },
      { name: 'VS Code', level: 100 },
      { name: 'Figma', level: 95 },
    ],
  },
  {
    category: 'Architecture',
    items: [
      { name: 'Component Architecture', level: 80 },
      { name: 'API Integration', level: 95 },
    ],
  },
];

export const projects = [
  {
    title: 'Frontend Nexus',
    slug: 'frontend-nexus',
    description:
      'A comprehensive frontend development reference and playground covering modern browser APIs, frontend concepts, reusable examples, and practical web development patterns.',
    longDescription:
      'A comprehensive frontend development reference covering modern browser APIs, frontend concepts, reusable examples, and practical web development patterns.',
    image: '/project-1.png',
    demo: 'https://jahanzaibjameel.github.io/frontend-nexus',
    repo: 'https://github.com/JahanzaibJameel/frontend-nexus',
    tech: ['HTML', 'CSS', 'JavaScript', 'PWA', 'Browser APIs'],
    metrics: [
      { value: '47', label: 'Libraries/Areas' },
      { value: '28', label: 'Pages' },
      { value: '27', label: 'Browser APIs' },
    ],
    period: '2026 - Present',
    role: 'Frontend Engineer',
  },
  {
    title: 'CryptoVault Pro',
    slug: 'cryptovault-pro',
    description:
      'A production-oriented cryptocurrency application focused on modern Angular architecture, strict TypeScript development, reactive state, offline capabilities, and comprehensive automated testing.',
    longDescription:
      'A cryptocurrency application built with Angular 21, TypeScript 5.9, Signals, RxJS, and SCSS. Features offline-first capabilities, PWA support, IndexedDB storage, and comprehensive automated testing.',
    image: '/project-2.png',
    demo: '[NEED USER INPUT]',
    repo: '[NEED USER INPUT]',
    tech: ['Angular 21', 'TypeScript 5.9', 'RxJS', 'SCSS', 'PWA', 'IndexedDB'],
    metrics: [
      { value: '~220', label: 'Tests' },
      { value: '[NEED USER INPUT]', label: 'Users' },
    ],
    period: '2026 - Present',
    role: 'Frontend Engineer',
  },
  {
    title: 'Lumora Photo Gallery App',
    slug: 'lumora-photo-gallery',
    description:
      'A cross-platform mobile photo gallery application built with React Native and Expo, focusing on reusable UI, navigation, local persistence, and performance.',
    longDescription:
      'A React Native photo gallery app using Expo, TypeScript, MMKV for local storage, FlashList for performance, and React Navigation for routing. Features approximately 10 screens.',
    image: '/project-3.png',
    demo: '[NEED USER INPUT]',
    repo: '[NEED USER INPUT]',
    tech: ['React Native', 'Expo SDK 54', 'TypeScript', 'MMKV', 'FlashList'],
    metrics: [
      { value: '10', label: 'Screens' },
      { value: 'Expo SDK 54', label: 'Version' },
    ],
    period: '2026 - Present',
    role: 'Frontend Engineer',
  },
  {
    title: 'Messaging Application',
    slug: 'messaging-app',
    description:
      'A React Native messaging application focused on scalable frontend architecture, state management, local persistence, and production-oriented engineering practices.',
    longDescription:
      'A messaging app built with React Native, Expo, TypeScript, Zustand for state management, MMKV for local storage, and Jest for testing. Features Clean Architecture concepts.',
    image: '/project-4.png',
    demo: '[NEED USER INPUT]',
    repo: 'https://github.com/JahanzaibJameel/Messaging-Application',
    tech: ['React Native', 'Expo', 'TypeScript', 'Zustand', 'MMKV', 'Jest'],
    metrics: [
      { value: '[NEED USER INPUT]', label: 'Features' },
    ],
    period: '2026 - Present',
    role: 'Frontend Engineer',
  },
  {
    title: 'Disaster Alert / SOS',
    slug: 'disaster-alert',
    description:
      'A disaster alert and emergency information web application focused on presenting location-aware alerts and emergency information through a modern web interface.',
    longDescription:
      'A Next.js application using TypeScript, Tailwind CSS, and MapLibre for location-aware disaster alerts and emergency information display.',
    image: '/project-5.png',
    demo: '[NEED USER INPUT]',
    repo: '[NEED USER INPUT]',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MapLibre', 'API Integration'],
    metrics: [],
    period: 'In Progress',
    role: 'Frontend Engineer',
  },
];

export const experience = [
  {
    company: 'Apprex Systems',
    role: 'Frontend Engineer',
    period: 'January 2024 – Present',
    location: 'Hyderabad, Pakistan / Remote',
    description:
      'Building frontend interfaces for web and mobile products. Working with React and Next.js, React Native, TypeScript, JavaScript, building reusable UI components, and integrating REST APIs.',
    achievements: [
      'Building and maintaining production-oriented applications',
      'Developing reusable UI components',
      'Implementing responsive and performant interfaces',
      'Working with modern development tooling and AI-assisted workflows',
    ],
    tech: ['React', 'Next.js', 'React Native', 'TypeScript', 'REST APIs', 'Zustand', 'TanStack Query'],
  },
];

export const education = [
  {
    institution: 'Eagle House Higher Secondary School',
    degree: 'Class 12 (Science / Pre-Engineering)',
    period: '2022 - 2024',
    location: 'Hyderabad, Sindh, Pakistan',
  },
];

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

type Achievement = {
  year: number;
  title: string;
  organization: string;
  description: string;
};

type OpenSourceProject = {
  name: string;
  description: string;
  url: string;
  stars: number;
  language: string;
};

export const testimonials: Testimonial[] = [];

export const achievements: Achievement[] = [];

export const openSource: OpenSourceProject[] = [];

export const calendarData: any[] = [];