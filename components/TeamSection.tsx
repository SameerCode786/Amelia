
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Instagram, Linkedin } from 'lucide-react';
import { TeamMember } from '../types';

const team: TeamMember[] = [
  { id: '1', name: 'Amelia Breslin', role: 'Principal Realtor', verified: true, image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop' },
  { id: '2', name: 'James William', role: 'Listing Coordinator', verified: true, image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop' },
  { id: '3', name: 'Sarah Holder', role: 'Main Line Expert', verified: true, image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop' },
  { id: '4', name: 'Marcus Chen', role: 'Negotiation Specialist', verified: true, image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop' },
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
           <div>
              <h2 className="serif text-5xl text-[#001F3F] mb-4">Meet Our Team of Local Experts</h2>
              <p className="text-gray-500 max-w-xl">The William Holder Realty Team brings together the brightest minds in Main Line real estate.</p>
           </div>
           <button className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:text-[#001F3F] transition-colors">Join The Team</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="relative h-80 rounded overflow-hidden mb-6">
                 <img src={member.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={member.name} />
                 <div className="absolute inset-0 bg-[#001F3F]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="flex justify-between items-start">
                 <div>
                    <h4 className="serif text-xl text-[#001F3F] flex items-center">
                      {member.name}
                      {member.verified && <CheckCircle size={14} className="text-[#D4AF37] ml-2" />}
                    </h4>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mt-1 font-semibold">{member.role}</p>
                 </div>
                 <div className="flex space-x-2">
                    <Linkedin size={16} className="text-gray-300 hover:text-[#D4AF37] cursor-pointer" />
                    <Instagram size={16} className="text-gray-300 hover:text-[#D4AF37] cursor-pointer" />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
