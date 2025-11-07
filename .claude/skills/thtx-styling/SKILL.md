---
name: thtx-styling
description: Apply THTX brand styling to new components. Use when creating or styling UI elements to ensure consistency with colors, spacing, typography, and component patterns.
---

# THTX Styling Skill

Apply consistent THTX design system patterns when building components for the thtx.nl landing page.

## Color System

### Brand Colors (ALWAYS use inline styles)

```jsx
// Primary Brand Yellow-Green
'#d4db3e'  // CTAs, highlights, badges, icons, borders, active states

// Light Blue Backgrounds
'#def0fa'  // Badge backgrounds, section backgrounds
'#dcebf3'  // Alternate section backgrounds

// Problem State (Red/Pink)
'#ff6984'  // Problem borders, text, icons
'#fff5f7'  // Light background

// Solution State (Cyan)
'#00d1ff'  // Solution borders, text, icons
'#f0fbff'  // Light background

// Impact State (Yellow-Green)
'#fafbf0'  // Light background (pairs with #d4db3e)
```

### When to Use Inline Styles vs Tailwind

**Inline styles for:**
- ALL brand colors (hex codes above)
- Dynamic/conditional colors
- Custom colors not in Tailwind

**Tailwind for:**
- Layout (flex, grid, spacing)
- Standard colors (gray scale, black, white)
- Typography (sizes, weights)
- Borders (width, radius - NOT brand colors)
- Responsive utilities
- Shadows, display utilities

## Component Templates

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

Use for main call-to-action buttons and primary actions.

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

Use for secondary actions and less prominent CTAs.

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

Use for section labels, tags, and status indicators.

### Info Card with Border

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
      Footer metric or text
    </div>
  </div>
</div>
```

Use for feature cards, info boxes, and case study cards.

### Feature List

```jsx
<ul className="space-y-3">
  <li className="flex items-start">
    <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" style={{ color: '#d4db3e' }} />
    <span>Feature description that may wrap to multiple lines</span>
  </li>
</ul>
```

Use for feature lists, benefit lists, and checkpoints. Note the `mt-1` on icon for baseline alignment.

### Icon Badge

```jsx
<div
  className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
  style={{ backgroundColor: '#d4db3e' }}
>
  <FileText className="w-5 h-5" />
</div>
```

Use for standalone icon containers and feature indicators.

### Section with Badge + Heading

```jsx
<section
  className="py-20 px-4 sm:px-6 lg:px-8"
  style={{ backgroundColor: '#def0fa' }}
>
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <div
        className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
        style={{ backgroundColor: '#d4db3e', color: 'white' }}
      >
        Section Category
      </div>
      <h2 className="text-4xl font-bold mb-4">Section Heading</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Section description
      </p>
    </div>
    {/* Section content */}
  </div>
</section>
```

Use for main sections with introductory content.

## Typography Standards

```jsx
// Headings
text-5xl sm:text-6xl lg:text-7xl  // H1 (hero)
text-4xl sm:text-5xl              // H2 (sections)
text-3xl                          // H3 (track titles)
text-2xl                          // H3 (features)
text-xl                           // H3 (cards)

// Body text
text-xl sm:text-2xl  // Hero subheading
text-xl              // Large body
text-lg              // Medium body
text-base            // Default body (16px)
text-sm              // Small text
text-xs              // Metadata

// Weights
font-bold      // All headings
font-semibold  // Buttons, badges, labels
```

## Spacing Standards

```jsx
// Section padding
py-20 px-4 sm:px-6 lg:px-8  // Standard sections
pt-32 pb-20                  // Hero (extra top for nav)

// Container widths
max-w-7xl  // Hero, navigation
max-w-6xl  // Most sections
max-w-4xl  // Narrow sections
max-w-3xl  // Text-focused

// Card padding
p-8  // Large cards
p-6  // Standard cards
p-4  // Compact cards

// Grid gaps
gap-8  // Large grids
gap-6  // Card grids
gap-4  // Button groups
gap-2  // Icons + text

// Margins
mb-16  // Section title to grid
mb-12  // Section title to content
mb-8   // Heading to paragraph
mb-6   // Paragraph to next
mb-4   // Small separations
```

## Icon Guidelines

```jsx
// Standard icon sizes
w-4 h-4   // 16px - Small badges
w-5 h-5   // 20px - STANDARD (most common)
w-6 h-6   // 24px - Larger contexts
w-12 h-12 // 48px - Feature icons
w-16 h-16 // 64px - Hero icons

// Icon with text (inline)
<div className="flex items-center gap-2">
  <Icon className="w-5 h-5" style={{ color: '#d4db3e' }} />
  Text
</div>

// Icon in button (trailing)
<button className="inline-flex items-center">
  Text
  <ArrowRight className="ml-2 w-5 h-5" />
</button>

// Icon in list (top-aligned)
<li className="flex items-start">
  <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" style={{ color: '#d4db3e' }} />
  <span>List text</span>
</li>
```

## Interactive States

```jsx
// Primary CTA hover
transition transform hover:scale-105

// Secondary button hover
bg-white hover:bg-gray-50 transition

// Link hover
text-gray-700 hover:text-gray-900 transition

// Selected state (10X/Impact)
style={selected ? {
  borderColor: '#d4db3e',
  backgroundColor: '#fafbf0'
} : {}}

// Selected state (Problem/10%)
style={selected ? {
  borderColor: '#ff6984',
  backgroundColor: '#fff5f7'
} : {}}
```

## Responsive Patterns

```jsx
// Text progression
text-5xl sm:text-6xl lg:text-7xl

// Grid layouts
grid md:grid-cols-2 gap-8    // Two columns on tablet+
grid md:grid-cols-3 gap-8    // Three columns on tablet+

// Flex direction
flex flex-col sm:flex-row gap-4

// Display control
hidden md:flex     // Desktop only
md:hidden          // Mobile only
```

## Common Mistakes to Avoid

❌ Don't use Tailwind classes for brand colors:
```jsx
// WRONG
className="bg-yellow-300"

// CORRECT
style={{ backgroundColor: '#d4db3e' }}
```

❌ Don't forget `flex-shrink-0` on icons in flex containers:
```jsx
// WRONG
<Icon className="w-5 h-5 mr-2" />

// CORRECT
<Icon className="w-5 h-5 mr-2 flex-shrink-0" />
```

❌ Don't use `hover:scale-105` on secondary buttons:
```jsx
// WRONG (too prominent)
className="border-2 hover:scale-105"

// CORRECT (subtle)
className="border-2 hover:bg-gray-50"
```

❌ Don't forget responsive variants:
```jsx
// WRONG
className="text-4xl"

// CORRECT
className="text-4xl sm:text-5xl"
```

## Instructions

When styling a new component:

1. **Identify the component type** - Button? Card? Section? List?
2. **Choose the matching template** from the examples above
3. **Copy and customize** the template code
4. **Apply brand colors via inline styles** - Never use Tailwind color classes for brand colors
5. **Use Tailwind for structure** - spacing, layout, typography
6. **Add responsive variants** - Ensure text and grids scale properly
7. **Include hover states** - `scale-105` for primary CTAs, `bg-gray-50` for secondary
8. **Use standard icon sizes** - `w-5 h-5` (20px) in most cases
9. **Test alignment** - Use `flex-shrink-0` and `mt-1` on icons in lists

## Reference

For complete documentation, see:

- Complete style guide: `/workspaces/thtx/.claude/skills/thtx-styling/STYLE_GUIDE.md`
- Component implementation: `/workspaces/thtx/src/App.jsx`

Always prioritize consistency with existing components.
