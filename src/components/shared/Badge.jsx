import { colors } from '../../styles/design-tokens';

/**
 * Badge Component
 *
 * A versatile badge/pill component for displaying status, labels, or tags
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Badge content
 * @param {'filled' | 'outline'} props.variant - Visual style variant
 * @param {React.Component} props.icon - Optional Lucide icon component
 * @param {string} props.className - Additional CSS classes
 */
export function Badge({
  children,
  variant = 'filled',
  icon: Icon,
  className = ''
}) {
  const baseStyles = 'inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold';

  const variantStyles = {
    filled: '',
    outline: 'border',
  };

  const variantInlineStyles = {
    filled: {
      backgroundColor: colors.primary,
      color: '#000',
    },
    outline: {
      backgroundColor: colors.bg.blue1,
      color: colors.primary,
      borderColor: colors.primary,
    },
  };

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      style={variantInlineStyles[variant]}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </div>
  );
}
