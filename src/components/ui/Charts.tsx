import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ReferenceLine,
} from 'recharts';
import { ForecastDay } from '@/types';
import { RAINFALL_CATEGORIES } from '@/data/demoData';

const CATEGORY_COLORS: Record<string, string> = {
  LIGHT: '#12B76A',
  MODERATE: '#84A9FF',
  HEAVY: '#F79009',
  'VERY HEAVY': '#F04438',
  'EXTREMELY HEAVY': '#B42318',
};

interface SevenDayForecastChartProps {
  data: ForecastDay[];
}

export function SevenDayForecastChart({ data }: SevenDayForecastChartProps) {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ left: -10, right: 10, top: 10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#F2F4F7" vertical={false} />
          <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#667085' }} axisLine={{ stroke: '#E5E7EB' }} />
          <YAxis
            tick={{ fontSize: 11, fill: '#667085' }}
            axisLine={{ stroke: '#E5E7EB' }}
            label={{ value: 'mm', angle: -90, position: 'insideLeft', style: { fontSize: 11, fill: '#667085' } }}
          />
          <Tooltip
            formatter={(v) => [`${v} mm`, 'Rainfall']}
            contentStyle={{ borderRadius: 8, border: '1px solid #E5E7EB', fontSize: 12 }}
          />
          <Bar dataKey="rainfall" radius={[6, 6, 0, 0]}>
            {data.map((entry, i) => (
              <Cell key={i} fill={CATEGORY_COLORS[entry.category]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

interface HourlyTrendChartProps {
  data: { time: string; rainfall: number }[];
}

export function HourlyTrendChart({ data }: HourlyTrendChartProps) {
  return (
    <div style={{ width: '100%', height: 240 }}>
      <ResponsiveContainer>
        <AreaChart data={data} margin={{ left: -10, right: 10, top: 10, bottom: 0 }}>
          <defs>
            <linearGradient id="rainfallGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#155EEF" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#155EEF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#F2F4F7" vertical={false} />
          <XAxis dataKey="time" tick={{ fontSize: 11, fill: '#667085' }} axisLine={{ stroke: '#E5E7EB' }} />
          <YAxis
            tick={{ fontSize: 11, fill: '#667085' }}
            axisLine={{ stroke: '#E5E7EB' }}
            label={{ value: 'mm', angle: -90, position: 'insideLeft', style: { fontSize: 11, fill: '#667085' } }}
          />
          <Tooltip
            formatter={(v) => [`${v} mm`, 'Rainfall']}
            contentStyle={{ borderRadius: 8, border: '1px solid #E5E7EB', fontSize: 12 }}
          />
          <Area
            type="monotone"
            dataKey="rainfall"
            stroke="#155EEF"
            strokeWidth={2}
            fill="url(#rainfallGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

interface RainfallDistributionChartProps {
  data: { range: string; category: string; count: number }[];
}

export function RainfallDistributionChart({ data }: RainfallDistributionChartProps) {
  return (
    <div style={{ width: '100%', height: 260 }}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ left: -10, right: 10, top: 10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#F2F4F7" vertical={false} />
          <XAxis dataKey="range" tick={{ fontSize: 10, fill: '#667085' }} axisLine={{ stroke: '#E5E7EB' }} />
          <YAxis
            tick={{ fontSize: 11, fill: '#667085' }}
            axisLine={{ stroke: '#E5E7EB' }}
            label={{ value: 'Records', angle: -90, position: 'insideLeft', style: { fontSize: 11, fill: '#667085' } }}
          />
          <Tooltip
            formatter={(v) => [v, 'Records']}
            contentStyle={{ borderRadius: 8, border: '1px solid #E5E7EB', fontSize: 12 }}
          />
          <Bar dataKey="count" radius={[6, 6, 0, 0]}>
            {data.map((entry, i) => {
              const cat = RAINFALL_CATEGORIES.find((c) => c.category === entry.category.toUpperCase());
              return <Cell key={i} fill={cat?.color || '#155EEF'} />;
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

interface SimpleLineChartProps {
  data: any[];
  xKey: string;
  yKey: string;
  yLabel?: string;
  color?: string;
  height?: number;
  referenceLines?: { y: number; label: string; color: string }[];
}

export function SimpleLineChart({
  data, xKey, yKey, yLabel, color = '#155EEF', height = 240, referenceLines = [],
}: SimpleLineChartProps) {
  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ left: -10, right: 10, top: 10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#F2F4F7" vertical={false} />
          <XAxis dataKey={xKey} tick={{ fontSize: 11, fill: '#667085' }} axisLine={{ stroke: '#E5E7EB' }} />
          <YAxis
            tick={{ fontSize: 11, fill: '#667085' }}
            axisLine={{ stroke: '#E5E7EB' }}
            label={yLabel ? { value: yLabel, angle: -90, position: 'insideLeft', style: { fontSize: 11, fill: '#667085' } } : undefined}
          />
          <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #E5E7EB', fontSize: 12 }} />
          {referenceLines.map((rl, i) => (
            <ReferenceLine key={i} y={rl.y} stroke={rl.color} strokeDasharray="5 5" label={{ value: rl.label, fontSize: 10, fill: rl.color, position: 'right' }} />
          ))}
          <Line type="monotone" dataKey={yKey} stroke={color} strokeWidth={2} dot={{ fill: color, r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
