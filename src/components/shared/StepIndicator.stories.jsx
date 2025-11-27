import { StepIndicator } from './StepIndicator';

export default {
  title: 'Components/StepIndicator',
  component: StepIndicator,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Displays a numbered step indicator with optional title, subtitle, and arrow. Used for multi-step processes, workflows, and journey mapping.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    number: {
      control: 'text',
      description: 'Step number to display (can be number or string)',
    },
    title: {
      control: 'text',
      description: 'Step title',
    },
    subtitle: {
      control: 'text',
      description: 'Optional subtitle/description',
    },
    showArrow: {
      control: 'boolean',
      description: 'Whether to show arrow separator (default: true)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

// Default with arrow
export const Default = {
  args: {
    number: '1',
    title: 'First Step',
    subtitle: 'Begin your journey',
  },
};

// Without arrow (last step)
export const WithoutArrow = {
  args: {
    number: '3',
    title: 'Final Step',
    subtitle: 'Complete the process',
    showArrow: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Step without arrow - typically used for the last step in a sequence',
      },
    },
  },
};

// Without subtitle
export const WithoutSubtitle = {
  args: {
    number: '1',
    title: 'Simple Step',
  },
};

// With long content
export const LongContent = {
  args: {
    number: '2',
    title: 'Implementation Phase',
    subtitle: 'Deploy your AI solutions with hands-on support from our team of experts',
  },
};

// Three-step process
export const ThreeStepProcess = {
  render: () => (
    <div className="flex flex-col md:flex-row items-center gap-8">
      <StepIndicator
        number="1"
        title="Discovery"
        subtitle="Identify opportunities"
      />
      <StepIndicator
        number="2"
        title="Implementation"
        subtitle="Build solutions"
      />
      <StepIndicator
        number="3"
        title="Scale"
        subtitle="Expand impact"
        showArrow={false}
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Complete three-step process showing typical usage',
      },
    },
  },
};

// Real-world example: THTX process
export const THTXProcess = {
  render: () => (
    <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl">
      <StepIndicator
        number="1"
        title="Strategie"
        subtitle="We bepalen samen jouw 10x doelen en high-impact opportunities"
      />
      <StepIndicator
        number="2"
        title="Implementatie"
        subtitle="Hands-on begeleiding bij het bouwen van jouw AI solutions"
      />
      <StepIndicator
        number="3"
        title="Schaal"
        subtitle="Van proof-of-concept naar organisation-wide impact"
        showArrow={false}
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Real-world example from the "How It Works" section of the landing page',
      },
    },
  },
};

// Vertical layout
export const VerticalLayout = {
  render: () => (
    <div className="flex flex-col gap-6">
      <StepIndicator
        number="1"
        title="Sign Up"
        subtitle="Create your account"
        showArrow={false}
      />
      <StepIndicator
        number="2"
        title="Configure"
        subtitle="Set up your preferences"
        showArrow={false}
      />
      <StepIndicator
        number="3"
        title="Launch"
        subtitle="Start using the platform"
        showArrow={false}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Steps arranged vertically without arrows for a different layout style',
      },
    },
  },
};

// With custom numbers
export const CustomNumbers = {
  render: () => (
    <div className="flex flex-col md:flex-row items-center gap-8">
      <StepIndicator
        number="A"
        title="Phase Alpha"
        subtitle="Initial setup"
      />
      <StepIndicator
        number="B"
        title="Phase Beta"
        subtitle="Testing period"
      />
      <StepIndicator
        number="C"
        title="Phase Complete"
        subtitle="Full deployment"
        showArrow={false}
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Using letters instead of numbers for step indicators',
      },
    },
  },
};

// Four-step process
export const FourStepProcess = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <StepIndicator
        number="1"
        title="Plan"
        subtitle="Define goals"
        showArrow={false}
      />
      <StepIndicator
        number="2"
        title="Build"
        subtitle="Create solution"
        showArrow={false}
      />
      <StepIndicator
        number="3"
        title="Test"
        subtitle="Verify results"
        showArrow={false}
      />
      <StepIndicator
        number="4"
        title="Deploy"
        subtitle="Go live"
        showArrow={false}
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Four steps arranged in a grid without arrows',
      },
    },
  },
};

// In a colored background
export const OnColoredBackground = {
  render: () => (
    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <StepIndicator
          number="1"
          title="Connect"
          subtitle="Link your data sources"
        />
        <StepIndicator
          number="2"
          title="Analyze"
          subtitle="AI processes your data"
        />
        <StepIndicator
          number="3"
          title="Optimize"
          subtitle="Implement improvements"
          showArrow={false}
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Steps displayed on a colored background',
      },
    },
  },
};

// Minimal style
export const MinimalStyle = {
  render: () => (
    <div className="flex items-center gap-4">
      <StepIndicator number="1" title="Start" showArrow={false} />
      <div className="text-gray-300 text-2xl">→</div>
      <StepIndicator number="2" title="Process" showArrow={false} />
      <div className="text-gray-300 text-2xl">→</div>
      <StepIndicator number="3" title="Finish" showArrow={false} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Minimal step indicators with custom arrow separators',
      },
    },
  },
};

// With detailed descriptions
export const DetailedDescriptions = {
  render: () => (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-start gap-12 mb-8">
        <div className="flex-1">
          <StepIndicator
            number="1"
            title="Intake & Analyse"
            subtitle="We starten met een grondige analyse"
            showArrow={false}
            className="mb-4"
          />
          <p className="text-sm text-gray-600 text-center">
            Tijdens een kickoff sessie brengen we jouw huidige situatie, doelen en uitdagingen in kaart.
          </p>
        </div>

        <div className="flex-1">
          <StepIndicator
            number="2"
            title="Roadmap Ontwikkeling"
            subtitle="Samen creëren we jouw actieplan"
            showArrow={false}
            className="mb-4"
          />
          <p className="text-sm text-gray-600 text-center">
            We prioriteren opportunities en stellen een concrete roadmap op met quick wins en long-term goals.
          </p>
        </div>

        <div className="flex-1">
          <StepIndicator
            number="3"
            title="Implementatie"
            subtitle="Hands-on uitvoering met support"
            showArrow={false}
            className="mb-4"
          />
          <p className="text-sm text-gray-600 text-center">
            Je team krijgt praktische begeleiding bij het implementeren van de afgesproken oplossingen.
          </p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Steps with additional detailed descriptions below each step',
      },
    },
  },
};

// Single step highlight
export const SingleStepHighlight = {
  render: () => (
    <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-8 max-w-md">
      <StepIndicator
        number="2"
        title="You Are Here"
        subtitle="Currently in the implementation phase"
        showArrow={false}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Highlighting the current step in a process',
      },
    },
  },
};

// Responsive preview
export const ResponsivePreview = {
  render: () => (
    <div className="flex flex-col md:flex-row items-center gap-8">
      <StepIndicator
        number="1"
        title="Mobile First"
        subtitle="Optimized for all devices"
      />
      <StepIndicator
        number="2"
        title="Responsive Design"
        subtitle="Adapts to screen size"
        showArrow={false}
      />
    </div>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
    docs: {
      description: {
        story: 'View in different viewports to see responsive behavior',
      },
    },
  },
};

// Accessibility test
export const AccessibilityTest = {
  args: {
    number: '1',
    title: 'Accessible Step',
    subtitle: 'Testing accessibility features',
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
