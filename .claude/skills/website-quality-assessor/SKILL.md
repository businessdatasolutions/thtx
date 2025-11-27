---
name: website-quality-assessor
description: Assess startup and B2B website quality using a comprehensive scorecard derived from expert design critiques (Rio Lou/Cursor, Karri Saarinen/Linear). Use when asked to evaluate, review, audit, or assess a website's quality, messaging clarity, design, UX, or conversion effectiveness. Triggers include "assess this website", "review site quality", "evaluate homepage", "website audit", "landing page feedback", "critique this site", or requests to analyze startup/B2B websites.
---

# Website Quality Assessor

Assess startup and B2B websites using a structured scorecard focused on messaging clarity, design quality, UX/conversion flow, and credibility positioning.

## Prerequisites

Requires Playwright MCP for browser automation. Verify availability:

```bash
# Check if playwright_navigate is available
# If not, inform user to enable Playwright MCP
```

## Assessment Workflow

### Step 1: Gather Visual Evidence

Use Playwright MCP to capture the website:

```
1. playwright_navigate → target URL
2. playwright_screenshot → full page capture (name: "homepage-full")
3. Scroll down and capture additional sections as needed
4. If pricing page exists: navigate and screenshot
5. If about/team page exists: navigate and screenshot
```

Capture key elements:
- Hero section with headline and CTA
- Navigation structure
- Social proof sections (logos, testimonials)
- Product visuals/screenshots
- Pricing display (if visible)
- Footer

### Step 2: Analyze Source (Optional)

If deeper analysis needed, use `playwright_evaluate` to extract:
- Meta descriptions and titles
- Heading hierarchy (h1, h2, h3)
- CTA button text and placement
- Color contrast issues
- Font usage

### Step 3: Score Against Criteria

Evaluate each criterion using the scorecard in `references/scorecard.md`. Use this scoring:

| Score | Meaning |
|-------|---------|
| 0 | Major issues / Not addressed |
| 1 | Significant problems |
| 2 | Adequate with room for improvement |
| 3 | Excellent execution |

### Step 4: Generate Report

Output structure:

```markdown
# Website Quality Assessment: [Company Name]

**URL:** [url]
**Date:** [date]
**Overall Score:** [X]/60 ([percentage]%)

## Executive Summary
[2-3 sentences on overall impression and critical issues]

## Category Scores

### I. Messaging & Clarity: [X]/18
[Score breakdown with specific observations]

### II. Design & Aesthetic Quality: [X]/15
[Score breakdown with specific observations]

### III. UX & Conversion Flow: [X]/18
[Score breakdown with specific observations]

### IV. Credibility & Positioning: [X]/12
[Score breakdown with specific observations]

## Priority Improvements
1. [Most critical fix with rationale]
2. [Second priority]
3. [Third priority]

## Strengths
- [What works well]

## Detailed Findings
[Criterion-by-criterion breakdown if requested]
```

## Key Red Flags to Watch For

**"AI Slop" Indicators:**
- Excessive purple gradients, massive shadows
- Generic stock imagery
- Overly smooth, soulless aesthetic
- Poor typography choices

**Messaging Failures:**
- Vague headlines ("The Future of X", "Streamline Your Workflow")
- Internal jargon vs. user terminology
- No clear audience definition
- Missing literal product description

**Conversion Killers:**
- No accessible trial/demo option
- Pricing shown too early
- Multiple competing CTAs
- Chat prompts that look like cookie banners

## Scoring Guidance

See `references/scorecard.md` for complete criterion definitions.

Quick reference for scoring:
- **Headline specificity:** Does it use user jargon? ("Issue Tracking" > "Work Platform")
- **Visual consistency:** Same style across all pages?
- **CTA clarity:** One clear action per screen?
- **Stage authenticity:** Owning startup identity vs. fake enterprise polish?
