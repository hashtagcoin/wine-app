import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WineCard } from '../components/WineCard';
import { Wine } from '../types/wine';
import { Heart } from 'lucide-react';

export const Favorites: React.FC = () => {
  // In a real app, this would be managed by a proper state management solution
  const [favorites] = useState<Wine[]>([]);
  const [selectedWine, setSelectedWine] = useState<Wine | null>(null);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="font-serif text-4xl font-bold text-gray-900 mb-4">
          Your Favorites
        </h1>
        <p className="text-xl text-gray-600">
          Your personally curated collection of exceptional wines
        </p>
      </motion.div>

      {favorites.length === 0 ? (
        <div className="text-center py-16">
          <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">No favorites yet</h2>
          <p className="text-gray-600">
            Start exploring our collection and save your favorite wines here
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((wine) => (
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
      )}

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