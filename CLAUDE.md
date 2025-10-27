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

### Current Setup (GitHub Pages subdirectory)

- Deployed via GitHub Pages from the `/docs` folder on the `main` branch
- Run `npm run build` to build the site to the `/docs` folder
- Commit and push the `/docs` folder to deploy
- Base URL configured as `/thtx/` in [vite.config.js](vite.config.js)
- Site URL: https://businessdatasolutions.github.io/thtx/
- `.nojekyll` file in public/ prevents Jekyll processing

### Custom Domain Setup (thtx.nl)

To migrate from the GitHub Pages subdirectory to the custom domain `thtx.nl`, follow these steps **in order**:

#### Step 1: Code Changes

**1.1 Create CNAME file**
- Create `/public/CNAME` with content: `thtx.nl` (single line, no protocol)
- This tells GitHub Pages which custom domain to use
- Placing it in `/public/` ensures it's copied to `/docs/` on every build

**1.2 Update Vite config**
- In `vite.config.js`: Change `base: '/thtx/'` to `base: '/'`
- This is required because the site will run on root domain instead of a subpath

**1.3 Update logo paths**
- In `src/App.jsx`: Change all `/thtx/logo.png` to `/logo.png`
- This affects both navigation and footer logo references

**1.4 Build and deploy**
```bash
npm run build
git add .
git commit -m "Configure for custom domain thtx.nl"
git push
```

#### Step 2: DNS Configuration

Configure these DNS records at your domain registrar (where you bought thtx.nl):

**A Records (for apex domain thtx.nl):**
```
Type: A
Name: @ (or leave empty)
TTL: 3600 (or default)
Values (add all 4):
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
```

**CNAME Record (for www subdomain - optional but recommended):**
```
Type: CNAME
Name: www
TTL: 3600 (or default)
Value: businessdatasolutions.github.io
```

#### Step 3: GitHub Pages Settings

1. Go to: https://github.com/businessdatasolutions/thtx/settings/pages
2. Under "Custom domain", enter: `thtx.nl`
3. Click "Save"
4. Wait for DNS check (can take a few minutes)
5. Once verified, check "Enforce HTTPS" (GitHub will auto-provision SSL certificate)

#### Step 4: Wait for DNS Propagation

- DNS changes can take 24-48 hours to propagate globally
- Usually happens much faster (minutes to hours)
- Check status: `dig thtx.nl` or use https://www.whatsmydns.net/

#### Verification

After DNS propagation:
- ✅ `https://thtx.nl` → works and shows your site
- ✅ `https://www.thtx.nl` → redirects to `https://thtx.nl`
- ✅ `https://businessdatasolutions.github.io/thtx/` → redirects to `https://thtx.nl`
- ✅ HTTPS is enforced (green padlock in browser)
- ✅ Certificate is valid (issued by GitHub)

#### Rollback Plan

If something goes wrong, revert by:
1. Remove custom domain from GitHub Pages settings
2. Change `base: '/'` back to `base: '/thtx/'` in vite.config.js
3. Change logo paths back to `/thtx/logo.png`
4. Delete `/public/CNAME`
5. Rebuild and deploy

The old URL will work again immediately.

## Code Style

- React functional components with hooks
- Inline styles using the `style` prop for brand colors
- Tailwind utility classes for layout and common styles
- Mobile-first responsive design with `md:` breakpoints
- Semantic HTML5 sections with id anchors for navigation
