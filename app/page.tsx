'use client';

import { useEffect, useRef, useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Engineering', href: '#engineering' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const highlights = [
  'Architected design systems used across 4+ products',
  'Improved Core Web Vitals (LCP < 2.5s) for enterprise apps',
  'Cross-platform mobile apps with React Native (CLI + Expo)',
];

const capabilities = [
  'React, Next.js & TypeScript',
  'React Native & Expo apps',
  'Performance, SEO & accessibility',
  'Design systems & component thinking',
];

const experience = [
  {
    role: 'Frontend Engineer',
    company: 'Apprex Systems',
    period: 'Jan 2025 – Present',
    note: 'Leading frontend architecture for enterprise dashboards. Migrated from Pages Router to App Router, reducing bundle size by 32%. Implemented Zustand for state management, cutting boilerplate by 50% and eliminating XState complexity.',
    tech: ['Next.js', 'Zustand', 'TypeScript', 'TanStack Query'],
  },
  {
    role: 'Javascript Developer (Contract)',
    company: 'DigitalAgency',
    period: 'Jan 2024 – Dec 2024',
    note: 'Developed a real-time analytics dashboard with Next.js and WebSockets. Built a schema validation layer with Zod to ensure API contract reliability. Mentored junior devs on React performance patterns.',
    tech: ['Next.js', 'WebSockets', 'Zod', 'Redux Toolkit'],
  },
  {
    role: 'React Native Developer',
    company: 'WebStart Ltd.',
    period: 'Jun 2025 – Dec 2025',
    note: 'Built cross-platform mobile app for field service management using React Native (Expo). Implemented offline-first architecture with WatermelonDB and synced via Supabase.',
    tech: ['React Native', 'Expo', 'WatermelonDB', 'Supabase'],
  },
];

const projects = [
  {
    title: 'Apology App (Next.js + Zustand)',
    tag: 'State Simplification',
    summary: 'Production-grade apology generator with complex multi-step forms. Replaced XState with Zustand to reduce boilerplate by 60% and eliminate runtime errors. Achieved zero console errors and 100% Lighthouse score.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    links: { live: '#', source: 'https://github.com/JahanzaibJameel/apology-app' },
  },
  {
    title: 'AI Validation & Error Isolation System',
    tag: 'System Architecture',
    summary: 'Advanced frontend architecture featuring a schema validation engine, storage migration logic, and an error isolation tree. Includes performance budgeting and automatic bundle analysis.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    links: { live: '#', source: 'https://github.com/JahanzaibJameel/ai-frontend-system' },
  },
  {
    title: 'Weather Forecast Dashboard',
    tag: 'Real-time Data',
    summary: 'Real-time weather application built with Next.js and TypeScript, featuring server-side rendering. Integrates multiple weather APIs with interactive maps and historical data visualization.',
    image: 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=800&q=80',
    links: { live: 'https://weather-app48.netlify.app/', source: 'https://github.com/JahanzaibJameel' },
  },
  {
    title: 'E-commerce Platform',
    tag: 'Full-stack Solution',
    summary: 'Full-featured e-commerce solution with React, Redux, and Node.js backend. Includes product catalog, cart, authentication, and payment integration. Optimized with lazy loading and code splitting.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
    links: { live: 'https://transcendent-selkie-378bf2.netlify.app/', source: 'https://github.com/JahanzaibJameel' },
  },
  {
    title: 'Task Management App',
    tag: 'Offline-First',
    summary: 'Productivity app with React and Firebase, featuring real-time updates, drag-and-drop, and offline capabilities. Uses Firestore and JWT authentication.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    links: { live: 'https://luminous-selkie-901237.netlify.app/', source: 'https://github.com/JahanzaibJameel' },
  },
];

const skills = [
  {
    title: 'Core Engineering',
    icon: 'fas fa-cogs',
    tags: ['JavaScript (ES6+)', 'TypeScript', 'Clean Architecture', 'Error Boundaries', 'Performance Budgets', 'Schema Validation (Zod)'],
    description: 'Focus on maintainable systems, not just features. I design for long-term scalability.',
  },
  {
    title: 'Frontend & Mobile',
    icon: 'fas fa-code',
    tags: ['React', 'Next.js (App Router)', 'React Native', 'Tailwind CSS', 'Shadcn/UI', 'Framer Motion', 'Three.js / R3F'],
    description: 'Building production-ready interfaces with modern tooling and best practices.',
  },
  {
    title: 'State & Data',
    icon: 'fas fa-database',
    tags: ['Zustand', 'TanStack Query', 'Redux Toolkit', 'Recoil', 'Firebase', 'Supabase', 'WebSockets'],
    description: 'Efficient state management and real-time data synchronization.',
  },
  {
    title: 'Testing & DevOps',
    icon: 'fas fa-vial',
    tags: ['Jest', 'Cypress', 'Playwright', 'ESLint/Prettier', 'Git/GitHub Actions', 'Vercel/Netlify', 'Docker'],
    description: 'Rigorous testing and deployment pipelines for reliable releases.',
  },
];

const mindset = [
  {
    title: 'System Over UI',
    icon: 'fas fa-sitemap',
    description: "I prioritize architecture that scales. State management, error boundaries, and data flow are designed before pixels.",
  },
  {
    title: 'State Simplification',
    icon: 'fas fa-broom',
    description: 'I actively reduce complexity. Replaced XState with Zustand in production, improving team velocity and reducing bugs.',
  },
  {
    title: 'Error Isolation',
    icon: 'fas fa-shield-alt',
    description: 'Errors should never crash the app. I implement granular error boundaries and fallback UIs.',
  },
  {
    title: 'Performance Aware',
    icon: 'fas fa-tachometer-alt',
    description: "I set performance budgets and monitor Core Web Vitals. Lazy loading, code splitting, and bundle analysis are standard.",
  },
];

const testimonials = [
  {
    name: 'John Smith',
    role: 'CTO, TechSolutions Inc.',
    content: "Muhammad led the migration from XState to Zustand on our enterprise dashboard. The result: 50% less boilerplate, zero new state-related bugs, and a 32% reduction in bundle size. His architectural decisions saved us weeks of development time.",
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Sarah Johnson',
    role: 'Product Manager, DigitalAgency',
    content: "Working with Muhammad was a turning point for our team. He introduced performance budgets, error boundaries, and a robust testing strategy. Our Core Web Vitals improved by over 40% within a month. He doesn't just write code—he elevates the engineering culture.",
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'Director of Engineering, StartupX',
    content: 'Muhammad architected our offline-first React Native app. The sync engine he built with WatermelonDB and Supabase is bulletproof. Even with flaky network, our field agents never lose data. His understanding of mobile constraints is exceptional.',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
];

const contactInfo = [
  {
    icon: 'fas fa-envelope',
    title: 'Email',
    value: 'm.jahanzaibjameel@gmail.com',
    link: 'mailto:m.jahanzaibjameel@gmail.com',
  },
  {
    icon: 'fas fa-phone-alt',
    title: 'Phone',
    value: '+92 308 3954920',
    link: 'tel:+923083954920',
  },
  {
    icon: 'fab fa-linkedin-in',
    title: 'LinkedIn',
    value: 'linkedin.com/in/jahanzaib',
    link: 'https://linkedin.com/in/jahanzaib',
  },
  {
    icon: 'fab fa-github',
    title: 'GitHub',
    value: 'github.com/JahanzaibJameel',
    link: 'https://github.com/JahanzaibJameel',
  },
];

function useTheme() {
  useEffect(() => {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle') as HTMLButtonElement | null;
    const themeIcon = themeToggle?.querySelector('i') as HTMLElement | null;
    let isTransitioning = false;

    const getPreferredTheme = () => {
      const saved = window.localStorage.getItem('theme');
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const applyTheme = (theme: string) => {
      if (isTransitioning) return;
      isTransitioning = true;

      const isDark = theme === 'dark';
      if (document.startViewTransition) {
        document.startViewTransition(() => {
          if (isDark) {
            body.setAttribute('data-theme', 'dark');
            themeIcon?.classList.replace('fa-moon', 'fa-sun');
          } else {
            body.removeAttribute('data-theme');
            themeIcon?.classList.replace('fa-sun', 'fa-moon');
          }
          isTransitioning = false;
        }).finished.finally(() => {
          isTransitioning = false;
        });
      } else {
        if (isDark) {
          body.setAttribute('data-theme', 'dark');
          themeIcon?.classList.replace('fa-moon', 'fa-sun');
        } else {
          body.removeAttribute('data-theme');
          themeIcon?.classList.replace('fa-sun', 'fa-moon');
        }
        isTransitioning = false;
      }
      window.localStorage.setItem('theme', theme);
    };

    applyTheme(getPreferredTheme());

    const handleToggle = () => {
      const current = body.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    };

    themeToggle?.addEventListener('click', handleToggle);

    return () => {
      themeToggle?.removeEventListener('click', handleToggle);
    };
  }, []);
}

function useRevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.15 },
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
}

function useCursorTracking(
  dotRef: React.RefObject<HTMLDivElement | null>,
  glowRef: React.RefObject<HTMLDivElement | null>,
) {
  const [isTouchDevice] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return (
      window.matchMedia('(hover: none)').matches ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0
    );
  });

  useEffect(() => {
    if (isTouchDevice) return;

    const dot = dotRef.current;
    const glow = glowRef.current;

    const handlePointerMove = (event: PointerEvent) => {
      if (dot) {
        dot.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      }
      if (glow) {
        glow.style.transform = `translate(${event.clientX - 120}px, ${event.clientY - 120}px)`;
      }
    };

    const handlePointerLeave = () => {
      if (dot) dot.style.opacity = '0';
      if (glow) glow.style.opacity = '0';
    };

    const handlePointerEnter = () => {
      if (dot) dot.style.opacity = '1';
      if (glow) glow.style.opacity = '1';
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerleave', handlePointerLeave);
    window.addEventListener('pointerenter', handlePointerEnter);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('pointerenter', handlePointerEnter);
    };
  }, [dotRef, glowRef, isTouchDevice]);
}

function useScrollTracking() {
  useEffect(() => {
    const scrollTopBtn = document.getElementById('scrollTop') as HTMLElement | null;

    const handleScroll = () => {
      if (!scrollTopBtn) return;
      scrollTopBtn.classList.toggle('active', window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    scrollTopBtn?.addEventListener('click', handleScrollToTop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      scrollTopBtn?.removeEventListener('click', handleScrollToTop);
    };
  }, []);
}

function useMobileMenu() {
  useEffect(() => {
    const hamburger = document.getElementById('hamburger') as HTMLButtonElement | null;
    const navLinks = document.querySelector('.nav-links') as HTMLElement | null;

    const handleToggle = () => {
      const expanded = hamburger?.getAttribute('aria-expanded') === 'true';
      if (navLinks) navLinks.classList.toggle('active');
      if (hamburger) {
        hamburger.setAttribute('aria-expanded', String(!expanded));
        hamburger.innerHTML = expanded ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
      }
    };

    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      const href = target.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      e.preventDefault();
      const targetEl = document.querySelector(href);
      if (targetEl) {
        window.scrollTo({ top: (targetEl as HTMLElement).offsetTop - 80, behavior: 'smooth' });
      }
      if (navLinks) navLinks.classList.remove('active');
      if (hamburger) {
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
      }
    };

    if (hamburger) hamburger.addEventListener('click', handleToggle);

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', handleSmoothScroll as EventListener);
    });

    return () => {
      if (hamburger) hamburger.removeEventListener('click', handleToggle);
      document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.removeEventListener('click', handleSmoothScroll as EventListener);
      });
    };
  }, []);
}

function useContactForm() {
  useEffect(() => {
    const form = document.getElementById('contactForm') as HTMLFormElement | null;
    if (!form) return;

    const handleSubmit = async (e: Event) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
      const originalHTML = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' },
        });

        if (res.ok) {
          showFormMessage('Message sent successfully! I\'ll reply within 24h.', 'success');
          form.reset();
        } else {
          throw new Error('Server error');
        }
      } catch {
        showFormMessage('Network error. Please email me directly.', 'error');
      } finally {
        submitBtn.innerHTML = originalHTML;
        submitBtn.disabled = false;
      }
    };

    const showFormMessage = (msg: string, type: string) => {
      const existing = form.querySelector('.form-message');
      if (existing) existing.remove();
      const div = document.createElement('div');
      div.className = `form-message ${type}`;
      div.textContent = msg;
      form.appendChild(div);
      setTimeout(() => div.remove(), 5000);
    };

    form.addEventListener('submit', handleSubmit as EventListener);

    return () => {
      form.removeEventListener('submit', handleSubmit as EventListener);
    };
  }, []);
}

export default function HomePage() {
  const cursorDotRef = useRef<HTMLDivElement | null>(null);
  const cursorGlowRef = useRef<HTMLDivElement | null>(null);

  useTheme();
  useRevealObserver();
  useCursorTracking(cursorDotRef, cursorGlowRef);
  useScrollTracking();
  useMobileMenu();
  useContactForm();

  return (
    <>
      <div className="cursor-dot" ref={cursorDotRef} aria-hidden="true" />
      <div className="cursor-glow" ref={cursorGlowRef} aria-hidden="true" />
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <header>
        <div className="container">
          <div className="header-inner">
            <a href="#home" className="logo">
              <i className="fas fa-code" />
              <span>Jahanzaib.dev</span>
            </a>

            <nav>
              <ul className="nav-links" aria-label="Primary navigation">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
                <li>
                  <button id="themeToggle" className="theme-toggle" aria-label="Toggle dark mode">
                    <i className="fas fa-moon" />
                  </button>
                </li>
              </ul>
            </nav>

            <button id="hamburger" className="hamburger" aria-label="Menu" aria-expanded="false">
              <i className="fas fa-bars" />
            </button>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="home">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text reveal">
                <span className="status-badge">
                  <i className="fas fa-bolt" /> Open to Specialist Roles 2026
                </span>
                <p className="section-subtitle">Frontend Engineer & JS Specialist</p>
                <h1 className="hero-title">
                  Muhammad <span>Jahanzaib</span>
                </h1>
                <p className="hero-subtitle">
                  I build <strong>production-grade systems</strong>, not just interfaces. Specialized in Next.js, React,
                  React Native, and clean architecture. I simplify complex state, eliminate console errors, and
                  optimize for real-world performance.
                </p>
                <div className="metrics-badges">
                  <div className="metric">
                    <i className="fas fa-weight-hanging" /> Bundle size ↓32%
                  </div>
                  <div className="metric">
                    <i className="fas fa-gauge-high" /> LCP &lt; 2.5s
                  </div>
                  <div className="metric">
                    <i className="fas fa-code" /> 0 console errors
                  </div>
                </div>
                <div className="hero-btns">
                  <a href="#contact" className="btn btn-primary">
                    Discuss Your Project
                  </a>
                  <a href="#projects" className="btn btn-outline">
                    View Case Studies
                  </a>
                </div>
                <div className="social-links">
                  <a
                    href="https://github.com/JahanzaibJameel"
                    className="social-link"
                    target="_blank"
                    aria-label="GitHub"
                  >
                    <i className="fab fa-github" />
                  </a>
                  <a
                    href="https://linkedin.com/in/jahanzaib"
                    className="social-link"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="mailto:m.jahanzaibjameel@gmail.com" className="social-link" aria-label="Email">
                    <i className="fas fa-envelope" />
                  </a>
                </div>
              </div>

              <div className="hero-image floating reveal">
                <img
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&q=80"
                  alt="Developer workspace"
                  width="600"
                  height="400"
                  loading="eager"
                  sizes="(max-width: 992px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="hero-shape" />
          </div>
        </section>

        <section className="about" id="about">
          <div className="container">
            <div className="text-center reveal">
              <p className="section-subtitle">System Architect & Problem Solver</p>
              <h2 className="section-title">Beyond the UI</h2>
            </div>
            <div className="about-content">
              <div className="about-image">
                <img
                  src="/jahanzaib.png"
                  alt="Muhammad Jahanzaib"
                  width="500"
                  height="600"
                  loading="lazy"
                />
              </div>
              <div className="about-text">
                <p>
                  I&apos;m a <strong>Frontend engineer</strong> with a focus on{' '}
                  <strong>Next.js, React, React Native, and scalable architecture</strong>. Over the past years, I&apos;ve
                  shifted my focus from building features to designing systems that are maintainable, performant, and
                  resilient.
                </p>
                <p>
                  My approach is rooted in <strong>state simplification</strong> (recently replaced XState with Zustand
                  in a production app to reduce complexity), <strong>error isolation</strong>, and{' '}
                  <strong>performance budgeting</strong>. I believe in shipping code that works in production without console
                  noise.
                </p>

                <div className="about-highlights">
                  {highlights.map((item, i) => (
                    <div key={i} className="highlight-item">
                      <i className="fas fa-check-circle" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="about-skills">
                  {capabilities.map((item, i) => <span key={i} className="skill">{item}</span>)}
                </div>

                <a href="/Muhammad Jahanzaib.pdf" className="btn btn-primary" download>
                  <i className="fas fa-download" /> Download CV (PDF)
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="experience" id="experience">
          <div className="container">
            <div className="text-center">
              <p className="section-subtitle">Professional Journey</p>
              <h2 className="section-title">Where I&apos;ve Made an Impact</h2>
            </div>
            <div className="experience-container">
              {experience.map((item, i) => (
                <div key={i} className="experience-card reveal">
                  <h3 className="experience-title">{item.role}</h3>
                  <p className="experience-company">
                    <i className="fas fa-building" /> {item.company}
                  </p>
                  <p className="experience-date">
                    <i className="far fa-calendar-alt" /> {item.period}
                  </p>
                  <p className="experience-description">{item.note}</p>
                  <div className="experience-tech">
                    {item.tech.map((tag) => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="skills" id="skills">
          <div className="container">
            <div className="text-center reveal">
              <p className="section-subtitle">Technical Arsenal</p>
              <h2 className="section-title">Production-Ready Expertise</h2>
            </div>
            <div className="skills-grid-2026">
              {skills.map((skill, i) => (
                <div key={i} className="skill-card reveal">
                  <h3>
                    <i className={skill.icon} style={{ color: 'var(--primary)' }} /> {skill.title}
                  </h3>
                  <div className="skill-tag-cloud">
                    {skill.tags.map((tag) => (
                      <span key={tag} className="skill-tag">{tag}</span>
                    ))}
                  </div>
                  <p className="skill-description">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="projects" id="projects">
          <div className="container">
            <div className="text-center reveal">
              <p className="section-subtitle">Real-World Impact</p>
              <h2 className="section-title">Featured Engineering</h2>
            </div>
            <div className="projects-container">
              {projects.map((project, i) => (
                <div key={i} className="project-card reveal">
                  <div className="project-image">
                    {project.tag && <span className="project-badge">{project.tag}</span>}
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                    />
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.summary}</p>
                    <div className="project-links">
                      <a href={project.links.live} className="project-link" onClick={(e) => { e.preventDefault(); }}>
                        <i className="fas fa-external-link-alt" /> Live Demo
                      </a>
                      <a href={project.links.source} className="project-link" target="_blank">
                        <i className="fab fa-github" /> Source
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="engineering-mindset" id="engineering">
          <div className="container">
            <div className="text-center reveal">
              <p className="section-subtitle">How I Build</p>
              <h2 className="section-title">Engineering Mindset</h2>
            </div>
            <div className="mindset-grid">
              {mindset.map((item, i) => (
                <div key={i} className="mindset-card reveal">
                  <i className={`${item.icon} fa-2x`} style={{ color: 'var(--primary)' }} />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials" id="testimonials">
          <div className="container">
            <div className="text-center reveal">
              <p className="section-subtitle">Client & Colleague Feedback</p>
              <h2 className="section-title">Trusted by Teams</h2>
            </div>
            <div className="testimonials-slider">
              {testimonials.map((testimonial, i) => (
                <div key={i} className="testimonial-card reveal">
                  <div className="testimonial-content">
                    &ldquo;{testimonial.content}&rdquo;
                  </div>
                  <div className="testimonial-author">
                    <div className="author-image">
                      <img src={testimonial.avatar} alt={testimonial.name} />
                    </div>
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container">
            <div className="text-center reveal">
              <p className="section-subtitle">Get In Touch</p>
              <h2 className="section-title">Contact Me</h2>
            </div>
            <div className="contact-container">
              <div className="contact-info">
                {contactInfo.map((info, i) => (
                  <div key={i} className="contact-card reveal">
                    <div className="contact-icon">
                      <i className={info.icon} />
                    </div>
                    <div className="contact-details">
                      <h3>{info.title}</h3>
                      <a href={info.link}>{info.value}</a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-form reveal">
                <form action="https://formspree.io/f/xeoabrww" method="POST" id="contactForm">
                  <input type="hidden" name="_subject" value="New message from portfolio!" />
                  <input type="text" name="_gotcha" style={{ display: 'none' }} autoComplete="off" />
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input type="text" id="name" name="name" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Your Email
                    </label>
                    <input type="email" id="email" name="email" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea id="message" name="message" className="form-control" required rows={5} />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-content">
            <a href="#home" className="footer-logo">
              <i className="fas fa-code" />
              <span>Jahanzaib.dev</span>
            </a>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#engineering">Engineering</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer-social">
              <a href="https://github.com/JahanzaibJameel" className="footer-social-link" target="_blank">
                <i className="fab fa-github" />
              </a>
              <a href="https://linkedin.com/in/jahanzaib" className="footer-social-link" target="_blank">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="mailto:m.jahanzaibjameel@gmail.com" className="footer-social-link">
                <i className="fas fa-envelope" />
              </a>
            </div>
            <p className="copyright">© 2026 Muhammad Jahanzaib. Building systems that last.</p>
          </div>
        </div>
      </footer>

      <button className="scroll-top" id="scrollTop" aria-label="Scroll to top">
        <i className="fas fa-arrow-up" />
      </button>
    </>
  );
}