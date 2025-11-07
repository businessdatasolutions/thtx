# THTX Styling Reference

Detailed reference documentation for the THTX design system.

## Complete Color Palette

### Brand Colors with Context

```jsx
// Primary Brand Yellow-Green
'#d4db3e'
// Used in: Primary CTAs, text highlights, badges, icons, borders,
// numbered circles, active states, 10X quiz selection

// Light Blue Background 1
'#def0fa'
// Used in: Badge backgrounds, section backgrounds, card backgrounds,
// track headers, trust signals

// Light Blue Background 2
'#dcebf3'
// Used in: Alternate section backgrounds, secondary cards,
// alternate track headers

// Red/Pink (Problem State)
'#ff6984'  // Border, text, icons
'#fff5f7'  // Light background
// Used in: Problem card (MPAC), "not for you" section,
// 10% quiz selection

// Cyan Blue (Solution State)
'#00d1ff'  // Border, text, icons
'#f0fbff'  // Light background
// Used in: Solution card (MPAC)

// Yellow-Green (Impact State)
'#d4db3e'  // Border, text (same as brand color)
'#fafbf0'  // Light background
// Used in: Impact card (MPAC), 10X quiz selection
```

### Tailwind Gray Scale

```jsx
// Backgrounds
bg-white      // Default background, cards, buttons
bg-gray-50    // Subtle backgrounds, timeline, unselected states
bg-gray-800   // Dark cards within dark sections
bg-gray-900   // Footer, dark hero sections

// Text
text-gray-900 // Headings, primary text, navigation
text-gray-700 // Body copy, descriptions, main content
text-gray-600 // Supporting text, metadata, subheadings
text-gray-500 // De-emphasized content, subdued text
text-gray-400 // Disabled/placeholder text, timeline arrows
text-gray-300 // Text on dark backgrounds (secondary)
text-white    // Text on dark backgrounds (primary)

// Borders
border-gray-200  // Default borders, unselected states
border-gray-800  // Dark section dividers
```

## Complete Component Recipes

### Two-Column Grid with Cards

```jsx
<div className="grid md:grid-cols-2 gap-8">
  <div className="bg-white p-8 rounded-xl shadow-lg">
    <h3 className="text-2xl font-bold mb-6">Feature 1</h3>
    <ul className="space-y-4">
      <li className="flex items-start gap-3">
        <ArrowRight className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#d4db3e' }} />
        <span>Feature description</span>
      </li>
      <li className="flex items-start gap-3">
        <ArrowRight className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#d4db3e' }} />
        <span>Another feature</span>
      </li>
    </ul>
  </div>
  <div className="bg-white p-8 rounded-xl shadow-lg">
    <h3 className="text-2xl font-bold mb-6">Feature 2</h3>
    <p className="text-gray-700">Content here</p>
  </div>
</div>
```

### Three-Column Grid

```jsx
<div className="grid md:grid-cols-3 gap-8">
  <div className="p-6 rounded-xl border-2" style={{ borderColor: '#ff6984', backgroundColor: '#fff5f7' }}>
    {/* Problem card */}
  </div>
  <div className="p-6 rounded-xl border-2" style={{ borderColor: '#00d1ff', backgroundColor: '#f0fbff' }}>
    {/* Solution card */}
  </div>
  <div className="p-6 rounded-xl border-2" style={{ borderColor: '#d4db3e', backgroundColor: '#fafbf0' }}>
    {/* Impact card */}
  </div>
</div>
```

### Pricing/Track Card (Full Example)

```jsx
<div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2" style={{ borderColor: '#d4db3e' }}>
  {/* Colored Header */}
  <div className="p-8" style={{ backgroundColor: '#def0fa' }}>
    <div className="flex items-center justify-between mb-4">
      <Users className="w-12 h-12" />
      <div
        className="px-3 py-1 rounded-full text-sm font-semibold text-white"
        style={{ backgroundColor: '#d4db3e' }}
      >
        Limited Seats
      </div>
    </div>
    <h3 className="text-3xl font-bold mb-2">Business Track</h3>
    <p className="text-xl font-semibold mb-4">Transform your business</p>
    <div className="flex items-baseline gap-2">
      <div className="text-4xl font-bold" style={{ color: '#d4db3e' }}>€1.250</div>
      <div className="text-lg text-gray-400 line-through">€2.500</div>
    </div>
    <p className="text-sm text-gray-600 mt-2">Early bird pricing</p>
  </div>

  {/* White Body */}
  <div className="p-8 space-y-4">
    <p className="text-lg mb-6">
      Complete program for business leaders ready to transform their organization.
    </p>

    <h4 className="font-semibold text-lg mb-3">What's Included:</h4>
    <ul className="space-y-3">
      <li className="flex items-start">
        <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" style={{ color: '#d4db3e' }} />
        <span>12 interactive workshops</span>
      </li>
      <li className="flex items-start">
        <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" style={{ color: '#d4db3e' }} />
        <span>1-on-1 coaching sessions</span>
      </li>
      <li className="flex items-start">
        <CheckCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0" style={{ color: '#d4db3e' }} />
        <span>Lifetime community access</span>
      </li>
    </ul>

    <a
      href="#enroll"
      className="block w-full text-center px-6 py-3 rounded-lg font-semibold mt-8 transition hover:opacity-90"
      style={{ backgroundColor: '#d4db3e' }}
    >
      Enroll Now
    </a>
  </div>
</div>
```

### Timeline/Process Flow

```jsx
<div className="flex items-center justify-between max-w-3xl mx-auto">
  <div className="text-center flex-1">
    <div
      className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold"
      style={{ backgroundColor: '#d4db3e' }}
    >
      1
    </div>
    <h4 className="font-semibold mb-1">Step One</h4>
    <p className="text-sm text-gray-600">Description</p>
  </div>

  <ArrowRight className="w-6 h-6 text-gray-400 flex-shrink-0 mx-2" />

  <div className="text-center flex-1">
    <div
      className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold"
      style={{ backgroundColor: '#d4db3e' }}
    >
      2
    </div>
    <h4 className="font-semibold mb-1">Step Two</h4>
    <p className="text-sm text-gray-600">Description</p>
  </div>

  <ArrowRight className="w-6 h-6 text-gray-400 flex-shrink-0 mx-2" />

  <div className="text-center flex-1">
    <div
      className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold"
      style={{ backgroundColor: '#d4db3e' }}
    >
      3
    </div>
    <h4 className="font-semibold mb-1">Step Three</h4>
    <p className="text-sm text-gray-600">Description</p>
  </div>
</div>
```

### CTA Section (Full Width)

```jsx
<section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl sm:text-5xl font-bold mb-8">
      Ready to Think <span style={{ color: '#d4db3e' }}>10X</span>?
    </h2>
    <p className="text-xl text-gray-600 mb-12">
      Join the movement of business leaders transforming their organizations through radical innovation.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="#apply"
        className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105"
        style={{ backgroundColor: '#d4db3e' }}
      >
        Apply Now
        <ArrowRight className="ml-2 w-5 h-5" />
      </a>
      <a
        href="#learn-more"
        className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-lg font-semibold transition border-2 bg-white hover:bg-gray-50"
        style={{ borderColor: '#d4db3e' }}
      >
        Learn More
      </a>
    </div>
  </div>
</section>
```

### Dark Section (Footer Style)

```jsx
<section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center space-x-2 mb-4 md:mb-0">
        <img src="/thtx/logo.png" alt="THTX" className="w-8 h-8" />
        <span className="text-2xl font-bold">THTX</span>
        <span className="text-sm text-gray-400">.nl</span>
      </div>

      <div className="flex gap-8">
        <a href="#about" className="text-gray-300 hover:text-white transition">
          About
        </a>
        <a href="#programs" className="text-gray-300 hover:text-white transition">
          Programs
        </a>
        <a href="#contact" className="text-gray-300 hover:text-white transition">
          Contact
        </a>
      </div>
    </div>

    <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
      © 2026 THTX.nl - Think Ten X. All rights reserved.
    </div>
  </div>
</section>
```

### Quiz/Form Button Group

```jsx
<div className="grid md:grid-cols-2 gap-6">
  <button
    onClick={() => handleAnswer('option1')}
    className={`p-6 rounded-xl border-2 transition ${
      selected === 'option1' ? '' : 'border-gray-200 hover:border-gray-400'
    }`}
    style={selected === 'option1' ? {
      borderColor: '#ff6984',
      backgroundColor: '#fff5f7'
    } : {}}
  >
    <h3 className="text-xl font-bold mb-3">Option 1</h3>
    <p className="text-gray-600">Description of first option</p>
  </button>

  <button
    onClick={() => handleAnswer('option2')}
    className={`p-6 rounded-xl border-2 transition ${
      selected === 'option2' ? '' : 'border-gray-200 hover:border-gray-400'
    }`}
    style={selected === 'option2' ? {
      borderColor: '#d4db3e',
      backgroundColor: '#fafbf0'
    } : {}}
  >
    <h3 className="text-xl font-bold mb-3">Option 2</h3>
    <p className="text-gray-600">Description of second option</p>
  </button>
</div>
```

## Shadow & Depth System

```jsx
// Navigation shadow (when scrolled)
shadow-md

// Standard cards
shadow-lg

// Prominent cards (pricing, tracks)
shadow-xl

// No shadow
// Used for cards with colored backgrounds or strong borders
```

## Border Radius Scale

```jsx
rounded          // 4px  - Small badges, status indicators
rounded-lg       // 8px  - Buttons, icon badges, standard cards
rounded-xl       // 12px - Feature cards, content cards, MPAC cards
rounded-2xl      // 16px - Pricing cards, major sections, track cards
rounded-full     // Full - Badges, pills, numbered circles, avatars
```

## Available Lucide Icons

```jsx
import {
  ArrowRight,      // CTAs, navigation, flow indicators, timelines
  Users,           // Track 1 icon, team features
  Target,          // Track 2 icon, goals, objectives
  CheckCircle,     // Success states, completed items, feature lists
  XCircle,         // Rejection state, errors, "not for you"
  Menu,            // Mobile menu open button
  X,               // Mobile menu close button, close actions
  FileText,        // Documents, content, resources
  MessageSquare,   // Chat, communication, feedback
  Package,         // Products, offerings, supply chain
  TrendingUp,      // Growth, impact metrics, positive trends
  AlertCircle,     // Problems, warnings, important notes
  Lightbulb,       // Solutions, ideas, insights
  Zap              // Energy, speed, movement, transformations
} from 'lucide-react';
```

## Mobile Menu Pattern

```jsx
// State
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// Toggle button
<button
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  className="md:hidden p-2"
>
  {mobileMenuOpen ? (
    <X className="w-6 h-6" />
  ) : (
    <Menu className="w-6 h-6" />
  )}
</button>

// Menu content
{mobileMenuOpen && (
  <div className="md:hidden bg-white border-t">
    <div className="px-4 py-4 space-y-3">
      <a
        href="#section1"
        className="block text-gray-700 hover:text-gray-900"
        onClick={() => setMobileMenuOpen(false)}
      >
        Section 1
      </a>
      <a
        href="#section2"
        className="block text-gray-700 hover:text-gray-900"
        onClick={() => setMobileMenuOpen(false)}
      >
        Section 2
      </a>
    </div>
  </div>
)}
```

## Scroll Effect Navigation

```jsx
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// Apply to nav
<nav className={`fixed w-full z-50 transition-all duration-300 ${
  scrolled ? 'bg-white shadow-md' : 'bg-transparent'
}`}>
```

## Color Pairing Guide

Use these color combinations consistently:

**Problem State:**
- Border: `#ff6984`
- Background: `#fff5f7`
- Text/Icons: `#ff6984`

**Solution State:**
- Border: `#00d1ff`
- Background: `#f0fbff`
- Text/Icons: `#00d1ff`

**Impact/Success State:**
- Border: `#d4db3e`
- Background: `#fafbf0`
- Text/Icons: `#d4db3e`

**Primary Brand:**
- Background: `#d4db3e`
- Text: `white` or `text-gray-900`

**Section Backgrounds:**
- Light blue: `#def0fa` or `#dcebf3`
- Alternate sections for visual rhythm

## Performance & Accessibility Notes

- All interactive elements include `transition` for smooth state changes
- Icons include `flex-shrink-0` to prevent layout shifts
- Responsive text scales smoothly across breakpoints
- Color contrast meets WCAG AA standards
- Focus states inherit from Tailwind defaults
- `alt` text required on all images
- Semantic HTML5 sections with id anchors for navigation
