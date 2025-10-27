# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

THTX.nl (Think Ten X) - A single-page React landing site for a business transformation consultancy built with Vite. Deployed to GitHub Pages.

## Architecture

**Vite + React Application**
- Modern React setup with Vite as the build tool
- Main component: `ThinkTenXLanding` in [src/App.jsx](src/App.jsx)
- Entry point: [src/main.jsx](src/main.jsx)
- Tailwind CSS loaded via CDN in [index.html](index.html)
- Lucide React icons for UI elements

**Component Structure**
- Main component: `ThinkTenXLanding` exported from [src/App.jsx](src/App.jsx)
- State management: React hooks (useState, useEffect) for scroll effects, mobile menu, and quiz interactions
- Sections: Hero, AIR Problem, Quiz, Manifesto, How It Works, Programs (Tracks), CTA, Footer

**Brand Colors**
- Primary yellow: `#d4db3e`
- Light blue backgrounds: `#def0fa` and `#dcebf3`

## Development

**Install dependencies**
```bash
npm install
```

**Development server**
```bash
npm run dev
# Opens at http://localhost:5173/thtx/
```

**Build for production**
```bash
npm run build
# Creates optimized bundle in docs/
```

**Preview production build**
```bash
npm run preview
# Opens at http://localhost:4173/thtx/
```

## Deployment

- Deployed via GitHub Pages from the `/docs` folder on the `main` branch
- Run `npm run build` to build the site to the `/docs` folder
- Commit and push the `/docs` folder to deploy
- Base URL configured as `/thtx/` in [vite.config.js](vite.config.js)
- Site URL: https://businessdatasolutions.github.io/thtx/
- `.nojekyll` file in public/ prevents Jekyll processing

## Code Style

- React functional components with hooks
- Inline styles using the `style` prop for brand colors
- Tailwind utility classes for layout and common styles
- Mobile-first responsive design with `md:` breakpoints
- Semantic HTML5 sections with id anchors for navigation
