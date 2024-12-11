import React from 'react';
import { Radio } from 'lucide-react';
import type { RadioStation } from '../data/radios';

interface RadioStationCardProps {
  station: RadioStation;
  isSelected: boolean;
  onSelect: (station: RadioStation) => void;
}

export function RadioStationCard({ station, isSelected, onSelect }: RadioStationCardProps) {
  return (
    <button
      onClick={() => onSelect(station)}
      className={`w-full p-4 flex items-center space-x-4 hover:bg-gray-50 transition-colors ${
        isSelected ? 'bg-blue-50' : ''
      }`}
    >
      <div className="flex-shrink-0">
        {station.logo ? (
          <img
            src={station.logo}
            alt={station.name}
            className="w-12 h-12 rounded-lg object-cover"
          />
        ) : (
          <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
            <Radio className="w-6 h-6 text-gray-400" />
          </div>
        )}
      </div>
      <div className="flex-1 text-left">
        <h3 className="font-medium">{station.name}</h3>
        {station.genre && (
          <p className="text-sm text-gray-500">{station.genre}</p>
        )}
      </div>
    </button>
  );
}