# Articles Module - Feature Idea

**Status**: Planned
**GitHub Issue**: [#2](https://github.com/businessdatasolutions/thtx/issues/2)
**Gerelateerd aan**: [Visionary Voices - Ideeën #1, #2, #7, #13](../brainstorms/visionary-voices.md)

---

## Samenvatting

Een articles/blog sectie op THTX.nl voor thought leadership content, met cross-posting mogelijkheid naar LinkedIn. Dit wordt de content hub voor transformatie verhalen, technical guides, en industry insights.

---

## Doel

- **Thought Leadership**: Positioneren als expert in AI Solutions Architecture
- **SEO**: Organisch verkeer via transformatie-gerelateerde zoektermen
- **Lead Generation**: Content als funnel naar contact form en workshops
- **Community Building**: Alumni stories en success cases delen
- **LinkedIn Amplification**: Content die ook op LinkedIn presteert
- **Educational Value**: Praktische guides voor 10X transformatie

---

## Requirements

### Article Section op Website
- [ ] Dedicated articles/blog page (bijv. `/articles` of `/insights`)
- [ ] Article listing view met thumbnails, titles, excerpts
- [ ] Individual article pages met full content
- [ ] Article metadata (author, datum, reading time, tags)
- [ ] Responsive design matching THTX brand styling (#d4db3e, #dcebf3)
- [ ] Search en filter functionaliteit (by topic, date, tag)
- [ ] Pagination of infinite scroll
- [ ] Related articles suggestions
- [ ] Table of contents voor lange artikelen

### Article Features
- [ ] Rich text formatting (headings, lists, quotes, images)
- [ ] Code snippets support (voor technical content)
- [ ] Embedded media (images, videos, diagrams)
- [ ] Social sharing buttons (LinkedIn, Twitter/X)
- [ ] Newsletter signup CTA binnen articles
- [ ] Comment systeem (optioneel, overweeg Disqus of GitHub Discussions)
- [ ] Reading progress indicator
- [ ] Print-friendly versie

### LinkedIn Integration
- [ ] Open Graph tags voor rich preview
- [ ] Twitter Card meta tags
- [ ] Optimized excerpt voor LinkedIn snippets
- [ ] Share tracking (UTM parameters)
- [ ] Option om LinkedIn-native articles te creëren vs link posts
- [ ] Consistent branding tussen website en LinkedIn
- [ ] Auto-sharing optie (manual vs automated)

### Content Management
- [ ] Admin interface voor creating/editing articles
- [ ] Draft en publish workflow
- [ ] Article scheduling (publish op specifieke datum/tijd)
- [ ] SEO optimization (meta descriptions, keywords, canonical URLs)
- [ ] Article categories/tags system
- [ ] Author profiles (voor multiple contributors)
- [ ] Version history
- [ ] Bulk operations (publish multiple, update tags, etc.)

---

## Content Strategie

### Article Types

#### 1. Transformation Stories (Visionary Voices #1)
**Format**: Case study / Success story
**Frequentie**: 2x per maand
**Doel**: Social proof, lead qualification

**Template:**
- **Title**: "Hoe [Bedrijf] in 90 dagen van 10% naar 10X ging"
- **Hero Image**: Company logo + transformation visual
- **Structure**:
  - Before: 10% thinking, challenges
  - The Shift: Waarom ze kozen voor 10X
  - Journey: 90-day workshop experience
  - After: Concrete resultaten (AIR metrics)
  - Quote: Visionary Voice van leader
- **CTA**: "Start jouw 10X transformatie"

#### 2. Technical How-To Guides
**Format**: Educational / Tutorial
**Frequentie**: 1x per maand
**Doel**: SEO, thought leadership

**Voorbeelden:**
- "Hoe bouw je interne AI-capaciteit in 3 stappen"
- "Van use case naar production: Een AI Solutions Architect roadmap"
- "Het AIR framework implementeren in jouw organisatie"

#### 3. Industry Insights & Trends
**Format**: Analysis / Opinion
**Frequentie**: 2x per maand
**Doel**: Thought leadership, LinkedIn engagement

**Voorbeelden:**
- "Waarom de meeste AI transformaties falen (en hoe jij dat voorkomt)"
- "10X vs 10%: De mindset shift die organisaties transformeert"
- "De toekomst van Solutions Architecture in het AI tijdperk"

#### 4. Poll Analysis Articles (Visionary Voices #4)
**Format**: Data-driven insights
**Frequentie**: Wekelijks (based on poll results)
**Doel**: Engagement, data authority

**Template:**
- Poll vraag en resultaten
- Analysis: "Wat dit betekent voor jouw organisatie"
- Expert commentary
- Actionable next steps
- Link naar nieuwe poll

#### 5. Workshop Insights
**Format**: Behind-the-scenes / Lessons learned
**Frequentie**: Na elke workshop
**Doel**: Transparantie, community building

**Voorbeelden:**
- "Wat we leerden in Workshop #1: 5 inzichten van early adopters"
- "De meest gestelde vragen tijdens Track 2 (en onze antwoorden)"

---

## Technical Implementation

### Optie 1: Static Site met Markdown ⭐ (Aanbevolen voor MVP)

**Tech Stack:**
- Markdown files in `/src/articles/` directory
- Vite plugin voor markdown processing (vite-plugin-markdown)
- React components voor article rendering
- Frontmatter voor metadata

**Pros:**
- ✅ Fast, secure, geen database
- ✅ Version controlled (git)
- ✅ Easy te deployen (al op GitHub Pages)
- ✅ Developer-friendly workflow
- ✅ Gratis
- ✅ Markdown = portable format

**Cons:**
- ❌ Geen visual admin UI
- ❌ Git kennis vereist voor niet-developers
- ❌ Manual deployment na edits

**File Structure:**
```
src/
├── articles/
│   ├── index.js (article registry)
│   ├── 2025-11-01-eerste-artikel.md
│   ├── 2025-11-15-tweede-artikel.md
│   └── ...
├── components/
│   ├── ArticleList.jsx
│   ├── ArticleDetail.jsx
│   └── ArticleCard.jsx
└── pages/
    └── Articles.jsx
```

**Markdown Frontmatter Example:**
```markdown
---
title: "Hoe [Bedrijf] in 90 dagen van 10% naar 10X ging"
date: 2025-11-01
author: "THTX Team"
tags: ["transformation", "case-study", "10X"]
excerpt: "Een inspirerend verhaal van radicale transformatie..."
image: "/images/articles/bedrijf-success.jpg"
readingTime: 8
published: true
---

# Article content hier...
```

---

### Optie 2: Headless CMS

**Services**: Contentful, Sanity, Strapi, Ghost
**Pros:**
- ✅ Visual admin interface
- ✅ API-driven
- ✅ Rich media management
- ✅ Collaboration features

**Cons:**
- ❌ Monthly cost ($20-100+)
- ❌ External dependency
- ❌ More complexity
- ❌ Overkill voor MVP

---

### Optie 3: GitHub as CMS

**Approach**: GitHub API + Markdown files
**Pros:**
- ✅ Gratis
- ✅ Version controlled
- ✅ Kan custom admin UI bouwen

**Cons:**
- ❌ Development tijd voor UI
- ❌ Rate limiting op API
- ❌ Complex voor MVP

---

### Aanbevolen Implementatie (MVP)

**Start met Optie 1: Static Markdown**

**Phase 1 Scope:**
1. Markdown files in `/src/articles/`
2. Article listing page (`/articles`)
3. Individual article pages (`/articles/[slug]`)
4. Basic metadata (title, date, author, tags)
5. Social sharing buttons
6. Related articles (based on tags)

**Phase 2 Additions:**
- Search functionality
- Advanced filtering
- Newsletter signup integration
- Comment system (GitHub Discussions)

**Phase 3 (indien nodig):**
- Migrate naar Headless CMS als non-technical authors vereist
- Custom admin UI

---

## LinkedIn Cross-posting Strategie

### Manual Approach (MVP) ✅
**Workflow:**
1. Publish article op thtx.nl
2. Copy key sections voor LinkedIn post
3. Create LinkedIn post met:
   - Hook (eerste 2-3 regels)
   - Key insight
   - Link naar full article
   - Relevant hashtags
4. Track engagement via UTM parameters

**Template LinkedIn Post:**
```
[Hook - provocative statement]

Vandaag publiceerden we een nieuw artikel over [topic].

Key takeaways:
→ Insight 1
→ Insight 2
→ Insight 3

Lees het volledige artikel op:
https://thtx.nl/articles/[slug]?utm_source=linkedin

#THTX #10XMindset #AITransformation
```

### Automated Approach (Future)
**Options:**
- LinkedIn Share API (OAuth required)
- Zapier/Make.com integration
- Custom automation script

**Trigger**: New article published → Auto-post to LinkedIn

---

## SEO Optimization

### On-page SEO
- [ ] Descriptive URLs (`/articles/10x-transformation-guide`)
- [ ] H1, H2, H3 hierarchy
- [ ] Meta descriptions (150-160 chars)
- [ ] Alt text voor images
- [ ] Internal linking
- [ ] Schema.org markup (Article type)
- [ ] Canonical URLs

### Target Keywords
- "AI Solutions Architecture"
- "10X transformatie"
- "Interne AI-capaciteit bouwen"
- "AIR framework"
- "AI implementatie Nederland"
- "Digital transformation workshop"

### Content Guidelines
- **Length**: 1000-2000 woorden voor SEO impact
- **Readability**: Korte paragrafen, bullet points, subheadings
- **Originality**: Geen duplicate content
- **Value**: Actionable insights, niet alleen theorie
- **Frequency**: Minimum 2x per maand voor SEO momentum

---

## Integration met Andere Features

### Polling System ([Issue #1](https://github.com/businessdatasolutions/thtx/issues/1))
- Embed polls binnen articles
- Write analysis articles based op poll results
- Poll CTA aan einde van relevante articles

### Contact Form
- Article-specific CTAs
- Track which article led to contact
- "I read [article title]" context option

### Visionary Voices Initiative
- Transformation stories als core content type
- Workshop insights articles
- Poll-based content
- Newsletter content feed

---

## Success Metrics

### Traffic
- Article page views
- Unique visitors to `/articles`
- Avg. time on page
- Bounce rate
- Organic search traffic

### Engagement
- Social shares (LinkedIn, Twitter)
- Comments/discussions
- Newsletter signups from articles
- Related article clicks

### Conversion
- Contact form submissions from articles
- Workshop inquiries attributed to articles
- Email opt-ins

### SEO
- Organic keyword rankings
- Backlinks acquired
- Domain authority growth

---

## Content Calendar (Voorbeeld Q1 2026)

| Week | Article Type | Topic | LinkedIn |
|------|-------------|-------|----------|
| 1 | Industry Insight | "10X vs 10%: De shift" | ✅ |
| 2 | Poll Analysis | "Poll resultaat: Waar transformatie begint" | ✅ |
| 3 | How-To Guide | "AIR framework implementeren" | ✅ |
| 4 | Workshop Insight | "Wat we leerden in Workshop #1" | ✅ |
| 5 | Transformation Story | "Case study: Bedrijf X" | ✅ |
| 6 | Poll Analysis | Wekelijkse poll insights | ✅ |
| ... | ... | ... | ... |

**Publishing Schedule**: Elke dinsdag 09:00 (optimal LinkedIn timing)

---

## Roadmap

### Phase 1: MVP (Week 1-2)
- [ ] Set up markdown processing in Vite
- [ ] Create ArticleList en ArticleDetail components
- [ ] Design article page layout (THTX styling)
- [ ] Add first 3 articles (seed content)
- [ ] Implement social sharing
- [ ] SEO meta tags

### Phase 2: Enhanced (Week 3-4)
- [ ] Search functionality
- [ ] Tag filtering
- [ ] Related articles logic
- [ ] Newsletter signup integration
- [ ] Open Graph optimization
- [ ] 10+ articles published

### Phase 3: Advanced (Month 2+)
- [ ] Comment system (GitHub Discussions integration)
- [ ] Author profiles
- [ ] Advanced analytics
- [ ] A/B testing headlines
- [ ] Email notification voor nieuwe articles
- [ ] RSS feed

---

## Vragen om te Beantwoorden

1. ✅ Welke content management aanpak? → **Start met Static Markdown**
2. ⏳ LinkedIn posting manual of automated? → **Start manual, automate later**
3. ⏳ Wie creëert content? → **TBD**
4. ⏳ Publishing frequentie? → **2x per maand minimum**
5. ⏳ Nederlands, Engels, of beide? → **Start Nederlands**
6. ⏳ Multiple authors? → **Later, start met "THTX Team"**
7. ⏳ Comment system? → **Phase 3, overweeg GitHub Discussions**

---

## Gerelateerde Documenten

- [GitHub Issue #2](https://github.com/businessdatasolutions/thtx/issues/2)
- [Visionary Voices Brainstorm](../brainstorms/visionary-voices.md)
- [Polling System](./polling-system.md)

---

*Laatst bijgewerkt: 7 november 2025*
