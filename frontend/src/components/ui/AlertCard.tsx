import { Link } from 'react-router-dom';
import { AlertTriangle, Check, Eye } from 'lucide-react';
import { RiskLevel, RISK_COLORS } from '@/types';
import StatusBadge from './StatusBadge';

interface AlertCardProps {
  id: string;
  location: string;
  time: string;
  rainfall: number;
  floodProbability: number;
  riskScore: number;
  riskLevel: RiskLevel;
  status: 'Active' | 'Acknowledged' | 'Resolved';
  onAcknowledge?: (id: string) => void;
}

export default function AlertCard({
  id,
  location,
  time,
  rainfall,
  floodProbability,
  riskScore,
  riskLevel,
  status,
  onAcknowledge,
}: AlertCardProps) {
  const color = RISK_COLORS[riskLevel];
  const isCritical = riskLevel === 'CRITICAL' || riskLevel === 'HIGH';
  const borderClass = status === 'Resolved' ? 'border-l-gray-300' : 'border-l-4';
  const statusColors = {
    Active: 'bg-risk-high/10 text-risk-high border-risk-high/20',
    Acknowledged: 'bg-amber-50 text-amber-700 border-amber-200',
    Resolved: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  };

  return (
    <div
      className={`card p-4 border-l-4 ${borderClass} ${isCritical && status === 'Active' ? 'animate-pulse-slow' : ''}`}
      style={{ borderLeftColor: status !== 'Resolved' ? color : undefined }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-start gap-2">
          <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" style={{ color }} />
          <div>
            <p className="text-sm font-semibold text-ink">{location}</p>
            <p className="text-xs text-ink-secondary mt-0.5">
              {id} • {time}
            </p>
          </div>
        </div>
        <StatusBadge level={riskLevel} pulse={status === 'Active'} />
      </div>

      <div className="grid grid-cols-3 gap-3 mb-3">
        <div className="bg-gray-50 rounded-lg px-3 py-2">
          <p className="text-[10px] text-ink-secondary uppercase tracking-wide">Rainfall</p>
          <p className="text-sm font-semibold text-ink tabular-nums">{rainfall} mm</p>
        </div>
        <div className="bg-gray-50 rounded-lg px-3 py-2">
          <p className="text-[10px] text-ink-secondary uppercase tracking-wide">Flood Prob.</p>
          <p className="text-sm font-semibold text-ink tabular-nums">{floodProbability}%</p>
        </div>
        <div className="bg-gray-50 rounded-lg px-3 py-2">
          <p className="text-[10px] text-ink-secondary uppercase tracking-wide">Risk Score</p>
          <p className="text-sm font-semibold text-ink tabular-nums">{riskScore.toFixed(2)}</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold border ${statusColors[status]}`}>
          {status}
        </span>
        <div className="flex gap-2">
          {status === 'Active' && onAcknowledge && (
            <button
              onClick={() => onAcknowledge(id)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-ink bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Check className="w-3.5 h-3.5" />
              Acknowledge
            </button>
          )}
          <Link
            to="/risk-assessment"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-brand-600 bg-brand-50 hover:bg-brand-100 rounded-lg transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
