import { Card } from './Card';
import { Badge } from './Badge';
import { AlertCircle, CheckCircle, Lightbulb, TrendingUp, Target, Zap, Shield, Award, Users } from 'lucide-react';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A versatile card component with multiple theme variants for different use cases. Supports icons, badges, footers, and rich content. Used throughout the site for content organization.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Card title',
    },
    subtitle: {
      control: 'text',
      description: 'Optional subtitle text (displayed next to icon)',
    },
    children: {
      control: 'text',
      description: 'Card content (text or JSX)',
    },
    icon: {
      control: false,
      description: 'Optional Lucide icon component',
    },
    iconColor: {
      control: 'color',
      description: 'Override icon color (CSS color value)',
    },
    badge: {
      control: false,
      description: 'Optional badge component',
    },
    footer: {
      control: false,
      description: 'Optional footer content',
    },
    theme: {
      control: 'select',
      options: ['default', 'problem', 'solution', 'impact'],
      description: 'Visual theme variant',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

// Default theme
export const Default = {
  args: {
    title: 'Default Card',
    children: 'This is a default card with standard styling.',
    icon: CheckCircle,
  },
};

// Problem theme
export const Problem = {
  args: {
    title: 'Automation Zonder Strategie',
    subtitle: 'Problem',
    children: 'Teams implementeren tools zonder duidelijke doelen of alignment met business outcomes.',
    icon: AlertCircle,
    theme: 'problem',
  },
  parameters: {
    docs: {
      description: {
        story: 'Problem-themed card with pink accent colors, used to highlight challenges',
      },
    },
  },
};

// Solution theme
export const Solution = {
  args: {
    title: 'Strategische Implementatie',
    subtitle: 'Solution',
    children: 'Wij helpen je tools te selecteren en implementeren die perfect aansluiten bij jouw specifieke business goals.',
    icon: Lightbulb,
    theme: 'solution',
  },
  parameters: {
    docs: {
      description: {
        story: 'Solution-themed card with cyan accent colors, used to present solutions',
      },
    },
  },
};

// Impact theme
export const Impact = {
  args: {
    title: '10x Sneller',
    subtitle: 'Impact',
    children: 'Realiseer exponentiële groei door slimme automatisering en AI-implementatie.',
    icon: TrendingUp,
    theme: 'impact',
  },
  parameters: {
    docs: {
      description: {
        story: 'Impact-themed card with yellow accent colors, used to showcase results',
      },
    },
  },
};

// With badge
export const WithBadge = {
  args: {
    title: 'Premium Feature',
    children: 'This card includes a badge component in the header.',
    icon: Award,
    badge: <Badge variant="filled">NEW</Badge>,
    theme: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Card with badge component in the header for highlighting special features',
      },
    },
  },
};

// With footer
export const WithFooter = {
  args: {
    title: 'Complete Card',
    children: 'This card demonstrates the footer section for additional information.',
    icon: Target,
    footer: '→ Learn more about this feature',
    theme: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Card with footer section for CTAs or supplementary information',
      },
    },
  },
};

// With custom icon color
export const CustomIconColor = {
  args: {
    title: 'Custom Styling',
    children: 'You can override the default icon color with a custom value.',
    icon: Shield,
    iconColor: '#ff6984',
    theme: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Card with custom icon color override',
      },
    },
  },
};

// No icon
export const NoIcon = {
  args: {
    title: 'Simple Card',
    children: 'A minimal card without icon or badge.',
    theme: 'default',
  },
};

// Rich content
export const RichContent = {
  render: () => (
    <Card
      title="Advanced Features"
      icon={Zap}
      theme="solution"
      badge={<Badge variant="filled">PRO</Badge>}
    >
      <p className="mb-2">This card demonstrates rich content capabilities:</p>
      <ul className="list-disc list-inside space-y-1 ml-2">
        <li>Multiple paragraphs and lists</li>
        <li>Complex nested content</li>
        <li>Full React component support</li>
      </ul>
      <p className="mt-3 text-sm text-gray-600">
        Cards can contain any React components or HTML elements.
      </p>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Card with rich nested content including lists and multiple paragraphs',
      },
    },
  },
};

// Real-world example: AIR Problem card
export const AIRProblemCard = {
  render: () => (
    <Card
      title="Automation Zonder Strategie"
      subtitle="Problem"
      icon={AlertCircle}
      theme="problem"
    >
      <p>
        Teams implementeren tools zonder duidelijke doelen of alignment met business outcomes.
        Resultaat: inefficiënte processen en gefrustreerde medewerkers.
      </p>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world example from the AIR Problem section of the landing page',
      },
    },
  },
};

// Real-world example: Program card
export const ProgramCard = {
  render: () => (
    <Card
      title="AI Accelerator"
      icon={Zap}
      theme="impact"
      badge={<Badge variant="filled" icon={Target}>8 weken</Badge>}
      footer="€7.500 (was €15.000)"
    >
      <p className="mb-3">
        Implementeer één high-impact AI use case in jouw organisatie.
      </p>
      <ul className="space-y-2 text-sm">
        <li>✓ Wekelijkse coaching sessies</li>
        <li>✓ Hands-on implementatie support</li>
        <li>✓ Best practices & templates</li>
      </ul>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world example from the Programs section showing pricing and features',
      },
    },
  },
};

// All themes showcase
export const AllThemes = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card
        title="Default Theme"
        icon={CheckCircle}
        theme="default"
      >
        Standard yellow accent for general content and features.
      </Card>
      <Card
        title="Problem Theme"
        icon={AlertCircle}
        theme="problem"
      >
        Pink accent for highlighting challenges and pain points.
      </Card>
      <Card
        title="Solution Theme"
        icon={Lightbulb}
        theme="solution"
      >
        Cyan accent for presenting solutions and approaches.
      </Card>
      <Card
        title="Impact Theme"
        icon={TrendingUp}
        theme="impact"
      >
        Yellow background for showcasing results and benefits.
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of all available theme variants side by side',
      },
    },
  },
};

// Card grid layout
export const CardGrid = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card
        title="Fast"
        icon={Zap}
        theme="solution"
      >
        Accelerate your workflow with AI automation
      </Card>
      <Card
        title="Secure"
        icon={Shield}
        theme="problem"
      >
        Enterprise-grade security and compliance
      </Card>
      <Card
        title="Scalable"
        icon={TrendingUp}
        theme="impact"
      >
        Grow from startup to enterprise seamlessly
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Cards arranged in a responsive grid layout',
      },
    },
  },
};

// Feature comparison cards
export const FeatureComparison = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card
        title="Without THTX"
        icon={AlertCircle}
        theme="problem"
      >
        <ul className="space-y-2">
          <li>❌ Trial and error approach</li>
          <li>❌ Wasted time and resources</li>
          <li>❌ No clear strategy</li>
          <li>❌ Isolated implementations</li>
        </ul>
      </Card>
      <Card
        title="With THTX"
        icon={CheckCircle}
        theme="solution"
        badge={<Badge variant="filled">RECOMMENDED</Badge>}
      >
        <ul className="space-y-2">
          <li>✅ Strategic roadmap</li>
          <li>✅ Proven methodologies</li>
          <li>✅ Expert guidance</li>
          <li>✅ Integrated solutions</li>
        </ul>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Before/after comparison using problem and solution themes',
      },
    },
  },
};

// Complex nested content
export const ComplexContent = {
  render: () => (
    <Card
      title="AI Implementation Roadmap"
      subtitle="8-Week Program"
      icon={Target}
      theme="impact"
      badge={<Badge variant="filled" icon={Users}>Team Training</Badge>}
      footer={
        <div className="flex items-center justify-between">
          <span>Starting at €7.500</span>
          <span className="text-sm">→ Apply Now</span>
        </div>
      }
    >
      <p className="mb-4">
        Transform your business with our comprehensive AI implementation program.
      </p>

      <div className="space-y-3">
        <div>
          <h4 className="font-semibold mb-1">Phase 1: Discovery</h4>
          <p className="text-sm text-gray-600">Identify high-impact opportunities</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Phase 2: Implementation</h4>
          <p className="text-sm text-gray-600">Build and deploy solutions</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Phase 3: Scale</h4>
          <p className="text-sm text-gray-600">Expand across organization</p>
        </div>
      </div>
    </Card>
  ),
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'Card with complex nested content structure, badge, and footer',
      },
    },
  },
};

// Accessibility test
export const AccessibilityTest = {
  args: {
    title: 'Accessible Card',
    children: 'Testing accessibility with default theme',
    icon: CheckCircle,
    theme: 'default',
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
