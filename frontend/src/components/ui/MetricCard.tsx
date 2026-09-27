import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: string | number;
  unit?: string;
  icon: LucideIcon;
  iconColor?: string;
  iconBg?: string;
  sublabel?: string;
  isDemo?: boolean;
}

export default function MetricCard({
  label,
  value,
  unit,
  icon: Icon,
  iconColor = '#155EEF',
  iconBg = '#EFF4FF',
  sublabel,
  isDemo = false,
}: MetricCardProps) {
  return (
    <div className="card card-hover p-4">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center justify-center w-9 h-9 rounded-lg" style={{ backgroundColor: iconBg }}>
          <Icon className="w-4.5 h-4.5" style={{ color: iconColor }} />
        </div>
        {isDemo && (
          <span className="demo-badge">Demo</span>
        )}
      </div>
      <p className="text-xs font-medium text-ink-secondary uppercase tracking-wide mb-1">{label}</p>
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-bold text-ink tabular-nums">{value}</span>
        {unit && <span className="text-sm font-medium text-ink-secondary">{unit}</span>}
      </div>
      {sublabel && <p className="text-xs text-ink-secondary mt-1">{sublabel}</p>}
    </div>
  );
}
