import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles, Home, Heart, ChevronDown } from 'lucide-react';
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
      className="min-h-screen overflow-x-hidden w-full"
      style={{ 
        margin: 0, 
        padding: 0,
        background: 'linear-gradient(135deg, #e0f2f7 0%, #b3e5f0 50%, #e0f2f7 100%)'
      }}
    >
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center p-6 text-center">
         {/* Floral Corners */}
         <div className="absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-floral-pattern bg-contain bg-no-repeat opacity-80 rotate-180"></div>
         <div className="absolute bottom-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-floral-pattern bg-contain bg-no-repeat opacity-80"></div>

         <motion.div variants={itemVariants} className="z-10 w-full max-w-4xl mx-auto px-4 flex flex-col items-center">
           <motion.h1
             variants={titleVariants}
             className="font-script text-wedding-red mb-6 drop-shadow-sm flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4"
           >
             <motion.span variants={slideInLeft} className="text-4xl sm:text-5xl md:text-8xl">{WEDDING_DATA.groom}</motion.span>
             <motion.div variants={itemVariants} className="flex items-center justify-center">
               <Heart className="text-wedding-red fill-wedding-red w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16" />
             </motion.div>
             <motion.span variants={slideInRight} className="text-4xl sm:text-5xl md:text-8xl">{WEDDING_DATA.bride}</motion.span>
           </motion.h1>
           <motion.div
             variants={itemVariants}
             className="flex items-center justify-center gap-2 sm:gap-4 text-gray-700 font-serif my-8"
           >
              <span className="border-t border-wedding-red w-8 sm:w-12 md:w-24"></span>
              <span className="text-sm sm:text-base md:text-xl italic text-center">{WEDDING_DATA.reception.fullDate}</span>
              <span className="border-t border-wedding-red w-8 sm:w-12 md:w-24"></span>
           </motion.div>
           <motion.p
             variants={itemVariants}
             className="font-sans text-sm sm:text-base text-gray-600 max-w-lg mx-auto leading-relaxed italic px-4"
           >
             "{WEDDING_DATA.poem}"
           </motion.p>
         </motion.div>
         
         <motion.div variants={itemVariants} className="absolute bottom-10 animate-bounce">
            <ChevronDown className="text-wedding-red w-8 h-8 opacity-40" />
         </motion.div>
      </section>

      {/* Arrow Divider */}
      <div className="flex justify-center -mt-10 mb-10 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="animate-bounce"
        >
          <ChevronDown className="text-wedding-gold w-10 h-10 opacity-50" />
        </motion.div>
      </div>

      {/* Couple & Parents Section */}
      <section className="py-20 px-6" style={{ backgroundColor: 'rgba(176, 224, 230, 0.3)' }}>
        <motion.div 
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-center font-serif text-2xl sm:text-3xl text-wedding-red mb-12 uppercase tracking-wider sm:tracking-widest px-4"
          >
            Gia Đình Hai Bên
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-0 items-stretch relative">
              {/* Vertical divider */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-wedding-gold/20 -translate-x-1/2"></div>
              
              {/* Groom's Side */}
              <motion.div variants={slideInLeft} className="text-center md:text-right border-b md:border-b-0 pb-8 md:pb-0 md:pr-12 px-4">
                 <h3 className="font-script text-3xl sm:text-4xl text-wedding-red mb-6">{WEDDING_DATA.groom}</h3>
                 <div className="font-serif text-gray-700 mt-4 space-y-1 text-sm sm:text-base">
                    <p className="text-xs font-bold uppercase text-wedding-gold tracking-widest mb-2">Nhà Trai</p>
                    <p className="break-words">Ông: <span className="font-semibold">{WEDDING_DATA.parents.groom.father}</span></p>
                    <p className="break-words">Bà: <span className="font-semibold">{WEDDING_DATA.parents.groom.mother}</span></p>
                 </div>
              </motion.div>

              {/* Bride's Side */}
              <motion.div variants={slideInRight} className="text-center md:text-left pt-8 md:pt-0 md:pl-12 px-4">
                 <h3 className="font-script text-3xl sm:text-4xl text-wedding-red mb-6">{WEDDING_DATA.bride}</h3>
                 <div className="font-serif text-gray-700 mt-4 space-y-1 text-sm sm:text-base">
                    <p className="text-xs font-bold uppercase text-wedding-gold tracking-widest mb-2">Nhà Gái</p>
                    <p className="break-words">Ông: <span className="font-semibold">{WEDDING_DATA.parents.bride.father}</span></p>
                    <p className="break-words">Bà: <span className="font-semibold">{WEDDING_DATA.parents.bride.mother}</span></p>
                 </div>
              </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Arrow Divider */}
      <div className="flex justify-center py-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="animate-bounce"
        >
          <ChevronDown className="text-wedding-gold w-10 h-10 opacity-50" />
        </motion.div>
      </div>

      {/* Events Details */}
      <section className="py-20 px-6 relative">
         <motion.div 
           className="max-w-4xl mx-auto space-y-12"
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.2 }}
           variants={containerVariants}
         >
            
            {/* Lễ Vu Quy - Tư Gia */}
            <motion.div
              variants={itemVariants}
              className="shadow-xl rounded-sm text-center relative z-10"
              style={{ backgroundColor: '#fefefe', padding: '2rem', border: '2px solid #60a5fa' }}
            >
                <div className="flex items-center justify-center mb-6">
                   <Home className="text-wedding-gold w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-wedding-red mb-2 uppercase font-bold">Lễ Vu Quy</h3>
                <p className="text-sm sm:text-base text-gray-500 italic mb-6">Được cử hành tại Tư Gia</p>

                <div className="flex flex-col items-center gap-4 font-sans">
                    <div className="flex flex-col items-center">
                        <span className="text-wedding-red font-bold text-xl sm:text-2xl">{WEDDING_DATA.ceremony.time}</span>
                        <span className="text-xs text-gray-500 uppercase">Giờ</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-wedding-gold font-bold text-base sm:text-lg">Thứ Bảy</span>
                        <span className="text-xs text-gray-500 uppercase">Ngày trong tuần</span>
                    </div>
                    <div className="flex flex-col items-center px-4">
                        <span className="text-red-600 font-bold text-base sm:text-lg">{WEDDING_DATA.ceremony.displayDate}</span>
                        <span className="text-xs text-gray-500 uppercase">Ngày</span>
                    </div>
                    <div className="flex flex-col items-center px-4 mt-2">
                        <span className="font-bold text-center text-sm sm:text-base break-words max-w-full text-wedding-red">{WEDDING_DATA.ceremony.address}</span>
                        <span className="text-xs text-gray-500 uppercase mt-1">Địa chỉ</span>
                    </div>
                </div>
            </motion.div>

            {/* Lễ Thành Hôn - Tiệc Cưới */}
            <motion.div
              variants={itemVariants}
              className="shadow-2xl rounded-sm text-center relative z-10 transform md:scale-105"
              style={{ backgroundColor: '#fefefe', padding: '2rem', border: '2px solid #60a5fa' }}
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-wedding-red text-white px-3 sm:px-4 py-1 text-xs sm:text-sm font-bold uppercase tracking-wider rounded shadow-lg">
                  Sự kiện chính
                </div>
                <div className="flex items-center justify-center mb-6 mt-4">
                   <Sparkles className="text-wedding-gold w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-wedding-red mb-2 uppercase font-bold">Lễ Thành Hôn</h3>
                <p className="text-sm sm:text-base text-gray-500 italic mb-8 px-4">Kính mời quý khách tới tham dự bữa tiệc thân mật</p>

                <div className="space-y-6">
                    <div className="px-4">
                      <h4 className="text-lg sm:text-xl font-bold text-wedding-red break-words">{WEDDING_DATA.reception.venue}</h4>
                      <p className="text-sm sm:text-base text-gray-600 mt-1 break-words">{WEDDING_DATA.reception.address}</p>
                    </div>

                    <div className="flex flex-col items-center gap-4 py-4 border-t border-b border-gray-100">
                       <div className="text-center">
                          <p className="text-wedding-red font-bold text-2xl sm:text-3xl">{WEDDING_DATA.reception.time}</p>
                          <p className="text-xs text-gray-500 uppercase">Giờ đón khách</p>
                       </div>
                       <div className="text-center">
                          <p className="text-wedding-gold font-bold text-xl sm:text-2xl">Thứ Bảy</p>
                          <p className="text-xs text-gray-500 uppercase">Ngày trong tuần</p>
                       </div>
                       <div className="text-center">
                          <p className="text-red-600 font-bold text-xl sm:text-2xl">{WEDDING_DATA.reception.displayDate}</p>
                          <p className="text-xs text-gray-500 uppercase">Ngày</p>
                       </div>
                    </div>

                    <a
                      href={WEDDING_DATA.reception.mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-wedding-red text-white px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-bold hover:bg-red-700 transition shadow-lg uppercase tracking-wide"
                    >
                      <MapPin size={16} /> Xem bản đồ
                    </a>
                </div>
            </motion.div>

         </motion.div>
      </section>

      <footer className="bg-black text-white py-8 text-center text-xs font-sans tracking-widest opacity-80 px-4">
        <p className="break-words">MADE WITH ❤️ FOR QUANG VINH & XUÂN ÁNH</p>
      </footer>
    </motion.div>
  );
};