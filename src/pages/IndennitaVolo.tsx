import { Plane, Moon, Star } from 'lucide-react';
import { formatCurrency } from '../utils/format';
import {
  roles,
  indennitaVolo,
  indennitaIntegrativa,
  voloNotturno,
} from '../data/ccnlData';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import DataTable from '../components/DataTable';

export default function IndennitaVolo() {
  return (
    <PageHeader
      title="Indennita di Volo"
      subtitle="Indennita di volo, integrativa e volo notturno"
    >
      <div className="space-y-6">
        {/* Indennita di volo - Art.18 */}
        <Card
          title="Indennita di Volo"
          subtitle="Art. 18 - Oraria, mensile, vacanza contrattuale e adeguamenti ISTAT"
          icon={<Plane size={18} />}
        >
          <DataTable
            headers={[
              'Ruolo',
              'Oraria',
              'Mensile',
              'Vacanza Contr.',
              'ISTAT 2024',
              'ISTAT 2025',
            ]}
            rows={roles.map((r) => {
              const d = indennitaVolo[r];
              return [
                r,
                formatCurrency(d.oraria),
                formatCurrency(d.mensile),
                formatCurrency(d.vacanza),
                formatCurrency(d.istat2024),
                formatCurrency(d.istat2025),
              ];
            })}
            highlightFirst
          />
        </Card>

        {/* Indennita integrativa di volo - Art.19 */}
        <Card
          title="Indennita Integrativa di Volo (200 ore)"
          subtitle="Art. 19 - 100 ore Dicembre + 100 ore Marzo"
          icon={<Star size={18} />}
        >
          <DataTable
            headers={['Ruolo', 'Oraria', 'Annuale']}
            rows={roles.map((r) => [
              r,
              formatCurrency(indennitaIntegrativa[r].oraria),
              formatCurrency(indennitaIntegrativa[r].annuale),
            ])}
            highlightFirst
          />

          {/* Visual comparison */}
          <div className="mt-6 pt-5 border-t border-slate-100">
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
              Importo annuale per ruolo
            </h4>
            <div className="space-y-3">
              {roles.map((role) => {
                const max = indennitaIntegrativa['Comandante Superiore'].annuale;
                const pct = (indennitaIntegrativa[role].annuale / max) * 100;
                return (
                  <div key={role}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600 font-medium truncate mr-2">
                        {role}
                      </span>
                      <span className="text-slate-800 font-semibold font-mono">
                        {formatCurrency(indennitaIntegrativa[role].annuale)}
                      </span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>

        {/* Indennita di volo notturno - Art.21 */}
        <Card
          title="Indennita di Volo Notturno"
          subtitle="Art. 21 - Per giorno e per turno"
          icon={<Moon size={18} />}
        >
          <DataTable
            headers={['Ruolo', 'Per Giorno', 'Per Turno']}
            rows={roles.map((r) => [
              r,
              formatCurrency(voloNotturno[r].giorno),
              formatCurrency(voloNotturno[r].turno),
            ])}
            highlightFirst
          />
        </Card>
      </div>
    </PageHeader>
  );
}
