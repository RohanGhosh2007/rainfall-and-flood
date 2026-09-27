export type RiskLevel = 'LOW' | 'MODERATE' | 'HIGH' | 'CRITICAL';

export type AlertStatus = 'Active' | 'Acknowledged' | 'Resolved';

export type RainfallCategory =
  | 'LIGHT'
  | 'MODERATE'
  | 'HEAVY'
  | 'VERY HEAVY'
  | 'EXTREMELY HEAVY';

export type ComponentStatus = 'operational' | 'prototype' | 'not-connected' | 'planned';

export interface RiskPoint {
  id: string;
  location: string;
  district: string;
  state: string;
  lat: number;
  lng: number;
  x: number;
  y: number;
  rainfall: number;
  floodProbability: number;
  riskScore: number;
  riskLevel: RiskLevel;
  lastAssessment: string;
}

export interface AlertRecord {
  id: string;
  location: string;
  time: string;
  rainfall: number;
  floodProbability: number;
  riskScore: number;
  riskLevel: RiskLevel;
  status: AlertStatus;
}

export interface HistoryRecord {
  date: string;
  location: string;
  rainfall: number;
  floodProbability: number;
  riskScore: number;
  riskLevel: RiskLevel;
  status: AlertStatus;
}

export interface ForecastDay {
  day: string;
  rainfall: number;
  category: RainfallCategory;
}

export interface WeatherIndicator {
  label: string;
  value: string;
  unit: string;
  icon: string;
}

export interface FeatureImportance {
  feature: string;
  importance: number;
}

export interface DatasetField {
  name: string;
  type: string;
  description: string;
}

export interface SystemComponent {
  name: string;
  status: ComponentStatus;
  label: string;
}

export interface RainfallAssessmentInput {
  location: string;
  state: string;
  district: string;
  lat: number;
  lng: number;
  avgTemp: number;
  minTemp: number;
  maxTemp: number;
  windSpeed: number;
  airPressure: number;
  elevation: number;
  recentRainfall: number;
  previousRainfall: number;
  month: number;
  dayOfYear: number;
}

export interface FloodAssessmentInput {
  rainfall: number;
  temperature: number;
  humidity: number;
  riverDischarge: number;
  waterLevel: number;
  elevation: number;
  landCover: string;
  soilType: string;
  populationDensity: number;
  infrastructure: string;
  historicalFloods: number;
}

export interface IntegratedRiskResult {
  rainfallPrediction: number;
  rainfallCategory: RainfallCategory;
  floodProbability: number;
  rainfallRiskScore: number;
  integratedRiskScore: number;
  riskLevel: RiskLevel;
  recommendedAction: string;
}

export function riskLevelFromScore(score: number): RiskLevel {
  if (score >= 0.75) return 'CRITICAL';
  if (score >= 0.55) return 'HIGH';
  if (score >= 0.30) return 'MODERATE';
  return 'LOW';
}

export function rainfallCategoryFromMm(mm: number): RainfallCategory {
  if (mm >= 204.5) return 'EXTREMELY HEAVY';
  if (mm >= 115.6) return 'VERY HEAVY';
  if (mm >= 64.5) return 'HEAVY';
  if (mm >= 15.6) return 'MODERATE';
  return 'LIGHT';
}

export const RISK_COLORS: Record<RiskLevel, string> = {
  LOW: '#12B76A',
  MODERATE: '#F79009',
  HIGH: '#F04438',
  CRITICAL: '#B42318',
};

export const RISK_BG_CLASSES: Record<RiskLevel, string> = {
  LOW: 'bg-risk-low/10 text-risk-low border-risk-low/20',
  MODERATE: 'bg-risk-moderate/10 text-risk-moderate border-risk-moderate/20',
  HIGH: 'bg-risk-high/10 text-risk-high border-risk-high/20',
  CRITICAL: 'bg-risk-critical/10 text-risk-critical border-risk-critical/20',
};

export const RISK_SOLID_CLASSES: Record<RiskLevel, string> = {
  LOW: 'bg-risk-low text-white',
  MODERATE: 'bg-risk-moderate text-white',
  HIGH: 'bg-risk-high text-white',
  CRITICAL: 'bg-risk-critical text-white',
};
