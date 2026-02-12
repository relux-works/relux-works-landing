# TASK-260212-13q4sk: fonts-and-layout

## Description
Set up fonts (Inter from Google Fonts, Noto Sans Armenian, Noto Sans Georgian), global CSS reset, color palette as CSS custom properties in separate palette.css, responsive base layout component with header/main/footer slots, mobile-first breakpoints.

## Scope
(define task scope)

## Acceptance Criteria
- palette.css with all CSS custom properties (colors, spacing, radii, transitions)
- global.css imports palette, sets reset, typography, utilities (.container, .section, .btn)
- Base layout component with head (meta, fonts, hreflang), header slot, main, footer
- Fonts load correctly for all 4 scripts (Latin, Cyrillic, Armenian, Georgian)
- Responsive on mobile (375px+) and desktop
