// Only use Tailwind/PostCSS for Storybook builds
// Main app uses Tailwind via CDN
export default {
  plugins: process.env.STORYBOOK ? {
    tailwindcss: {},
    autoprefixer: {},
  } : {},
}
