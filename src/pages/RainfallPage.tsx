import {
  CloudRain, Thermometer, Droplets, Wind, Gauge,
  Info, TrendingUp,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { SevenDayForecastChart, HourlyTrendChart } from '@/components/ui/Charts';
import {
  FORECAST_7DAY, HOURLY_TREND, WEATHER_INDICATORS, RAINFALL_CATEGORIES,
} from '@/data/demoData';

const ICON_MAP: Record<string, typeof Thermometer> = {
  Thermometer, Droplets, Wind, Gauge,
};

export default function RainfallPage() {
  return (
    <PageHeader
      title="Rainfall Forecast"
      subtitle="AI/ML-based rainfall prediction with category classification and 7-day outlook."
    >
      <div className="mb-4 flex items-center gap-2">
        <span className="demo-badge">Prototype Prediction</span>
      </div>

      {/* Predicted Rainfall + Category */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <div className="card p-5 lg:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            <CloudRain className="w-5 h-5 text-brand-500" />
            <h3 className="text-sm font-semibold text-ink">Predicted Rainfall</h3>
          </div>
          <p className="text-5xl font-bold text-ink tabular-nums">140<span className="text-xl text-ink-secondary ml-1">mm</span></p>
          <div className="mt-4 p-3 rounded-lg bg-risk-high/10 border border-risk-high/20">
            <p className="text-[10px] text-ink-secondary uppercase tracking-wide mb-1">Rainfall Category</p>
            <div className="flex items-center gap-2">
              <span
                className="px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide text-white"
                style={{ backgroundColor: '#F04438' }}
              >
                VERY HEAVY
              </span>
              <span className="text-xs text-ink-secondary">115.6–204.4 mm</span>
            </div>
          </div>
          <p className="text-xs text-ink-secondary mt-3 italic">Prototype Prediction — Barasat, West Bengal</p>
        </div>

        {/* Weather Indicators */}
        <div className="card p-5 lg:col-span-2">
          <h3 className="text-sm font-semibold text-ink mb-4">Weather Indicators</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {WEATHER_INDICATORS.map((ind) => {
              const Icon = ICON_MAP[ind.icon] || Thermometer;
              return (
                <div key={ind.label} className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white mb-2.5 mx-auto">
                    <Icon className="w-5 h-5 text-brand-500" />
                  </div>
                  <p className="text-[10px] text-ink-secondary uppercase tracking-wide">{ind.label}</p>
                  <p className="text-xl font-bold text-ink tabular-nums mt-0.5">
                    {ind.value}<span className="text-xs text-ink-secondary ml-0.5">{ind.unit}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Forecast Trend */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <div className="card p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-semibold text-ink flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-brand-500" />
                Forecast Trend (24h)
              </h3>
              <p className="text-xs text-ink-secondary mt-0.5">Hourly rainfall prediction</p>
            </div>
            <span className="demo-badge">Demo</span>
          </div>
          <HourlyTrendChart data={HOURLY_TREND} />
        </div>

        <div className="card p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-semibold text-ink">7-Day Forecast</h3>
              <p className="text-xs text-ink-secondary mt-0.5">Daily predicted rainfall</p>
            </div>
            <span className="demo-badge">Demo</span>
          </div>
          <SevenDayForecastChart data={FORECAST_7DAY} />
        </div>
      </div>

      {/* Rainfall Categories Legend */}
      <div className="card p-5">
        <div className="flex items-center gap-2 mb-4">
          <Info className="w-4 h-4 text-brand-500" />
          <h3 className="text-sm font-semibold text-ink">Rainfall Category Classification</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {RAINFALL_CATEGORIES.map((cat) => (
            <div key={cat.category} className="rounded-lg p-3 border" style={{ borderColor: `${cat.color}30`, backgroundColor: `${cat.color}08` }}>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }} />
                <span className="text-xs font-semibold text-ink uppercase">{cat.category}</span>
              </div>
              <p className="text-xs text-ink-secondary">{cat.range}</p>
            </div>
          ))}
        </div>
      </div>
    </PageHeader>
  );
}
