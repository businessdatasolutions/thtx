import { Button } from './Button';
import { ArrowRight, Calendar, CheckCircle, Download, ExternalLink, Mail, PlayCircle, Plus, Send, Sparkles } from 'lucide-react';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile button component supporting multiple variants, sizes, and icon positions. Can render as a button or link. Used extensively for CTAs and navigation.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Button text or content',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
    },
    icon: {
      control: false,
      description: 'Optional Lucide icon component',
    },
    iconPosition: {
      control: 'radio',
      options: ['left', 'right'],
      description: 'Icon placement relative to text',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether button takes full width of container',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether button is disabled',
    },
    href: {
      control: 'text',
      description: 'Optional link URL (renders as <a> if provided)',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler function',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

// Primary variant - default
export const Primary = {
  args: {
    children: 'Get Started',
    variant: 'primary',
    size: 'md',
  },
};

// Secondary variant
export const Secondary = {
  args: {
    children: 'Learn More',
    variant: 'secondary',
    size: 'md',
  },
};

// Ghost variant
export const Ghost = {
  args: {
    children: 'Cancel',
    variant: 'ghost',
    size: 'md',
  },
};

// Small size
export const Small = {
  args: {
    children: 'Small Button',
    variant: 'primary',
    size: 'sm',
  },
};

// Medium size (default)
export const Medium = {
  args: {
    children: 'Medium Button',
    variant: 'primary',
    size: 'md',
  },
};

// Large size
export const Large = {
  args: {
    children: 'Large Button',
    variant: 'primary',
    size: 'lg',
  },
};

// With icon - right position (default)
export const WithIconRight = {
  args: {
    children: 'Continue',
    variant: 'primary',
    size: 'md',
    icon: ArrowRight,
    iconPosition: 'right',
  },
};

// With icon - left position
export const WithIconLeft = {
  args: {
    children: 'New Item',
    variant: 'primary',
    size: 'md',
    icon: Plus,
    iconPosition: 'left',
  },
};

// With different icons
export const WithCalendarIcon = {
  args: {
    children: 'Schedule Meeting',
    variant: 'secondary',
    size: 'md',
    icon: Calendar,
    iconPosition: 'left',
  },
};

export const WithDownloadIcon = {
  args: {
    children: 'Download Report',
    variant: 'ghost',
    size: 'md',
    icon: Download,
    iconPosition: 'right',
  },
};

// Full width button
export const FullWidth = {
  args: {
    children: 'Full Width Button',
    variant: 'primary',
    size: 'md',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

// Disabled state
export const Disabled = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    size: 'md',
    disabled: true,
  },
};

// As a link
export const AsLink = {
  args: {
    children: 'Visit Website',
    variant: 'primary',
    size: 'md',
    href: 'https://thtx.nl',
    icon: ExternalLink,
    iconPosition: 'right',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button can render as an anchor tag when href prop is provided',
      },
    },
  },
};

// Real-world example: Hero CTA
export const HeroCTA = {
  args: {
    children: 'Start Jouw Transformatie',
    variant: 'primary',
    size: 'lg',
    icon: ArrowRight,
    iconPosition: 'right',
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary CTA button from the hero section',
      },
    },
  },
};

// Real-world example: Secondary action
export const SecondaryAction = {
  args: {
    children: 'Bekijk Voorbeeld',
    variant: 'secondary',
    size: 'lg',
    icon: PlayCircle,
    iconPosition: 'left',
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary action button for demo/preview content',
      },
    },
  },
};

// Real-world example: Contact button
export const ContactButton = {
  args: {
    children: 'Plan een Gesprek',
    variant: 'primary',
    size: 'md',
    icon: Calendar,
    iconPosition: 'right',
  },
  parameters: {
    docs: {
      description: {
        story: 'Contact/scheduling button used in CTA sections',
      },
    },
  },
};

// All variants showcase
export const AllVariants = {
  render: () => (
    <div className="flex flex-col gap-6 p-4">
      <div>
        <h3 className="text-sm font-semibold mb-3 text-gray-600">Primary</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium</Button>
          <Button variant="primary" size="lg">Large</Button>
          <Button variant="primary" size="md" icon={ArrowRight}>With Icon</Button>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3 text-gray-600">Secondary</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="secondary" size="sm">Small</Button>
          <Button variant="secondary" size="md">Medium</Button>
          <Button variant="secondary" size="lg">Large</Button>
          <Button variant="secondary" size="md" icon={ExternalLink}>With Icon</Button>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3 text-gray-600">Ghost</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="ghost" size="sm">Small</Button>
          <Button variant="ghost" size="md">Medium</Button>
          <Button variant="ghost" size="lg">Large</Button>
          <Button variant="ghost" size="md" icon={Download}>With Icon</Button>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3 text-gray-600">States</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" size="md">Default</Button>
          <Button variant="primary" size="md" disabled>Disabled</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all button variants, sizes, and states',
      },
    },
  },
};

// Icon positions comparison
export const IconPositions = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Button variant="primary" size="md" icon={Sparkles} iconPosition="left">
        Icon Left
      </Button>
      <Button variant="primary" size="md" icon={Sparkles} iconPosition="right">
        Icon Right
      </Button>
      <Button variant="primary" size="md">
        No Icon
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison of icon placement options',
      },
    },
  },
};

// Button group example
export const ButtonGroup = {
  render: () => (
    <div className="flex gap-3">
      <Button variant="primary" size="md" icon={CheckCircle}>
        Confirm
      </Button>
      <Button variant="ghost" size="md">
        Cancel
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of buttons used together in a group for primary/secondary actions',
      },
    },
  },
};

// CTA section example
export const CTASection = {
  render: () => (
    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl max-w-2xl">
      <h2 className="text-3xl font-bold mb-4">Klaar voor Transformatie?</h2>
      <p className="text-lg mb-6 text-gray-700">
        Start vandaag nog met jouw reis naar 10x groei
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button variant="primary" size="lg" icon={ArrowRight}>
          Plan een Gesprek
        </Button>
        <Button variant="secondary" size="lg" icon={Mail} iconPosition="left">
          Stuur een Bericht
        </Button>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Real-world usage in a CTA section with primary and secondary actions',
      },
    },
  },
};

// Responsive full-width stack
export const ResponsiveStack = {
  render: () => (
    <div className="w-full max-w-md space-y-3">
      <Button variant="primary" size="md" fullWidth icon={Send}>
        Send Message
      </Button>
      <Button variant="secondary" size="md" fullWidth icon={Calendar}>
        Schedule Call
      </Button>
      <Button variant="ghost" size="md" fullWidth>
        Maybe Later
      </Button>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Stacked full-width buttons, common in mobile layouts and forms',
      },
    },
  },
};

// Accessibility test
export const AccessibilityTest = {
  args: {
    children: 'Accessible Button',
    variant: 'primary',
    size: 'md',
    icon: CheckCircle,
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
