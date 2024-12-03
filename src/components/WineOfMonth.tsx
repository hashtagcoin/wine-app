import React from 'react';
import { Wine } from '../types/wine';
import { Star, Award } from 'lucide-react';

interface WineOfMonthProps {
  wine: Wine;
  onClick: () => void;
}

export const WineOfMonth: React.FC<WineOfMonthProps> = ({ wine, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative">
          <img 
            src={wine.imageUrl} 
            alt={wine.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full flex items-center">
            <Award className="w-4 h-4 mr-1" />
            <span className="text-sm font-medium">Wine of the Month</span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-serif font-semibold text-gray-900">{wine.name}</h3>
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="ml-1 text-lg text-gray-600">{wine.rating}</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-4">{wine.winery} · {wine.region}</p>
          <p className="text-gray-700 mb-4">{wine.description}</p>
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <span className="font-medium mr-2">Varietal:</span>
              {wine.varietal}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="font-medium mr-2">Tasting Notes:</span>
              {wine.tastingNotes.join(', ')}
            </div>
          </div>
          <div className="mt-6 flex justify-between items-center">
            <span className="text-2xl font-bold text-gray-900">${wine.price}</span>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};