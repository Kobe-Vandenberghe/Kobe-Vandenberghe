# Product brief

## Purpose

Build a professional IT portfolio that tells another IT professional who Kobe is, what he builds, what interests him, and how he approaches technical work. It should remain useful after school.

School e-portfolio requirements are the primary goal; supporting a future job search is secondary. The initial content focuses on identity, specific software-engineering interests, skills, and relevant reflections. Keep experience minimal and omit a substantial education history. Projects and Git repositories can provide evidence when the owner has work he wants to publish, but featured projects are not required. See [interview notes](interview-notes.md) for the latest owner decisions and [school site requirements](school-site-requirements.md) for the deliberately limited brief summary.

## Audiences

- IT professionals and potential employers: understand abilities, technical judgment, motivation, and experience quickly.
- Collaborators: see actual work and reach its repositories or demonstrations.
- School evaluators: find each required activity and supporting material directly.

## Agreed direction

- Minimal software-engineer portfolio, with a short homepage introducing background, strengths, specific interests, and activity.
- English-only interface and articles. About is text-only, without a personal portrait.
- Visual direction: clean, technical, restrained, and content-first, inspired by Anthony Fu's personal website and the visual polish of Skyline Communications. Use editorial composition, generous whitespace, large typography, minimal cards, and subtle professional interactions; see the [style guide](style-guide.md).
- Technical substance takes visual priority over personal branding. Avoid gradients, terminal motifs, 3D effects, oversized skill icons, and startup-style SaaS components.
- Technical focus: .NET / ASP.NET Core backend development, DevOps, system design, architecture, databases, Azure, CI/CD, and agentic systems. Describe experience honestly at student level.
- Working initial navigation: Activity and About. Add Projects when the owner has work he wants to publish. The owner's name links home.
- GitHub and LinkedIn are required public links. The owner has supplied a CV; include a compact download utility rather than an extensive résumé page by default.
- Future projects can get concise case studies with evidence: screenshots, diagrams, contributions, technical decisions, and repository links. No projects will be spotlighted initially.
- Activity is the public label for writing, events, development logs, and school reflections.
- Skip the separate school overview, explicitly confirmed by the owner. Activity provides the article overview; the footer offers a Portfolio PDF download.
- PDF exports use the same visual language as the screen pages.
- Use Astro, TypeScript, Tailwind, Markdown/MDX, and GitHub Pages.

## Tone

Specific, direct, and personal. Explain what was built, what decisions were made, and what was learned. Avoid generic journey language, inflated expertise, invented results, or treating attendance alone as proof of skill.

## Initial scope

The initial implementation includes shared layout, Activity collection, Home/About/archive/detail routes, responsive styles, CV download, PDFs, and a GitHub Pages workflow. Publishing requires the chosen remote repository and Pages setup.

Agent instructions and skills are a later task. No custom skills are created in this phase.

## Success criteria

- Within thirty seconds, a visitor can understand who Kobe is, his strengths, and his specific interests within software engineering, and find GitHub, LinkedIn, and an available CV.
- Any future case studies distinguish Kobe's own contribution from team work.
- Activity entries are directly discoverable through the archive without a separate school overview.
- Every published school requirement has a real article and any necessary evidence.
- Pages are readable on mobile, usable with a keyboard, and accessible without animation.
- A downloaded PDF preserves content and the site's visual identity without clipping or unreadable scaling.
- The site builds as static output and works at its configured GitHub Pages URL.

## Decisions still needing input

These do not prevent documentation or initial layout work:

| Decision | Working assumption |
| --- | --- |
| School brief | Supplied; use only the e-portfolio portions. Activity mappings and completion still need owner confirmation |
| Biography and project facts | Outline is a candidate source; verify before publication |
| Public language | English confirmed; Dutch native / English C1 can be listed as language abilities |
| School overview | Explicitly omitted; Activity is the article overview |
| Domain and repository URL | `kobe.dev` is illustrative until confirmed |
| Contact details | GitHub and LinkedIn URLs confirmed in interview notes; add email only if the owner chooses to publish it |
| PDF scope | Individual content pages and a complete portfolio snapshot; see export spec |
| CV | `CV.pdf` supplied and reviewed; working presentation is a compact download utility |
