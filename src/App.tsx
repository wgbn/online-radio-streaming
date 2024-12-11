import React, { useState, useRef } from 'react';
import { Radio, Play, Pause } from 'lucide-react';
import { radioStations } from './data/radios';

export default function App() {
  const [currentStation, setCurrentStation] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const playStation = (station) => {
    setCurrentStation(station);
    setIsPlaying(true);
    
    if (audioRef.current) {
      audioRef.current.src = station.url;
      audioRef.current.play();
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center space-x-3">
          <Radio className="w-6 h-6 text-blue-500" />
          <h1 className="text-xl font-bold text-gray-900">Online Radio</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 pb-24">
        <div className="divide-y divide-gray-200">
          {radioStations.map((station) => (
            <button
              key={station.id}
              onClick={() => playStation(station)}
              className={`w-full p-4 flex items-center space-x-4 hover:bg-gray-50 transition-colors ${
                currentStation?.id === station.id ? 'bg-blue-50' : ''
              }`}
            >
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                <Radio className="w-6 h-6 text-gray-400" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-medium">{station.name}</h3>
                {station.genre && (
                  <p className="text-sm text-gray-500">{station.genre}</p>
                )}
              </div>
            </button>
          ))}
        </div>
      </main>

      {currentStation && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
          <audio
            ref={audioRef}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
          
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold truncate">{currentStation.name}</h3>
              {currentStation.genre && (
                <p className="text-sm text-gray-500">{currentStation.genre}</p>
              )}
            </div>
            
            <button
              onClick={togglePlay}
              className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-colors"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}