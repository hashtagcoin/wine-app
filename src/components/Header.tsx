import React from 'react';
import { Search, Wine, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-red-600' : 'text-gray-700 hover:text-red-600';
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <Wine className="h-8 w-8 text-red-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">Wine Traveller</span>
          </Link>
          
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search wines, regions, or varietals..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link to="/discover" className={isActive('/discover')}>
              Discover
            </Link>
            <Link to="/regions" className={isActive('/regions')}>
              Regions
            </Link>
            <Link to="/favorites" className={isActive('/favorites')}>
              Favorites
            </Link>
          </nav>

          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
};