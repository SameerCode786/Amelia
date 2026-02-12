
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

const MapSection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl bg-gray-100"
          >
            {/* Visual placeholder for high-end neighborhood street view - Replaced with a more vibrant, reliable image */}
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop" 
              alt="Radnor Neighborhood" 
              className="w-full h-full object-cover brightness-90 transition-transform duration-[2000ms] hover:scale-105"
            />
            {/* Subtle overlay to help the UI elements pop without washing out the image */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F]/40 to-transparent"></div>
            
            {/* Pulsing Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
               <div className="relative">
                 <div className="absolute inset-0 bg-[#D4AF37] rounded-full scale-150 animate-ping opacity-40"></div>
                 <div className="relative bg-[#001F3F] p-4 rounded-full border-4 border-white text-[#D4AF37] shadow-2xl">
                   <MapPin size={24} fill="currentColor" fillOpacity={0.2} />
                 </div>
               </div>
            </div>

            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded shadow-2xl border-l-4 border-[#D4AF37]">
               <div className="flex justify-between items-center">
                 <div>
                   <h4 className="serif text-xl text-[#001F3F] font-bold">Radnor Township</h4>
                   <p className="text-gray-600 text-xs font-medium">A vibrant hub of historical charm & luxury.</p>
                 </div>
                 <button className="bg-[#D4AF37] hover:bg-[#001F3F] text-white p-3 rounded-full transition-colors duration-300 shadow-lg">
                    <Navigation size={18} />
                 </button>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="text-[#D4AF37] font-semibold tracking-widest uppercase text-xs">Local Neighborhoods</span>
            <h2 className="serif text-5xl text-[#001F3F] leading-tight font-bold">Find Your Perfect <br /> Neighborhood.</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Amelia's deep-rooted connection to the Main Line ensures you find not just a house, but a community that reflects your aspirations.
            </p>

            <div className="space-y-4 pt-4">
              {['Radnor', 'Wayne', 'Villanova', 'Bryn Mawr', 'Haverford'].map((area, i) => (
                <motion.div 
                  key={area} 
                  whileHover={{ x: 10 }}
                  className="group flex justify-between items-center py-5 border-b border-gray-100 hover:border-[#D4AF37] transition-all cursor-pointer"
                >
                  <span className="serif text-2xl text-[#001F3F] group-hover:text-[#D4AF37] transition-colors">{area}</span>
                  <span className="text-xs text-gray-400 group-hover:text-[#001F3F] uppercase tracking-widest font-bold flex items-center">
                    Explore Area <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
