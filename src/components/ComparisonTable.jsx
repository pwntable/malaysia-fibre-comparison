import { CheckCircle2, AlertTriangle } from 'lucide-react';

export default function ComparisonTable({ plansData }) {
  if (plansData.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300">
        <AlertTriangle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
        <h3 className="text-lg font-medium text-slate-800">No plans found</h3>
        <p className="text-slate-500">Try adjusting your filters to see more results.</p>
      </div>
    );
  }

  const getRank = (provider) => {
    switch (provider) {
      case 'Unifi': return 1;
      case 'CelcomDigi': return 2;
      case 'Maxis': return 3;
      case 'U Mobile': return 4;
      default: return 99;
    }
  };

  // Group missing maxis plans logically just as a visual cue if we wanted?
  // The requirement says: "For Maxis packages other than 500Mbps: show 'Not provided in current dataset'"
  // We will handle this in the parent container or directly in the table if it's part of the filtered view.
  // Actually, we can statically append these rows to the end if the provider limit allows it.
  
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden max-w-6xl mx-auto">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="py-4 px-5 text-xs uppercase tracking-wider font-bold text-slate-500">Provider & Plan</th>
              <th className="py-4 px-5 text-xs uppercase tracking-wider font-bold text-slate-500">Speed</th>
              <th className="py-4 px-5 text-xs uppercase tracking-wider font-bold text-slate-500">Monthly Price</th>
              <th className="py-4 px-5 text-xs uppercase tracking-wider font-bold text-slate-500 max-w-[200px]">Suitable For</th>
              <th className="py-4 px-5 text-xs uppercase tracking-wider font-bold text-slate-500">Benefits</th>
              <th className="py-4 px-5 text-xs uppercase tracking-wider font-bold text-slate-500 text-center">Rank</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {plansData.map((row, index) => (
              <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                <td className="py-4 px-5 align-top">
                  {row.isMissing ? (
                    <div className="opacity-50">
                      <a href={row.link} target="_blank" rel="noopener noreferrer" className="font-bold text-slate-900 hover:text-blue-600 hover:underline transition-colors block">
                        {row.provider}
                      </a>
                      <div className="text-xs text-slate-500 mt-1">Contract: {row.contract}</div>
                    </div>
                  ) : (
                    <div>
                      <a href={row.link} target="_blank" rel="noopener noreferrer" className="font-bold text-slate-900 hover:text-blue-600 hover:underline transition-colors block">
                        {row.provider}
                      </a>
                      <div className="text-xs text-slate-500 mt-1">Contract: {row.contract}</div>
                    </div>
                  )}
                </td>
                
                <td className="py-4 px-5 align-top">
                  {row.isMissing ? (
                    <span className="text-xs font-medium bg-slate-100 text-slate-500 py-1 px-2 rounded">Any other</span>
                  ) : (
                    <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 font-bold py-1 px-2.5 rounded-lg border border-blue-100 shadow-sm text-sm">
                      <ZapIcon />
                      {row.speed}
                    </div>
                  )}
                </td>

                <td className="py-4 px-5 align-top">
                  {row.isMissing ? (
                    <span className="text-sm italic text-slate-400">Not provided in current dataset</span>
                  ) : (
                    <div>
                      <div className="text-xl font-bold text-slate-900">RM{row.price}</div>
                      {row.originalPrice && (
                        <div className="text-xs text-slate-400 line-through mt-0.5">RM{row.originalPrice}</div>
                      )}
                    </div>
                  )}
                </td>

                <td className="py-4 px-5 align-top text-sm text-slate-600 max-w-[200px]">
                  {row.isMissing ? '-' : row.suitableFor}
                </td>

                <td className="py-4 px-5 align-top">
                  {row.isMissing ? (
                    '-'
                  ) : (
                    <ul className="space-y-1.5 flex flex-col items-start text-sm">
                      {row.benefits.map((benefit, i) => (
                        <li key={i} className="flex gap-2 text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-tight">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </td>

                <td className="py-4 px-5 align-top text-center">
                  <span className="font-black text-slate-300 text-2xl">
                    #{getRank(row.provider)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ZapIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
  );
}
