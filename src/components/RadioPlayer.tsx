import React from 'react';
import { Play, Pause } from 'lucide-react';
import { useAudioPlayer } from '../hooks/useAudioPlayer';

export function RadioPlayer() {
  const { isPlaying, currentStation, audioRef, playStation, setIsPlaying } = useAudioPlayer();

  if (!currentStation) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
      <audio
        ref={audioRef}
        src={currentStation.url}
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
          onClick={() => playStation(currentStation)}
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
  );
}