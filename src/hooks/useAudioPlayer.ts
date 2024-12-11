import { useRef, useState, useEffect, useCallback } from 'react';
import type { RadioStation } from '../data/radios';

export function useAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStation, setCurrentStation] = useState<RadioStation | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playStation = useCallback((station: RadioStation | null) => {
    if (currentStation?.id === station?.id) {
      // Toggle play/pause if same station
      if (isPlaying) {
        audioRef.current?.pause();
      } else {
        audioRef.current?.play().catch(error => {
          console.error('Error playing audio:', error);
        });
      }
    } else {
      // Change station
      setCurrentStation(station);
      if (audioRef.current) {
        audioRef.current.load(); // Reset the audio element
        audioRef.current.play().catch(error => {
          console.error('Error playing audio:', error);
        });
      }
    }
  }, [currentStation, isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    
    if (currentStation && audio) {
      audio.load();
      audio.play().catch(error => {
        console.error('Error playing audio:', error);
      });
    }

    return () => {
      if (audio) {
        audio.pause();
        audio.src = '';
      }
    };
  }, [currentStation]);

  return {
    isPlaying,
    currentStation,
    audioRef,
    playStation,
    setIsPlaying,
  };
}