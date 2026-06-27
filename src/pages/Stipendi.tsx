import { Banknote, Calculator, TrendingUp } from 'lucide-react';
import { formatCurrency } from '../utils/format';
import {
  roles,
  stipendiMinimi,
  calcoloScatto,
  stipendioLordo,
} from '../data/ccnlData';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import DataTable from '../components/DataTable';

export default function Stipendi() {
  return (
    <PageHeader
      title="Stipendi"
      subtitle="Stipendi minimi contrattuali, calcolo scatto e stipendio mensile lordo"
    >
      <div className="space-y-6">
        {/* Stipendi minimi */}
        <Card
          title="Stipendi Minimi Contrattuali"
          subtitle="Art. 16 - Importi mensili"
          icon={<Banknote size={18} />}
        >
          <DataTable
            headers={['Ruolo', 'Importo Mensile']}
            rows={roles.map((r) => [r, formatCurrency(stipendiMinimi[r])])}
            highlightFirst
          />
        </Card>

        {/* Calcolo Scatto */}
        <Card
          title="Calcolo Scatto"
          subtitle="Art. 20 - Formula: (P. base x13 + Ind. volo x12 + Ind. Int. Volo) : 13 = A => A x 5%"
          icon={<Calculator size={18} />}
        >
          <DataTable
            headers={['Ruolo', 'Valore Scatto']}
            rows={roles.map((r) => [r, formatCurrency(calcoloScatto[r])])}
            highlightFirst
          />
        </Card>

        {/* Stipendio mensile lordo */}
        <Card
          title="Stipendio Mensile Lordo (Base)"
          subtitle="Zero scatti - Confronto periodi"
          icon={<TrendingUp size={18} />}
        >
          <DataTable
            headers={['Ruolo', 'Da Feb. 2024', 'Da Apr. 2025', 'Differenza']}
            rows={roles.map((r) => {
              const diff = stipendioLordo[r].apr2025 - stipendioLordo[r].feb2024;
              return [
                r,
                formatCurrency(stipendioLordo[r].feb2024),
                formatCurrency(stipendioLordo[r].apr2025),
                `+${formatCurrency(diff)}`,
              ];
            })}
            highlightFirst
          />
          {/* Visual comparison */}
          <div className="mt-6 pt-5 border-t border-slate-100">
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
              Confronto visivo Feb 2024 vs Apr 2025
            </h4>
            <div className="space-y-4">
              {roles.map((role) => {
                const max = stipendioLordo['Comandante Superiore'].apr2025;
                const feb = (stipendioLordo[role].feb2024 / max) * 100;
                const apr = (stipendioLordo[role].apr2025 / max) * 100;
                return (
                  <div key={role}>
                    <p className="text-xs text-slate-600 font-medium mb-1.5">{role}</p>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-slate-400 w-16">Feb 2024</span>
                        <div className="flex-1 h-2 bg-slate-100 rounded-full">
                          <div
                            className="h-full bg-blue-400 rounded-full"
                            style={{ width: `${feb}%` }}
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-slate-400 w-16">Apr 2025</span>
                        <div className="flex-1 h-2 bg-slate-100 rounded-full">
                          <div
                            className="h-full bg-emerald-500 rounded-full"
                            style={{ width: `${apr}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>
      </div>
    </PageHeader>
  );
}
