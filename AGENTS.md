# Kobe Vandenberghe — e-portfolio

A minimal English-language software-engineering portfolio focused on technical interests, skills, and a writing/activity archive. No portrait, featured projects, employment/education timelines, or separate school overview. Project case studies are optional future content.

Stack: **Astro · TypeScript · Tailwind CSS · Markdown/MDX · GitHub Pages**.

The initial site, CV download, article system, PDF exports, and GitHub Pages workflow are implemented. Agent skills remain a separate future task.

## Run locally

Requires Node 22.12+ (Node 24 in CI).

```sh
npm ci
npm run dev
```

Open the URL Astro prints, normally `http://127.0.0.1:4321/`.

```sh
npm run check       # Astro / TypeScript diagnostics
npm run build       # Static site and downloadable PDFs
npm run verify      # Responsive, link, keyboard, and download checks
npm run preview     # Serve the production build locally
```

PDF export uses Playwright. On Windows it uses installed Chrome or Edge when available. Otherwise run `npx playwright install chromium` first (Linux CI installs the system dependencies too). Use `PDF_BROWSER_PATH` for another installed Chromium executable. `npm run build:site` creates only the website; run `npm run export:pdf` afterward before shipping PDF links.

In restricted environments, set `ASTRO_TELEMETRY_DISABLED=1` if Astro cannot write to the user configuration directory.

## Add content

- [Profile](src/data/profile.ts): introduction, profile links, interests, and skills.
- [About](src/components/AboutContent.astro): text reused by the website and PDF.
- [Styles](src/styles/global.css): theme tokens, responsive layout, print styles.
- [Activity](src/content/activity): add `.md` or `.mdx` articles; the filename is the URL slug.

Example frontmatter:

```yaml
---
title: My note
summary: A short description of this entry.
date: '2026-10-03'
type: development
draft: true
tags: [DevOps]
schoolRequired: false
---
```

Write the article underneath; set `draft: false` to publish. Supported types: development, event, hackathon, podcast, reflection. Drafts and future-dated posts are excluded from all production pages and PDFs. Dates use the Brussels calendar.

Optional `hero` frontmatter has `src`, `alt`, and optional `caption`. For `src: images/example.webp`, place the file in `public/images/`. In Markdown body, use `../../images/example.webp` for that same file; avoid root-relative asset URLs that break repository hosting. In MDX/Astro components use `pathFor()` from `src/lib/urls.ts`.

The initial [website-build post](src/content/activity/building-this-portfolio.md) describes the actual implementation. Add real activity entries as they happen.

## PDF and CV

The footer's Portfolio PDF downloads a combined snapshot of the introduction, About/skills, and published articles. Each article has an individual PDF. `/print/` offers manual Print / Save as PDF and is marked noindex and omitted from the sitemap.

`npm run build` regenerates PDFs in `dist/exports/` and includes them in the release. Ignored copies in `public/exports/` make downloads work in the development server after the first build. Rebuild after content edits to refresh them. The CV is served unchanged from `public/cv/kobe-vandenberghe-cv.pdf`. When updating it, replace both `CV.pdf` and the public copy; verification checks they match. The school reference PDF is not published.

## GitHub Pages

The workspace initially had no Git repository or remote. A ready [deployment workflow](.github/workflows/deploy.yml) is included, but no repository has been created or pushed.

1. Put this project in your GitHub repository on `main`, including `package-lock.json`.
2. In Settings → Pages, choose GitHub Actions as the source.
3. Push to `main` or run the workflow manually.

The workflow obtains the actual Pages origin/base path, checks types, builds site/PDFs, verifies them, and deploys the static artifact. Configuration follows the [official Astro Pages guide](https://docs.astro.build/en/guides/deploy/github/).

Test a repository-path build in PowerShell:

```powershell
$env:SITE_URL = 'https://kobe-vandenberghe.github.io'
$env:BASE_PATH = '/e-portfolio'
npm run build
npm run verify
```

Reset `BASE_PATH` to `/` for a root-path local preview. The default canonical hostname is the owner's GitHub Pages hostname; deployment supplies the configured origin. No custom domain is configured.

## Source and verification

Activity selections, completion, personal history, and project claims must not be published as facts without confirmation.

Dependency audit during setup reported a development-only advisory in `http-cache-semantics` through Astro, with no patched registry release available. Do not apply npm's suggested downgrade to Astro 2. The published site serves static files and does not run this cache; recheck for a compatible fix when updating dependencies.
