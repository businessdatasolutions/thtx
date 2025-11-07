# THTX Landing Page - Style Guide

Complete styling reference for consistent component development on thtx.nl

---

## Color System

### Brand Colors (Use Inline Styles)

```jsx
// Primary Brand Yellow-Green
'#d4db3e'  // CTAs, highlights, badges, icons, active states

// Light Blue Backgrounds
'#def0fa'  // Badge backgrounds, section backgrounds, trust signals
'#dcebf3'  // Alternate section backgrounds, secondary cards

// Problem State (Red/Pink)
'#ff6984'  // Problem indicators, borders, text
'#fff5f7'  // Light background (10% answer state)

// Solution State (Cyan)
'#00d1ff'  // Solution indicators, borders, text
'#f0fbff'  // Light background for solution cards

// Impact State (Yellow-Green)
'#fafbf0'  // Light background (10X answer state, impact cards)
```

### Standard Tailwind Colors

```jsx
// Backgrounds
bg-white      // Default background, cards
bg-gray-50    // Subtle backgrounds, timeline
bg-gray-900   // Dark sections, footer

// Text
text-gray-900 // Headings, primary text
text-gray-700 // Body copy
text-gray-600 // Supporting text, metadata
text-gray-500 // De-emphasized text
text-gray-400 // Disabled states
text-white    // On dark backgrounds

// Borders
border-gray-200  // Default borders
border-gray-800  // Dark section dividers
```

---

## Typography

### Headings

```jsx
// H1 - Hero Main
className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"

// H2 - Section Headings
className="text-4xl sm:text-5xl font-bold mb-6"
className="text-4xl font-bold mb-4"

// H3 - Card/Subsection
className="text-3xl font-bold mb-2"  // Track titles
className="text-2xl font-bold mb-4"  // Features
className="text-xl font-bold mb-4"   // Cards
```

### Body Text

```jsx
// Large (Hero subheading)
className="text-xl sm:text-2xl text-gray-600 leading-relaxed"

// Standard large
className="text-xl text-gray-600"

// Medium
className="text-lg text-gray-700"

// Default body (16px)
className="text-gray-700"

// Small
className="text-sm text-gray-600"

// Metadata
className="text-xs text-gray-600"
```

### Font Weights

```jsx
font-bold      // 700 - Headings, emphasis
font-semibold  // 600 - Buttons, badges, labels
// Regular (400) is default
```

---

## Spacing

### Section Padding

```jsx
// Standard sections
className="py-20 px-4 sm:px-6 lg:px-8"

// Hero (extra top for nav)
className="pt-32 pb-20 px-4 sm:px-6 lg:px-8"

// Footer
className="py-12 px-4 sm:px-6 lg:px-8"
```

### Container Max Widths

```jsx
max-w-7xl  // 1280px - Hero, navigation
max-w-6xl  // 1152px - Most sections
max-w-4xl  // 896px - Narrow sections, CTAs
max-w-3xl  // 768px - Text-focused content
max-w-2xl  // 672px - Single column
```

### Spacing Between Elements

```jsx
// Vertical (space-y-*)
space-y-8  // 32px - Large spacing
space-y-6  // 24px - Medium spacing
space-y-4  // 16px - Default spacing
space-y-3  // 12px - Compact spacing
space-y-2  // 8px - Tight spacing

// Horizontal (space-x-*)
space-x-8  // 32px - Navigation
space-x-2  // 8px - Logo & text

// Grid gaps
gap-8      // 32px - Large grids
gap-6      // 24px - Card grids
gap-4      // 16px - Button groups
gap-2      // 8px - Icons & text
```

### Margins

```jsx
mb-16  // 64px - Section title to grid
mb-12  // 48px - Section title to content
mb-8   // 32px - Heading to paragraph
mb-6   // 24px - Paragraph to next
mb-4   // 16px - Small heading to content
mb-2   // 8px - Label to input
```

### Card Padding

```jsx
p-8    // 32px - Large cards (tracks, features)
p-6    // 24px - Standard cards (MPAC, info)
p-4    // 16px - Compact cards, mobile menu
```

### Button Padding

```jsx
px-8 py-4  // Large CTAs
px-6 py-3  // Medium buttons
px-6 py-2  // Small buttons
px-4 py-2  // Badges/pills
px-3 py-1  // Tiny badges
px-2 py-1  // Status badges
```

---

## Component Recipes

### Primary CTA Button

```jsx
<a
  href="#section"
  className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105"
  style={{ backgroundColor: '#d4db3e' }}
>
  Call to Action
  <ArrowRight className="ml-2 w-5 h-5" />
</a>
```

**Key features:**
- Brand color via inline style
- `hover:scale-105` transform
- Icon: `ml-2 w-5 h-5` (20px)

### Secondary Outlined Button

```jsx
<a
  href="#section"
  className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-lg font-semibold transition border-2 bg-white hover:bg-gray-50"
  style={{ borderColor: '#d4db3e' }}
>
  Secondary Action
</a>
```

**Key features:**
- Border color via inline style
- Subtle `hover:bg-gray-50`
- No scale transform

### Badge/Pill

```jsx
<div
  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
  style={{ backgroundColor: '#def0fa' }}
>
  <Zap className="w-4 h-4" style={{ color: '#d4db3e' }} />
  Badge Text
</div>
```

**Key features:**
- `rounded-full`
- Icon: `w-4 h-4` (16px)
- Colors via inline styles

### Info Card with Border & Footer

```jsx
<div
  className="p-6 rounded-xl border-2"
  style={{ borderColor: '#d4db3e', backgroundColor: '#fafbf0' }}
>
  <div className="font-semibold mb-2 flex items-center gap-2" style={{ color: '#d4db3e' }}>
    <TrendingUp className="w-5 h-5" />
    Card Label
  </div>
  <h3 className="text-xl font-bold mb-4">Card Title</h3>
  <p className="text-sm text-gray-700 mb-4">
    Card description text.
  </p>
  <div className="mt-4 pt-4 border-t" style={{ borderColor: '#d4db3e' }}>
    <div className="font-semibold" style={{ color: '#d4db3e' }}>
      Footer metric
    </div>
  </div>
</div>
```

**Key features:**
- Coordinated border & background colors
- Footer with matching border
- Icon size: `w-5 h-5` (20px)

### Feature List

```jsx
<ul className="space-y-3">
  <li className="flex items-start">
    <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" style={{ color: '#d4db3e' }} />
    <span>Feature description that may wrap to multiple lines</span>
  </li>
  {/* More items */}
</ul>
```

**Key features:**
- `flex items-start` for top alignment
- `mt-1` aligns icon with text baseline
- `flex-shrink-0` prevents icon squishing

### Pricing/Track Card

```jsx
<div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2" style={{ borderColor: '#d4db3e' }}>
  {/* Header */}
  <div className="p-8" style={{ backgroundColor: '#def0fa' }}>
    <div className="flex items-center justify-between mb-4">
      <Users className="w-12 h-12" />
      <div className="px-3 py-1 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: '#d4db3e' }}>
        Badge
      </div>
    </div>
    <h3 className="text-3xl font-bold mb-2">Track Name</h3>
    <p className="text-xl font-semibold mb-4">Subtitle</p>
    <div className="flex items-baseline gap-2">
      <div className="text-4xl font-bold" style={{ color: '#d4db3e' }}>€1.250</div>
      <div className="text-lg text-gray-400 line-through">€2.500</div>
    </div>
  </div>

  {/* Body */}
  <div className="p-8 space-y-4">
    <p className="text-lg mb-6">Description</p>
    <ul className="space-y-3">
      {/* Feature list */}
    </ul>
    <a href="#" className="block w-full text-center px-6 py-3 rounded-lg font-semibold mt-8 transition hover:opacity-90" style={{ backgroundColor: '#d4db3e' }}>
      CTA Button
    </a>
  </div>
</div>
```

**Key features:**
- `rounded-2xl` with `shadow-xl`
- `overflow-hidden` for clean edges
- Colored header section
- White body section

### Icon Badge

```jsx
<div
  className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
  style={{ backgroundColor: '#d4db3e' }}
>
  <FileText className="w-5 h-5" />
</div>
```

**Key features:**
- Square: `w-10 h-10` (40px)
- Icon: `w-5 h-5` (20px, half badge size)
- `rounded-lg` (8px radius)

### Numbered Step Circle

```jsx
<div
  className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold"
  style={{ backgroundColor: '#d4db3e' }}
>
  1
</div>
```

**Key features:**
- Fixed size: `w-12 h-12` (48px)
- `rounded-full`
- `mx-auto` for centering

---

## Interactive States

### Hover Effects

```jsx
// Scale (Primary CTAs)
className="transition transform hover:scale-105"

// Background change
className="bg-white hover:bg-gray-50 transition"

// Opacity
className="transition hover:opacity-90"

// Text color
className="text-gray-700 hover:text-gray-900 transition"

// Border
className="border-gray-200 hover:border-gray-400 transition"
```

### Selected States

```jsx
// Quiz 10X (selected)
style={selected ? {
  borderColor: '#d4db3e',
  backgroundColor: '#fafbf0'
} : {}}

// Quiz 10% (selected)
style={selected ? {
  borderColor: '#ff6984',
  backgroundColor: '#fff5f7'
} : {}}

// Unselected
className="border-gray-200 hover:border-gray-400"
```

---

## Responsive Design

### Text Size Progression

```jsx
// Hero heading
className="text-5xl sm:text-6xl lg:text-7xl"
// 48px → 60px → 72px

// Section heading
className="text-4xl sm:text-5xl"
// 36px → 48px

// Body text
className="text-xl sm:text-2xl"
// 20px → 24px
```

### Grid Layouts

```jsx
// Three columns on medium+
className="grid md:grid-cols-3 gap-8"

// Two columns on medium+
className="grid md:grid-cols-2 gap-8"
```

### Display Control

```jsx
className="hidden md:flex"     // Desktop only
className="md:hidden"          // Mobile only
className="hidden sm:inline"   // Hide on mobile
```

---

## Icon Guidelines

### Icon Sizes

```jsx
w-4 h-4   // 16px - Small badges, inline with small text
w-5 h-5   // 20px - Standard (buttons, cards, lists) ← Most common
w-6 h-6   // 24px - Mobile menu, arrows
w-12 h-12 // 48px - Feature icons
w-16 h-16 // 64px - Section icons (large checkmark, X)
```

### Icon Placement

```jsx
// With text (inline)
<div className="flex items-center gap-2">
  <Icon className="w-4 h-4" />
  Text
</div>

// In button (trailing)
<button className="inline-flex items-center">
  Button Text
  <ArrowRight className="ml-2 w-5 h-5" />
</button>

// In list (top-aligned)
<li className="flex items-start">
  <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" style={{ color: '#d4db3e' }} />
  <span>List item text</span>
</li>
```

### Available Icons

```jsx
import {
  ArrowRight,      // CTAs, navigation, flow
  Users,           // Track 1 icon
  Target,          // Track 2 icon
  CheckCircle,     // Success, list items
  XCircle,         // Rejection state
  Menu, X,         // Mobile menu
  FileText,        // Documents
  MessageSquare,   // Chat/communication
  Package,         // Supply chain
  TrendingUp,      // Impact/growth
  AlertCircle,     // Problems
  Lightbulb,       // Solutions
  Zap              // Energy/movement
} from 'lucide-react';
```

---

## Layout Patterns

### Standard Section

```jsx
<section className="py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-6xl mx-auto">
    {/* Content */}
  </div>
</section>
```

### Colored Section

```jsx
<section
  className="py-20 px-4 sm:px-6 lg:px-8"
  style={{ backgroundColor: '#def0fa' }}
>
  <div className="max-w-6xl mx-auto">
    {/* Content */}
  </div>
</section>
```

### Section with Badge + Heading

```jsx
<div className="text-center mb-16">
  <div
    className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
    style={{ backgroundColor: '#def0fa' }}
  >
    Section Label
  </div>
  <h2 className="text-4xl font-bold mb-4">
    Section Heading
  </h2>
  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
    Section description
  </p>
</div>
```

---

## Border Radius

```jsx
rounded          // 4px  - Small badges
rounded-lg       // 8px  - Buttons, standard cards
rounded-xl       // 12px - Feature cards
rounded-2xl      // 16px - Pricing cards
rounded-full     // 9999px - Badges, pills, circles
```

---

## Shadows

```jsx
shadow-md   // Navigation (when scrolled)
shadow-lg   // Standard cards
shadow-xl   // Pricing/track cards (more prominent)
```

---

## Key Rules

### ✅ DO

1. **Use inline styles for ALL brand colors** (`#d4db3e`, `#def0fa`, `#ff6984`, etc.)
2. **Use Tailwind for structure** (layout, spacing, standard colors)
3. **Standard icon size is `w-5 h-5`** (20px) for most contexts
4. **Section padding is always `py-20 px-4 sm:px-6 lg:px-8`**
5. **Primary CTAs get `hover:scale-105`**, secondary get `hover:bg-gray-50`
6. **Cards use `rounded-xl` or `rounded-2xl`** depending on prominence
7. **Feature lists use `flex items-start` with `mt-1`** on icons
8. **Badges are `rounded-full` with `text-sm font-semibold`**
9. **Grid layouts use `gap-8` or `gap-6`**
10. **Responsive text follows pattern**: `text-xl sm:text-2xl lg:text-3xl`

### ❌ DON'T

1. **Don't use Tailwind color classes for brand colors** (use inline styles)
2. **Don't forget responsive variants** for text/padding/grids
3. **Don't use fixed widths without max-widths** for responsiveness
4. **Don't mix border-radius styles** on same component level
5. **Don't use arbitrary values** when Tailwind utilities exist
6. **Don't forget `transition`** on interactive elements
7. **Don't use different icon sizes** in the same context
8. **Don't forget `flex-shrink-0`** on icons in flex containers
9. **Don't use `scale` hover on secondary buttons** (too prominent)
10. **Don't forget `overflow-hidden`** when using `rounded-*` with child elements

---

## Inline Styles vs Tailwind Decision Tree

```
Is it a brand color (#d4db3e, #def0fa, #ff6984, etc.)?
├─ YES → Use inline style: style={{ backgroundColor: '#d4db3e' }}
└─ NO → Use Tailwind: className="bg-white text-gray-700"

Is it spacing/layout?
├─ YES → Use Tailwind: className="p-8 mb-4 gap-6"
└─ NO → See above

Is it a standard gray color?
├─ YES → Use Tailwind: className="text-gray-600 bg-gray-50"
└─ NO → Use inline style

Is it dynamic/conditional styling?
├─ YES → Use inline style with ternary: style={condition ? { color: '#d4db3e' } : {}}
└─ NO → Use static inline style or Tailwind
```

---

## Common Patterns

### CTA Section

```jsx
<section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl sm:text-5xl font-bold mb-8">
      CTA Heading
    </h2>
    <p className="text-xl text-gray-600 mb-12">
      Supporting text
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="#action"
        className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105"
        style={{ backgroundColor: '#d4db3e' }}
      >
        Primary Action
        <ArrowRight className="ml-2 w-5 h-5" />
      </a>
      <a
        href="#alternative"
        className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-lg font-semibold transition border-2 bg-white hover:bg-gray-50"
        style={{ borderColor: '#d4db3e' }}
      >
        Secondary Action
      </a>
    </div>
  </div>
</section>
```

### Two-Column Feature Grid

```jsx
<div className="grid md:grid-cols-2 gap-8">
  <div className="bg-white p-8 rounded-xl shadow-lg">
    <h3 className="text-2xl font-bold mb-6">Feature 1</h3>
    <ul className="space-y-4">
      <li className="flex items-start gap-3">
        <ArrowRight className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#d4db3e' }} />
        <span>Feature description</span>
      </li>
      {/* More items */}
    </ul>
  </div>
  <div className="bg-white p-8 rounded-xl shadow-lg">
    <h3 className="text-2xl font-bold mb-6">Feature 2</h3>
    {/* Content */}
  </div>
</div>
```

---

*Last updated: 2025-11-07*
*Questions? Check [CLAUDE.md](./CLAUDE.md) or contact hello@thtx.nl*
