import './tailwind.css';
import '../src/index.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
      config: {
        rules: [
          {
            // Disable color-contrast check for demo purposes
            // Re-enable in production
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'blue1',
          value: '#def0fa',
        },
        {
          name: 'blue2',
          value: '#dcebf3',
        },
        {
          name: 'yellow',
          value: '#fafbf0',
        },
        {
          name: 'pink',
          value: '#fff5f7',
        },
        {
          name: 'cyan',
          value: '#f0fbff',
        },
      ],
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1280px',
            height: '720px',
          },
        },
        wide: {
          name: 'Wide Desktop',
          styles: {
            width: '1920px',
            height: '1080px',
          },
        },
      },
    },
  },
};

export default preview;