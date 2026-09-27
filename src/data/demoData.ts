import type {
  RiskPoint,
  AlertRecord,
  HistoryRecord,
  ForecastDay,
  WeatherIndicator,
  FeatureImportance,
  DatasetField,
  SystemComponent,
} from '@/types';

export const DEMO_LOCATION = {
  name: 'Barasat',
  district: 'North 24 Parganas',
  state: 'West Bengal',
  lat: 22.7239,
  lng: 88.4819,
};

export const DEMO_RAINFALL = 140;
export const DEMO_FLOOD_PROBABILITY = 82;
export const DEMO_RISK_SCORE = 0.81;
export const DEMO_RISK_LEVEL = 'CRITICAL' as const;

export const RISK_WEIGHTS = {
  rainfall: 0.55,
  flood: 0.45,
};

export const RISK_THRESHOLDS = [
  { level: 'LOW', min: 0.0, max: 0.29, color: '#12B76A' },
  { level: 'MODERATE', min: 0.3, max: 0.54, color: '#F79009' },
  { level: 'HIGH', min: 0.55, max: 0.74, color: '#F04438' },
  { level: 'CRITICAL', min: 0.75, max: 1.0, color: '#B42318' },
];

export const RISK_LOCATIONS: RiskPoint[] = [
  {
    id: 'barasat',
    location: 'Barasat',
    district: 'North 24 Parganas',
    state: 'West Bengal',
    lat: 22.7239,
    lng: 88.4819,
    x: 62,
    y: 45,
    rainfall: 140,
    floodProbability: 82,
    riskScore: 0.81,
    riskLevel: 'CRITICAL',
    lastAssessment: '2026-09-20 08:30',
  },
  {
    id: 'kolkata',
    location: 'Kolkata',
    district: 'Kolkata',
    state: 'West Bengal',
    lat: 22.5726,
    lng: 88.3639,
    x: 55,
    y: 50,
    rainfall: 96,
    floodProbability: 68,
    riskScore: 0.64,
    riskLevel: 'HIGH',
    lastAssessment: '2026-09-20 08:25',
  },
  {
    id: 'howrah',
    location: 'Howrah',
    district: 'Howrah',
    state: 'West Bengal',
    lat: 22.5958,
    lng: 88.2636,
    x: 50,
    y: 52,
    rainfall: 78,
    floodProbability: 54,
    riskScore: 0.52,
    riskLevel: 'MODERATE',
    lastAssessment: '2026-09-20 08:20',
  },
  {
    id: 'hooghly',
    location: 'Hooghly',
    district: 'Hooghly',
    state: 'West Bengal',
    lat: 22.9018,
    lng: 88.3882,
    x: 48,
    y: 40,
    rainfall: 45,
    floodProbability: 28,
    riskScore: 0.31,
    riskLevel: 'MODERATE',
    lastAssessment: '2026-09-20 08:15',
  },
  {
    id: 'n24parganas',
    location: 'North 24 Parganas',
    district: 'North 24 Parganas',
    state: 'West Bengal',
    lat: 22.5,
    lng: 88.5,
    x: 65,
    y: 38,
    rainfall: 112,
    floodProbability: 74,
    riskScore: 0.72,
    riskLevel: 'HIGH',
    lastAssessment: '2026-09-20 08:30',
  },
  {
    id: 's24parganas',
    location: 'South 24 Parganas',
    district: 'South 24 Parganas',
    state: 'West Bengal',
    lat: 22.2,
    lng: 88.4,
    x: 60,
    y: 62,
    rainfall: 28,
    floodProbability: 18,
    riskScore: 0.19,
    riskLevel: 'LOW',
    lastAssessment: '2026-09-20 08:10',
  },
];

export const ALERTS: AlertRecord[] = [
  {
    id: 'ALT-2026-091',
    location: 'Barasat, West Bengal',
    time: '2026-09-20 08:30',
    rainfall: 140,
    floodProbability: 82,
    riskScore: 0.81,
    riskLevel: 'CRITICAL',
    status: 'Active',
  },
  {
    id: 'ALT-2026-090',
    location: 'North 24 Parganas, West Bengal',
    time: '2026-09-20 08:30',
    rainfall: 112,
    floodProbability: 74,
    riskScore: 0.72,
    riskLevel: 'HIGH',
    status: 'Active',
  },
  {
    id: 'ALT-2026-089',
    location: 'Kolkata, West Bengal',
    time: '2026-09-20 08:25',
    rainfall: 96,
    floodProbability: 68,
    riskScore: 0.64,
    riskLevel: 'HIGH',
    status: 'Acknowledged',
  },
  {
    id: 'ALT-2026-088',
    location: 'Howrah, West Bengal',
    time: '2026-09-20 08:20',
    rainfall: 78,
    floodProbability: 54,
    riskScore: 0.52,
    riskLevel: 'MODERATE',
    status: 'Acknowledged',
  },
  {
    id: 'ALT-2026-087',
    location: 'Hooghly, West Bengal',
    time: '2026-09-20 08:15',
    rainfall: 45,
    floodProbability: 28,
    riskScore: 0.31,
    riskLevel: 'MODERATE',
    status: 'Resolved',
  },
  {
    id: 'ALT-2026-086',
    location: 'South 24 Parganas, West Bengal',
    time: '2026-09-20 08:10',
    rainfall: 28,
    floodProbability: 18,
    riskScore: 0.19,
    riskLevel: 'LOW',
    status: 'Resolved',
  },
];

export const HISTORY: HistoryRecord[] = [
  { date: '2026-09-20', location: 'Barasat', rainfall: 140, floodProbability: 82, riskScore: 0.81, riskLevel: 'CRITICAL', status: 'Active' },
  { date: '2026-09-20', location: 'Kolkata', rainfall: 96, floodProbability: 68, riskScore: 0.64, riskLevel: 'HIGH', status: 'Acknowledged' },
  { date: '2026-09-19', location: 'Barasat', rainfall: 88, floodProbability: 62, riskScore: 0.59, riskLevel: 'HIGH', status: 'Acknowledged' },
  { date: '2026-09-19', location: 'Howrah', rainfall: 52, floodProbability: 38, riskScore: 0.37, riskLevel: 'MODERATE', status: 'Resolved' },
  { date: '2026-09-18', location: 'Kolkata', rainfall: 64, floodProbability: 44, riskScore: 0.45, riskLevel: 'MODERATE', status: 'Resolved' },
  { date: '2026-09-18', location: 'Barasat', rainfall: 42, floodProbability: 22, riskScore: 0.25, riskLevel: 'LOW', status: 'Resolved' },
  { date: '2026-09-17', location: 'Hooghly', rainfall: 35, floodProbability: 16, riskScore: 0.18, riskLevel: 'LOW', status: 'Resolved' },
  { date: '2026-09-17', location: 'North 24 Parganas', rainfall: 58, floodProbability: 40, riskScore: 0.41, riskLevel: 'MODERATE', status: 'Resolved' },
  { date: '2026-09-16', location: 'Kolkata', rainfall: 72, floodProbability: 52, riskScore: 0.51, riskLevel: 'MODERATE', status: 'Resolved' },
  { date: '2026-09-16', location: 'Barasat', rainfall: 105, floodProbability: 76, riskScore: 0.70, riskLevel: 'HIGH', status: 'Resolved' },
  { date: '2026-09-15', location: 'Howrah', rainfall: 48, floodProbability: 30, riskScore: 0.32, riskLevel: 'MODERATE', status: 'Resolved' },
  { date: '2026-09-15', location: 'South 24 Parganas', rainfall: 22, floodProbability: 12, riskScore: 0.14, riskLevel: 'LOW', status: 'Resolved' },
];

export const FORECAST_7DAY: ForecastDay[] = [
  { day: 'Sep 20', rainfall: 140, category: 'VERY HEAVY' },
  { day: 'Sep 21', rainfall: 112, category: 'HEAVY' },
  { day: 'Sep 22', rainfall: 68, category: 'HEAVY' },
  { day: 'Sep 23', rainfall: 42, category: 'MODERATE' },
  { day: 'Sep 24', rainfall: 28, category: 'MODERATE' },
  { day: 'Sep 25', rainfall: 18, category: 'MODERATE' },
  { day: 'Sep 26', rainfall: 12, category: 'LIGHT' },
];

export const HOURLY_TREND = [
  { time: '00:00', rainfall: 8 },
  { time: '03:00', rainfall: 12 },
  { time: '06:00', rainfall: 22 },
  { time: '09:00', rainfall: 35 },
  { time: '12:00', rainfall: 48 },
  { time: '15:00', rainfall: 52 },
  { time: '18:00', rainfall: 38 },
  { time: '21:00', rainfall: 24 },
];

export const WEATHER_INDICATORS: WeatherIndicator[] = [
  { label: 'Temperature', value: '28.4', unit: '°C', icon: 'Thermometer' },
  { label: 'Humidity', value: '88', unit: '%', icon: 'Droplets' },
  { label: 'Wind Speed', value: '18.2', unit: 'km/h', icon: 'Wind' },
  { label: 'Air Pressure', value: '996', unit: 'hPa', icon: 'Gauge' },
];

export const FEATURE_IMPORTANCE: FeatureImportance[] = [
  { feature: 'Rainfall', importance: 0.32 },
  { feature: 'Water Level', importance: 0.24 },
  { feature: 'River Discharge', importance: 0.18 },
  { feature: 'Historical Floods', importance: 0.12 },
  { feature: 'Elevation', importance: 0.08 },
  { feature: 'Population Density', importance: 0.06 },
];

export const WEATHER_DATASET_FIELDS: DatasetField[] = [
  { name: 'date_of_record', type: 'date', description: 'Date of the weather observation' },
  { name: 'month', type: 'integer', description: 'Month (1–12)' },
  { name: 'season', type: 'string', description: 'Meteorological season' },
  { name: 'station_name', type: 'string', description: 'Name of the weather station' },
  { name: 'state', type: 'string', description: 'Indian state' },
  { name: 'district', type: 'string', description: 'District within the state' },
  { name: 'avg_temp', type: 'float', description: 'Average temperature (°C)' },
  { name: 'min_temp', type: 'float', description: 'Minimum temperature (°C)' },
  { name: 'max_temp', type: 'float', description: 'Maximum temperature (°C)' },
  { name: 'wind_speed', type: 'float', description: 'Wind speed (km/h)' },
  { name: 'air_pressure', type: 'float', description: 'Atmospheric pressure (hPa)' },
  { name: 'elevation', type: 'float', description: 'Elevation above sea level (m)' },
  { name: 'latitude', type: 'float', description: 'Latitude coordinate' },
  { name: 'longitude', type: 'float', description: 'Longitude coordinate' },
  { name: 'rainfall', type: 'float', description: 'Recorded rainfall (mm) — target variable' },
];

export const FLOOD_DATASET_FIELDS: DatasetField[] = [
  { name: 'Latitude', type: 'float', description: 'Latitude coordinate' },
  { name: 'Longitude', type: 'float', description: 'Longitude coordinate' },
  { name: 'Rainfall (mm)', type: 'float', description: 'Rainfall in millimeters' },
  { name: 'Temperature (°C)', type: 'float', description: 'Temperature at the location' },
  { name: 'Humidity (%)', type: 'float', description: 'Relative humidity percentage' },
  { name: 'River Discharge (m³/s)', type: 'float', description: 'Volume of water flowing per second' },
  { name: 'Water Level (m)', type: 'float', description: 'Water level above baseline' },
  { name: 'Elevation (m)', type: 'float', description: 'Elevation above sea level' },
  { name: 'Land Cover', type: 'string', description: 'Urban / Rural / Agricultural / Forest' },
  { name: 'Soil Type', type: 'string', description: 'Soil classification' },
  { name: 'Population Density', type: 'float', description: 'People per square kilometer' },
  { name: 'Infrastructure', type: 'string', description: 'Infrastructure quality rating' },
  { name: 'Historical Floods', type: 'integer', description: 'Number of past flood events' },
  { name: 'Flood Occurred', type: 'boolean', description: 'Target variable — whether flood occurred' },
];

export const WEATHER_DATASET_PREVIEW = [
  { date: '2024-07-15', station: 'Alipore', state: 'West Bengal', district: 'Kolkata', avg_temp: 29.5, rainfall: 78.2 },
  { date: '2024-07-16', station: 'Alipore', state: 'West Bengal', district: 'Kolkata', avg_temp: 28.8, rainfall: 52.4 },
  { date: '2024-07-17', station: 'Barrackpore', state: 'West Bengal', district: 'North 24 Parganas', avg_temp: 28.2, rainfall: 95.6 },
  { date: '2024-07-18', station: 'Barrackpore', state: 'West Bengal', district: 'North 24 Parganas', avg_temp: 27.9, rainfall: 112.0 },
  { date: '2024-07-19', station: 'Dumdum', state: 'West Bengal', district: 'North 24 Parganas', avg_temp: 28.5, rainfall: 64.3 },
];

export const FLOOD_DATASET_PREVIEW = [
  { lat: 22.72, lng: 88.48, rainfall: 140, temp: 28.4, humidity: 88, river_discharge: 2450, water_level: 7.8, flood: 'Yes' },
  { lat: 22.57, lng: 88.36, rainfall: 96, temp: 28.1, humidity: 84, river_discharge: 1820, water_level: 6.2, flood: 'Yes' },
  { lat: 22.60, lng: 88.26, rainfall: 78, temp: 27.8, humidity: 80, river_discharge: 1450, water_level: 5.4, flood: 'No' },
  { lat: 22.90, lng: 88.39, rainfall: 45, temp: 28.0, humidity: 76, river_discharge: 980, water_level: 3.8, flood: 'No' },
  { lat: 22.20, lng: 88.40, rainfall: 28, temp: 28.6, humidity: 72, river_discharge: 620, water_level: 2.1, flood: 'No' },
];

export const RAINFALL_DISTRIBUTION = [
  { range: '0–15.5', category: 'Light', count: 4200 },
  { range: '15.6–64.4', category: 'Moderate', count: 2800 },
  { range: '64.5–115.5', category: 'Heavy', count: 1200 },
  { range: '115.6–204.4', category: 'Very Heavy', count: 450 },
  { range: '204.5+', category: 'Extremely Heavy', count: 120 },
];

export const SYSTEM_COMPONENTS: SystemComponent[] = [
  { name: 'Frontend', status: 'operational', label: 'Operational' },
  { name: 'ML Model', status: 'prototype', label: 'Prototype / Local' },
  { name: 'Backend', status: 'not-connected', label: 'Not Connected' },
  { name: 'Database', status: 'not-connected', label: 'Not Connected' },
  { name: 'Satellite', status: 'planned', label: 'Planned Integration' },
  { name: 'Radar', status: 'planned', label: 'Planned Integration' },
  { name: 'NWP', status: 'planned', label: 'Planned Integration' },
];

export const RAINFALL_CATEGORIES = [
  { range: '0–15.5 mm', category: 'LIGHT', color: '#12B76A' },
  { range: '15.6–64.4 mm', category: 'MODERATE', color: '#84A9FF' },
  { range: '64.5–115.5 mm', category: 'HEAVY', color: '#F79009' },
  { range: '115.6–204.4 mm', category: 'VERY HEAVY', color: '#F04438' },
  { range: '204.5+ mm', category: 'EXTREMELY HEAVY', color: '#B42318' },
];
