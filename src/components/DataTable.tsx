interface Props {
  headers: string[];
  rows: (string | number)[][];
  highlightFirst?: boolean;
}

export default function DataTable({ headers, rows, highlightFirst = false }: Props) {
  return (
    <div className="overflow-x-auto -mx-5">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-50">
            {headers.map((h, i) => (
              <th
                key={i}
                className={`px-4 py-2.5 text-xs font-semibold text-slate-600 uppercase tracking-wider whitespace-nowrap ${
                  i === 0 ? 'text-left' : 'text-right'
                }`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((row, ri) => (
            <tr key={ri} className="hover:bg-blue-50/40 transition-colors">
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-4 py-2.5 whitespace-nowrap ${
                    ci === 0
                      ? `text-left ${highlightFirst ? 'font-medium text-slate-800' : 'text-slate-700'}`
                      : 'text-right text-slate-600 font-mono text-xs'
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
