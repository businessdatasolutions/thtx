import { SectionHeader } from './SectionHeader';

export default {
  title: 'Components/SectionHeader',
  component: SectionHeader,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A consistent header component for page sections with optional badge, title, and subtitle. Provides visual hierarchy and consistency across sections.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    badge: {
      control: 'text',
      description: 'Optional badge text displayed above title',
    },
    title: {
      control: 'text',
      description: 'Section title (h2)',
    },
    subtitle: {
      control: 'text',
      description: 'Optional subtitle/description text',
    },
    maxWidth: {
      control: 'select',
      options: ['max-w-2xl', 'max-w-3xl', 'max-w-4xl', 'max-w-5xl', 'max-w-full'],
      description: 'Maximum width for subtitle (Tailwind class)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

// Complete header with all elements
export const Complete = {
  args: {
    badge: 'Nieuw',
    title: 'Transformeer Jouw Business',
    subtitle: 'Ontdek hoe AI en automatisering jouw organisatie naar het volgende niveau kunnen tillen met onze bewezen aanpak.',
  },
};

// Title only
export const TitleOnly = {
  args: {
    title: 'Simple Section Title',
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal header with just a title',
      },
    },
  },
};

// Title with subtitle
export const TitleWithSubtitle = {
  args: {
    title: 'How It Works',
    subtitle: 'Our three-step process to transform your business with AI and automation',
  },
};

// Badge with title
export const BadgeWithTitle = {
  args: {
    badge: 'Featured',
    title: 'Our Approach',
  },
};

// Different max widths
export const NarrowSubtitle = {
  args: {
    title: 'Narrow Subtitle Example',
    subtitle: 'This subtitle uses max-w-2xl for a more compact width, ideal for shorter descriptions.',
    maxWidth: 'max-w-2xl',
  },
  parameters: {
    docs: {
      description: {
        story: 'Subtitle with max-w-2xl constraint',
      },
    },
  },
};

export const WideSubtitle = {
  args: {
    title: 'Wide Subtitle Example',
    subtitle: 'This subtitle uses max-w-5xl for a wider layout, allowing longer descriptions to span across more space while maintaining readability.',
    maxWidth: 'max-w-5xl',
  },
  parameters: {
    docs: {
      description: {
        story: 'Subtitle with max-w-5xl constraint',
      },
    },
  },
};

// Real-world example: Problem section
export const ProblemSection = {
  args: {
    badge: 'Het A.I.R. Probleem',
    title: 'Herkenbaar?',
    subtitle: 'Veel organisaties worstelen met deze uitdagingen bij het implementeren van AI en automatisering.',
    maxWidth: 'max-w-4xl',
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-world example from the Problem section of the landing page',
      },
    },
  },
};

// Real-world example: Programs section
export const ProgramsSection = {
  args: {
    badge: 'Programma\'s',
    title: 'Kies Jouw Track',
    subtitle: 'Of je nu wilt experimenteren of een volledige transformatie zoekt - we hebben het perfecte programma voor jou.',
    maxWidth: 'max-w-4xl',
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-world example from the Programs section',
      },
    },
  },
};

// Real-world example: How it works section
export const HowItWorksSection = {
  args: {
    badge: 'Zo werkt het',
    title: 'Van Strategie tot Succes',
    subtitle: 'Een bewezen aanpak in drie simpele stappen',
    maxWidth: 'max-w-3xl',
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-world example from the How It Works section',
      },
    },
  },
};

// Long content example
export const LongContent = {
  args: {
    badge: 'Comprehensive Guide',
    title: 'Everything You Need to Know About Digital Transformation',
    subtitle: 'This is a longer subtitle demonstrating how the component handles more extensive descriptions. It maintains readability through proper spacing, typography, and width constraints that ensure the text remains comfortable to read across various screen sizes.',
    maxWidth: 'max-w-4xl',
  },
  parameters: {
    docs: {
      description: {
        story: 'Header with longer content to test text wrapping and readability',
      },
    },
  },
};

// Different background contexts
export const OnColoredBackground = {
  render: (args) => (
    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl">
      <SectionHeader {...args} />
    </div>
  ),
  args: {
    badge: 'Special Offer',
    title: 'Header on Colored Background',
    subtitle: 'Testing how the header looks on different background colors',
  },
  parameters: {
    docs: {
      description: {
        story: 'Header displayed on a colored background',
      },
    },
  },
};

// Multiple headers
export const MultipleHeaders = {
  render: () => (
    <div className="space-y-16">
      <SectionHeader
        badge="Step 1"
        title="Discovery Phase"
        subtitle="We start by understanding your business goals and challenges"
      />
      <SectionHeader
        badge="Step 2"
        title="Implementation"
        subtitle="Our team works alongside yours to build and deploy solutions"
      />
      <SectionHeader
        badge="Step 3"
        title="Scale & Optimize"
        subtitle="Expand successful implementations across your organization"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple section headers demonstrating consistent spacing in a flow',
      },
    },
  },
};

// Responsive preview
export const ResponsivePreview = {
  args: {
    badge: 'Responsive Design',
    title: 'Works on All Screen Sizes',
    subtitle: 'This header is designed to look great on mobile, tablet, and desktop devices with consistent spacing and typography.',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
    docs: {
      description: {
        story: 'View this story in different viewport sizes to see responsive behavior',
      },
    },
  },
};

// Accessibility test
export const AccessibilityTest = {
  args: {
    badge: 'Accessibility',
    title: 'Accessible Section Header',
    subtitle: 'This component uses semantic HTML with proper heading hierarchy',
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
