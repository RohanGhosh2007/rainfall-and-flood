import type {
  IntegratedRiskResult,
  RainfallAssessmentInput,
  FloodAssessmentInput,
  RiskPoint,
  AlertRecord,
  HistoryRecord,
  ForecastDay,
  FeatureImportance,
  SystemComponent,
} from '@/types';
import { riskLevelFromScore, rainfallCategoryFromMm } from '@/types';
import {
  RISK_LOCATIONS,
  ALERTS,
  HISTORY,
  FORECAST_7DAY,
  FEATURE_IMPORTANCE,
  SYSTEM_COMPONENTS,
  DEMO_LOCATION,
} from '@/data/demoData';

const SIMULATED_LATENCY = 0;

function delay<T>(value: T, _ms?: number): Promise<T> {
  return Promise.resolve(value);
}

export interface DashboardSummary {
  currentRisk: string;
  currentRiskLevel: 'CRITICAL' | 'HIGH' | 'MODERATE' | 'LOW';
  predictedRainfall: number;
  floodProbability: number;
  activeWarnings: number;
  monitoringLocations: number;
  integratedRiskScore: number;
  location: string;
}

export function fetchDashboardSummary(): Promise<DashboardSummary> {
  return delay({
    currentRisk: 'CRITICAL',
    currentRiskLevel: 'CRITICAL',
    predictedRainfall: 140,
    floodProbability: 82,
    activeWarnings: 3,
    monitoringLocations: 24,
    integratedRiskScore: 0.81,
    location: `${DEMO_LOCATION.name}, ${DEMO_LOCATION.state}`,
  });
}

export function fetchRiskPoints(): Promise<RiskPoint[]> {
  return delay(RISK_LOCATIONS);
}

export function fetchAlerts(): Promise<AlertRecord[]> {
  return delay(ALERTS);
}

export function fetchHistory(): Promise<HistoryRecord[]> {
  return delay(HISTORY);
}

export function fetchForecast(): Promise<ForecastDay[]> {
  return delay(FORECAST_7DAY);
}

export function fetchFeatureImportance(): Promise<FeatureImportance[]> {
  return delay(FEATURE_IMPORTANCE);
}

export function fetchSystemStatus(): Promise<SystemComponent[]> {
  return delay(SYSTEM_COMPONENTS);
}

export interface PredictionStep {
  label: string;
}

export const ASSESSMENT_STEPS: PredictionStep[] = [
  { label: 'Analyzing weather conditions...' },
  { label: 'Estimating rainfall...' },
  { label: 'Assessing flood probability...' },
  { label: 'Calculating integrated risk...' },
];

function computeRainfallRiskScore(rainfall: number): number {
  const score = Math.min(1, Math.max(0, (rainfall - 20) / 180));
  return Math.round(score * 100) / 100;
}

function computeFloodProbability(rainfall: number, waterLevel: number, riverDischarge: number, historicalFloods: number): number {
  const rainfallFactor = Math.min(1, rainfall / 200);
  const waterFactor = Math.min(1, waterLevel / 12);
  const riverFactor = Math.min(1, riverDischarge / 3000);
  const histFactor = Math.min(1, historicalFloods / 5);
  const prob = 0.35 * rainfallFactor + 0.25 * waterFactor + 0.25 * riverFactor + 0.15 * histFactor;
  return Math.round(prob * 100);
}

function getRecommendedAction(level: string): string {
  switch (level) {
    case 'CRITICAL':
      return 'Prepare emergency response teams, monitor vulnerable areas, inspect drainage and evacuation routes, and maintain readiness for possible inundation.';
    case 'HIGH':
      return 'Alert district administration, pre-position response teams, monitor river levels and drainage, and prepare evacuation plans for low-lying areas.';
    case 'MODERATE':
      return 'Monitor weather updates, check drainage systems, inform field teams, and review contingency plans for vulnerable areas.';
    case 'LOW':
      return 'Continue routine monitoring. No immediate action required, but maintain awareness of changing weather conditions.';
    default:
      return 'Continue routine monitoring.';
  }
}

export function runIntegratedRiskAssessment(
  rainfallInput: RainfallAssessmentInput,
  floodInput: FloodAssessmentInput,
): Promise<IntegratedRiskResult> {
  const rainfallPrediction = Math.round(rainfallInput.recentRainfall * 0.6 + rainfallInput.previousRainfall * 0.4);
  const floodProbability = computeFloodProbability(
    floodInput.rainfall,
    floodInput.waterLevel,
    floodInput.riverDischarge,
    floodInput.historicalFloods,
  );
  const rainfallRiskScore = computeRainfallRiskScore(rainfallPrediction);
  const integratedRiskScore = Math.round((0.55 * rainfallRiskScore + 0.45 * (floodProbability / 100)) * 100) / 100;
  const riskLevel = riskLevelFromScore(integratedRiskScore);

  return delay({
    rainfallPrediction,
    rainfallCategory: rainfallCategoryFromMm(rainfallPrediction),
    floodProbability,
    rainfallRiskScore,
    integratedRiskScore,
    riskLevel,
    recommendedAction: getRecommendedAction(riskLevel),
  }, SIMULATED_LATENCY);
}

export const DEFAULT_RAINFALL_INPUT: RainfallAssessmentInput = {
  location: 'Barasat',
  state: 'West Bengal',
  district: 'North 24 Parganas',
  lat: 22.7239,
  lng: 88.4819,
  avgTemp: 28.4,
  minTemp: 25.1,
  maxTemp: 31.8,
  windSpeed: 18.2,
  airPressure: 996,
  elevation: 12,
  recentRainfall: 85,
  previousRainfall: 55,
  month: 9,
  dayOfYear: 263,
};

export const DEFAULT_FLOOD_INPUT: FloodAssessmentInput = {
  rainfall: 140,
  temperature: 28.4,
  humidity: 88,
  riverDischarge: 2450,
  waterLevel: 7.8,
  elevation: 12,
  landCover: 'Urban',
  soilType: 'Alluvial',
  populationDensity: 6500,
  infrastructure: 'Moderate',
  historicalFloods: 4,
};
