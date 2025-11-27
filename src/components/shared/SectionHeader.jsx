import { colors } from '../../styles/design-tokens';

/**
 * SectionHeader Component
 *
 * A consistent header component for page sections with optional badge, title, and subtitle
 *
 * @param {Object} props
 * @param {string} props.badge - Optional badge text to display above title
 * @param {string} props.title - Section title
 * @param {string} props.subtitle - Optional subtitle/description
 * @param {string} props.maxWidth - Tailwind max-width class for subtitle
 * @param {string} props.className - Additional CSS classes
 */
export function SectionHeader({
  badge,
  title,
  subtitle,
  maxWidth = 'max-w-4xl',
  className = ''
}) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      {badge && (
        <div
          className="inline-block px-6 py-3 rounded-full text-base font-bold mb-4 border-2 shadow-lg"
          style={{
            backgroundColor: colors.primary,
            borderColor: colors.primary,
            color: '#000',
          }}
        >
          {badge}
        </div>
      )}
      {title && (
        <h2 className="text-4xl font-bold mb-4">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={`text-xl text-gray-600 ${maxWidth} mx-auto`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
