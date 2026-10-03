# Website specification

## Routes

Paths below are logical routes. Deployment may add a repository base path.

Interface text and articles are English-only. No language switcher or translated routes are planned.

| Route | Page | Purpose |
| --- | --- | --- |
| `/` | Home | Identity, engineering interests, skills, background, recent activity, and useful links |
| `/projects/` | Projects (future/optional) | Browse case studies once the owner has work to show |
| `/projects/[slug]/` | Project (future/optional) | Explain one project and show evidence |
| `/activity/` | Activity | Chronological writing and activity archive |
| `/activity/[slug]/` | Activity entry | Read one reflection or development log |
| `/about/` | About | Identity, engineering interests, motivation, and skills; minimal background |
| `/cv/` | CV (optional future page) | Add only if a dedicated CV page becomes useful; initial site links directly to the supplied PDF |
| `/print/` | Printable snapshot | Combined portfolio source for PDF generation; noindex and excluded from sitemap |
| `/404.html` | Not found | Explain the missing page and link home |

## Shared navigation and footer

Header, in order: **Kobe Vandenberghe** → home; **Home**; **Activity**; **About**; **CV ↓** → the supplied PDF; **GitHub ↗** → confirmed profile. Home is an explicit link as well as the wordmark destination. Keep CV a compact utility link. Add **Projects** only when there is published project content the owner wants to show. Do not expose an empty Projects archive at launch.

Mark the current navigation section. On mobile, keep all links accessible through a simple wrapping or stacked layout; use a menu only if necessary. The name and utility links must not crowd the content.

Footer: copyright year and name; GitHub; LinkedIn; **Portfolio PDF** download. There is no school overview page or link, as explicitly requested. Activity keeps all articles directly discoverable.

External links use descriptive text and a small external-link mark. Prefer opening in the same tab; if a new tab is used, announce that behavior accessibly.

## Home

Use a compact editorial introduction followed by technical interests, strengths/background, and activity. Within thirty seconds, the page should communicate who Kobe is, what he is good at, and which areas of software engineering interest him. Large typography provides hierarchy, but the introduction must not become a full-screen branding hero. Follow the [style guide](style-guide.md) for spacing, color, and interactions.

1. Name as the main heading.
2. Short introduction emphasizing backend development with .NET, DevOps, system design, and architecture. The supplied CV identifies Kobe as a Software Engineering student at Howest in Roeselare, Belgium; final copy remains to be refined.
3. GitHub, LinkedIn, and a compact CV download link.
4. A short interests and skills section linked to About. Include databases, Azure, CI/CD, GitHub Actions, and agentic systems where the owner can explain actual use. No employment or education timeline on Home. Describe actual capabilities; distinguish strengths from subjects being learned.
5. Recent activity: up to three published entries, newest first, with date and linked title.

Use **All activity →** for the article overview. There is no Selected work section initially. Projects can be added later at the owner's discretion. Do not fill the homepage with a long biography, skill percentages, or every school activity.

## Projects index

Future/optional scope. The owner currently does not want to spotlight unfinished or unrepresentative work; these templates are retained for later use.

Heading and a one-sentence introduction, followed by open editorial project rows. Each item has a title, concrete description, a few technologies as quiet text metadata, and a case-study link. Separate entries with whitespace or thin rules. Show a useful image only when available; it can sit beside the copy on wide screens. Use a grid only if the content benefits, and avoid a repetitive boxed-card layout.

Initial scale does not need search or filters. Do not render an empty image slot or a broken repository link.

## Project detail

- **← Projects** link.
- Title, short summary, technologies, role, and honest status.
- Screenshot or diagram when meaningful, with alt text and caption.
- Overview and problem addressed.
- What Kobe built; explicitly distinguish team contributions.
- Technical decisions, interesting problems, and tradeoffs.
- Evidence and screenshots.
- Lessons and possible next steps.
- GitHub and live demo links when public and available.
- **Download PDF** for this case study, following the export spec.

Sections may be omitted when they would add no useful information. There is no minimum essay length.

## Activity index

Title: **Activity**. A short description can explain that this includes development notes, events, and reflections.

Group entries by year; display newest first, with date, title, type, and estimated reading time. Reading time is calculated from content rather than manually claimed. Each title links directly to its entry.

Use typography and alignment to distinguish years, dates, and titles. Keep rows open and compact, with generous space between year groups and no enclosing cards.

All published entries appear here, including school-related ones. Activity is the overview, with no separate evaluator dashboard. Add filters only if the archive later becomes large enough to justify them.

## Activity detail

- **← Activity** link.
- Title, date, type, and optional topic tags.
- Relevant photo or image with caption and alt text when available or required.
- Article body with short sections appropriate to the activity.
- References or repository links where relevant.
- **Download PDF** for this article.

Keep academic identifiers in metadata rather than dominating the article title. An event in the future must not appear as a completed reflection.

## About

Text-only: no personal portrait or avatar.

Short introduction followed by specific Engineering interests and Technologies / skills sections. Emphasize .NET and ASP.NET Core, backend systems, DevOps, architecture, databases, cloud deployment, and agentic systems. Keep professional history minimal; no dedicated employment or education timeline by default. A brief reference to hands-on agent work is possible. Include a small Languages line: Dutch (native), English (C1). Finish with GitHub, LinkedIn, and **Download CV**.

Technologies and skill sets use plain text with concise context about what Kobe can do. Separate demonstrated strengths from current learning interests. No rated progress bars or invented proficiency levels. Do not imply senior expertise. Describe the clarified agent work as integrating system prompts into an agent runtime; avoid the ambiguous label “prompt injection systems.”

## CV

The owner supplied `CV.pdf`. Initially serve an unchanged copy from a stable public URL, such as `public/cv/kobe-vandenberghe-cv.pdf`, and link it directly from CV utilities. Account for the deployment base path. The current planning phase does not copy or publish this file.

If a dedicated page is added later, provide a short accessible description and a clearly labeled **Download CV (PDF)** link. Do not duplicate the entire résumé unless requested. This supplied CV is separate from generated page exports. An inline PDF viewer is optional and must not be the only way to access the CV.

Until the approved CV exists, omit download links or show clear unavailable text; never ship a dead button.

## Portfolio PDF

The owner explicitly declined the school overview. No `/portfolio/` route or requirements dashboard is included.

The footer downloads the combined portfolio PDF. `/print/` is the printable source, comprising introduction, About/skills, and published articles. It uses the same content and visual tokens as the screen pages.

The combined PDF is generated during build. The printable route also offers a manual Print / Save as PDF button. It is not a school overview and has no grading checklist.

## Interaction rules

- Navigation uses links; actions such as an on-demand export use buttons.
- Use visible hover and keyboard focus states.
- No inactive decorative buttons, placeholder destinations, or fabricated completion states.
- If a collection is empty, show a brief honest message; hide empty “Selected work” or “Recent activity” sections on Home.
- Every page has one main heading, a main content landmark, and a skip-to-content link.
