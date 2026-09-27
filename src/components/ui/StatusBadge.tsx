import { RiskLevel, RISK_COLORS } from '@/types';

interface StatusBadgeProps {
  level: RiskLevel;
  size?: 'sm' | 'md';
  pulse?: boolean;
}

export default function StatusBadge({ level, size = 'sm', pulse = false }: StatusBadgeProps) {
  const color = RISK_COLORS[level];
  const sizeClasses = size === 'sm' ? 'px-2.5 py-1 text-[11px]' : 'px-3 py-1.5 text-xs';

  return (
    <span
      className={`inline-flex items-center gap-1.5 ${sizeClasses} font-semibold uppercase tracking-wide rounded-full text-white`}
      style={{ backgroundColor: color }}
    >
      {pulse && (level === 'HIGH' || level === 'CRITICAL') && (
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
      )}
      {level}
    </span>
  );
}
