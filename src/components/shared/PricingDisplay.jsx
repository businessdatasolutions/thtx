import { colors } from '../../styles/design-tokens';

/**
 * PricingDisplay Component
 *
 * Displays pricing information with optional original price (strikethrough) and subtitle
 *
 * @param {Object} props
 * @param {string} props.price - Current price to display
 * @param {string} props.originalPrice - Optional original price (shown with strikethrough)
 * @param {string} props.subtitle - Optional subtitle/description
 * @param {string} props.className - Additional CSS classes
 */
export function PricingDisplay({
  price,
  originalPrice,
  subtitle,
  className = ''
}) {
  return (
    <div className={`flex items-baseline gap-3 ${className}`}>
      <span
        className="text-5xl font-bold"
        style={{ color: colors.primary }}
      >
        {price}
      </span>
      {originalPrice && (
        <span className="text-2xl text-gray-400 line-through">
          {originalPrice}
        </span>
      )}
      {subtitle && (
        <div className="text-sm text-gray-600 ml-auto">
          {subtitle}
        </div>
      )}
    </div>
  );
}
