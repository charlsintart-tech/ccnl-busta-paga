import {
  Banknote,
  Plane,
  TrendingUp,
  Users,
  Calendar,
  Shield,
} from 'lucide-react';
import { formatCurrency } from '../utils/format';
import {
  roles,
  stipendioLordo,
  indennitaVolo,
  indennitaIntegrativa,
  aliquoteIRPEF,
  ferie,
  giornateFestive,
} from '../data/ccnlData';
import PageHeader from '../components/PageHeader';

const summaryCards = [
  {
    label: 'Stipendio max lordo',
    value: formatCurrency(stipendioLordo['Comandante Superiore'].apr2025),
    sub: 'Com.te Superiore (Apr 2025)',
    icon: Banknote,
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    label: 'Stipendio min lordo',
    value: formatCurrency(stipendioLordo['Salario di ingresso'].apr2025),
    sub: 'Salario di ingresso (Apr 2025)',
    icon: Banknote,
    color: 'bg-amber-50 text-amber-600',
  },
  {
    label: 'Ind. volo max',
    value: formatCurrency(indennitaVolo['Comandante Superiore'].mensile),
    sub: 'Com.te Superiore - mensile',
    icon: Plane,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    label: 'Ind. integrativa max',
    value: formatCurrency(indennitaIntegrativa['Comandante Superiore'].annuale),
    sub: 'Com.te Superiore - annuale',
    icon: TrendingUp,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    label: 'Ruoli contrattuali',
    value: `${roles.length}`,
    sub: 'Da Com.te Sup. a Salario ingr.',
    icon: Users,
    color: 'bg-cyan-50 text-cyan-600',
  },
  {
    label: 'Giorni ferie annuali',
    value: `${ferie.giorniTotali}`,
    sub: `${ferie.giorniAzienda} azienda + ${ferie.giorniPilota} pilota`,
    icon: Calendar,
    color: 'bg-rose-50 text-rose-600',
  },
];

export default function Dashboard() {
  return (
    <PageHeader
      title="Dashboard"
      subtitle="Panoramica CCNL - Accordi di 2° Livello 2013 - Adeguamento ISTAT 2024/2025"
    >
      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
        {summaryCards.map((card) => (
          <div
            key={card.label}
            className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 flex items-start gap-4"
          >
            <div className={`p-2.5 rounded-lg ${card.color}`}>
              <card.icon size={20} />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-slate-500 font-medium">{card.label}</p>
              <p className="text-xl font-bold text-slate-900 mt-0.5">
                {card.value}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">{card.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison chart-like view */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Stipendi comparison */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
          <h3 className="text-sm font-semibold text-slate-800 mb-4">
            Confronto Stipendi Lordi (Apr 2025)
          </h3>
          <div className="space-y-3">
            {roles.map((role) => {
              const val = stipendioLordo[role].apr2025;
              const max = stipendioLordo['Comandante Superiore'].apr2025;
              const pct = (val / max) * 100;
              return (
                <div key={role}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-600 font-medium truncate mr-2">{role}</span>
                    <span className="text-slate-800 font-semibold font-mono">
                      {formatCurrency(val)}
                    </span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick info panels */}
        <div className="space-y-4">
          {/* IRPEF */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
            <h3 className="text-sm font-semibold text-slate-800 mb-3 flex items-center gap-2">
              <TrendingUp size={16} className="text-red-500" />
              Aliquote IRPEF 2024
            </h3>
            <div className="space-y-2">
              {aliquoteIRPEF.map((a) => (
                <div
                  key={a.scaglione}
                  className="flex justify-between items-center py-2 px-3 bg-slate-50 rounded-lg"
                >
                  <span className="text-xs text-slate-600">{a.scaglione}</span>
                  <span className="text-sm font-bold text-slate-800">
                    {a.aliquota}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Festivita */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
            <h3 className="text-sm font-semibold text-slate-800 mb-3 flex items-center gap-2">
              <Shield size={16} className="text-orange-500" />
              Giornate Festive (Art. 25)
            </h3>
            <div className="flex flex-wrap gap-2">
              {giornateFestive.map((g) => (
                <span
                  key={g}
                  className="px-3 py-1.5 bg-orange-50 text-orange-700 rounded-full text-xs font-medium"
                >
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageHeader>
  );
}
