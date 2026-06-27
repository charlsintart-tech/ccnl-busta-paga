import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import {
  LayoutDashboard,
  Banknote,
  Plane,
  MapPin,
  Clock,
  PiggyBank,
  Shield,
  Menu,
  X,
} from 'lucide-react';

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/stipendi', icon: Banknote, label: 'Stipendi' },
  { to: '/indennita-volo', icon: Plane, label: 'Indennita di Volo' },
  { to: '/indennita-rimborsi', icon: MapPin, label: 'Indennita & Rimborsi' },
  { to: '/straordinari', icon: Clock, label: 'Straordinari & Festivita' },
  { to: '/contributi', icon: PiggyBank, label: 'Contributi & Previdenza' },
  { to: '/assicurazioni', icon: Shield, label: 'Assicurazioni & Ferie' },
];

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-30 bg-white border-b border-slate-200 px-4 py-3 flex items-center gap-3">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
        >
          {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <h1 className="text-sm font-semibold text-slate-800 truncate">
          CCNL - Accordi 2° Livello 2013
        </h1>
      </div>

      {/* Sidebar overlay for mobile */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 z-20 bg-black/30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-20 h-full w-72 bg-white border-r border-slate-200 flex flex-col transition-transform duration-200 ease-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="p-5 border-b border-slate-200">
          <h1 className="text-base font-bold text-slate-900 leading-tight">
            CCNL - Busta Paga
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Accordi 2° Livello 2013
          </p>
          <p className="text-xs text-slate-500">
            Adeguamento ISTAT 2024/2025
          </p>
        </div>
        <nav className="flex-1 py-3 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-5 py-2.5 mx-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`
              }
            >
              <item.icon size={18} />
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-200">
          <p className="text-[11px] text-slate-400 text-center">
            Dati aggiornati al 2024/2025
          </p>
        </div>
      </aside>

      {/* Main content */}
      <main className="lg:ml-72 min-h-screen pt-14 lg:pt-0">
        <div className="p-4 sm:p-6 lg:p-8 max-w-7xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
