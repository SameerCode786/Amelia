
import React from 'react';
import { motion } from 'framer-motion';

const LeadFormSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#001F3F] rounded-lg overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 lg:p-20 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <h2 className="serif text-4xl md:text-5xl text-white mb-8 leading-tight">Create Custom Capture Forms & Manage Leads With Amelia.</h2>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
                   Our integrated client portal offers real-time notifications, market insights, and a seamless communication channel between you and Amelia's expert team.
                </p>
                
                <ul className="space-y-4">
                  {['Instant Listing Alerts', 'Private Market Reports', 'Concierge Transaction Support'].map(item => (
                    <li key={item} className="flex items-center text-white/80 text-sm tracking-wide">
                      <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-4"></span>
                      {item}
                    </li>
                  ))}
                </ul>
             </motion.div>
          </div>

          <div className="lg:w-1/2 bg-white p-12 lg:p-20">
             <form className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">First Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 p-4 focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">Last Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 p-4 focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition-all" placeholder="Doe" />
                  </div>
               </div>
               <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-gray-50 border border-gray-200 p-4 focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition-all" placeholder="john@example.com" />
               </div>
               <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">Message</label>
                  <textarea className="w-full bg-gray-50 border border-gray-200 p-4 h-32 focus:ring-1 focus:ring-[#D4AF37] focus:outline-none transition-all" placeholder="How can Amelia help you today?"></textarea>
               </div>
               <button className="w-full bg-[#001F3F] text-white py-5 rounded-sm uppercase tracking-[0.2em] font-bold text-sm hover:bg-[#D4AF37] transition-all duration-500 shadow-lg">
                  Submit Inquiry
               </button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadFormSection;
