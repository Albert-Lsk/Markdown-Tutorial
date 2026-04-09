# Theme Section Architecture Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refactor the visual theme so light mode uses light surfaces consistently, dark mode uses dark surfaces consistently, and hero/section styling follows semantic classes.

**Architecture:** Centralize the palette and section semantics in `src/styles/global.css`, then switch high-signal layouts to `section-hero`, `section-tint`, and `section-inverse`. Keep old styling behavior out of content sections so theme changes happen through a small set of reusable primitives.

**Tech Stack:** Astro, Tailwind utilities, global CSS custom properties

---

### Task 1: Add semantic section primitives

**Files:**
- Modify: `src/styles/global.css`

- [ ] Define light-mode and dark-mode surface tokens for `primary`, `card`, `tint`, `hero`, `inverse`, and code surfaces.
- [ ] Add semantic section classes for `section-default`, `section-tint`, `section-hero`, and `section-inverse`.
- [ ] Tighten typography tokens for display headings, prose contrast, and card surfaces.

### Task 2: Move shared layout pieces to semantic sections

**Files:**
- Modify: `src/components/Footer.astro`
- Modify: `src/pages/index.astro`
- Modify: `src/pages/en/index.astro`

- [ ] Keep the footer as the primary `section-inverse` surface.
- [ ] Change the homepage emphasis strip from a dark block to a tinted block.
- [ ] Keep the rest of the homepage hierarchy aligned with the new section semantics.

### Task 3: Migrate page hero sections

**Files:**
- Modify: `src/pages/**/*.astro`

- [ ] Replace hero uses of the old `section-dark` class with `section-hero`.
- [ ] Leave content sections on default or tinted surfaces.
- [ ] Verify that hero text utilities still inherit the right local CSS variables.

### Task 4: Verify

**Files:**
- Modify: none

- [ ] Run `npm run build`.
- [ ] Review the homepage, intro page, and one syntax page in both light and dark mode.
- [ ] Confirm no large dark sections remain in light mode outside explicitly inverse areas.
