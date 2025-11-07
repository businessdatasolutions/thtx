# THTX Styling Skill

You are helping build components for the THTX landing page (thtx.nl) with consistent styling. Apply the THTX design system patterns defined below.

## Quick Reference: Color System

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

**Inline styles:**
- ALL brand colors (hex codes above)
- Dynamic/conditional colors
- Custom colors not in Tailwind

**Tailwind:**
- Layout (flex, grid, spacing)
- Standard colors (gray scale, black, white)
- Typography (sizes, weights)
- Borders (width, radius - NOT brand colors)
- Responsive utilities
- Shadows, display utilities

## Component Templates

### 1. Primary CTA Button

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

**When to use:** Main call-to-action buttons, primary actions
**Key features:** Brand yellow background, scale hover effect, optional trailing icon

### 2. Secondary Outlined Button

```jsx
<a
  href="#section"
  className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-lg font-semibold transition border-2 bg-white hover:bg-gray-50"
  style={{ borderColor: '#d4db3e' }}
>
  Secondary Action
</a>
```

**When to use:** Secondary actions, less prominent CTAs
**Key features:** Brand border, subtle hover, no scale effect

### 3. Badge/Pill

```jsx
<div
  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
  style={{ backgroundColor: '#def0fa' }}
>
  <Zap className="w-4 h-4" style={{ color: '#d4db3e' }} />
  Badge Text
</div>
```

**When to use:** Section labels, tags, status indicators
**Key features:** `rounded-full`, small icons (16px), light blue background

### 4. Info Card with Border

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

**When to use:** Feature cards, info boxes, case study cards
**Key features:** Coordinated border + background, optional footer with border, icon in header

### 5. Feature List

```jsx
<ul className="space-y-3">
  <li className="flex items-start">
    <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" style={{ color: '#d4db3e' }} />
    <span>Feature description that may wrap to multiple lines</span>
  </li>
  <li className="flex items-start">
    <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" style={{ color: '#d4db3e' }} />
    <span>Another feature</span>
  </li>
</ul>
```

**When to use:** Feature lists, benefit lists, checkpoints
**Key features:** `flex items-start` for alignment, `mt-1` on icon, `flex-shrink-0` to prevent squishing

### 6. Icon Badge

```jsx
<div
  className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
  style={{ backgroundColor: '#d4db3e' }}
>
  <FileText className="w-5 h-5" />
</div>
```

**When to use:** Standalone icon containers, feature indicators
**Key features:** Square 40px, icon half the size (20px), rounded corners

### 7. Section with Badge + Heading

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
      <h2 className="text-4xl font-bold mb-4">
        Section Heading
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Section description
      </p>
    </div>
    {/* Section content */}
  </div>
</section>
```

**When to use:** Main sections with introductory content
**Key features:** Colored background, centered content, badge above heading

### 8. Two-Column Grid

```jsx
<div className="grid md:grid-cols-2 gap-8">
  <div className="bg-white p-8 rounded-xl shadow-lg">
    {/* Column 1 content */}
  </div>
  <div className="bg-white p-8 rounded-xl shadow-lg">
    {/* Column 2 content */}
  </div>
</div>
```

**When to use:** Side-by-side features, comparison layouts
**Key features:** Stacks on mobile, two columns on tablet+, `gap-8` spacing

### 9. Pricing/Track Card

```jsx
<div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2" style={{ borderColor: '#d4db3e' }}>
  {/* Header */}
  <div className="p-8" style={{ backgroundColor: '#def0fa' }}>
    <div className="flex items-center justify-between mb-4">
      <Users className="w-12 h-12" />
      <div className="px-3 py-1 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: '#d4db3e' }}>
        Featured
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
    <p className="text-lg mb-6">Description text</p>
    <ul className="space-y-3">
      <li className="flex items-start">
        <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" style={{ color: '#d4db3e' }} />
        <span>Feature 1</span>
      </li>
    </ul>
    <a href="#" className="block w-full text-center px-6 py-3 rounded-lg font-semibold mt-8 transition hover:opacity-90" style={{ backgroundColor: '#d4db3e' }}>
      Enroll Now
    </a>
  </div>
</div>
```

**When to use:** Pricing cards, program/track cards, product offerings
**Key features:** Colored header section, white body, full-width CTA at bottom

## Typography Guidelines

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

// Always use font-bold on headings
// Use font-semibold on buttons, badges, labels
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

## Icon Usage

```jsx
// Icon sizes
w-4 h-4   // 16px - Small badges, inline with small text
w-5 h-5   // 20px - STANDARD SIZE (most common)
w-6 h-6   // 24px - Mobile menu, larger contexts
w-12 h-12 // 48px - Feature icons
w-16 h-16 // 64px - Section hero icons

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
// Primary CTA hover (scale)
className="transition transform hover:scale-105"

// Secondary button hover (background)
className="bg-white hover:bg-gray-50 transition"

// Link hover (color)
className="text-gray-700 hover:text-gray-900 transition"

// Border hover
className="border-gray-200 hover:border-gray-400 transition"

// Selected state (10X)
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

// Grid - mobile stack, tablet+ columns
grid md:grid-cols-2 gap-8
grid md:grid-cols-3 gap-8

// Flex direction
flex flex-col sm:flex-row gap-4

// Hide/show
hidden md:flex     // Desktop only
md:hidden          // Mobile only
hidden sm:inline   // Hide mobile
```

## Common Mistakes to Avoid

❌ **Don't** use Tailwind classes for brand colors:
```jsx
// WRONG
className="bg-yellow-300 text-yellow-500"

// CORRECT
style={{ backgroundColor: '#d4db3e' }}
```

❌ **Don't** forget `flex-shrink-0` on icons in flex containers:
```jsx
// WRONG
<Icon className="w-5 h-5 mr-2" />

// CORRECT
<Icon className="w-5 h-5 mr-2 flex-shrink-0" />
```

❌ **Don't** use `hover:scale-105` on secondary buttons:
```jsx
// WRONG (too prominent)
className="border-2 hover:scale-105"

// CORRECT
className="border-2 hover:bg-gray-50"
```

❌ **Don't** forget responsive variants:
```jsx
// WRONG
className="text-4xl"

// CORRECT
className="text-4xl sm:text-5xl"
```

❌ **Don't** use arbitrary icon sizes:
```jsx
// WRONG
className="w-7 h-7"

// CORRECT (use standard sizes)
className="w-5 h-5"  // or w-6 h-6
```

## Decision Tree

```
Creating a new component?
├─ Is it a button/CTA?
│  ├─ Primary? → Use Primary CTA template with scale hover
│  └─ Secondary? → Use Secondary Outlined template with bg hover
├─ Is it a card/box?
│  ├─ Feature/info? → Use Info Card template with border
│  └─ Pricing/track? → Use Pricing Card template with header
├─ Is it a list?
│  └─ Use Feature List template with CheckCircle icons
├─ Is it a section?
│  └─ Use Section template with badge + heading pattern
└─ Is it an icon badge?
   └─ Use Icon Badge template (40px square)

Choosing colors?
├─ Brand highlight? → #d4db3e
├─ Problem state? → #ff6984 border + #fff5f7 bg
├─ Solution state? → #00d1ff border + #f0fbff bg
├─ Impact state? → #d4db3e border + #fafbf0 bg
├─ Section background? → #def0fa or #dcebf3
└─ Text/borders? → gray scale (Tailwind)

Spacing layout?
├─ Section padding → py-20 px-4 sm:px-6 lg:px-8
├─ Card padding → p-8 (large) or p-6 (standard)
├─ Grid gaps → gap-8 or gap-6
└─ Icon spacing → gap-2 or mr-2

Icon sizing?
├─ Standard context → w-5 h-5 (20px)
├─ Badge/small → w-4 h-4 (16px)
└─ Feature/large → w-12 h-12 (48px)
```

## Styling Workflow

When creating a new component:

1. **Choose the right template** from the examples above
2. **Copy the template** and customize the content
3. **Apply brand colors via inline styles** (never Tailwind color classes)
4. **Use Tailwind for structure** (spacing, layout, typography)
5. **Add responsive variants** for text and grids (`sm:`, `md:`, `lg:`)
6. **Include proper hover states** (scale for primary, bg for secondary)
7. **Use standard icon sizes** (`w-5 h-5` in most cases)
8. **Test on mobile** (check that grids stack, text sizes scale)

## Full Style Guide Reference

For complete documentation, see [/workspaces/thtx/STYLE_GUIDE.md](file:///workspaces/thtx/STYLE_GUIDE.md)

---

## Your Task

When styling components:
1. Identify which template(s) best match the component type
2. Apply brand colors using inline styles (NEVER Tailwind color classes)
3. Use Tailwind for all structural styling
4. Follow spacing and typography standards
5. Include responsive variants
6. Add appropriate hover states
7. Use standard icon sizes

Always prioritize consistency with existing components. When in doubt, check the existing implementation in [/workspaces/thtx/src/App.jsx](file:///workspaces/thtx/src/App.jsx) or the [style guide](file:///workspaces/thtx/STYLE_GUIDE.md).
