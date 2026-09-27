import { useState } from 'react';
import { MapPin, X, Navigation } from 'lucide-react';
import { RiskPoint, RISK_COLORS } from '@/types';
import StatusBadge from './StatusBadge';

interface RiskMapProps {
  points: RiskPoint[];
}

export default function RiskMap({ points }: RiskMapProps) {
  const [selected, setSelected] = useState<RiskPoint | null>(null);

  return (
    <div className="card overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div>
          <h3 className="text-sm font-semibold text-ink">West Bengal Risk Map</h3>
          <p className="text-xs text-ink-secondary mt-0.5">Click markers to view location details</p>
        </div>
        <div className="flex items-center gap-3">
          {(['LOW', 'MODERATE', 'HIGH', 'CRITICAL'] as const).map((level) => (
            <div key={level} className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: RISK_COLORS[level] }} />
              <span className="text-[10px] font-medium text-ink-secondary uppercase">{level}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative bg-gradient-to-b from-blue-50 to-gray-50" style={{ aspectRatio: '4/3' }}>
        {/* Stylized map background */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 75" preserveAspectRatio="none">
          {/* River/estuary area */}
          <path
            d="M 40,5 Q 45,20 42,35 Q 40,50 45,65 Q 48,72 50,75 L 55,75 Q 52,68 50,55 Q 48,40 52,25 Q 55,10 50,5 Z"
            fill="#BFDBFE"
            opacity="0.4"
          />
          {/* Landmass outline */}
          <path
            d="M 20,10 Q 30,8 45,10 Q 55,12 70,8 Q 85,10 92,20 Q 95,35 90,50 Q 85,65 70,70 Q 50,72 30,68 Q 15,65 10,50 Q 8,30 12,18 Q 15,12 20,10 Z"
            fill="#F0FDF4"
            stroke="#D1D5DB"
            strokeWidth="0.3"
            opacity="0.6"
          />
          {/* Grid lines for map feel */}
          {[15, 30, 45, 60].map((y) => (
            <line key={`h${y}`} x1="5" y1={y} x2="95" y2={y} stroke="#E5E7EB" strokeWidth="0.15" strokeDasharray="0.5 1" />
          ))}
          {[20, 40, 60, 80].map((x) => (
            <line key={`v${x}`} x1={x} y1="5" x2={x} y2="70" stroke="#E5E7EB" strokeWidth="0.15" strokeDasharray="0.5 1" />
          ))}
        </svg>

        {/* Location markers */}
        {points.map((point) => (
          <button
            key={point.id}
            onClick={() => setSelected(point)}
            className="absolute -translate-x-1/2 -translate-y-1/2 group"
            style={{ left: `${point.x}%`, top: `${point.y}%` }}
            aria-label={point.location}
          >
            <span
              className="block rounded-full border-2 border-white shadow-md transition-transform group-hover:scale-125"
              style={{
                width: 14,
                height: 14,
                backgroundColor: RISK_COLORS[point.riskLevel],
                animation: (point.riskLevel === 'HIGH' || point.riskLevel === 'CRITICAL') ? 'pulse 2s infinite' : undefined,
              }}
            />
            <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-[10px] font-medium text-ink whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 px-1 rounded">
              {point.location}
            </span>
          </button>
        ))}

        {/* Compass */}
        <div className="absolute top-3 right-3 flex flex-col items-center gap-0.5 text-ink-secondary">
          <Navigation className="w-4 h-4" />
          <span className="text-[9px] font-semibold">N</span>
        </div>

        {/* Label */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2 py-1 bg-white/80 rounded text-[10px] text-ink-secondary">
          <MapPin className="w-3 h-3" />
          Prototype Risk Visualization
        </div>

        {/* Selected location popup */}
        {selected && (
          <div className="absolute top-3 left-3 w-64 bg-white rounded-xl shadow-card-elevated border border-gray-100 p-4 animate-slide-in-right z-10">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="text-sm font-semibold text-ink">{selected.location}</h4>
                <p className="text-xs text-ink-secondary">{selected.district}, {selected.state}</p>
              </div>
              <button onClick={() => setSelected(null)} className="text-ink-secondary hover:text-ink">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-2 mb-3">
              <div className="flex justify-between text-xs">
                <span className="text-ink-secondary">Rainfall</span>
                <span className="font-semibold text-ink tabular-nums">{selected.rainfall} mm</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-ink-secondary">Flood Probability</span>
                <span className="font-semibold text-ink tabular-nums">{selected.floodProbability}%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-ink-secondary">Integrated Risk</span>
                <span className="font-semibold text-ink tabular-nums">{selected.riskScore.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs items-center">
                <span className="text-ink-secondary">Risk Level</span>
                <StatusBadge level={selected.riskLevel} />
              </div>
              <div className="flex justify-between text-xs pt-2 border-t border-gray-100">
                <span className="text-ink-secondary">Last Assessment</span>
                <span className="font-medium text-ink">{selected.lastAssessment}</span>
              </div>
            </div>
            <div className="text-[10px] text-ink-secondary">
              {selected.lat.toFixed(4)}°N, {selected.lng.toFixed(4)}°E
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
