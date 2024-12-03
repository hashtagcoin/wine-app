import React, { useState } from 'react';
import Map, { Marker } from 'react-map-gl';
import { Region } from '../types/wine';
import { MapPin, Loader } from 'lucide-react';
import 'mapbox-gl/dist/mapbox-gl.css';

interface RegionMapProps {
  regions: Region[];
  onRegionClick: (region: Region) => void;
}

export const RegionMap: React.FC<RegionMapProps> = ({ regions, onRegionClick }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleMapLoad = () => {
    setIsLoading(false);
  };

  const handleMapError = () => {
    setError('Unable to load the map. Please try again later.');
    setIsLoading(false);
  };

  if (error) {
    return (
      <div className="h-[400px] flex items-center justify-center bg-gray-100 rounded-lg">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg z-10">
          <Loader className="w-8 h-8 text-red-600 animate-spin" />
        </div>
      )}
      <Map
        initialViewState={{
          longitude: 0,
          latitude: 45,
          zoom: 3
        }}
        style={{ width: '100%', height: '400px' }}
        mapStyle="mapbox://styles/mapbox/light-v11"
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
        onLoad={handleMapLoad}
        onError={handleMapError}
      >
        {regions.map((region) => (
          <Marker
            key={region.id}
            longitude={region.coordinates[0]}
            latitude={region.coordinates[1]}
            onClick={() => onRegionClick(region)}
          >
            <MapPin className="w-6 h-6 text-red-600 hover:text-red-700 cursor-pointer" />
          </Marker>
        ))}
      </Map>
    </div>
  );
};