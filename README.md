# Muhammad Jahanzaib — Portfolio

An editorial, single-page portfolio for frontend engineer Muhammad Jahanzaib. The
site combines project case studies and professional information with scroll-driven
motion and a WebGL hero scene.

## Highlights

- Responsive portfolio sections for about, narrative, philosophy, skills,
  experience, projects, education, and contact.
- Interactive 3D hero built with React Three Fiber, Drei, and Three.js.
- Framer Motion effects, Lenis smooth scrolling, and a scroll progress indicator.
- Searchable command palette (`Ctrl+K` / `⌘K`) for home, projects, and resume.
- Reduced-motion preference support for the cursor, smooth-scroll setup, and 3D
  motion.
- Lazy-loaded WebGL scene that pauses offscreen and caps render resolution.
- Canonical, Open Graph, Twitter, Person structured data, sitemap, and robots
  metadata.
- A compact 64px favicon instead of a 1024px image mislabeled as an ICO.

## Technology

- Next.js 16 App Router, React 19, and TypeScript
- Tailwind CSS 4
- Framer Motion and Lenis
- React Three Fiber, Drei, and Three.js
- cmdk and Lucide icons

Fonts are loaded with `next/font/google`: Inter and Inter Tight.

## Requirements

- Node.js `>=20.18.0` (see `package.json`)
- npm

## Start locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks and production

```bash
npm run lint
npx tsc --noEmit
npm run build
npm run start
```

Run `npm run build` before `npm run start`. The repository does not currently
define a unit-test script.

## Documentation

- [Architecture and runtime behavior](docs/architecture.md)
- [Content and site configuration](docs/content-and-customization.md)
- [Development, validation, and deployment](docs/development-and-deployment.md)

## Repository map

```text
app/                    App Router layout, page, global styles, loading/error UI
components/effects/     Cursor and scroll-progress effects
components/layout/      Floating navigation, Lenis wrapper, footer
components/sections/    Page sections and their presentation
components/three/       React Three Fiber hero scene
components/ui/          Command palette and section heading
hooks/                  Reduced-motion preference hook
lib/data.ts             Portfolio content, links, and navigation
lib/utils.ts            Shared class-name helper
public/                 Resume, logo, icons, and social preview image
docs/                   Project documentation
```

## Contact behavior

The contact form opens the visitor's default email application with the name,
email address, and message prefilled. It does not submit to a server. To collect
messages directly, connect the form to a trusted form provider or an API route
and update the behavior described in [the contact section](docs/content-and-customization.md#contact-form).

## License

See [LICENSE](LICENSE).
