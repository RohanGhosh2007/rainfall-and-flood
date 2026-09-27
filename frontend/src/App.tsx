import { createHashRouter, RouterProvider, Navigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import DashboardPage from '@/pages/DashboardPage';
import RiskAssessmentPage from '@/pages/RiskAssessmentPage';
import RainfallPage from '@/pages/RainfallPage';
import FloodRiskPage from '@/pages/FloodRiskPage';
import RiskMapPage from '@/pages/RiskMapPage';
import AlertsPage from '@/pages/AlertsPage';
import HistoryPage from '@/pages/HistoryPage';
import DatasetsPage from '@/pages/DatasetsPage';
import ModelsPage from '@/pages/ModelsPage';
import ArchitecturePage from '@/pages/ArchitecturePage';
import AboutPage from '@/pages/AboutPage';

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'risk-assessment', element: <RiskAssessmentPage /> },
      { path: 'rainfall', element: <RainfallPage /> },
      { path: 'flood-risk', element: <FloodRiskPage /> },
      { path: 'map', element: <RiskMapPage /> },
      { path: 'alerts', element: <AlertsPage /> },
      { path: 'history', element: <HistoryPage /> },
      { path: 'datasets', element: <DatasetsPage /> },
      { path: 'models', element: <ModelsPage /> },
      { path: 'architecture', element: <ArchitecturePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: '*', element: <Navigate to="/dashboard" replace /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
