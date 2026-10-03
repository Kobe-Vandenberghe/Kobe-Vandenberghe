# Content plan

## Publication rule

The pasted outline is planning material, not verified biography or evidence. Keep incomplete content as drafts. Publish only facts, dates, links, and outcomes the owner has confirmed.

The [owner interview](interview-notes.md) establishes e-portfolio school coverage as the primary goal and a future job search as secondary. Gather specific interests and demonstrated skills first; do not require featured projects for launch. The latest preference is minimal experience content and no substantial education history. Use only the e-portfolio portion of the school PDF; see [school site requirements](school-site-requirements.md).

## Material to gather

| Area | Needed content |
| --- | --- |
| Identity | Preferred public name, role, location, short introduction |
| Motivation | Interests, preferred problems, why software engineering matters to Kobe |
| Profiles | Owner-supplied GitHub and LinkedIn URLs recorded in interview notes; optional public email |
| Experience (minimal/optional) | A short approved context sentence if useful; no timeline required |
| Education (not planned as a section) | Only a concise current-role reference if the owner wants it |
| Technologies / skills | Tools actually used, capabilities, and examples from experience or coursework; distinguish current learning |
| CV | `CV.pdf` supplied and reviewed; use a compact download link, preserving the original |
| Languages | Dutch native, English C1; website/article language still to confirm |
| Projects (future/optional) | Description, personal contribution, stack, status, repositories, screenshots, technical lessons when the owner chooses to publish work |
| Activities | Actual dates, reflection, relevant links, and required evidence |
| School brief | E-portfolio portion reviewed; actual article selection and submission deadlines still need confirmation |
| Media | Permission to publish, captions, alt text, and removal of private data |

Confirmed technical context: .NET / ASP.NET Core is the owner's primary ecosystem; backend systems, DevOps, architecture, system design, and databases are key interests. He also reports Azure, deployments, CI/CD, GitHub Actions, and hands-on multi-agent / AI runtime work at Skyline Communications. Record these as reported experience, without invented role titles, dates, proficiency levels, or public employer deliverables. Codefever and education are now described in the supplied CV, but a substantial history section is still not planned.

The subsequently supplied [CV](../CV.pdf) provides role/date and technical context, summarized in [interview notes](interview-notes.md). It establishes source-backed personal context, without changing the owner's preference for minimal history and no featured projects. His clarified agent work involves integrating system prompts into an agent runtime. Use that description rather than the ambiguous phrase “prompt injection.”

## Candidate projects

Deferred following the interview: the owner has no projects he currently wants to spotlight. Retain the outline's candidates as future possibilities, not launch requirements.

| Project | Candidate description | Evidence to gather |
| --- | --- | --- |
| Stacklings | Multiplayer tower-defense game on Roblox | Gameplay images, actual Luau/Lua tooling, personal role, technical challenges, public code if available |
| PaaS | Deployment platform with isolated builds and automated deployments | Architecture, real stack, build/deploy flow, isolation decisions, screenshots, repository |
| AmplifyOS | Internal knowledge and contribution platform | Allowed public description, contribution, screenshots safe to publish, permission for internal material |

These are suggestions from the outline, not completed case studies or verified claims. A private repository is acceptable: explain the project with authorized evidence and omit the repository link.

## Project writing template

1. What is it, who is it for, and what problem does it solve?
2. What was my role, and what did I implement?
3. What stack did I use, and why?
4. Which technical problem was interesting? Explain the decision and tradeoff.
5. What evidence can a reader inspect?
6. What did I learn, and what would I change next?

Prefer concrete examples over a tool inventory. Do not invent performance measurements, user numbers, or results.

## Activity writing templates

For an event or hackathon:

1. The event: date, context, and why I attended.
2. What I did or what we built: my contribution and relevant technical details.
3. What I took away: specific insights, connection to my interests or work.
4. Reflection: what I would apply next and whether I would attend again, with reasons.
5. Photo/evidence and relevant links.

For a development log:

1. The problem or objective.
2. Approach and meaningful decisions.
3. Result, with evidence when possible.
4. Lessons and next steps.

Optional commentary on a podcast or talk can identify and link the source and reflect on its ideas. Do not label a listening reflection as completion of a separate school podcast assignment. That assignment's details are outside the requested PDF review scope.

## Website-specific school coverage

The supplied brief's e-portfolio portions are summarized in [school site requirements](school-site-requirements.md). They require an identifiable public portfolio, an easy article overview, a website-build post, meaningful reflections, and a final PDF snapshot. Projects, a CV, and extensive personal history are optional content examples.

| Website requirement | Planned content | Current state |
| --- | --- | --- |
| Clear identity / About | Concise identity, interests, motivations, and skills | Technical focus confirmed; final copy pending |
| How the website was made | Activity post about Astro, content workflow, GitHub Pages, and domain choice | Initial article implemented |
| Discoverable articles | Activity archive; no separate school overview | Implemented; add real entries later |
| Meaningful reflections | Context, learning, critique, and future relevance | Actual entries pending |
| Public URL and final PDF | Published site and complete printable snapshot | Implementation pending |

Possible entries from the outline include “Building my portfolio,” “Hack The Future,” and AI/security Tech & Meet reflections. These are still candidates, not completed activities or a whole-module compliance checklist. The owner will confirm which articles belong on the site. Sample dates and topics are not publishing commitments.

The owner chose to omit a school overview and requirement mapping dashboard. Activity directly lists the articles. General section 4.3 guidance has no universal word count; activity-specific evidence and length rules, if later included, must be handled separately.

## Proposed content model

The Activity schema is implemented in `src/content.config.ts`; Projects remain future scope. `requirementIds` are not implemented because there is no requirements dashboard. Optional article images support source, alt text, and caption.

| Collection | Fields |
| --- | --- |
| Projects | `title`, `summary`, `draft`, `featured`, `order`, `technologies`, `role`, `status`; optional `repository`, `demo`, `hero` |
| Activity | `title`, `summary`, `date`, `type`, `draft`, `tags`, `schoolRequired`; optional `hero` |

Use filename-derived slugs. Image metadata contains a source, meaningful alt text, and an optional caption. Dates use ISO `YYYY-MM-DD` values with one consistent display policy so timezone conversion cannot change the calendar day.

Activity types initially: `development`, `event`, `hackathon`, `podcast`, `reflection`. School requirements are separate metadata, not competing activity types.

Example draft:

```yaml
---
title: Hack The Future
summary: Replace with a factual summary after the event.
date: '2026-11-24'
type: hackathon
draft: true
tags: []
schoolRequired: true
---
```

Exclude drafts and future-dated activity from production routes, recent activity, and PDF exports. Draft preview can be added later for local use.

## Ready-to-publish checklist

- Facts, date, contribution, and profile/repository links confirmed.
- Clear summary and useful body; no template copy remains.
- Media approved, captioned, and accessible.
- School requirement mapping and evidence checked when relevant.
- Preview readable at mobile and desktop widths.
- PDF inspected when the entry is exportable.
