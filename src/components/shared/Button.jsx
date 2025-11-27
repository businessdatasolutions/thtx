import { colors } from '../../styles/design-tokens';

/**
 * Button Component
 *
 * A versatile button component supporting multiple variants, sizes, and icon positions
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button text/content
 * @param {string} props.href - Optional link URL (renders as <a> if provided)
 * @param {function} props.onClick - Optional click handler
 * @param {'primary' | 'secondary' | 'ghost'} props.variant - Visual style variant
 * @param {'sm' | 'md' | 'lg'} props.size - Button size
 * @param {React.Component} props.icon - Optional Lucide icon component
 * @param {'left' | 'right'} props.iconPosition - Icon placement
 * @param {boolean} props.fullWidth - Whether button should take full width
 * @param {boolean} props.disabled - Whether button is disabled
 * @param {string} props.className - Additional CSS classes
 */
export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  fullWidth = false,
  disabled = false,
  className = ''
}) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-4 text-lg',
    lg: 'px-10 py-5 text-xl',
  };

  const variantClasses = {
    primary: 'text-black hover:opacity-90',
    secondary: 'border-2 bg-white text-black hover:bg-gray-50',
    ghost: 'bg-gray-200 text-black hover:bg-gray-300',
  };

  const variantInlineStyles = {
    primary: {
      backgroundColor: colors.primary,
    },
    secondary: {
      borderColor: colors.primary,
    },
    ghost: {},
  };

  const baseClasses = `rounded-lg font-semibold transition transform hover:scale-105 ${sizeClasses[size]} ${variantClasses[variant]} ${
    fullWidth ? 'w-full block text-center' : 'inline-flex items-center justify-center'
  } ${className}`;

  const Element = href ? 'a' : 'button';

  return (
    <Element
      href={href}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      style={variantInlineStyles[variant]}
    >
      {iconPosition === 'left' && Icon && <Icon className="w-5 h-5 mr-2" />}
      {children}
      {iconPosition === 'right' && Icon && <Icon className="w-5 h-5 ml-2" />}
    </Element>
  );
}
