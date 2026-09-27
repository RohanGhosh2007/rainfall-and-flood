import { useState } from 'react';
import { AlertTriangle, Check, Eye, Filter, Bell, Shield, Users, Radio } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';
import AlertCard from '@/components/ui/AlertCard';
import { ALERTS } from '@/data/demoData';
import { AlertRecord, AlertStatus, RiskLevel } from '@/types';

type StatusFilter = 'All' | AlertStatus;
type RiskFilter = 'All' | RiskLevel;

export default function AlertsPage() {
  const [alerts, setAlerts] = useState<AlertRecord[]>(ALERTS);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('All');
  const [riskFilter, setRiskFilter] = useState<RiskFilter>('All');

  const handleAcknowledge = (id: string) => {
    setAlerts((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: 'Acknowledged' as AlertStatus } : a))
    );
  };

  const filtered = alerts.filter(
    (a) => (statusFilter === 'All' || a.status === statusFilter) && (riskFilter === 'All' || a.riskLevel === riskFilter)
  );

  const counts = {
    active: alerts.filter((a) => a.status === 'Active').length,
    acknowledged: alerts.filter((a) => a.status === 'Acknowledged').length,
    resolved: alerts.filter((a) => a.status === 'Resolved').length,
  };

  return (
    <PageHeader
      title="Early Warnings"
      subtitle="Authority alert management — monitor, acknowledge, and track active warnings."
    >
      <div className="mb-4 flex items-center gap-2">
        <span className="demo-badge">Prototype Demo Data</span>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="card p-4 flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-risk-high/10">
            <AlertTriangle className="w-5 h-5 text-risk-high" />
          </div>
          <div>
            <p className="text-2xl font-bold text-ink tabular-nums">{counts.active}</p>
            <p className="text-xs text-ink-secondary">Active</p>
          </div>
        </div>
        <div className="card p-4 flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-amber-50">
            <Check className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-ink tabular-nums">{counts.acknowledged}</p>
            <p className="text-xs text-ink-secondary">Acknowledged</p>
          </div>
        </div>
        <div className="card p-4 flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-50">
            <Shield className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-ink tabular-nums">{counts.resolved}</p>
            <p className="text-xs text-ink-secondary">Resolved</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="card p-4 mb-4">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs font-medium text-ink-secondary flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5" />
            Filter:
          </span>
          <div className="flex gap-1.5">
            {(['All', 'Active', 'Acknowledged', 'Resolved'] as StatusFilter[]).map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  statusFilter === s ? 'bg-brand-500 text-white' : 'bg-gray-50 text-ink-secondary hover:bg-gray-100'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="w-px h-5 bg-gray-200" />
          <div className="flex gap-1.5">
            {(['All', 'CRITICAL', 'HIGH', 'MODERATE', 'LOW'] as RiskFilter[]).map((r) => (
              <button
                key={r}
                onClick={() => setRiskFilter(r)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  riskFilter === r ? 'bg-navy text-white' : 'bg-gray-50 text-ink-secondary hover:bg-gray-100'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Alert Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {filtered.map((alert) => (
          <AlertCard key={alert.id} {...alert} onAcknowledge={handleAcknowledge} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="card p-8 text-center">
          <p className="text-sm text-ink-secondary">No alerts match the current filters.</p>
        </div>
      )}

      {/* Citizen Alert Preview */}
      <div className="mt-8">
        <div className="flex items-center gap-2 mb-3">
          <Users className="w-4 h-4 text-brand-500" />
          <h3 className="text-sm font-semibold text-ink">Citizen Alert Preview</h3>
          <span className="proto-badge">Prototype Alert Preview</span>
        </div>

        <div className="card overflow-hidden max-w-lg">
          <div className="bg-risk-critical px-5 py-4">
            <div className="flex items-center gap-2.5 mb-1">
              <AlertTriangle className="w-5 h-5 text-white" />
              <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                Heavy Rainfall & Flood Risk Alert
              </h4>
            </div>
            <p className="text-xs text-white/80">Official Emergency Warning</p>
          </div>
          <div className="p-5">
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-ink-secondary">Area</span>
                <span className="font-semibold text-ink">Barasat</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-ink-secondary">Expected Rainfall</span>
                <span className="font-semibold text-ink tabular-nums">140 mm</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-ink-secondary">Flood Probability</span>
                <span className="font-semibold text-ink tabular-nums">82%</span>
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3.5 mb-4">
              <p className="text-xs font-semibold text-amber-900 uppercase tracking-wide mb-1">Advice</p>
              <p className="text-sm text-amber-900 leading-relaxed">
                Avoid low-lying areas and follow official emergency instructions.
              </p>
            </div>
            <div className="flex gap-2.5 mb-4">
              <button className="btn-secondary text-xs flex-1">View Safety Instructions</button>
              <button className="btn-primary text-xs flex-1">Acknowledge</button>
            </div>
            <div className="pt-3 border-t border-gray-100">
              <div className="flex gap-2.5">
                <Radio className="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" />
                <p className="text-xs text-ink-secondary leading-relaxed">
                  Future deployment can integrate with government SMS, mobile applications, public alert channels
                  and emergency communication APIs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageHeader>
  );
}
