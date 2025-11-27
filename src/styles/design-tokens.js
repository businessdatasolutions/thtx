// THTX Design System - Design Tokens
// Centralized design values for consistent styling across components

// Color palette
export const colors = {
  primary: '#d4db3e',
  accent: {
    pink: '#ff6984',
    cyan: '#00d1ff',
  },
  bg: {
    blue1: '#def0fa',
    blue2: '#dcebf3',
    yellow: '#fafbf0',
    pink: '#fff5f7',
    cyan: '#f0fbff',
  },
};

// Spacing scale
export const spacing = {
  section: 'py-16 px-4',
  card: 'p-6',
  cardLg: 'p-8',
};

// Typography scale
export const typography = {
  h1: 'text-5xl md:text-7xl font-bold',
  h2: 'text-4xl font-bold',
  h3: 'text-xl font-bold',
  body: 'text-base',
  bodyLg: 'text-lg',
  small: 'text-sm',
};

// Component styles using Tailwind classes
export const componentStyles = {
  button: {
    base: 'rounded-lg font-semibold transition transform hover:scale-105',
    sizes: {
      sm: 'px-4 py-2 text-sm',
      md: 'px-8 py-4 text-lg',
      lg: 'px-10 py-5 text-xl',
    },
  },
  card: {
    base: 'rounded-xl border-2',
    padding: {
      default: 'p-6',
      large: 'p-8',
    },
  },
  badge: {
    base: 'inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold',
  },
};
