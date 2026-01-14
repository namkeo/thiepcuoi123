import React, { useState, useRef } from 'react';
import { Envelope } from './components/Envelope';
import { InvitationDetails } from './components/InvitationDetails';
import { MusicPlayer } from './components/MusicPlayer';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const musicPlayerRef = useRef<{ play: () => void }>(null);

  const handleOpen = () => {
    setIsOpened(true);
    // Auto-play music when envelope opens
    if (musicPlayerRef.current) {
      musicPlayerRef.current.play();
    }
  };

  return (
    <>
      <MusicPlayer ref={musicPlayerRef} />
      <AnimatePresence mode="wait">
        {!isOpened ? (
          <Envelope key="envelope" onOpen={handleOpen} />
        ) : (
          <InvitationDetails key="details" />
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
