import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Heart, Camera, PenTool, Sparkles, Home } from 'lucide-react';
import { WEDDING_DATA } from '../types';
import { generateWeddingWish } from '../services/geminiService';

export const InvitationDetails: React.FC = () => {
  const [senderName, setSenderName] = useState('');
  const [relationship, setRelationship] = useState('Friend');
  const [generatedWish, setGeneratedWish] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateWish = async () => {
    if (!senderName) return;
    setIsGenerating(true);
    const wish = await generateWeddingWish(senderName, relationship);
    setGeneratedWish(wish);
    setIsGenerating(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1.5, staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } }
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
           <h2 className="font-serif text-wedding-red uppercase tracking-[0.2em] text-sm md:text-base mb-4">Lễ Thành Hôn</h2>
           <h1 className="font-script text-6xl md:text-8xl text-wedding-red mb-6 drop-shadow-sm">
             {WEDDING_DATA.groom} <span className="text-4xl align-middle text-wedding-gold">&</span> {WEDDING_DATA.bride}
           </h1>
           <div className="flex items-center justify-center gap-4 text-gray-700 font-serif my-8">
              <span className="border-t border-wedding-red w-12 md:w-24"></span>
              <span className="text-lg md:text-xl italic">{WEDDING_DATA.reception.fullDate}</span>
              <span className="border-t border-wedding-red w-12 md:w-24"></span>
           </div>
           <p className="font-sans text-gray-600 max-w-lg mx-auto leading-relaxed italic">
             "{WEDDING_DATA.poem}"
           </p>
         </motion.div>
         
         <motion.div variants={itemVariants} className="absolute bottom-10 animate-bounce">
            <Heart className="text-wedding-red fill-wedding-red w-6 h-6 opacity-60" />
         </motion.div>
      </section>

      {/* Couple & Parents Section */}
      <section className="py-20 px-6 bg-wedding-red/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center font-serif text-3xl text-wedding-red mb-12 uppercase tracking-widest">Gia Đình Hai Bên</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Groom's Side */}
              <motion.div variants={itemVariants} className="text-center md:text-right border-b md:border-b-0 md:border-r border-wedding-gold/20 pb-8 md:pb-0 md:pr-12">
                 <div className="w-56 h-72 mx-auto md:ml-auto bg-gray-300 rounded-t-full relative overflow-hidden shadow-xl border-4 border-white mb-6">
                    <img src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1000&auto=format&fit=crop" alt="Groom" className="w-full h-full object-cover" />
                 </div>
                 <h3 className="font-script text-4xl text-wedding-red">{WEDDING_DATA.groom}</h3>
                 <div className="font-serif text-gray-700 mt-4 space-y-1">
                    <p className="text-xs font-bold uppercase text-wedding-gold tracking-widest mb-2">Nhà Trai</p>
                    <p>Ông: <span className="font-semibold">{WEDDING_DATA.parents.groom.father}</span></p>
                    <p>Bà: <span className="font-semibold">{WEDDING_DATA.parents.groom.mother}</span></p>
                 </div>
              </motion.div>

              {/* Bride's Side */}
              <motion.div variants={itemVariants} className="text-center md:text-left pt-4 md:pt-0 md:pl-12">
                 <div className="w-56 h-72 mx-auto md:mr-auto bg-gray-300 rounded-t-full relative overflow-hidden shadow-xl border-4 border-white mb-6">
                    <img src="https://images.unsplash.com/photo-1623861214309-906d33a69774?q=80&w=1000&auto=format&fit=crop" alt="Bride" className="w-full h-full object-cover" />
                 </div>
                 <h3 className="font-script text-4xl text-wedding-red">{WEDDING_DATA.bride}</h3>
                 <div className="font-serif text-gray-700 mt-4 space-y-1">
                    <p className="text-xs font-bold uppercase text-wedding-gold tracking-widest mb-2">Nhà Gái</p>
                    <p>Ông: <span className="font-semibold">{WEDDING_DATA.parents.bride.father}</span></p>
                    <p>Bà: <span className="font-semibold">{WEDDING_DATA.parents.bride.mother}</span></p>
                 </div>
              </motion.div>
          </div>
        </div>
      </section>

      {/* Events Details */}
      <section className="py-20 px-6 relative">
         <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Lễ Vu Quy */}
            <div className="bg-white p-8 md:p-10 shadow-xl rounded-sm border border-wedding-gold/30 text-center relative z-10">
                <div className="flex items-center justify-center mb-6">
                   <Home className="text-wedding-gold w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-wedding-red mb-2 uppercase">Lễ Vu Quy</h3>
                <p className="text-gray-500 italic mb-6">Được cử hành tại Tư Gia</p>
                
                <div className="grid md:grid-cols-3 gap-6 font-sans text-gray-700">
                    <div className="flex flex-col items-center">
                        <span className="font-bold text-lg">{WEDDING_DATA.ceremony.time}</span>
                        <span className="text-sm text-gray-500">Giờ làm lễ</span>
                    </div>
                    <div className="flex flex-col items-center border-l border-r border-gray-100 px-4">
                        <span className="font-bold text-lg whitespace-nowrap">{WEDDING_DATA.ceremony.displayDate}</span>
                        <span className="text-sm text-gray-500">Thứ Bảy</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="font-bold text-center">{WEDDING_DATA.ceremony.address}</span>
                        <span className="text-sm text-gray-500 mt-1">Địa chỉ</span>
                    </div>
                </div>
            </div>

            {/* Lễ Thành Hôn */}
            <div className="bg-white p-8 md:p-10 shadow-2xl rounded-sm border-2 border-wedding-red/20 text-center relative z-10 transform md:scale-105">
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
            </div>

         </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 px-2 bg-wedding-red">
          <h2 className="font-script text-5xl text-wedding-cream text-center mb-12">Album Hình Cưới</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-6xl mx-auto">
             {[1,2,3,4].map((i) => (
               <div key={i} className="aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                 <img 
                  src={`https://picsum.photos/400/600?random=${i}`} 
                  alt="Gallery" 
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                 />
               </div>
             ))}
          </div>
      </section>

      {/* AI Wishes Section */}
      <section className="py-20 px-6 bg-paper-texture">
        <div className="max-w-xl mx-auto text-center">
           <h2 className="font-serif text-3xl text-wedding-red mb-2">Gửi Lời Chúc</h2>
           <p className="text-gray-500 mb-8 italic text-sm">Cùng Gemini AI viết nên lời chúc ý nghĩa</p>

           <div className="bg-white p-6 rounded-lg shadow-lg border border-wedding-gold/20">
              {!generatedWish ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-left text-xs font-bold text-gray-500 uppercase mb-1">Tên của bạn</label>
                    <input 
                      type="text" 
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full border-b-2 border-wedding-gold/30 p-2 focus:border-wedding-red outline-none bg-transparent"
                      placeholder="Nhập tên..."
                    />
                  </div>
                  <div>
                    <label className="block text-left text-xs font-bold text-gray-500 uppercase mb-1">Quan hệ với cô dâu/chú rể</label>
                    <select 
                      value={relationship}
                      onChange={(e) => setRelationship(e.target.value)}
                      className="w-full border-b-2 border-wedding-gold/30 p-2 focus:border-wedding-red outline-none bg-transparent"
                    >
                      <option value="Bạn bè">Bạn bè</option>
                      <option value="Người thân">Người thân</option>
                      <option value="Đồng nghiệp">Đồng nghiệp</option>
                    </select>
                  </div>
                  
                  <button 
                    onClick={handleGenerateWish}
                    disabled={isGenerating || !senderName}
                    className="w-full bg-wedding-red text-white py-3 rounded-md mt-4 flex items-center justify-center gap-2 hover:bg-red-800 disabled:opacity-50 transition"
                  >
                    {isGenerating ? <Sparkles className="animate-spin" /> : <PenTool size={18} />}
                    {isGenerating ? "Đang viết..." : "Tạo lời chúc với AI"}
                  </button>
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-wedding-cream/30 p-6 rounded border border-wedding-gold border-dashed relative"
                >
                   <Sparkles className="absolute -top-3 -right-3 text-wedding-gold bg-white rounded-full p-1" />
                   <p className="font-script text-2xl text-wedding-red mb-4">"{generatedWish}"</p>
                   <p className="text-right text-sm font-bold text-gray-600">- {senderName}</p>
                   <button 
                    onClick={() => setGeneratedWish('')}
                    className="text-xs text-gray-400 mt-4 underline hover:text-wedding-red"
                   >
                     Viết lại
                   </button>
                </motion.div>
              )}
           </div>
        </div>
      </section>

      <footer className="bg-black text-white py-8 text-center text-xs font-sans tracking-widest opacity-80">
        <p>MADE WITH ❤️ FOR QUANG VINH & XUÂN ÁNH</p>
      </footer>
    </motion.div>
  );
};