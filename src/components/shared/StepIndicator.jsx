import { ArrowRight } from 'lucide-react';
import { colors } from '../../styles/design-tokens';

/**
 * StepIndicator Component
 *
 * Displays a numbered step indicator with optional title, subtitle, and arrow
 *
 * @param {Object} props
 * @param {string | number} props.number - Step number to display
 * @param {string} props.title - Step title
 * @param {string} props.subtitle - Optional subtitle/description
 * @param {boolean} props.showArrow - Whether to show arrow separator (default: true)
 * @param {string} props.className - Additional CSS classes
 */
export function StepIndicator({
  number,
  title,
  subtitle,
  showArrow = true,
  className = ''
}) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex items-center gap-4 mb-4">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{ backgroundColor: colors.primary }}
        >
          <span className="text-2xl font-bold text-white">{number}</span>
        </div>
        {showArrow && <ArrowRight className="w-6 h-6 text-gray-400" />}
      </div>
      <div className="text-center">
        <div className="font-semibold mb-1">{title}</div>
        {subtitle && <div className="text-sm text-gray-600">{subtitle}</div>}
      </div>
    </div>
  );
}
