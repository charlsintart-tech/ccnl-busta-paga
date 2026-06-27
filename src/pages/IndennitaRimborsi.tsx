import { MapPin, Hotel, Car } from 'lucide-react';
import { formatCurrency } from '../utils/format';
import {
  roles,
  indennitaViaggio,
  diarie,
  rimborsoKm,
} from '../data/ccnlData';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import DataTable from '../components/DataTable';

export default function IndennitaRimborsi() {
  return (
    <PageHeader
      title="Indennita & Rimborsi"
      subtitle="Indennita di viaggio, diarie e rimborso chilometrico"
    >
      <div className="space-y-6">
        {/* Indennita di viaggio - Art.24 */}
        <Card
          title="Indennita di Viaggio"
          subtitle="Art. 24 - HEMS diurno, HEMS notturno, Off Shore"
          icon={<MapPin size={18} />}
        >
          <DataTable
            headers={[
              'Ruolo',
              '0-200 Km (g)',
              '0-200 Km (t)',
              '200-400 Km (g)',
              '200-400 Km (t)',
              '>400 Km (g)',
              '>400 Km (t)',
            ]}
            rows={roles.map((r) => {
              const d = indennitaViaggio[r];
              return [
                r,
                d.km200g === 0 ? 'N.p.' : formatCurrency(d.km200g),
                d.km200t === 0 ? 'N.p.' : formatCurrency(d.km200t),
                formatCurrency(d.km400g),
                formatCurrency(d.km400t),
                formatCurrency(d.km400pg),
                formatCurrency(d.km400pt),
              ];
            })}
            highlightFirst
          />
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-xs text-blue-700">
              <strong>Legenda:</strong> (g) = per giorno | (t) = per turno | N.p. = Non prevista
              <br />
              Tra 0-200 Km: non prevista | 200-400 Km: 1/4 giornata (g) - 1/2 giornata (t) | &gt;400 Km: 1/2 giornata (g) - 1 giornata (t)
            </p>
          </div>
        </Card>

        {/* Diarie */}
        <Card
          title="Diarie"
          subtitle="Hotel, Residence, Estera e Mancato Alloggio"
          icon={<Hotel size={18} />}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                label: 'Diaria Hotel',
                importo: diarie.hotel.importo,
                esentasse: diarie.hotel.esentasse,
                color: 'bg-blue-50 border-blue-200',
              },
              {
                label: 'Diaria Residence',
                importo: diarie.residence.importo,
                esentasse: diarie.residence.esentasse,
                color: 'bg-green-50 border-green-200',
              },
              {
                label: 'Diaria Estera',
                importo: diarie.estera.importo,
                esentasse: diarie.estera.esentasse,
                color: 'bg-purple-50 border-purple-200',
              },
              {
                label: 'Mancato Alloggio',
                importo: diarie.mancatoAlloggio.importo,
                esentasse: diarie.mancatoAlloggio.esentasse,
                color: 'bg-amber-50 border-amber-200',
              },
            ].map((d) => (
              <div
                key={d.label}
                className={`p-4 rounded-lg border ${d.color}`}
              >
                <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  {d.label}
                </p>
                <p className="text-2xl font-bold text-slate-900 mt-2">
                  {formatCurrency(d.importo)}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  di cui {formatCurrency(d.esentasse)} esentasse
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* Rimborso Chilometrico */}
        <Card
          title="Rimborso Chilometrico"
          subtitle="Parametri per il rimborso delle spese di viaggio"
          icon={<Car size={18} />}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-50 rounded-lg text-center">
              <p className="text-xs text-slate-500 font-medium">Costo per Km</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">
                {rimborsoKm.euroPerKm.toFixed(2)} &euro;/Km
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg text-center">
              <p className="text-xs text-slate-500 font-medium">Max Km A/R</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">
                {rimborsoKm.maxKm} Km
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg text-center">
              <p className="text-xs text-slate-500 font-medium">Pie di lista</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">
                max {formatCurrency(rimborsoKm.pieDiLista)}/giorno
              </p>
            </div>
          </div>
        </Card>
      </div>
    </PageHeader>
  );
}
