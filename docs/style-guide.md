# Style guide

## Visual direction

A minimalist software-engineer portfolio. The shared direction is **clean, technical, restrained, and content-first**. Use an editorial layout with generous whitespace, large typography, restrained color, strong section hierarchy, and minimal cards. Prioritize specific engineering interests, demonstrated skills, experience, and technical evidence over personal branding. The initial site has no featured projects; project treatments below are for future use.

Warm off-white background, dark typography, one subdued accent, and occasional thin dividers form the base. Let writing, real screenshots, and technical diagrams carry the page.

## Reference direction

The owner selected [Anthony Fu's personal website](https://antfu.me/) and [Skyline Communications](https://skyline.be/) as inspiration. The following is our intended interpretation of those references, not a requirement to reproduce their current layouts or brand assets:

- Anthony Fu: a personal site centered on technical work, with straightforward access to projects and writing. Translate this into a compact introduction, readable archives, and direct repository links.
- Skyline Communications: the owner's reference for visual polish. Translate this into deliberate typography, precise alignment, consistent spacing, and a confident section hierarchy.

Use the references to guide composition and finish. The portfolio's own content and the rules below determine the design.

## Design priorities

1. Technical substance is the main content: engineering interests, skills, experience, reflections, and evidence. Feature projects only when the owner chooses to publish them.
2. Establish hierarchy through type size, weight, alignment, and whitespace before adding containers or colored surfaces.
3. Make the introduction short enough that substantive interests, skills, or activity begin within the initial desktop viewport at typical sizes. On mobile, let content flow naturally.
4. Keep personal identity clear with a name and short introduction. The owner chose no portrait; About is text-only. A signature logo or personal slogan is not needed for the initial design.
5. Make archives easy to scan and articles comfortable to read. Every decorative element must serve orientation or understanding.

## Excluded treatments

Avoid generic developer portfolio clichés, gradients of any kind, terminal motifs, matrix green, code-brace logos, 3D effects, animated backgrounds, oversized skill icons, decorative skill meters, and startup-style SaaS components. Do not introduce pricing-style cards, testimonial carousels, oversized call-to-action banners, bento dashboards, or repetitive boxed feature grids.

## Proposed tokens

These tokens are implemented in the shared stylesheet. Check future changes on screen and in print.

| Token | Value | Use |
| --- | --- | --- |
| `background` | `#FAFAF8` | Page canvas |
| `surface` | `#FFFFFF` | Media backgrounds and necessary contained content |
| `text` | `#18181B` | Headings and primary text |
| `muted` | `#52525B` | Dates, captions, secondary copy |
| `accent` | `#1D4ED8` | Sparingly used links, focus, and important actions |
| `accent-hover` | `#1E40AF` | Hovered links/actions |
| `border` | `#D4D4D8` | Decorative dividers and subtle outlines |
| `focus` | `#1D4ED8` | Visible keyboard focus outline |

Use borders for separation, not as the only way to identify controls. Verify contrast for actual text, control boundaries, and states during implementation. Do not assume every token pairing is accessible.

Start with a light theme only. A dark theme is optional future work and must use its own checked tokens.

Most of the page should remain neutral. Do not use accent-colored section backgrounds or color every heading and metadata label.

## Typography

- Body and headings: system sans-serif stack; no font download required initially.
- Metadata and code: system monospace stack. Do not use monospace for article body text.
- Body: 16–18 px with roughly 1.65 line height.
- Main heading: responsive 36–64 px, medium or semibold weight, restrained letter spacing, approximately 1.1–1.2 line height. Large type establishes hierarchy without creating a full-screen hero.
- Section headings: responsive 24–36 px, with clear space above them and consistent alignment.
- Metadata: 13–14 px; keep essential text readable on small screens.
- Article reading width: around 65–72 characters per line.

Links in paragraphs are underlined so color is not their only distinction. Headings follow a semantic hierarchy.

## Layout and spacing

- Shared outer container: approximately 1040 px maximum width.
- Article body: approximately 720 px maximum width, with wider media where useful.
- Horizontal padding: 20 px on small screens, 32 px on larger screens.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96 px.
- Section separation: usually 64–96 px on desktop and 40–64 px on mobile. Use smaller gaps within related content.
- Header and footer stay visually quiet, with consistent alignment and optional thin separators.
- Projects default to open editorial rows: title and summary, quiet technical metadata, and a clear case-study link. A useful screenshot can sit beside the text at wider widths and above it on mobile.
- Use a two-column arrangement only when the actual content benefits; do not turn every project into an identical boxed card.
- Activity is a compact chronological list, with dates aligned when space permits.

Let content determine responsive breakpoints. There must be no page-wide horizontal overflow at 320 px, or loss of content when zoomed. Code and wide tables may have clearly contained horizontal scrolling.

## Components

| Component | Treatment |
| --- | --- |
| Primary button | Reserved for a meaningful action; compact accent fill, white text, clear focus ring |
| Secondary button | Compact neutral treatment with a visible boundary; utility actions such as CV/export |
| Text link | Descriptive label; understated arrow where helpful |
| Project item | Open editorial row, title, summary, technology metadata; optional thin divider, no default enclosing card |
| Activity row | Date, title, type/reading time; no oversized card |
| Tags | Small plain text labels separated by spacing or dots; no default badge or pill cloud |
| Screenshot | Full-width within its region, preserved aspect ratio, caption below |
| Code block | Subtle contrasting surface, monospace, contained overflow |
| Requirement status | Plain text such as “Published” or “Not yet published”; accessible without color |

Use cards only when a distinct group genuinely needs containment. Prefer whitespace and thin rules for lists and section boundaries. Controls and necessary containers use roughly 4–6 px corner radii; screenshots can remain square. Avoid decorative shadows. Use normal page flow instead of sticky overlays for core content.

## Motion and interaction

Keep interactions subtle and professional. Use 120–180 ms color, underline, or background transitions on links and controls. Small icon motion of up to 2 px is optional; do not animate whole project rows or lift cards. Avoid scroll reveals that hide content, parallax, cursor effects, and animated page entrances. Honor reduced-motion preferences by disabling nonessential motion.

Give links and buttons visible focus states and usable touch areas; aim for 44 px targets where practical. Hover must never be required to discover content or actions.

## Images and accessibility

Use real project screenshots and relevant event photographs. Preserve image proportions; do not crop away evidence. Include informative alt text, and use empty alt text for truly decorative images. Captions explain context without duplicating the full alt text.

Check keyboard navigation, heading order, active navigation, focus visibility, text contrast, 200% zoom, and small-screen layouts. Public content must remain readable when JavaScript is unavailable.

## Print relationship

PDF output inherits typography, accent, dividers, and content hierarchy. Print styles change layout only where pagination and paper require it. See [PDF export](pdf-export.md) for detailed rules.

## Visual review criteria

- Engineering interests, strengths, experience, and activity are easy to find; a branding hero does not overwhelm them.
- Heading levels and section boundaries are clear without boxes around everything.
- Projects and Activity read as editorial lists, with metadata subordinate to titles.
- Spacing and alignment are consistent across Home, About, archives, articles, and the PDF snapshot.
- Screenshots and diagrams provide technical evidence rather than decoration.
- Color and motion are restrained; links and keyboard focus remain obvious.
- No excluded treatment has entered the layout through a component library or template.
