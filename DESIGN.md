---
name: "Muhammad Afiq Apandi Portfolio"
description: "A calm, evidence-led full-stack portfolio built from sea-glass color, disciplined spacing, and precise interaction cues."
colors:
  sea-glass-paper: "#e3fdfd"
  sea-glass-mist: "#cbf1f5"
  sea-glass-tint: "#a6e3e9"
  signal-teal: "#71c9ce"
  action-teal: "#2a7479"
  action-teal-deep: "#215d61"
  graphite-ink: "#183739"
  body-ink: "#2a5559"
  muted-ink: "#376f74"
  night-canvas: "#071b1d"
  night-surface: "#0f3033"
  night-raised: "#18494d"
typography:
  display:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: "3.5rem"
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: "2.5rem"
    letterSpacing: "-0.025em"
  title:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: "1.75rem"
    letterSpacing: "-0.025em"
  body:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.75rem"
  label:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: "1.5rem"
  meta:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: "1.5rem"
rounded:
  control: "6px"
  tile: "12px"
  card: "16px"
  panel: "24px"
  pill: "9999px"
spacing:
  base: "4px"
  compact: "8px"
  standard: "16px"
  comfortable: "24px"
  wide: "32px"
  section: "64px"
  section-wide: "80px"
components:
  button-primary:
    backgroundColor: "{colors.graphite-ink}"
    textColor: "{colors.sea-glass-paper}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "8px 12px"
  button-primary-hover:
    backgroundColor: "{colors.body-ink}"
    textColor: "{colors.sea-glass-paper}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "8px 12px"
  button-secondary:
    backgroundColor: "{colors.sea-glass-mist}"
    textColor: "{colors.night-surface}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "8px 12px"
  navigation-pill:
    backgroundColor: "{colors.sea-glass-paper}"
    textColor: "{colors.graphite-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 12px"
  evidence-card:
    backgroundColor: "{colors.sea-glass-paper}"
    textColor: "{colors.graphite-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.card}"
    padding: "24px"
  information-panel:
    backgroundColor: "{colors.sea-glass-paper}"
    textColor: "{colors.body-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.card}"
    padding: "24px"
  identity-badge:
    backgroundColor: "{colors.sea-glass-paper}"
    textColor: "{colors.graphite-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    height: "40px"
    width: "40px"
---

# Design System: Muhammad Afiq Apandi Portfolio

## Overview

**Creative North Star: "The Quiet Engineering Ledger"**

The portfolio behaves like a carefully maintained record of professional evidence: calm enough to read without friction, structured enough to inspect quickly, and specific enough to earn trust. Its sea-glass atmosphere is light and optimistic, while deep teal ink keeps claims, navigation, and actions grounded.

The system is airy rather than sparse. Generous intervals separate major ideas, compact typography keeps supporting facts efficient, and interaction appears through precise changes in color, scale, and focus rather than spectacle. The visual language rejects neon or cyberpunk styling, loud gradients, dense dashboard chrome, and ornamental motion.

**Key Characteristics:**

- Cool sea-glass surfaces with deep teal ink and purposeful signal color.
- Evidence-first hierarchy with strong headings, readable supporting copy, and restrained metadata.
- A centered portfolio frame that becomes simpler and more linear on smaller screens.
- Quietly tactile components with generous hit areas and visible interaction states.
- Paired light and dark themes composed from the same cyan-teal family.

## Colors

The palette uses the four confirmed sea-glass colors as its atmosphere, then derives darker teal inks where readable text and control contrast require them.

### Primary

- **Signal Teal** (#71c9ce): Marks selected navigation, calls to inspect evidence, focus, and small identity accents.
- **Action Teal** (#2a7479): Carries readable links and action labels on light sea-glass surfaces.
- **Deep Action Teal** (#215d61): Strengthens hover and keyboard-focus states where the lighter signal color would not meet contrast requirements.

### Neutral

- **Sea-Glass Paper** (#e3fdfd): The central reading surface and the lightest control surface.
- **Sea-Glass Mist** (#cbf1f5): The page canvas, quiet hover field, and secondary control surface.
- **Sea-Glass Tint** (#a6e3e9): Borders, tiles, and stronger low-emphasis structure.
- **Graphite Ink** (#183739): Primary headings, navigation text, and strong labels in the light theme.
- **Body Ink** (#2a5559): Long-form and explanatory text in the light theme.
- **Muted Ink** (#376f74): Dates, eyebrows, captions, and secondary metadata that must remain readable.
- **Night Canvas** (#071b1d): The dark-theme outer canvas.
- **Night Surface** (#0f3033): The dark-theme central reading plane.
- **Night Raised** (#18494d): Floating controls and secondary surfaces in dark mode.

### Named Rules

**The Evidence Signal Rule.** Signal color identifies navigation, action, focus, or inspectable evidence; it is not scattered as decoration.

**The Contrast Before Fidelity Rule.** The four supplied palette colors own the atmosphere, but deep derived inks carry text whenever the original light swatches cannot meet WCAG 2.2 AA.

## Typography

**Display Font:** ui-sans-serif (with system-ui and sans-serif fallbacks)

**Body Font:** ui-sans-serif (with system-ui and sans-serif fallbacks)

**Character:** A single, neutral sans family keeps attention on the evidence. Weight, scale, line height, and spacing create the hierarchy; the typography does not perform a separate brand persona.

### Hierarchy

- **Display** (700, 3rem, 3.5rem line height): Large-screen page and homepage statements; it steps down to the headline size on small screens.
- **Headline** (700, 2rem, 2.5rem line height): Mobile page statements and prominent error titles.
- **Title** (600, 1rem, 1.75rem line height): Card titles and named evidence.
- **Body** (400, 1rem, 1.75rem line height): Introductions and narrative copy, normally constrained to a 42rem reading measure.
- **Label** (500, 0.875rem, 1.5rem line height): Navigation, buttons, actions, and compact supporting copy.
- **Meta** (400, 0.8125rem, 1.5rem line height): Dates and secondary role information.

### Named Rules

**The Quiet Hierarchy Rule.** Use no more type styles than the evidence needs; scale and weight establish order without decorative casing, exaggerated tracking, or display-font theatrics.

## Layout

The interface sits inside an 80rem maximum frame with a distinct reading surface. Content uses a 42rem measure for focused prose and expands to 64rem for multi-column portfolio sections. Horizontal padding progresses from 16px on small screens to 32px and 48px at larger breakpoints.

Major page entries use 64px of top space on mobile and 128px from the small breakpoint. Content sections repeat a 64px to 80px rhythm. Desktop layouts introduce two-column or four-column structures only when they improve comparison; mobile returns to a single vertical reading order. The navigation collapses into a focused popover below the medium breakpoint.

**The One Reading Path Rule.** Responsive layouts may change column count, but headings, evidence, and next actions must retain an obvious top-to-bottom sequence.

## Elevation & Depth

The system uses restrained layering. Borders and one-pixel rings define most structure; soft ambient shadows are reserved for floating navigation, theme controls, avatars, and compact identity badges. Cards remain largely flat and reveal a tinted field on hover rather than carrying permanent elevation.

### Shadow Vocabulary

- **Identity Lift** (`0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`): Avatars and project initials that need separation from the reading surface.
- **Floating Control Lift** (`0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`): Navigation and theme controls that remain visually available above content.

### Named Rules

**The Lift Is Earned Rule.** A shadow indicates a floating or identity-bearing object; ordinary content structure uses spacing, tint, or a ring instead.

## Shapes

Shape communicates component rank. Compact buttons use gently curved 6px corners, technology tiles use 12px corners, content cards and panels use 16px corners, and the mobile navigation panel uses 24px corners. Fully rounded pills are reserved for compact navigation, circular identity marks, and theme controls.

**The Radius Has Rank Rule.** Larger radii belong to larger containing surfaces; do not turn ordinary content blocks into a field of interchangeable pills.

## Components

### Buttons

- **Shape:** Compact rounded rectangle with a 6px radius and 8px by 12px padding.
- **Primary:** Deep graphite surface, sea-glass text, and semibold label typography.
- **Secondary:** Sea-glass mist surface with deep ink and a quieter medium-weight label.
- **Hover / Focus:** Hover changes the semantic surface by one tonal step. Keyboard focus uses a 3px teal outline with 3px separation.

### Cards / Containers

- **Corner Style:** Content panels use 16px corners when they carry a visible boundary.
- **Background:** Reading surfaces use Sea-Glass Paper; hoverable evidence cards reveal Sea-Glass Mist behind their full hit area.
- **Shadow Strategy:** Evidence cards stay flat; only identity badges inside them receive soft lift.
- **Border:** Information panels use a one-pixel Sea-Glass Tint border, softened in dark mode.
- **Internal Padding:** Bordered information panels use 24px; evidence-card hit areas extend beyond the text without adding a permanent box.

### Navigation

Desktop navigation is a floating pill with compact labels, an active teal text state, and a thin fading underline. Mobile navigation uses a 24px popover with divided, full-width rows. The theme control repeats the pill language as a circular companion.

### Technology Tiles

Technology tiles are the most expressive repeated objects: lightly rotated, 12px to 16px rounded surfaces with a centered circular mark and concise technology label. The rotation varies gently; color and shadow remain restrained.

### Section Ledger

Experience and skill sections become a four-column ledger at the medium breakpoint: a compact section label occupies the first column and evidence occupies the remaining three. A subtle vertical rule reinforces the division without turning the page into dashboard chrome.

## Do's and Don'ts

### Do:

- **Do** use Sea-Glass Paper, Mist, Tint, and Signal Teal as the dominant atmospheric family.
- **Do** use the derived deep teal inks for body text, actions, and focus states that require stronger contrast.
- **Do** keep claims easy to scan through clear headings, measured line lengths, and generous section intervals.
- **Do** preserve visible keyboard focus and a non-color cue for active or actionable content.
- **Do** compose dark mode with distinct canvas, surface, and raised-control roles.

### Don't:

- **Don't** use neon or cyberpunk motifs, loud gradients, dense dashboard chrome, or ornamental motion.
- **Don't** use Signal Teal for small body text on light surfaces; use Action Teal or a deeper ink.
- **Don't** scatter accent color across decoration that does not communicate action, selection, focus, or evidence.
- **Don't** add permanent shadows to ordinary cards when spacing, tint, or a one-pixel ring already defines the structure.
- **Don't** convert large content surfaces into pills or make every repeated item a boxed card.
