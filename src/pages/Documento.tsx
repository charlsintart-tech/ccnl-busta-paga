import { FileText } from 'lucide-react';
import PageHeader from '../components/PageHeader';

export default function Documento() {
  const pdfUrl = import.meta.env.BASE_URL + 'ccnl-documento.pdf';

  return (
    <PageHeader
      title="Documento Originale"
      subtitle="CCNL 2001 - Accordi di 2° Livello 2013 - Aumenti 2024/2025"
    >
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="text-blue-600">
              <FileText size={18} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-800">PDF Completo</h3>
              <p className="text-xs text-slate-500 mt-0.5">Documento contrattuale originale</p>
            </div>
          </div>
          <a
            href={pdfUrl}
            download
            className="px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Scarica PDF
          </a>
        </div>
        <div className="w-full" style={{ height: 'calc(100vh - 220px)', minHeight: '500px' }}>
          <iframe
            src={pdfUrl}
            className="w-full h-full rounded-b-xl"
            title="CCNL Documento"
          />
        </div>
      </div>
    </PageHeader>
  );
}
