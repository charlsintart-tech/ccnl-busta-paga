import PageHeader from '../components/PageHeader';

export default function Riepilogo() {
  const imgUrl = import.meta.env.BASE_URL + 'riepilogo-1.png';

  return (
    <PageHeader
      title="Riepilogo"
      subtitle="CCNL 2001 - Accordi di 2° Livello 2013 - Aumenti 2024/2025"
    >
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
        <img
          src={imgUrl}
          alt="Riepilogo CCNL"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </PageHeader>
  );
}
