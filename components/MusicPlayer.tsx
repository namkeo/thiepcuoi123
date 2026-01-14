import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Music, Pause } from 'lucide-react';

export interface MusicPlayerRef {
  play: () => void;
}

export const MusicPlayer = forwardRef<MusicPlayerRef>((props, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Beautiful in White - Westlife
    audioRef.current = new Audio("/Beautiful In White.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Expose play method to parent component
  useImperativeHandle(ref, () => ({
    play: () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().catch(e => console.error("Playback failed", e));
        setIsPlaying(true);
      }
    }
  }));

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.error("Playback failed", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-6 right-6 z-50 bg-wedding-red/90 text-wedding-cream p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse border border-wedding-gold"
      title={isPlaying ? "Pause" : "Play Music"}
    >
      {isPlaying ? <Pause size={24} /> : <Music size={24} />}
    </button>
  );
});
