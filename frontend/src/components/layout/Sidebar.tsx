import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  ShieldAlert,
  CloudRain,
  Waves,
  Map as MapIcon,
  AlertTriangle,
  History,
  Database,
  Brain,
  Server,
  Info,
  CloudRain as Logo,
  Activity,
} from 'lucide-react';

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/risk-assessment', label: 'Risk Assessment', icon: ShieldAlert },
  { to: '/rainfall', label: 'Rainfall Forecast', icon: CloudRain },
  { to: '/flood-risk', label: 'Flood Risk', icon: Waves },
  { to: '/map', label: 'Risk Map', icon: MapIcon },
  { to: '/alerts', label: 'Early Warnings', icon: AlertTriangle },
  { to: '/history', label: 'Prediction History', icon: History },
  { to: '/datasets', label: 'Dataset Insights', icon: Database },
  { to: '/models', label: 'Model Performance', icon: Brain },
  { to: '/architecture', label: 'System Architecture', icon: Server },
  { to: '/about', label: 'About', icon: Info },
];

interface SidebarProps {
  onNavigate?: () => void;
}

export default function Sidebar({ onNavigate }: SidebarProps) {
  return (
    <div className="flex flex-col h-full bg-navy text-white w-64 shrink-0">
      <div className="px-5 py-5 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-500 shrink-0">
            <Logo className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-base font-bold tracking-tight leading-none">RAINWATCH AI</h1>
            <p className="text-[10px] text-navy-200 mt-1 uppercase tracking-wider">SIH 2026 Prototype</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-3 px-2.5">
        <p className="section-label text-navy-200 px-3 mb-2">Navigation</p>
        <ul className="space-y-0.5">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                onClick={onNavigate}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-brand-500 text-white shadow-sm'
                      : 'text-navy-100 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                <item.icon className="w-4 h-4 shrink-0" />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-white/10 p-3 space-y-2">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5">
          <Activity className="w-4 h-4 text-emerald-400 shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-white">System Status</p>
            <p className="text-[10px] text-navy-200">Prototype Mode</p>
          </div>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
