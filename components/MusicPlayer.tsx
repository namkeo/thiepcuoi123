import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Music, Pause, Play, SkipForward } from 'lucide-react';

// Playlist of romantic wedding songs (royalty-free)
const WEDDING_PLAYLIST = [
  {
    title: "Beautiful Wedding",
    url: "https://assets.mixkit.co/music/preview/mixkit-wedding-invitation-513.mp3"
  },
  {
    title: "Romantic Piano",
    url: "https://assets.mixkit.co/music/preview/mixkit-romantic-piano-melody-533.mp3"
  },
  {
    title: "Dreamy Piano",
    url: "https://assets.mixkit.co/music/preview/mixkit-dreaming-big-31.mp3"
  }
];

export interface MusicPlayerRef {
  play: () => void;
}

export const MusicPlayer = forwardRef<MusicPlayerRef>((props, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(WEDDING_PLAYLIST[currentTrack].url);
    audioRef.current.volume = 0.4;

    // Auto-play next track when current ends
    const handleEnded = () => {
      setCurrentTrack((prev) => (prev + 1) % WEDDING_PLAYLIST.length);
    };

    audioRef.current.addEventListener('ended', handleEnded);

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleEnded);
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [currentTrack]);

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play().catch(e => console.error("Playback failed", e));
    }
  }, [currentTrack]);

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

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % WEDDING_PLAYLIST.length);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
      <button
        onClick={togglePlay}
        className="bg-wedding-red/90 text-wedding-cream p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse border border-wedding-gold"
        title={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? <Pause size={24} /> : <Music size={24} />}
      </button>
      <button
        onClick={nextTrack}
        className="bg-wedding-gold/90 text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 border border-wedding-red"
        title="Next song"
      >
        <SkipForward size={20} />
      </button>
    </div>
  );
});
