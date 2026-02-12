
import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { id: 1, title: 'Modern Living', size: 'lg', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop' },
  { id: 2, title: 'Exclusive Villa', size: 'sm', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600&auto=format&fit=crop' },
  { id: 3, title: 'New Reveal', size: 'sm', image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=600&auto=format&fit=crop' },
  { id: 4, title: 'Urban Elegance', size: 'md', image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop' },
  { id: 5, title: 'Penthouse View', size: 'md', image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=800&auto=format&fit=crop' },
];

const PropertyHighlights: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
             <h2 className="serif text-4xl md:text-5xl text-[#001F3F] mb-6">Exclusive Property Highlights</h2>
             <p className="text-gray-500">Discover handpicked estates that define the luxury market in the Main Line. From modern masterpieces to historic renovations.</p>
          </div>
          <button className="mt-8 md:mt-0 bg-[#001F3F] text-white px-10 py-4 text-xs uppercase tracking-widest hover:bg-[#D4AF37] transition-all duration-300">
            View All Showcase
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[800px]">
          {/* Main Large Item */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 relative group overflow-hidden"
          >
            <img src={items[0].image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
               <h3 className="serif text-3xl text-white mb-2">{items[0].title}</h3>
               <p className="text-[#D4AF37] uppercase tracking-widest text-xs">Featured Property</p>
            </div>
          </motion.div>

          {/* Grid items */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1 relative group overflow-hidden"
          >
            <img src={items[1].image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
               <h3 className="serif text-white text-xl">{items[1].title}</h3>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="md:col-span-1 relative group overflow-hidden"
          >
            <img src={items[2].image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
               <h3 className="serif text-white text-xl">{items[2].title}</h3>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="md:col-span-2 relative group overflow-hidden"
          >
            <img src={items[3].image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
               <h3 className="serif text-white text-xl">{items[3].title}</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PropertyHighlights;
