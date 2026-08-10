# Portfolio Web

A modern Next.js 16 portfolio site showcasing premium frontend engineering work. This portfolio demonstrates expertise in building high-performance, accessible, and aesthetically polished web experiences.

[![Production Preview](https://img.shields.io/badge/preview-online-blue?style=for-the-badge)](https://jahanzaib.dev)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.10-black?style=for-the-badge&logo=nextdotjs)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue?style=for-the-badge&logo=typescript)](https://typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

## Table of Contents

- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Development](#development)
- [Build & Deployment](#build--deployment)
- [Performance Metrics](#performance-metrics)
- [Analytics](#analytics)

## Live Demo

**https://jahanzaib.dev**

> A production-ready portfolio site demonstrating frontend engineering excellence.

## Features

### Core Features

- **Responsive Design** - Mobile-first approach with breakpoints at 992px, 768px, and 480px
- **Dark/Light Mode** - Toggle with system preference detection and localStorage persistence
- **Custom Cursor Effects** - Subtle dot and glow effects on supported devices (auto-disabled on touch)
- **Smooth Animations** - IntersectionObserver-powered reveal animations on scroll
- **View Transitions API** - Native app-like page transitions in supported browsers

### Interactive Elements

- **Hamburger Navigation** - Mobile-friendly menu with smooth slide-in animation
- **Scroll Progress Indicator** - Visual feedback for long-page navigation
- **Theme Toggle** - Instant dark/light mode switching with smooth transition
- **Form Integration** - Contact form with Formspree backend

### Accessibility

- Skip-to-content link for keyboard users
- Proper ARIA labels for interactive elements
- Focus-visible outlines for keyboard navigation
- Semantic HTML structure

## Tech Stack

### Frameworks & Libraries

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.2.10 | React framework with App Router |
| React | 19.2.7 | UI library |
| TypeScript | 5.7.3 | Type safety |
| ESLint | 9.15.0 | Code quality |

### Fonts

- **Inter** - Primary system font for body text
- **Playfair Display** - Serif font for headings and accent text

### Icons

- Font Awesome 6.4.0 - Comprehensive icon library via CDN

### Services

- **Formspree** - Contact form backend API
- **Unsplash** - High-quality project images
- **Random User API** - Testimonial profile images

## Project Structure

```
portfolio-web/
├── app/                          # Next.js App Router
│   ├── layout.tsx              # Root layout, metadata, fonts
│   └── page.tsx                # Main portfolio page
├── public/                       # Static assets
│   ├── jahanzaib.png           # Profile image
│   ├── Muhammad Jahanzaib.pdf  # CV download
│   ├── logo.svg                # Brand logo
│   └── favicon.ico             # Browser favicon
├── style.css                     # Comprehensive CSS with dark mode
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
└── eslint.config.js              # Linting rules
```

## Installation

### Prerequisites

- Node.js >= 20.18.0
- npm >= 10.0.0
- Git

### Setup

```bash
# Clone the repository
git clone https://github.com/JahanzaibJameel/Portfolio-web.git
cd Portfolio-web

# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:3000 in your browser.

## Development

### Available Scripts

```bash
npm run dev      # Start development server (Turbopack)
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Project Architecture

The portfolio is built as a **Client Component** with the following architecture:

- **Custom Hooks** (`app/page.tsx`):
  - `useTheme()` - Theme state management with View Transition API
  - `useRevealObserver()` - Scroll-triggered animations
  - `useCursorTracking()` - Custom cursor with touch device detection
  - `useScrollTracking()` - Scroll progress and top button
  - `useMobileMenu()` - Mobile navigation state
  - `useContactForm()` - Form submission handling

- **Data-Driven Components**:
  - Navigation items, experience records, project showcases
  - Skill categories, mindset cards, testimonials
  - Contact information cards

## Build & Deployment

### Production Build

```bash
npm run build
```

This creates an optimized static build in the `.next` directory:

- Server-side rendering for initial load
- Static page generation for all routes
- Bundle optimization and code splitting

### Deployment Targets

This project produces static HTML/CSS/JS and can be deployed to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **GitHub Pages** (with adapter)

## Performance Metrics

The portfolio is engineered for optimal performance:

| Metric | Target | Implementation |
|--------|--------|----------------|
| LCP | < 2.5s | Image lazy loading, optimized fonts |
| CLS | 0 | Reserved space for dynamic content |
| FID | < 100ms | Minimal JavaScript, efficient DOM |
| Bundle Size | < 200KB | Tree-shaking, code splitting |

### Lighthouse Scores (Typical)

```
Performance:     92+
Accessibility:   95+
Best Practices:  100
SEO:             100
```

## Analytics

The portfolio does not include third-party analytics by default. To add analytics:

1. Add Google Analytics Measurement ID
2. Add the script to `app/layout.tsx` head section
3. Use `next/script` for optimal loading

## Customization

### Adding New Projects

Edit the `projects` array in `app/page.tsx`:

```typescript
const projects = [
  {
    title: 'Project Name',
    tag: 'Technology Stack',
    summary: 'Brief description...',
    image: 'https://unsplash.com/...',
    links: {
      live: 'https://...',
      source: 'https://github.com/...'
    }
  }
];
```

### Adding New Experience

Edit the `experience` array with role, company, period, note, and tech stack.

### Theme Colors

Customize dark/light theme variables in `style.css :root` and `[data-theme="dark"]` sections.

## Browser Support

- Chrome 120+
- Firefox 121+
- Safari 17+
- Edge 120+
- iOS Safari 17+

## License

MIT License - See [LICENSE](LICENSE) file for details.

## Contact

For inquiries, collaborations, or feedback:

- Email: m.jahanzaibjameel@gmail.com
- GitHub: [JahanzaibJameel](https://github.com/JahanzaibJameel)
- LinkedIn: [in/jahanzaib](https://linkedin.com/in/jahanzaib)