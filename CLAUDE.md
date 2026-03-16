# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start Vite development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Architecture

**Framework:** React 19 + Vite + TypeScript + Tailwind CSS v4

**Structure:**
- `src/components/` - All React components organized by type:
  - `layout/` - Navbar, Footer
  - `sections/` - Page sections (Hero, Story, Work, Philosophy, Campaign, Recognition, Contact)
  - `ui/` - Reusable UI components (CustomCursor, CIGRCompass, CIGRGrid)
- `src/hooks/` - Custom React hooks (useReducedMotion, useScrollSpy)
- `src/lib/` - Utilities (cn for class merging)

**Styling:**
- Tailwind CSS v4 with CSS variables for theming
- Color palette defined in `src/index.css` using CSS custom properties
- Custom fonts: Clash Display (headings), Plus Jakarta Sans (body)
- Custom scrollbar and selection styles

**Animations:**
- Framer Motion for component animations (fadeIn, slideIn)
- GSAP with ScrollTrigger for scroll-based animations
- Lenis for smooth scrolling

**Key Patterns:**
- `cn()` utility from `src/lib/cn.ts` for combining class names with tailwind-merge
- Components use CSS variables (e.g., `var(--bg)`, `var(--crimson)`) for theming
- Motion components use `useReducedMotion` hook for accessibility
- Lazy loading for non-critical sections via `React.lazy`

**Build:**
- Vite with React plugin and Tailwind CSS integration
- Base path set to `/haneef-portfolio/` for GitHub Pages deployment
