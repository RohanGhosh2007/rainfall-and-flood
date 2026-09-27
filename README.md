# 🌧️ RAINWATCH AI — SIH 2026 Prototype

### AI/ML-Assisted Heavy Rainfall Early Warning & Inundation Risk Assessment

**Team:** Syntax Squad  
**Event:** Smart India Hackathon (SIH) 2026  
**Institution:** Sister Nivedita University, West Bengal

> **Prototype status:** RAINWATCH AI is a demonstration and decision-support prototype. The current web interface uses prepared/deterministic demonstration data for evaluation. It is **not a live operational warning system** and its outputs must not be treated as official weather or emergency warnings.

---

## 📌 Table of Contents

- [About the Project](#-about-the-project)
- [Problem & Objective](#-problem--objective)
- [How the System Works](#-how-the-system-works)
- [User Flow](#-user-flow)
- [Core Features](#-core-features)
- [Risk Assessment Logic](#-risk-assessment-logic)
- [System Architecture](#-system-architecture)
- [Data Processing Pipeline](#-data-processing-pipeline)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Frontend Architecture](#-frontend-architecture)
- [Pages & Modules](#-pages--modules)
- [Demo Data](#-demo-data)
- [Run Locally](#-run-locally)
- [Production Build](#-production-build)
- [Limitations & Future Scope](#-limitations--future-scope)
- [Team](#-team)
- [Prototype Screenshots](#-prototype-screenshots)

---

## 🌍 About the Project

**RAINWATCH AI** is a web-based decision-support prototype designed to present heavy-rainfall conditions and potential inundation/flood risk in a simple and actionable format.

The system brings together rainfall information, flood probability, risk classification, forecasting views and historical information into a single dashboard. The objective is to reduce the effort required to interpret complex environmental information and make risk information easier to understand.

The prototype is designed around an observation-driven workflow and demonstrates how environmental data can be processed and transformed into user-facing **rainfall, flood-probability and integrated-risk indicators**.

---

## 🎯 Problem & Objective

Heavy rainfall can rapidly increase the possibility of waterlogging, inundation and flooding. Raw rainfall measurements alone may be difficult for a non-technical user to interpret.

RAINWATCH AI aims to provide a simple flow:

```text
Environmental / Rainfall Information
                ↓
        Data Preparation
                ↓
       Risk & Probability Analysis
                ↓
      Risk Classification / Forecast
                ↓
      Dashboard & Visual Information
                ↓
       Faster Risk Understanding
```

### Main objectives

- Monitor rainfall-related conditions.
- Estimate and display flood probability.
- Combine rainfall risk and flood probability into an integrated risk score.
- Classify conditions into understandable risk levels.
- Provide a 24-hour forecast-oriented view in the prototype.
- Preserve historical information for contextual understanding.
- Present complex information through a simple web interface.

---

## 🔄 How the System Works

The prototype follows a layered flow from data to user interface:

```mermaid
flowchart LR
    A[Observational Rainfall Data] --> B[Data Cleaning & Preprocessing]
    B --> C[Prepared Features]
    C --> D[Rainfall Risk Analysis]
    C --> E[Flood Probability Analysis]
    D --> F[Integrated Risk Score]
    E --> F
    F --> G{Risk Classification}
    G --> H[Low]
    G --> I[Moderate]
    G --> J[High]
    G --> K[Critical]
    H --> L[Web Dashboard]
    I --> L
    J --> L
    K --> L
    L --> M[Dashboard]
    L --> N[Forecast]
    L --> O[History]
```

> **Important:** The diagram represents the intended analytical workflow. The current SIH prototype demonstrates the user interface with prepared demonstration values rather than a continuously connected live data pipeline.

---

## 👤 User Flow

The interface is designed around different levels of information need.

```mermaid
flowchart TD
    A[User Opens RAINWATCH AI] --> B[Dashboard]
    B --> C{Need More Information?}
    C -->|Quick Overview| D[Risk Level + Key Indicators]
    C -->|Upcoming Situation| E[Forecast]
    C -->|Previous Context| F[History]
    E --> G[24-Hour Risk Understanding]
    F --> H[Historical Risk Information]
```

### Why this flow?

- **Dashboard:** for users who need a quick understanding.
- **Forecast:** for users who want to explore the upcoming 24-hour situation.
- **History:** for users who want additional context about previous conditions.

This keeps the first screen simple while still allowing deeper exploration.

---

## ✨ Core Features

### 📊 Dashboard

Provides a consolidated view of the main rainfall and flood-risk indicators.

- Rainfall information
- Flood probability
- Integrated risk score
- Risk classification
- Key visual indicators

### 🔮 Forecast

Provides a prototype view of the expected situation over the **next 24 hours**.

- Rainfall-related forecast information
- Risk-oriented forecast view
- Easy-to-read visual indicators

### 🕘 History

Provides previous risk information so users can understand how the situation has developed over time.

- Historical risk records
- Previous rainfall/risk context
- Chronological information for comparison

### 🗺️ Risk Visualization

The prototype also contains location-oriented risk visualization to make spatial risk information easier to interpret.

### 🚨 Alert View

The prototype contains an alert-oriented interface for highlighting important risk conditions. It is a **demonstration feature**, not a live emergency notification service.

### 🧠 Model / Architecture Views

Dedicated pages explain the proposed model concept, system architecture and the relationship between environmental inputs and risk outputs.

---

## 🧮 Risk Assessment Logic

For demonstration purposes, the prototype uses an integrated risk score:

$$
\text{Risk Score} = (\text{Rainfall Risk} \times 0.55) + (\text{Flood Probability} \times 0.45)
$$

### Risk Classification

| Risk Level | Score Range | Meaning in the Prototype |
|---|---:|---|
| 🟢 **Low** | 0.00 – 0.29 | Relatively lower estimated risk |
| 🟡 **Moderate** | 0.30 – 0.54 | Increased attention may be required |
| 🟠 **High** | 0.55 – 0.74 | Higher potential risk condition |
| 🔴 **Critical** | 0.75 – 1.00 | Highest demonstration risk category |

```text
                INTEGRATED RISK
                       │
          ┌────────────┴────────────┐
          │                         │
   Rainfall Risk 55%        Flood Probability 45%
          │                         │
          └────────────┬────────────┘
                       ↓
                 Risk Score
                       ↓
          ┌────────────┼────────────┐
          ↓            ↓            ↓
         Low       Moderate       High       Critical
```

> These weights and thresholds are **prototype demonstration parameters**. A real deployment would require statistical validation, calibration, uncertainty estimation and domain-expert approval.

---

## 🏗️ System Architecture

```mermaid
flowchart TB
    subgraph INPUT[Environmental Inputs]
        A1[Satellite Observations]
        A2[Radar Information]
        A3[Ground / Weather Observations]
        A4[NWP Data]
    end

    subgraph DATA[Data Layer]
        B1[Collection]
        B2[Cleaning]
        B3[Alignment]
        B4[Feature Engineering]
    end

    subgraph ANALYSIS[Analysis Layer]
        C1[Rainfall Analysis]
        C2[Flood Probability Analysis]
        C3[Integrated Risk Calculation]
        C4[Risk Classification]
    end

    subgraph APPLICATION[Application Layer]
        D1[Dashboard]
        D2[Forecast]
        D3[History]
        D4[Risk Visualization]
        D5[Alert View]
    end

    A1 --> B1
    A2 --> B1
    A3 --> B1
    A4 --> B1
    B1 --> B2 --> B3 --> B4
    B4 --> C1
    B4 --> C2
    C1 --> C3
    C2 --> C3
    C3 --> C4
    C4 --> D1
    C4 --> D2
    C4 --> D3
    C4 --> D4
    C4 --> D5
```

### Architecture layers

| Layer | Responsibility |
|---|---|
| **Input Layer** | Environmental and rainfall information |
| **Data Layer** | Cleaning, alignment and feature preparation |
| **Analysis Layer** | Rainfall analysis, flood probability and integrated risk |
| **Application Layer** | Dashboard, forecast, history and visual risk presentation |

---

## 🧹 Data Processing Pipeline

Data quality is important before any risk analysis. The proposed workflow is:

```mermaid
flowchart LR
    A[Raw Observation Data] --> B[Remove / Handle Invalid Values]
    B --> C[Handle Missing Values]
    C --> D[Normalize / Standardize]
    D --> E[Temporal & Spatial Alignment]
    E --> F[Feature Preparation]
    F --> G[Risk / Prediction Module]
```

### Why preprocessing matters

Raw environmental data may contain missing values, inconsistent formats or observations that are not directly comparable. Cleaning and alignment help create a more consistent input for downstream analysis.

---

## 🧩 Technology Stack

### Frontend

| Technology | Purpose |
|---|---|
| **React 18** | Component-based user interface |
| **TypeScript** | Typed application development |
| **Vite** | Development server and build tooling |
| **React Router** | Page navigation |
| **Tailwind CSS** | Responsive styling |
| **Recharts** | Data visualization |
| **Lucide React** | Interface icons |

### System / ML Concept

The proposed architecture can integrate:

- Satellite observations
- Radar information
- Observational weather data
- Numerical Weather Prediction (NWP) data
- Data cleaning and preprocessing
- Feature engineering
- Rainfall prediction / analysis
- Flood probability estimation
- Integrated risk classification

> The current UI is a prototype demonstration and does not claim to be a continuously trained or operational ML service.

---

## 📁 Project Structure

```text
project/
│
├── frontend/                       # Frontend package
│   ├── src/
│   │   ├── components/             # Reusable UI components
│   │   │   ├── layout/             # Header, sidebar, page layout
│   │   │   └── ui/                 # Cards, charts, maps, badges, etc.
│   │   ├── data/                   # Demonstration data
│   │   ├── pages/                  # Main application pages
│   │   ├── services/               # API/service layer
│   │   ├── types/                  # TypeScript types
│   │   ├── App.tsx                 # Application routing
│   │   ├── index.css               # Global styles
│   │   └── main.tsx                # Application entry point
│   ├── production-build/           # Browser-ready production build
│   ├── index.html
│   ├── package.json
│   └── README.md
│
├── src/                            # Original project source
├── dist/                           # Original production build
├── index.html
├── package.json
├── package-lock.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── README.md
```

---

## 🖥️ Frontend Architecture

```mermaid
flowchart TD
    A[main.tsx] --> B[App.tsx]
    B --> C[React Router]
    C --> D[Layout]
    D --> E[Header]
    D --> F[Sidebar]
    D --> G[Page Modules]

    G --> G1[Dashboard]
    G --> G2[Rainfall]
    G --> G3[Forecast / Risk Assessment]
    G --> G4[History]
    G --> G5[Risk Map]
    G --> G6[Alerts]
    G --> G7[Datasets]
    G --> G8[Models]
    G --> G9[Architecture]
    G --> G10[About]

    G1 --> H[Reusable UI Components]
    G2 --> H
    G3 --> H
    G4 --> H
    G5 --> H
    G6 --> H
    H --> I[Charts / Cards / Tables / Risk Indicators]
    I --> J[Demo Data]
```

This structure keeps the application modular: pages contain feature-level logic while reusable components handle common UI elements such as charts, metric cards, risk gauges, tables, warning banners and status badges.

---

## 🧭 Pages & Modules

| Module | Purpose |
|---|---|
| **Dashboard** | Quick overall view of rainfall and risk information |
| **Rainfall** | Rainfall-focused information and indicators |
| **Risk Assessment** | Integrated rainfall/flood risk view |
| **Forecast** | Upcoming 24-hour risk-oriented information |
| **History** | Previous risk information and context |
| **Risk Map** | Location-oriented risk visualization |
| **Alerts** | Demonstration warning/alert interface |
| **Datasets** | Dataset and data-source information |
| **Models** | Model / analytical concept information |
| **Architecture** | System architecture and pipeline explanation |
| **About** | Project and prototype information |

---

## 🗃️ Demo Data

The current prototype contains prepared demonstration data in:

```text
src/data/demoData.ts
```

The demonstration includes location-oriented information for areas such as:

- Barasat
- Kolkata
- Howrah
- Hooghly
- North 24 Parganas
- South 24 Parganas

The prototype is intended to demonstrate the **workflow and interface**, rather than provide live official warnings.

For real deployment, the demonstration layer should be replaced with validated historical/live data sources and a secure backend/API pipeline.

---

## 🚀 Run Locally

### Requirements

- **Node.js 18+**
- **Node.js 20+ recommended**
- npm

Check your installation:

```bash
node --version
npm --version
```

### Start the development server

```bash
npm install
npm run dev
```

Vite will normally provide a local URL similar to:

```text
http://localhost:5173
```

Open the URL in a browser.

---

## 📦 Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run code-quality checks:

```bash
npm run lint
npm run typecheck
```

---

## 🔮 Limitations & Future Scope

### Current limitations

- The submitted UI uses prepared demonstration data.
- It is not connected to a live operational warning service.
- The displayed risk thresholds are demonstration parameters.
- Real-world model performance has not been established by this prototype alone.
- No emergency decision should be made from the prototype output.

### Future development

```mermaid
flowchart LR
    A[Prototype] --> B[Validated Historical Dataset]
    B --> C[Continuous Data Ingestion]
    C --> D[Model Training & Validation]
    D --> E[Location-Specific Calibration]
    E --> F[Uncertainty Estimation]
    F --> G[Backend + API]
    G --> H[Operational Monitoring]
    H --> I[Authority Validation]
    I --> J[Production Early-Warning Platform]
```

A production-grade system would additionally require:

- validated meteorological and hydrological datasets,
- continuous data ingestion,
- rigorous model training and testing,
- uncertainty estimation,
- location-specific calibration,
- secure backend/API infrastructure,
- monitoring and logging,
- fail-safe behaviour,
- and validation by relevant meteorological and disaster-management authorities.

---

## ⚠️ Important Disclaimer

This project is a **SIH 2026 prototype for demonstration and evaluation**.

The information displayed by the prototype is not an official weather forecast, flood warning, emergency notification or public-safety instruction. The demonstration risk scores and thresholds are not validated for operational decision-making.

Any real-world deployment would require appropriate scientific validation, operational data sources, model verification, infrastructure, security controls and authorization from relevant authorities.

---

## 👥 Team

### Syntax Squad — SIH 2026

**Institution:** Sister Nivedita University, West Bengal

Built as a prototype to demonstrate an observation-driven, AI/ML-assisted workflow for heavy rainfall and inundation risk assessment.

---

# 🖼️ Prototype Screenshots

## Dashboard

<img width="1600" height="900" alt="Screenshot From 2026-09-21 00-56-10" src="https://github.com/user-attachments/assets/c6a3ebad-597c-4790-b574-080dee31ca78" />

## Screenshot 2

<img width="1600" height="900" alt="Screenshot From 2026-09-21 00-43-12" src="https://github.com/user-attachments/assets/065f927e-5000-45a5-8e4b-6a1527cb493a" />

## Screenshot 3

<img width="1600" height="900" alt="Screenshot From 2026-09-21 00-44-21" src="https://github.com/user-attachments/assets/565d9dfb-af82-4119-b1bf-3ab483ee4184" />

## Screenshot 4

<img width="1600" height="900" alt="Screenshot From 2026-09-21 00-44-28" src="https://github.com/user-attachments/assets/b1a5b361-0438-42f9-9a3e-3686dd012beb" />

## Screenshot 5

<img width="1600" height="900" alt="Screenshot From 2026-09-21 00-43-20" src="https://github.com/user-attachments/assets/f6afefac-4de3-41a1-a594-fa8caf22ce9a" />

## Screenshot 6

<img width="1600" height="900" alt="Screenshot From 2026-09-21 00-43-24" src="https://github.com/user-attachments/assets/02af80c8-a5ab-455d-b9b0-f89ec8c8eb2b" />

## Screenshot 7

<img width="1600" height="900" alt="Screenshot From 2026-09-21 00-43-28" src="https://github.com/user-attachments/assets/3feb78fc-3fcc-4c36-8c1c-bfc8d6eb6380" />

## Screenshot 8

<img width="1600" height="900" alt="Screenshot From 2026-09-21 00-43-35" src="https://github.com/user-attachments/assets/729e43aa-031d-487a-a8c6-9693386558cf" />

## Screenshot 9

<img width="1600" height="900" alt="Screenshot From 2026-09-21 00-43-38" src="https://github.com/user-attachments/assets/708f532b-3468-456a-8dac-aed157ddeb99" />

## Screenshot 10

<img width="1600" height="900" alt="Screenshot From 2026-09-21 00-43-42" src="https://github.com/user-attachments/assets/371c8b5e-0fa5-4d2b-8fc1-36117f82ae92" />

## Screenshot 11

<img width="1600" height="900" alt="Screenshot From 2026-09-21 00-43-45" src="https://github.com/user-attachments/assets/ccec2f3f-2616-4e6f-b11d-72f273970a92" />

## Screenshot 12

<img width="1600" height="900" alt="Screenshot From 2026-09-21 00-43-48" src="https://github.com/user-attachments/assets/480b3b10-d446-41e7-878e-53f7613e6838" />

## Screenshot 13

<img width="1600" height="900" alt="Screenshot From 2026-09-21 01-21-21" src="https://github.com/user-attachments/assets/f445e7ac-2621-4281-a550-b55a83f0de49" />

---

**RAINWATCH AI — Syntax Squad | SIH 2026**
