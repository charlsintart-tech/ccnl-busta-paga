import { PiggyBank, Landmark, TrendingUp } from 'lucide-react';
import {
  roles,
  contributiINPS,
  fondaereo,
  fondaereoStima,
  aliquoteIRPEF,
} from '../data/ccnlData';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import DataTable from '../components/DataTable';

const fondaereoRoles = [
  'Com.te Super.',
  'Primo Com.te',
  'Comandante',
  '1^ Ufficiale',
  'Pilota di 1^',
  'Pilota di 2^',
  'Salario di ing.',
];

export default function Contributi() {
  return (
    <PageHeader
      title="Contributi & Previdenza"
      subtitle="INPS, FONDAEREO e aliquote IRPEF"
    >
      <div className="space-y-6">
        {/* Contributi INPS */}
        <Card
          title="Contributi INPS"
          subtitle="Stima versamento minimo mensile (zero scatti) - 2024/2025"
          icon={<Landmark size={18} />}
        >
          <DataTable
            headers={['Ruolo', 'Stima Mensile (2024-2025)']}
            rows={roles.map((r) => [r, `\u20AC ${contributiINPS[r]}`])}
            highlightFirst
          />
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* FONDAEREO */}
          <Card
            title="FONDAEREO"
            subtitle="Fondo pensione complementare"
            icon={<PiggyBank size={18} />}
          >
            {/* Contribution breakdown */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              <div className="p-3 bg-blue-50 rounded-lg text-center">
                <p className="text-xs text-blue-600 font-medium">TFR</p>
                <p className="text-lg font-bold text-blue-800">
                  {fondaereo.tfr}
                </p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg text-center">
                <p className="text-xs text-green-600 font-medium">Azienda</p>
                <p className="text-lg font-bold text-green-800">
                  {fondaereo.azienda}
                </p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg text-center">
                <p className="text-xs text-purple-600 font-medium">Pilota</p>
                <p className="text-lg font-bold text-purple-800">
                  {fondaereo.pilota}
                </p>
              </div>
            </div>

            {/* Stime versamento */}
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
              Stima versamento minimo medio mensile
            </h4>
            <DataTable
              headers={['Ruolo', 'Stima (2024-2025)']}
              rows={fondaereoRoles.map((r) => [
                r,
                `\u20AC ${fondaereoStima[r]}`,
              ])}
              highlightFirst
            />
          </Card>

          {/* IRPEF */}
          <Card
            title="Aliquote IRPEF 2024"
            subtitle="Scaglioni di imposta sul reddito"
            icon={<TrendingUp size={18} />}
          >
            <div className="space-y-4">
              {aliquoteIRPEF.map((a, i) => {
                const colors = [
                  'from-green-400 to-green-500',
                  'from-yellow-400 to-amber-500',
                  'from-red-400 to-red-500',
                ];
                const bgColors = [
                  'bg-green-50 border-green-200',
                  'bg-amber-50 border-amber-200',
                  'bg-red-50 border-red-200',
                ];
                const pct = parseInt(a.aliquota);
                return (
                  <div key={a.scaglione} className={`p-4 rounded-lg border ${bgColors[i]}`}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-slate-700 font-medium">
                        {a.scaglione}
                      </span>
                      <span className="text-xl font-bold text-slate-900">
                        {a.aliquota}
                      </span>
                    </div>
                    <div className="h-2.5 bg-white/50 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${colors[i]} rounded-full transition-all duration-500`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 p-4 bg-slate-50 rounded-lg">
              <h4 className="text-xs font-semibold text-slate-600 mb-2">
                Come funziona
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                L'IRPEF si applica a scaglioni progressivi: i primi 28.000 euro sono 
                tassati al 23%, la parte da 28.000 a 50.000 al 35%, e tutto quello 
                che supera i 50.000 euro al 43%.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </PageHeader>
  );
}
