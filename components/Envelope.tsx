import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { WEDDING_DATA } from '../types';

interface EnvelopeProps {
  onOpen: () => void;
}

export const Envelope: React.FC<EnvelopeProps> = ({ onOpen }) => {
  const [isFlapOpen, setIsFlapOpen] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(false);

  // Pink Theme Colors for the envelope flaps
  const ENVELOPE_BODY_COLOR = '#e05a74'; // Matching wedding-red
  const FLAP_COLOR_DARK = '#c03d56'; // Darker shade for depth (bottom flap)
  const FLAP_COLOR_SIDE = '#cd4b63'; // Mid shade for sides

  const handleOpen = () => {
    if (isFlapOpen) return;
    setIsFlapOpen(true);
    
    // Sequence: Flap opens -> Card slides up -> Transition to full view
    setTimeout(() => {
      setIsCardVisible(true);
      setTimeout(() => {
        onOpen();
      }, 1500); // Wait for card to slide out partially
    }, 600);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-pink-50 overflow-hidden">
      <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519225468359-2996515c9dc4?q=80&w=2000&auto=format&fit=crop"
            alt="Background"
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
      </div>

      <div className="relative z-10 perspective-1000 cursor-pointer p-4" onClick={handleOpen}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-[350px] sm:w-[500px] h-[250px] sm:h-[350px]"
        >
          {/* Envelope Body (Back) */}
          <div className="absolute inset-0 bg-wedding-red shadow-2xl rounded-lg"></div>

          {/* Invitation Card (Hidden inside initially) */}
          <motion.div
            initial={{ y: 0 }}
            animate={isCardVisible ? { y: -200 } : { y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute left-4 right-4 top-2 bottom-2 bg-paper shadow-md flex flex-col items-center justify-center z-10 rounded border-2 border-wedding-gold"
          >
             <div className="border border-wedding-gold/20 p-2 w-full h-full flex flex-col items-center justify-center text-center bg-white">
                {/* Large Song Hỷ Symbol */}
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="text-wedding-red text-9xl md:text-[12rem] font-serif select-none leading-none filter drop-shadow-md">囍</div>
                    <p className="font-serif text-gray-600 text-xs uppercase tracking-wider mt-6 text-center font-bold">Trân trọng kính mời</p>
                </div>
             </div>
          </motion.div>

          {/* Envelope Bottom Flap */}
          <div 
            className="absolute bottom-0 w-0 h-0 z-20"
            style={{
              borderLeft: '175px solid transparent', // Adjusted for mobile width
              borderRight: '175px solid transparent',
              borderBottom: `140px solid ${FLAP_COLOR_DARK}`, 
            }}
          ></div>
          {/* Responsive fix for desktop borders */}
           <div 
            className="absolute bottom-0 w-0 h-0 z-20 hidden sm:block"
            style={{
              borderLeft: '250px solid transparent',
              borderRight: '250px solid transparent',
              borderBottom: `190px solid ${FLAP_COLOR_DARK}`,
            }}
          ></div>

          {/* Envelope Left Flap */}
          <div 
            className="absolute left-0 top-0 bottom-0 z-20"
             style={{
              width: 0,
              height: 0,
              borderTop: '125px solid transparent',
              borderBottom: '125px solid transparent',
              borderLeft: `180px solid ${FLAP_COLOR_SIDE}`,
            }}
          ></div>
          {/* Responsive Left */}
           <div 
            className="absolute left-0 top-0 bottom-0 z-20 hidden sm:block"
             style={{
              width: 0,
              height: 0,
              borderTop: '175px solid transparent',
              borderBottom: '175px solid transparent',
              borderLeft: `250px solid ${FLAP_COLOR_SIDE}`,
            }}
          ></div>


          {/* Envelope Right Flap */}
          <div 
            className="absolute right-0 top-0 bottom-0 z-20"
            style={{
              width: 0,
              height: 0,
              borderTop: '125px solid transparent',
              borderBottom: '125px solid transparent',
              borderRight: `180px solid ${FLAP_COLOR_SIDE}`,
            }}
          ></div>
           {/* Responsive Right */}
           <div 
            className="absolute right-0 top-0 bottom-0 z-20 hidden sm:block"
            style={{
              width: 0,
              height: 0,
              borderTop: '175px solid transparent',
              borderBottom: '175px solid transparent',
              borderRight: `250px solid ${FLAP_COLOR_SIDE}`,
            }}
          ></div>

          {/* Envelope Top Flap (The one that opens) */}
          <motion.div
            className="absolute top-0 w-full z-30 origin-top"
            initial={{ rotateX: 0 }}
            animate={{ rotateX: isFlapOpen ? 180 : 0, zIndex: isFlapOpen ? 0 : 30 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
             <div className="w-0 h-0 mx-auto border-l-[175px] border-r-[175px] border-t-[140px] border-l-transparent border-r-transparent border-t-wedding-red sm:border-l-[250px] sm:border-r-[250px] sm:border-t-[190px]"></div>
          </motion.div>

          {/* The Seal */}
          <motion.div 
            className="absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40"
            animate={{ opacity: isFlapOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
             <div className="w-12 h-12 rounded-full bg-wedding-gold flex items-center justify-center shadow-lg border-2 border-yellow-200">
               <span className="font-serif text-wedding-red font-bold text-xl pt-1">囍</span>
             </div>
          </motion.div>
          
          <motion.div
             className="absolute -bottom-12 sm:-bottom-12 w-full text-center z-20 px-4"
             animate={{ opacity: isFlapOpen ? 0 : 1 }}
          >
            <p className="text-wedding-red font-serif italic text-xs sm:text-sm bg-white/50 px-2 sm:px-3 py-1 rounded inline-block shadow max-w-full break-words">Chạm để mở thiệp</p>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};