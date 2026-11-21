<div align="center">

# ✨ Muhammad Jahanzaib — Portfolio

### Frontend Engineer · Product-First Architecture · Interactive Web Experiences

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.3-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-0.186-000000?style=flat&logo=three.js&logoColor=white)](https://threejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat)](LICENSE)

**A modern, editorial-style portfolio showcasing senior frontend engineering expertise through immersive design, performance-first architecture, and interactive 3D experiences.**

[🌐 Live Demo](https://portfolio-web-mu-kohl.vercel.app/) · [📖 Documentation](#documentation) · [🎯 Features](#features) · [🚀 Quick Start](#quick-start)

<img src="public/og-image.png" alt="Portfolio Preview" width="800" />

</div>

---

## 🎯 Features

<table>
<tr>
<td width="50%">

### 🎨 Design & Experience
- **Immersive 3D Hero** — Interactive WebGL scene powered by React Three Fiber
- **Editorial Design System** — Minimalist layouts with refined typography
- **Fluid Motion** — Scroll-driven animations via Framer Motion & Lenis
- **Command Palette** — Keyboard navigation (`Ctrl/⌘ + K`)
- **Custom Cursor** — Sophisticated pointer interactions
- **Dark Theme** — Premium dark-mode aesthetic

</td>
<td width="50%">

### ⚡ Performance & Quality
- **Lazy 3D Loading** — Dynamic imports for optimal bundle size
- **DPR Optimization** — Adaptive rendering resolution
- **Reduced Motion** — Accessibility-first animations
- **SEO Optimized** — Meta tags, JSON-LD, sitemap
- **Type Safety** — Full TypeScript coverage
- **Responsive** — Mobile-first, adaptive layouts

</td>
</tr>
</table>

---

## 🏗️ Technology Stack

<div align="center">

### Core Framework
![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

### Styling & Animation
![Tailwind CSS](https://img.shields.io/badge/Tailwind_4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

### 3D Graphics
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)
![React Three Fiber](https://img.shields.io/badge/R3F-000000?style=for-the-badge&logo=three.js&logoColor=white)
![Drei](https://img.shields.io/badge/Drei-000000?style=for-the-badge&logo=three.js&logoColor=white)

### Additional Libraries
![Lenis](https://img.shields.io/badge/Lenis-FF6B6B?style=for-the-badge)
![cmdk](https://img.shields.io/badge/cmdk-000000?style=for-the-badge)
![Lucide](https://img.shields.io/badge/Lucide-F56565?style=for-the-badge)

</div>

<details>
<summary><strong>📦 Complete Dependencies</strong></summary>

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 16 (App Router), React 19 |
| **Language** | TypeScript 5.7 |
| **Styling** | Tailwind CSS 4, PostCSS |
| **Animation** | Framer Motion 12, Lenis 1.0 |
| **3D Graphics** | Three.js 0.186, React Three Fiber 9.8, Drei 10.7 |
| **UI Components** | cmdk 1.0, Lucide React 0.511 |
| **Typography** | Inter, Inter Tight (via `next/font/google`) |
| **Development** | ESLint 9, TypeScript compiler |

</details>

---

## 🚀 Quick Start

### Prerequisites

```bash
node --version  # >=20.18.0 required
npm --version   # Latest stable
```

### Installation

```bash
# Clone the repository
git clone https://github.com/JahanzaibJameel/portfolio-web.git
cd portfolio-web

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on `localhost:3000` |
| `npm run build` | Create optimized production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality checks |
| `npx tsc --noEmit` | Validate TypeScript types without emitting files |

### Production Deployment

```bash
# Validate before deployment
npm run lint
npx tsc --noEmit

# Build for production
npm run build

# Start production server
npm run start
```

---

## 📁 Project Structure

```
portfolio-web/
├── 📂 app/                      # Next.js App Router
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Main portfolio page
│   ├── globals.css             # Global styles & utilities
│   ├── robots.ts               # Dynamic robots.txt
│   ├── sitemap.ts              # Dynamic XML sitemap
│   ├── loading.tsx             # Loading state
│   └── error.tsx               # Error boundary
│
├── 📂 components/
│   ├── 📂 effects/             # Visual effects
│   │   ├── custom-cursor.tsx  # Custom cursor component
│   │   └── scroll-progress.tsx # Page scroll indicator
│   │
│   ├── 📂 layout/              # Layout components
│   │   ├── floating-nav.tsx   # Scroll-aware navigation
│   │   ├── footer.tsx         # Site footer
│   │   └── smooth-scroll.tsx  # Lenis integration
│   │
│   ├── 📂 sections/            # Page sections
│   │   ├── hero.tsx           # Hero with 3D scene
│   │   ├── about.tsx          # About section
│   │   ├── editorial-story.tsx # Story narrative
│   │   ├── philosophy.tsx     # Dev philosophy
│   │   ├── skills.tsx         # Technical skills
│   │   ├── experience.tsx     # Work experience
│   │   ├── projects.tsx       # Featured projects
│   │   ├── education.tsx      # Education timeline
│   │   └── contact.tsx        # Contact form
│   │
│   ├── 📂 three/               # 3D components
│   │   └── hero-scene.tsx     # WebGL scene with Three.js
│   │
│   └── 📂 ui/                  # Shared UI components
│       ├── command-palette.tsx # Keyboard navigation
│       └── section-heading.tsx # Section headers
│
├── 📂 hooks/
│   └── use-reduced-motion.ts   # Motion preference detection
│
├── 📂 lib/
│   ├── data.ts                 # Portfolio content & config
│   └── utils.ts                # Utility functions
│
├── 📂 public/                   # Static assets
│   ├── favicon.png             # Site favicon
│   ├── apple-touch-icon.png    # iOS icon
│   ├── og-image.png            # Social preview image
│   ├── logo.svg                # Brand logo
│   └── Muhammad_Jahanzaib_Resume_2026.pdf
│
├── 📂 docs/                     # Documentation
│   ├── architecture.md         # Technical architecture
│   ├── content-and-customization.md
│   └── development-and-deployment.md
│
├── 📄 package.json              # Dependencies & scripts
├── 📄 tsconfig.json             # TypeScript configuration
├── 📄 tailwind.config.ts        # Tailwind configuration
├── 📄 postcss.config.js         # PostCSS configuration
├── 📄 eslint.config.js          # ESLint rules
├── 📄 next.config.mjs           # Next.js configuration
├── 📄 LICENSE                   # MIT License
├── 📄 AGENTS.md                 # AI agent context
└── 📄 README.md                 # This file
```

---

## 📖 Documentation

Comprehensive technical documentation is available in the `/docs` directory:

| Document | Description |
|----------|-------------|
| 📐 [**Architecture**](docs/architecture.md) | Application structure, component responsibilities, rendering strategy |
| 🎨 [**Customization**](docs/content-and-customization.md) | Content updates, styling, adding sections |
| 🚀 [**Deployment**](docs/development-and-deployment.md) | Build process, hosting, environment configuration |

---

## 🎨 Key Components

### 3D Hero Scene
- **Dynamic Loading**: Lazy-loaded to optimize initial bundle
- **Performance**: DPR capped at 1.25, demand rendering when offscreen
- **Interactions**: Mouse parallax, scroll-driven animations
- **Accessibility**: Falls back gracefully with reduced motion support

### Command Palette
- **Trigger**: `Ctrl + K` (Windows/Linux) or `⌘ + K` (Mac)
- **Navigation**: Quick access to all sections
- **Actions**: Download resume, view social profiles
- **Keyboard**: Fully navigable with arrow keys and Enter

### Smooth Scrolling
- **Library**: Lenis for buttery-smooth scroll
- **Integration**: Syncs with Framer Motion scroll observers
- **Accessibility**: Automatically disabled for reduced motion preference

---

## 🎯 Performance Features

<table>
<tr>
<td width="33%">

### Bundle Optimization
- Code splitting
- Dynamic imports
- Tree shaking
- Font subsetting

</td>
<td width="33%">

### Runtime Performance
- Lazy 3D loading
- Adaptive DPR
- Offscreen suspension
- Optimized re-renders

</td>
<td width="33%">

### Accessibility
- Reduced motion
- Semantic HTML
- ARIA labels
- Keyboard navigation

</td>
</tr>
</table>

---

## 🔧 Customization

### Update Content
Edit `lib/data.ts` to customize:
- Personal information (`SITE_CONFIG`)
- Hero content (`heroData`)
- About section (`aboutData`)
- Projects, experience, education
- Navigation items

### Modify Styling
- **Global styles**: `app/globals.css`
- **Theme colors**: `tailwind.config.ts`
- **Component styles**: Individual component files

### Add Sections
1. Create component in `components/sections/`
2. Import in `app/page.tsx`
3. Add to navigation in `lib/data.ts`

See [Customization Guide](docs/content-and-customization.md) for details.

---

## 📧 Contact Form

The contact form uses the `mailto:` protocol to open the user's default email client with pre-filled information. 

**For server-side handling**, integrate:
- [Resend](https://resend.com/) — Modern email API
- [SendGrid](https://sendgrid.com/) — Email delivery service
- [Formspree](https://formspree.io/) — No-code form backend
- Custom API route with Next.js Route Handlers

---

## 🌐 SEO & Metadata

✅ Comprehensive SEO configuration:
- Meta tags (title, description, keywords)
- Open Graph for social sharing
- Twitter Card metadata
- JSON-LD structured data (Person schema)
- Dynamic sitemap.xml
- Robots.txt configuration
- Canonical URLs

**Configure in**: `lib/data.ts` → `SITE_CONFIG.url`

---

## 🎓 Learning Resources

Built with modern web technologies. Learn more:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Three.js Journey](https://threejs-journey.com/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)

---

## 🤝 Contributing

This is a personal portfolio project. If you'd like to use it as a template:

1. Fork the repository
2. Customize content in `lib/data.ts`
3. Update metadata in `app/layout.tsx`
4. Replace assets in `public/`
5. Deploy to your preferred platform

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License - Copyright (c) 2026 Muhammad Jahanzaib Khanzada
```

---

## 🙏 Acknowledgments

- **Design Inspiration**: Editorial web design, product-focused portfolios
- **3D Graphics**: Three.js community, Pmndrs ecosystem
- **Typography**: Google Fonts (Inter family)
- **Icons**: Lucide React icon library

---

<div align="center">

## 💼 About the Developer

**Muhammad Jahanzaib**  
*Frontend Engineer • Product-First Architecture • Interactive Experiences*

Building thoughtful digital experiences through modern web technologies.

[![GitHub](https://img.shields.io/badge/GitHub-JahanzaibJameel-181717?style=flat&logo=github)](https://github.com/JahanzaibJameel)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat&logo=linkedin)](https://www.linkedin.com/in/muhammad-jahanzaib-khanzada-9029852a3/)
[![Email](https://img.shields.io/badge/Email-Contact-EA4335?style=flat&logo=gmail&logoColor=white)](mailto:m.jahanzaibjameel@gmail.com)

---

### ⭐ If you found this helpful, consider giving it a star!

**Made with ❤️ using Next.js, React, Three.js, and TypeScript**

[⬆ Back to Top](#-muhammad-jahanzaib--portfolio)

</div>
