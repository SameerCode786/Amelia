
import React from 'react';
import { motion } from 'framer-motion';

const styles = [
  { name: 'Apartment', count: '12 Listings', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop' },
  { name: 'Villa', count: '8 Listings', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop' },
  { name: 'Townhouse', count: '5 Listings', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop' },
  { name: 'Penthouse', count: '3 Listings', image: 'https://images.unsplash.com/photo-1512918766775-7313012891d6?q=80&w=800&auto=format&fit=crop' },
];

const StyleExplorer: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="serif text-4xl md:text-5xl text-[#001F3F] mb-4">Explore Home Styles</h2>
            <p className="text-gray-500 max-w-lg">Find the perfect architectural match for your lifestyle in the heart of the Main Line.</p>
          </motion.div>
          <a href="#" className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] border-b border-[#D4AF37] pb-1 hover:text-[#001F3F] hover:border-[#001F3F] transition-colors">View All Categories</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {styles.map((style, index) => (
            <motion.div
              key={style.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[250px] overflow-hidden mb-4 rounded-sm">
                <img 
                  src={style.image} 
                  alt={style.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
              </div>
              <h3 className="serif text-xl text-[#001F3F] font-semibold">{style.name}</h3>
              <p className="text-[#D4AF37] text-xs uppercase tracking-widest font-medium">{style.count}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StyleExplorer;
