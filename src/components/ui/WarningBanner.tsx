import { AlertTriangle, ShieldAlert, Eye, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RiskLevel, RISK_COLORS } from '@/types';

interface WarningBannerProps {
  riskLevel: RiskLevel;
  location: string;
  rainfall: number;
  floodProbability: number;
  recommendedAction: string;
  onAcknowledge?: () => void;
  acknowledged?: boolean;
}

export default function WarningBanner({
  riskLevel,
  location,
  rainfall,
  floodProbability,
  recommendedAction,
  onAcknowledge,
  acknowledged = false,
}: WarningBannerProps) {
  const color = RISK_COLORS[riskLevel];
  const isCritical = riskLevel === 'CRITICAL' || riskLevel === 'HIGH';

  return (
    <div
      className="rounded-xl border-2 overflow-hidden"
      style={{ borderColor: color }}
    >
      <div
        className="px-5 py-3 flex items-center justify-between"
        style={{ backgroundColor: color }}
      >
        <div className="flex items-center gap-2.5">
          <ShieldAlert className="w-5 h-5 text-white" />
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wide">
              {riskLevel} Early Warning
            </h3>
            <p className="text-xs text-white/80">{location}</p>
          </div>
        </div>
        {isCritical && !acknowledged && (
          <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
        )}
      </div>

      <div className="bg-white p-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
          <div>
            <p className="text-[10px] text-ink-secondary uppercase tracking-wide mb-1">Predicted Rainfall</p>
            <p className="text-xl font-bold text-ink tabular-nums">{rainfall} <span className="text-sm font-medium text-ink-secondary">mm</span></p>
          </div>
          <div>
            <p className="text-[10px] text-ink-secondary uppercase tracking-wide mb-1">Flood Probability</p>
            <p className="text-xl font-bold text-ink tabular-nums">{floodProbability}<span className="text-sm font-medium text-ink-secondary">%</span></p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-[10px] text-ink-secondary uppercase tracking-wide mb-1">Risk Level</p>
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-white"
              style={{ backgroundColor: color }}
            >
              {riskLevel}
            </span>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3.5 mb-4">
          <div className="flex gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-amber-900 uppercase tracking-wide mb-1">Recommended Action</p>
              <p className="text-sm text-amber-900 leading-relaxed">{recommendedAction}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {onAcknowledge && (
            <button
              onClick={onAcknowledge}
              disabled={acknowledged}
              className={`inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-all ${
                acknowledged
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 cursor-default'
                  : 'btn-danger'
              }`}
            >
              {acknowledged ? (
                <>
                  <ShieldAlert className="w-4 h-4" />
                  Alert Acknowledged
                </>
              ) : (
                <>
                  <ShieldAlert className="w-4 h-4" />
                  Acknowledge Alert
                </>
              )}
            </button>
          )}
          <Link
            to="/risk-assessment"
            className="btn-secondary"
          >
            <Eye className="w-4 h-4" />
            View Risk Details
          </Link>
        </div>
      </div>
    </div>
  );
}
