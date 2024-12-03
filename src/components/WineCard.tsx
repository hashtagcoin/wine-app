import React from 'react';
import { Wine } from '../types/wine';
import { Star, Wine as WineIcon } from 'lucide-react';

interface WineCardProps {
  wine: Wine;
  onClick?: () => void;
}

export const WineCard: React.FC<WineCardProps> = ({ wine, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
    >
      <div className="aspect-w-3 aspect-h-4">
        <img 
          src={wine.imageUrl} 
          alt={wine.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{wine.name}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{wine.rating}</span>
          </div>
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <WineIcon className="w-4 h-4 mr-1" />
          <span>{wine.varietal}</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm font-medium text-gray-900">${wine.price}</span>
          <span className="text-sm text-gray-500">{wine.region}, {wine.country}</span>
        </div>
      </div>
    </div>
  );
};