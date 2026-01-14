import React, { useState } from 'react';
import { Envelope } from './components/Envelope';
import { InvitationDetails } from './components/InvitationDetails';
import { MusicPlayer } from './components/MusicPlayer';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <MusicPlayer />
      <AnimatePresence mode="wait">
        {!isOpened ? (
          <Envelope key="envelope" onOpen={() => setIsOpened(true)} />
        ) : (
          <InvitationDetails key="details" />
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
