import { Badge } from './Badge';
import { Sparkles, Zap, Target, Award, TrendingUp, CheckCircle } from 'lucide-react';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile badge/pill component for displaying status, labels, or tags. Used throughout the site for highlighting key concepts and features.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Badge content (text or JSX)',
    },
    variant: {
      control: 'select',
      options: ['filled', 'outline'],
      description: 'Visual style variant',
    },
    icon: {
      control: false,
      description: 'Optional Lucide icon component',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for customization',
    },
  },
};

// Default filled badge
export const Filled = {
  args: {
    children: 'Featured',
    variant: 'filled',
  },
};

// Outline variant
export const Outline = {
  args: {
    children: 'New',
    variant: 'outline',
  },
};

// With icon - Sparkles
export const WithIconSparkles = {
  args: {
    children: 'Innovation',
    variant: 'filled',
    icon: Sparkles,
  },
  parameters: {
    docs: {
      description: {
        story: 'Badge with Sparkles icon - commonly used for innovation and new features',
      },
    },
  },
};

// With icon - Zap
export const WithIconZap = {
  args: {
    children: 'Fast Track',
    variant: 'filled',
    icon: Zap,
  },
  parameters: {
    docs: {
      description: {
        story: 'Badge with Zap icon - used for speed and efficiency messaging',
      },
    },
  },
};

// With icon - Target
export const WithIconTarget = {
  args: {
    children: 'Goal-Driven',
    variant: 'outline',
    icon: Target,
  },
  parameters: {
    docs: {
      description: {
        story: 'Badge with Target icon in outline style - used for goal-oriented content',
      },
    },
  },
};

// With icon - Award
export const WithIconAward = {
  args: {
    children: 'Premium',
    variant: 'filled',
    icon: Award,
  },
};

// Real-world example: Problem section badge
export const ProblemBadge = {
  args: {
    children: 'Het A.I.R. Probleem',
    variant: 'outline',
    icon: Sparkles,
  },
  parameters: {
    docs: {
      description: {
        story: 'Badge used in the Problem section of the landing page',
      },
    },
  },
};

// Real-world example: How It Works badge
export const HowItWorksBadge = {
  args: {
    children: 'Zo werkt het',
    variant: 'filled',
    icon: Zap,
  },
  parameters: {
    docs: {
      description: {
        story: 'Badge used in the How It Works section',
      },
    },
  },
};

// Real-world example: Programs badge
export const ProgramsBadge = {
  args: {
    children: 'Programma\'s',
    variant: 'outline',
    icon: Target,
  },
  parameters: {
    docs: {
      description: {
        story: 'Badge used in the Programs section',
      },
    },
  },
};

// Multiple badges in a group
export const BadgeGroup = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="filled" icon={Sparkles}>Innovation</Badge>
      <Badge variant="filled" icon={Zap}>Fast Track</Badge>
      <Badge variant="filled" icon={Target}>Goal-Driven</Badge>
      <Badge variant="outline" icon={Award}>Premium</Badge>
      <Badge variant="outline" icon={TrendingUp}>Growth</Badge>
      <Badge variant="outline" icon={CheckCircle}>Verified</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of multiple badges grouped together, demonstrating consistent spacing and visual hierarchy',
      },
    },
  },
};

// All variants showcase
export const AllVariants = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="text-sm font-semibold mb-2 text-gray-600">Filled</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="filled">Default</Badge>
          <Badge variant="filled" icon={Sparkles}>With Icon</Badge>
          <Badge variant="filled" icon={Zap}>Another Icon</Badge>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2 text-gray-600">Outline</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">Default</Badge>
          <Badge variant="outline" icon={Target}>With Icon</Badge>
          <Badge variant="outline" icon={Award}>Another Icon</Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all badge variants and their combinations',
      },
    },
  },
};

// Accessibility test
export const AccessibilityTest = {
  args: {
    children: 'Accessible Badge',
    variant: 'filled',
    icon: CheckCircle,
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true, // Enable for this specific story
          },
        ],
      },
    },
  },
};
