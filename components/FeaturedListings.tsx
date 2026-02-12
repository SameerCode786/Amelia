
import React from 'react';
import { motion } from 'framer-motion';
import { BedDouble, Bath, Square, MapPin, ArrowRight } from 'lucide-react';
import { Property } from '../types';

const listings: Property[] = [
  { id: '1', title: 'The Radnor Estate', price: '$2,450,000', beds: 5, baths: 4.5, sqft: 5200, location: 'Radnor, PA', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop' },
  { id: '2', title: 'Wayne Classic Revival', price: '$1,890,000', beds: 4, baths: 3.5, sqft: 3800, location: 'Wayne, PA', image: 'https://images.unsplash.com/photo-1600585154526-990dcea4d4d9?q=80&w=800&auto=format&fit=crop' },
  { id: '3', title: 'Villanova Manor', price: '$4,120,000', beds: 6, baths: 7, sqft: 8400, location: 'Villanova, PA', image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=800&auto=format&fit=crop' },
  { id: '4', title: 'Bryn Mawr Modern', price: '$1,250,000', beds: 3, baths: 2.5, sqft: 2400, location: 'Bryn Mawr, PA', image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=800&auto=format&fit=crop' },
];

const FeaturedListings: React.FC = () => {
  return (
    <section id="listings" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#D4AF37] font-semibold tracking-[0.3em] uppercase text-xs mb-4 block">Curated Collection</span>
          <h2 className="serif text-5xl text-[#001F3F] mb-6">Featured Listings</h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {listings.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white border border-gray-100 hover:shadow-2xl transition-all duration-500 rounded-sm overflow-hidden group"
            >
              <div className="relative h-[240px] overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-[10px] uppercase font-bold tracking-widest text-[#001F3F]">Exclusive</div>
                <div className="absolute bottom-4 left-4 bg-[#001F3F] text-white px-4 py-2 text-sm font-semibold">{item.price}</div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-400 text-[10px] uppercase tracking-widest mb-2 font-semibold">
                  <MapPin size={12} className="mr-1 text-[#D4AF37]" />
                  {item.location}
                </div>
                <h3 className="serif text-xl text-[#001F3F] mb-4 group-hover:text-[#D4AF37] transition-colors">{item.title}</h3>
                
                <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-4 text-gray-500">
                  <div className="flex flex-col items-center">
                    <BedDouble size={16} className="mb-1" />
                    <span className="text-xs">{item.beds} Beds</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Bath size={16} className="mb-1" />
                    <span className="text-xs">{item.baths} Baths</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Square size={16} className="mb-1" />
                    <span className="text-xs">{item.sqft} sqft</span>
                  </div>
                </div>

                <button className="w-full mt-6 py-3 text-xs uppercase tracking-widest font-bold border border-[#001F3F] text-[#001F3F] group-hover:bg-[#001F3F] group-hover:text-white transition-all duration-300 flex items-center justify-center">
                  View Details
                  <ArrowRight size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
