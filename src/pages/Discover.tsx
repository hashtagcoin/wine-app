import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WineCard } from '../components/WineCard';
import { featuredWines } from '../data/mockData';
import { Wine } from '../types/wine';
import { Filter, SlidersHorizontal } from 'lucide-react';

export const Discover: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    type: 'all',
    region: 'all',
    priceRange: 'all',
    rating: 'all'
  });

  const [selectedWine, setSelectedWine] = useState<Wine | null>(null);

  const handleFilterChange = (filterType: string, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">
          Discover Australian Wines
        </h1>
        <p className="text-xl text-gray-600">
          Explore our curated selection of exceptional wines
        </p>
      </motion.div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-4 mb-6">
          <SlidersHorizontal className="w-5 h-5 text-gray-500" />
          <h2 className="text-lg font-semibold">Filters</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <select
            className="rounded-lg border-gray-300"
            value={selectedFilters.type}
            onChange={(e) => handleFilterChange('type', e.target.value)}
          >
            <option value="all">All Types</option>
            <option value="red">Red Wine</option>
            <option value="white">White Wine</option>
            <option value="sparkling">Sparkling</option>
          </select>

          <select
            className="rounded-lg border-gray-300"
            value={selectedFilters.region}
            onChange={(e) => handleFilterChange('region', e.target.value)}
          >
            <option value="all">All Regions</option>
            <option value="margaret-river">Margaret River</option>
            <option value="barossa-valley">Barossa Valley</option>
            <option value="yarra-valley">Yarra Valley</option>
          </select>

          <select
            className="rounded-lg border-gray-300"
            value={selectedFilters.priceRange}
            onChange={(e) => handleFilterChange('priceRange', e.target.value)}
          >
            <option value="all">All Prices</option>
            <option value="under-50">Under $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="over-100">Over $100</option>
          </select>

          <select
            className="rounded-lg border-gray-300"
            value={selectedFilters.rating}
            onChange={(e) => handleFilterChange('rating', e.target.value)}
          >
            <option value="all">All Ratings</option>
            <option value="4.5">4.5+ Stars</option>
            <option value="4">4+ Stars</option>
            <option value="3.5">3.5+ Stars</option>
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
            <WineCard wine={wine} onClick={() => setSelectedWine(wine)} />
          </motion.div>
        ))}
      </div>

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
    </div>
  );
};