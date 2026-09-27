import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { FeatureImportance } from '@/types';

interface FeatureImportanceChartProps {
  data: FeatureImportance[];
  title?: string;
}

const COLORS = ['#155EEF', '#0E4ED1', '#093088', '#5187FF', '#84A9FF', '#B3CCFF'];

export default function FeatureImportanceChart({ data, title = 'Model Feature Importance — Prototype' }: FeatureImportanceChartProps) {
  const chartData = [...data].sort((a, b) => b.importance - a.importance);

  return (
    <div className="card p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-semibold text-ink">{title}</h3>
          <p className="text-xs text-ink-secondary mt-0.5">Relative contribution of each feature to flood prediction</p>
        </div>
        <span className="proto-badge">Prototype</span>
      </div>
      <div style={{ width: '100%', height: 280 }}>
        <ResponsiveContainer>
          <BarChart data={chartData} layout="vertical" margin={{ left: 20, right: 30, top: 5, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F2F4F7" horizontal={false} />
            <XAxis
              type="number"
              domain={[0, 0.4]}
              tickFormatter={(v) => `${(v * 100).toFixed(0)}%`}
              tick={{ fontSize: 11, fill: '#667085' }}
              axisLine={{ stroke: '#E5E7EB' }}
            />
            <YAxis
              type="category"
              dataKey="feature"
              tick={{ fontSize: 12, fill: '#172033' }}
              axisLine={{ stroke: '#E5E7EB' }}
              width={120}
            />
            <Tooltip
              formatter={(v) => `${(Number(v) * 100).toFixed(1)}%`}
              contentStyle={{ borderRadius: 8, border: '1px solid #E5E7EB', fontSize: 12 }}
            />
            <Bar dataKey="importance" radius={[0, 4, 4, 0]}>
              {chartData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-xs text-ink-secondary mt-3 italic">
        Feature importance values are illustrative for prototype demonstration. Actual values will appear after model evaluation.
      </p>
    </div>
  );
}
