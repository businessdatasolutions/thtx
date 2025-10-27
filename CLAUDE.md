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

**A Records (for apex domain thtx.nl - website):**
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

**CNAME Record (for www subdomain - website):**
```
Type: CNAME
Name: www
TTL: 3600 (or default)
Value: businessdatasolutions.github.io
```

**Note:** If you're also setting up email (see Email Setup section below), add those DNS records at the same time.

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

### Email Setup with Google Workspace

You can use `thtx.nl` for both your website (GitHub Pages) AND email (Google Workspace) simultaneously.

#### Setup Type: Domain Alias (Recommended)

**What this means:**
- Add `thtx.nl` as an alias to your existing Google Workspace account
- Use the same inbox for emails from multiple domains
- Example: `hello@thtx.nl` and `hello@yourotherdomain.nl` go to the same inbox
- No extra cost (included in Google Workspace)

**When to use:**
- You want `name@thtx.nl` email addresses
- You already have Google Workspace for another domain
- You want all emails in one place

#### Step 1: Add Domain Alias in Google Workspace

1. Go to [Google Admin Console](https://admin.google.com)
2. Navigate to: Account → Domains
3. Click "Add a domain or domain alias"
4. Select "Add a domain alias of [your primary domain]"
5. Enter: `thtx.nl`
6. Click "Add domain & start verification"

#### Step 2: Verify Domain Ownership

Google will give you a TXT record to add to your DNS. It looks like:

```
Type: TXT
Name: @ (or leave empty)
Value: google-site-verification=xxxxxxxxxxxxx
```

Add this to your DNS, then click "Verify" in Google Admin Console.

#### Step 3: Configure Email DNS Records

Add these MX records at your domain registrar:

```
Type: MX
Name: @ (or leave empty)
Priority: 1
Value: smtp.google.com

Type: MX
Name: @
Priority: 5
Value: smtp2.google.com

Type: MX
Name: @
Priority: 5
Value: smtp3.google.com

Type: MX
Name: @
Priority: 10
Value: smtp4.google.com

Type: MX
Name: @
Priority: 10
Value: smtp5.google.com
```

**SPF Record (anti-spam - recommended):**
```
Type: TXT
Name: @ (or leave empty)
Value: v=spf1 include:_spf.google.com ~all
```

**DKIM Record (email authentication - recommended):**
1. In Google Admin Console: Apps → Google Workspace → Gmail → Authenticate email
2. Click "Generate new record" for `thtx.nl`
3. Google gives you a TXT record like:
```
Type: TXT
Name: google._domainkey
Value: v=DKIM1; k=rsa; p=MIGfMA0GCSq... (long string)
```
4. Add this to your DNS

**DMARC Record (optional but recommended):**
```
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=quarantine; rua=mailto:postmaster@thtx.nl
```

#### Step 4: Wait for DNS Propagation

- MX records can take 24-48 hours to propagate
- Usually works within a few hours
- Test by sending email to `test@thtx.nl` (if you created that address)

#### Complete DNS Setup (Website + Email)

When you configure everything, your DNS should have:

**For Website (GitHub Pages):**
- 4× A records pointing to GitHub
- 1× CNAME record for www

**For Email (Google Workspace):**
- 1× TXT record for domain verification
- 5× MX records for email delivery
- 1× TXT record for SPF
- 1× TXT record for DKIM
- 1× TXT record for DMARC (optional)

#### Creating Email Addresses

After domain is verified and DNS configured:

1. Google Admin Console → Users
2. Add user or modify existing user
3. Add email alias: `username@thtx.nl`
4. Or create new user with `@thtx.nl` primary address

**Examples:**
- `hello@thtx.nl` → customer inquiries
- `info@thtx.nl` → general info
- `yourname@thtx.nl` → personal address

All delivered to your Google Workspace inbox!

#### Testing Email Setup

1. Send test email to your new `@thtx.nl` address
2. Check it arrives in your Google Workspace inbox
3. Reply from `@thtx.nl` address to verify sending works
4. Check email headers to verify SPF/DKIM pass

#### Troubleshooting

**Email not arriving:**
- Check MX records are correct: `dig thtx.nl MX`
- Verify domain in Google Admin Console shows "Active"
- Check spam folder

**Can't send from @thtx.nl:**
- Verify email alias is added to your user account
- Check "Send mail as" settings in Gmail
- May need to wait for DNS propagation

**SPF/DKIM failures:**
- Verify SPF record: `dig thtx.nl TXT`
- Verify DKIM record: `dig google._domainkey.thtx.nl TXT`
- Use https://mxtoolbox.com to test

## Code Style

- React functional components with hooks
- Inline styles using the `style` prop for brand colors
- Tailwind utility classes for layout and common styles
- Mobile-first responsive design with `md:` breakpoints
- Semantic HTML5 sections with id anchors for navigation
