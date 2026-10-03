# PDF export specification

## Intent

“Like the screen” is interpreted as a PDF that preserves the website's visual identity and content: typography, spacing, accent, screenshots, captions, and hierarchy. It should feel like the same portfolio on paper.

A long web page needs pagination; the PDF is not a stretched screenshot or a literal copy of browser chrome. Keep text selectable and links clickable.

The supplied brief's e-portfolio section 4.4 requires a PDF snapshot for submission but permits simple browser Save as PDF or Markdown conversion. A matching visual style is the owner's preference, not an extra school layout requirement. Prioritize a complete readable export over a complex generation pipeline. See [school site requirements](school-site-requirements.md).

## Planned exports

| Entry point | Output |
| --- | --- |
| Project detail: **Download PDF** | That complete case study |
| Activity detail: **Download PDF** | That complete article and evidence |
| Footer: **Portfolio PDF** | A complete snapshot of published portfolio content |
| CV / About: **Download CV** | Owner-approved CV file, separate from generated exports |

Snapshot order: identity/introduction, homepage interests, About/skills/languages, Activity index, then each published article newest first. Include the Activity index even when it has one or zero entries. There is no school overview or project section. Exclude drafts and future-dated activity, and include only public material. The CV remains a separate download.

Use a complete website snapshot, matching the brief's request for a PDF version of the website. The current implementation is the starting point the owner can extend later.

## Delivery approach

GitHub Pages serves static files. `npm run build` generates PDFs with Playwright against the static build, then CI publishes them alongside the site. Export links download existing files without a server or visitor-side PDF library.

Shared print styles use the screen design tokens and About component. `/print/` composes the complete snapshot. This route is marked noindex and omitted from the sitemap and main navigation.

As an implementation fallback, a clearly labeled **Print / Save as PDF** action may open the browser print dialog. Do not label this fallback “Download PDF,” because it does not directly download a generated file.

Regenerate PDFs whenever published content changes. If generation fails, fail the release rather than publishing stale files as current exports.

## Appearance and pagination

- A4 portrait by default, with approximately 15–18 mm margins.
- Use the same fonts and color tokens; embed/load all resources before rendering.
- Preserve accent and backgrounds where useful; ensure grayscale remains readable.
- Replace interactive navigation with a compact name, document title, and canonical website reference.
- Hide menus, export controls, hover-only decoration, and unrelated footer navigation.
- Keep headings with the following text and avoid splitting short metadata blocks.
- Keep photos and captions together where they fit; scale wide screenshots to the printable width without distortion.
- Let long articles and code flow naturally. Wrap long code lines and URLs where necessary; no clipped overflow.
- Use page numbers for multi-page documents; start About, the Activity index, and each article on a new PDF page.
- Provide an export date and canonical source links. Generated source URLs must use the real deployment address, including its base path.

Do not shrink the entire document to fit one page. Essential text and evidence must remain readable.

## Filenames and behavior

Current filenames: `activity-[slug].pdf` and `kobe-vandenberghe-portfolio.pdf`. Project exports can be added when projects become part of the site.

Links identify PDF format clearly and can show file size when available. CV download must remain independent of the portfolio export pipeline.

## Acceptance checks

- Compare a representative article and project PDF against their screen pages.
- Check every page of the full snapshot for clipping, blank pages, orphaned headings, and unreadable images.
- Verify content, ordering, article index, and evidence.
- Confirm selectable text, clickable links, and readable output at normal scale.
- Confirm drafts/private material are absent.
- Test export links and assets at the production base path.
- Repeat visual inspection when shared layout or print styles change.

If the owner instead requires a literal screenshot PDF or a single specific school submission layout, revise this specification before implementing the export pipeline.
