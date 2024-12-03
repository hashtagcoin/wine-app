import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RegionMap } from '../components/RegionMap';
import { WineCard } from '../components/WineCard';
import { featuredWines } from '../data/mockData';
import { Wine } from '../types/wine';
import { MapPin } from 'lucide-react';

const regions = [
  {
    id: '1',
    name: 'Margaret River',
    coordinates: [115.1390, -33.9544],
    description: 'Known for Cabernet Sauvignon and Chardonnay',
    image: 'https://images.unsplash.com/photo-1507484467459-0c01be16726e?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    name: 'Barossa Valley',
    coordinates: [138.9608, -34.4854],
    description: 'Famous for bold Shiraz wines',
    image: 'https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    name: 'Yarra Valley',
    coordinates: [145.5178, -37.6173],
    description: 'Cool climate wines including Pinot Noir',
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80'
  }
];

export const Regions: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);
  const [selectedWine, setSelectedWine] = useState<Wine | null>(null);

  const regionWines = featuredWines.filter(wine => 
    wine.region.toLowerCase() === selectedRegion.name.toLowerCase()
  );

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">
          Wine Regions
        </h1>
        <p className="text-xl text-gray-600">
          Explore Australia's diverse wine regions
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <RegionMap regions={regions} onRegionClick={setSelectedRegion} />
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-red-600" />
            <h2 className="text-xl font-semibold">{selectedRegion.name}</h2>
          </div>
          <img
            src={selectedRegion.image}
            alt={selectedRegion.name}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-600 mb-4">{selectedRegion.description}</p>
          
          <div className="space-y-4">
            <h3 className="font-semibold">Featured Wines from this Region</h3>
            {regionWines.map(wine => (
              <motion.div
                key={wine.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <WineCard wine={wine} onClick={() => setSelectedWine(wine)} />
              </motion.div>
            ))}
          </div>
        </div>
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