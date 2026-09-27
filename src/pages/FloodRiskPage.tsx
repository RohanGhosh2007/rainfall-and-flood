import { useState } from 'react';
import { Waves, Droplets, Activity, History, Mountain, Users } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import RiskGauge from '@/components/ui/RiskGauge';
import StatusBadge from '@/components/ui/StatusBadge';
import FeatureImportanceChart from '@/components/ui/FeatureImportanceChart';
import { FEATURE_IMPORTANCE } from '@/data/demoData';
import { FeatureImportance } from '@/types';

const RISK_FACTORS = [
  { label: 'Rainfall', value: '140 mm', icon: Waves, color: '#155EEF', severity: 'Very Heavy' },
  { label: 'Water Level', value: '7.8 m', icon: Droplets, color: '#0E4ED1', severity: 'Above threshold' },
  { label: 'River Discharge', value: '2450 m³/s', icon: Activity, color: '#093088', severity: 'High flow' },
  { label: 'Historical Flood Indicator', value: '4 events', icon: History, color: '#5187FF', severity: 'Flood-prone area' },
  { label: 'Elevation', value: '12 m', icon: Mountain, color: '#84A9FF', severity: 'Low-lying' },
  { label: 'Population Density', value: '6500/km²', icon: Users, color: '#B3CCFF', severity: 'Densely populated' },
];

export default function FloodRiskPage() {
  const [features] = useState<FeatureImportance[]>(FEATURE_IMPORTANCE);

  return (
    <PageHeader
      title="Flood / Inundation Risk"
      subtitle="AI/ML-based flood probability assessment and key risk factor analysis."
    >
      <div className="mb-4 flex items-center gap-2">
        <span className="demo-badge">Prototype Demo Data</span>
      </div>

      {/* Flood Probability + Risk Level */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <div className="card p-6 flex flex-col items-center">
          <h3 className="text-sm font-semibold text-ink mb-4 self-start">Flood Probability</h3>
          <RiskGauge score={0.82} riskLevel="CRITICAL" size={180} label="Flood Probability" />
          <p className="text-xs text-ink-secondary mt-3">Barasat, West Bengal</p>
        </div>

        <div className="card p-5 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-ink">Flood Risk Summary</h3>
            <StatusBadge level="CRITICAL" size="md" pulse />
          </div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-risk-critical/10 rounded-lg p-4 border border-risk-critical/20">
              <p className="text-[10px] text-ink-secondary uppercase tracking-wide">Risk Level</p>
              <p className="text-2xl font-bold text-risk-critical mt-1">CRITICAL</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-[10px] text-ink-secondary uppercase tracking-wide">Flood Occurred Prediction</p>
              <p className="text-2xl font-bold text-ink mt-1">Yes <span className="text-sm text-ink-secondary">(82% confidence)</span></p>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3.5">
            <p className="text-xs text-amber-900 leading-relaxed">
              Model indicates high likelihood of flood inundation in low-lying areas. Immediate monitoring of river discharge
              and water levels is recommended. Pre-position emergency response teams.
            </p>
          </div>
        </div>
      </div>

      {/* Key Risk Factors */}
      <div className="card p-5 mb-6">
        <h3 className="text-sm font-semibold text-ink mb-4">Key Risk Factors</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {RISK_FACTORS.map((factor) => (
            <div key={factor.label} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white">
                  <factor.icon className="w-4 h-4" style={{ color: factor.color }} />
                </div>
                <div>
                  <p className="text-xs text-ink-secondary uppercase tracking-wide">{factor.label}</p>
                  <p className="text-base font-bold text-ink tabular-nums">{factor.value}</p>
                </div>
              </div>
              <p className="text-xs text-ink-secondary">{factor.severity}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Importance */}
      <FeatureImportanceChart data={features} />
    </PageHeader>
  );
}
