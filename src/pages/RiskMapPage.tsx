import { Map as MapIcon, MapPin } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import RiskMap from '@/components/ui/RiskMap';
import { RISK_LOCATIONS } from '@/data/demoData';

export default function RiskMapPage() {
  const points = RISK_LOCATIONS;

  return (
    <PageHeader
      title="Risk Map"
      subtitle="Geographic visualization of rainfall and flood risk across monitoring locations."
    >
      <div className="mb-4 flex items-center gap-2">
        <span className="demo-badge">Prototype Risk Visualization</span>
        <span className="text-xs text-ink-secondary">West Bengal monitoring region</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <RiskMap points={points} />
        </div>

        <div className="space-y-3">
          <div className="card p-4">
            <h3 className="text-sm font-semibold text-ink mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-500" />
              Monitoring Locations
            </h3>
            <div className="space-y-2">
              {points.map((point) => (
                <div key={point.id} className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg">
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-ink truncate">{point.location}</p>
                    <p className="text-xs text-ink-secondary truncate">{point.district}</p>
                  </div>
                  <span
                    className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase text-white shrink-0"
                    style={{
                      backgroundColor: point.riskLevel === 'CRITICAL' ? '#B42318' :
                        point.riskLevel === 'HIGH' ? '#F04438' :
                        point.riskLevel === 'MODERATE' ? '#F79009' : '#12B76A',
                    }}
                  >
                    {point.riskLevel}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-4 bg-blue-50/50 border-blue-100">
            <div className="flex gap-2.5">
              <MapIcon className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-medium text-ink mb-1">About This Map</p>
                <p className="text-xs text-ink-secondary leading-relaxed">
                  This is a prototype visualization showing demo risk points. In the production system,
                  this map will display real-time risk data from satellite, radar, and NWP model integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageHeader>
  );
}
