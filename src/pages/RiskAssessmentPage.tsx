import { useState } from 'react';
import {
  ShieldAlert, MapPin, CloudRain, Waves, Loader2,
  CheckCircle2, Brain, Zap, AlertCircle,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import RiskGauge from '@/components/ui/RiskGauge';
import StatusBadge from '@/components/ui/StatusBadge';
import WarningBanner from '@/components/ui/WarningBanner';
import {
  runIntegratedRiskAssessment,
  ASSESSMENT_STEPS,
  DEFAULT_RAINFALL_INPUT,
  DEFAULT_FLOOD_INPUT,
} from '@/services/api';
import {
  RainfallAssessmentInput,
  FloodAssessmentInput,
  IntegratedRiskResult,
  rainfallCategoryFromMm,
} from '@/types';
import { RAINFALL_CATEGORIES } from '@/data/demoData';

type AssessmentState = 'idle' | 'processing' | 'complete';

export default function RiskAssessmentPage() {
  const [rainfallInput, setRainfallInput] = useState<RainfallAssessmentInput>(DEFAULT_RAINFALL_INPUT);
  const [floodInput, setFloodInput] = useState<FloodAssessmentInput>(DEFAULT_FLOOD_INPUT);
  const [state, setState] = useState<AssessmentState>('idle');
  const [currentStep, setCurrentStep] = useState(-1);
  const [result, setResult] = useState<IntegratedRiskResult | null>(null);

  const runAssessment = async () => {
    setState('processing');
    setResult(null);
    for (let i = 0; i < ASSESSMENT_STEPS.length; i++) {
      setCurrentStep(i);
      await new Promise((r) => setTimeout(r, 700));
    }
    const res = await runIntegratedRiskAssessment(rainfallInput, floodInput);
    setResult(res);
    setState('complete');
    setCurrentStep(-1);
  };

  const reset = () => {
    setState('idle');
    setResult(null);
    setCurrentStep(-1);
  };

  const updateRainfall = (field: keyof RainfallAssessmentInput, value: string | number) => {
    setRainfallInput((prev) => ({ ...prev, [field]: value }));
  };

  const updateFlood = (field: keyof FloodAssessmentInput, value: string | number) => {
    setFloodInput((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <PageHeader
      title="AI/ML Risk Assessment"
      subtitle="Assess rainfall and flood risk for a selected location."
    >
      <div className="mb-4 flex items-center gap-2">
        <span className="demo-badge">Prototype Demo Mode — ML backend not connected</span>
      </div>

      {/* Input Forms */}
      {state !== 'processing' && (
        <div className="space-y-4 mb-6">
          {/* Location & Weather Inputs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="card p-5">
              <h3 className="text-sm font-semibold text-ink mb-1 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-500" />
                Location & Weather Inputs
              </h3>
              <p className="text-xs text-ink-secondary mb-4">Rainfall prediction model inputs</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2">
                  <label className="label-text">Location</label>
                  <input
                    className="input-field"
                    value={rainfallInput.location}
                    onChange={(e) => updateRainfall('location', e.target.value)}
                  />
                </div>
                <div>
                  <label className="label-text">State</label>
                  <input className="input-field" value={rainfallInput.state} onChange={(e) => updateRainfall('state', e.target.value)} />
                </div>
                <div>
                  <label className="label-text">District</label>
                  <input className="input-field" value={rainfallInput.district} onChange={(e) => updateRainfall('district', e.target.value)} />
                </div>
                <div>
                  <label className="label-text">Latitude</label>
                  <input type="number" step="0.0001" className="input-field" value={rainfallInput.lat} onChange={(e) => updateRainfall('lat', parseFloat(e.target.value))} />
                </div>
                <div>
                  <label className="label-text">Longitude</label>
                  <input type="number" step="0.0001" className="input-field" value={rainfallInput.lng} onChange={(e) => updateRainfall('lng', parseFloat(e.target.value))} />
                </div>
                <div>
                  <label className="label-text">Avg Temp (°C)</label>
                  <input type="number" step="0.1" className="input-field" value={rainfallInput.avgTemp} onChange={(e) => updateRainfall('avgTemp', parseFloat(e.target.value))} />
                </div>
                <div>
                  <label className="label-text">Min Temp (°C)</label>
                  <input type="number" step="0.1" className="input-field" value={rainfallInput.minTemp} onChange={(e) => updateRainfall('minTemp', parseFloat(e.target.value))} />
                </div>
                <div>
                  <label className="label-text">Max Temp (°C)</label>
                  <input type="number" step="0.1" className="input-field" value={rainfallInput.maxTemp} onChange={(e) => updateRainfall('maxTemp', parseFloat(e.target.value))} />
                </div>
                <div>
                  <label className="label-text">Wind Speed (km/h)</label>
                  <input type="number" step="0.1" className="input-field" value={rainfallInput.windSpeed} onChange={(e) => updateRainfall('windSpeed', parseFloat(e.target.value))} />
                </div>
                <div>
                  <label className="label-text">Air Pressure (hPa)</label>
                  <input type="number" className="input-field" value={rainfallInput.airPressure} onChange={(e) => updateRainfall('airPressure', parseFloat(e.target.value))} />
                </div>
                <div>
                  <label className="label-text">Elevation (m)</label>
                  <input type="number" className="input-field" value={rainfallInput.elevation} onChange={(e) => updateRainfall('elevation', parseFloat(e.target.value))} />
                </div>
                <div>
                  <label className="label-text">Recent Rainfall (mm)</label>
                  <input type="number" className="input-field" value={rainfallInput.recentRainfall} onChange={(e) => updateRainfall('recentRainfall', parseFloat(e.target.value))} />
                </div>
                <div>
                  <label className="label-text">Previous Rainfall (mm)</label>
                  <input type="number" className="input-field" value={rainfallInput.previousRainfall} onChange={(e) => updateRainfall('previousRainfall', parseFloat(e.target.value))} />
                </div>
                <div>
                  <label className="label-text">Month</label>
                  <input type="number" min={1} max={12} className="input-field" value={rainfallInput.month} onChange={(e) => updateRainfall('month', parseInt(e.target.value))} />
                </div>
                <div>
                  <label className="label-text">Day of Year</label>
                  <input type="number" min={1} max={365} className="input-field" value={rainfallInput.dayOfYear} onChange={(e) => updateRainfall('dayOfYear', parseInt(e.target.value))} />
                </div>
              </div>
            </div>

            <div className="card p-5">
              <h3 className="text-sm font-semibold text-ink mb-1 flex items-center gap-2">
                <Waves className="w-4 h-4 text-brand-500" />
                Flood-Related Inputs
              </h3>
              <p className="text-xs text-ink-secondary mb-4">Flood prediction model inputs</p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="label-text">Rainfall (mm)</label>
                  <input type="number" className="input-field" value={floodInput.rainfall} onChange={(e) => updateFlood('rainfall', parseFloat(e.target.value))} />
                </div>
                <div>
                  <label className="label-text">Temperature (°C)</label>
                  <input type="number" step="0.1" className="input-field" value={floodInput.temperature} onChange={(e) => updateFlood('temperature', parseFloat(e.target.value))} />
                </div>
                <div>
                  <label className="label-text">Humidity (%)</label>
                  <input type="number" className="input-field" value={floodInput.humidity} onChange={(e) => updateFlood('humidity', parseFloat(e.target.value))} />
                </div>
                <div>
                  <label className="label-text">River Discharge (m³/s)</label>
                  <input type="number" className="input-field" value={floodInput.riverDischarge} onChange={(e) => updateFlood('riverDischarge', parseFloat(e.target.value))} />
                </div>
                <div>
                  <label className="label-text">Water Level (m)</label>
                  <input type="number" step="0.1" className="input-field" value={floodInput.waterLevel} onChange={(e) => updateFlood('waterLevel', parseFloat(e.target.value))} />
                </div>
                <div>
                  <label className="label-text">Elevation (m)</label>
                  <input type="number" className="input-field" value={floodInput.elevation} onChange={(e) => updateFlood('elevation', parseFloat(e.target.value))} />
                </div>
                <div>
                  <label className="label-text">Land Cover</label>
                  <select className="input-field" value={floodInput.landCover} onChange={(e) => updateFlood('landCover', e.target.value)}>
                    <option>Urban</option>
                    <option>Rural</option>
                    <option>Agricultural</option>
                    <option>Forest</option>
                  </select>
                </div>
                <div>
                  <label className="label-text">Soil Type</label>
                  <select className="input-field" value={floodInput.soilType} onChange={(e) => updateFlood('soilType', e.target.value)}>
                    <option>Alluvial</option>
                    <option>Clay</option>
                    <option>Sandy</option>
                    <option>Loam</option>
                  </select>
                </div>
                <div>
                  <label className="label-text">Population Density</label>
                  <input type="number" className="input-field" value={floodInput.populationDensity} onChange={(e) => updateFlood('populationDensity', parseFloat(e.target.value))} />
                </div>
                <div>
                  <label className="label-text">Infrastructure</label>
                  <select className="input-field" value={floodInput.infrastructure} onChange={(e) => updateFlood('infrastructure', e.target.value)}>
                    <option>Moderate</option>
                    <option>Good</option>
                    <option>Poor</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="label-text">Historical Floods (count)</label>
                  <input type="number" min={0} className="input-field" value={floodInput.historicalFloods} onChange={(e) => updateFlood('historicalFloods', parseInt(e.target.value))} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={runAssessment} className="btn-primary">
              <Brain className="w-4 h-4" />
              Run AI/ML Risk Assessment
            </button>
            <span className="text-xs text-ink-secondary">Pre-filled with Barasat demo data. Adjust values to see different outcomes.</span>
          </div>
        </div>
      )}

      {/* Processing State */}
      {state === 'processing' && (
        <div className="card p-8 max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-50">
              <Loader2 className="w-5 h-5 text-brand-500 animate-spin" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-ink">Processing Assessment</h3>
              <p className="text-xs text-ink-secondary">Running AI/ML prediction pipeline...</p>
            </div>
          </div>
          <div className="space-y-3">
            {ASSESSMENT_STEPS.map((step, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                  i < currentStep ? 'bg-emerald-50' : i === currentStep ? 'bg-brand-50' : 'bg-gray-50'
                }`}
              >
                {i < currentStep ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                ) : i === currentStep ? (
                  <Loader2 className="w-5 h-5 text-brand-500 animate-spin" />
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-gray-200" />
                )}
                <span className={`text-sm ${
                  i < currentStep ? 'text-emerald-900 font-medium' : i === currentStep ? 'text-ink font-medium' : 'text-ink-secondary'
                }`}>
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Results */}
      {state === 'complete' && result && (
        <div className="space-y-4 animate-slide-up">
          <div className="card p-4 bg-brand-50/50 border-brand-100">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <p className="text-sm font-medium text-ink">Assessment Complete — Prototype Demo Results</p>
              <button onClick={reset} className="ml-auto text-xs font-medium text-brand-600 hover:text-brand-700">
                Run New Assessment
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Risk Gauge */}
            <div className="card p-6 flex flex-col items-center justify-center">
              <RiskGauge score={result.integratedRiskScore} riskLevel={result.riskLevel} size={200} />
              <div className="w-full mt-4 pt-4 border-t border-gray-100 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-ink-secondary">Rainfall Risk Score</span>
                  <span className="font-semibold text-ink tabular-nums">{result.rainfallRiskScore.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-ink-secondary">Flood Probability</span>
                  <span className="font-semibold text-ink tabular-nums">{result.floodProbability}%</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-ink-secondary">Formula</span>
                  <span className="font-medium text-ink-secondary text-[10px]">0.55×R + 0.45×F</span>
                </div>
              </div>
            </div>

            {/* Prediction Results */}
            <div className="card p-5 lg:col-span-2">
              <h3 className="text-sm font-semibold text-ink mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4 text-brand-500" />
                Prediction Results
              </h3>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CloudRain className="w-4 h-4 text-brand-500" />
                    <span className="text-xs text-ink-secondary uppercase tracking-wide">Rainfall Prediction</span>
                  </div>
                  <p className="text-2xl font-bold text-ink tabular-nums">{result.rainfallPrediction} <span className="text-sm font-medium text-ink-secondary">mm</span></p>
                  <span
                    className="inline-block mt-2 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase text-white"
                    style={{ backgroundColor: RAINFALL_CATEGORIES.find((c) => c.category === result.rainfallCategory)?.color }}
                  >
                    {result.rainfallCategory}
                  </span>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Waves className="w-4 h-4 text-brand-500" />
                    <span className="text-xs text-ink-secondary uppercase tracking-wide">Flood Probability</span>
                  </div>
                  <p className="text-2xl font-bold text-ink tabular-nums">{result.floodProbability}<span className="text-sm font-medium text-ink-secondary">%</span></p>
                  <span className="inline-block mt-2 text-[10px] text-ink-secondary">Classification model output</span>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-ink-secondary uppercase tracking-wide">Integrated Risk</span>
                  <StatusBadge level={result.riskLevel} />
                </div>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold text-ink tabular-nums">{result.integratedRiskScore.toFixed(2)}</p>
                  <span className="text-sm text-ink-secondary">/ 1.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Warning */}
          <WarningBanner
            riskLevel={result.riskLevel}
            location={`${rainfallInput.location}, ${rainfallInput.state}`}
            rainfall={result.rainfallPrediction}
            floodProbability={result.floodProbability}
            recommendedAction={result.recommendedAction}
          />

          <div className="card p-4 bg-amber-50/50 border-amber-100">
            <div className="flex gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-900 leading-relaxed">
                These results are generated by the prototype's deterministic demo logic for demonstration purposes.
                In production, this button will call <code className="font-mono text-[11px] bg-amber-100 px-1 rounded">POST /api/predict/integrated-risk</code> to get real predictions from the XGBoost models via FastAPI.
              </p>
            </div>
          </div>
        </div>
      )}
    </PageHeader>
  );
}
