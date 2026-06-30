# Requirements Document

## Introduction

This feature adds an "Open to Work" banner to Gaurav Pandey's portfolio site — a subtle, animated badge displayed near the Hero section that signals availability to recruiters and hiring managers. The banner reads from the existing `availability` field in `portfolio.ts` and integrates with the site's existing dark/light theme system and animation style (Framer Motion, cursor glow, scroll animations). The badge must be visually consistent with the existing design language (glassmorphism panels, accent colors, JetBrains Mono typography) and must not distract from the primary hero content.

## Glossary

- **Banner**: The `OpenToWorkBanner` React component that renders the animated availability badge.
- **Hero_Section**: The existing `<Hero>` component at `src/components/Hero.tsx` that occupies the top of the page.
- **Availability_Text**: The string value of `profile.availability` from `src/data/portfolio.ts` (currently `'Available for internship opportunities'`).
- **Accent**: The CSS custom property `--accent` (`#8ee3d2` in dark mode), used as the primary brand color throughout the site.
- **Pulse_Animation**: A repeating CSS or Framer Motion animation that scales or fades a ring around the status dot to convey live availability.
- **Reduced_Motion**: The `prefers-reduced-motion: reduce` media query already handled globally in `index.css`.
- **Theme**: The dark or light color scheme toggled via the `light` / `dark` class on `<html>`, controlled by `App.tsx`.

---

## Requirements

### Requirement 1: Render the Banner in the Hero Section

**User Story:** As a recruiter visiting the portfolio, I want to immediately see that Gaurav is open to work, so that I can quickly assess his availability without reading the full page.

#### Acceptance Criteria

1. THE `Banner` SHALL render the `Availability_Text` string sourced from `profile.availability` as visible text inside the `Hero_Section`, with no truncation or clipping.
2. WHEN the `Hero_Section` mounts and `profile.availability` is a non-empty string, THE `Banner` SHALL be present in the DOM and have a computed `visibility` value of `visible` and `opacity` greater than `0`, without requiring any user interaction.
3. THE `Banner` SHALL be placed above the primary `h1` heading in the DOM order and rendered in a position that does not overlap the `h1`, the hero action buttons, or the device mockup visual at any viewport width from 320 px to 1920 px.
4. THE `Banner` MAY display a green status dot alongside the `Availability_Text`; the dot is an independent visual element and the `Availability_Text` SHALL be fully rendered and readable whether or not the dot is present.
5. IF `profile.availability` is an empty string (`""`), THE `Banner` SHALL return `null` and produce no DOM output, no reserved space, and no visible element in the `Hero_Section`.

---

### Requirement 2: Animate the Banner on Entry

**User Story:** As a site visitor, I want the banner to appear with a smooth entrance animation, so that it feels consistent with the rest of the page's motion design.

#### Acceptance Criteria

1. WHEN the `Hero_Section` first renders, THE `Banner` SHALL animate in using a fade (`opacity` 0 → 1) and slide-up (`y` offset 24 px → 0) transition with an `easeOut` easing function and a duration clamped to the range 400 ms – 700 ms (values below 400 ms are treated as 400 ms; values above 700 ms are treated as 700 ms).
2. THE `Banner` entry animation SHALL use a delay in the range 300 ms – 600 ms (inclusive) so that it appears after the primary hero heading begins its own entrance and before the animation feels disconnected from the page load.
3. WHILE `prefers-reduced-motion` is active, THE `Banner` SHALL render immediately in its final visible state (`opacity: 1`, no `y` transform offset), with no transition or animation applied.

---

### Requirement 3: Pulse the Status Dot

**User Story:** As a recruiter, I want the availability indicator to have a subtle live pulse, so that it draws attention without being distracting.

#### Acceptance Criteria

1. THE `Banner` SHALL display a continuously repeating `Pulse_Animation` on a ring element surrounding the green status dot; the ring SHALL animate from `opacity: 1, scale: 1` to `opacity: 0, scale: 1.5` and back to `opacity: 1, scale: 1` in each cycle.
2. THE `Pulse_Animation` SHALL complete one full cycle in a duration between 1.5 s and 2.5 s (inclusive), with the duration value set in the animation configuration.
3. WHILE `prefers-reduced-motion` is active, THE `Banner` SHALL display the status dot in its static, fully-opaque state (`opacity: 1`) without the `Pulse_Animation`; the ring element SHALL either be absent or have its animation disabled.
4. THE `Pulse_Animation` SHALL use only `opacity` and `scale` (transform) properties; it SHALL NOT change `width`, `height`, `margin`, `padding`, `top`, `left`, `right`, `bottom`, or `display` during the animation, to avoid layout reflow.

---

### Requirement 4: Respect Dark and Light Themes

**User Story:** As a site visitor using light mode, I want the banner to look correct in both themes, so that it does not appear broken or out of place when I toggle the theme.

#### Acceptance Criteria

1. WHILE the `light` class is active on `<html>`, THE `Banner` SHALL apply the overridden values of `--panel`, `--line`, `--text`, and `--accent` CSS custom properties (as defined in the `.light` block in `index.css`) for its background, border, text, and status dot colors respectively; where a property is not overridden in `.light`, the `:root` default value SHALL be used.
2. WHILE the `dark` class is active on `<html>` (or when neither `light` nor `dark` is present and the `:root` defaults apply), THE `Banner` SHALL apply the `:root` default values of `--panel`, `--line`, `--text`, and `--accent` for its background, border, text, and status dot colors respectively.
3. THE `Banner` SHALL use CSS custom properties exclusively for all color values applied to its background, border, text, and status dot; no hardcoded hex color values, `rgb()`, `rgba()`, `hsl()`, or `hsla()` literals SHALL appear in the component's inline styles or dedicated CSS rules.

---

### Requirement 5: Maintain Accessibility

**User Story:** As a screen reader user, I want the banner to be announced correctly, so that I receive the same availability information as sighted users.

#### Acceptance Criteria

1. THE `Banner` root element SHALL carry both `role="status"` and an `aria-label` attribute whose value equals the `Availability_Text` string exactly (same casing, spacing, and punctuation), so that assistive technologies announce the element as a status region with the correct label.
2. THE decorative pulse ring and status dot elements SHALL each carry `aria-hidden="true"` so that they are excluded from the accessibility tree and not announced redundantly by screen readers.
3. THE `Banner` SHALL meet WCAG 2.1 AA color contrast requirements, meaning the contrast ratio between the `Availability_Text` color and the `Banner` background color SHALL be at least 4.5:1 in both dark and light themes.

---

### Requirement 6: Source Availability Text from Portfolio Data

**User Story:** As a developer maintaining the portfolio, I want the banner text to come from a single source of truth, so that updating availability requires changing only one file.

#### Acceptance Criteria

1. WHEN `profile.availability` is a non-empty string, THE `Banner` SHALL display that exact string as its visible text content, sourced exclusively from `profile.availability` in `src/data/portfolio.ts`, with no transformation, truncation, or supplemental hard-coded text appended or prepended.
2. WHEN `profile.availability` is an empty string (`""`), THE `Banner` SHALL render `null` and produce no visible output and no reserved layout space; a string containing only whitespace characters SHALL be treated as non-empty and SHALL be rendered as-is.
3. THE `Banner` component source file SHALL contain no string literals that duplicate or substitute for the `Availability_Text` value; all displayed text SHALL be derived solely from the `profile.availability` import.

---

### Requirement 7: Integrate Without Breaking Existing Layout

**User Story:** As a developer, I want the banner to slot into the existing Hero layout without requiring changes to the CSS grid or breaking responsive behavior, so that the hero section remains correct on all screen sizes.

#### Acceptance Criteria

1. THE `Banner` SHALL be implemented as a self-contained React component in `src/components/OpenToWorkBanner.tsx` that applies styles only to elements within its own root element and does not set styles on any ancestor or sibling DOM nodes.
2. IF the viewport width is 680 px or less, THE `Banner` SHALL render without horizontal overflow (no scrollbar introduced), with its text untruncated, and with a font size of at least 12 px.
3. THE `Banner` SHALL not add, remove, or modify any existing CSS class names or style rules in `index.css`, and SHALL not alter any existing JSX or className attributes in `Hero.tsx` beyond the single line required to mount the `<OpenToWorkBanner />` element.
4. THE `Banner` SHALL apply its own layout and appearance using the same CSS custom-class approach used throughout the project (custom class names defined in `index.css`), consistent with how `Hero.tsx` and other components style themselves, rather than using Tailwind utility classes inline.
