import { Award, Zap, DollarSign, Gem } from 'lucide-react';

export default function BestPicks() {
  return (
    <section className="py-12 px-4 md:px-8 bg-blue-50/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 tracking-tight mb-8">Our Best Picks</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Best Overall */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-300 transition-colors flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xs uppercase font-black tracking-widest text-blue-600 mb-1">Best Overall</h3>
              <h4 className="text-2xl font-bold text-slate-900 mb-2">Unifi</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Offers the best balance of clear 24-month contract terms, competitive pricing, and solid bundled benefits including a Wi-Fi 6 combo box and entertainment options.
              </p>
            </div>
          </div>

          {/* Best for Heavy Users */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-orange-300 transition-colors flex items-start gap-4">
            <div className="p-3 bg-orange-100 rounded-xl text-orange-600">
              <Zap className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xs uppercase font-black tracking-widest text-orange-600 mb-1">Best for Heavy Users</h3>
              <h4 className="text-2xl font-bold text-slate-900 mb-2">CelcomDigi</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Offers blazing fast 1Gbps and 2Gbps speeds alongside massive cross-bundle rebates for existing postpaid users. Perfect for 4K streaming and simultaneous heavy downloads.
              </p>
            </div>
          </div>

          {/* Best Budget */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-green-300 transition-colors flex items-start gap-4">
            <div className="p-3 bg-green-100 rounded-xl text-green-600">
              <DollarSign className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xs uppercase font-black tracking-widest text-green-600 mb-1">Best Budget</h3>
              <h4 className="text-2xl font-bold text-slate-900 mb-2">U Mobile</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Coming in at just RM79 for 100Mbps, U Mobile provides the absolute cheapest entry point into fibre broadband, perfect for smaller households.
              </p>
            </div>
          </div>

          {/* Best Premium Feel */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-purple-300 transition-colors flex items-start gap-4">
            <div className="p-3 bg-purple-100 rounded-xl text-purple-600">
              <Gem className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xs uppercase font-black tracking-widest text-purple-600 mb-1">Best Premium Feel</h3>
              <h4 className="text-2xl font-bold text-slate-900 mb-2">Maxis</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Their 500Mbps tier is bundled with a certified Wi-Fi 6 router, dedicated 'Maxperts' support, and Sooka content. 
                <i> (Note: Other speeds are not clearly provided in the current dataset.)</i>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
