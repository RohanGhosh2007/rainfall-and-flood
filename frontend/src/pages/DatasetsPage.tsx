import { Database, Table, BarChart3, MapPin, Info } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import DataTable from '@/components/ui/DataTable';
import { RainfallDistributionChart } from '@/components/ui/Charts';
import {
  WEATHER_DATASET_FIELDS,
  FLOOD_DATASET_FIELDS,
  WEATHER_DATASET_PREVIEW,
  FLOOD_DATASET_PREVIEW,
  RAINFALL_DISTRIBUTION,
} from '@/data/demoData';

export default function DatasetsPage() {
  const weatherColumns = [
    { key: 'date', label: 'Date' },
    { key: 'station', label: 'Station' },
    { key: 'district', label: 'District' },
    {
      key: 'avg_temp',
      label: 'Avg Temp',
      render: (row: any) => <span className="tabular-nums">{row.avg_temp}°C</span>,
    },
    {
      key: 'rainfall',
      label: 'Rainfall',
      render: (row: any) => <span className="tabular-nums font-medium">{row.rainfall} mm</span>,
    },
  ];

  const floodColumns = [
    { key: 'lat', label: 'Lat', render: (row: any) => <span className="tabular-nums">{row.lat}</span> },
    { key: 'lng', label: 'Lng', render: (row: any) => <span className="tabular-nums">{row.lng}</span> },
    { key: 'rainfall', label: 'Rainfall', render: (row: any) => <span className="tabular-nums">{row.rainfall} mm</span> },
    { key: 'river_discharge', label: 'River Discharge', render: (row: any) => <span className="tabular-nums">{row.river_discharge} m³/s</span> },
    { key: 'water_level', label: 'Water Level', render: (row: any) => <span className="tabular-nums">{row.water_level} m</span> },
    {
      key: 'flood',
      label: 'Flood',
      render: (row: any) => (
        <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
          row.flood === 'Yes' ? 'bg-risk-high/10 text-risk-high' : 'bg-emerald-50 text-emerald-700'
        }`}>
          {row.flood}
        </span>
      ),
    },
  ];

  return (
    <PageHeader
      title="Dataset Insights"
      subtitle="Overview of the weather/rainfall and flood datasets used by the prototype."
    >
      <div className="mb-4 flex items-center gap-2">
        <span className="demo-badge">Prototype Dataset Overview</span>
      </div>

      {/* Dataset Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <div className="card p-5">
          <div className="flex items-center gap-2 mb-3">
            <Database className="w-5 h-5 text-brand-500" />
            <h3 className="text-sm font-semibold text-ink">Indian Rainfall and Weather Prediction Dataset</h3>
          </div>
          <p className="text-xs text-ink-secondary mb-4">
            Used for training the rainfall prediction model (XGBRegressor).
          </p>
          <div className="bg-gray-50 rounded-lg p-3 mb-3">
            <p className="text-xs font-medium text-ink mb-2">Available Fields</p>
            <div className="flex flex-wrap gap-1.5">
              {WEATHER_DATASET_FIELDS.map((field) => (
                <code key={field.name} className="text-[10px] font-mono bg-white border border-gray-200 px-1.5 py-0.5 rounded text-ink">
                  {field.name}
                </code>
              ))}
            </div>
          </div>
        </div>

        <div className="card p-5">
          <div className="flex items-center gap-2 mb-3">
            <Database className="w-5 h-5 text-brand-500" />
            <h3 className="text-sm font-semibold text-ink">Flood Prediction Dataset</h3>
          </div>
          <p className="text-xs text-ink-secondary mb-4">
            Used for training the flood prediction model (XGBClassifier).
          </p>
          <div className="bg-gray-50 rounded-lg p-3 mb-3">
            <p className="text-xs font-medium text-ink mb-2">Available Fields</p>
            <div className="flex flex-wrap gap-1.5">
              {FLOOD_DATASET_FIELDS.map((field) => (
                <code key={field.name} className="text-[10px] font-mono bg-white border border-gray-200 px-1.5 py-0.5 rounded text-ink">
                  {field.name}
                </code>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dataset Previews */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Table className="w-4 h-4 text-brand-500" />
            <h3 className="text-sm font-semibold text-ink">Weather Dataset Preview</h3>
            <span className="demo-badge">Sample</span>
          </div>
          <DataTable columns={weatherColumns} data={WEATHER_DATASET_PREVIEW} />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Table className="w-4 h-4 text-brand-500" />
            <h3 className="text-sm font-semibold text-ink">Flood Dataset Preview</h3>
            <span className="demo-badge">Sample</span>
          </div>
          <DataTable columns={floodColumns} data={FLOOD_DATASET_PREVIEW} />
        </div>
      </div>

      {/* Rainfall Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <div className="card p-5">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-4 h-4 text-brand-500" />
            <h3 className="text-sm font-semibold text-ink">Rainfall Distribution</h3>
          </div>
          <RainfallDistributionChart data={RAINFALL_DISTRIBUTION} />
          <p className="text-xs text-ink-secondary mt-3 italic">
            Distribution shown is illustrative. Actual dataset statistics: Available after data analysis.
          </p>
        </div>

        <div className="card p-5">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-4 h-4 text-brand-500" />
            <h3 className="text-sm font-semibold text-ink">Station / Location Overview</h3>
          </div>
          <div className="space-y-2">
            {[
              { station: 'Alipore', district: 'Kolkata', state: 'West Bengal' },
              { station: 'Barrackpore', district: 'North 24 Parganas', state: 'West Bengal' },
              { station: 'Dumdum', district: 'North 24 Parganas', state: 'West Bengal' },
              { station: 'Howrah', district: 'Howrah', state: 'West Bengal' },
              { station: 'Chinsurah', district: 'Hooghly', state: 'West Bengal' },
            ].map((s) => (
              <div key={s.station} className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-ink">{s.station}</p>
                  <p className="text-xs text-ink-secondary">{s.district}, {s.state}</p>
                </div>
                <MapPin className="w-4 h-4 text-ink-secondary" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Weather Variable Summary */}
      <div className="card p-5 mb-4">
        <div className="flex items-center gap-2 mb-4">
          <Info className="w-4 h-4 text-brand-500" />
          <h3 className="text-sm font-semibold text-ink">Weather Variable Summary</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: 'Avg Temperature', value: 'Available after data analysis.' },
            { label: 'Wind Speed', value: 'Available after data analysis.' },
            { label: 'Air Pressure', value: 'Available after data analysis.' },
            { label: 'Rainfall (target)', value: 'Available after data analysis.' },
          ].map((v) => (
            <div key={v.label} className="bg-gray-50 rounded-lg p-4">
              <p className="text-[10px] text-ink-secondary uppercase tracking-wide mb-1">{v.label}</p>
              <p className="text-xs text-ink-secondary italic">{v.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card p-4 bg-blue-50/50 border-blue-100">
        <div className="flex gap-2.5">
          <Info className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
          <p className="text-xs text-ink-secondary leading-relaxed">
            Dataset statistics shown are for prototype demonstration. In production, summaries will be retrieved via
            <code className="font-mono text-[11px] bg-blue-100 px-1 rounded mx-1">GET /api/dataset/weather-summary</code>
            and
            <code className="font-mono text-[11px] bg-blue-100 px-1 rounded mx-1">GET /api/dataset/flood-summary</code>.
          </p>
        </div>
      </div>
    </PageHeader>
  );
}
