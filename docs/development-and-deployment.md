# Development and deployment

## Requirements

- Node.js `>=20.18.0`
- npm

The required Node.js version is also declared in `package.json`. Install
dependencies from the repository root with:

```bash
npm install
```

## Local development

```bash
npm run dev
```

The Next.js development server normally serves the app at
[http://localhost:3000](http://localhost:3000).

## Validation

Run these checks before submitting changes:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

There is no configured unit or browser test runner at this time. Validate
interactive changes manually in a browser, including narrow/mobile and desktop
layouts, keyboard navigation, anchor links, the command palette, and a
reduced-motion system preference.

## Production

Build and run the production server with:

```bash
npm run build
npm run start
```

This project does not configure Next.js static export. Deploy it to a host that
supports the Next.js production runtime, following that host's Next.js
deployment instructions. The build output is generated under `.next/` and
should not be committed.

## Deployment configuration

- No application environment variables are currently required.
- `next.config.mjs` enables compression, disables the `X-Powered-By` header, and
  allows remote image patterns for Unsplash and GitHub. Review the allowlist if
  remote images are introduced; the current project cards do not render remote
  images.
- `SITE_CONFIG.url` in `lib/data.ts` is the canonical origin used by root
  metadata, Person JSON-LD, `app/sitemap.ts`, and `app/robots.ts`. Update it
  before deploying to a different domain.
- The generated `/sitemap.xml` lists the single-page canonical URL and
  `/robots.txt` allows crawling and advertises the sitemap.
- The contact form opens a visitor email client; it does not depend on a server
  endpoint.
- `public/` files are served from the site root. Confirm the resume PDF,
  `favicon.png`, apple-touch icon, logo, and social preview image are present in
  the deployed build.

## Accessibility and visual QA

- Check keyboard access and visible focus for links, buttons, and the command
  palette.
- Ensure the 3D hero remains presentable when WebGL is unavailable; the scene
  provides a CSS fallback.
- Test `prefers-reduced-motion: reduce`. The app disables Lenis and reduces
  pointer/continuous 3D motion in this mode.
- Inspect the cursor on pointer-capable desktop screens and ensure it does not
  obscure interactive content.
- Check layout, contrast, overflow, and scroll behavior across mobile and
  desktop breakpoints.
