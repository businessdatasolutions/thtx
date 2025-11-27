# THTX - Think Ten X

> A modern React website for a business transformation consultancy, built with Vite and featuring a comprehensive component library.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Opens at http://localhost:5173/thtx/

# View component documentation
npm run storybook
# Opens at http://localhost:6006

# Build for production
npm run build
# Creates optimized bundle in docs/

# Preview production build
npm run preview
# Opens at http://localhost:4173/thtx/
```

## 📚 Documentation

- **[CLAUDE.md](CLAUDE.md)** - Development guide and project architecture
- **[DESIGN_SYSTEM.md](DESIGN_SYSTEM.md)** - Complete design system documentation
- **Storybook** - Interactive component documentation (run `npm run storybook`)

## 🎨 Design System

This project includes a comprehensive design system with:

- **7 Reusable Components** - Badge, Button, Card, SectionHeader, FeatureListItem, PricingDisplay, StepIndicator
- **Design Tokens** - Centralized colors, typography, and spacing
- **Theme System** - Card themes for problem, solution, and impact messaging
- **100+ Storybook Stories** - Interactive examples and documentation
- **Accessibility First** - WCAG 2.1 Level AA compliance

[View Design System →](DESIGN_SYSTEM.md)

## 🏗️ Project Structure

```
thtx/
├── src/
│   ├── components/
│   │   └── shared/              # Reusable component library
│   ├── styles/
│   │   ├── design-tokens.js     # Design system tokens
│   │   └── DesignSystem.mdx     # Storybook intro
│   ├── App.jsx                  # Main application
│   └── main.jsx                 # Entry point
├── .storybook/                  # Storybook configuration
├── docs/                        # Production build (GitHub Pages)
├── DESIGN_SYSTEM.md             # Design system documentation
└── CLAUDE.md                    # Development guide
```

## 🛠️ Tech Stack

- **React 19.2.0** - UI library
- **Vite 7.1.12** - Build tool and dev server
- **Tailwind CSS 3.4.1** - Utility-first CSS
- **Lucide React** - Icon system
- **Storybook 10.1.0** - Component documentation
- **GitHub Pages** - Deployment

## 📦 Component Library

### Badge
Labels and status indicators with icon support
```jsx
<Badge variant="filled" icon={Sparkles}>Innovation</Badge>
```

### Button
Primary interaction element with multiple variants and sizes
```jsx
<Button variant="primary" size="lg" icon={ArrowRight}>
  Get Started
</Button>
```

### Card
Versatile container with theme-based styling
```jsx
<Card title="Feature" theme="solution" icon={Lightbulb}>
  Content goes here
</Card>
```

### SectionHeader
Consistent headers for page sections
```jsx
<SectionHeader
  badge="New Feature"
  title="Section Title"
  subtitle="Description"
/>
```

### FeatureListItem
List items with customizable icons
```jsx
<ul className="space-y-3">
  <FeatureListItem icon={CheckCircle}>
    Feature description
  </FeatureListItem>
</ul>
```

### PricingDisplay
Pricing with optional discount visualization
```jsx
<PricingDisplay
  price="€7.500"
  originalPrice="€15.000"
  subtitle="early-bird"
/>
```

### StepIndicator
Numbered steps for processes and workflows
```jsx
<StepIndicator
  number="1"
  title="Discovery"
  subtitle="Identify opportunities"
/>
```

## 🎯 Design Tokens

All components use centralized design tokens:

```javascript
import { colors, typography, spacing } from './styles/design-tokens';

// Colors
colors.primary        // #d4db3e (THTX Yellow)
colors.accent.pink    // #ff6984 (Problem indicator)
colors.accent.cyan    // #00d1ff (Solution indicator)

// Typography
typography.h1         // text-5xl md:text-7xl font-bold
typography.h2         // text-4xl font-bold
typography.body       // text-base

// Spacing
spacing.section       // py-16 px-4
spacing.card          // p-6
```

## 🌐 Deployment

The site is deployed to GitHub Pages from the `/docs` folder:

```bash
# Build for production
npm run build

# Commit and push
git add docs/
git commit -m "Deploy to GitHub Pages"
git push
```

**Live Site**: https://businessdatasolutions.github.io/thtx/

For custom domain setup (thtx.nl), see [CLAUDE.md](CLAUDE.md#custom-domain-setup-thtxnl).

## ♿ Accessibility

All components follow WCAG 2.1 Level AA guidelines:

- Color contrast ratios meet standards
- Keyboard navigation fully supported
- Screen reader friendly with semantic HTML
- Tested with Storybook's a11y addon

## 🧪 Development

### Adding a New Component

1. Create component in `src/components/shared/ComponentName.jsx`
2. Add JSDoc documentation
3. Import design tokens
4. Create `ComponentName.stories.jsx` with comprehensive examples
5. Test in Storybook
6. Update [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md)

### Modifying Design Tokens

1. Update `src/styles/design-tokens.js`
2. Update visualizations in `design-tokens.stories.jsx`
3. Test impact on all components
4. Update documentation

## 📄 License

Proprietary - THTX (Think Ten X)

## 🤝 Contributing

This is a private project. For internal development guidelines, see [CLAUDE.md](CLAUDE.md).

---

**Version**: 1.0.0
**Maintained By**: THTX Development Team