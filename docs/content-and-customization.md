# Content and customization

The site content and external profile links are centralized in `lib/data.ts`.
The UI components render this data; keep data changes aligned with the fields
described below.

## Main data exports

| Export | Used by | Expected content |
| --- | --- | --- |
| `SITE_CONFIG` | Layout metadata, hero, contact, footer, command palette, sitemap, robots | Name, title, description, canonical URL, email, location, GitHub, LinkedIn, resume path |
| `heroData` | Hero section | Eyebrow, headline, introduction, brand statement, short skill pillars |
| `aboutData` | About section and editorial story | Mission, biography, principles, timeline, and summary stats |
| `storyNarrative` | Editorial story | Ordered entries with `index`, `title`, `summary`, and `detail` |
| `philosophyData` | Philosophy section | Intro statement, supporting lines, and principle cards |
| `skills` | Skills section | Categories containing an `items` array |
| `experience` | Experience section | Company, role, period, location, description, focus items, and technologies |
| `projects` | Projects section | Project identity, case-study copy, links, technologies, metrics, and highlights |
| `education` | Education section | Institution, degree, period, and location |
| `navItems` | Floating navigation | Anchor `id` and visible `label` |

Use truthful, verifiable portfolio copy. Project metric labels and values are
displayed as supplied; avoid adding unsupported outcome claims.

## Updating links and identity

1. Edit the appropriate values in `SITE_CONFIG` in `lib/data.ts`.
2. Update the canonical URL in `SITE_CONFIG.url` if the production domain
   changes. The canonical link, Open Graph URL, sitemap, robots sitemap link,
   and Person JSON-LD use this shared value.
3. Update the social preview and metadata in `app/layout.tsx` if the branding
   or image changes.
4. Check resume paths and all external links in the browser after editing.

Keep the configured origin consistent with the deployed domain.

## Adding a project

Add a record to the `projects` array in `lib/data.ts`. Each record currently
uses:

- `title` and unique `slug`
- `description` and `longDescription`
- `challenge`, `approach`, and `outcome`
- `highlights` and `tech` arrays
- `metrics`, an array of `{ value, label }` pairs
- `period` and `role`
- optional `demo` and `repo` URLs
- `image` path (retained in the data; the current project section does not render it)

The project section renders the case-study copy, metrics, highlights, technology
tags, and available demo/repository links. Ensure each `slug` is unique and each
metric has a stable, unique label within its project.

## Navigation

`navItems` controls the floating navigation. Its `id` values must match actual
section IDs in the page components. The command palette and footer currently
link to `#hero` and `#projects`; update those controls if those IDs change.

## Contact form

The form in `components/sections/contact.tsx` uses a `mailto:` URL with an
encoded subject and body. It does not send data to a backend and cannot confirm
delivery. To collect messages in the site, replace the mail-client action with a
server-backed endpoint or a form provider, add server-side validation and
spam-protection, and update this documentation.

## Visual assets

Place public assets in `public/` and reference them with root-relative paths
(for example, `/logo.svg`). The layout uses `/og-image.png` for social previews,
`/favicon.png` for browser tabs, `/apple-touch-icon.png` for Apple devices, and
the configured resume PDF for resume links. Keep icons appropriately sized and
encoded; avoid serving large source artwork as a favicon.
