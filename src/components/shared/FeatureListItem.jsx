import { CheckCircle } from 'lucide-react';
import { colors } from '../../styles/design-tokens';

/**
 * FeatureListItem Component
 *
 * A list item component with an icon for displaying features, benefits, or checklist items
 *
 * @param {Object} props
 * @param {React.Component} props.icon - Lucide icon component (defaults to CheckCircle)
 * @param {React.ReactNode} props.children - List item content
 * @param {string} props.className - Additional CSS classes
 */
export function FeatureListItem({
  icon: Icon = CheckCircle,
  children,
  className = ''
}) {
  return (
    <li className={`flex items-start gap-3 ${className}`}>
      <Icon
        className="w-5 h-5 mt-1 flex-shrink-0"
        style={{ color: colors.primary }}
      />
      <span className="flex-1">{children}</span>
    </li>
  );
}
