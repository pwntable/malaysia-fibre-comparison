import { fibreData } from '../data/fibreData';

export default function SummaryCards() {
  const getRank = (provider) => {
    switch (provider) {
      case 'Unifi': return 1;
      case 'CelcomDigi': return 2;
      case 'Maxis': return 3;
      case 'U Mobile': return 4;
      default: return 99;
    }
  };

  const getRankBadgeClass = (rank) => {
    switch (rank) {
      case 1: return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 2: return 'bg-slate-100 text-slate-800 border-slate-200';
      case 3: return 'bg-amber-100 text-amber-800 border-amber-200';
      case 4: return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getSpeedValue = (speedStr) => {
    if (speedStr.includes('Gbps')) {
      return parseFloat(speedStr) * 1000;
    }
    return parseFloat(speedStr);
  };

  const providers = [...fibreData].sort((a, b) => getRank(a.provider) - getRank(b.provider));

  return (
    <section className="py-12 px-4 md:px-8 bg-white" id="summary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 tracking-tight mb-8">Provider Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {providers.map((p) => {
            const rank = getRank(p.provider);
            const cheapestPlan = p.plans.reduce((min, plan) => plan.price < min.price ? plan : min, p.plans[0]);
            const fastestPlan = p.plans.reduce((max, plan) => getSpeedValue(plan.speed) > getSpeedValue(max.speed) ? plan : max, p.plans[0]);
            
            return (
              <div key={p.provider} className="bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col overflow-hidden relative">
                {/* Header */}
                <div className="bg-slate-50 border-b border-slate-100 p-5 flex justify-between items-start">
                  <div>
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-slate-900 hover:text-blue-600 hover:underline transition-colors block">
                      {p.provider}
                    </a>
                    <div className={`inline-block mt-2 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getRankBadgeClass(rank)}`}>
                      Rank #{rank}
                    </div>
                  </div>
                </div>
                
                {/* Body */}
                <div className="p-5 flex-grow flex flex-col gap-4">
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Cheapest Plan</span>
                    <p className="font-semibold text-slate-800 mt-1">{cheapestPlan.speed} at RM{cheapestPlan.price}/mo</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Fastest Available (Dataset)</span>
                    <p className="font-semibold text-slate-800 mt-1">{fastestPlan.speed} at RM{fastestPlan.price}/mo</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Contract</span>
                    <p className="text-sm text-slate-600 mt-1 leading-tight">{p.contract}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
