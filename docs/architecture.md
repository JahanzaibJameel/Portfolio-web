# Architecture

## Application shape

This is a single-page Next.js App Router application. `app/layout.tsx` provides
the root HTML, font variables, metadata, icons, and the global stylesheet.
`app/page.tsx` assembles the portfolio sections and page-level effects.

The home page is a Server Component and composes interactive Client Components
in this order:

1. Hero
2. About
3. Editorial story
4. Philosophy
5. Skills
6. Experience
7. Projects
8. Education
9. Contact
10. Footer

Section IDs are used by the floating navigation, footer links, hero call to
action, and command palette. Keep those IDs in sync when changing section
navigation.

## Component responsibilities

| Location | Responsibility |
| --- | --- |
| `app/layout.tsx` | Root document, fonts, SEO/social metadata, and global CSS import |
| `app/page.tsx` | Single-page composition and global interactive effects |
| `components/sections/` | Portfolio content sections |
| `components/three/hero-scene.tsx` | WebGL hero scene rendered by React Three Fiber |
| `components/layout/smooth-scroll.tsx` | Lenis lifecycle and browser scroll-event synchronization |
| `components/layout/floating-nav.tsx` | Scroll-aware section navigation |
| `components/effects/` | Custom pointer cursor and page scroll progress |
| `components/ui/` | Shared section heading and command palette |
| `hooks/use-reduced-motion.ts` | Tracks the user's `prefers-reduced-motion` setting |
| `lib/data.ts` | Portfolio copy, project data, links, and navigation items |
| `app/globals.css` | Tailwind import, global styles, shared card effects, and motion fallbacks |

## Motion and scrolling

- Framer Motion handles entrance effects, hover responses, section scroll
  progress, and hero parallax.
- Lenis is initialized in `SmoothScroll` unless reduced motion is enabled. Its
  `autoRaf` option drives the animation loop. Lenis uses native browser scrolling,
  so Framer Motion observes the actual scroll events directly.
- The hero's scroll progress is spring-smoothed before being applied to the
  background, scene wrapper, and WebGL objects.
- The 3D scene is dynamically imported from the client-side hero after a short
  first-render delay, keeping Three.js out of the initial route bundle. Its CSS
  placeholder reserves the scene size while the chunk loads; the scene is not
  loaded when reduced motion is enabled.
- The 3D canvas uses pointer and scroll input for camera/object movement, caps
  device pixel ratio at 1.25, and switches to demand rendering while offscreen
  or if reduced motion is enabled after it loads. It has a CSS fallback for
  unavailable WebGL.
- The custom cursor is omitted when reduced motion is requested and is visually
  hidden below the medium breakpoint.

When adding motion, preserve keyboard interaction and reduced-motion behavior.
Avoid adding an independent animation frame loop if an existing Framer Motion,
Lenis, or React Three Fiber loop can drive the effect.

## Styling and fonts

Tailwind CSS 4 is imported through `app/globals.css` and configured through
`postcss.config.js`. `tailwind.config.ts` extends font families and color tokens.
Font files are provided by `next/font/google` in `app/layout.tsx`; the resulting
CSS variables are applied to the root element and used by the Tailwind font
families.

The shared `.editorial-card` and `.magazine-sheet` effects are defined in
`app/globals.css`. Prefer existing utilities and these shared classes over
creating near-duplicate card styles.

## Rendering and assets

The project has one App Router page and no API routes or database integration.
Portfolio data is local and imported from `lib/data.ts`. Static files such as the
resume and icons are served from `public/`.

The project uses `next/font/google`; production builds may need network access
when the font assets are first fetched, depending on the build environment/cache.
Only Inter and Inter Tight are loaded; the unused JetBrains Mono font was removed
to avoid an unnecessary font download.

## Search engine metadata

`SITE_CONFIG.url` in `lib/data.ts` is the canonical site origin. The root layout
uses it for canonical and social metadata; `app/sitemap.ts` and `app/robots.ts`
use it for crawler discovery. Keep the configured domain consistent with
production.

The home page emits Person JSON-LD using the public name, job title, description,
and profile links. The JSON is escaped before it is inserted into the page.
