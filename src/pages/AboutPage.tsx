import { CloudRain, Users, Target, Lightbulb, Award, Info } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { DEMO_LOCATION, DEMO_RAINFALL, DEMO_FLOOD_PROBABILITY, DEMO_RISK_SCORE } from '@/data/demoData';

export default function AboutPage() {
  return (
    <PageHeader
      title="About"
      subtitle="Project information and team details."
    >
      <div className="max-w-3xl space-y-4">
        {/* Project Header */}
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-navy">
              <CloudRain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-base font-bold text-ink">RAINWATCH AI</h3>
              <p className="text-xs text-ink-secondary uppercase tracking-wide">SIH 2026 Prototype by Syntax Squad</p>
            </div>
          </div>
          <h4 className="text-sm font-semibold text-ink mb-2">
            AI/ML-Based Integrated Heavy Rainfall Early Warning and Inundation Prediction System
          </h4>
          <p className="text-sm text-ink-secondary leading-relaxed">
            An integrated decision-support platform that combines rainfall prediction, flood-risk prediction
            and integrated risk assessment to support early warning and disaster response.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="card p-5">
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-4 h-4 text-brand-500" />
              <h3 className="text-sm font-semibold text-ink">Hackathon</h3>
            </div>
            <p className="text-sm text-ink">Smart India Hackathon 2026</p>
            <p className="text-xs text-ink-secondary mt-1">Government / Disaster Management Track</p>
          </div>

          <div className="card p-5">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-4 h-4 text-brand-500" />
              <h3 className="text-sm font-semibold text-ink">Team</h3>
            </div>
            <p className="text-sm text-ink">Syntax Squad</p>
            <p className="text-xs text-ink-secondary mt-1">SIH 2026 Participant Team</p>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="card p-5">
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-4 h-4 text-brand-500" />
            <h3 className="text-sm font-semibold text-ink">Problem Statement</h3>
          </div>
          <p className="text-sm text-ink-secondary leading-relaxed mb-3">
            "AI/ML-Based Integrated heavy rainfall Early Warning and Inundation Prediction System using
            Satellite, Radar, observational Weather and numerical weather prediction model data."
          </p>
          <p className="text-sm text-ink-secondary leading-relaxed">
            Early identification of heavy rainfall and possible inundation using multiple environmental data
            sources and AI/ML.
          </p>
        </div>

        {/* Solution */}
        <div className="card p-5">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="w-4 h-4 text-brand-500" />
            <h3 className="text-sm font-semibold text-ink">Solution</h3>
          </div>
          <p className="text-sm text-ink-secondary leading-relaxed">
            An integrated decision-support platform that combines rainfall prediction, flood-risk prediction
            and integrated risk assessment to support early warning and disaster response. The system uses
            XGBoost-based ML models to predict rainfall amounts and flood probability, then combines them
            into an integrated risk score that drives early warnings for disaster management authorities.
          </p>
        </div>

        {/* Demo Data Summary */}
        <div className="card p-5">
          <div className="flex items-center gap-2 mb-3">
            <Info className="w-4 h-4 text-brand-500" />
            <h3 className="text-sm font-semibold text-ink">Demo Scenario</h3>
          </div>
          <p className="text-xs text-ink-secondary mb-3">
            The prototype uses a deterministic demo scenario for presentation purposes:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <p className="text-[10px] text-ink-secondary uppercase tracking-wide">Location</p>
              <p className="text-sm font-bold text-ink mt-1">{DEMO_LOCATION.name}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <p className="text-[10px] text-ink-secondary uppercase tracking-wide">Rainfall</p>
              <p className="text-sm font-bold text-ink mt-1 tabular-nums">{DEMO_RAINFALL} mm</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <p className="text-[10px] text-ink-secondary uppercase tracking-wide">Flood Prob.</p>
              <p className="text-sm font-bold text-ink mt-1 tabular-nums">{DEMO_FLOOD_PROBABILITY}%</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <p className="text-[10px] text-ink-secondary uppercase tracking-wide">Risk</p>
              <p className="text-sm font-bold text-risk-critical mt-1">CRITICAL</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="card p-4 bg-amber-50/50 border-amber-100">
          <div className="flex gap-2.5">
            <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-900 leading-relaxed">
              This is an SIH 2026 prototype for demonstration purposes. It is not a currently deployed government
              system. Satellite, radar, and NWP data integration is planned for the future production system.
              All values shown are prototype demo data, not live government warning data.
            </p>
          </div>
        </div>
      </div>
    </PageHeader>
  );
}
