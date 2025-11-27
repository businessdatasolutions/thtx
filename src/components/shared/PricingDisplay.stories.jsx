import { PricingDisplay } from './PricingDisplay';

export default {
  title: 'Components/PricingDisplay',
  component: PricingDisplay,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Displays pricing information with optional original price (strikethrough) and subtitle. Designed for pricing cards and promotional offers.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    price: {
      control: 'text',
      description: 'Current price to display (prominently styled)',
    },
    originalPrice: {
      control: 'text',
      description: 'Optional original price (shown with strikethrough)',
    },
    subtitle: {
      control: 'text',
      description: 'Optional subtitle/description',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

// Simple price
export const SimplePrice = {
  args: {
    price: '€7.500',
  },
};

// Price with original (discount)
export const WithDiscount = {
  args: {
    price: '€7.500',
    originalPrice: '€15.000',
  },
  parameters: {
    docs: {
      description: {
        story: 'Pricing display showing a discount with strikethrough original price',
      },
    },
  },
};

// Price with subtitle
export const WithSubtitle = {
  args: {
    price: '€99',
    subtitle: 'per maand',
  },
};

// Complete pricing
export const Complete = {
  args: {
    price: '€7.500',
    originalPrice: '€15.000',
    subtitle: 'eenmalig',
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete pricing display with all elements: current price, original price, and subtitle',
      },
    },
  },
};

// Monthly pricing
export const MonthlyPricing = {
  args: {
    price: '€499',
    subtitle: '/maand',
  },
};

// Annual pricing with discount
export const AnnualPricing = {
  args: {
    price: '€4.999',
    originalPrice: '€5.988',
    subtitle: '/jaar (save 20%)',
  },
  parameters: {
    docs: {
      description: {
        story: 'Annual pricing showing savings compared to monthly rate',
      },
    },
  },
};

// Free tier
export const FreeTier = {
  args: {
    price: 'Gratis',
    subtitle: 'altijd',
  },
};

// Real-world example: AI Accelerator
export const AIAccelerator = {
  args: {
    price: '€7.500',
    originalPrice: '€15.000',
    subtitle: 'early-bird',
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-world example from the AI Accelerator program pricing',
      },
    },
  },
};

// Real-world example: Business Transformation
export const BusinessTransformation = {
  args: {
    price: '€25.000',
    originalPrice: '€50.000',
    subtitle: 'early-bird',
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-world example from the Business Transformation program pricing',
      },
    },
  },
};

// High-value pricing
export const EnterprisePrice = {
  args: {
    price: '€99.000',
    subtitle: 'custom package',
  },
};

// Contact for pricing
export const ContactPricing = {
  args: {
    price: 'Op aanvraag',
    subtitle: 'maatwerk',
  },
  parameters: {
    docs: {
      description: {
        story: 'For services that require custom quotes',
      },
    },
  },
};

// In a pricing card
export const InPricingCard = {
  render: () => (
    <div className="bg-white rounded-xl border-2 border-yellow-400 p-8 max-w-md">
      <div className="text-center mb-6">
        <div className="inline-block px-4 py-2 bg-yellow-400 rounded-full text-sm font-bold mb-4">
          AI ACCELERATOR
        </div>
        <h3 className="text-2xl font-bold mb-4">Fast Track to AI</h3>
      </div>

      <PricingDisplay
        price="€7.500"
        originalPrice="€15.000"
        subtitle="early-bird"
        className="justify-center mb-6"
      />

      <ul className="space-y-2 text-sm mb-6">
        <li>✓ 8 weken intensief programma</li>
        <li>✓ Wekelijkse coaching sessies</li>
        <li>✓ Hands-on implementatie support</li>
      </ul>

      <button className="w-full bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:scale-105 transition">
        Start Nu
      </button>
    </div>
  ),
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'Pricing display integrated into a complete pricing card',
      },
    },
  },
};

// Multiple pricing tiers
export const PricingTiers = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white rounded-xl border-2 border-gray-200 p-6 text-center">
        <h3 className="text-xl font-bold mb-4">Starter</h3>
        <PricingDisplay
          price="€99"
          subtitle="/maand"
          className="justify-center mb-4"
        />
        <p className="text-sm text-gray-600">Perfect om te beginnen</p>
      </div>

      <div className="bg-white rounded-xl border-2 border-yellow-400 p-6 text-center relative">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 px-3 py-1 rounded-full text-xs font-bold">
          POPULAIR
        </div>
        <h3 className="text-xl font-bold mb-4">Professional</h3>
        <PricingDisplay
          price="€299"
          originalPrice="€399"
          subtitle="/maand"
          className="justify-center mb-4"
        />
        <p className="text-sm text-gray-600">Voor groeiende teams</p>
      </div>

      <div className="bg-white rounded-xl border-2 border-gray-200 p-6 text-center">
        <h3 className="text-xl font-bold mb-4">Enterprise</h3>
        <PricingDisplay
          price="Custom"
          subtitle="op maat"
          className="justify-center mb-4"
        />
        <p className="text-sm text-gray-600">Volledig maatwerk</p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Three pricing tiers showcasing different use cases',
      },
    },
  },
};

// Different currencies
export const DifferentCurrencies = {
  render: () => (
    <div className="space-y-4">
      <PricingDisplay price="€4.999" subtitle="EUR" />
      <PricingDisplay price="$5.499" subtitle="USD" />
      <PricingDisplay price="£4.299" subtitle="GBP" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pricing display with different currency symbols',
      },
    },
  },
};

// Large discount
export const LargeDiscount = {
  args: {
    price: '€499',
    originalPrice: '€1.999',
    subtitle: '75% korting',
  },
  parameters: {
    docs: {
      description: {
        story: 'Highlighting a large discount with percentage in subtitle',
      },
    },
  },
};

// Time-limited offer
export const TimeLimitedOffer = {
  render: () => (
    <div className="bg-gradient-to-r from-pink-50 to-yellow-50 p-6 rounded-xl max-w-md text-center">
      <div className="text-sm font-bold text-red-600 mb-2">
        ⏰ BEPERKTE TIJD
      </div>
      <PricingDisplay
        price="€7.500"
        originalPrice="€15.000"
        subtitle="nog 5 plekken"
        className="justify-center mb-3"
      />
      <p className="text-sm text-gray-600">
        Early-bird aanbieding eindigt 31 december
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pricing display in a time-limited promotional context',
      },
    },
  },
};

// Comparison layout
export const PricingComparison = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="text-center">
        <div className="text-sm text-gray-600 mb-2">Was</div>
        <div className="text-3xl text-gray-400 line-through">€15.000</div>
      </div>
      <div className="text-4xl font-bold text-gray-400">→</div>
      <div className="text-center">
        <div className="text-sm text-gray-600 mb-2">Nu</div>
        <div className="text-5xl font-bold" style={{ color: '#d4db3e' }}>€7.500</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Alternative comparison layout emphasizing the discount',
      },
    },
  },
};

// Accessibility test
export const AccessibilityTest = {
  args: {
    price: '€7.500',
    originalPrice: '€15.000',
    subtitle: 'early-bird',
  },
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
  },
};
