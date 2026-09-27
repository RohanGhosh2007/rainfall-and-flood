import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldAlert, CloudRain, Waves, AlertTriangle, MapPin,
  Activity, TrendingUp, ArrowRight, Bell, Volume2, VolumeX,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import MetricCard from '@/components/ui/MetricCard';
import RiskGauge from '@/components/ui/RiskGauge';
import WarningBanner from '@/components/ui/WarningBanner';
import { HourlyTrendChart } from '@/components/ui/Charts';
import { fetchDashboardSummary, fetchAlerts, DashboardSummary } from '@/services/api';
import { HOURLY_TREND, DEMO_LOCATION } from '@/data/demoData';
import { AlertRecord } from '@/types';

export default function DashboardPage() {
  const [summary, setSummary] = useState<DashboardSummary | null>(null);
  const [alerts, setAlerts] = useState<AlertRecord[]>([]);
  const [acknowledged, setAcknowledged] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    fetchDashboardSummary().then(setSummary);
    fetchAlerts().then(setAlerts);
  }, []);

  if (!summary) return null;

  const activeAlerts = alerts.filter((a) => a.status === 'Active').slice(0, 3);

  return (
    <>
      <PageHeader
        title="Integrated Early Warning Dashboard"
        subtitle="AI/ML-based rainfall and inundation risk assessment for disaster management."
      >
        <div className="mb-4 flex items-center gap-2">
          <span className="demo-badge">Prototype Demo Data</span>
          <span className="text-xs text-ink-secondary">Location: {summary.location}</span>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
          <MetricCard
            label="Current Risk"
            value="CRITICAL"
            icon={ShieldAlert}
            iconColor="#B42318"
            iconBg="#FEF3F2"
            isDemo
          />
          <MetricCard
            label="Predicted Rainfall"
            value={140}
            unit="mm"
            icon={CloudRain}
            iconColor="#155EEF"
            iconBg="#EFF4FF"
            isDemo
          />
          <MetricCard
            label="Flood Probability"
            value={82}
            unit="%"
            icon={Waves}
            iconColor="#0E4ED1"
            iconBg="#DBEAFE"
            isDemo
          />
          <MetricCard
            label="Active Warnings"
            value={3}
            icon={AlertTriangle}
            iconColor="#F04438"
            iconBg="#FEF3F2"
          />
          <MetricCard
            label="Monitoring Locations"
            value={24}
            icon={MapPin}
            iconColor="#12B76A"
            iconBg="#ECFDF3"
          />
        </div>

        {/* Main Risk Panel + Hourly Trend */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          <div className="card p-6 lg:col-span-1 flex flex-col items-center justify-center">
            <div className="flex items-center justify-between w-full mb-4">
              <div>
                <h3 className="text-sm font-semibold text-ink">Integrated Risk Assessment</h3>
                <p className="text-xs text-ink-secondary mt-0.5">{DEMO_LOCATION.name}, {DEMO_LOCATION.state}</p>
              </div>
              <span className="demo-badge">Demo</span>
            </div>
            <RiskGauge score={summary.integratedRiskScore} riskLevel="CRITICAL" size={200} />
            <div className="grid grid-cols-3 gap-2 w-full mt-5 pt-4 border-t border-gray-100">
              <div className="text-center">
                <p className="text-[10px] text-ink-secondary uppercase">Rainfall</p>
                <p className="text-sm font-bold text-ink">{140}mm</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] text-ink-secondary uppercase">Flood Prob.</p>
                <p className="text-sm font-bold text-ink">{82}%</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] text-ink-secondary uppercase">Score</p>
                <p className="text-sm font-bold text-ink">{summary.integratedRiskScore.toFixed(2)}</p>
              </div>
            </div>
            <div className="w-full mt-3 bg-gray-50 rounded-lg p-2.5 text-center">
              <p className="text-[10px] text-ink-secondary leading-relaxed">
                Score = 0.55 × Rainfall Risk + 0.45 × Flood Probability
              </p>
            </div>
          </div>

          <div className="card p-5 lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-semibold text-ink">Hourly Rainfall Trend</h3>
                <p className="text-xs text-ink-secondary mt-0.5">24-hour forecast — Prototype Prediction</p>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-brand-500" />
                <span className="text-xs font-medium text-ink-secondary">Peak: 52 mm at 15:00</span>
              </div>
            </div>
            <HourlyTrendChart data={HOURLY_TREND} />
          </div>
        </div>

        {/* Early Warning Panel */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-ink flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-risk-high" />
              Active Early Warnings
            </h3>
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-ink-secondary bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              {soundEnabled ? 'Alert Sound On' : 'Enable Alert Sound'}
            </button>
          </div>
          <WarningBanner
            riskLevel="CRITICAL"
            location={`${DEMO_LOCATION.name}, ${DEMO_LOCATION.state}`}
            rainfall={140}
            floodProbability={82}
            recommendedAction="Prepare emergency response teams, monitor vulnerable areas, inspect drainage and evacuation routes, and maintain readiness for possible inundation."
            onAcknowledge={() => setAcknowledged(true)}
            acknowledged={acknowledged}
          />
        </div>

        {/* Active Alerts Summary + Quick Links */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="card p-5 lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-ink flex items-center gap-2">
                <Bell className="w-4 h-4 text-brand-500" />
                Recent Alerts
              </h3>
              <Link to="/alerts" className="text-xs font-medium text-brand-600 hover:text-brand-700 flex items-center gap-1">
                View All <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="space-y-2.5">
              {activeAlerts.map((alert) => (
                <div key={alert.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{
                        backgroundColor: alert.riskLevel === 'CRITICAL' ? '#B42318' : alert.riskLevel === 'HIGH' ? '#F04438' : '#F79009',
                        animation: alert.status === 'Active' ? 'pulse 2s infinite' : undefined,
                      }}
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink truncate">{alert.location}</p>
                      <p className="text-xs text-ink-secondary">{alert.id} • {alert.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="text-right hidden sm:block">
                      <p className="text-xs font-semibold text-ink tabular-nums">{alert.rainfall} mm</p>
                      <p className="text-[10px] text-ink-secondary">{alert.floodProbability}% flood</p>
                    </div>
                    <span
                      className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase text-white"
                      style={{
                        backgroundColor: alert.riskLevel === 'CRITICAL' ? '#B42318' : alert.riskLevel === 'HIGH' ? '#F04438' : '#F79009',
                      }}
                    >
                      {alert.riskLevel}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-5">
            <h3 className="text-sm font-semibold text-ink mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4 text-brand-500" />
              Quick Actions
            </h3>
            <div className="space-y-2">
              <Link to="/risk-assessment" className="flex items-center justify-between p-3 bg-gray-50 hover:bg-brand-50 rounded-lg transition-colors group">
                <span className="text-sm font-medium text-ink">Run Risk Assessment</span>
                <ArrowRight className="w-4 h-4 text-ink-secondary group-hover:text-brand-600" />
              </Link>
              <Link to="/map" className="flex items-center justify-between p-3 bg-gray-50 hover:bg-brand-50 rounded-lg transition-colors group">
                <span className="text-sm font-medium text-ink">View Risk Map</span>
                <ArrowRight className="w-4 h-4 text-ink-secondary group-hover:text-brand-600" />
              </Link>
              <Link to="/rainfall" className="flex items-center justify-between p-3 bg-gray-50 hover:bg-brand-50 rounded-lg transition-colors group">
                <span className="text-sm font-medium text-ink">Rainfall Forecast</span>
                <ArrowRight className="w-4 h-4 text-ink-secondary group-hover:text-brand-600" />
              </Link>
              <Link to="/architecture" className="flex items-center justify-between p-3 bg-gray-50 hover:bg-brand-50 rounded-lg transition-colors group">
                <span className="text-sm font-medium text-ink">System Architecture</span>
                <ArrowRight className="w-4 h-4 text-ink-secondary group-hover:text-brand-600" />
              </Link>
            </div>
          </div>
        </div>
      </PageHeader>
    </>
  );
}
