# THTX Design System

> A comprehensive design system for the Think Ten X website, built with React, Vite, and Tailwind CSS.

## Table of Contents

- [Overview](#overview)
- [Design Philosophy](#design-philosophy)
- [Getting Started](#getting-started)
- [Components](#components)
- [Design Tokens](#design-tokens)
- [Patterns](#patterns)
- [Best Practices](#best-practices)
- [Accessibility](#accessibility)
- [Development](#development)

## Overview

The THTX design system provides a consistent set of reusable components, design tokens, and patterns for building the Think Ten X website. All components are documented in Storybook with interactive examples.

### Key Features

- **7 Reusable Components** - Badge, Button, Card, SectionHeader, FeatureListItem, PricingDisplay, StepIndicator
- **Centralized Design Tokens** - Colors, typography, spacing, component styles
- **Theme System** - Card themes for problem, solution, and impact messaging
- **Accessibility First** - WCAG 2.1 Level AA compliance
- **Responsive Design** - Mobile-first approach with breakpoints
- **Interactive Documentation** - Storybook with 100+ stories

### Tech Stack

- **React 19.2.0** - UI library
- **Vite 7.1.12** - Build tool
- **Tailwind CSS** - Utility-first CSS (CDN for app, build-time for Storybook)
- **Lucide React** - Icon system
- **Storybook 10.1.0** - Component documentation

## Design Philosophy

### Think Ten X

Our design reflects exponential thinking:

- **Bold & Confident** - Strong typography and vibrant primary color (#d4db3e) command attention
- **Clear & Direct** - No unnecessary complexity - every element serves a purpose
- **Human & Approachable** - Professional yet friendly, making AI/automation accessible

### Visual Hierarchy

- **Primary**: Yellow (#d4db3e) - CTAs, highlights, active states
- **Accent**: Pink (#ff6984) for problems, Cyan (#00d1ff) for solutions
- **Backgrounds**: Subtle colored sections (blue, yellow, pink, cyan) for visual rhythm

## Getting Started

### View Interactive Documentation

```bash
npm run storybook
```

Opens Storybook at [http://localhost:6006](http://localhost:6006) with:
- Interactive component playground
- Design token visualizations
- Real-world usage examples
- Accessibility testing tools

### Import Components

```jsx
// Individual imports
import { Button } from './components/shared/Button';
import { Card } from './components/shared/Card';
import { Badge } from './components/shared/Badge';

// Usage
<Card title="Example" theme="solution">
  <Badge variant="filled">New</Badge>
  <Button variant="primary" size="lg">Get Started</Button>
</Card>
```

### Import Design Tokens

```jsx
import { colors, typography, spacing } from './styles/design-tokens';

// Usage
<div
  className={spacing.card}
  style={{ backgroundColor: colors.primary }}
>
  <h3 className={typography.h3}>Styled with tokens</h3>
</div>
```

## Components

### Badge

**Purpose**: Display status, labels, or tags

**Variants**: `filled`, `outline`

**Props**:
- `children` - Badge content
- `variant` - Visual style (default: 'filled')
- `icon` - Optional Lucide icon
- `className` - Additional classes

**Example**:
```jsx
<Badge variant="filled" icon={Sparkles}>Innovation</Badge>
```

**Use Cases**: Section badges, feature labels, status indicators

---

### Button

**Purpose**: Primary interaction element for CTAs and actions

**Variants**: `primary`, `secondary`, `ghost`

**Sizes**: `sm`, `md`, `lg`

**Props**:
- `children` - Button text
- `variant` - Visual style (default: 'primary')
- `size` - Button size (default: 'md')
- `icon` - Optional Lucide icon
- `iconPosition` - Icon placement: 'left' | 'right' (default: 'right')
- `fullWidth` - Full container width (default: false)
- `disabled` - Disabled state
- `href` - Renders as link if provided
- `onClick` - Click handler

**Example**:
```jsx
<Button variant="primary" size="lg" icon={ArrowRight}>
  Start Your Transformation
</Button>
```

**Use Cases**: CTAs, form submissions, navigation, actions

---

### Card

**Purpose**: Versatile container with theme-based styling

**Themes**: `default`, `problem`, `solution`, `impact`

**Props**:
- `title` - Card title
- `subtitle` - Optional subtitle (displayed with icon)
- `children` - Card content
- `icon` - Optional Lucide icon
- `iconColor` - Override icon color
- `badge` - Optional badge component
- `footer` - Optional footer content
- `theme` - Visual theme (default: 'default')
- `className` - Additional classes

**Theme Colors**:
- **Default**: Yellow border/icon (#d4db3e), white background
- **Problem**: Pink border/icon (#ff6984), pink background (#fff5f7)
- **Solution**: Cyan border/icon (#00d1ff), cyan background (#f0fbff)
- **Impact**: Yellow border/icon, yellow background (#fafbf0)

**Example**:
```jsx
<Card
  title="Automation Zonder Strategie"
  subtitle="Problem"
  icon={AlertCircle}
  theme="problem"
  badge={<Badge variant="filled">Common</Badge>}
>
  <p>Teams implement tools without clear goals...</p>
</Card>
```

**Use Cases**: Feature cards, problem/solution showcases, pricing cards, content blocks

---

### SectionHeader

**Purpose**: Consistent headers for page sections

**Props**:
- `badge` - Optional badge text above title
- `title` - Section title (h2)
- `subtitle` - Optional subtitle/description
- `maxWidth` - Tailwind max-width class for subtitle (default: 'max-w-4xl')
- `className` - Additional classes

**Example**:
```jsx
<SectionHeader
  badge="Zo werkt het"
  title="Van Strategie tot Succes"
  subtitle="Een bewezen aanpak in drie simpele stappen"
/>
```

**Use Cases**: Section intros, page headers, content organization

---

### FeatureListItem

**Purpose**: List item with icon for features and benefits

**Props**:
- `children` - List item content
- `icon` - Lucide icon (default: CheckCircle)
- `className` - Additional classes

**Example**:
```jsx
<ul className="space-y-3">
  <FeatureListItem icon={CheckCircle}>
    Weekly coaching sessions
  </FeatureListItem>
  <FeatureListItem icon={Zap}>
    Fast implementation
  </FeatureListItem>
</ul>
```

**Use Cases**: Feature lists, benefit lists, checklists, comparison tables

---

### PricingDisplay

**Purpose**: Display pricing with optional discount

**Props**:
- `price` - Current price (large, bold)
- `originalPrice` - Optional original price (strikethrough)
- `subtitle` - Optional subtitle/description
- `className` - Additional classes

**Example**:
```jsx
<PricingDisplay
  price="€7.500"
  originalPrice="€15.000"
  subtitle="early-bird"
/>
```

**Use Cases**: Pricing cards, promotional offers, subscription tiers

---

### StepIndicator

**Purpose**: Numbered step for processes and workflows

**Props**:
- `number` - Step number (can be string or number)
- `title` - Step title
- `subtitle` - Optional subtitle/description
- `showArrow` - Show arrow separator (default: true, set false for last step)
- `className` - Additional classes

**Example**:
```jsx
<div className="flex items-center gap-8">
  <StepIndicator number="1" title="Discovery" subtitle="Identify opportunities" />
  <StepIndicator number="2" title="Implementation" subtitle="Build solutions" />
  <StepIndicator number="3" title="Scale" subtitle="Expand impact" showArrow={false} />
</div>
```

**Use Cases**: Process flows, how-it-works sections, onboarding steps, roadmaps

## Design Tokens

Design tokens are centralized in `src/styles/design-tokens.js`.

### Colors

```javascript
// Primary
colors.primary = '#d4db3e'  // THTX Yellow

// Accents
colors.accent.pink = '#ff6984'  // Problem indicator
colors.accent.cyan = '#00d1ff'  // Solution indicator

// Backgrounds
colors.bg.blue1 = '#def0fa'   // Light blue sections
colors.bg.blue2 = '#dcebf3'   // Alternate blue
colors.bg.yellow = '#fafbf0'  // Impact sections
colors.bg.pink = '#fff5f7'    // Problem sections
colors.bg.cyan = '#f0fbff'    // Solution sections
```

### Typography

```javascript
typography.h1 = 'text-5xl md:text-7xl font-bold'  // Hero titles
typography.h2 = 'text-4xl font-bold'              // Section titles
typography.h3 = 'text-xl font-bold'               // Card titles
typography.bodyLg = 'text-lg'                     // Lead paragraphs
typography.body = 'text-base'                     // Standard text
typography.small = 'text-sm'                      // Captions
```

### Spacing

```javascript
spacing.section = 'py-16 px-4'  // Section padding
spacing.card = 'p-6'            // Card padding
spacing.cardLg = 'p-8'          // Large card padding
```

### Component Styles

```javascript
// Button
componentStyles.button.base = 'rounded-lg font-semibold transition transform hover:scale-105'
componentStyles.button.sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-8 py-4 text-lg',
  lg: 'px-10 py-5 text-xl',
}

// Card
componentStyles.card.base = 'rounded-xl border-2'
componentStyles.card.padding = {
  default: 'p-6',
  large: 'p-8',
}

// Badge
componentStyles.badge.base = 'inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold'
```

## Patterns

### Section Pattern

```jsx
<section className="py-16 px-4" style={{ backgroundColor: colors.bg.blue1 }}>
  <SectionHeader
    badge="Feature"
    title="Section Title"
    subtitle="Section description for context"
  />

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
    <Card theme="solution">
      {/* Card content */}
    </Card>
    {/* More cards... */}
  </div>
</section>
```

### CTA Pattern

```jsx
<div className="text-center py-16 px-4">
  <h2 className="text-4xl font-bold mb-4">Ready to Transform?</h2>
  <p className="text-lg text-gray-600 mb-8">Start your journey today</p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <Button variant="primary" size="lg" icon={ArrowRight}>
      Get Started
    </Button>
    <Button variant="secondary" size="lg">
      Learn More
    </Button>
  </div>
</div>
```

### Program Card Pattern

```jsx
<Card
  title="AI Accelerator"
  icon={Zap}
  theme="impact"
  badge={<Badge variant="filled" icon={Target}>8 weken</Badge>}
  footer={<PricingDisplay price="€7.500" originalPrice="€15.000" subtitle="early-bird" />}
>
  <p className="mb-3">Implementeer één high-impact AI use case.</p>
  <ul className="space-y-2">
    <FeatureListItem>Wekelijkse coaching sessies</FeatureListItem>
    <FeatureListItem>Hands-on implementatie support</FeatureListItem>
    <FeatureListItem>Best practices & templates</FeatureListItem>
  </ul>
</Card>
```

### Three-Step Process Pattern

```jsx
<div className="flex flex-col md:flex-row items-center gap-8">
  <StepIndicator
    number="1"
    title="Strategie"
    subtitle="We bepalen jouw 10x doelen"
  />
  <StepIndicator
    number="2"
    title="Implementatie"
    subtitle="Hands-on begeleiding"
  />
  <StepIndicator
    number="3"
    title="Schaal"
    subtitle="Organisation-wide impact"
    showArrow={false}
  />
</div>
```

## Best Practices

### DO ✅

- **Use semantic HTML** - h1, h2, section, article, etc.
- **Import from shared components** - Consistent API and styling
- **Use design tokens** - Never hardcode colors, spacing, or typography
- **Follow established patterns** - Reference existing code in App.jsx
- **Test responsive behavior** - Mobile, tablet, desktop
- **Include alt text** - All images need descriptive alt attributes
- **Use proper heading hierarchy** - h1 → h2 → h3 (no skipping)

### DON'T ❌

- **Hardcode colors** - Use `colors` from design tokens
- **Create inline styles** - Use Tailwind classes and design tokens
- **Nest headings incorrectly** - Maintain proper semantic structure
- **Override component internals** - Use className prop for extensions only
- **Ignore mobile** - Always design mobile-first
- **Skip accessibility** - Test with keyboard and screen readers

## Accessibility

All components follow WCAG 2.1 Level AA guidelines.

### Color Contrast

- Text meets minimum 4.5:1 ratio for normal text
- Large text meets 3:1 ratio
- Primary yellow (#d4db3e) on white meets standards
- Black text on primary yellow meets standards

### Keyboard Navigation

- All interactive elements are keyboard accessible
- Tab order follows logical reading order
- Focus states are clearly visible
- No keyboard traps

### Screen Readers

- Semantic HTML provides structure
- ARIA labels where needed (icons, dynamic content)
- Descriptive link text (no "click here")
- Form labels properly associated

### Testing

Use Storybook's Accessibility addon:
- Automatically checks each story
- Reports WCAG violations
- Provides remediation guidance

## Development

### Running Storybook

```bash
# Start Storybook dev server
npm run storybook

# Build Storybook static site
npm run build-storybook
```

### Adding a New Component

1. **Create Component File**
   ```
   src/components/shared/ComponentName.jsx
   ```

2. **Add JSDoc Comments**
   ```jsx
   /**
    * ComponentName
    *
    * Description of what the component does
    *
    * @param {Object} props
    * @param {string} props.propName - Description
    */
   export function ComponentName({ propName }) {
     // Implementation
   }
   ```

3. **Import Design Tokens**
   ```jsx
   import { colors, typography, spacing } from '../../styles/design-tokens';
   ```

4. **Create Story File**
   ```
   src/components/shared/ComponentName.stories.jsx
   ```

5. **Write Comprehensive Stories**
   - Default story
   - All variant combinations
   - Real-world examples
   - Edge cases
   - Accessibility test story

6. **Test**
   - Visual check in Storybook
   - Responsive behavior
   - Accessibility addon (no violations)
   - Integration in App.jsx

7. **Document**
   - Update this file (DESIGN_SYSTEM.md)
   - Add to DesignSystem.mdx if needed

### Modifying Design Tokens

1. Update `src/styles/design-tokens.js`
2. Update `src/styles/design-tokens.stories.jsx` visualizations
3. Test impact on all components in Storybook
4. Update documentation

### File Structure

```
thtx/
├── src/
│   ├── components/
│   │   └── shared/              # Reusable components
│   │       ├── Badge.jsx
│   │       ├── Badge.stories.jsx
│   │       ├── Button.jsx
│   │       ├── Button.stories.jsx
│   │       ├── Card.jsx
│   │       ├── Card.stories.jsx
│   │       ├── SectionHeader.jsx
│   │       ├── SectionHeader.stories.jsx
│   │       ├── FeatureListItem.jsx
│   │       ├── FeatureListItem.stories.jsx
│   │       ├── PricingDisplay.jsx
│   │       ├── PricingDisplay.stories.jsx
│   │       ├── StepIndicator.jsx
│   │       └── StepIndicator.stories.jsx
│   ├── styles/
│   │   ├── design-tokens.js     # Centralized design tokens
│   │   ├── design-tokens.stories.jsx  # Token visualizations
│   │   └── DesignSystem.mdx     # Storybook intro page
│   ├── App.jsx                  # Main application
│   └── main.jsx                 # Entry point
├── .storybook/
│   ├── main.js                  # Storybook configuration
│   └── preview.js               # Global parameters
├── DESIGN_SYSTEM.md             # This file
└── CLAUDE.md                    # AI assistant guidance
```

### Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile**: iOS Safari, Chrome Mobile
- **Tailwind CSS**: Via CDN for main app, build-time for Storybook

### Dependencies

```json
{
  "react": "^19.2.0",
  "lucide-react": "^0.468.0",
  "@storybook/react-vite": "^10.1.0",
  "tailwindcss": "^3.4.1" (dev only, for Storybook)
}
```

## Resources

- **Storybook**: http://localhost:6006 (when running)
- **Main Site**: http://localhost:5173/thtx/ (dev server)
- **Design Tokens**: `src/styles/design-tokens.js`
- **Real-World Usage**: `src/App.jsx`

## Changelog

### Version 1.0.0 (November 2024)

**Initial Release**

- 7 reusable components with comprehensive documentation
- Centralized design token system
- Theme system for cards (default, problem, solution, impact)
- 100+ Storybook stories with real-world examples
- Accessibility testing with a11y addon
- Responsive design with mobile-first approach
- Complete Storybook documentation

**Components Added**:
- Badge (2 variants, icon support)
- Button (3 variants, 3 sizes, icon positioning)
- Card (4 themes, badge/footer support)
- SectionHeader (badge, title, subtitle)
- FeatureListItem (customizable icons)
- PricingDisplay (discount visualization)
- StepIndicator (process flows)

**Design Tokens**:
- Color palette (primary, accents, backgrounds)
- Typography scale (6 levels)
- Spacing scale (3 levels)
- Component base styles

---

**Maintained By**: THTX Development Team
**Version**: 1.0.0
**Last Updated**: November 27, 2024
