import { RiskLevel, RISK_COLORS } from '@/types';

interface RiskGaugeProps {
  score: number;
  riskLevel: RiskLevel;
  size?: number;
  label?: string;
}

export default function RiskGauge({ score, riskLevel, size = 200, label = 'Integrated Risk Score' }: RiskGaugeProps) {
  const strokeWidth = 14;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(1, Math.max(0, score));
  const strokeDashoffset = circumference * (1 - progress);
  const color = RISK_COLORS[riskLevel];

  const segments = [
    { from: 0, to: 0.30, color: '#12B76A' },
    { from: 0.30, to: 0.55, color: '#F79009' },
    { from: 0.55, to: 0.75, color: '#F04438' },
    { from: 0.75, to: 1.0, color: '#B42318' },
  ];

  return (
    <div className="flex flex-col items-center" style={{ width: size }}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#F2F4F7"
            strokeWidth={strokeWidth}
          />
          {segments.map((seg, i) => {
            const segStart = circumference * seg.from;
            const segLength = circumference * (seg.to - seg.from);
            return (
              <circle
                key={i}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={seg.color}
                strokeWidth={2}
                strokeDasharray={`${segLength - 2} ${circumference}`}
                strokeDashoffset={-segStart}
                opacity={0.25}
              />
            );
          })}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold tabular-nums" style={{ color }}>
            {score.toFixed(2)}
          </span>
          <span
            className="mt-1 px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide text-white"
            style={{ backgroundColor: color }}
          >
            {riskLevel}
          </span>
        </div>
      </div>
      <p className="text-xs text-ink-secondary mt-3 font-medium uppercase tracking-wide">{label}</p>
    </div>
  );
}
