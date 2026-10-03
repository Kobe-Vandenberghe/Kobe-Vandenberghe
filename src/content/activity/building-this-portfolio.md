---
title: Building this portfolio
summary: A small, content-first site for my engineering interests and technical notes.
date: '2026-10-03'
type: development
tags: [Astro, TypeScript, Web]
schoolRequired: true
---

## Why I built it

I wanted a place to introduce myself, share my engineering interests, and keep technical notes and reflections. The site also supports my Professional Networking module.

The structure is simple: Home, About, and Activity. It focuses on my interests in .NET, DevOps, architecture, and agentic systems, with a separate download for my CV.

## How it works

I chose **Astro and TypeScript**, with **Tailwind CSS** for styling. Astro generates static HTML, which suits a site mainly used for reading and navigation.

Articles are **Markdown files** stored alongside the code. MDX is available when a post needs a component. There is no separate CMS: adding a post means adding a file and rebuilding the site. Drafts and future-dated entries stay out of the public version.

## Publishing and exporting

The deployment workflow is set up for **GitHub Pages**, without a custom domain configured yet. GitHub Actions builds the site and its PDF exports before deployment.

The portfolio PDF brings About and all published articles together, using the same visual style as the website. Each article also has its own PDF download.

I can add more content as I go, without changing the basic structure.
