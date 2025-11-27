import { colors, spacing, typography, componentStyles } from './design-tokens';

export default {
  title: 'Design System/Design Tokens',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Design tokens are the core visual building blocks of the THTX design system. These centralized values ensure consistency across all components and pages.',
      },
    },
  },
};

// Color Palette
export const ColorPalette = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Primary Color</h2>
        <div className="flex items-center gap-4">
          <div
            className="w-32 h-32 rounded-lg border-2 border-gray-300 shadow-lg"
            style={{ backgroundColor: colors.primary }}
          />
          <div>
            <div className="font-mono text-sm font-semibold">{colors.primary}</div>
            <div className="text-sm text-gray-600">THTX Yellow</div>
            <div className="text-sm text-gray-500 mt-2">
              Used for: Primary CTAs, highlights, badges, active states
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Accent Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center gap-4">
            <div
              className="w-24 h-24 rounded-lg border-2 border-gray-300 shadow-lg"
              style={{ backgroundColor: colors.accent.pink }}
            />
            <div>
              <div className="font-mono text-sm font-semibold">{colors.accent.pink}</div>
              <div className="text-sm text-gray-600">Accent Pink</div>
              <div className="text-sm text-gray-500 mt-1">Problem indicators</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div
              className="w-24 h-24 rounded-lg border-2 border-gray-300 shadow-lg"
              style={{ backgroundColor: colors.accent.cyan }}
            />
            <div>
              <div className="font-mono text-sm font-semibold">{colors.accent.cyan}</div>
              <div className="text-sm text-gray-600">Accent Cyan</div>
              <div className="text-sm text-gray-500 mt-1">Solution indicators</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Background Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(colors.bg).map(([name, value]) => (
            <div key={name} className="flex flex-col gap-2">
              <div
                className="h-24 rounded-lg border-2 border-gray-300"
                style={{ backgroundColor: value }}
              />
              <div className="font-mono text-xs font-semibold">{value}</div>
              <div className="text-sm text-gray-600 capitalize">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete color palette showing primary, accent, and background colors with their hex values and use cases',
      },
    },
  },
};

// Typography Scale
export const TypographyScale = {
  render: () => (
    <div className="space-y-6">
      <div>
        <div className="text-sm text-gray-500 mb-2 font-mono">typography.h1</div>
        <h1 className={typography.h1}>
          Heading 1 - Think Ten X
        </h1>
        <div className="text-xs text-gray-400 mt-1 font-mono">{typography.h1}</div>
      </div>

      <div>
        <div className="text-sm text-gray-500 mb-2 font-mono">typography.h2</div>
        <h2 className={typography.h2}>
          Heading 2 - Section Title
        </h2>
        <div className="text-xs text-gray-400 mt-1 font-mono">{typography.h2}</div>
      </div>

      <div>
        <div className="text-sm text-gray-500 mb-2 font-mono">typography.h3</div>
        <h3 className={typography.h3}>
          Heading 3 - Card Title
        </h3>
        <div className="text-xs text-gray-400 mt-1 font-mono">{typography.h3}</div>
      </div>

      <div>
        <div className="text-sm text-gray-500 mb-2 font-mono">typography.bodyLg</div>
        <p className={typography.bodyLg}>
          Large body text - Used for important paragraphs and lead text
        </p>
        <div className="text-xs text-gray-400 mt-1 font-mono">{typography.bodyLg}</div>
      </div>

      <div>
        <div className="text-sm text-gray-500 mb-2 font-mono">typography.body</div>
        <p className={typography.body}>
          Body text - Standard paragraph text used throughout the site
        </p>
        <div className="text-xs text-gray-400 mt-1 font-mono">{typography.body}</div>
      </div>

      <div>
        <div className="text-sm text-gray-500 mb-2 font-mono">typography.small</div>
        <p className={typography.small}>
          Small text - Used for captions, footnotes, and secondary information
        </p>
        <div className="text-xs text-gray-400 mt-1 font-mono">{typography.small}</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Typography scale showing all heading and body text styles with their Tailwind classes',
      },
    },
  },
};

// Spacing Scale
export const SpacingScale = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-bold mb-4">Section Spacing</h3>
        <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
          <div className={`bg-blue-100 ${spacing.section}`}>
            <div className="bg-white rounded p-4">
              spacing.section = &quot;{spacing.section}&quot;
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Used for top-level page sections with consistent vertical and horizontal padding
        </p>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">Card Spacing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
              <div className={`bg-yellow-100 ${spacing.card}`}>
                <div className="bg-white rounded">
                  spacing.card
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-600 mt-2 font-mono">&quot;{spacing.card}&quot;</div>
            <p className="text-xs text-gray-500 mt-1">Standard card padding</p>
          </div>
          <div>
            <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
              <div className={`bg-yellow-100 ${spacing.cardLg}`}>
                <div className="bg-white rounded">
                  spacing.cardLg
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-600 mt-2 font-mono">&quot;{spacing.cardLg}&quot;</div>
            <p className="text-xs text-gray-500 mt-1">Large card padding</p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Spacing scale visualized with colored backgrounds showing padding areas',
      },
    },
  },
};

// Button Styles
export const ButtonStyles = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-bold mb-4">Button Base Styles</h3>
        <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
          {componentStyles.button.base}
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Common styles applied to all button variants: rounded corners, transitions, hover effects
        </p>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">Button Sizes</h3>
        <div className="space-y-4">
          {Object.entries(componentStyles.button.sizes).map(([size, classes]) => (
            <div key={size} className="flex items-center gap-4">
              <button
                className={`${componentStyles.button.base} ${classes} bg-gray-800 text-white`}
              >
                {size.toUpperCase()} Button
              </button>
              <div className="font-mono text-sm text-gray-600">{classes}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Button component styles showing base classes and size variations',
      },
    },
  },
};

// Card Styles
export const CardStyles = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-bold mb-4">Card Base Styles</h3>
        <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
          {componentStyles.card.base}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">Card Padding Variants</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`${componentStyles.card.base} ${componentStyles.card.padding.default} bg-white border-gray-300`}>
            <div className="font-semibold mb-2">Default Padding</div>
            <div className="font-mono text-sm text-gray-600">
              {componentStyles.card.padding.default}
            </div>
          </div>
          <div className={`${componentStyles.card.base} ${componentStyles.card.padding.large} bg-white border-gray-300`}>
            <div className="font-semibold mb-2">Large Padding</div>
            <div className="font-mono text-sm text-gray-600">
              {componentStyles.card.padding.large}
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Card component styles showing base classes and padding variations',
      },
    },
  },
};

// Badge Styles
export const BadgeStyles = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold mb-4">Badge Base Styles</h3>
        <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm">
          {componentStyles.badge.base}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">Badge Examples</h3>
        <div className="flex flex-wrap gap-3">
          <span className={componentStyles.badge.base} style={{ backgroundColor: colors.primary }}>
            Default Badge
          </span>
          <span className={`${componentStyles.badge.base} border`} style={{
            backgroundColor: colors.bg.blue1,
            borderColor: colors.primary,
            color: colors.primary
          }}>
            Outline Badge
          </span>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Badge component styles with live examples',
      },
    },
  },
};

// All Tokens Overview
export const AllTokensOverview = {
  render: () => (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-bold mb-6">THTX Design Tokens</h2>
        <p className="text-lg text-gray-600 mb-8">
          A comprehensive overview of all design tokens used in the THTX design system
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Colors Summary</h3>
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded border" style={{ backgroundColor: colors.primary }} />
            <span className="text-sm">Primary</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded border" style={{ backgroundColor: colors.accent.pink }} />
            <span className="text-sm">Pink</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded border" style={{ backgroundColor: colors.accent.cyan }} />
            <span className="text-sm">Cyan</span>
          </div>
          {Object.entries(colors.bg).map(([name, value]) => (
            <div key={name} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded border" style={{ backgroundColor: value }} />
              <span className="text-sm capitalize">{name}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Typography Summary</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center py-2 border-b">
            <span className="font-mono">h1</span>
            <span className="text-gray-600">{typography.h1}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b">
            <span className="font-mono">h2</span>
            <span className="text-gray-600">{typography.h2}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b">
            <span className="font-mono">h3</span>
            <span className="text-gray-600">{typography.h3}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b">
            <span className="font-mono">bodyLg</span>
            <span className="text-gray-600">{typography.bodyLg}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b">
            <span className="font-mono">body</span>
            <span className="text-gray-600">{typography.body}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b">
            <span className="font-mono">small</span>
            <span className="text-gray-600">{typography.small}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Component Styles Summary</h3>
        <div className="space-y-2 text-sm">
          <div className="py-2 border-b">
            <div className="font-mono mb-1">button.base</div>
            <div className="text-gray-600 text-xs">{componentStyles.button.base}</div>
          </div>
          <div className="py-2 border-b">
            <div className="font-mono mb-1">card.base</div>
            <div className="text-gray-600 text-xs">{componentStyles.card.base}</div>
          </div>
          <div className="py-2 border-b">
            <div className="font-mono mb-1">badge.base</div>
            <div className="text-gray-600 text-xs">{componentStyles.badge.base}</div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete overview of all design tokens in the THTX design system',
      },
    },
  },
};

// Color Accessibility
export const ColorAccessibility = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Color Contrast Examples</h3>
        <p className="text-gray-600 mb-6">
          Testing color combinations for WCAG compliance
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h4 className="font-semibold">Primary on White</h4>
          <div className="bg-white p-6 rounded-lg border-2" style={{ borderColor: colors.primary }}>
            <div className="text-4xl font-bold mb-2" style={{ color: colors.primary }}>
              Aa
            </div>
            <p style={{ color: colors.primary }}>
              Primary yellow text on white background
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold">Black on Primary</h4>
          <div className="p-6 rounded-lg" style={{ backgroundColor: colors.primary }}>
            <div className="text-4xl font-bold mb-2 text-black">
              Aa
            </div>
            <p className="text-black">
              Black text on primary yellow background
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold">Problem Theme</h4>
          <div className="p-6 rounded-lg border-2" style={{
            backgroundColor: colors.bg.pink,
            borderColor: colors.accent.pink
          }}>
            <div className="text-4xl font-bold mb-2" style={{ color: colors.accent.pink }}>
              Aa
            </div>
            <p style={{ color: colors.accent.pink }}>
              Pink accent on pink background
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold">Solution Theme</h4>
          <div className="p-6 rounded-lg border-2" style={{
            backgroundColor: colors.bg.cyan,
            borderColor: colors.accent.cyan
          }}>
            <div className="text-4xl font-bold mb-2" style={{ color: colors.accent.cyan }}>
              Aa
            </div>
            <p style={{ color: colors.accent.cyan }}>
              Cyan accent on cyan background
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
        ],
      },
    },
    docs: {
      description: {
        story: 'Color contrast testing for accessibility compliance (WCAG)',
      },
    },
  },
};
