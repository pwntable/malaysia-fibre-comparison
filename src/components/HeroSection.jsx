import { Info } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white py-20 px-4 md:px-8 text-center relative overflow-hidden shadow-md">
      {/* Decorative background abstract */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-blue-500 blur-[80px]"></div>
        <div className="absolute top-1/2 -right-20 w-96 h-96 rounded-full bg-indigo-500 blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
          Malaysia Fibre Internet <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Comparison</span>
        </h1>
        <p className="text-lg md:text-xl text-blue-100/90 font-medium max-w-2xl mx-auto mb-8 leading-relaxed">
          Compare provider pricing, download speeds, and bundled benefits to find the best plan for you and your family.
        </p>
        
        <div className="inline-flex items-center gap-2 bg-slate-800/60 rounded-full px-5 py-2.5 text-sm md:text-base text-blue-200 backdrop-blur-md border border-slate-600/50 shadow-sm transition-transform hover:scale-105">
          <Info className="w-5 h-5 text-cyan-400" />
          <span>Data based on currently provided plan dataset</span>
        </div>
      </div>
    </div>
  );
}
