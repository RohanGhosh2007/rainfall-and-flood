import { Brain, CloudRain, Waves, BarChart3, Activity, Info, Database } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import FeatureImportanceChart from '@/components/ui/FeatureImportanceChart';
import { FEATURE_IMPORTANCE } from '@/data/demoData';

export default function ModelsPage() {
  return (
    <PageHeader
      title="Model Performance"
      subtitle="AI/ML model architecture, metrics, and feature importance analysis."
    >
      <div className="mb-4 flex items-center gap-2">
        <span className="demo-badge">Prototype — Model metrics will appear after evaluation</span>
      </div>

      {/* Model Architecture */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <div className="card p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-50">
              <CloudRain className="w-5 h-5 text-brand-500" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-ink">Rainfall Prediction Model</h3>
              <p className="text-xs text-ink-secondary">Regression model for continuous rainfall prediction</p>
            </div>
          </div>
          <div className="space-y-2.5">
            <div className="flex justify-between items-center py-2 border-b border-gray-50">
              <span className="text-xs text-ink-secondary">Algorithm</span>
              <span className="text-sm font-medium text-ink">XGBoost</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-50">
              <span className="text-xs text-ink-secondary">Model Class</span>
              <span className="text-sm font-medium text-ink font-mono">XGBRegressor</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-50">
              <span className="text-xs text-ink-secondary">Model File</span>
              <span className="text-sm font-mono text-ink">rainfall_model.joblib</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-50">
              <span className="text-xs text-ink-secondary">Target Variable</span>
              <span className="text-sm font-medium text-ink">Rainfall (mm)</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-xs text-ink-secondary">Task Type</span>
              <span className="text-sm font-medium text-ink">Regression</span>
            </div>
          </div>
        </div>

        <div className="card p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-50">
              <Waves className="w-5 h-5 text-brand-500" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-ink">Flood Prediction Model</h3>
              <p className="text-xs text-ink-secondary">Classification model for flood occurrence prediction</p>
            </div>
          </div>
          <div className="space-y-2.5">
            <div className="flex justify-between items-center py-2 border-b border-gray-50">
              <span className="text-xs text-ink-secondary">Algorithm</span>
              <span className="text-sm font-medium text-ink">XGBoost</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-50">
              <span className="text-xs text-ink-secondary">Model Class</span>
              <span className="text-sm font-medium text-ink font-mono">XGBClassifier</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-50">
              <span className="text-xs text-ink-secondary">Model File</span>
              <span className="text-sm font-mono text-ink">flood_model.joblib</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-50">
              <span className="text-xs text-ink-secondary">Target Variable</span>
              <span className="text-sm font-medium text-ink">Flood Occurred (Yes/No)</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-xs text-ink-secondary">Task Type</span>
              <span className="text-sm font-medium text-ink">Binary Classification</span>
            </div>
          </div>
        </div>
      </div>

      {/* Model Metrics — Not Available */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <div className="card p-5">
          <h3 className="text-sm font-semibold text-ink mb-4 flex items-center gap-2">
            <Activity className="w-4 h-4 text-brand-500" />
            Rainfall Model Metrics
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {['RMSE', 'MAE', 'R² Score', 'MAPE'].map((metric) => (
              <div key={metric} className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-xs text-ink-secondary uppercase tracking-wide mb-1">{metric}</p>
                <p className="text-xs text-ink-secondary italic">Available after evaluation</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-5">
          <h3 className="text-sm font-semibold text-ink mb-4 flex items-center gap-2">
            <Activity className="w-4 h-4 text-brand-500" />
            Flood Model Metrics
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {['Accuracy', 'Precision', 'Recall', 'F1 Score'].map((metric) => (
              <div key={metric} className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-xs text-ink-secondary uppercase tracking-wide mb-1">{metric}</p>
                <p className="text-xs text-ink-secondary italic">Available after evaluation</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Importance */}
      <div className="mb-6">
        <FeatureImportanceChart data={FEATURE_IMPORTANCE} />
      </div>

      {/* Info Banner */}
      <div className="card p-4 bg-amber-50/50 border-amber-100">
        <div className="flex gap-2.5">
          <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-900 leading-relaxed space-y-1">
            <p>
              The trained prototype models (<code className="font-mono text-[11px] bg-amber-100 px-1 rounded">rainfall_model.joblib</code>,
              <code className="font-mono text-[11px] bg-amber-100 px-1 rounded">flood_model.joblib</code>) currently exist as local files.
              They will be served by the FastAPI backend in the production system.
            </p>
            <p>
              Model metrics (RMSE, MAE, R², Accuracy, Precision, Recall, F1) are not fabricated for the prototype.
              They will appear here after formal model evaluation on the backend.
            </p>
          </div>
        </div>
      </div>

      <div className="card p-4 bg-blue-50/50 border-blue-100">
        <div className="flex gap-2.5">
          <Database className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
          <p className="text-xs text-ink-secondary leading-relaxed">
            In production, model metrics will be retrieved via
            <code className="font-mono text-[11px] bg-blue-100 px-1 rounded mx-1">GET /api/model/rainfall-metrics</code>,
            <code className="font-mono text-[11px] bg-blue-100 px-1 rounded mx-1">GET /api/model/flood-metrics</code>,
            and
            <code className="font-mono text-[11px] bg-blue-100 px-1 rounded mx-1">GET /api/model/feature-importance</code>.
          </p>
        </div>
      </div>
    </PageHeader>
  );
}
