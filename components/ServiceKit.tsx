
import React from 'react';
import { motion } from 'framer-motion';
import { Key, TrendingUp, Search, Home, DollarSign, Users, Briefcase, FileText } from 'lucide-react';

const services = [
  { icon: <Key />, title: 'Luxury Buying', desc: 'Curated access to off-market estates.' },
  { icon: <TrendingUp />, title: 'Strategic Selling', desc: 'Data-driven marketing for premium prices.' },
  { icon: <Search />, title: 'Market Valuation', desc: 'Precision appraisal for Main Line assets.' },
  { icon: <Home />, title: 'Property Mgmt', desc: 'Seamless management for your investments.' },
  { icon: <DollarSign />, title: 'Mortgage Support', desc: 'Direct links to premier local lenders.' },
  { icon: <Users />, title: 'Local Concierge', desc: 'Exclusive access to premium vendors.' },
  { icon: <Briefcase />, title: 'Relocation Experts', desc: 'International standard moving services.' },
  { icon: <FileText />, title: 'Contract Logic', desc: 'Expert legal and paperwork handling.' },
];

const ServiceKit: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#001F3F] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="serif text-5xl mb-6">Your Complete Real Estate Toolkit</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Every service needed to navigate the premium property market with absolute confidence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-white/10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
              className="bg-[#001F3F] p-10 flex flex-col items-center text-center group cursor-pointer border border-white/5"
            >
              <div className="text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform duration-500">
                {React.cloneElement(s.icon as React.ReactElement, { size: 40 })}
              </div>
              <h4 className="serif text-2xl mb-4 text-white group-hover:text-[#D4AF37] transition-colors">{s.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceKit;
