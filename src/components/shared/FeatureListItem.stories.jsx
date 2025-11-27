import { FeatureListItem } from './FeatureListItem';
import { CheckCircle, XCircle, AlertTriangle, Info, Star, Zap, Target, Award, TrendingUp } from 'lucide-react';

export default {
  title: 'Components/FeatureListItem',
  component: FeatureListItem,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A list item component with an icon for displaying features, benefits, or checklist items. Designed to work in unordered lists with consistent spacing and alignment.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'List item content (text or JSX)',
    },
    icon: {
      control: false,
      description: 'Lucide icon component (defaults to CheckCircle)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

// Default with CheckCircle
export const Default = {
  render: () => (
    <ul>
      <FeatureListItem>
        Default feature item with CheckCircle icon
      </FeatureListItem>
    </ul>
  ),
};

// With custom icon - Zap
export const WithZapIcon = {
  render: () => (
    <ul>
      <FeatureListItem icon={Zap}>
        Fast processing and quick results
      </FeatureListItem>
    </ul>
  ),
};

// With custom icon - Star
export const WithStarIcon = {
  render: () => (
    <ul>
      <FeatureListItem icon={Star}>
        Premium feature included
      </FeatureListItem>
    </ul>
  ),
};

// Negative indicator with XCircle
export const NegativeItem = {
  render: () => (
    <ul>
      <FeatureListItem icon={XCircle}>
        This feature is not included
      </FeatureListItem>
    </ul>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Using XCircle icon for negative or excluded items',
      },
    },
  },
};

// Warning indicator
export const WarningItem = {
  render: () => (
    <ul>
      <FeatureListItem icon={AlertTriangle}>
        Limited availability - contact for details
      </FeatureListItem>
    </ul>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Using AlertTriangle icon for warnings or caveats',
      },
    },
  },
};

// Info indicator
export const InfoItem = {
  render: () => (
    <ul>
      <FeatureListItem icon={Info}>
        Additional information or context
      </FeatureListItem>
    </ul>
  ),
};

// Feature list
export const FeatureList = {
  render: () => (
    <ul className="space-y-3">
      <FeatureListItem icon={CheckCircle}>
        24/7 customer support
      </FeatureListItem>
      <FeatureListItem icon={CheckCircle}>
        Unlimited API requests
      </FeatureListItem>
      <FeatureListItem icon={CheckCircle}>
        Advanced analytics dashboard
      </FeatureListItem>
      <FeatureListItem icon={CheckCircle}>
        Priority feature requests
      </FeatureListItem>
    </ul>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Standard feature list with CheckCircle icons',
      },
    },
  },
};

// Mixed icons list
export const MixedIconsList = {
  render: () => (
    <ul className="space-y-3">
      <FeatureListItem icon={Zap}>
        Lightning-fast performance
      </FeatureListItem>
      <FeatureListItem icon={Target}>
        Precision targeting
      </FeatureListItem>
      <FeatureListItem icon={Award}>
        Industry-leading quality
      </FeatureListItem>
      <FeatureListItem icon={TrendingUp}>
        Continuous improvement
      </FeatureListItem>
    </ul>
  ),
  parameters: {
    docs: {
      description: {
        story: 'List with different icons for varied meanings',
      },
    },
  },
};

// Long content wrapping
export const LongContent = {
  render: () => (
    <ul className="space-y-3 max-w-2xl">
      <FeatureListItem icon={CheckCircle}>
        This is a longer feature description that demonstrates how the component handles text wrapping. The icon stays aligned at the top while the text flows naturally across multiple lines.
      </FeatureListItem>
      <FeatureListItem icon={Zap}>
        Another multi-line item showing consistent alignment and spacing even when content spans multiple lines. The flex layout ensures proper alignment.
      </FeatureListItem>
    </ul>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Feature items with long content showing text wrapping behavior',
      },
    },
  },
};

// Real-world example: Program features
export const ProgramFeatures = {
  render: () => (
    <div className="max-w-lg">
      <h3 className="text-xl font-bold mb-4">AI Accelerator Programma</h3>
      <ul className="space-y-3">
        <FeatureListItem>
          Wekelijkse coaching sessies met AI experts
        </FeatureListItem>
        <FeatureListItem>
          Hands-on implementatie support
        </FeatureListItem>
        <FeatureListItem>
          Best practices & templates
        </FeatureListItem>
        <FeatureListItem>
          Toegang tot THTX community
        </FeatureListItem>
        <FeatureListItem>
          Certificaat na afronding
        </FeatureListItem>
      </ul>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world example from the Programs section listing program features',
      },
    },
  },
};

// Comparison list
export const ComparisonList = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
      <div>
        <h3 className="text-lg font-bold mb-4 text-green-700">Included ✓</h3>
        <ul className="space-y-2">
          <FeatureListItem icon={CheckCircle}>
            Strategic roadmap
          </FeatureListItem>
          <FeatureListItem icon={CheckCircle}>
            Expert guidance
          </FeatureListItem>
          <FeatureListItem icon={CheckCircle}>
            Implementation support
          </FeatureListItem>
          <FeatureListItem icon={CheckCircle}>
            Ongoing optimization
          </FeatureListItem>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-4 text-red-700">Not Included ✗</h3>
        <ul className="space-y-2">
          <FeatureListItem icon={XCircle}>
            Custom software development
          </FeatureListItem>
          <FeatureListItem icon={XCircle}>
            Third-party tool licenses
          </FeatureListItem>
          <FeatureListItem icon={XCircle}>
            Ongoing maintenance
          </FeatureListItem>
          <FeatureListItem icon={XCircle}>
            24/7 emergency support
          </FeatureListItem>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Using feature list items for comparison between included and excluded features',
      },
    },
  },
};

// Nested in a card
export const InCard = {
  render: () => (
    <div className="bg-white rounded-xl border-2 border-yellow-400 p-6 max-w-md">
      <h3 className="text-xl font-bold mb-4">Premium Benefits</h3>
      <ul className="space-y-3">
        <FeatureListItem icon={Star}>
          Priority access to new features
        </FeatureListItem>
        <FeatureListItem icon={Zap}>
          Faster processing times
        </FeatureListItem>
        <FeatureListItem icon={Award}>
          Dedicated account manager
        </FeatureListItem>
        <FeatureListItem icon={TrendingUp}>
          Advanced analytics
        </FeatureListItem>
      </ul>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Feature list nested inside a card component',
      },
    },
  },
};

// Dense spacing
export const DenseSpacing = {
  render: () => (
    <ul className="space-y-1">
      <FeatureListItem>Compact item 1</FeatureListItem>
      <FeatureListItem>Compact item 2</FeatureListItem>
      <FeatureListItem>Compact item 3</FeatureListItem>
      <FeatureListItem>Compact item 4</FeatureListItem>
    </ul>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Feature list with tighter spacing using space-y-1',
      },
    },
  },
};

// Generous spacing
export const GenerousSpacing = {
  render: () => (
    <ul className="space-y-6">
      <FeatureListItem icon={Target}>
        Clear goal definition
      </FeatureListItem>
      <FeatureListItem icon={Zap}>
        Rapid implementation
      </FeatureListItem>
      <FeatureListItem icon={TrendingUp}>
        Measurable results
      </FeatureListItem>
    </ul>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Feature list with more generous spacing using space-y-6',
      },
    },
  },
};

// With rich content
export const RichContent = {
  render: () => (
    <ul className="space-y-4 max-w-2xl">
      <FeatureListItem icon={Zap}>
        <div>
          <strong className="font-semibold">Fast Track Program:</strong> Complete your AI transformation in just 8 weeks with intensive support
        </div>
      </FeatureListItem>
      <FeatureListItem icon={Target}>
        <div>
          <strong className="font-semibold">Strategic Approach:</strong> We align every implementation with your business objectives
        </div>
      </FeatureListItem>
      <FeatureListItem icon={Award}>
        <div>
          <strong className="font-semibold">Proven Results:</strong> Join 50+ companies that achieved 10x growth
        </div>
      </FeatureListItem>
    </ul>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Feature items with rich content including bold labels',
      },
    },
  },
};

// Accessibility test
export const AccessibilityTest = {
  render: () => (
    <ul className="space-y-3">
      <FeatureListItem icon={CheckCircle}>
        Accessible feature item with proper semantic HTML
      </FeatureListItem>
      <FeatureListItem icon={Star}>
        Icons provide visual enhancement while text remains readable
      </FeatureListItem>
    </ul>
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
  },
};
