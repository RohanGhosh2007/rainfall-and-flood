# 🌧️ RAINWATCH AI — SIH 2026 Prototype

**Team:** Syntax Squad  
**Project:** AI/ML-Based Integrated Heavy Rainfall Early Warning and Inundation Prediction System

RAINWATCH AI is a web-based decision-support prototype designed to present heavy-rainfall conditions, flood probability, and integrated risk information in a clear and accessible format for disaster-management use cases.

> **Prototype Notice:** This repository contains a demonstration build for SIH 2026. The current interface uses deterministic demo data and simulated service responses for presentation. It is **not** a live operational weather or emergency-warning system.

---

## ✨ Key Features

- Central dashboard for rainfall, flood probability, and integrated risk
- Rainfall and flood-risk assessment views
- Location-wise risk visualization
- Risk classification: **Low, Moderate, High, Critical**
- Forecast and historical-information views
- Warning/alert demonstration interface
- Model, architecture, and dataset information pages
- Visual charts, indicators, and reusable UI components
- Responsive React-based interface

---

## 🛠️ Technology Stack

### Frontend
- **React 18**
- **TypeScript**
- **Vite**
- **React Router**
- **Tailwind CSS**
- **Recharts**
- **Lucide React**

### Prototype Logic / Service Layer
The current build uses a local TypeScript service layer and deterministic demonstration data to simulate application responses. The proposed production architecture is designed to connect the interface to validated backend APIs and trained AI/ML models.

### Proposed AI/ML Inputs
The full system concept can integrate environmental data such as:

- Satellite observations
- Radar data
- Observational weather data
- Numerical Weather Prediction (NWP) data

These inputs can be cleaned, aligned, and processed before being supplied to rainfall and flood-prediction models.

---

## ⚖️ Demo Risk Calculation

The prototype demonstrates an integrated risk score using:

**Risk Score = (Rainfall Risk × 0.55) + (Flood Probability × 0.45)**

| Risk Level | Score Range |
|---|---:|
| Low | 0.00–0.29 |
| Moderate | 0.30–0.54 |
| High | 0.55–0.74 |
| Critical | 0.75–1.00 |

> These weights and thresholds are demonstration parameters. They require calibration, model validation, and domain-expert review before any real-world deployment.

---

## 📁 Project Structure

```text
project/
├── .bolt/
├── dist/                     # Production build output
├── src/
│   ├── components/           # Reusable UI components
│   ├── data/                 # Demonstration data
│   ├── pages/                # Application pages
│   ├── services/             # Prototype service / assessment logic
│   ├── types/                # TypeScript types
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Requirements

Install:

- **Node.js 18+** (Node.js 20+ recommended)
- **npm**

Check your installation:

```bash
node --version
npm --version
```

### Run Locally

Open a terminal inside the `project` folder and run:

```bash
npm install
npm run dev
```

Vite will provide a local development URL, normally similar to:

```text
http://localhost:5173
```

Open the displayed URL in your browser.

---

## 📦 Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The generated production files are stored in the `dist/` directory.

---

## ✅ Code Quality Checks

Run ESLint:

```bash
npm run lint
```

Run TypeScript type checking:

```bash
npm run typecheck
```

---

## 🧪 Demo Data & Prototype Behaviour

The demonstration dataset is located in:

```text
src/data/demoData.ts
```

Prototype responses and assessment logic are handled through:

```text
src/services/api.ts
```

The interface includes demonstration scenarios for locations such as **Barasat, Kolkata, Howrah, Hooghly, North 24 Parganas, and South 24 Parganas**.

For a production system, the demonstration layer should be replaced by validated historical/real-time data sources, trained models, and secure backend APIs.

---

## 🧠 Proposed Real-World Architecture

```text
Satellite + Radar + Observational Weather + NWP
                       ↓
                 Data Collection
                       ↓
              Cleaning & Alignment
                       ↓
               Feature Engineering
                       ↓
                  AI / ML Models
                 ↙             ↘
       Rainfall Prediction   Flood Prediction
                 ↘             ↙
                 Integrated Risk
                       ↓
               Risk Classification
                       ↓
               Dashboard / Alerts
```

A production implementation would require continuous data ingestion, robust preprocessing, trained and validated prediction models, backend/API infrastructure, uncertainty handling, and operational monitoring.

---

## ⚠️ Important Disclaimer

RAINWATCH AI is currently an **SIH 2026 demonstration prototype**. Values displayed in the application are not official meteorological forecasts, flood warnings, or emergency instructions.

Before real-world deployment, the system would require:

- Validated and authoritative datasets
- Model training, testing, and independent evaluation
- Continuous and reliable data ingestion
- Uncertainty estimation and confidence reporting
- Location-specific calibration
- Secure backend and API integration
- Authentication, logging, security, and system monitoring
- Validation with relevant meteorological and disaster-management authorities

---

## 👥 Team

### Syntax Squad — SIH 2026

Built to demonstrate an AI/ML-assisted workflow for transforming rainfall and flood-risk information into a clear, decision-support interface.

---

## 📸 Prototype Screenshots

<img width="1600" height="900" alt="Screenshot From 2026-09-21 00-56-10" src="https://github.com/user-attachments/assets/c6a3ebad-597c-4790-b574-080dee31ca78" />

<img width="1600" height="900" alt="Screenshot From 2026-09-21 00-43-12" src="https://github.com/user-attachments/assets/065f927e-5000-45a5-8e4b-6a1527cb493a" />
<img width="1600" height="900" alt="Screenshot From 2026-09-21 00-44-21" src="https://github.com/user-attachments/assets/565d9dfb-af82-4119-b1bf-3ab483ee4184" />
<img width="1600" height="900" alt="Screenshot From 2026-09-21 00-44-28" src="https://github.com/user-attachments/assets/b1a5b361-0438-42f9-9a3e-3686dd012beb" />
<img width="1600" height="900" alt="Screenshot From 2026-09-21 00-43-20" src="https://github.com/user-attachments/assets/f6afefac-4de3-41a1-a594-fa8caf22ce9a" />
<img width="1600" height="900" alt="Screenshot From 2026-09-21 00-43-24" src="https://github.com/user-attachments/assets/02af80c8-a5ab-455d-b9b0-f89ec8c8eb2b" />

<img width="1600" height="900" alt="Screenshot From 2026-09-21 00-43-28" src="https://github.com/user-attachments/assets/3feb78fc-3fcc-4c36-8c1c-bfc8d6eb6380" />
<img width="1600" height="900" alt="Screenshot From 2026-09-21 00-43-35" src="https://github.com/user-attachments/assets/729e43aa-031d-487a-a8c6-9693386558cf" />
<img width="1600" height="900" alt="Screenshot From 2026-09-21 00-43-38" src="https://github.com/user-attachments/assets/708f532b-3468-456a-8dac-aed157ddeb99" />
<img width="1600" height="900" alt="Screenshot From 2026-09-21 00-43-42" src="https://github.com/user-attachments/assets/371c8b5e-0fa5-4d2b-8fc1-36117f82ae92" />
<img width="1600" height="900" alt="Screenshot From 2026-09-21 00-43-45" src="https://github.com/user-attachments/assets/ccec2f3f-2616-4e6f-b11d-72f273970a92" />
<img width="1600" height="900" alt="Screenshot From 2026-09-21 00-43-48" src="https://github.com/user-attachments/assets/480b3b10-d446-41e7-878e-53f7613e6838" />
<img width="1600" height="900" alt="Screenshot From 2026-09-21 01-21-21" src="https://github.com/user-attachments/assets/f445e7ac-2621-4281-a550-b55a83f0de49" />
