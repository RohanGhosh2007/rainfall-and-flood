import { useState } from 'react';
import { Filter, History as HistoryIcon } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import DataTable from '@/components/ui/DataTable';
import { HISTORY } from '@/data/demoData';
import { HistoryRecord, RiskLevel, RISK_COLORS } from '@/types';

type RiskFilter = 'All' | RiskLevel;

export default function HistoryPage() {
  const [locationFilter, setLocationFilter] = useState('All');
  const [riskFilter, setRiskFilter] = useState<RiskFilter>('All');
  const [dateFilter, setDateFilter] = useState('All');

  const locations = Array.from(new Set(HISTORY.map((h) => h.location)));
  const dates = Array.from(new Set(HISTORY.map((h) => h.date)));

  const filtered = HISTORY.filter(
    (h) =>
      (locationFilter === 'All' || h.location === locationFilter) &&
      (riskFilter === 'All' || h.riskLevel === riskFilter) &&
      (dateFilter === 'All' || h.date === dateFilter)
  );

  const columns = [
    {
      key: 'date',
      label: 'Date',
      render: (row: HistoryRecord) => <span className="tabular-nums">{row.date}</span>,
    },
    { key: 'location', label: 'Location' },
    {
      key: 'rainfall',
      label: 'Rainfall',
      render: (row: HistoryRecord) => <span className="tabular-nums font-medium">{row.rainfall} mm</span>,
    },
    {
      key: 'floodProbability',
      label: 'Flood Prob.',
      render: (row: HistoryRecord) => <span className="tabular-nums font-medium">{row.floodProbability}%</span>,
    },
    {
      key: 'riskScore',
      label: 'Risk Score',
      render: (row: HistoryRecord) => <span className="tabular-nums font-semibold">{row.riskScore.toFixed(2)}</span>,
    },
    {
      key: 'riskLevel',
      label: 'Risk Level',
      render: (row: HistoryRecord) => (
        <span
          className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide text-white"
          style={{ backgroundColor: RISK_COLORS[row.riskLevel] }}
        >
          {row.riskLevel}
        </span>
      ),
    },
    {
      key: 'status',
      label: 'Status',
      render: (row: HistoryRecord) => {
        const colors = {
          Active: 'bg-risk-high/10 text-risk-high',
          Acknowledged: 'bg-amber-50 text-amber-700',
          Resolved: 'bg-emerald-50 text-emerald-700',
        };
        return (
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${colors[row.status]}`}>
            {row.status}
          </span>
        );
      },
    },
  ];

  return (
    <PageHeader
      title="Prediction History"
      subtitle="Historical risk assessment records and prediction outcomes."
    >
      <div className="mb-4 flex items-center gap-2">
        <span className="demo-badge">Prototype History</span>
        <span className="text-xs text-ink-secondary">{filtered.length} records</span>
      </div>

      {/* Filters */}
      <div className="card p-4 mb-4">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs font-medium text-ink-secondary flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5" />
            Filters:
          </span>
          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="px-3 py-1.5 text-xs font-medium rounded-lg border border-gray-200 bg-white text-ink focus:outline-none focus:border-brand-400"
          >
            <option value="All">All Locations</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
          <select
            value={riskFilter}
            onChange={(e) => setRiskFilter(e.target.value as RiskFilter)}
            className="px-3 py-1.5 text-xs font-medium rounded-lg border border-gray-200 bg-white text-ink focus:outline-none focus:border-brand-400"
          >
            <option value="All">All Risk Levels</option>
            <option value="CRITICAL">Critical</option>
            <option value="HIGH">High</option>
            <option value="MODERATE">Moderate</option>
            <option value="LOW">Low</option>
          </select>
          <select
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="px-3 py-1.5 text-xs font-medium rounded-lg border border-gray-200 bg-white text-ink focus:outline-none focus:border-brand-400"
          >
            <option value="All">All Dates</option>
            {dates.map((date) => (
              <option key={date} value={date}>{date}</option>
            ))}
          </select>
          {(locationFilter !== 'All' || riskFilter !== 'All' || dateFilter !== 'All') && (
            <button
              onClick={() => { setLocationFilter('All'); setRiskFilter('All'); setDateFilter('All'); }}
              className="text-xs font-medium text-brand-600 hover:text-brand-700"
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>

      <DataTable columns={columns} data={filtered} emptyMessage="No prediction records match the current filters." />

      <div className="mt-4 card p-4 bg-gray-50/50">
        <div className="flex gap-2.5">
          <HistoryIcon className="w-4 h-4 text-ink-secondary shrink-0 mt-0.5" />
          <p className="text-xs text-ink-secondary leading-relaxed">
            These are prototype demonstration records. In the production system, prediction history will be
            retrieved from the backend database via <code className="font-mono text-[11px] bg-gray-100 px-1 rounded">GET /api/predictions</code>.
          </p>
        </div>
      </div>
    </PageHeader>
  );
}
