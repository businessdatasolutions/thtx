// THTX Design System - Utility Helpers
// Helper functions for applying design tokens as inline styles (CDN Tailwind compatibility)

import { colors } from './design-tokens';

// Helper to apply color as inline style (for CDN Tailwind compatibility)
export const bgColor = (color) => ({ backgroundColor: color });
export const borderColor = (color) => ({ borderColor: color });
export const textColor = (color) => ({ color });

// Pre-built style objects for common patterns
export const primaryBg = bgColor(colors.primary);
export const primaryBorder = borderColor(colors.primary);
export const primaryText = textColor(colors.primary);

// Accent color helpers
export const accentPinkBg = bgColor(colors.accent.pink);
export const accentPinkBorder = borderColor(colors.accent.pink);
export const accentPinkText = textColor(colors.accent.pink);

export const accentCyanBg = bgColor(colors.accent.cyan);
export const accentCyanBorder = borderColor(colors.accent.cyan);
export const accentCyanText = textColor(colors.accent.cyan);

// Background color helpers
export const bgBlue1 = bgColor(colors.bg.blue1);
export const bgBlue2 = bgColor(colors.bg.blue2);
export const bgYellow = bgColor(colors.bg.yellow);
export const bgPink = bgColor(colors.bg.pink);
export const bgCyan = bgColor(colors.bg.cyan);
