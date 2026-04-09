# Theme Section Architecture Design

**Date:** 2026-04-09

## Goal

Make light mode stay visually light and dark mode stay visually dark, while keeping a restrained editorial tone across the site.

## Decisions

### Section semantics

- `default` is the standard page surface.
- `tint` is the lighter secondary surface used for section separation in light mode and subtle depth in dark mode.
- `inverse` is reserved for strongly inverted areas such as the footer.
- `hero` is a thematic section style used for page intros. In light mode it stays warm and light. In dark mode it becomes fully dark.

### Color behavior

- Light mode should use parchment, paper, and warm gray surfaces only.
- Dark mode should use deep brown-black surfaces with warm text and muted borders.
- Code blocks may remain darker than surrounding content because they are tool surfaces rather than page sections.

### Typography behavior

- Keep serif display for hero and section headings.
- Keep sans-serif for navigation, body copy, cards, and controls.
- Reduce oversized display weight and increase body contrast for longer reading comfort.

## Scope

- Update global theme tokens and semantic section utilities in `src/styles/global.css`.
- Keep the footer as the main inverse area.
- Convert homepage secondary emphasis blocks away from dark-light clashes.
- Make existing hero sections adopt the new semantic section style consistently.

## Verification

- Check homepage, intro page, and one syntax page in both light and dark mode.
- Verify navigation, cards, prose, links, and code blocks remain readable.
- Run `npm run build`.
