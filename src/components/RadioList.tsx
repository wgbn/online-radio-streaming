import React from 'react';
import type { RadioStation } from '../data/radios';
import { RadioStationCard } from './RadioStationCard';

interface RadioListProps {
  stations: RadioStation[];
  onSelectStation: (station: RadioStation) => void;
  currentStation: RadioStation | null;
}

export function RadioList({ stations, onSelectStation, currentStation }: RadioListProps) {
  return (
    <div className="divide-y divide-gray-200">
      {stations.map((station) => (
        <RadioStationCard
          key={station.id}
          station={station}
          isSelected={currentStation?.id === station.id}
          onSelect={onSelectStation}
        />
      ))}
    </div>
  );
}