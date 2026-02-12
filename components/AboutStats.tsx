
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Properties Sold', value: '63,000+' },
  { label: 'Happy Clients', value: '2,800+' },
  { label: 'Market Valuation', value: '4.9B+' },
  { label: 'Years Exp.', value: '18+' },
];

const AboutStats: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#001F3F] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 border-t border-l border-[#D4AF37] opacity-50 hidden md:block"></div>
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
              alt="Amelia Breslin - Principal Realtor" 
              className="w-full aspect-[4/5] object-cover rounded-sm relative z-10"
            />
            <div className="absolute -bottom-10 -right-10 bg-[#D4AF37] p-10 z-20 hidden lg:block">
               <p className="serif text-2xl leading-tight">"A home isn't just a place, it's a legacy."</p>
               <p className="mt-4 uppercase tracking-widest text-xs">- Amelia Breslin</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#D4AF37] font-semibold tracking-widest uppercase text-xs mb-4 block">Trusted Expertise Worldwide</span>
            <h2 className="serif text-4xl md:text-6xl mb-8 leading-tight">Built on Radnor Knowledge, Driven by Global Standards.</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Combining local Radnor knowledge with international business experience to drive success in the Philadelphia Main Line suburbs. Amelia offers a bespoke concierge service that treats every property as a premier asset.
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-12">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <h4 className="serif text-4xl md:text-5xl text-[#D4AF37] mb-2">{stat.value}</h4>
                  <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">{stat.label}</p>
                </div>
              ))}
            </div>

            <button className="mt-16 bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all duration-500 px-12 py-4 rounded-sm uppercase tracking-widest text-xs font-bold">
               Meet The Team
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
