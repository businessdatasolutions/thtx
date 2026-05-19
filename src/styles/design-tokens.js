// BDS Design System - Design Tokens
// Centralized design values for consistent styling across components.
//
// 2026-05-19: Palette refactor naar "Strict minimal" (Optie C).
// Geel + warm zwart + warme grijzen. Pink en cyan zijn verwijderd uit
// het publieke design — de oude key-namen (accent.pink, accent.cyan,
// bg.pink, bg.cyan, bg.blue1, bg.blue2) blijven bestaan als aliassen
// voor backward compat, maar verwijzen nu naar monochrome equivalenten.
// Kleine technische schuld: in een volgende refactor hernoemen we deze
// keys naar semantische namen (supporting, muted, cream).

// Color palette
export const colors = {
  primary: '#d4db3e',           // chartreuse-geel — signaal-accent
  supporting: '#1a1a1a',        // warm zwart — tweede merk-kleur
  cream: '#f5f0e6',             // warme neutrale tint

  // Legacy aliases — verwijzen naar het nieuwe palet
  accent: {
    pink: '#1a1a1a',            // was #ff6984 — nu warm zwart
    cyan: '#6b7280',            // was #00d1ff — nu muted gray
  },
  bg: {
    blue1: '#f5f0e6',           // was #def0fa — nu cream
    blue2: '#f0ebe0',           // was #dcebf3 — nu donkere cream
    yellow: '#fafbf0',           // ongewijzigd
    pink: '#f9f8f4',            // was #fff5f7 — nu off-white
    cyan: '#f9f9f7',            // was #f0fbff — nu off-white
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
