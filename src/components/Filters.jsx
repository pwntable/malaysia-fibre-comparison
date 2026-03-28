export default function Filters({ 
  providers, 
  speeds,
  filters, 
  setFilters 
}) {
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-8 max-w-6xl mx-auto">
      <h3 className="text-sm uppercase font-bold text-slate-400 tracking-wider mb-4">Filter Plans</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Provider</label>
          <select 
            name="provider" 
            value={filters.provider} 
            onChange={handleChange}
            className="w-full border-slate-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2 bg-slate-50 border"
          >
            <option value="All">All Providers</option>
            {providers.map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Speed</label>
          <select 
            name="speed" 
            value={filters.speed} 
            onChange={handleChange}
            className="w-full border-slate-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2 bg-slate-50 border"
          >
            <option value="All">All Speeds</option>
            {speeds.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Max Monthly Price</label>
          <div className="flex items-center gap-3">
            <input 
              type="range" 
              name="maxPrice" 
              min="50" 
              max="400" 
              step="10" 
              value={filters.maxPrice} 
              onChange={handleChange}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <span className="text-sm font-medium text-slate-700 min-w-[60px]">RM {filters.maxPrice}</span>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-4 pt-5 border-t border-slate-100">
        <label className="flex items-center gap-2 cursor-pointer group">
          <input 
            type="checkbox" 
            name="cheapestOnly" 
            checked={filters.cheapestOnly} 
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500 cursor-pointer"
          />
          <span className="text-sm text-slate-700 font-medium group-hover:text-slate-900 transition-colors">Show only cheapest plan per provider</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer group">
          <input 
            type="checkbox" 
            name="topRankedOnly" 
            checked={filters.topRankedOnly} 
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500 cursor-pointer"
          />
          <span className="text-sm text-slate-700 font-medium group-hover:text-slate-900 transition-colors">Show only Top 2 Providers</span>
        </label>
      </div>
    </div>
  );
}
