# RAINWATCH AI — SIH 2026 Prototype

**Team:** Syntax Squad  
**Project:** AI/ML-Based Integrated Heavy Rainfall Early Warning and Inundation Prediction System

## 1. Overview

RAINWATCH AI is a web-based decision-support prototype for early identification of heavy rainfall and possible flood/inundation risk.

The prototype combines rainfall information, flood probability and an integrated risk score to present an easy-to-understand dashboard for disaster-management use cases.

> **Note:** This submitted prototype is a demonstration build. The current UI uses deterministic demo data for presentation. It is not a live operational warning system.

## 2. Key Features

- Heavy rainfall monitoring and rainfall dashboard
- Flood probability and integrated risk assessment
- Location-wise risk map
- Risk levels: **Low, Moderate, High, Critical**
- Early-warning / alert dashboard
- Historical risk records
- Model and system architecture pages
- Dataset information page
- Risk assessment and forecast views
- Simple visual charts and indicators
- Responsive React-based interface

## 3. Technology Stack

### Frontend
- React 18
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Recharts
- Lucide React

### ML / System Concept
The solution is designed around an AI/ML pipeline that can combine environmental inputs such as:
- Satellite data
- Radar data
- Observational weather data
- Numerical Weather Prediction (NWP) data

The prototype UI demonstrates how model outputs can be converted into rainfall, flood-probability and integrated-risk information.

## 4. Risk Calculation Used in the Demo

The prototype demonstrates an integrated risk score using:

**Risk Score = (Rainfall Risk × 0.55) + (Flood Probability × 0.45)**

Demo risk thresholds:

| Risk Level | Score Range |
|---|---:|
| Low | 0.00–0.29 |
| Moderate | 0.30–0.54 |
| High | 0.55–0.74 |
| Critical | 0.75–1.00 |

These values are part of the demonstration configuration and should be recalibrated and validated before any real-world deployment.

## 5. Project Structure

```text
project/
├── .bolt/
├── dist/                 # Production build output
├── src/
│   ├── components/       # Reusable UI components
│   ├── data/             # Demo data
│   ├── pages/            # Application pages
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
└── eslint.config.js
```

## 6. Requirements

Install the following before running the project:

- Node.js 18+ (Node.js 20+ recommended)
- npm

Check installation:

```bash
node --version
npm --version
```

## 7. Run the Project

Open a terminal inside the project folder:

```bash
npm install
npm run dev
```

Vite will show a local development address, normally similar to:

```text
http://localhost:5173
```

Open that address in a browser.

## 8. Production Build

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 9. Code Quality Checks

Run ESLint:

```bash
npm run lint
```

Run TypeScript checking:

```bash
npm run typecheck
```

## 10. Demo Data

The current prototype contains presentation/demo data in:

```text
src/data/demoData.ts
```

The demo scenario includes locations such as Barasat, Kolkata, Howrah, Hooghly, North 24 Parganas and South 24 Parganas.

For a production system, this demo data should be replaced with validated real-time or historical datasets and a secure backend/API pipeline.

## 11. Proposed Real-World Pipeline

```text
Satellite + Radar + Weather + NWP
                ↓
        Data Collection
                ↓
     Cleaning & Alignment
                ↓
      Feature Engineering
                ↓
          AI / ML Models
          ↙           ↘
 Rainfall Prediction   Flood Prediction
          \           /
           \         /
        Integrated Risk
                ↓
       Risk Classification
                ↓
      Alerts & Dashboard
```

## 12. Important Disclaimer

This prototype is intended for **SIH 2026 demonstration and evaluation**. The displayed values are not official weather forecasts or emergency warnings.

A real deployment would require:
- validated datasets,
- model training and testing,
- continuous data ingestion,
- uncertainty estimation,
- location-specific calibration,
- backend/API integration,
- security and monitoring,
- and validation by relevant meteorological and disaster-management authorities.

## 13. Team

**Syntax Squad — SIH 2026**

Built as a prototype for demonstrating an AI/ML-assisted heavy rainfall and inundation early-warning workflow.

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






