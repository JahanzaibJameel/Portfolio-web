# Muhammad Jahanzaib — Portfolio

**Frontend Engineer · React & Next.js · Interactive Web Experiences**

A modern, editorial-style personal portfolio showcasing the work, experience, technical expertise, and professional journey of Muhammad Jahanzaib.

Built with a focus on refined visual design, immersive interactions, performance, accessibility, and modern web engineering. The experience combines an interactive WebGL hero, scroll-driven animations, and carefully structured content in a responsive single-page application.

---

## Overview

The portfolio is designed to present professional work through a distinctive digital experience, combining modern frontend technologies with thoughtful interaction design and performance-conscious implementation.

### Key Features

- **Immersive 3D Experience** — Interactive WebGL hero powered by React Three Fiber, Drei, and Three.js.
- **Editorial Design System** — Minimalist layouts, refined typography, structured content, and responsive visual hierarchy.
- **Motion & Interactions** — Smooth transitions and scroll-driven animations using Framer Motion and Lenis.
- **Command Palette** — Keyboard-accessible navigation with `Ctrl + K` / `⌘ + K` for quick access to key sections and resources.
- **Responsive Architecture** — Optimized layouts and interactions across desktop, tablet, and mobile devices.
- **Accessibility** — Reduced-motion support and accessibility-conscious interaction patterns.
- **Performance Optimization** — Lazy-loaded 3D rendering, offscreen scene suspension, and controlled rendering resolution.
- **SEO & Discoverability** — Canonical URLs, Open Graph, Twitter metadata, Person structured data, sitemap, and robots configuration.
- **Custom Branding** — Dedicated favicon, portfolio identity, and social sharing assets.

---

## Technology Stack

| Category | Technologies |
|---|---|
| Framework | Next.js 16 — App Router |
| UI Library | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| Smooth Scrolling | Lenis |
| 3D Graphics | Three.js |
| 3D React Integration | React Three Fiber, Drei |
| Command Interface | cmdk |
| Icons | Lucide React |
| Typography | Inter, Inter Tight |
| Font Optimization | Next.js `next/font/google` |

---

## Getting Started

### Prerequisites

Ensure the following tools are installed:

- Node.js `>=20.18.0`
- npm
- Git

### Installation

Clone the repository:

```bash
git clone <repository-url>
cd <project-directory>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Development & Production

### Available Commands

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run lint` | Run ESLint checks |
| `npx tsc --noEmit` | Validate TypeScript types |
| `npm run build` | Generate an optimized production build |
| `npm run start` | Start the production server |

### Production Build

Validate the application before deployment:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

Run the production application:

```bash
npm run start
```

**Note:** Run the production build before starting the production server. A unit-test script is not currently configured in the repository.

---

## Project Architecture

```text
.
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── loading.tsx / error.tsx
│
├── components/
│   ├── effects/
│   │   └── Cursor and scroll-progress effects
│   ├── layout/
│   │   └── Navigation, scrolling, and footer
│   ├── sections/
│   │   └── Portfolio page sections
│   ├── three/
│   │   └── Interactive WebGL hero scene
│   └── ui/
│       └── Command palette and shared UI
│
├── hooks/
│   └── Reduced-motion preference hook
│
├── lib/
│   ├── data.ts
│   └── utils.ts
│
├── public/
│   └── Resume, branding, icons, and social assets
│
├── docs/
│   ├── architecture.md
│   ├── content-and-customization.md
│   └── development-and-deployment.md
│
└── package.json
```

---

## Documentation

Detailed technical documentation is available in the `docs/` directory.

- [Architecture & Runtime Behavior](docs/architecture.md)
- [Content & Customization](docs/content-and-customization.md)
- [Development & Deployment](docs/development-and-deployment.md)

---

## Contact Form

The contact form currently uses the visitor's default email application to prepare a message containing their name, email address, and message.

It does not send or store submissions through a backend.

For server-side message handling, integrate a trusted form service or implement a dedicated API route.

See the [Contact Form Documentation](docs/content-and-customization.md#contact-form) for implementation details.

---

## License

This project is distributed under the terms specified in [LICENSE](LICENSE).

---

<p align="center">
  Designed & Developed by <strong>Muhammad Jahanzaib</strong>
  <br />
  <sub>Building thoughtful digital experiences through modern web technologies.</sub>
</p>
