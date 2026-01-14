import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles, Home, Heart } from 'lucide-react';
import { WEDDING_DATA } from '../types';

export const InvitationDetails: React.FC = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1.5, staggerChildren: 0.4 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } }
  };

  const titleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { duration: 1.2, ease: "easeOut" } 
    }
  };

  const slideInLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } }
  };

  const slideInRight = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-paper bg-paper-texture overflow-x-hidden"
    >
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center p-6 text-center">
         {/* Floral Corners */}
         <div className="absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-floral-pattern bg-contain bg-no-repeat opacity-80 rotate-180"></div>
         <div className="absolute bottom-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-floral-pattern bg-contain bg-no-repeat opacity-80"></div>

         <motion.div variants={itemVariants} className="z-10">
           <motion.h2 
             variants={itemVariants}
             className="font-serif text-wedding-red uppercase tracking-[0.2em] text-sm md:text-base mb-4"
           >
             Lễ Thành Hôn
           </motion.h2>
           <motion.h1 
             variants={titleVariants}
             className="font-script text-6xl md:text-8xl text-wedding-red mb-6 drop-shadow-sm flex items-center justify-center gap-4"
           >
             <motion.span variants={slideInLeft}>{WEDDING_DATA.groom}</motion.span>
             <motion.div variants={itemVariants}>
               <Heart className="text-wedding-red fill-wedding-red w-12 h-12 md:w-16 md:h-16" />
             </motion.div>
             <motion.span variants={slideInRight}>{WEDDING_DATA.bride}</motion.span>
           </motion.h1>
           <motion.div 
             variants={itemVariants}
             className="flex items-center justify-center gap-4 text-gray-700 font-serif my-8"
           >
              <span className="border-t border-wedding-red w-12 md:w-24"></span>
              <span className="text-lg md:text-xl italic">{WEDDING_DATA.reception.fullDate}</span>
              <span className="border-t border-wedding-red w-12 md:w-24"></span>
           </motion.div>
           <motion.p 
             variants={itemVariants}
             className="font-sans text-gray-600 max-w-lg mx-auto leading-relaxed italic"
           >
             "{WEDDING_DATA.poem}"
           </motion.p>
         </motion.div>
         
         <motion.div variants={itemVariants} className="absolute bottom-10 animate-bounce">
            <Heart className="text-wedding-red fill-wedding-red w-6 h-6 opacity-60" />
         </motion.div>
      </section>

      {/* Couple & Parents Section */}
      <section className="py-20 px-6 bg-wedding-red/5">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-center font-serif text-3xl text-wedding-red mb-12 uppercase tracking-widest"
          >
            Gia Đình Hai Bên
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Groom's Side */}
              <motion.div variants={slideInLeft} className="text-center md:text-right border-b md:border-b-0 md:border-r border-wedding-gold/20 pb-8 md:pb-0 md:pr-12">
                 <h3 className="font-script text-4xl text-wedding-red mb-6">{WEDDING_DATA.groom}</h3>
                 <div className="font-serif text-gray-700 mt-4 space-y-1">
                    <p className="text-xs font-bold uppercase text-wedding-gold tracking-widest mb-2">Nhà Trai</p>
                    <p>Ông: <span className="font-semibold">{WEDDING_DATA.parents.groom.father}</span></p>
                    <p>Bà: <span className="font-semibold">{WEDDING_DATA.parents.groom.mother}</span></p>
                 </div>
              </motion.div>

              {/* Bride's Side */}
              <motion.div variants={slideInRight} className="text-center md:text-left pt-4 md:pt-0 md:pl-12">
                 <h3 className="font-script text-4xl text-wedding-red mb-6">{WEDDING_DATA.bride}</h3>
                 <div className="font-serif text-gray-700 mt-4 space-y-1">
                    <p className="text-xs font-bold uppercase text-wedding-gold tracking-widest mb-2">Nhà Gái</p>
                    <p>Ông: <span className="font-semibold">{WEDDING_DATA.parents.bride.father}</span></p>
                    <p>Bà: <span className="font-semibold">{WEDDING_DATA.parents.bride.mother}</span></p>
                 </div>
              </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Events Details */}
      <section className="py-20 px-6 relative">
         <motion.div 
           className="max-w-4xl mx-auto space-y-12"
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.2 }}
           variants={containerVariants}
         >
            
            {/* Lễ Vu Quy */}
            <motion.div 
              variants={itemVariants}
              className="bg-white p-8 md:p-10 shadow-xl rounded-sm border border-wedding-gold/30 text-center relative z-10"
            >
                <div className="flex items-center justify-center mb-6">
                   <Home className="text-wedding-gold w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-wedding-red mb-2 uppercase">Lễ Vu Quy</h3>
                <p className="text-gray-500 italic mb-6">Được cử hành tại Tư Gia</p>
                
                <div className="flex flex-col items-center gap-4 font-sans text-gray-700">
                    <div className="flex flex-col items-center">
                        <span className="font-bold text-lg">Thứ Bảy</span>
                        <span className="text-base">{WEDDING_DATA.ceremony.displayDate}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-lg">{WEDDING_DATA.ceremony.time}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="font-bold text-center whitespace-nowrap">{WEDDING_DATA.ceremony.address}</span>
                    </div>
                </div>
            </motion.div>

            {/* Lễ Thành Hôn */}
            <motion.div 
              variants={itemVariants}
              className="bg-white p-8 md:p-10 shadow-2xl rounded-sm border-2 border-wedding-red/20 text-center relative z-10 transform md:scale-105"
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-wedding-red text-white px-4 py-1 text-sm font-bold uppercase tracking-wider rounded shadow-lg">
                  Sự kiện chính
                </div>
                <div className="flex items-center justify-center mb-6 mt-4">
                   <Sparkles className="text-wedding-gold w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-wedding-red mb-2 uppercase font-bold">Lễ Thành Hôn</h3>
                <p className="text-gray-500 italic mb-8">Kính mời quý khách tới tham dự bữa tiệc thân mật</p>
                
                <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">{WEDDING_DATA.reception.venue}</h4>
                      <p className="text-gray-600 mt-1">{WEDDING_DATA.reception.address}</p>
                    </div>

                    <div className="flex items-center justify-center gap-8 py-4 border-t border-b border-gray-100">
                       <div className="text-center">
                          <p className="text-wedding-red font-bold text-2xl">{WEDDING_DATA.reception.time}</p>
                          <p className="text-xs text-gray-500 uppercase">Đón khách</p>
                       </div>
                       <div className="text-center">
                          <p className="text-wedding-red font-bold text-2xl">{WEDDING_DATA.reception.displayDate}</p>
                          <p className="text-xs text-gray-500 uppercase">Thứ Bảy</p>
                       </div>
                    </div>

                    <a 
                      href={WEDDING_DATA.reception.mapUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-wedding-red text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-red-700 transition shadow-lg uppercase tracking-wide"
                    >
                      <MapPin size={16} /> Xem bản đồ
                    </a>
                </div>
            </motion.div>

         </motion.div>
      </section>

      <footer className="bg-black text-white py-8 text-center text-xs font-sans tracking-widest opacity-80">
        <p>MADE WITH ❤️ FOR QUANG VINH & XUÂN ÁNH</p>
      </footer>
    </motion.div>
  );
};