import { colors } from '../../styles/design-tokens';

/**
 * Card Component
 *
 * A versatile card component with multiple theme variants for different use cases
 *
 * @param {Object} props
 * @param {React.Component} props.icon - Optional Lucide icon component
 * @param {string} props.iconColor - Override icon color (CSS color value)
 * @param {string} props.title - Card title
 * @param {string} props.subtitle - Optional subtitle text
 * @param {React.ReactNode} props.children - Card content
 * @param {React.ReactNode} props.badge - Optional badge component
 * @param {React.ReactNode} props.footer - Optional footer content
 * @param {'default' | 'problem' | 'solution' | 'impact'} props.theme - Visual theme
 * @param {string} props.className - Additional CSS classes
 */
export function Card({
  icon: Icon,
  iconColor,
  title,
  subtitle,
  children,
  badge,
  footer,
  theme = 'default',
  className = ''
}) {
  const themes = {
    default: {
      borderColor: colors.primary,
      backgroundColor: '#fff',
      iconColor: colors.primary,
    },
    problem: {
      borderColor: colors.accent.pink,
      backgroundColor: colors.bg.pink,
      iconColor: colors.accent.pink,
    },
    solution: {
      borderColor: colors.accent.cyan,
      backgroundColor: colors.bg.cyan,
      iconColor: colors.accent.cyan,
    },
    impact: {
      borderColor: colors.primary,
      backgroundColor: colors.bg.yellow,
      iconColor: colors.primary,
    },
  };

  const themeStyles = themes[theme];

  return (
    <div
      className={`p-6 rounded-xl border-2 ${className}`}
      style={{
        borderColor: themeStyles.borderColor,
        backgroundColor: themeStyles.backgroundColor,
      }}
    >
      {(Icon || badge) && (
        <div className="flex items-center justify-between mb-3">
          {Icon && (
            <div
              className="flex items-center gap-2 font-semibold"
              style={{ color: iconColor || themeStyles.iconColor }}
            >
              <Icon className="w-5 h-5" />
              {subtitle && <span className="text-sm">{subtitle}</span>}
            </div>
          )}
          {badge && <div className="ml-auto">{badge}</div>}
        </div>
      )}

      {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}

      <div className="space-y-2">
        {children}
      </div>

      {footer && (
        <div
          className="mt-4 pt-4 border-t"
          style={{ borderColor: themeStyles.borderColor }}
        >
          <div
            className="font-semibold"
            style={{ color: themeStyles.iconColor }}
          >
            {footer}
          </div>
        </div>
      )}
    </div>
  );
}
