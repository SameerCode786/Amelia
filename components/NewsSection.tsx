
import React from 'react';
import { motion } from 'framer-motion';

const articles = [
  { id: 1, title: 'The Main Line Q3 Market Report', tag: 'Market Insights', image: 'https://images.unsplash.com/photo-1460317442991-0ec239f636a3?q=80&w=600&auto=format&fit=crop', date: 'Oct 12, 2023' },
  { id: 2, title: 'Restoring Historic Estates in Wayne', tag: 'Architecture', image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=600&auto=format&fit=crop', date: 'Sep 28, 2023' },
  { id: 3, title: 'Why Radnor School District Drives Value', tag: 'Local Living', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop', date: 'Sep 15, 2023' },
  { id: 4, title: 'Investment Strategies for 2024', tag: 'Financial', image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=600&auto=format&fit=crop', date: 'Aug 30, 2023' },
];

const NewsSection: React.FC = () => {
  return (
    <section id="news" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <h2 className="serif text-5xl text-[#001F3F]">Insights & Real Estate News</h2>
          <button className="text-xs font-bold uppercase tracking-widest border-b border-[#001F3F] pb-1">View All Posts</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((art, i) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden mb-6 rounded-sm shadow-md">
                 <img src={art.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={art.title} />
                 <div className="absolute top-4 left-4 bg-[#D4AF37] text-white px-2 py-1 text-[8px] uppercase font-bold tracking-[0.2em]">{art.tag}</div>
              </div>
              <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mb-2">{art.date}</p>
              <h4 className="serif text-xl text-[#001F3F] group-hover:text-[#D4AF37] transition-colors leading-tight">{art.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
