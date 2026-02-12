
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop" 
          alt="Luxury Mansion Background" 
          className="w-full h-full object-cover opacity-60 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001F3F]/40 via-transparent to-[#001F3F]"></div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-[#D4AF37] font-semibold tracking-[0.5em] uppercase text-xs mb-6 block">Philadelphia Main Line Specialist</span>
          <h1 className="serif text-5xl md:text-8xl text-white mb-6 leading-tight">
            Turning Expired <br />
            <span className="italic">Listings Into Sold.</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Your Premier Radnor Specialist. Expert negotiation meets local heart to deliver results beyond expectations.
          </p>
        </motion.div>

        {/* Premium Search Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full max-w-4xl bg-white/10 backdrop-blur-md p-2 rounded-lg flex flex-col md:flex-row shadow-2xl border border-white/20"
        >
          <div className="flex-1 flex items-center px-6 py-4 border-b md:border-b-0 md:border-r border-white/20">
            <Search className="text-[#D4AF37] mr-4" size={20} />
            <input 
              type="text" 
              placeholder="Search by neighborhood, street, or ZIP..." 
              className="bg-transparent border-none text-white placeholder-white/60 w-full focus:ring-0 text-sm"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-6 py-4">
             <select className="bg-transparent text-white border-none text-sm focus:ring-0 focus:outline-none">
               <option className="bg-[#001F3F]">Property Type</option>
             </select>
             <select className="bg-transparent text-white border-none text-sm focus:ring-0 focus:outline-none">
               <option className="bg-[#001F3F]">Beds / Baths</option>
             </select>
             <button className="col-span-2 md:col-span-1 bg-[#D4AF37] text-white py-3 rounded px-8 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#001F3F] transition-all duration-300">
               Search
             </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center opacity-50"
      >
        <span className="text-[10px] uppercase tracking-widest mb-2">Scroll to explore</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;
