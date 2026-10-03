# Technical architecture and plan

## Stack and constraints

Use Astro for static pages and content collections, TypeScript for typed application code, Tailwind for shared visual tokens and styling, and Markdown for normal articles. Use MDX only where a page benefits from an actual component.

Deploy static output to GitHub Pages. No backend, login, database, or content-management service is needed for the initial portfolio. Content lives in the repository.

The initial implementation is present and dependencies are pinned in `package-lock.json`. The GitHub Pages workflow is ready, but this workspace initially had no Git repository or remote; it has not been published. See [README](../README.md) for commands.

## Structure (project portions remain optional future scope)

```text
docs/                         Planning documents
public/
  cv/                         Approved CV PDF
  exports/                    Generated PDF files in release output
src/
  components/                 Header, footer, project list, activity list, metadata
  layouts/                    Site, article, print layouts
  styles/                     Theme tokens, global and print styles
  content/
    projects/                 Markdown/MDX case studies
    activity/                 Markdown/MDX activity entries
  assets/                     Content images for processing
  data/                       Profile, navigation, school requirements mapping
  pages/
    index.astro
    projects/
      index.astro
      [slug].astro
    activity/
      index.astro
      [slug].astro
    about.astro
    print.astro
    404.astro
scripts/                      PDF generation and content validation
.github/workflows/            Build, export, and Pages deployment
```

The implementation may refine filenames to suit the selected Astro release. Generated PDFs belong to the release artifact, not manually maintained source files.

## Content and layout architecture

- Define validated collection schemas from the [content plan](content-plan.md).
- Use one shared profile source for the home introduction, About references, CV links, footer, and export identity.
- Keep page composition separate from article content so screen and print use the same body.
- Derive indexes, homepage selections, and overview links from published entries.
- No school requirements dashboard or separate overview is implemented; Activity lists all published articles.
- Use a shared publication predicate to exclude drafts and future-dated activity everywhere, including static detail routes and exports.
- Avoid JavaScript for static reading and navigation; add it only for a necessary interaction.

## GitHub Pages planning

Choose the deployment mode before configuring URLs:

| Mode | URL shape | Base path |
| --- | --- | --- |
| User site | `https://USERNAME.github.io/` | `/` |
| Repository site | `https://USERNAME.github.io/REPOSITORY/` | `/REPOSITORY/` |
| Custom domain | Confirmed domain | Usually `/` |

Configure the canonical site URL and base path consistently. Navigation, images, PDF links, internal references, and generated canonical URLs must all work under the chosen base. Do not hard-code `/assets/...` or `/exports/...` in a way that breaks repository hosting.

Build and validate the static site, render PDFs against that build, place them in the published output, and deploy the complete artifact with GitHub Actions. No deployment credentials or workflow are configured in this documentation phase.

## Metadata and content quality

Provide meaningful page titles and descriptions, canonical URLs, and social preview metadata. Generate a sitemap from published pages. Use semantic HTML and optimized local images with explicit dimensions.

Check content schemas, internal links, school requirement IDs, approved CV availability, and referenced images as part of the build or a focused validation script. Do not create links to unavailable external resources merely to fill the layout.

## Implementation sequence

1. Use the reviewed e-portfolio requirements and confirmed profile links; finish the interview and initial article inventory. Do not expand into the rest of the module's workflows.
2. Scaffold the stack and shared styles; implement the common layout and navigation.
3. Add Activity content schemas and a real entry to exercise the article template. Project schemas/templates can wait until the owner wants to publish projects.
4. Build Home, Activity, About, and the printable PDF source, with a compact CV download. No school overview or dedicated CV page; Projects remain future scope.
5. Check responsive layout, keyboard access, and actual content presentation.
6. Implement print layout, individual exports, and the portfolio snapshot; inspect PDFs visually.
7. Configure deployment URL/base and the CI/Pages workflow; validate the published paths.
8. Add focused agent instructions or skills later, based on the actual codebase and workflows.

## Definition of done for the later build

- Static build and TypeScript checks pass.
- Published pages have real content, valid links, and no draft leakage.
- Articles and evidence can be found directly from Activity.
- Shared pages work on mobile and desktop and with keyboard navigation.
- PDF exports pass the checks in [PDF export](pdf-export.md).
- A preview under the intended base path loads pages, images, CV, and exports successfully.
- GitHub Pages serves the approved release at the configured URL.

The initial implementation includes `npm run check`, `npm run build`, and `npm run verify`. Verification checks pages at 1440, 390, and 320 px, page metadata, local links/assets/downloads, skip navigation, reduced motion, PDF signatures, unchanged CV, and absence of school/project routes. PDF generation failure fails the build.
