import { Award, Zap, Star, ShieldCheck } from 'lucide-react';

export default function RankingExplanation() {
  return (
    <section className="py-12 px-4 md:px-8 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-800 tracking-tight">How We Ranked Them</h2>
          <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
            Our unbiased ranking is based purely on the provided dataset, weighing pricing, speed, bundled benefits, and contract transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 rounded-bl-full -z-0 opacity-50 group-hover:scale-110 transition-transform"></div>
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-600 font-black text-lg">1</span>
              <h3 className="text-xl font-bold text-slate-800">Unifi</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed relative z-10">
              <strong>Best Overall.</strong> Unifi offers the strongest balance of price, rich benefits (Wi-Fi 6 combo box, Netflix bundles), and has clearly shown 24-month contract terms.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-bl-full -z-0 opacity-50 group-hover:scale-110 transition-transform"></div>
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-black text-lg">2</span>
              <h3 className="text-xl font-bold text-slate-800">CelcomDigi</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed relative z-10">
              <strong>Runner-Up.</strong> Exceptional speeds up to 2Gbps and massive bundled benefits. However, contract details are not clearly shown in the current dataset.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-green-100 rounded-bl-full -z-0 opacity-50 group-hover:scale-110 transition-transform"></div>
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 font-black text-lg">3</span>
              <h3 className="text-xl font-bold text-slate-800">Maxis</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed relative z-10">
              <strong>Premium Feel.</strong> Excellent tiers bundled with Wi-Fi 6, Sooka content, and even free devices from RM1/mth. However, they lack higher 1Gbps or 2Gbps speeds compared to the top two.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 rounded-bl-full -z-0 opacity-50 group-hover:scale-110 transition-transform"></div>
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-600 font-black text-lg">4</span>
              <h3 className="text-xl font-bold text-slate-800">U Mobile</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed relative z-10">
              <strong>Budget Pick.</strong> The cheapest entry point at RM79, but the benefits are more basic and contract terms are not clearly outlined in the data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
