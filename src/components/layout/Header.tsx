import { useState } from 'react';
import { Bell, MapPin, ChevronDown, Menu, X } from 'lucide-react';
import Sidebar from './Sidebar';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const LOCATIONS = [
  'Barasat, West Bengal',
  'Kolkata, West Bengal',
  'Howrah, West Bengal',
  'Hooghly, West Bengal',
  'North 24 Parganas, West Bengal',
  'South 24 Parganas, West Bengal',
];

export default function Header({ title, subtitle }: HeaderProps) {
  const [locationOpen, setLocationOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Barasat, West Bengal');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      {mobileNavOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-navy/60" onClick={() => setMobileNavOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 animate-slide-in-right">
            <Sidebar onNavigate={() => setMobileNavOpen(false)} />
          </div>
          <button
            className="absolute top-4 right-4 text-white p-1"
            onClick={() => setMobileNavOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      )}

      <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
        <div className="px-4 lg:px-6 py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <button
              className="lg:hidden p-1.5 -ml-1 text-ink-secondary hover:text-ink"
              onClick={() => setMobileNavOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="min-w-0">
              <h2 className="text-lg font-semibold text-ink truncate">{title}</h2>
              {subtitle && <p className="text-xs text-ink-secondary truncate hidden sm:block">{subtitle}</p>}
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="relative">
              <button
                onClick={() => setLocationOpen(!locationOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 text-sm text-ink hover:bg-gray-50 transition-colors"
              >
                <MapPin className="w-4 h-4 text-brand-500" />
                <span className="hidden md:inline font-medium">{selectedLocation}</span>
                <span className="md:hidden font-medium">Location</span>
                <ChevronDown className="w-3.5 h-3.5 text-ink-secondary" />
              </button>
              {locationOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setLocationOpen(false)} />
                  <div className="absolute right-0 mt-1 w-64 bg-white rounded-lg shadow-card-elevated border border-gray-100 z-20 py-1 animate-fade-in">
                    {LOCATIONS.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => {
                          setSelectedLocation(loc);
                          setLocationOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 transition-colors ${
                          selectedLocation === loc ? 'text-brand-600 font-medium bg-brand-50/50' : 'text-ink'
                        }`}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-amber-50 border border-amber-200">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span className="text-[10px] font-semibold uppercase tracking-wide text-amber-700">SIH 2026 • Prototype</span>
            </div>

            <button className="relative p-2 rounded-lg hover:bg-gray-50 transition-colors" aria-label="Notifications">
              <Bell className="w-5 h-5 text-ink-secondary" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-risk-high" />
            </button>

            <div className="flex items-center gap-2 pl-2 border-l border-gray-200">
              <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center text-white text-xs font-semibold">
                SS
              </div>
              <div className="hidden lg:block">
                <p className="text-xs font-medium text-ink leading-tight">Syntax Squad</p>
                <p className="text-[10px] text-ink-secondary">Authority Access</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
