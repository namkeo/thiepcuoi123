import React, { useState, useRef, useEffect } from 'react';
import { Music, Pause, Play } from 'lucide-react';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Beautiful in White - Westlife (Wedding Song)
    // Using a free wedding music alternative
    audioRef.current = new Audio("https://cdn.pixabay.com/audio/2023/10/03/audio_c8dbda00a3.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

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

  // Auto-play attempt on interaction if passed as prop, but handled manually for now
  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-6 right-6 z-50 bg-wedding-red/90 text-wedding-cream p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse border border-wedding-gold"
    >
      {isPlaying ? <Pause size={24} /> : <Music size={24} />}
    </button>
  );
};
