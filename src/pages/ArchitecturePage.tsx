import {
  Satellite, Radio, CloudRain, Server, Database,
  Brain, ShieldAlert, Bell, Users, Building2, Waves,
  ArrowDown, Layers, Cpu, GitBranch, Zap,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { SYSTEM_COMPONENTS } from '@/data/demoData';

function StatusDot({ status }: { status: string }) {
  const colors: Record<string, string> = {
    operational: '#12B76A',
    prototype: '#F79009',
    'not-connected': '#667085',
    planned: '#155EEF',
  };
  return <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: colors[status] }} />;
}

function PipelineLayer({
  title,
  subtitle,
  items,
  color,
  icon: Icon,
  badge,
}: {
  title: string;
  subtitle?: string;
  items: { label: string; icon: any; future?: boolean }[];
  color: string;
  icon: any;
  badge?: { text: string; type: 'current' | 'future' };
}) {
  return (
    <div className="card p-4" style={{ borderTopColor: color, borderTopWidth: 3 }}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg" style={{ backgroundColor: `${color}15` }}>
            <Icon className="w-4 h-4" style={{ color }} />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-ink">{title}</h3>
            {subtitle && <p className="text-xs text-ink-secondary">{subtitle}</p>}
          </div>
        </div>
        {badge && (
          <span className={badge.type === 'current' ? 'proto-badge' : 'future-badge'}>
            {badge.text}
          </span>
        )}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {items.map((item) => (
          <div
            key={item.label}
            className={`flex items-center gap-2 p-2.5 rounded-lg border ${
              item.future ? 'bg-blue-50/30 border-blue-100' : 'bg-gray-50 border-gray-100'
            }`}
          >
            <item.icon className={`w-4 h-4 ${item.future ? 'text-brand-400' : 'text-ink-secondary'}`} />
            <span className={`text-xs font-medium ${item.future ? 'text-brand-600' : 'text-ink'}`}>
              {item.label}
              {item.future && <span className="ml-1 text-[9px] text-brand-400">(Future)</span>}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ArchitecturePage() {
  return (
    <PageHeader
      title="System Architecture"
      subtitle="End-to-end pipeline from data sources to early warning and citizen alerts."
    >
      <div className="mb-4 flex items-center gap-2">
        <span className="proto-badge">Current Prototype: Weather + Flood Dataset + XGBoost</span>
        <span className="future-badge">Future: Satellite + Radar + NWP</span>
      </div>

      {/* Pipeline Diagram */}
      <div className="space-y-2 mb-6">
        {/* Data Sources */}
        <PipelineLayer
          title="Data Sources"
          subtitle="Environmental data inputs for the prediction pipeline"
          color="#155EEF"
          icon={Layers}
          items={[
            { label: 'Satellite', icon: Satellite, future: true },
            { label: 'Radar', icon: Radio, future: true },
            { label: 'Observational Weather', icon: CloudRain },
            { label: 'NWP Models', icon: Server, future: true },
          ]}
          badge={{ text: 'Prototype uses Weather data', type: 'current' }}
        />

        <div className="flex justify-center">
          <ArrowDown className="w-5 h-5 text-ink-secondary" />
        </div>

        {/* Data Processing */}
        <PipelineLayer
          title="Data Processing"
          subtitle="Preparation and feature engineering"
          color="#0E4ED1"
          icon={GitBranch}
          items={[
            { label: 'Data Cleaning', icon: Database },
            { label: 'Feature Engineering', icon: Cpu },
            { label: 'Spatial-Temporal Alignment', icon: Layers },
            { label: 'Data Validation', icon: Server },
          ]}
        />

        <div className="flex justify-center">
          <ArrowDown className="w-5 h-5 text-ink-secondary" />
        </div>

        {/* AI/ML Engine */}
        <PipelineLayer
          title="AI / ML Engine"
          subtitle="XGBoost models for rainfall and flood prediction"
          color="#093088"
          icon={Brain}
          items={[
            { label: 'Rainfall Prediction (XGBRegressor)', icon: CloudRain },
            { label: 'Flood Prediction (XGBClassifier)', icon: Waves },
          ]}
          badge={{ text: 'Prototype', type: 'current' }}
        />

        <div className="flex justify-center">
          <ArrowDown className="w-5 h-5 text-ink-secondary" />
        </div>

        {/* Risk Engine */}
        <PipelineLayer
          title="Risk Engine"
          subtitle="Integration of rainfall and flood predictions"
          color="#B42318"
          icon={ShieldAlert}
          items={[
            { label: 'Rainfall Risk Score', icon: CloudRain },
            { label: 'Flood Probability', icon: Waves },
            { label: 'Integrated Risk Score', icon: Zap },
            { label: '0.55×R + 0.45×F', icon: Cpu },
          ]}
        />

        <div className="flex justify-center">
          <ArrowDown className="w-5 h-5 text-ink-secondary" />
        </div>

        {/* Early Warning Engine */}
        <PipelineLayer
          title="Early Warning Engine"
          subtitle="Risk classification and alert generation"
          color="#7A271A"
          icon={Bell}
          items={[
            { label: 'LOW (0.00–0.29)', icon: ShieldAlert },
            { label: 'MODERATE (0.30–0.54)', icon: ShieldAlert },
            { label: 'HIGH (0.55–0.74)', icon: ShieldAlert },
            { label: 'CRITICAL (0.75–1.00)', icon: ShieldAlert },
          ]}
        />

        <div className="flex justify-center">
          <ArrowDown className="w-5 h-5 text-ink-secondary" />
        </div>

        {/* Users */}
        <PipelineLayer
          title="Users & Alert Channels"
          subtitle="Decision support and citizen alert distribution"
          color="#0B1F3A"
          icon={Users}
          items={[
            { label: 'Disaster Management Authorities', icon: Building2 },
            { label: 'IMD / Administration', icon: Server },
            { label: 'Emergency Response Teams', icon: ShieldAlert },
            { label: 'Citizen Alert Channels', icon: Bell },
          ]}
        />
      </div>

      {/* System Status */}
      <div className="card p-5 mb-6">
        <h3 className="text-sm font-semibold text-ink mb-4">System Status</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {SYSTEM_COMPONENTS.map((comp) => (
            <div key={comp.name} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <StatusDot status={comp.status} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-ink">{comp.name}</p>
                <p className="text-xs text-ink-secondary">{comp.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Current vs Future */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="card p-5 border-l-4" style={{ borderLeftColor: '#12B76A' }}>
          <h3 className="text-sm font-semibold text-ink mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Current Prototype
          </h3>
          <ul className="space-y-2 text-sm text-ink-secondary">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Weather / Rainfall Dataset (Indian Rainfall and Weather Prediction Dataset)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Flood Dataset (with flood occurrence labels)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              XGBoost models (XGBRegressor + XGBClassifier)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Integrated Risk Score computation
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Frontend dashboard with demo mode
            </li>
          </ul>
        </div>

        <div className="card p-5 border-l-4" style={{ borderLeftColor: '#155EEF' }}>
          <h3 className="text-sm font-semibold text-ink mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-500" />
            Future Integration
          </h3>
          <ul className="space-y-2 text-sm text-ink-secondary">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
              Satellite data integration (INSAT, etc.)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
              Radar data integration (Doppler Weather Radar)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
              NWP model data (WRF, GFS, IMD-GFS)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
              FastAPI backend with MySQL database
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
              Citizen SMS / mobile alert integration
            </li>
          </ul>
        </div>
      </div>
    </PageHeader>
  );
}
