import { useState, useMemo } from 'react';
import HeroSection from './components/HeroSection';
import SummaryCards from './components/SummaryCards';
import BestPicks from './components/BestPicks';
import Filters from './components/Filters';
import ComparisonTable from './components/ComparisonTable';
import RankingExplanation from './components/RankingExplanation';
import Footer from './components/Footer';
import { fibreData } from './data/fibreData';

export default function App() {
  const [filters, setFilters] = useState({
    provider: 'All',
    speed: 'All',
    maxPrice: 400,
    cheapestOnly: false,
    topRankedOnly: false
  });

  const getRank = (provider) => {
    switch (provider) {
      case 'Unifi': return 1;
      case 'CelcomDigi': return 2;
      case 'Maxis': return 3;
      case 'U Mobile': return 4;
      default: return 99;
    }
  };

  const allSpeeds = ["100Mbps", "300Mbps", "500Mbps", "1Gbps", "2Gbps"];
  const allProviders = ["Unifi", "CelcomDigi", "Maxis", "U Mobile"];

  const processedData = useMemo(() => {
    let rows = [];

    // Flatten data and inject missing Maxis rows
    fibreData.forEach(providerData => {
      // Add existing plans
      providerData.plans.forEach(plan => {
        rows.push({
          provider: providerData.provider,
          link: providerData.link,
          contract: providerData.contract,
          speed: plan.speed,
          price: plan.price,
          originalPrice: plan.originalPrice,
          suitableFor: plan.suitableFor,
          benefits: plan.benefits,
          isMissing: false
        });
      });

      // Inject missing for Maxis
      if (providerData.provider === "Maxis") {
        const existingSpeeds = providerData.plans.map(p => p.speed);
        allSpeeds.forEach(speed => {
          if (!existingSpeeds.includes(speed)) {
             rows.push({
               provider: "Maxis",
               link: providerData.link,
               contract: providerData.contract,
               speed: speed,
               price: 9999, // Dummy high price for sorting backend
               isMissing: true
             });
          }
        });
      }
    });

    // Apply Filters
    if (filters.provider !== 'All') {
      rows = rows.filter(r => r.provider === filters.provider);
    }
    if (filters.speed !== 'All') {
      rows = rows.filter(r => r.speed === filters.speed);
    }
    
    // filters.maxPrice applies to valid plans, skip missing when filtering by price
    rows = rows.filter(r => r.isMissing || r.price <= parseInt(filters.maxPrice, 10));

    if (filters.topRankedOnly) {
      rows = rows.filter(r => getRank(r.provider) <= 2);
    }

    if (filters.cheapestOnly) {
      const cheapestByProvider = {};
      rows.forEach(r => {
        if (!r.isMissing) {
          if (!cheapestByProvider[r.provider] || r.price < cheapestByProvider[r.provider].price) {
            cheapestByProvider[r.provider] = r;
          }
        }
      });
      // For cheapest only, we don't return missing rows. Just the cheapest valid ones.
      rows = Object.values(cheapestByProvider);
    }

    // Sort heavily by rank, then price
    rows.sort((a, b) => {
      const rankA = getRank(a.provider);
      const rankB = getRank(b.provider);
      if (rankA !== rankB) return rankA - rankB;
      
      const priceA = a.isMissing ? 9999 : a.price;
      const priceB = b.isMissing ? 9999 : b.price;
      return priceA - priceB;
    });

    return rows;
  }, [filters]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-blue-200">
      <HeroSection />
      
      <main className="flex-grow">
        <SummaryCards />
        
        <BestPicks />
        
        <section className="py-16 px-4 md:px-8 bg-slate-50" id="compare">
          <div className="max-w-6xl mx-auto mb-10 text-center">
            <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Detailed Plan Comparison</h2>
            <p className="text-slate-500 mt-2">Filter and find the perfect package for your household.</p>
          </div>
          
          <Filters 
            providers={allProviders} 
            speeds={allSpeeds} 
            filters={filters} 
            setFilters={setFilters} 
          />
          
          <ComparisonTable plansData={processedData} />
        </section>

        <RankingExplanation />
      </main>

      <Footer />
    </div>
  );
}
