import { Clock, Calendar } from 'lucide-react';
import { formatCurrency } from '../utils/format';
import {
  roles,
  straordinarioFestivita,
  trimestri,
  giornateFestive,
} from '../data/ccnlData';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import DataTable from '../components/DataTable';

export default function Straordinari() {
  return (
    <PageHeader
      title="Straordinari & Festivita"
      subtitle="Straordinari, festivita non godute e calendario trimestrale"
    >
      <div className="space-y-6">
        {/* Straordinario e Festivita */}
        <Card
          title="Straordinario e Festivita Non Goduta"
          subtitle="Art. 26 (Straordinario) / Art. 25 (Festivita) - 1 giornata, zero scatti"
          icon={<Clock size={18} />}
        >
          <DataTable
            headers={['Ruolo', 'Straordinario (1 gg)', 'Fest. Non Goduta (1 gg)']}
            rows={roles.map((r) => [
              r,
              formatCurrency(straordinarioFestivita[r].straordinario),
              formatCurrency(straordinarioFestivita[r].festivita),
            ])}
            highlightFirst
          />
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Trimestri */}
          <Card
            title="Calendario Straordinari"
            subtitle="Art. 26 - GG standard a trimestre e pagamento"
            icon={<Calendar size={18} />}
          >
            <div className="space-y-3">
              {trimestri.map((t, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
                >
                  <div>
                    <p className="text-sm font-medium text-slate-800">
                      {t.periodo}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {t.gg} GG standard
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                      Pag. {t.pagamento}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-amber-50 rounded-lg">
              <p className="text-xs text-amber-700">
                <strong>Conguaglio:</strong> GG anno precedente - pagamento a Febbraio
              </p>
            </div>
          </Card>

          {/* Giornate Festive */}
          <Card
            title="Giornate Festive"
            subtitle="Art. 25 - Elenco festivita riconosciute"
            icon={<Calendar size={18} />}
          >
            <div className="grid grid-cols-2 gap-2">
              {giornateFestive.map((g, i) => (
                <div
                  key={g}
                  className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg"
                >
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </div>
                  <span className="text-sm text-slate-700 font-medium">
                    {g}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </PageHeader>
  );
}
