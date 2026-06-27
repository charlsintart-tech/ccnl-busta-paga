import { Shield, Calendar, Heart } from 'lucide-react';
import { formatCurrency } from '../utils/format';
import { assicurazioni, ferie, altreInfo } from '../data/ccnlData';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import DataTable from '../components/DataTable';

const assicRoles = Object.keys(assicurazioni.casoMorte);

export default function Assicurazioni() {
  return (
    <PageHeader
      title="Assicurazioni & Ferie"
      subtitle="Coperture assicurative, ferie, malattia e congedi"
    >
      <div className="space-y-6">
        {/* Assicurazioni */}
        <Card
          title="Assicurazioni"
          subtitle="Art. 43 - Coperture assicurative per ruolo"
          icon={<Shield size={18} />}
        >
          <DataTable
            headers={[
              'Ruolo',
              'Caso Morte',
              'Invalidita Permanente',
              'Invalidita <= 5%',
            ]}
            rows={assicRoles.map((r) => [
              r,
              formatCurrency(assicurazioni.casoMorte[r as keyof typeof assicurazioni.casoMorte]),
              formatCurrency(assicurazioni.invaliditaPermanente[r as keyof typeof assicurazioni.invaliditaPermanente]),
              formatCurrency(assicurazioni.invalidita5[r as keyof typeof assicurazioni.invalidita5]),
            ])}
            highlightFirst
          />

          {/* Visual comparison */}
          <div className="mt-6 pt-5 border-t border-slate-100">
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
              Confronto coperture assicurative
            </h4>
            <div className="space-y-5">
              {assicRoles.map((role) => {
                const morte = assicurazioni.casoMorte[role as keyof typeof assicurazioni.casoMorte];
                const inv = assicurazioni.invaliditaPermanente[role as keyof typeof assicurazioni.invaliditaPermanente];
                const inv5 = assicurazioni.invalidita5[role as keyof typeof assicurazioni.invalidita5];
                const max = Math.max(morte, inv, inv5);
                return (
                  <div key={role}>
                    <p className="text-xs text-slate-700 font-semibold mb-2">{role}</p>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-slate-400 w-24 shrink-0">Caso morte</span>
                        <div className="flex-1 h-3 bg-slate-100 rounded-full">
                          <div className="h-full bg-red-400 rounded-full" style={{ width: `${(morte / max) * 100}%` }} />
                        </div>
                        <span className="text-[10px] text-slate-500 font-mono w-20 text-right">{formatCurrency(morte)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-slate-400 w-24 shrink-0">Inv. perm.</span>
                        <div className="flex-1 h-3 bg-slate-100 rounded-full">
                          <div className="h-full bg-amber-400 rounded-full" style={{ width: `${(inv / max) * 100}%` }} />
                        </div>
                        <span className="text-[10px] text-slate-500 font-mono w-20 text-right">{formatCurrency(inv)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-slate-400 w-24 shrink-0">Inv. &le;5%</span>
                        <div className="flex-1 h-3 bg-slate-100 rounded-full">
                          <div className="h-full bg-blue-400 rounded-full" style={{ width: `${(inv5 / max) * 100}%` }} />
                        </div>
                        <span className="text-[10px] text-slate-500 font-mono w-20 text-right">{formatCurrency(inv5)}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Ferie */}
          <Card
            title="Ferie"
            subtitle="Art. 48 - Giorni di ferie annuali"
            icon={<Calendar size={18} />}
          >
            <div className="flex items-center justify-center py-4">
              <div className="relative w-40 h-40">
                {/* Simple donut chart */}
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9155"
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="3"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9155"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    strokeDasharray="50 50"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9155"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3"
                    strokeDasharray="50 50"
                    strokeDashoffset="-50"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-slate-900">
                    {ferie.giorniTotali}
                  </span>
                  <span className="text-xs text-slate-500">Giorni</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-2">
              <div className="p-3 bg-blue-50 rounded-lg text-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mx-auto mb-1" />
                <p className="text-lg font-bold text-slate-900">
                  {ferie.giorniAzienda}
                </p>
                <p className="text-xs text-slate-500">Azienda</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg text-center">
                <div className="w-3 h-3 rounded-full bg-emerald-500 mx-auto mb-1" />
                <p className="text-lg font-bold text-slate-900">
                  {ferie.giorniPilota}
                </p>
                <p className="text-xs text-slate-500">Pilota</p>
              </div>
            </div>
          </Card>

          {/* Altri riferimenti contrattuali */}
          <Card
            title="Altri Riferimenti Contrattuali"
            subtitle="Malattia, aspettativa, tredicesima e congedi"
            icon={<Heart size={18} />}
          >
            <div className="space-y-3">
              <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Malattia
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Trattamento economico in caso di malattia
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">
                    {altreInfo.malattia}
                  </span>
                </div>
              </div>
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Aspettativa
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Periodo di aspettativa non retribuita
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold">
                    {altreInfo.aspettativa}
                  </span>
                </div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Tredicesima
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Mensilita aggiuntiva annuale
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                    {altreInfo.tredicesima}
                  </span>
                </div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Congedo Matrimoniale
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Permesso retribuito per matrimonio
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                    {altreInfo.congedoMatrimoniale}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </PageHeader>
  );
}
