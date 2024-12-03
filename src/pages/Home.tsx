import React, { useState } from 'react';
import { WineOfMonth } from '../components/WineOfMonth';
import { WineCard } from '../components/WineCard';
import { featuredWines, wineOfTheMonth } from '../data/mockData';
import { Wine, WineFilter } from '../types/wine';
import { motion } from 'framer-motion';

export const Home: React.FC = () => {
  const [selectedWine, setSelectedWine] = useState<Wine | null>(null);
  const [filters, setFilters] = useState<WineFilter>({
    type: 'all',
    region: 'all',
    priceRange: 'all'
  });

  const handleWineClick = (wine: Wine) => {
    setSelectedWine(wine);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">
            Discover Australia's Hidden Gems
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore exceptional wines from Australia's most innovative and boutique wineries.
          </p>
        </motion.div>
      </section>

      {/* Wine of the Month */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-6">Wine of the Month</h2>
        <WineOfMonth wine={wineOfTheMonth} onClick={() => handleWineClick(wineOfTheMonth)} />
      </section>

      {/* Featured Wines */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-serif text-2xl font-semibold text-gray-900">Featured Wines</h2>
          <div className="flex gap-4">
            <select 
              className="rounded-lg border-gray-300 text-sm"
              value={filters.type}
              onChange={(e) => setFilters({...filters, type: e.target.value})}
            >
              <option value="all">All Types</option>
              <option value="red">Red</option>
              <option value="white">White</option>
            </select>
            <select 
              className="rounded-lg border-gray-300 text-sm"
              value={filters.region}
              onChange={(e) => setFilters({...filters, region: e.target.value})}
            >
              <option value="all">All Regions</option>
              <option value="margaret-river">Margaret River</option>
              <option value="beechworth">Beechworth</option>
              <option value="macedon">Macedon Ranges</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredWines.map((wine) => (
            <motion.div
              key={wine.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <WineCard wine={wine} onClick={() => handleWineClick(wine)} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Wine Detail Modal */}
      {selectedWine && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-serif text-2xl font-bold">{selectedWine.name}</h3>
              <button 
                onClick={() => setSelectedWine(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <img 
              src={selectedWine.imageUrl} 
              alt={selectedWine.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <div className="prose max-w-none">
              <p className="text-lg mb-4">{selectedWine.story}</p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold">Tasting Notes</h4>
                  <ul className="list-disc pl-4">
                    {selectedWine.tastingNotes.map((note, index) => (
                      <li key={index}>{note}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Food Pairings</h4>
                  <ul className="list-disc pl-4">
                    {selectedWine.foodPairings.map((pairing, index) => (
                      <li key={index}>{pairing}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex justify-between items-center mt-6">
                <span className="text-xl font-bold">${selectedWine.price}</span>
                <button className="btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};